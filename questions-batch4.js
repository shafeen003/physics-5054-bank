/**
 * Master Question Store: Batch 4 (Q046 to Q060)
 * Section 2.1: Finishes Kinetic Particle Model (53/53 completed)
 * Section 2.2: Launches Thermal Properties & Temperature (MCQs Part 1)
 */

const QUESTIONS_BATCH_4 = [
  {
    globalId: "Q046",
    examId: "Q02964",
    paperRef: "5054/42/O/N/21 Q2",
    pdfPage: 46,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: Liquid Volume Scaling and Cooling Rates",
    paperType: "atp",
    marks: 5,
    questionText: `A student investigates how the volume of hot water affects its rate of cooling in identical boiling tubes.
Tube A contains 15 cm³ of hot water at an initial temperature of 80 °C.
Tube B contains 30 cm³ of hot water at an initial temperature of 80 °C.
The temperature of each tube is recorded every 30 s for 180 s.
(a) Table 2.1 shows results:
- Tube A (15 cm³): cools from 80.0 °C to 56.0 °C in 180 s (drop = 24.0 °C).
- Tube B (30 cm³): cools from 80.0 °C to 66.5 °C in 180 s (drop = 13.5 °C).
Calculate the average cooling rate for each tube in °C/s. [2]
(b) State and explain which tube loses thermal energy more rapidly per unit mass. [2]
(c) State one precaution taken when reading the thermometer in the boiling tube to ensure accuracy. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate cooling rates in °C/s for two different water volumes in identical tubes, evaluate rate of heat loss per unit mass, and state a reading precaution.",
    givenInfo: [
      "Identical boiling tubes.",
      "Tube A: volume = 15 cm³, drop = 24.0 °C over 180 s.",
      "Tube B: volume = 30 cm³, drop = 13.5 °C over 180 s.",
      "Initial temperature = 80.0 °C."
    ],
    toFind: "Cooling rates for A and B, physical comparison with reasoning, and one thermometer reading precaution.",
    physicsConcepts: `Thermal capacity, surface area, and cooling rates:
1. Average cooling rate:
   $$R = \\frac{\\Delta \\theta}{\\Delta t}$$
2. Thermal capacity scaling:
   - Heat energy stored: $Q = m c \\Delta T$. Tube A has half the mass ($m_A = 15\\text{ g}$) of Tube B ($m_B = 30\\text{ g}$).
   - Thermal capacity of Tube A is half that of Tube B.
   - For a given heat loss rate, temperature drop is inversely proportional to mass: $\\Delta T = \\Delta Q / (m c)$.
   - Tube A experiences a much larger temperature drop (24.0 °C vs 13.5 °C) and a higher cooling rate because its smaller mass requires less thermal energy loss per degree drop.
3. Precautions: View thermometer scale at eye level with line of sight perpendicular to stem to eliminate parallax error; keep bulb fully submerged without touching the glass tube walls.`,
    equations: `R_A = \\frac{24.0}{180} = 0.1333^\\circ\\text{C/s}; \\quad R_B = \\frac{13.5}{180} = 0.0750^\\circ\\text{C/s}; \\quad \\frac{d\\theta}{dt} = \\frac{1}{mc}\\frac{dQ}{dt}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Calculate Cooling Rates",
        body: "Tube A (15 cm³): R_A = 24.0 °C / 180 s = 0.1333 °C/s ≈ 0.13 °C/s.\nTube B (30 cm³): R_B = 13.5 °C / 180 s = 0.0750 °C/s = 0.075 °C/s."
      },
      {
        step: 2,
        title: "Part (b) Explain Rate per Unit Mass (2 marks)",
        body: "Tube A cools more rapidly (0.13 °C/s vs 0.075 °C/s). Because Tube A has a smaller mass (15 g vs 30 g), it has a smaller thermal capacity (mc), so losing the same amount of thermal energy produces a larger decrease in temperature."
      },
      {
        step: 3,
        title: "Part (c) State Reading Precaution (1 mark)",
        body: "Read the scale with line of sight perpendicular to the thermometer / at eye level with the meniscus to avoid parallax error (or ensure the bulb does not touch the sides/bottom of the boiling tube)."
      }
    ],
    finalAnswer: "(a) Tube A = 0.13 °C/s; Tube B = 0.075 °C/s;\n(b) Tube A; it has a smaller mass / thermal capacity, so losing thermal energy causes a greater decrease in temperature;\n(c) View the meniscus at eye level to avoid parallax error (or ensure bulb does not touch tube walls).",
    reasonablenessCheck: "Halving liquid mass roughly doubles the cooling rate (0.133 vs 0.075 °C/s), consistent with $mc$ scaling.",
    commonMistakes: [
      "Stating Tube B loses heat faster because it contains more water (Tube B retains temperature better due to higher thermal capacity).",
      "Omitting units from cooling rate calculations."
    ],
    takeaway: "Smaller liquid volumes have smaller thermal capacity ($mc$), causing them to cool down significantly faster.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { volA: 15, volB: 30 },
      controls: [],
      readouts: [
        { label: "Rate Tube A (15 cm³)", expr: () => "0.133 °C/s (Faster)" },
        { label: "Rate Tube B (30 cm³)", expr: () => "0.075 °C/s (Slower)" }
      ],
      explanation: "A smaller volume of water has lower thermal capacity, losing temperature at nearly double the rate."
    }
  },
  {
    globalId: "Q047",
    examId: "Q02965",
    paperRef: "5054/42/O/N/21 Q2(d)",
    pdfPage: 47,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: Porous Pot vs Plastic Evaporative Cooling",
    paperType: "atp",
    marks: 4,
    questionText: `A student investigates evaporative cooling using two containers of identical size and shape holding 200 cm³ of water at 25 °C:
Container 1: made of unglazed porous clay
Container 2: made of non-porous plastic
Both containers are left in a dry, ventilated room at 25 °C for 4.0 hours.
(a) The temperature of the water in the porous clay pot drops to 19 °C, while the water in the plastic container remains at 25 °C.
Explain why the temperature of the water in the porous pot decreases below room temperature. [2]
(b) State what happens to the mass of the porous pot and water over the 4.0 hours. [1]
(c) State one environmental factor that would increase this cooling effect. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain evaporative cooling through porous clay walls below ambient temperature, state mass change, and identify an enhancing environmental factor.",
    givenInfo: [
      "Container 1: unglazed porous clay (water temp drops to 19 °C).",
      "Container 2: non-porous plastic (water temp stays at 25 °C).",
      "Room temperature = 25 °C; duration = 4.0 hours."
    ],
    toFind: "Mechanism of cooling below ambient temperature, mass trend, and one enhancing environmental factor.",
    physicsConcepts: `Porous pot evaporative cooling:
1. Seepage and evaporation: Water seeps through microscopic pores in the unglazed clay to the outer surface of the pot, creating a thin, large-area liquid film.
2. Latent heat extraction: Energetic water molecules at the outer surface evaporate into the dry room air. The latent heat of vaporisation required for this phase change ($L_v \\approx 2.4\\times 10^6\\text{ J/kg}$) is drawn directly from the thermal internal energy of the pot and water.
3. Sub-ambient cooling: Because latent heat is continuously extracted by evaporation, the temperature of the pot drops below the ambient room temperature (19 °C vs 25 °C).
4. Mass: Evaporated water leaves the system, so total mass decreases.
5. Enhancing factors: Lower humidity (drier air), higher ambient temperature, or increased draught/wind speed.`,
    equations: `\\dot{Q}_{\\text{latent}} = \\dot{m}_{\\text{evap}} L_v; \\quad T_{\\text{pot}} < T_{\\text{room}} \\iff \\dot{Q}_{\\text{latent}} > \\dot{Q}_{\\text{conduction from air}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Explain Sub-Ambient Cooling (2 marks)",
        body: "Water seeps through the porous walls to the outside surface and evaporates. The evaporating molecules absorb latent heat from the remaining water and pot, reducing their thermal energy and lowering the temperature below room temperature."
      },
      {
        step: 2,
        title: "Part (b) State Mass Change (1 mark)",
        body: "The mass decreases (because water evaporates into the air as water vapor)."
      },
      {
        step: 3,
        title: "Part (c) Enhancing Environmental Factor (1 mark)",
        body: "Lower humidity / drier air (or increased air movement / wind / draught / higher ambient temperature)."
      }
    ],
    finalAnswer: "(a) Water seeps through the porous clay to the outer surface and evaporates; the evaporating water absorbs latent heat from the pot and water, lowering the temperature below room temperature;\n(b) The mass decreases;\n(c) Lower humidity / drier air (or a stronger breeze / draught).",
    reasonablenessCheck: "Zeer evaporative cooling pots (pot-in-pot coolers) keep food at ~18 °C in 40 °C desert conditions using this exact mechanism.",
    commonMistakes: [
      "Saying clay is naturally cold without referencing evaporation.",
      "Stating mass stays constant because the pot is sealed."
    ],
    takeaway: "Water seeping through porous clay evaporates from the outer surface, drawing latent heat and cooling the liquid below ambient temperature.",
    simulation: {
      type: "evaporation",
      defaultParams: { porousClay: true },
      controls: [],
      readouts: [
        { label: "Porous Pot Temp", expr: () => "19 °C (Cooled below ambient)" },
        { label: "Plastic Pot Temp", expr: () => "25 °C (Ambient room temp)" },
        { label: "Cooling Source", expr: () => "Latent heat of vaporisation" }
      ],
      explanation: "Continuous evaporation from the porous exterior extracts latent heat, cooling the pot to 6 °C below room temperature."
    }
  },
  {
    globalId: "Q048",
    examId: "Q03058",
    paperRef: "5054/42/M/J/22 Q1",
    pdfPage: 48,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: Boyle's Law Linear Graphing and Anomaly Detection",
    paperType: "atp",
    marks: 6,
    questionText: `A student investigates Boyle's Law using a gas syringe connected to a pressure sensor.
The volume V of trapped air is recorded at different values of pressure p at constant temperature.
Table 1.1 shows values of p in kPa and V in cm³, along with calculated values of 1/V in cm⁻³:
p / kPa: 100, 120, 150, 200, 240
V / cm³: 60.0, 50.0, 40.0, 27.0, 25.0
1/V / cm⁻³: 0.0167, 0.0200, 0.0250, 0.0370, 0.0400

(a) Plot a graph of p on the y-axis against 1/V on the x-axis on the grid provided. Draw the straight line of best fit. [4]
(b) Identify the anomalous data point on your graph and state the corresponding volume V. [1]
(c) State what feature of the graph confirms that pressure is inversely proportional to volume. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Plot a linear Boyle's Law graph (p vs 1/V), draw a best-fit line, identify an anomalous point, and explain the proportionality criterion.",
    givenInfo: [
      "p values: 100, 120, 150, 200, 240 kPa.",
      "1/V values: 0.0167, 0.0200, 0.0250, 0.0370, 0.0400 cm⁻³.",
      "Constant temperature maintained."
    ],
    toFind: "Criteria-compliant linear graph, identified anomaly, and confirmation criterion for inverse proportionality.",
    physicsConcepts: `Boyle's Law linear transformation:
$$p \\propto \\frac{1}{V} \\implies p = k \\left(\\frac{1}{V}\\right)$$
1. Plotting $p$ against $1/V$: Produces a linear relationship ($y = mx$) where the gradient $m = k = pV$ is constant.
2. Graph plotting rules:
   - Scale must occupy more than half the grid along both axes.
   - Points plotted neatly with small crosses to within half a small square.
   - Line of best fit drawn straight with a ruler, balanced evenly among non-anomalous points.
3. Anomaly detection: At $p = 200\\text{ kPa}$, $V = 27.0\\text{ cm}^3$ gives $1/V = 0.0370\\text{ cm}^{-3}$. For $pV = 6000$, the expected volume is $6000 / 200 = 30.0\\text{ cm}^3$ ($1/V = 0.0333\\text{ cm}^{-3}$). This point lies visibly off the straight line.
4. Proportionality test: A straight line passing directly through the origin $(0, 0)$ confirms direct proportionality between $p$ and $1/V$, which verifies that $p$ is inversely proportional to $V$.`,
    equations: `p = k \\cdot \\frac{1}{V}; \\quad \\text{Straight line passing through } (0, 0) \\iff p \\propto \\frac{1}{V}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Scale and Plotting",
        body: "x-axis: 1/V from 0 to 0.045 cm⁻³ (2 cm = 0.005 cm⁻³).\ny-axis: p from 0 to 250 kPa (2 cm = 25 or 50 kPa).\nPlot points: (0.0167, 100), (0.0200, 120), (0.0250, 150), (0.0370, 200), (0.0400, 240).\nDraw a straight line of best fit passing through (0, 0) and through the points at 100, 120, 150, and 240 kPa, ignoring the anomalous point."
      },
      {
        step: 2,
        title: "Part (b) Identify Anomaly",
        body: "The point at p = 200 kPa (V = 27.0 cm³, 1/V = 0.0370 cm⁻³) lies significantly above the best-fit line. Anomaly corresponds to V = 27.0 cm³."
      },
      {
        step: 3,
        title: "Part (c) Proportionality Criterion",
        body: "The graph is a straight line that passes through the origin (0, 0)."
      }
    ],
    finalAnswer: "(a) Accurately plotted linear graph with labeled axes and a straight best-fit line through the origin;\n(b) The point at p = 200 kPa, corresponding to V = 27.0 cm³;\n(c) The graph is a straight line passing through the origin (0, 0).",
    reasonablenessCheck: "Points at 100, 120, 150, and 240 kPa share a constant product $pV = 6000\\text{ kPa}\\cdot\\text{cm}^3$; the point at 200 kPa has $pV = 5400$, confirming it is anomalous.",
    commonMistakes: [
      "Forcing the best-fit line through the anomalous point.",
      "Stating 'it is a straight line' without mentioning that it passes through the origin.",
      "Omitting units on axes."
    ],
    takeaway: "Plotting p against 1/V yields a straight line through the origin for Boyle's law; points deviating from the line indicate experimental anomalies.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { plotType: "oneOverV" },
      controls: [],
      readouts: [
        { label: "Graph Profile", expr: () => "Straight line through (0,0)" },
        { label: "Anomaly", expr: () => "(0.0370, 200 kPa) lies off line" },
        { label: "Slope k = pV", expr: () => "6000 kPa·cm³" }
      ],
      explanation: "A graph of p vs 1/V produces a straight line through the origin, clearly revealing the anomalous point at V = 27.0 cm³."
    }
  },
  {
    globalId: "Q049",
    examId: "Q02926",
    paperRef: "5054/41/O/N/22 Q1",
    pdfPage: 49,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: Absolute Zero Extrapolation from Charles's Law",
    paperType: "atp",
    marks: 6,
    questionText: `A student investigates how the length L of an air column trapped in a uniform capillary tube varies with temperature θ in °C.
Table 1.1 shows the results:
θ / °C: 20, 40, 60, 80, 100
L / mm: 146, 156, 166, 176, 186

(a) Plot a graph of length L on the y-axis against temperature θ on the x-axis for values of θ from 0 to 100 °C. [3]
(b) (i) Determine the gradient m of your line. [2]
(ii) The equation for the line is L = m * θ + c. Read the intercept c on the y-axis at θ = 0 °C. [1]
(c) The theoretical value of absolute zero θ_0 is found by setting L = 0 in the equation:
θ_0 = -c / m
Calculate your experimental value for absolute zero θ_0 in °C. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Plot Charles's Law data, compute line gradient and intercept, and extrapolate to calculate the experimental value of absolute zero.",
    givenInfo: [
      "θ values: 20, 40, 60, 80, 100 °C.",
      "L values: 146, 156, 166, 176, 186 mm.",
      "Equation: L = m * θ + c; absolute zero: θ_0 = -c / m."
    ],
    toFind: "Linear graph, gradient m, y-intercept c, and calculated absolute zero θ_0.",
    physicsConcepts: `Charles's Law linear extrapolation:
1. Charles's Law states volume (and column length $L$ in a uniform capillary) varies linearly with Celsius temperature:
$$L = m \\theta + c$$
2. Gradient:
$$m = \\frac{\\Delta L}{\\Delta \\theta} = \\frac{186 - 146}{100 - 20} = \\frac{40}{80} = 0.50\\text{ mm/}^\\circ\\text{C}$$
3. Y-intercept: At $\\theta = 0^\\circ\\text{C}$, $L = 146 - (20 \\times 0.50) = 136\\text{ mm}$.
4. Absolute zero extrapolation: Setting column length $L = 0$ gives:
$$0 = m \\theta_0 + c \\implies \\theta_0 = -\\frac{c}{m} = -\\frac{136}{0.50} = -272^\\circ\\text{C}$$`,
    equations: `m = \\frac{y_2 - y_1}{x_2 - x_1}; \\quad L = m \\theta + c; \\quad \\theta_0 = -\\frac{c}{m}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Plotting the Graph",
        body: "x-axis: temperature θ from 0 to 100 °C (2 cm = 20 °C).\ny-axis: length L from 130 to 190 mm (2 cm = 10 mm).\nPlot points: (20, 146), (40, 156), (60, 166), (80, 176), (100, 186). Draw a straight line of best fit."
      },
      {
        step: 2,
        title: "Part (b)(i) Calculate Gradient m",
        body: "Select two points on the line: (0, 136) and (100, 186).\nΔL = 186 - 136 = 50 mm.\nΔθ = 100 - 0 = 100 °C.\nm = 50 mm / 100 °C = 0.50 mm/°C."
      },
      {
        step: 3,
        title: "Part (b)(ii) Read Intercept c",
        body: "At θ = 0 °C, the line intersects the y-axis at c = 136 mm."
      },
      {
        step: 4,
        title: "Part (c) Calculate Absolute Zero",
        body: "θ_0 = -c / m = -(136 mm) / (0.50 mm/°C) = -272 °C."
      }
    ],
    finalAnswer: "(a) Straight-line graph plotted accurately;\n(b)(i) gradient m = 0.50 mm/°C;\n(b)(ii) intercept c = 136 mm;\n(c) θ_0 = -272 °C (acceptable range: -265 °C to -280 °C).",
    reasonablenessCheck: "Experimental result of -272 °C is within 0.4% of the accepted value of -273.15 °C.",
    commonMistakes: [
      "Inverting the gradient calculation: 100 / 50 = 2.0.",
      "Forgetting the negative sign on absolute zero.",
      "Using a small triangle for gradient calculation."
    ],
    takeaway: "Extrapolating a Charles's law L-θ graph to zero volume (L = 0) provides an experimental estimate for absolute zero: θ_0 = -c/m.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { extrapolateAbsZero: true },
      controls: [],
      readouts: [
        { label: "Gradient m", expr: () => "0.50 mm/°C" },
        { label: "Intercept c", expr: () => "136 mm at 0 °C" },
        { label: "Extrapolated Zero", expr: () => "-272 °C (0 K)" }
      ],
      explanation: "Extrapolating the linear column expansion curve to L = 0 yields an experimental value for absolute zero of -272 °C."
    }
  },
  {
    globalId: "Q050",
    examId: "Q02439",
    paperRef: "5054/22/O/N/22 Q2",
    pdfPage: 50,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Aerosol Can Thermal Hazard: Molecular Explanation",
    paperType: "theory",
    marks: 4,
    questionText: `An aerosol spray can contains gas under high pressure.
A warning label on the can states: "Do not expose to temperatures exceeding 50 °C. Do not incinerate."
(a) Explain, in terms of molecules, why the pressure inside the can increases when its temperature rises. [3]
(b) State the danger of throwing an aerosol can into a fire. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain using kinetic theory why heating an aerosol can increases internal pressure, and identify the resulting physical hazard.",
    givenInfo: [
      "Rigid aerosol spray can containing gas.",
      "Warning label against exposure to temperatures > 50 °C."
    ],
    toFind: "Three-mark kinetic explanation of pressure increase, and physical danger.",
    physicsConcepts: `Thermal pressure hazard in sealed containers:
1. Constant volume: The metal can has a fixed volume.
2. Molecular motion: When heated, gas molecules absorb thermal energy; their average kinetic energy increases and they move faster ($v \\propto \\sqrt{T}$).
3. Wall collisions:
   - Faster molecules collide with the container walls more frequently.
   - Each impact involves a larger momentum change, exerting a greater force per collision.
   - Both factors increase the force per unit area, raising the internal pressure.
4. Rupture hazard: If internal pressure exceeds the mechanical strength of the metal seam or crimped valve, the can will burst or explode, producing flying shrapnel and a fire hazard.`,
    equations: `T \\uparrow \\implies \\overline{E_k} \\uparrow \\implies v \\uparrow; \\quad p = \\frac{F}{A} \\uparrow; \\quad p > p_{\\text{burst}} \\implies \\text{Explosion}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Molecular Explanation (3 marks)",
        body: "1. The gas molecules gain kinetic energy and move faster as temperature rises.\n2. Faster molecules collide with the walls of the can more frequently.\n3. Each collision exerts a greater force / larger change in momentum, so the pressure increases."
      },
      {
        step: 2,
        title: "Part (b) State the Danger (1 mark)",
        body: "The internal pressure will become high enough to cause the can to burst / explode violently."
      }
    ],
    finalAnswer: "(a) Molecules gain kinetic energy and move faster; they collide with the walls of the can more frequently and with greater force / momentum change, increasing pressure;\n(b) The can may explode / burst violently.",
    reasonablenessCheck: "Pressures inside heated aerosol cans can exceed 15–20 atmospheres, easily surpassing the structural limit of thin tinplate.",
    commonMistakes: [
      "Stating the molecules expand inside the can.",
      "Saying the gas turns into a solid."
    ],
    takeaway: "Heating a rigid can increases molecular speeds, producing harder and more frequent wall collisions that can cause the can to burst.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { tempC: 80 },
      controls: [
        { id: "tempC", name: "Can Temperature", min: 20, max: 120, step: 20, default: 80, unit: "°C" }
      ],
      readouts: [
        { label: "Internal Pressure", expr: (p) => (200 * (p.tempC + 273) / 293).toFixed(0) + " kPa" },
        { label: "Structural Status", expr: (p) => p.tempC > 90 ? "DANGER: High Burst Risk" : "Intact" }
      ],
      explanation: "Heating increases collision frequency and impact force, driving internal pressure toward the burst limit."
    }
  },
  {
    globalId: "Q051",
    examId: "Q02988",
    paperRef: "5054/21/M/J/23 Q2(c)",
    pdfPage: 51,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Brownian Motion: Particle Mass and Displacement",
    paperType: "theory",
    marks: 3,
    questionText: `In a Brownian motion experiment, two different sizes of smoke particles are observed under identical conditions:
- Particle A: small smoke particle
- Particle B: large smoke particle
(a) Describe how the motion of Particle A differs from the motion of Particle B. [1]
(b) Explain this difference in terms of the collisions with air molecules. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Compare the Brownian motion of small vs large smoke particles and explain the difference using molecular collisions.",
    givenInfo: [
      "Particle A: small mass / diameter.",
      "Particle B: large mass / diameter.",
      "Identical temperature and air pressure."
    ],
    toFind: "Observable motion difference and physical explanation based on collisions.",
    physicsConcepts: `Inertia and statistical fluctuation in Brownian motion:
1. Newton's Second Law: $a = F_{\\text{net}} / m$. For a given unbalanced impact force, a particle with smaller mass experiences a larger acceleration and moves faster with larger, sharper displacements.
2. Statistical cancellation:
   - A larger particle has a larger surface area, so it is struck by vastly more air molecules simultaneously from all directions.
   - The microscopic impacts average out across the surface, meaning the percentage net force unbalance is much smaller.
   - Combined with higher inertia ($m \\propto r^3$), large particles show minimal, sluggish displacement. Small particles experience noticeable net force unbalances and accelerate readily.`,
    equations: `a = \\frac{F_{\\text{net}}}{m}; \\quad m \\propto r^3; \\quad \\frac{\\Delta N}{N} \\propto \\frac{1}{\\sqrt{N}} \\implies \\text{Smaller particles show larger erratic motion}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Describe Motion Difference (1 mark)",
        body: "Particle A moves faster / changes direction more sharply / has larger displacements than Particle B (Particle B moves more slowly / sluggishly)."
      },
      {
        step: 2,
        title: "Part (b) Collision Explanation (2 marks)",
        body: "Particle A has less mass / inertia, so an unbalanced collision force produces a larger acceleration (a = F/m). Additionally, larger Particle B has collisions from air molecules on opposite sides that average out more completely."
      }
    ],
    finalAnswer: "(a) Particle A moves faster and changes direction more erratically / has larger displacements than Particle B;\n(b) Particle A has less mass / inertia, so unbalanced collision forces produce greater acceleration; on larger Particle B, molecular collisions from opposite sides cancel out more effectively.",
    reasonablenessCheck: "Dust motes visible to the naked eye show no Brownian motion because trillions of impacts cancel out, while sub-micron smoke particles exhibit rapid movement.",
    commonMistakes: [
      "Stating that larger particles move faster because they get hit by more air molecules.",
      "Failing to mention inertia or acceleration ($a = F/m$)."
    ],
    takeaway: "Smaller particles exhibit more vigorous Brownian motion because lower inertia produces larger accelerations and molecular impacts cancel out less completely.",
    simulation: {
      type: "brownian_motion",
      defaultParams: { particleSize: "small" },
      controls: [
        { id: "particleSize", name: "Particle Size", min: 1, max: 5, step: 1, default: 1, unit: "relative" }
      ],
      readouts: [
        { label: "Particle Acceleration", expr: (p) => p.particleSize === 1 ? "High (Vigorous)" : "Low (Sluggish)" }
      ],
      explanation: "Smaller particles have lower inertia and poorer collision cancellation, producing larger, more erratic accelerations."
    }
  },
  {
    globalId: "Q052",
    examId: "Q02129",
    paperRef: "5054/22/M/J/23 Q2",
    pdfPage: 52,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Domestic Evaporation vs Boiling Comparison",
    paperType: "theory",
    marks: 4,
    questionText: `Water is heated in an electric kettle until it boils.
Some hot water is then poured into a shallow open bowl and allowed to cool.
(a) State two differences between the boiling that occurred in the kettle and the evaporation occurring in the bowl. [2]
(b) Explain, in terms of molecules, why placing a lid on the bowl reduces the rate of cooling. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "List two operational differences between boiling and evaporation, and explain why a lid suppresses evaporative cooling using kinetic theory.",
    givenInfo: [
      "Water boiling in a kettle.",
      "Water evaporating from a shallow bowl."
    ],
    toFind: "Two physical differences between boiling and evaporation, and molecular explanation of how a lid reduces cooling.",
    physicsConcepts: `Phase change mechanics and evaporative barriers:
1. Differences:
   - Temperature: Boiling occurs only at the boiling point (100 °C at 1 atm); evaporation occurs at any temperature below 100 °C.
   - Location / Bubbles: Boiling occurs throughout the entire liquid volume with steam bubbles forming; evaporation occurs only at the exposed surface without bubbles.
2. Effect of lid:
   - Escaping high-energy molecules are trapped in the space beneath the lid.
   - This air space rapidly becomes saturated with water vapor.
   - Escaped molecules collide with the lid and condense back into the liquid, returning their latent heat.
   - The rate of net evaporation falls to zero, suppressing evaporative heat loss.`,
    equations: `\\text{Boiling: } T = 100^\\circ\\text{C}, \\text{ bubbles throughout}; \\quad \\text{Evaporation: Any } T, \\text{ surface only}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Two Differences (2 marks)",
        body: "1. Boiling occurs at a fixed temperature (100 °C), while evaporation occurs at any temperature.\n2. Boiling occurs throughout the liquid (bubbles form), while evaporation occurs only at the surface (no bubbles)."
      },
      {
        step: 2,
        title: "Part (b) Molecular Explanation of Lid Effect (2 marks)",
        body: "The lid traps evaporated water vapor molecules in the space above the liquid. The air becomes saturated, and vapor molecules condense back into the water, preventing energetic molecules from escaping and reducing evaporative heat loss."
      }
    ],
    finalAnswer: "(a) 1. Boiling occurs at a specific temperature (100 °C), evaporation at any temperature; 2. Boiling forms bubbles throughout the liquid, evaporation occurs only at the surface;\n(b) The lid traps evaporated water molecules, saturating the air above the water so that molecules condense back into the liquid, stopping evaporative heat loss.",
    reasonablenessCheck: "Covering hot food with a lid keeps it warm much longer because surface evaporation is suppressed.",
    commonMistakes: [
      "Stating boiling is fast and evaporation is slow (descriptive rather than physical difference).",
      "Saying the lid generates heat."
    ],
    takeaway: "Boiling occurs throughout the liquid at a fixed temperature with bubbles; evaporation occurs only at the surface at any temperature. A lid suppresses evaporation by trapping vapor.",
    simulation: {
      type: "evaporation",
      defaultParams: { lidPresent: true },
      controls: [],
      readouts: [
        { label: "Net Evaporation", expr: () => "Zero (Saturated under lid)" },
        { label: "Heat Retention", expr: () => "High (Evaporative loss stopped)" }
      ],
      explanation: "A lid traps water vapor molecules, saturating the air space above the liquid and stopping evaporative cooling."
    }
  },
  {
    globalId: "Q053",
    examId: "Q01822",
    paperRef: "5054/42/O/N/23 Q1",
    pdfPage: 53,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: Planning Investigation on Evaporation Rate vs Surface Area",
    paperType: "atp",
    marks: 6,
    questionText: `A student wants to investigate how the exposed surface area A of an open container affects the rate of evaporation of ethanol.
Plan an experiment to investigate this relationship.
You are provided with:
- a supply of liquid ethanol
- containers of three different surface areas (e.g. diameter 4 cm, 6 cm, 8 cm)
- an electronic balance reading to 0.01 g
- a stopwatch.

In your plan, you should:
- describe how the experiment is set up and carried out
- state the measurements to be taken
- state the variables that must be kept constant
- explain how the results are evaluated to determine the relationship. [6]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Design a complete experimental investigation to evaluate how surface area affects ethanol evaporation rate, including setup, measurements, controls, and data evaluation.",
    givenInfo: [
      "Liquid ethanol.",
      "Containers of three different diameters (surface areas).",
      "Electronic balance (0.01 g resolution), stopwatch."
    ],
    toFind: "Full experimental procedure, measurement plan, control variables, and data analysis method.",
    physicsConcepts: `Experimental design for evaporation kinetics:
1. Independent variable: Exposed surface area $A$ of container ($A = \\pi d^2 / 4$).
2. Dependent variable: Rate of evaporation = mass of ethanol lost per unit time:
$$\\text{Rate} = \\frac{\\Delta m}{\\Delta t} = \\frac{m_{\\text{initial}} - \\m_{\\text{final}}}{t}$$
3. Controlled variables:
   - Initial mass/volume of ethanol in each container.
   - Evaporation duration $t$ (e.g. 30 minutes).
   - Ambient room temperature.
   - Surrounding air movement (carried out in still air without draughts).
   - Container material and wall height.
4. Data evaluation: Calculate mass loss $\\Delta m$ for each container. Plot a graph of mass lost per minute against surface area $A$. A straight line through the origin confirms rate is directly proportional to surface area.`,
    equations: `A = \\frac{\\pi d^2}{4}; \\quad \\Delta m = m_{\\text{initial}} - m_{\\text{final}}; \\quad \\text{Rate} = \\frac{\\Delta m}{t}; \\quad \\text{Rate} \\propto A`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Setup and Procedure (Marks 1 & 2)",
        body: "Measure the diameter d of each container using a ruler and calculate surface area A = πd²/4. Pour an equal volume/mass of ethanol into each container. Place each container on the balance and record initial mass m_1."
      },
      {
        step: 2,
        title: "Timing and Measurements (Mark 3)",
        body: "Start the stopwatch and allow the containers to sit side-by-side for a fixed time t (e.g., 30 minutes). At the end of time t, record the final mass m_2 of each container."
      },
      {
        step: 3,
        title: "Control Variables (Marks 4 & 5)",
        body: "Keep constant: room temperature; air movement / draughts (keep windows closed); initial mass/volume of ethanol; duration of evaporation; material of containers."
      },
      {
        step: 4,
        title: "Evaluation and Conclusion (Mark 6)",
        body: "Calculate the mass lost Δm = m_1 - m_2 for each container. Calculate rate = Δm / t. Plot a graph of rate of evaporation on the y-axis against surface area A on the x-axis to deduce the relationship (expected to be directly proportional)."
      }
    ],
    finalAnswer: "1. Setup: Measure container diameters to calculate area A = πd²/4; pour equal masses of ethanol into each container;\n2. Measurements: Record initial mass m_1 and final mass m_2 after fixed time t using balance;\n3. Controlled variables: Temperature, draughts/air movement, duration t, container material;\n4. Evaluation: Calculate mass loss Δm = m_1 - m_2; plot rate (Δm/t) against surface area A (expected: straight line through origin).",
    reasonablenessCheck: "Using an electronic balance to track mass loss over 30 minutes provides high-resolution data for volatile liquids like ethanol without needing volume estimates.",
    commonMistakes: [
      "Measuring liquid depth instead of mass lost.",
      "Failing to control surrounding draughts or ambient temperature.",
      "Varying the duration of evaporation between containers."
    ],
    takeaway: "A complete experimental design requires: setup, clear measurements, key controlled variables, and an analytical conclusion linking rate of mass loss to surface area.",
    simulation: {
      type: "evaporation",
      defaultParams: { areaInvestigation: true },
      controls: [],
      readouts: [
        { label: "Container 1 (4 cm)", expr: () => "Δm = 0.45 g (Rate: 0.015 g/min)" },
        { label: "Container 2 (6 cm)", expr: () => "Δm = 1.01 g (Rate: 0.034 g/min)" },
        { label: "Container 3 (8 cm)", expr: () => "Δm = 1.80 g (Rate: 0.060 g/min)" }
      ],
      explanation: "Testing containers of different diameters shows that mass loss rate is directly proportional to exposed surface area."
    }
  },
  {
    globalId: "Q054",
    examId: "Q00235",
    paperRef: "5054/11/M/J/20 Q16",
    pdfPage: 54,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermal Expansion: Solids vs Liquids vs Gases",
    paperType: "mcq",
    marks: 1,
    questionText: `Equal volumes of a solid, a liquid, and a gas are heated through the same increase in temperature at constant pressure.
Which list correctly orders the three states of matter by their expansion, from greatest expansion to least expansion?

A gas -> liquid -> solid
B gas -> solid -> liquid
C solid -> liquid -> gas
D liquid -> gas -> solid`,
    options: [
      { key: "A", text: "gas -> liquid -> solid" },
      { key: "B", text: "gas -> solid -> liquid" },
      { key: "C", text: "solid -> liquid -> gas" },
      { key: "D", text: "liquid -> gas -> solid" }
    ],
    correctOption: "A",
    whatIsAsking: "Order solids, liquids, and gases by the extent of their thermal expansion for an equal temperature rise.",
    givenInfo: [
      "Equal initial volumes.",
      "Same temperature increase (ΔT).",
      "Constant pressure."
    ],
    toFind: "Descending order of thermal expansion: greatest -> least.",
    physicsConcepts: `Thermal expansion across states of matter:
1. Gases expand the most: Intermolecular forces are negligible, so a temperature rise causes molecules to push much further apart ($\gamma_{\\text{gas}} \\approx 3.4 \\times 10^{-3}\\text{ K}^{-1}$, expanding by ~30% per 100 °C rise).
2. Liquids expand moderately: Intermolecular attractive forces are intermediate; particles remain touching but push slightly further apart ($\gamma_{\\text{liquid}} \\approx 2\\text{--}10 \\times 10^{-4}\\text{ K}^{-1}$).
3. Solids expand the least: Strong intermolecular bonds lock particles into a crystalline lattice, so larger vibrational amplitudes produce only a tiny increase in equilibrium spacing ($\gamma_{\\text{solid}} \\approx 3\\text{--}6 \\times 10^{-5}\\text{ K}^{-1}$, expanding by ~0.1% per 100 °C rise).`,
    equations: `\\Delta V = V_0 \\gamma \\Delta T; \\quad \\gamma_{\\text{gas}} \\gg \\gamma_{\\text{liquid}} > \\gamma_{\\text{solid}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compare Expansion Strengths",
        body: "Gases expand most because intermolecular forces are negligible. Solids expand least because strong lattice bonds resist displacement."
      },
      {
        step: 2,
        title: "Order the States",
        body: "Greatest expansion: gas -> intermediate: liquid -> least expansion: solid."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Option A: gas -> liquid -> solid."
      }
    ],
    finalAnswer: "A (gas -> liquid -> solid)",
    reasonablenessCheck: "Hot air expands enough to lift balloons; mercury expands enough to rise up a narrow tube; railway tracks expand by only a few millimeters.",
    commonMistakes: [
      "Inverting the sequence to solid -> liquid -> gas (Option C).",
      "Thinking liquids expand more than gases."
    ],
    takeaway: "For an equal temperature rise, gases expand most, liquids expand moderately, and solids expand least.",
    simulation: {
      type: "thermal_expansion_rod",
      defaultParams: { stateCompare: true },
      controls: [],
      readouts: [
        { label: "Gas Expansion", expr: () => "Greatest (~30% / 100 °C)" },
        { label: "Liquid Expansion", expr: () => "Intermediate (~2% / 100 °C)" },
        { label: "Solid Expansion", expr: () => "Least (~0.1% / 100 °C)" }
      ],
      explanation: "Weak intermolecular forces allow gases to expand far more than liquids and solids for the same temperature rise."
    }
  },
  {
    globalId: "Q055",
    examId: "Q00236",
    paperRef: "5054/12/M/J/20 Q17",
    pdfPage: 54,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Bimetallic Strip Bending Mechanism",
    paperType: "mcq",
    marks: 1,
    questionText: `A bimetallic strip is made by riveting a strip of brass to a strip of iron.
Brass expands more than iron for the same temperature rise.
When the strip is heated uniformly, what happens to the bimetallic strip?

A It bends with the brass on the outside of the curve.
B It bends with the iron on the outside of the curve.
C It remains straight but its length increases.
D It contracts and twists sideways.`,
    options: [
      { key: "A", text: "It bends with the brass on the outside of the curve." },
      { key: "B", text: "It bends with the iron on the outside of the curve." },
      { key: "C", text: "It remains straight but its length increases." },
      { key: "D", text: "It contracts and twists sideways." }
    ],
    correctOption: "A",
    whatIsAsking: "Determine the direction of curvature when a brass-iron bimetallic strip is heated.",
    givenInfo: [
      "Brass and iron strips bonded together.",
      "Brass expands more than iron for the same temperature rise.",
      "The strip is heated."
    ],
    toFind: "Shape and orientation of the curve.",
    physicsConcepts: `Bimetallic strip curvature mechanics:
1. Two different metals are bonded firmly together at an interface.
2. When heated, both metals expand, but at different rates:
$$\\Delta L = L_0 \\alpha \\Delta T$$
Because brass has a higher linear expansivity ($\alpha_{\\text{brass}} \\approx 19 \\times 10^{-6}\\text{ K}^{-1}$) than iron ($\alpha_{\\text{iron}} \\approx 12 \\times 10^{-6}\\text{ K}^{-1}$), the brass layer becomes longer than the iron layer.
3. Because they are bonded along their length, the longer brass layer must form the outer arc of a curve to accommodate its greater length, while the shorter iron layer forms the inner arc.`,
    equations: `\\alpha_{\\text{brass}} > \\alpha_{\\text{iron}} \\implies L_{\\text{brass}} > L_{\\text{iron}} \\implies \\text{Brass on outside of curve}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compare Expansions",
        body: "Brass expands more than iron, so when heated, the brass strip becomes longer than the iron strip."
      },
      {
        step: 2,
        title: "Relate Relative Lengths to Curvature",
        body: "In a curved arc, the outer radius is longer than the inner radius ($s = r \\theta$). Therefore, the metal that expands more (brass) must be on the outside of the curve."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Option A: It bends with the brass on the outside of the curve."
      }
    ],
    finalAnswer: "A (It bends with the brass on the outside of the curve.)",
    reasonablenessCheck: "Bimetallic thermostats bend when heated to break an electrical contact, relying on the metal with higher expansivity forming the outer arc.",
    commonMistakes: [
      "Selecting Option B: the shorter metal forms the inside of the curve, not the outside.",
      "Selecting Option C: bonded metals cannot expand independently in a straight line."
    ],
    takeaway: "When heated, a bimetallic strip bends with the metal that expands more on the outside of the curve.",
    simulation: {
      type: "thermal_expansion_rod",
      defaultParams: { bimetallic: true, tempC: 80 },
      controls: [
        { id: "tempC", name: "Strip Temperature", min: 20, max: 120, step: 20, default: 80, unit: "°C" }
      ],
      readouts: [
        { label: "Outer Curve Metal", expr: () => "Brass (Expands More)" },
        { label: "Inner Curve Metal", expr: () => "Iron (Expands Less)" }
      ],
      explanation: "Heating causes the higher-expansion brass to elongate more, bending the strip with brass on the outside."
    }
  },
  {
    globalId: "Q056",
    examId: "Q00237",
    paperRef: "5054/11/O/N/20 Q18",
    pdfPage: 55,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermometer Sensitivity Design Factors",
    paperType: "mcq",
    marks: 1,
    questionText: `Which combination of design features produces a liquid-in-glass thermometer with the greatest sensitivity?

| | volume of bulb | diameter of capillary bore |
|---|---|---|
| A | large | narrow |
| B | large | wide |
| C | small | narrow |
| D | small | wide |`,
    options: [
      { key: "A", text: "volume of bulb: large | diameter of bore: narrow" },
      { key: "B", text: "volume of bulb: large | diameter of bore: wide" },
      { key: "C", text: "volume of bulb: small | diameter of bore: narrow" },
      { key: "D", text: "volume of bulb: small | diameter of bore: wide" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the combination of bulb size and bore diameter that maximizes thermometer sensitivity.",
    givenInfo: [
      "Liquid-in-glass thermometer design."
    ],
    toFind: "Bulb volume and bore diameter for maximum sensitivity.",
    physicsConcepts: `Thermometer sensitivity definition and mechanics:
Sensitivity is the distance moved by the liquid thread per unit change in temperature:
$$\\text{Sensitivity} = \\frac{\\Delta l}{\\Delta T}$$
1. Volume expansion: $\\Delta V = V_{\\text{bulb}} \\gamma \\Delta T$. A larger bulb holds more liquid, producing a larger volume expansion $\\Delta V$ for each 1 °C change.
2. Thread displacement:
$$\\Delta l = \\frac{\\Delta V}{A_{\\text{bore}}} = \\frac{4 \\Delta V}{\\pi d^2}$$
A narrower capillary bore (smaller cross-sectional area $A$) forces that volume change along a greater distance $\\Delta l$.
Therefore, a large bulb combined with a narrow bore maximizes sensitivity.`,
    equations: `\\text{Sensitivity} = \\frac{\\Delta l}{\\Delta T} = \\frac{4 V_{\\text{bulb}} \\gamma}{\\pi d^2} \\implies \\text{Maximize } V_{\\text{bulb}}, \\, \\text{minimize } d`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Bulb Volume",
        body: "A large bulb contains a larger mass/volume of liquid, producing a larger volume expansion per degree Celsius."
      },
      {
        step: 2,
        title: "Analyze Bore Diameter",
        body: "A narrow bore has a smaller cross-sectional area, causing the expanding liquid to move a greater distance along the tube."
      },
      {
        step: 3,
        title: "Match Row",
        body: "Row A pairs a large bulb volume with a narrow bore diameter."
      }
    ],
    finalAnswer: "A (volume of bulb: large | diameter of bore: narrow)",
    reasonablenessCheck: "Clinical thermometers detect 0.1 °C changes by pairing a large mercury reservoir with an extremely fine capillary bore.",
    commonMistakes: [
      "Selecting Option D, assuming a small bulb and wide bore allow easier expansion.",
      "Confusing sensitivity with range (a sensitive thermometer has a narrower range on a given stem length)."
    ],
    takeaway: "Thermometer sensitivity is maximized by using a large bulb (more expansion) and a narrow capillary bore (greater thread movement).",
    simulation: {
      type: "thermometer_design",
      defaultParams: { bulbSize: "large", boreSize: "narrow" },
      controls: [],
      readouts: [
        { label: "Sensitivity", expr: () => "MAXIMUM (Large Δl / °C)" },
        { label: "Bulb / Bore", expr: () => "Large Bulb + Narrow Bore" }
      ],
      explanation: "A large bulb yields substantial liquid expansion, while a narrow bore channels that expansion into maximum thread movement."
    }
  },
  {
    globalId: "Q057",
    examId: "Q00238",
    paperRef: "5054/12/O/N/20 Q19",
    pdfPage: 55,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermometer Linearity and Uniform Bore",
    paperType: "mcq",
    marks: 1,
    questionText: `A liquid-in-glass thermometer has a linear scale with degree markings equally spaced along its stem.
Which physical property of the thermometer ensures that the scale is linear?

A The capillary bore has a constant diameter along its entire length.
B The glass bulb has very thin walls.
C The thermometric liquid has a high boiling point.
D The glass stem has an oval cross-section.`,
    options: [
      { key: "A", text: "The capillary bore has a constant diameter along its entire length." },
      { key: "B", text: "The glass bulb has very thin walls." },
      { key: "C", text: "The thermometric liquid has a high boiling point." },
      { key: "D", text: "The glass stem has an oval cross-section." }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the construction feature that ensures equal degree spacing (linearity) on a thermometer.",
    givenInfo: [
      "Liquid-in-glass thermometer with equally spaced degree markings (linear scale)."
    ],
    toFind: "The design feature responsible for scale linearity.",
    physicsConcepts: `Linearity in liquid-in-glass thermometers:
1. A scale is linear if equal changes in temperature produce equal changes in the position of the liquid meniscus:
$$\\frac{\\Delta l}{\\Delta T} = \\text{constant}$$
2. Liquid expansion is uniform with temperature: $\\Delta V \\propto \\Delta T$.
3. Displacement along the capillary:
$$\\Delta l = \\frac{\\Delta V}{A} = \\frac{\\Delta V}{\\frac{\\pi d^2}{4}}$$
For $\\Delta l$ to be constant for equal $\\Delta V$, the cross-sectional area $A$ (and therefore bore diameter $d$) must be completely constant along the entire length of the tube.`,
    equations: `\\Delta l = \\frac{\\Delta V}{A} = \\text{const} \\iff A = \\text{const} \\iff d = \\text{const}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Define Linearity",
        body: "Linearity means the liquid thread moves by equal distances for equal increments of temperature (constant spacing between degree marks)."
      },
      {
        step: 2,
        title: "Relate to Capillary Geometry",
        body: "Since the liquid expands uniformly by equal volumes per degree, the thread will move by equal distances only if the capillary tube has a uniform cross-sectional area (constant bore diameter)."
      },
      {
        step: 3,
        title: "Evaluate Distractors",
        body: "B (thin wall) affects response speed. C (high boiling point) affects range. D (oval stem) acts as a magnifying lens."
      }
    ],
    finalAnswer: "A (The capillary bore has a constant diameter along its entire length.)",
    reasonablenessCheck: "If a bore narrows toward the top, the liquid thread would move further per degree at higher temperatures, destroying linearity.",
    commonMistakes: [
      "Selecting Option B: thin walls increase response speed, not linearity.",
      "Selecting Option C: boiling point determines upper range, not scale linearity."
    ],
    takeaway: "A thermometer scale is linear because the capillary bore has a uniform diameter along its entire length.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { boreUniform: true },
      controls: [],
      readouts: [
        { label: "Bore Geometry", expr: () => "Uniform Diameter" },
        { label: "Scale Graduation", expr: () => "Equally spaced degree markings" }
      ],
      explanation: "A constant bore diameter ensures equal volume expansions produce equal thread movements along the stem."
    }
  },
  {
    globalId: "Q058",
    examId: "Q00239",
    paperRef: "5054/11/M/J/21 Q16",
    pdfPage: 56,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermocouple Advantages over Glass Thermometers",
    paperType: "mcq",
    marks: 1,
    questionText: `Which temperature measurement situation is best suited to a thermocouple thermometer rather than a liquid-in-glass thermometer?

A measuring body temperature in a medical clinic
B measuring steady room temperature over a week
C measuring rapidly changing high temperatures inside a furnace
D measuring the freezing point of water in an ice bath`,
    options: [
      { key: "A", text: "measuring body temperature in a medical clinic" },
      { key: "B", text: "measuring steady room temperature over a week" },
      { key: "C", text: "measuring rapidly changing high temperatures inside a furnace" },
      { key: "D", text: "measuring the freezing point of water in an ice bath" }
    ],
    correctOption: "C",
    whatIsAsking: "Identify the measurement application where a thermocouple's properties make it the superior instrument.",
    givenInfo: [
      "Comparison between thermocouple thermometer and liquid-in-glass thermometer."
    ],
    toFind: "The most appropriate application for a thermocouple.",
    physicsConcepts: `Properties of thermocouple thermometers:
1. Thermoelectric effect: Two different metals joined at two junctions produce an electromotive force (e.m.f.) proportional to the temperature difference between the junctions.
2. Advantages:
   - High temperature range: Can measure temperatures up to 1500 °C or higher (well above the boiling point of mercury, 357 °C).
   - Fast response time: The wire sensing junction has a very small mass and small thermal capacity, allowing it to equilibrate almost instantly.
   - Measures rapidly fluctuating temperatures.
   - Small physical size: Can measure temperature at a pinpoint location.
   - Electrical output: Directly interfaces with digital dataloggers and control systems.`,
    equations: `\\text{e.m.f.} \\propto (T_{\\text{hot}} - T_{\\text{cold}}); \\quad \\tau_{\\text{thermocouple}} \\ll \\tau_{\\text{glass thermometer}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Thermocouple Strengths",
        body: "Thermocouples excel at measuring very high temperatures (furnaces) and rapidly fluctuating temperatures due to their small thermal capacity and high melting points."
      },
      {
        step: 2,
        title: "Evaluate Options",
        body: "A (body temp) is suited to clinical thermometers. B (steady room temp) and D (ice bath) are standard low, steady temperatures easily measured by liquid-in-glass thermometers. C (rapidly changing furnace temp) requires high-temperature durability and fast response."
      }
    ],
    finalAnswer: "C (measuring rapidly changing high temperatures inside a furnace)",
    reasonablenessCheck: "Liquid-in-glass thermometers melt or burst at furnace temperatures (>500 °C) and respond too slowly to track rapid fluctuations.",
    commonMistakes: [
      "Selecting Option A: clinical thermometers are clinical liquid-in-glass or infrared, not industrial thermocouples.",
      "Thinking thermocouples are only used for measuring cold temperatures."
    ],
    takeaway: "Thermocouples are ideal for measuring rapidly changing high temperatures due to their wide range and fast response.",
    simulation: {
      type: "thermocouple_sim",
      defaultParams: { tempC: 850 },
      controls: [
        { id: "tempC", name: "Furnace Temp", min: 100, max: 1200, step: 50, default: 850, unit: "°C" }
      ],
      readouts: [
        { label: "Thermocouple e.m.f.", expr: (p) => (p.tempC * 0.041).toFixed(2) + " mV" },
        { label: "Response Time", expr: () => "< 0.1 s (Near instant)" }
      ],
      explanation: "Thermocouples measure temperatures up to 1200 °C with millisecond response times."
    }
  },
  {
    globalId: "Q059",
    examId: "Q00240",
    paperRef: "5054/12/M/J/21 Q16",
    pdfPage: 56,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Clinical Thermometer Constriction Function",
    paperType: "mcq",
    marks: 1,
    questionText: `A clinical thermometer has a narrow constriction in the capillary tube just above the bulb.
What is the function of this constriction?

A It prevents the mercury from contracting when heated.
B It prevents the mercury thread from falling back into the bulb before the reading can be taken.
C It increases the sensitivity of the thermometer across its entire range.
D It ensures the mercury expands in equal increments for equal temperature rises.`,
    options: [
      { key: "A", text: "It prevents the mercury from contracting when heated." },
      { key: "B", text: "It prevents the mercury thread from falling back into the bulb before the reading can be taken." },
      { key: "C", text: "It increases the sensitivity of the thermometer across its entire range." },
      { key: "D", text: "It ensures the mercury expands in equal increments for equal temperature rises." }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the purpose of the constriction in a clinical thermometer.",
    givenInfo: [
      "Clinical liquid-in-glass thermometer with narrow constriction above the bulb."
    ],
    toFind: "The function of the constriction.",
    physicsConcepts: `Clinical thermometer design:
1. Operational requirement: A clinical thermometer is placed in a patient's mouth or armpit (at body temperature ~37 °C) and then removed into cooler room air (~20 °C) to be read.
2. Function of constriction:
   - When heated in the body, expanding mercury forces its way through the narrow constriction up the stem.
   - When removed from the patient into cooler air, the mercury in the bulb cools and contracts immediately.
   - The narrow thread of mercury breaks at the constriction, preventing the mercury above it from flowing back into the bulb.
   - This keeps the reading stable at the patient's maximum body temperature until recorded by a nurse.
   - The mercury must be shaken down before reuse.`,
    equations: `\\text{Cooling outside body} \\implies \\text{Thread breaks at constriction} \\implies \\text{Reading maintained}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Clinical Procedure",
        body: "The thermometer is removed from the patient's warm body into cooler room air before the doctor or nurse reads it."
      },
      {
        step: 2,
        title: "Describe Constriction Action",
        body: "When the bulb cools in room air, mercury in the bulb contracts. The constriction causes the mercury thread to break, preventing the thread in the stem from dropping back down."
      },
      {
        step: 3,
        title: "Select Matching Option",
        body: "Option B: It prevents the mercury thread from falling back into the bulb before the reading can be taken."
      }
    ],
    finalAnswer: "B (It prevents the mercury thread from falling back into the bulb before the reading can be taken.)",
    reasonablenessCheck: "Without a constriction, the reading would drop toward room temperature before a nurse could read it.",
    commonMistakes: [
      "Selecting Option C: sensitivity is governed by bore diameter and bulb volume, not the constriction.",
      "Selecting Option D: linearity is governed by bore uniformity."
    ],
    takeaway: "The constriction breaks the mercury thread when cooled, preserving the maximum body temperature reading until shaken down.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { clinical: true },
      controls: [],
      readouts: [
        { label: "At 37 °C (in body)", expr: () => "Mercury expands through constriction" },
        { label: "Removed to 20 °C room", expr: () => "Thread breaks; holds 37.0 °C reading" }
      ],
      explanation: "The constriction breaks the mercury thread on cooling, locking in the maximum temperature reading."
    }
  },
  {
    globalId: "Q060",
    examId: "Q00241",
    paperRef: "5054/11/O/N/21 Q16",
    pdfPage: 57,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Fixed Points on the Celsius Scale",
    paperType: "mcq",
    marks: 1,
    questionText: `Which statement correctly defines the two fixed points used to calibrate the Celsius temperature scale?

| | lower fixed point (0 °C) | upper fixed point (100 °C) |
|---|---|---|
| A | temperature of pure melting ice | temperature of boiling water at any pressure |
| B | temperature of pure melting ice | temperature of steam above pure boiling water at standard atmospheric pressure |
| C | temperature of cold tap water | temperature of steam above pure boiling water at standard atmospheric pressure |
| D | temperature of a salt and ice mixture | temperature of boiling water at standard atmospheric pressure |`,
    options: [
      { key: "A", text: "lower: pure melting ice | upper: boiling water at any pressure" },
      { key: "B", text: "lower: pure melting ice | upper: steam above pure boiling water at standard atmospheric pressure" },
      { key: "C", text: "lower: cold tap water | upper: steam above pure boiling water at standard atmospheric pressure" },
      { key: "D", text: "lower: salt and ice mixture | upper: boiling water at standard atmospheric pressure" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the precise definitions of the lower (0 °C) and upper (100 °C) fixed points on the Celsius scale.",
    givenInfo: [
      "Calibration of the Celsius scale."
    ],
    toFind: "The accurate definitions for 0 °C and 100 °C.",
    physicsConcepts: `Definitions of fixed points on the Celsius scale:
1. Lower fixed point (ice point, 0 °C):
   - Defined as the temperature of pure melting ice at standard atmospheric pressure.
   - Melting ice is used because an ice-water mixture remains at a steady 0 °C while melting.
2. Upper fixed point (steam point, 100 °C):
   - Defined as the temperature of steam above pure boiling water at standard atmospheric pressure (101.3 kPa).
   - Steam is specified rather than the liquid water because impurities in water can raise its boiling point, while the steam above it remains at the true boiling temperature. Atmospheric pressure must be specified because boiling point varies with ambient pressure.`,
    equations: `T_{\\text{ice}} = 0^\\circ\\text{C} \\text{ (pure melting ice)}; \\quad T_{\\text{steam}} = 100^\\circ\\text{C} \\text{ (pure steam at } 101.3\\text{ kPa)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Define Lower Fixed Point",
        body: "The lower fixed point is the temperature of pure melting ice (0 °C)."
      },
      {
        step: 2,
        title: "Define Upper Fixed Point",
        body: "The upper fixed point is the temperature of steam above pure boiling water at standard atmospheric pressure (100 °C). Pressure must be specified because boiling temperature changes with atmospheric pressure."
      },
      {
        step: 3,
        title: "Match Row",
        body: "Row B is the only row stating both conditions correctly, including steam and standard atmospheric pressure."
      }
    ],
    finalAnswer: "B (lower: pure melting ice | upper: steam above pure boiling water at standard atmospheric pressure)",
    reasonablenessCheck: "Steam is specified because boiling water can be superheated or contaminated with dissolved minerals, whereas steam at 1 atm is always 100 °C.",
    commonMistakes: [
      "Selecting Option A: boiling point changes with atmospheric pressure, so pressure must be specified.",
      "Saying 'boiling water' instead of 'steam above boiling water'."
    ],
    takeaway: "The Celsius fixed points are pure melting ice (0 °C) and steam above pure boiling water at standard atmospheric pressure (100 °C).",
    simulation: {
      type: "thermometer_design",
      defaultParams: { fixedPointVerify: true },
      controls: [],
      readouts: [
        { label: "Lower Fixed Point", expr: () => "0.0 °C (Pure Melting Ice)" },
        { label: "Upper Fixed Point", expr: () => "100.0 °C (Pure Steam at 1 atm)" }
      ],
      explanation: "Fixed points rely on pure melting ice at 0 °C and steam above boiling water at 1 atm for 100 °C."
    }
  }
];