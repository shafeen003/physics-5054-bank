/**
 * Cambridge 5054 Thermal Physics - Vivid Glowing Laboratory Engine
 */

window.SimulationEngine = {
  activeAnimationId: null,

  mount(containerId, simConfig) {
    this.stop();
    const container = document.getElementById(containerId);
    if (!container || !simConfig) return;

    // Render Metrics Cards + Canvas + Sliders
    container.innerHTML = `
      <div class="sim-readouts-grid" id="simReadoutsTray"></div>
      <div class="canvas-wrapper">
        <canvas id="simCanvas" width="640" height="300" class="interactive-canvas"></canvas>
      </div>
      <div class="sim-controls-tray" id="simControlsTray"></div>
    `;

    const canvas = document.getElementById("simCanvas");
    const ctx = canvas.getContext("2d");
    const params = { ...(simConfig.defaultParams || {}) };

    this.renderControls(simConfig.controls || [], params, () => {
      this.updateReadouts(simConfig.readouts || [], params);
    });

    this.updateReadouts(simConfig.readouts || [], params);

    // Route dynamically
    switch (simConfig.type) {
      case "kinetic_state":
      case "compressibility_lattice":
        this.runKineticState(ctx, canvas, params);
        break;

      case "brownian_motion":
        this.runBrownianMotion(ctx, canvas);
        break;

      case "gas_laws_chamber":
        this.runGasChamber(ctx, canvas, params);
        break;

      case "evaporation":
        this.runEvaporation(ctx, canvas);
        break;

      case "cooling_curve_plateau":
      case "heating_curve":
        this.runCoolingCurve(ctx, canvas);
        break;

      case "thermal_expansion_rod":
        this.runThermalExpansion(ctx, canvas, params);
        break;

      case "thermometer_design":
      case "thermocouple_sim":
        this.runThermometerDesign(ctx, canvas);
        break;

      default:
        this.runKineticState(ctx, canvas, params);
        break;
    }
  },

  stop() {
    if (this.activeAnimationId) {
      cancelAnimationFrame(this.activeAnimationId);
      this.activeAnimationId = null;
    }
  },

  renderControls(controls, params, onChange) {
    const tray = document.getElementById("simControlsTray");
    if (!tray || controls.length === 0) {
      if (tray) tray.style.display = "none";
      return;
    }
    tray.style.display = "flex";
    tray.innerHTML = "";

    controls.forEach((ctrl) => {
      const item = document.createElement("div");
      item.className = "sim-control-item";
      item.innerHTML = `
        <label for="${ctrl.id}">${ctrl.name}:</label>
        <input type="range" id="${ctrl.id}" min="${ctrl.min}" max="${ctrl.max}" step="${ctrl.step || 1}" value="${params[ctrl.id] !== undefined ? params[ctrl.id] : ctrl.default}">
        <span id="${ctrl.id}_val" style="color: #00e5ff; font-weight: 700;">${params[ctrl.id] !== undefined ? params[ctrl.id] : ctrl.default} ${ctrl.unit || ''}</span>
      `;
      const slider = item.querySelector("input");
      slider.addEventListener("input", (e) => {
        params[ctrl.id] = parseFloat(e.target.value);
        document.getElementById(`${ctrl.id}_val`).textContent = `${params[ctrl.id]} ${ctrl.unit || ''}`;
        onChange();
      });
      tray.appendChild(item);
    });
  },

  updateReadouts(readouts, params) {
    const tray = document.getElementById("simReadoutsTray");
    if (!tray || readouts.length === 0) return;

    tray.innerHTML = readouts.map(r => {
      const val = r.expr(params);
      let colorClass = "";
      if (val.includes("Faster") || val.includes("Max") || val.includes("Optimal")) colorClass = "green";
      else if (val.includes("High") || val.includes("Danger")) colorClass = "orange";

      return `
        <div class="metric-card">
          <div class="metric-label">${r.label}</div>
          <div class="metric-value ${colorClass}">${val}</div>
        </div>
      `;
    }).join("");
  },

  // 1. Kinetic States (Neon Gas, Liquid & Solid)
  runKineticState(ctx, canvas, params) {
    let t = 0;
    const currentState = params.state || "gas";

    const gasParticles = Array.from({ length: 30 }, () => ({
      x: 80 + Math.random() * 480,
      y: 50 + Math.random() * 190,
      vx: (Math.random() - 0.5) * 5.5,
      vy: (Math.random() - 0.5) * 5.5
    }));

    const liquidParticles = Array.from({ length: 60 }, () => ({
      x: 90 + Math.random() * 460,
      y: 150 + Math.random() * 90,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.2
    }));

    const animate = () => {
      ctx.fillStyle = "#050a18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      t += 0.08;

      // Dark Chamber Boundary with Cyan Accent
      ctx.strokeStyle = "#1e3056";
      ctx.lineWidth = 2;
      ctx.strokeRect(60, 25, 520, 245);

      if (currentState === "solid") {
        ctx.fillStyle = "#00e5ff";
        ctx.shadowColor = "#00e5ff";
        ctx.shadowBlur = 10;
        const tempAmp = params.tempC ? 1 + params.tempC * 0.03 : 2.2;
        const startX = 140, startY = 55;
        const cols = 9, rows = 5;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const baseX = startX + c * 40;
            const baseY = startY + r * 35;
            const vx = Math.sin(t * 8 + c + r) * tempAmp;
            const vy = Math.cos(t * 8 + c * 2) * tempAmp;

            ctx.beginPath();
            ctx.arc(baseX + vx, baseY + vy, 8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 13px Plus Jakarta Sans";
        ctx.fillText("SOLID: Fixed Regular Lattice • Vibrating in position", 150, 255);

      } else if (currentState === "liquid") {
        ctx.fillStyle = "rgba(0, 229, 255, 0.08)";
        ctx.fillRect(62, 130, 516, 138);

        ctx.fillStyle = "#38bdf8";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 8;
        liquidParticles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 75 || p.x > 565) p.vx *= -1;
          if (p.y < 140 || p.y > 255) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 13px Plus Jakarta Sans";
        ctx.fillText("LIQUID: Closely Packed • Sliding freely over each other", 130, 100);

      } else {
        // Glowing Neon Amber Gas Particles
        ctx.fillStyle = "#f59e0b";
        ctx.shadowColor = "#f59e0b";
        ctx.shadowBlur = 12;

        gasParticles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 70) { p.x = 70; p.vx *= -1; }
          if (p.x > 570) { p.x = 570; p.vx *= -1; }
          if (p.y < 35) { p.y = 35; p.vy *= -1; }
          if (p.y > 260) { p.y = 260; p.vy *= -1; }

          ctx.beginPath();
          ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
          ctx.fill();

          // Motion Trails
          ctx.strokeStyle = "rgba(245, 158, 11, 0.35)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 3.5, p.y - p.vy * 3.5);
          ctx.stroke();
        });
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#f59e0b";
        ctx.font = "bold 13px Plus Jakarta Sans";
        ctx.fillText("GAS: Wide Separations • High speed random collisions", 140, 20);
      }

      this.activeAnimationId = requestAnimationFrame(animate);
    };
    animate();
  },

  // 2. Glowing Brownian Motion
  runBrownianMotion(ctx, canvas) {
    const smokeParticles = Array.from({ length: 4 }, () => ({
      x: 180 + Math.random() * 260,
      y: 90 + Math.random() * 110,
      vx: (Math.random() - 0.5) * 2.8,
      vy: (Math.random() - 0.5) * 2.8,
      trail: []
    }));

    const airMolecules = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 7.5,
      vy: (Math.random() - 0.5) * 7.5
    }));

    const animate = () => {
      ctx.fillStyle = "#050a18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(148, 163, 184, 0.3)";
      airMolecules.forEach(m => {
        m.x += m.vx; m.y += m.vy;
        if (m.x < 0 || m.x > canvas.width) m.vx *= -1;
        if (m.y < 0 || m.y > canvas.height) m.vy *= -1;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      smokeParticles.forEach(p => {
        if (Math.random() < 0.16) {
          p.vx += (Math.random() - 0.5) * 3.8;
          p.vy += (Math.random() - 0.5) * 3.8;
        }

        p.x += p.vx; p.y += p.vy;
        if (p.x < 30 || p.x > canvas.width - 30) p.vx *= -1;
        if (p.y < 30 || p.y > canvas.height - 30) p.vy *= -1;

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 30) p.trail.shift();

        ctx.strokeStyle = "rgba(0, 229, 255, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        p.trail.forEach((pt, idx) => {
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        ctx.fillStyle = "#00e5ff";
        ctx.shadowColor = "#00e5ff";
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 13px Plus Jakarta Sans";
      ctx.fillText("Illuminated Smoke Specks: Driven by bombardment of invisible air molecules", 70, 285);

      this.activeAnimationId = requestAnimationFrame(animate);
    };
    animate();
  },

  // 3. Boyle's Gas Chamber
  runGasChamber(ctx, canvas, params) {
    let particles = Array.from({ length: 42 }, () => ({
      x: 60 + Math.random() * 180,
      y: 50 + Math.random() * 180,
      vx: (Math.random() - 0.5) * 5,
      vy: (Math.random() - 0.5) * 5
    }));

    const animate = () => {
      ctx.fillStyle = "#050a18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const vol = params.volumeCm3 !== undefined ? params.volumeCm3 : 50;
      const pistonX = Math.max(120, Math.min(340, 80 + vol * 3.4));

      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 3;
      ctx.strokeRect(50, 40, 310, 210);

      ctx.fillStyle = "#334155";
      ctx.fillRect(pistonX, 42, 18, 206);
      ctx.fillRect(pistonX + 18, 130, 50, 22);

      ctx.fillStyle = "#f59e0b";
      ctx.shadowColor = "#f59e0b";
      ctx.shadowBlur = 8;
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 56) { p.x = 56; p.vx *= -1; }
        if (p.x > pistonX - 6) { p.x = pistonX - 6; p.vx *= -1; }
        if (p.y < 46) { p.y = 46; p.vy *= -1; }
        if (p.y > 244) { p.y = 244; p.vy *= -1; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      // Digital Gauge
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(390, 40, 210, 210);
      ctx.strokeStyle = "#1e3056";
      ctx.strokeRect(390, 40, 210, 210);

      const calculatedP = (7200 / vol).toFixed(1);

      ctx.fillStyle = "#00e5ff";
      ctx.font = "bold 15px Plus Jakarta Sans";
      ctx.fillText("Boyle's Law Meter", 415, 75);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "13px Plus Jakarta Sans";
      ctx.fillText(`Volume:`, 415, 115);
      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 16px monospace";
      ctx.fillText(`${vol} cm³`, 415, 140);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "13px Plus Jakarta Sans";
      ctx.fillText(`Internal Pressure:`, 415, 185);
      ctx.fillStyle = "#10b981";
      ctx.font = "bold 20px monospace";
      ctx.shadowColor = "#10b981";
      ctx.shadowBlur = 10;
      ctx.fillText(`${calculatedP} kPa`, 415, 215);
      ctx.shadowBlur = 0;

      this.activeAnimationId = requestAnimationFrame(animate);
    };
    animate();
  },

  // 4. Oscilloscope-style Cooling Curve
  runCoolingCurve(ctx, canvas) {
    let t = 0;
    const animate = () => {
      ctx.fillStyle = "#050a18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      t += 0.05;

      // Oscilloscope Grid Lines
      ctx.strokeStyle = "rgba(30, 48, 86, 0.4)";
      ctx.lineWidth = 1;
      for (let x = 60; x <= 580; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 30); ctx.lineTo(x, 260); ctx.stroke();
      }
      for (let y = 30; y <= 260; y += 30) {
        ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(580, y); ctx.stroke();
      }

      // Neon Wave (Matching DM Lab style)
      ctx.strokeStyle = "#00e5ff";
      ctx.lineWidth = 3.5;
      ctx.shadowColor = "#00e5ff";
      ctx.shadowBlur = 14;

      ctx.beginPath();
      for (let x = 60; x < 580; x += 3) {
        let y;
        if (x < 190) y = 50 + (x - 60) * 0.6;
        else if (x < 370) y = 128; // flat plateau
        else y = 128 + (x - 370) * 0.6;

        if (x === 60) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#f59e0b";
      ctx.font = "bold 13px Plus Jakarta Sans";
      ctx.fillText("Phase Change Plateau: T = Constant (Latent Heat Transition)", 140, 115);

      this.activeAnimationId = requestAnimationFrame(animate);
    };
    animate();
  },

  // 5. Thermal Expansion & Bimetallic Strip
  runThermalExpansion(ctx, canvas, params) {
    const animate = () => {
      ctx.fillStyle = "#050a18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const temp = params.tempC !== undefined ? params.tempC : 80;
      const bendFactor = (temp - 20) * 0.4;

      ctx.save();
      ctx.translate(120, 150);

      ctx.fillStyle = "#334155";
      ctx.fillRect(-35, -35, 35, 70);

      // Brass Strip (Expands more -> outer)
      ctx.strokeStyle = "#eab308";
      ctx.lineWidth = 14;
      ctx.shadowColor = "#eab308";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(0, -7);
      ctx.quadraticCurveTo(200, -7 + bendFactor * 0.8, 400, -7 + bendFactor * 1.6);
      ctx.stroke();

      // Iron Strip (Expands less)
      ctx.strokeStyle = "#94a3b8";
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.moveTo(0, 7);
      ctx.quadraticCurveTo(200, 7 + bendFactor * 0.8, 400, 7 + bendFactor * 1.6);
      ctx.stroke();

      ctx.restore();

      ctx.fillStyle = "#eab308";
      ctx.font = "bold 14px Plus Jakarta Sans";
      ctx.fillText("Brass (Greater Expansivity ➔ Outside)", 340, 70);

      ctx.fillStyle = "#94a3b8";
      ctx.fillText("Iron (Lesser Expansivity ➔ Inside)", 340, 240);

      this.activeAnimationId = requestAnimationFrame(animate);
    };
    animate();
  },

  // 6. Thermometer Bore & Design
  runThermometerDesign(ctx, canvas) {
    const animate = () => {
      ctx.fillStyle = "#050a18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 3;
      ctx.strokeRect(175, 40, 22, 180);

      ctx.fillStyle = "#ef4444";
      ctx.shadowColor = "#ef4444";
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(186, 220, 22, 0, Math.PI * 2);
      ctx.fill();

      const threadHeight = 100;
      ctx.fillRect(182, 220 - threadHeight, 8, threadHeight);
      ctx.shadowBlur = 0;

      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 1.5;
      for (let y = 50; y <= 190; y += 14) {
        ctx.beginPath();
        ctx.moveTo(200, y);
        ctx.lineTo(214, y);
        ctx.stroke();
      }

      ctx.fillStyle = "#00e5ff";
      ctx.font = "bold 15px Plus Jakarta Sans";
      ctx.fillText("Sensitivity Physics Engine", 250, 70);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "13px Plus Jakarta Sans";
      ctx.fillText("• Narrow capillary bore ➔ large thread movement", 250, 110);
      ctx.fillText("• Large bulb ➔ large liquid expansion", 250, 140);
      ctx.fillText("• Constant diameter ➔ linear scale", 250, 170);

      this.activeAnimationId = requestAnimationFrame(animate);
    };
    animate();
  },

  // 7. Evaporative Cooling
  runEvaporation(ctx, canvas) {
    let vapor = [];
    const liquidY = 170;

    const animate = () => {
      ctx.fillStyle = "#050a18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 229, 255, 0.15)";
      ctx.fillRect(70, liquidY, 500, 100);
      ctx.strokeStyle = "#00e5ff";
      ctx.lineWidth = 2;
      ctx.strokeRect(70, liquidY, 500, 100);

      if (Math.random() < 0.35) {
        vapor.push({
          x: 90 + Math.random() * 460,
          y: liquidY,
          vx: (Math.random() - 0.5) * 1.8,
          vy: -(1.2 + Math.random() * 2.5),
          alpha: 1.0
        });
      }

      vapor.forEach((v, idx) => {
        v.x += v.vx; v.y += v.vy; v.alpha -= 0.016;
        if (v.alpha <= 0) {
          vapor.splice(idx, 1);
        } else {
          ctx.fillStyle = `rgba(0, 229, 255, ${v.alpha})`;
          ctx.beginPath();
          ctx.arc(v.x, v.y, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.fillStyle = "#00e5ff";
      ctx.font = "bold 14px Plus Jakarta Sans";
      ctx.fillText("Fast molecules escape ➔ Thermal energy decreases", 140, 70);

      this.activeAnimationId = requestAnimationFrame(animate);
    };
    animate();
  }
};