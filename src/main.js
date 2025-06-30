// === src/main.js ===
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as d3 from "d3";

/* ── constants ────────────────────────────────────────────────────────── */
const staticPath = import.meta.env.BASE_URL;
const meshFolder  = "mesh_frames_";
const dwellRadius = 0.034;  // average step distance from centroidA data

const customEdges = [
  ["elephant_Trunk4_bone", "elephant_Snout_bone"],
  ["elephant_Trunk2_bone", "elephant_Trunk4_bone"],
  ["elephant_Snout_bone", "elephant_Head_bone"],
  ["elephant_Head_bone", "elephant_Neck_bone"],
  ["elephant_Neck_bone", "elephant_Spine3_bone"],
  ["elephant_Spine3_bone", "elephant_Spine2_bone"],
  ["elephant_Spine2_bone", "elephant_Pelvis_bone"],
  ["elephant_Pelvis_bone", "elephant_Tail2_bone"],
  ["elephant_Head_bone", "elephant_r_Ear1_bone"],
  ["elephant_r_Ear1_bone", "elephant_r_Ear4_bone"],
  ["elephant_Head_bone", "elephant_l_Ear1_bone"],
  ["elephant_l_Ear1_bone", "elephant_l_Ear4_bone"],
  ["elephant_Neck_bone", "elephant_r_Humerus_bone"],
  ["elephant_Neck_bone", "elephant_l_Humerus_bone"],
  ["elephant_Pelvis_bone", "elephant_r_Femur_bone"],
  ["elephant_Pelvis_bone", "elephant_l_Femur_bone"]
];

/* ── state ─────────────────────────────────────────────────────────────── */
let viewer = null;
let meshRequestVersion = 0;
let dwellThreshold = 10;
let redraw = () => {};
let globalTrackCSV = null;
let behaviors = [];

/* ───────────────── UI + initial dataset load ─────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {

  let overlaySvg = document.getElementById("overlay-line-layer");
  if (!overlaySvg) {
     overlaySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
     overlaySvg.id = "overlay-line-layer";

     overlaySvg.setAttribute("width", "100%");
     overlaySvg.setAttribute("height", "100%");
     
     Object.assign(overlaySvg.style, {
       position        : "absolute",
       inset           : 0,          // top:0; right:0; bottom:0; left:0
       pointerEvents   : "none",
       overflow        : "visible",
       background      : "transparent",  // allow lines to extend outside #viz
       zIndex          : 9998        // just under pop-ups (9999)
     });
     document.body.appendChild(overlaySvg);
   }
    
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter timestamp (e.g. 20250626_094312)";
  input.style = "margin:10px 0;padding:6px;font-size:14px;width:300px";
  document.body.insertBefore(input, document.getElementById("viz"));

  const loadBtn = document.createElement("button");
  loadBtn.textContent = "Load Dataset";
  loadBtn.style = "margin-left:8px;padding:6px 12px";
  input.after(loadBtn);

  // === Frame rate assumption (adjust if needed) ===
  const frameInterval = 0.1; // seconds per frame
  const fps = 1 / frameInterval;

  // Add dwellSlider UI
  const dwellLabel = document.createElement("label");
  dwellLabel.innerHTML = `Dwell Threshold (s): <span id="dwellValue">1.0</span>`;
  dwellLabel.style = "margin-left:20px;margin-right:5px;font-size:14px;";
  input.after(dwellLabel);

  const dwellSlider = document.createElement("input");
  dwellSlider.type = "range";
  dwellSlider.min = 0.5;
  dwellSlider.max = 10;
  dwellSlider.value = 1.0;
  dwellSlider.step = 0.1;
  dwellSlider.style = "vertical-align:middle";
  dwellSlider.disabled = true; // enable after dataset loads
  dwellLabel.appendChild(dwellSlider);

  dwellSlider.oninput = () => {
    const dwellSeconds = +dwellSlider.value;
    document.getElementById("dwellValue").textContent = dwellSeconds.toFixed(1);
    dwellThreshold = Math.round(dwellSeconds * fps); // convert seconds to frame count
    // Call redraw only when it has been assigned
    if (typeof redraw === "function") {
      const step = +document.getElementById("stepSlider").value || 0;
      const skip = +document.getElementById("skeletonSlider").value || 1;
      redraw(step, skip);
    }
  };

  loadBtn.onclick = () => {
    const ts = input.value.trim();
    if (!/^\d{8}_\d{6}$/.test(ts)) return alert("Invalid timestamp format");
    loadDataset(ts);
  };

  // Auto‑load a default dataset
  loadDataset("20250626_094312");
});

/* ───────────────── dataset loader ─────────────────────────────────────── */
function loadDataset(ts) {
  viewer = null;
  d3.select("#viz").selectAll("*").remove();

  Promise.all([
    d3.csv(`${staticPath}skeleton_tracking_${ts}.csv`),
    d3.csv(`${staticPath}centroid_data_${ts}_tracking.csv`),
    d3.csv(`${staticPath}centroid_data_${ts}_collisions.csv`),
    d3.json(`${staticPath}skeleton_hierarchy_${ts}.json`),
    d3.csv(`${staticPath}behaviours.csv`)  // 🆕 Load behavior CSV
  ])
    .then(([skelCSV, trackCSV, collCSV, hierarchy, behaviorCSV]) => {
      globalTrackCSV = trackCSV;

      // 🧠 Store behaviors (assuming name in column 2, description in column 3)
      behaviors = behaviorCSV.map(d => ({
        name: d[Object.keys(d)[1]],
        description: d[Object.keys(d)[2]]
      }));

      init(skelCSV, trackCSV, collCSV, hierarchy, ts);
    })
    .catch(err => {
      alert("Failed to load data (see console)");
      console.error(err);
    });
}

function pointToSegmentDistance(px, pz, x1, z1, x2, z2) {
  const dx = x2 - x1, dz = z2 - z1;
  if (dx === 0 && dz === 0) return Math.hypot(px - x1, pz - z1);
  const t = ((px - x1) * dx + (pz - z1) * dz) / (dx * dx + dz * dz);
  const clamped = Math.max(0, Math.min(1, t));
  const cx = x1 + clamped * dx;
  const cz = z1 + clamped * dz;
  return Math.hypot(px - cx, pz - cz);
}

/* ───────────────── main 2‑D + 3‑D initialisation ────────────────────── */
function init(skelCSV, trackCSV, collCSV, hierarchy, ts) {
  /* Enable dwell slider now that data is ready */
  document.querySelector("input[type=range][disabled]")?.removeAttribute("disabled");

  /* 2‑D basics --------------------------------------------------------- */
  const edges3D = hierarchy.keys
    .map((child, i) => [hierarchy.values[i], child])
    .filter(([p]) => p && p !== "null");

  const W = 1000, H = 1000;
  const scale = d3.scaleLinear().domain([-10, 10]).range([0, W]);
  const svg = d3.select("#viz").attr("width", W).attr("height", H);

  // Layer creation (bottom to top)
  svg.append("g").attr("id", "layer-static-boxes");
  svg.append("g").attr("id", "layer-gray-skeletons");
  svg.append("g").attr("id", "layer-blue-skeletons");
  svg.append("g").attr("id", "layer-dwell-circles");
  svg.append("g").attr("id", "layer-mesh");
  svg.append("g").attr("id", "layer-hull-lines");

  /* static rectangles (obstacles) ------------------------------------- */
  const firstTrack = d3.group(trackCSV, d => d.time).get(trackCSV[0].time);
  const rects3D = firstTrack.map(r => ({
    x0: +r.boundsB_min_world_x,
    x1: +r.boundsB_max_world_x,
    z0: +r.boundsB_min_world_z,
    z1: +r.boundsB_max_world_z,
    height: +r.boundsB_max_world_y || 0.01
  }));
  const rectLayer = svg.select("#layer-static-boxes");
  rectLayer.selectAll("*").remove();
  rects3D.forEach(({ x0, x1, z0, z1 }) => {
    rectLayer.append("rect")
      .attr("x", scale(x0)).attr("y", scale(z0))
      .attr("width", scale(x1) - scale(x0))
      .attr("height", scale(z1) - scale(z0))
      .attr("fill", "pink");
      // .attr("stroke", "gray")
      // .attr("stroke-width", 1.5);
  });

  /* frame organisation ------------------------------------------------- */
  const frames = d3.group(skelCSV, d => d.time);
  const times = [...frames.keys()].sort((a, b) => +a - +b);
  const valid = [...new Set(collCSV.map(d => d.collision_time))].filter(t => {
    const row = frames.get(t)?.[0];
    if (!row) return false;
    const pts = hierarchy.keys.map(b => {
      const x = row[`${b}_x`], z = row[`${b}_z`];
      return x && z ? [+x, +z] : null;
    }).filter(Boolean);
    return pts.length >= 3 && d3.polygonHull(pts);
  });

  /* slider hooks ------------------------------------------------------- */
  const hullSlider = document.getElementById("stepSlider");
  const skipSlider = document.getElementById("skeletonSlider");
  const hullVal = document.getElementById("stepValue");
  const skipVal = document.getElementById("skeletonValue");

  hullSlider.max = valid.length - 1;
  hullSlider.oninput = skipSlider.oninput = () => {
    hullVal.textContent = hullSlider.value;
    skipVal.textContent = skipSlider.value;
    redraw(+hullSlider.value, +skipSlider.value);
  };

  function draw(idx, skip) {
    svg.selectAll("path,line,circle").remove();

    // ---------- 0. Compute dwell zones ----------
    const dwellZones = (() => {
      const zones = [];
      const points = trackCSV.map(d => ({
        x: +d.centroidA_x,
        z: +d.centroidA_z,
        t: d.time
      })).filter(p => isFinite(p.x) && isFinite(p.z));

      const used = new Set();
      for (let i = 0; i < points.length; i++) {
        const { x: xi, z: zi, t: ti } = points[i];
        if (used.has(ti)) continue;

        const group = points.filter(({ x, z, t }) =>
          Math.hypot(x - xi, z - zi) <= dwellRadius && !used.has(t)
        );
        if (group.length < dwellThreshold) continue;
        group.forEach(({ t }) => used.add(t));

        const jointPositions = [];
        for (const { t } of group) {
          const row = skelCSV.find(d => d.time === t);
          if (!row) continue;
          hierarchy.keys.forEach(b => {
            const x = +row[`${b}_x`], z = +row[`${b}_z`];
            if (isFinite(x) && isFinite(z)) jointPositions.push([x, z]);
          });
        }

        const centroid = [
          d3.mean(jointPositions, p => p[0]),
          d3.mean(jointPositions, p => p[1])
        ];
        const radius = d3.max(jointPositions, ([x, z]) =>
          Math.hypot(x - centroid[0], z - centroid[1])
        );

        zones.push({ centroid, radius });
      }
      return zones;
    })();

    // ---------- 1. Gray Skeletons ----------
    for (let i = 0; i < times.length; i += skip) {
      const row = frames.get(times[i])?.[0];
      if (!row) continue;
      const p = {};
      customEdges.flat().forEach(b => {
        if (row[`${b}_x`]) p[b] = [+row[`${b}_x`], +row[`${b}_z`]];
      });
      const jointsInside = Object.values(p).filter(([x, z]) =>
        dwellZones.some(({ centroid: [cx, cz], radius }) =>
          Math.hypot(x - cx, z - cz) <= radius
        )
      ).length;

      const inDwell = jointsInside >= 15;  // or any threshold you want
      if (inDwell) continue;
      customEdges.forEach(([a, b]) => {
        if (p[a] && p[b]) {
          svg.select("#layer-gray-skeletons").append("line")
            .attr("x1", scale(p[a][0])).attr("y1", scale(p[a][1]))
            .attr("x2", scale(p[b][0])).attr("y2", scale(p[b][1]))
            .attr("stroke", "lightpink").attr("stroke-width", 1)
            .lower();
        }
      });
    }

    // ---------- 2. Blue Skeletons ----------
    for (let i = 0; i < times.length; i += skip) {
      const row = frames.get(times[i])?.[0];
      if (!row) continue;
      const p = {};
      customEdges.flat().forEach(b => {
        if (row[`${b}_x`]) p[b] = [+row[`${b}_x`], +row[`${b}_z`]];
      });
      const jointsInside = Object.values(p).filter(([x, z]) =>
        dwellZones.some(({ centroid: [cx, cz], radius }) =>
          Math.hypot(x - cx, z - cz) <= radius
        )
      ).length;

      const inDwell = jointsInside >= 10;  // or any threshold you want
      if (!inDwell) continue;
      customEdges.forEach(([a, b]) => {
        if (p[a] && p[b]) {
          svg.select("#layer-blue-skeletons").append("line")
            .attr("x1", scale(p[a][0])).attr("y1", scale(p[a][1]))
            .attr("x2", scale(p[b][0])).attr("y2", scale(p[b][1]))
            .attr("stroke", "purple").attr("stroke-width", 1);
        }
      });
    }

        // ---------- 3. Dwell Circles with Floating, Draggable Popups ----------
    const activePopups = [];  // Track open popups + lines

    function boxesOverlap(r1, r2) {
      return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
    }

    function resolveInitialPosition(el, pad = 10) {
      let tries = 0;
      while (tries++ < 100) {
        const rect = el.getBoundingClientRect();
        const clash = activePopups.find(p => boxesOverlap(rect, p.div.getBoundingClientRect()));
        if (!clash) return;
        el.style.left = `${rect.left + 40}px`;
        el.style.top = `${rect.top + 40}px`;
      }
    }
    
    function clampPopupToViz(popup) {
      const vizBox = document.getElementById("viz").getBoundingClientRect();
      const popupRect = popup.getBoundingClientRect();

      const minLeft = vizBox.left;
      const maxLeft = vizBox.right - popupRect.width;
      const minTop  = vizBox.top;
      const maxTop  = vizBox.bottom - popupRect.height;

      let clampedLeft = Math.min(Math.max(popupRect.left, minLeft), maxLeft);
      let clampedTop  = Math.min(Math.max(popupRect.top,  minTop),  maxTop);

      popup.style.left = `${clampedLeft}px`;
      popup.style.top  = `${clampedTop}px`;
    }

    function resolveAllCollisions(moved, pad = 10) {
      let iterations = 0;
      let changed = true;

      while (changed && iterations++ < 100) {
        changed = false;
        const aRect = moved.getBoundingClientRect();

        for (const p of activePopups) {
          if (p.div === moved) continue;

          const bRect = p.div.getBoundingClientRect();
          if (!boxesOverlap(aRect, bRect)) continue;

          // Compute minimum push distance (horizontal or vertical)
          const dxLeft   = aRect.left - bRect.right  - pad;
          const dxRight  = aRect.right - bRect.left  + pad;
          const dyTop    = aRect.top - bRect.bottom  - pad;
          const dyBottom = aRect.bottom - bRect.top  + pad;

          const absX = Math.abs(dxLeft) < Math.abs(dxRight) ? dxLeft : dxRight;
          const absY = Math.abs(dyTop)  < Math.abs(dyBottom) ? dyTop : dyBottom;

          if (Math.abs(absX) < Math.abs(absY)) {
            // push horizontally
            p.div.style.left = `${p.div.offsetLeft + absX}px`;
          } else {
            // push vertically
            p.div.style.top = `${p.div.offsetTop + absY}px`;
          }

          changed = true;
          requestAnimationFrame(p.updateLine);
        }
      }
    }


    dwellZones.forEach(({ centroid: [cx, cz], radius }) => {
      const behavior = behaviors.length
        ? behaviors[Math.floor(Math.random() * behaviors.length)]
        : { name: "Unknown", description: "No behavior data loaded." };

      svg.select("#layer-dwell-circles")
        .append("circle")
        .attr("cx", scale(cx))
        .attr("cy", scale(cz))
        .attr("r", scale(cx + radius) - scale(cx))
        .attr("fill", "orange")
        .attr("fill-opacity", 0.12)
        .style("cursor", "pointer")
        .on("click", function () {

          const circBox  = this.getBoundingClientRect();
          const cxScreen = circBox.x + circBox.width * 0.5;
          const cyScreen = circBox.y + circBox.height * 0.5;

          const popup = document.createElement("div");
          popup.className = "dwell-popup";
          popup.innerHTML = `<b>${behavior.name}</b><br>${behavior.description}`;
          document.body.appendChild(popup);

          // Estimate size and initial position
          let popupWidth  = 260;
          let popupHeight = 80;
          let popupLeft   = cxScreen + 80;
          let popupTop    = cyScreen - popupHeight / 2;

          const popupCenterX = popupLeft + popupWidth / 2;
          const popupCenterY = popupTop  + popupHeight / 2;
          const distX = popupCenterX - cxScreen;
          const distY = popupCenterY - cyScreen;
          const dist  = Math.hypot(distX, distY);

          if (dist < 90) {
            popupLeft = cxScreen - 80 - popupWidth;
          }

          Object.assign(popup.style, {
            position    : "absolute",
            left        : `${popupLeft}px`,
            top         : `${popupTop}px`,
            maxWidth    : "300px",
            padding     : "10px",
            background  : "#fff",
            border      : "1px solid #ccc",
            borderRadius: "6px",
            fontSize    : "13px",
            color       : "#333",
            boxShadow   : "0 2px 8px rgba(0,0,0,0.25)",
            cursor      : "move",
            zIndex      : 9999
          });

          const overlay = document.getElementById("overlay-line-layer");
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("stroke", "#333");
          line.setAttribute("stroke-width", "1.5");
          line.setAttribute("stroke-dasharray", "4 2");
          overlay.appendChild(line);

          function updateLine() {
            line.setAttribute("x1", cxScreen);
            line.setAttribute("y1", cyScreen);
            line.setAttribute("x2", popup.offsetLeft);
            line.setAttribute("y2", popup.offsetTop + popup.offsetHeight * 0.5);
          }

          requestAnimationFrame(() => {
            resolveInitialPosition(popup);
            clampPopupToViz(popup);
            resolveAllCollisions(popup);
            clampPopupToViz(popup);
            updateLine();
            activePopups.push({ div: popup, line, updateLine });
          });

          // === Draggable with collision push-away ===
          let dragging = false, dragDx = 0, dragDy = 0;
          popup.addEventListener("mousedown", e => {
            dragging = true;
            dragDx = e.clientX - popup.offsetLeft;
            dragDy = e.clientY - popup.offsetTop;
            e.preventDefault();
          });
          document.addEventListener("mousemove", e => {
            if (!dragging) return;
            popup.style.left = `${e.clientX - dragDx}px`;
            popup.style.top  = `${e.clientY - dragDy}px`;
            requestAnimationFrame(updateLine);
          });
          document.addEventListener("mouseup", () => {
            if (!dragging) return;
            dragging = false;
            resolveAllCollisions(popup);
            clampPopupToViz(popup);
          });
          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
              // Remove all popups and lines
              activePopups.forEach(({ div, line }) => {
                div.remove();
                line.remove();
              });
              activePopups.length = 0; // clear the array
            }
          });


        });
    });

    
    // ---------- 4. Mesh ----------
    const row = frames.get(valid[idx])?.[0];
    if (!row) return;
    const meshFile = meshNameFromTime(row.time);
    const meshPath = `${staticPath}${meshFolder}${ts}/${meshFile}`;
    fetch(meshPath)
      .then(r => r.ok ? r.json() : Promise.reject("mesh missing"))
      .then(data => draw2DMesh(svg, scale, data, 1.5, row, ts, rects3D, dwellZones))
      .catch(err => console.warn("2D mesh load error:", err));

    // ---------- 5. Closest Hull Edges ----------
    const hullPts = hierarchy.keys.map(b => {
      const x = row[`${b}_x`], z = row[`${b}_z`];
      return x && z ? [+x, +z] : null;
    }).filter(Boolean);
    const hull = d3.polygonHull(hullPts); if (!hull) return; hull.push(hull[0]);

    const hullEdges = [];
    for (let i = 0; i < hull.length - 1; i++) {
      hullEdges.push([hull[i], hull[i + 1]]);
    }

    const edgeDistances = [];
    svg.selectAll("rect").each(function () {
      const r = this.getBBox();
      const rx = scale.invert(r.x + r.width / 2);
      const rz = scale.invert(r.y + r.height / 2);
      for (const [p1, p2] of hullEdges) {
        const d = pointToSegmentDistance(rx, rz, p1[0], p1[1], p2[0], p2[1]);
        edgeDistances.push({ edge: [p1, p2], dist: d, rect: r });
      }
    });

    const top2 = edgeDistances.sort((a, b) => a.dist - b.dist).slice(0, 2);
    top2.forEach(({ edge: closestEdge, rect }) => {
      closestEdge.forEach(([x, z]) => {
        const edge = [
          scale.invert(Math.max(rect.x, Math.min(scale(x), rect.x + rect.width))),
          scale.invert(Math.max(rect.y, Math.min(scale(z), rect.y + rect.height)))
        ];
        const R = Math.hypot(x - edge[0], z - edge[1]);
        const mid = [(x + edge[0]) / 2, (z + edge[1]) / 2];

        svg.append("circle")
          .attr("cx", scale(edge[0]))
          .attr("cy", scale(edge[1]))
          .attr("r", 5)
          .attr("fill", "black")
          .raise();

        svg.select("#layer-hull-lines").append("circle")
          .attr("cx", scale(mid[0]))
          .attr("cy", scale(mid[1]))
          .attr("r", 0)
          .attr("fill", "none")
          .attr("stroke", "red")
          .attr("stroke-width", 1.5)
          .transition()
          .duration(1000)
          .attr("r", scale(R / 2) - scale(0))
          .selection().raise();
      });

      svg.select("#layer-hull-lines").append("line")
        .attr("x1", scale(closestEdge[0][0]))
        .attr("y1", scale(closestEdge[0][1]))
        .attr("x2", scale(closestEdge[1][0]))
        .attr("y2", scale(closestEdge[1][1]))
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .raise();
    });

    // Update 3D if active
    if (viewer) update3D(row, rects3D, hierarchy, edges3D, ts, dwellZones);
  }

  // expose draw via outer scope
  redraw = draw;
  draw(0, +document.getElementById("skeletonSlider").value || 1);

  /* ────────── helper: Draw 2‑D mesh ----------------------------------- */
  function draw2DMesh(svg, scale, meshData, minY = 1.5, row, ts, rects3D, dwellZones) {
    const mesh2D = svg.select("#layer-mesh");  // reuse layer
    mesh2D.selectAll("*").remove();      
    const verts = meshData.vertices;
    const tris = meshData.triangles;
    
    // Compute box centers once for heatmap colouring
    const boxCenters = rects3D.map(r => ({
      x: (r.x0 + r.x1) / 2,
      z: (r.z0 + r.z1) / 2
    }));

    const vertDistances = [];
    let maxDist = 0;
    for (let i = 0; i < verts.length; i += 3) {
      const vx = verts[i];
      const vz = verts[i + 2];
      let minD = Infinity;
      for (const box of boxCenters) {
        const d = Math.hypot(vx - box.x, vz - box.z);
        if (d < minD) minD = d;
      }
      vertDistances.push(minD);
      if (minD > maxDist) maxDist = minD;
    }

    for (let i = 0; i < tris.length; i += 3) {
      const vi1 = tris[i], vi2 = tris[i + 1], vi3 = tris[i + 2];
      const yi1 = verts[vi1 * 3 + 1];
      const yi2 = verts[vi2 * 3 + 1];
      const yi3 = verts[vi3 * 3 + 1];
      const minTriY = Math.min(yi1, yi2, yi3);
      if (minTriY < minY) continue; // ignore low triangles

      const xi1 = scale(verts[vi1 * 3]);
      const zi1 = scale(verts[vi1 * 3 + 2]);
      const xi2 = scale(verts[vi2 * 3]);
      const zi2 = scale(verts[vi2 * 3 + 2]);
      const xi3 = scale(verts[vi3 * 3]);
      const zi3 = scale(verts[vi3 * 3 + 2]);

      const d1 = vertDistances[vi1];
      const d2 = vertDistances[vi2];
      const d3 = vertDistances[vi3];
      const t = 1 - (d1 + d2 + d3) / (3 * maxDist); // closer -> higher t

      const fillColor = `rgb(255,${Math.pow(1 - t, 3.5) * 255},0)`;

      mesh2D.append("path")
        .attr("d", `M${xi1},${zi1} L${xi2},${zi2} L${xi3},${zi3} Z`)
        .attr("fill", fillColor)
        .attr("fill-opacity", 0.75)
        .style("cursor", "pointer")
        .on("click", () => openOrUpdate3D(row, ts, dwellZones));
    }
  }

  /* ───────────── Draw dwell circles ---------------------------------- */
  function drawDwellCircles(trackCSV, skelCSV, hierarchy) {
    const dwellZones = [];
    const points = trackCSV.map(d => ({ x: +d.centroidA_x, z: +d.centroidA_z, time: d.time }))
                           .filter(p => isFinite(p.x) && isFinite(p.z));

    const usedTimes = new Set();
    for (let i = 0; i < points.length; i++) {
      const { x: xi, z: zi, time: ti } = points[i];
      if (usedTimes.has(ti)) continue;

      const group = points.filter(({ x, z, time }) =>
        Math.hypot(x - xi, z - zi) <= dwellRadius && !usedTimes.has(time)
      );

      if (group.length < dwellThreshold) continue;
      group.forEach(({ time }) => usedTimes.add(time));

      const jointPositions = [];
      for (const { time } of group) {
        const row = skelCSV.find(d => d.time === time);
        if (!row) continue;
        hierarchy.keys.forEach(b => {
          const x = +row[`${b}_x`], z = +row[`${b}_z`];
          if (isFinite(x) && isFinite(z)) jointPositions.push([x, z]);
        });
      }

      const centroid = [d3.mean(jointPositions, p => p[0]), d3.mean(jointPositions, p => p[1])];
      const maxDist = d3.max(jointPositions, ([x, z]) => Math.hypot(x - centroid[0], z - centroid[1]));
    }
    return dwellZones;
  }

  /* ───────────────── 3‑D pop‑out helpers ------------------------------ */
  function openOrUpdate3D(row, ts, dwellZones = []) {
    if (viewer) return update3D(row, rects3D, hierarchy, edges3D, ts, dwellZones);

    const overlay = document.createElement("div");
    Object.assign(overlay.style, { position: "fixed", inset: 0, background: "transparent", zIndex: 9999, pointerEvents: "none" });
    document.body.appendChild(overlay);

    const box = document.createElement("div");
    Object.assign(box.style, { width: "800px", height: "800px", background: "#222", borderRadius: "8px", boxShadow: "0 4px 16px #000",
                               position: "absolute", left: "100px", top: "100px", pointerEvents: "auto", overflow: "hidden" });
    overlay.appendChild(box);

    const header = document.createElement("div");
    Object.assign(header.style, { height: "28px", background: "#000", color: "#000", display: "flex", alignItems: "center",
                                  padding: "0 8px", cursor: "grab", fontSize: "13px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px",
                                  userSelect: "none" });
    header.textContent = "3‑D Skeleton + Mesh View";
    box.appendChild(header);

    document.addEventListener("keydown", function esc(e) {
      if (e.key === "Escape") { viewer = null; overlay.remove(); document.removeEventListener("keydown", esc); }
    });

    /* draggable ------------------------------------------------------- */
    let dragging = false, dx = 0, dy = 0;
    header.addEventListener("pointerdown", e => { if (e.button) return;
      dragging = true; dx = e.clientX - box.offsetLeft; dy = e.clientY - box.offsetTop;
      header.setPointerCapture(e.pointerId); header.style.cursor = "grabbing";
    });
    header.addEventListener("pointermove", e => { if (!dragging) return;
      box.style.left = `${e.clientX - dx}px`; box.style.top = `${e.clientY - dy}px`;
    });
    header.addEventListener("pointerup",  e => { dragging = false; header.style.cursor = "grab";
      header.releasePointerCapture && header.releasePointerCapture(e.pointerId);
    });

    /* three.js scene --------------------------------------------------- */
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(800, 800); box.appendChild(renderer.domElement);

    const cam = new THREE.OrthographicCamera();
    const ctl = new OrbitControls(cam, renderer.domElement);
    ctl.enableDamping = true; ctl.dampingFactor = 0.05;
    ctl.enablePan = true; ctl.enableZoom = true;
    ctl.mouseButtons = { LEFT: THREE.MOUSE.NONE, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.ROTATE };

    scene.add(new THREE.HemisphereLight(0xffffff, 0x333333, 1));
    const group = new THREE.Group(); scene.add(group);

    viewer = { overlay, box, scene, group, cam, ctl, renderer };
    animate(); update3D(row, rects3D, hierarchy, edges3D, ts, dwellZones);
  }

    /* ─────────────────── update / refresh 3-D view ─────────────────────── */
  function update3D(row, rects3D, hierarchy, edges3D, ts, dwellZones = []) {
    const { group, cam, ctl, renderer } = viewer;
    group.clear();
    /* ── Dwell cylinders ─────────────────────────────────────────────── */
    const cylMat = new THREE.MeshBasicMaterial({
      color: 0xffa500,          // orange
      transparent: true,
      opacity: 0.001
    });

    dwellZones.forEach(({ centroid: [x, z], radius }) => {
      const height = 0.01;  // adjust if needed to barely lift above the ground
      const g = new THREE.CylinderGeometry(radius, radius, height, 32);
      const m = new THREE.Mesh(g, cylMat);
      m.position.set(x, height / 2, z); // sits perfectly on ground (y = half height)
      group.add(m);
    });

    const myReq = ++meshRequestVersion;
    const meshFile = meshNameFromTime(row.time);
    const meshPath = `${staticPath}${meshFolder}${ts}/${meshFile}`;

    /* mesh + heatmap ----------------------------------------------------- */
    fetch(meshPath)
      .then(r => r.ok ? r.json() : Promise.reject(`404 ${meshFile}`))
      .then(data => {
        if (myReq !== meshRequestVersion) return;

        const vertices = new Float32Array(data.vertices);
        const geom = new THREE.BufferGeometry();
        geom.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
        geom.setIndex(new THREE.BufferAttribute(new Uint32Array(data.triangles), 1));
        geom.computeVertexNormals();

        const centroid = new THREE.Vector3();
        for (let i = 0; i < vertices.length; i += 3) {
          centroid.x += vertices[i];
          centroid.y += vertices[i + 1];
          centroid.z += vertices[i + 2];
        }
        centroid.divideScalar(vertices.length / 3);

        let closestBox = null;
        let minDist = Infinity;
        rects3D.forEach(box => {
          const cx = (box.x0 + box.x1) / 2;
          const cy = box.height / 2;
          const cz = (box.z0 + box.z1) / 2;
          const d = centroid.distanceTo(new THREE.Vector3(cx, cy, cz));
          if (d < minDist) {
            minDist = d;
            closestBox = box;
          }
        });

        const colors = new Float32Array(vertices.length);
        let maxD = 0;
        const boxCenter = new THREE.Vector3(
          (closestBox.x0 + closestBox.x1) / 2,
          closestBox.height / 2,
          (closestBox.z0 + closestBox.z1) / 2
        );

        const distances = [];
        for (let i = 0; i < vertices.length; i += 3) {
          const vx = vertices[i], vy = vertices[i + 1], vz = vertices[i + 2];
          const v = new THREE.Vector3(vx, vy, vz);
          const dist = v.distanceTo(boxCenter);
          distances.push(dist);
          if (dist > maxD) maxD = dist;
        }

        for (let i = 0; i < distances.length; i++) {
          const t = 1 - distances[i] / maxD;
          const r = 1;
          const g = Math.pow(1 - t, 3.5);
          const b = 0;
          colors[i * 3]     = r;
          colors[i * 3 + 1] = g;
          colors[i * 3 + 2] = b;
        }

        geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const mesh = new THREE.Mesh(
          geom,
          new THREE.MeshStandardMaterial({
            vertexColors: true,
            metalness: 0.1,
            roughness: 0.75,
            transparent: true,
            opacity: 0.9
          })
        );

        group.add(mesh);
        fitCamera();
      })
      .catch(err => console.warn("Mesh load error:", err));

    /* static boxes ------------------------------------------------------- */
    const boxMat = new THREE.MeshLambertMaterial({ color: 0x888888, transparent: true, opacity: 0.5, depthWrite: false });
    rects3D.forEach(r => {
      const g = new THREE.BoxGeometry(r.x1 - r.x0, r.height, r.z1 - r.z0);
      const m = new THREE.Mesh(g, boxMat);
      m.position.set(r.x0 + (r.x1 - r.x0) / 2, r.height / 2, r.z0 + (r.z1 - r.z0) / 2);
      group.add(m);
    });

    /* skeleton lines ----------------------------------------------------- */
    const joint = {};
    hierarchy.keys.forEach(b => {
      const x = +row[`${b}_x`], y = +row[`${b}_y`], z = +row[`${b}_z`];
      if (!isNaN(x) && !isNaN(y) && !isNaN(z)) joint[b] = new THREE.Vector3(x, y, z);
    });
    const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff });
    edges3D.forEach(([p, c]) => {
      if (joint[p] && joint[c]) {
        group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([joint[p], joint[c]]), lineMat));
      }
    });

    /* ground plane path through centroidA over time ---------------------- */
    if (globalTrackCSV) {
      const pathPoints = globalTrackCSV.map(row => {
        const x = +row.centroidA_x;
        const z = +row.centroidA_z;
        return new THREE.Vector3(x, 0.01, z);
      }).filter(p => isFinite(p.x) && isFinite(p.z));

      if (pathPoints.length > 1) {
        const elevatedPoints = pathPoints.map(p => new THREE.Vector3(p.x, 0.1, p.z));
        const pathGeom = new THREE.BufferGeometry().setFromPoints(elevatedPoints);
        const pathMat = new THREE.LineBasicMaterial({
          color: "red",
          linewidth: 10,
          transparent: true,
          opacity: 0.9,
          depthTest: false
        });
        const pathLine = new THREE.Line(pathGeom, pathMat);
        group.add(pathLine);
      }

    }

    /* camera fit --------------------------------------------------------- */
    function fitCamera() {
      const bb = new THREE.Box3().setFromObject(group);
      const ctr = bb.getCenter(new THREE.Vector3());
      const size = bb.getSize(new THREE.Vector3());
      const max = Math.max(size.x, size.y, size.z) * 0.6;
      const asp = 600 / 600;

      cam.left = -max * asp; cam.right = max * asp;
      cam.top =  max;        cam.bottom = -max;
      cam.near = 0.1;        cam.far    = 1000;
      cam.updateProjectionMatrix();

      const dist = max * 2.5;
      cam.position.set(ctr.x + dist, ctr.y + dist, ctr.z + dist);
      cam.lookAt(ctr); ctl.target.copy(ctr);
      ctl.update(); renderer.render(viewer.scene, cam);
    }
  }


  /* ───────────────── animation loop ---------------------------------- */
  function animate() {
    if (!viewer) return;
    viewer.ctl.update();
    viewer.renderer.render(viewer.scene, viewer.cam);
    requestAnimationFrame(animate);
  }

  /* time string (CSV) → mesh filename --------------------------------- */
  function meshNameFromTime(t) {
    const [secStr, fracStr = "0"] = t.split(".");
    const sec = parseInt(secStr, 10).toString();
    const frac = fracStr.padEnd(2, "0").slice(0, 2);
    return `mesh_${sec}_${frac}.json`;
  }
}
