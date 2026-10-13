/**
 * Master Question Store: Batch 3 (Q031 to Q045)
 * Section 2.1: Kinetic Particle Model of Matter (Theory & ATP)
 */

const QUESTIONS_BATCH_3 = [
  {
    globalId: "Q031",
    examId: "Q01548",
    paperRef: "5054/21/M/J/23 Q2",
    pdfPage: 31,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Rapid Gas Compression and Thermal Work",
    paperType: "theory",
    marks: 5,
    questionText: `A bicycle pump contains a trapped volume of air.
The nozzle of the pump is blocked, and the handle is pushed inward very rapidly.
The volume of the air decreases from 120 cm³ to 40 cm³.
(a) The initial pressure of the air inside the pump is 100 kPa.
Assuming the temperature were to remain constant, calculate the pressure of the air at 40 cm³. [2]
(b) In practice, the temperature of the air inside the pump rises significantly when pushed in rapidly.
Explain, in terms of energy and work done, why the temperature increases. [2]
(c) State how the actual pressure of the air compares with your answer calculated in (a). [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate theoretical isothermal pressure, explain thermal rise during rapid adiabatic compression, and deduce the real pressure.",
    givenInfo: [
      "Initial volume V_1 = 120 cm³",
      "Initial pressure p_1 = 100 kPa",
      "Final volume V_2 = 40 cm³",
      "Nozzle is sealed; piston pushed inward rapidly."
    ],
    toFind: "Theoretical pressure p_2, physical explanation of temperature rise, and actual pressure comparison.",
    physicsConcepts: `Work done on gases and the First Law of Thermodynamics:
1. Isothermal prediction: $p_1 V_1 = p_2 V_2 \\implies p_2 = (p_1 V_1) / V_2$.
2. Work done on gas: When the piston is pushed inward against the gas pressure force, mechanical work is done on the gas ($W = \\int p \\, dV$).
3. Rapid compression (near-adiabatic): There is insufficient time for thermal energy to conduct through the pump walls to the surroundings ($Q \\approx 0$).
4. Increase in internal energy: By the first law of thermodynamics, $\\Delta U = Q + W = W$. The work done increases the internal kinetic energy of the air molecules, raising the gas temperature.
5. Effect on pressure: Higher temperature increases the average molecular speed, causing molecules to strike the walls harder and more frequently. Thus, actual pressure is higher than the isothermal calculated value.`,
    equations: `p_1 V_1 = p_2 V_2; \\quad \\Delta U = W \\implies T \\uparrow; \\quad p_{\\text{actual}} > p_{\\text{isothermal}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Calculate Theoretical Pressure",
        body: "Apply Boyle's Law: p_1 * V_1 = p_2 * V_2.\n100 kPa * 120 cm³ = p_2 * 40 cm³.\np_2 = (100 * 120) / 40 = 12 000 / 40 = 300 kPa."
      },
      {
        step: 2,
        title: "Part (b) Explain Temperature Increase (2 marks)",
        body: "Mechanical work is done on the trapped air when pushing the piston in. Because the compression is rapid, this work is transferred into the internal kinetic energy of the molecules, increasing their average speed and raising the temperature."
      },
      {
        step: 3,
        title: "Part (c) Compare Actual Pressure (1 mark)",
        body: "The actual pressure is greater / higher than 300 kPa (because higher temperature causes molecules to move faster and strike walls with greater force and frequency)."
      }
    ],
    finalAnswer: "(a) 300 kPa;\n(b) Work is done on the air by the piston, which increases the internal kinetic energy of the air molecules;\n(c) The actual pressure is greater than 300 kPa.",
    reasonablenessCheck: "Volume drops to 1/3, giving at least 3x pressure (300 kPa); heating further raises the pressure above 300 kPa.",
    commonMistakes: [
      "Stating friction between the piston and wall is the primary cause of air heating.",
      "Stating actual pressure is lower because air leaked out."
    ],
    takeaway: "Rapid compression does work on a gas without heat loss, raising internal kinetic energy, temperature, and pressure.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { volumeCm3: 40, tempC: 65 },
      controls: [],
      readouts: [
        { label: "Isothermal p", expr: () => "300 kPa (Constant T)" },
        { label: "Adiabatic p", expr: () => "345 kPa (Work done heats gas)" }
      ],
      explanation: "Work done on the gas increases internal molecular kinetic energy, raising both temperature and final pressure."
    }
  },
  {
    globalId: "Q032",
    examId: "Q01150",
    paperRef: "5054/22/M/J/23 Q3",
    pdfPage: 32,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Latent Heat and Heating Curve Plateaus",
    paperType: "theory",
    marks: 6,
    questionText: `A solid substance is heated at a constant rate from -20 °C to 120 °C.
Fig. 3.1 shows the heating curve with two horizontal flat sections: one at 0 °C (melting) and one at 100 °C (boiling).
(a) State what happens to the average kinetic energy of the molecules during the horizontal flat section at 0 °C. [1]
(b) Explain, in terms of molecules and intermolecular forces, why the temperature remains constant during melting even though thermal energy is being continuously supplied. [3]
(c) State why the flat section at 100 °C is longer than the flat section at 0 °C for equal masses. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain constant temperature plateaus during melting in terms of molecular bonds and compare fusion vs vaporisation energy.",
    givenInfo: [
      "Heating curve of a substance with plateaus at 0 °C and 100 °C.",
      "Thermal energy supplied at a steady constant rate."
    ],
    toFind: "Kinetic energy status during melting, molecular explanation of constant temperature, and explanation of why boiling plateau is longer.",
    physicsConcepts: `Thermodynamics of phase changes:
1. Temperature is a measure of average translational/vibrational kinetic energy of particles: $T \\propto \\overline{E_k}$.
2. Flat plateau during melting: Temperature does not change, so the average kinetic energy of the molecules remains constant.
3. Latent heat absorption: Thermal energy supplied is converted into molecular potential energy ($E_p$). It is used to do work against attractive intermolecular forces, breaking the rigid crystal lattice bonds and separating particles into a disordered liquid state.
4. Latent heat comparison:
   - Melting (fusion) only loosens the lattice and breaks some bonds, allowing particles to slide while remaining in contact.
   - Boiling (vaporisation) requires completely breaking all intermolecular bonds and separating molecules far apart against atmospheric pressure.
   - Therefore, specific latent heat of vaporisation is much larger than specific latent heat of fusion ($L_v \\gg L_f$), requiring more time at a constant heating rate.`,
    equations: `\\Delta Q = m L_f \\quad (T = \\text{const}); \\quad L_v \\gg L_f \\implies \\Delta t_{\\text{boiling}} > \\Delta t_{\\text{melting}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Average Kinetic Energy Status",
        body: "The average kinetic energy of the molecules remains constant / does not change (because temperature is constant)."
      },
      {
        step: 2,
        title: "Part (b) Molecular Explanation of Constant Temperature (3 marks)",
        body: "Thermal energy supplied is used to overcome / break attractive intermolecular bonds holding particles in the fixed solid lattice, increasing the potential energy of the molecules rather than their kinetic energy."
      },
      {
        step: 3,
        title: "Part (c) Why Boiling Plateau is Longer (2 marks)",
        body: "Boiling requires completely separating molecules and breaking all intermolecular forces, which requires significantly more energy than melting (where molecules remain in contact). More energy at a constant rate requires more time."
      }
    ],
    finalAnswer: "(a) Remains constant / unchanged;\n(b) Energy supplied is used to break intermolecular bonds / increase molecular potential energy rather than increasing kinetic energy;\n(c) Completely breaking all bonds and separating molecules during boiling requires much more energy than breaking the lattice during melting (L_v > L_f).",
    reasonablenessCheck: "Water's latent heat of vaporisation (2.3 MJ/kg) is roughly 7 times its latent heat of fusion (0.33 MJ/kg), making the boiling plateau ~7 times longer.",
    commonMistakes: [
      "Stating kinetic energy increases during melting.",
      "Saying molecules break into individual atoms during boiling."
    ],
    takeaway: "During a phase change, energy increases molecular potential energy to break bonds, keeping temperature and kinetic energy constant; boiling requires far more energy than melting.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { latentHeatPlateau: true },
      controls: [],
      readouts: [
        { label: "Melting Plateau", expr: () => "0 °C (Bonds loosened)" },
        { label: "Boiling Plateau", expr: () => "100 °C (All bonds broken, 7x longer)" }
      ],
      explanation: "Thermal energy increases potential energy rather than kinetic energy during phase changes, keeping temperature constant."
    }
  },
  {
    globalId: "Q033",
    examId: "Q00870",
    paperRef: "5054/21/O/N/23 Q2",
    pdfPage: 33,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Brownian Motion in Water: Pollen Grains",
    paperType: "theory",
    marks: 4,
    questionText: `In 1827, Robert Brown observed pollen grains suspended in water using a microscope.
The pollen grains were seen to move continuously in an erratic, random zig-zag path.
(a) Explain what causes the pollen grains to move in this way. [3]
(b) Explain why the pollen grains do not sink immediately to the bottom of the container despite being denser than water. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the microscopic mechanism behind the Brownian motion of pollen grains in water and why they remain suspended.",
    givenInfo: [
      "Pollen grains suspended in water viewed under a microscope.",
      "Continuous random zig-zag motion observed."
    ],
    toFind: "Cause of erratic motion and explanation for suspension against gravity.",
    physicsConcepts: `Brownian motion in liquids:
1. Water molecules are in continuous, random, rapid thermal motion.
2. Microscopic pollen grains are millions of times more massive than water molecules, but are small enough that the number of molecular collisions on opposite sides is not perfectly balanced at every instant.
3. Random fluctuations in the number and force of impacts create a net unbalanced instantaneous force that pushes the pollen grain in unpredictable directions.
4. Continuous molecular bombardment from beneath provides upward impulses that support the grains, preventing rapid gravitational settling.`,
    equations: `\\vec{F}_{\\text{net}}(t) = \\sum \\vec{F}_{\\text{collisions}}(t) \\neq 0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Cause of Pollen Grain Motion (3 marks)",
        body: "Invisible water molecules move continuously and randomly at high speed. They collide with / bombard the pollen grains unevenly on different sides. This unbalanced bombardment produces a fluctuating net force, resulting in random zig-zag motion."
      },
      {
        step: 2,
        title: "Part (b) Reason for Suspension (1 mark)",
        body: "Continuous upward collisions from the water molecules bombard the pollen grains and keep them suspended against gravity."
      }
    ],
    finalAnswer: "(a) Water molecules move randomly at high speed and collide unevenly with the pollen grains, producing a fluctuating net force in random directions;\n(b) Continuous upward collisions from water molecules counteract gravity and keep the grains suspended.",
    reasonablenessCheck: "Thermal energy of liquid molecules is sufficient to keep microscopic particles agitated and suspended against gravity.",
    commonMistakes: [
      "Stating pollen grains are living organisms swimming in the water (Brown proved this false using dead inorganic dye particles).",
      "Saying pollen grains collide with each other."
    ],
    takeaway: "Invisible water molecules collide unevenly with pollen grains, driving their random zig-zag motion and keeping them suspended.",
    simulation: {
      type: "brownian_motion",
      defaultParams: { medium: "water" },
      controls: [],
      readouts: [
        { label: "Fluid Medium", expr: () => "Water Molecules" },
        { label: "Suspended Particle", expr: () => "Pollen Grain" },
        { label: "Net Impulse", expr: () => "Fluctuates randomly in 2D/3D" }
      ],
      explanation: "Water molecules randomly collide with pollen grains on all sides, causing continuous zig-zag displacement."
    }
  },
  {
    globalId: "Q034",
    examId: "Q02886",
    paperRef: "5054/22/O/N/23 Q2",
    pdfPage: 34,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Boyle's Law: Cylinder Compression and Graphical Sketch",
    paperType: "theory",
    marks: 5,
    questionText: `A cylinder fitted with a smooth, gas-tight piston contains 80 cm³ of dry gas at an initial pressure of 150 kPa.
The piston is pushed in slowly at constant temperature until the pressure rises to 600 kPa.
(a) Calculate the final volume of the gas. [2]
(b) On the axes of Fig. 2.1, sketch the graph of pressure p against volume V for this compression. [2]
(c) State one assumption made about the gas in your calculation in (a). [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate final volume using Boyle's Law, sketch the p-V curve, and state a core gas law assumption.",
    givenInfo: [
      "V_1 = 80 cm³",
      "p_1 = 150 kPa",
      "p_2 = 600 kPa",
      "Temperature is constant"
    ],
    toFind: "Final volume V_2, sketch of p-V relationship, and one assumption.",
    physicsConcepts: `Boyle's Law analysis:
1. Equation: $p_1 V_1 = p_2 V_2 \\implies V_2 = (p_1 V_1) / p_2$.
2. Graph of $p$ against $V$: A downward-sloping curve (rectangular hyperbola) that is concave upwards. It does not touch either axis.
3. Assumptions: The gas behaves as an ideal gas, no gas leaks out (mass is constant), and temperature remains strictly constant throughout.`,
    equations: `V_2 = \\frac{p_1 V_1}{p_2} = \\frac{150 \\times 80}{600} = 20 \\text{ cm}^3; \\quad p \\propto \\frac{1}{V}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Calculate Final Volume",
        body: "Apply Boyle's Law: p_1 * V_1 = p_2 * V_2.\n150 kPa * 80 cm³ = 600 kPa * V_2.\nV_2 = (150 * 80) / 600 = 12 000 / 600 = 20 cm³."
      },
      {
        step: 2,
        title: "Part (b) Graph Sketch Criteria (2 marks)",
        body: "Draw a smooth, downward-sloping curve (hyperbolic shape) concave upwards starting at (80 cm³, 150 kPa) and ending at (20 cm³, 600 kPa). The line must not touch the axes and must not be a straight line."
      },
      {
        step: 3,
        title: "Part (c) State One Assumption (1 mark)",
        body: "No gas escapes / mass of gas is constant (or temperature remains strictly constant / gas obeys ideal gas laws)."
      }
    ],
    finalAnswer: "(a) 20 cm³;\n(b) A smooth downward-curving hyperbolic line on p vs V axes with negative gradient, concave upward;\n(c) No gas leaks out / mass of gas is constant (or temperature is constant).",
    reasonablenessCheck: "Pressure quadruples (150 -> 600 kPa), so volume must decrease to one-quarter: 80 / 4 = 20 cm³.",
    commonMistakes: [
      "Drawing a straight line with negative gradient for p vs V.",
      "Letting the curve touch or cross the axes."
    ],
    takeaway: "In isothermal compression, pressure quadrupling requires volume quartering; p against V plots as a smooth hyperbola.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { volumeCm3: 20 },
      controls: [
        { id: "volumeCm3", name: "Piston Volume", min: 15, max: 80, step: 5, default: 20, unit: "cm³" }
      ],
      readouts: [
        { label: "Pressure", expr: (p) => (12000 / p.volumeCm3).toFixed(1) + " kPa" },
        { label: "p × V Product", expr: () => "12,000 kPa·cm³ (Constant)" }
      ],
      explanation: "Compressing volume from 80 cm³ to 20 cm³ quadruples pressure along a hyperbolic curve."
    }
  },
  {
    globalId: "Q035",
    examId: "Q00497",
    paperRef: "5054/21/M/J/24 Q2",
    pdfPage: 35,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Molecular Energy Changes During Condensation",
    paperType: "theory",
    marks: 4,
    questionText: `Steam at 100 °C condenses into liquid water at 100 °C on a cold glass mirror.
(a) State what happens to the distance between the water molecules during this change of state. [1]
(b) Explain, in terms of forces and molecular potential energy, what happens to energy during condensation. [2]
(c) State why a steam burn at 100 °C is much more severe than a hot water burn at 100 °C. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain molecular spacing, potential energy release, and burn severity differences during condensation at 100 °C.",
    givenInfo: [
      "Steam at 100 °C condenses into liquid water at 100 °C."
    ],
    toFind: "Spacing change, energy/force explanation of latent heat release, and burn severity comparison.",
    physicsConcepts: `Molecular mechanics of condensation:
1. Spacing: In steam (gas), molecules are separated by ~10 molecular diameters. When condensing into liquid, molecules move much closer together until they are touching.
2. Energy and forces: As molecules come together, attractive intermolecular forces pull them into close contact. The work done by attractive forces releases potential energy as thermal energy (latent heat of vaporisation, $L_v \\approx 2.3 \\times 10^6\\text{ J/kg}$) to the surroundings, even though kinetic energy and temperature remain at 100 °C.
3. Burn severity: Steam at 100 °C releases its latent heat of vaporisation upon condensing on the skin before cooling as 100 °C liquid water, delivering vastly more thermal energy to tissue than water alone.`,
    equations: `Q_{\\text{steam}} = m L_v + m c \\Delta T; \\quad Q_{\\text{water}} = m c \\Delta T \\implies Q_{\\text{steam}} \\gg Q_{\\text{water}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Change in Distance",
        body: "The distance between the water molecules decreases significantly / molecules move much closer together."
      },
      {
        step: 2,
        title: "Part (b) Forces and Potential Energy (2 marks)",
        body: "Attractive intermolecular forces pull the molecules together. As bonds form and molecules move into the potential well, molecular potential energy decreases, releasing latent heat to the surroundings."
      },
      {
        step: 3,
        title: "Part (c) Burn Severity (1 mark)",
        body: "Steam releases a large amount of latent heat of vaporisation when it condenses onto the skin, transferring much more energy than liquid water at the same temperature."
      }
    ],
    finalAnswer: "(a) Distance decreases / molecules move much closer together;\n(b) Attractive intermolecular forces pull molecules together, releasing potential energy as latent heat;\n(c) Steam releases a large amount of latent heat upon condensing on the skin, delivering more energy than hot water alone.",
    reasonablenessCheck: "Condensing 1 g of steam releases 2260 J of latent heat before the water even begins to cool.",
    commonMistakes: [
      "Saying kinetic energy decreases during condensation at 100 °C (kinetic energy is constant because temperature is constant).",
      "Stating steam is hotter than 100 °C."
    ],
    takeaway: "Condensation pulls molecules together under attractive forces, releasing latent potential energy; this makes steam burns far more severe.",
    simulation: {
      type: "phase_change_diagram",
      defaultParams: { activeTransition: 3 },
      controls: [],
      readouts: [
        { label: "Phase Transition", expr: () => "Gas ➔ Liquid (Condensation)" },
        { label: "Latent Heat Released", expr: () => "2.3 MJ/kg transferred to skin" }
      ],
      explanation: "Steam releases 2.3 MJ/kg of latent heat as molecules draw together, followed by standard cooling."
    }
  },
  {
    globalId: "Q036",
    examId: "Q00498",
    paperRef: "5054/22/M/J/24 Q2",
    pdfPage: 36,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Pressure-Temperature Law in a Rigid Flask",
    paperType: "theory",
    marks: 5,
    questionText: `A rigid glass flask containing dry air is connected to a Bourdon pressure gauge.
The flask is immersed in a water bath and heated from 20 °C to 80 °C.
The volume of the flask remains constant.
(a) The pressure of the air inside the flask at 20 °C is 1.05 × 10⁵ Pa.
Calculate the pressure of the air at 80 °C. [3]
(b) Explain, in terms of molecules, why the Bourdon gauge reading increases as the water is heated. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate final pressure using the pressure-temperature gas law in Kelvin and explain the pressure rise using molecular collisions.",
    givenInfo: [
      "Initial temperature θ_1 = 20 °C",
      "Initial pressure p_1 = 1.05 × 10⁵ Pa",
      "Final temperature θ_2 = 80 °C",
      "Rigid flask -> volume is constant"
    ],
    toFind: "Final pressure p_2 in Pa, and molecular explanation of pressure rise.",
    physicsConcepts: `Pressure Law (Gay-Lussac's Law):
1. Formula: $\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$ where $T$ is absolute temperature in Kelvin ($T = \\theta + 273$).
2. Calculation:
   $$T_1 = 20 + 273 = 293\\text{ K}$$
   $$T_2 = 80 + 273 = 353\\text{ K}$$
   $$p_2 = p_1 \\times \\frac{T_2}{T_1} = 1.05 \\times 10^5 \\times \\frac{353}{293}$$
3. Molecular explanation: Heating increases the kinetic energy and average speed of the molecules. Faster molecules collide with the flask walls more frequently and with greater momentum change per collision, exerting a larger total force and higher pressure.`,
    equations: `T = \\theta + 273; \\quad \\frac{p_1}{T_1} = \\frac{p_2}{T_2} \\implies p_2 = 1.05 \\times 10^5 \\times \\frac{353}{293} = 1.265 \\times 10^5 \\text{ Pa}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Temperatures to Kelvin",
        body: "T_1 = 20 °C + 273 = 293 K.\nT_2 = 80 °C + 273 = 353 K."
      },
      {
        step: 2,
        title: "Compute Final Pressure",
        body: "p_2 = p_1 * (T_2 / T_1) = (1.05 × 10⁵ Pa) * (353 / 293) = 1.05 × 10⁵ * 1.2048 = 1.265 × 10⁵ Pa ≈ 1.27 × 10⁵ Pa."
      },
      {
        step: 3,
        title: "Explain Molecular Pressure Mechanism (2 marks)",
        body: "Heating increases molecular kinetic energy and speed. The molecules collide with the container walls more frequently and with greater force / momentum change per impact."
      }
    ],
    finalAnswer: "(a) 1.27 × 10⁵ Pa (or 1.265 × 10⁵ Pa);\n(b) Molecules gain kinetic energy and move faster, colliding with the walls more frequently and with greater force / momentum change.",
    reasonablenessCheck: "Temperature rises by ~20% on the Kelvin scale (293 to 353 K), so pressure rises by ~20% from 1.05 to 1.27 × 10⁵ Pa.",
    commonMistakes: [
      "Using Celsius temperatures directly: p_2 = 1.05 × 10⁵ * (80/20) = 4.2 × 10⁵ Pa (fatal error).",
      "Stating molecules expand and push the gauge mechanism."
    ],
    takeaway: "Always convert Celsius to Kelvin ($T = \\theta + 273$) for gas pressure calculations; pressure rises because collisions become harder and more frequent.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { tempC: 80 },
      controls: [
        { id: "tempC", name: "Water Bath Temp", min: 20, max: 100, step: 10, default: 80, unit: "°C" }
      ],
      readouts: [
        { label: "Gauge Pressure", expr: (p) => (1.05e5 * (p.tempC + 273) / 293 / 1e5).toFixed(2) + " × 10⁵ Pa" }
      ],
      explanation: "Constant volume heating from 293 K to 353 K increases pressure proportionally to 1.27 × 10⁵ Pa."
    }
  },
  {
    globalId: "Q037",
    examId: "Q01280",
    paperRef: "5054/21/O/N/24 Q2",
    pdfPage: 37,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Molecular Structure of Ice vs Liquid Water",
    paperType: "theory",
    marks: 4,
    questionText: `Water exhibits an unusual property: solid ice is less dense than liquid water at 0 °C.
(a) Describe how the arrangement of molecules in ice differs from that in liquid water. [2]
(b) Explain why ice floats on water in terms of molecular spacing and density. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Contrast the molecular structures of ice and liquid water and explain why ice has lower density and floats.",
    givenInfo: [
      "Ice is less dense than liquid water at 0 °C."
    ],
    toFind: "Structural differences and physical explanation for ice floating.",
    physicsConcepts: `Anomalous expansion and hydrogen bonding of water:
1. Structure of ice: Water molecules form an open, tetrahedral crystalline lattice held by hydrogen bonds. This open hexagonal framework leaves relatively large open spaces / voids between molecules.
2. Structure of liquid water: When ice melts, the rigid hydrogen-bonded framework partially collapses. Molecules pack closer together and slide into the open spaces.
3. Density: Because molecules in ice are held further apart on average, a given mass occupies a larger volume. Since $\\rho = m / V$, the density of ice is lower than liquid water (~0.92 g/cm³ vs 1.00 g/cm³), allowing ice to float.`,
    equations: `V_{\\text{ice}} > V_{\\text{water}} \\implies \\rho_{\\text{ice}} = \\frac{m}{V_{\\text{ice}}} < \\rho_{\\text{water}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Compare Arrangements (2 marks)",
        body: "In ice, molecules are arranged in a fixed, open hexagonal crystalline lattice held by hydrogen bonds. In liquid water, the lattice has collapsed, so molecules are arranged irregularly, pack closer together, and slide past one another."
      },
      {
        step: 2,
        title: "Part (b) Relate Spacing to Density and Floating (2 marks)",
        body: "Because of the open crystalline structure, molecules in ice are further apart on average than in liquid water, so ice occupies a larger volume for the same mass. This makes ice less dense than water, allowing it to float."
      }
    ],
    finalAnswer: "(a) Ice has an open, regular crystalline lattice structure, whereas liquid water has an irregular arrangement with molecules packed closer together;\n(b) The open lattice means molecules in ice are further apart on average, giving it a larger volume and lower density than liquid water.",
    reasonablenessCheck: "Ice cubes float with ~9% of their volume above water because ice density (0.917 g/cm³) is lower than liquid water (1.000 g/cm³).",
    commonMistakes: [
      "Assuming ice molecules are closer together because it is a solid (true for almost all other substances, but false for water).",
      "Stating air bubbles trapped inside are the only reason ice floats."
    ],
    takeaway: "Ice forms an open crystalline lattice that holds molecules further apart than in liquid water, lowering its density so it floats.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "ice_anomaly" },
      controls: [],
      readouts: [
        { label: "Ice Density", expr: () => "0.92 g/cm³ (Open lattice)" },
        { label: "Water Density", expr: () => "1.00 g/cm³ (Collapsed lattice)" }
      ],
      explanation: "Hydrogen bonding forms an open hexagonal framework in ice, increasing average molecular separation and reducing density."
    }
  },
  {
    globalId: "Q038",
    examId: "Q00770",
    paperRef: "5054/22/O/N/24 Q2",
    pdfPage: 38,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Gas Expansion and Work Done against Atmosphere",
    paperType: "theory",
    marks: 5,
    questionText: `A cylinder with a frictionless piston contains air at atmospheric pressure (100 kPa).
The cylinder is heated gently so that the air expands and pushes the piston outward against the atmosphere.
During this process, the volume of the air increases by 5.0 × 10⁻⁴ m³ at constant pressure.
(a) Calculate the work done by the expanding air on the atmosphere. [2]
(b) Explain, in terms of molecules, how the pressure remains constant even though the volume increases. [2]
(c) State what happens to the internal energy of the air during this heating. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate work done during isobaric expansion, explain constant pressure using kinetic theory, and identify the change in internal energy.",
    givenInfo: [
      "Pressure p = 100 kPa = 1.0 × 10⁵ Pa (constant)",
      "Change in volume ΔV = 5.0 × 10⁻⁴ m³",
      "Air heated gently"
    ],
    toFind: "Work done W, molecular explanation of constant pressure, and change in internal energy.",
    physicsConcepts: `Isobaric expansion thermodynamics:
1. Work done by a gas at constant pressure:
$$W = p \\Delta V$$
2. Molecular interpretation of constant pressure:
   - When heated, molecules gain kinetic energy and move faster, which would tend to increase impact force and collision frequency.
   - However, the gas expands, increasing the volume and the distance molecules must travel between walls.
   - This reduction in molecular density offsets the increased molecular speed, keeping the rate of momentum change per unit area constant.
3. Internal energy: Because temperature increases during heating, the internal energy of the gas increases ($\Delta U > 0$).`,
    equations: `W = p \\Delta V = (1.0 \\times 10^5) \\times (5.0 \\times 10^{-4}) = 50 \\text{ J}; \\quad \\Delta U = Q - W`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Calculate Work Done",
        body: "W = p * ΔV = 100 000 Pa * 5.0 × 10⁻⁴ m³ = 50 J."
      },
      {
        step: 2,
        title: "Part (b) Molecular Explanation of Constant Pressure (2 marks)",
        body: "Heating increases molecular speed and impact force. However, expanding volume means molecules are further apart and travel longer distances between impacts. The lower collision frequency balances the harder impacts, keeping pressure constant."
      },
      {
        step: 3,
        title: "Part (c) Change in Internal Energy (1 mark)",
        body: "The internal energy of the air increases (because temperature increases)."
      }
    ],
    finalAnswer: "(a) 50 J;\n(b) Molecules move faster, but the larger volume reduces the collision frequency per unit area, balancing the greater impact force to keep pressure constant;\n(c) Increases.",
    reasonablenessCheck: "100 kPa acting across a volume change of 0.5 liters produces 50 J of mechanical boundary work.",
    commonMistakes: [
      "Leaving pressure in kPa without converting to Pa: 100 * 5.0 × 10⁻⁴ = 0.05 J (off by 1000x).",
      "Stating internal energy decreases because the gas expanded."
    ],
    takeaway: "Work done by an expanding gas is W = pΔV; constant pressure balances faster particle speed against larger volume.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { isobaric: true },
      controls: [],
      readouts: [
        { label: "Boundary Work W", expr: () => "50 J" },
        { label: "Pressure State", expr: () => "Constant 100 kPa" },
        { label: "Internal Energy", expr: () => "Increased (Gas Warmed)" }
      ],
      explanation: "The expanding piston performs 50 J of mechanical work on the atmosphere while maintaining constant pressure."
    }
  },
  {
    globalId: "Q039",
    examId: "Q00230",
    paperRef: "5054/31/M/J/20 Q3",
    pdfPage: 39,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 3 Practical: Boyle's Law with a Loaded Syringe Master Suite",
    paperType: "practical",
    marks: 6,
    questionText: `In this experiment, you will investigate how the volume V of air trapped in a syringe varies with pressure p applied by standard masses.
A 50 cm³ plastic syringe is clamped vertically with its nozzle sealed using a rubber cap.
A mass hanger is attached to the piston.
(a) The cross-sectional area A of the inside of the syringe is 4.5 cm².
Standard slotted masses of mass m are added to the hanger.
The pressure p of the trapped air is given by:
p = p_atm - (m * g) / A
where p_atm = 100 kPa and g = 9.8 N/kg.
When m = 1.2 kg, calculate the pressure p in kPa. [2]
(b) Describe one precaution taken to minimize the effect of friction between the piston and the syringe barrel. [1]
(c) Table 3.1 records volume V against pressure p.
State the mathematical relationship between p and V if Boyle's law is obeyed, and describe how you would use the data to verify this relationship graphically. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate reduced pressure in a hanging syringe setup, identify friction precautions, and describe graphical verification of Boyle's Law.",
    givenInfo: [
      "Syringe area A = 4.5 cm² = 4.5 × 10⁻⁴ m²",
      "Atmospheric pressure p_atm = 100 kPa = 100 000 Pa",
      "Added mass m = 1.2 kg, g = 9.8 N/kg"
    ],
    toFind: "Calculated pressure p, friction precaution, and graphical verification method.",
    physicsConcepts: `Boyle's Law practical mechanics:
1. Pressure deduction: The downward weight of the hanging masses pulls the piston down, expanding the gas and reducing internal pressure below atmospheric pressure:
$$p = p_{\\text{atm}} - \\frac{m g}{A}$$
2. Syringe friction: Friction between the rubber plunger and the plastic barrel causes the piston to stick. Tapping the syringe gently before reading allows the piston to settle at its true equilibrium position.
3. Graphical verification: If $p V = \\text{constant}$, plotting $p$ against $1/V$ yields a straight line passing through the origin $(0, 0)$. Alternatively, calculating the product $p \\times V$ across all rows should yield a constant value within experimental uncertainty.`,
    equations: `p = p_{\\text{atm}} - \\frac{m g}{A}; \\quad p \\propto \\frac{1}{V} \\implies \\text{Straight line through origin for } p \\text{ vs } 1/V`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Convert Units and Calculate Weight",
        body: "W = m * g = 1.2 kg * 9.8 N/kg = 11.76 N.\nArea A = 4.5 cm² = 4.5 × 10⁻⁴ m²."
      },
      {
        step: 2,
        title: "Part (a) Compute Pressure Drop and Net Pressure",
        body: "Δp = W / A = 11.76 N / (4.5 × 10⁻⁴ m²) = 26 133 Pa ≈ 26.1 kPa.\np = p_atm - Δp = 100 kPa - 26.1 kPa = 73.9 kPa."
      },
      {
        step: 3,
        title: "Part (b) Friction Precaution (1 mark)",
        body: "Gently tap the syringe barrel before taking each reading (or lubricate the plunger lightly with a drop of oil)."
      },
      {
        step: 4,
        title: "Part (c) Graphical Verification (3 marks)",
        body: "Boyle's law states p is inversely proportional to V (p V = constant). Plot a graph of p against 1/V; if Boyle's law is obeyed, the graph is a straight line passing through the origin (or verify that p × V is constant for all readings)."
      }
    ],
    finalAnswer: "(a) 73.9 kPa (or 74 kPa);\n(b) Tap the barrel gently before reading to overcome friction;\n(c) p is inversely proportional to V; plot a graph of p on the y-axis against 1/V on the x-axis, which should yield a straight line passing through the origin.",
    reasonablenessCheck: "Hanging masses pull the piston outward, dropping internal pressure below atmospheric pressure (from 100 down to 73.9 kPa).",
    commonMistakes: [
      "Adding the weight pressure instead of subtracting it (the masses are pulling outward, expanding the volume).",
      "Forgetting to convert cm² to m² when calculating in Pascals."
    ],
    takeaway: "In hanging-mass syringe experiments, p = p_atm - mg/A; tapping the barrel overcomes friction, and p vs 1/V yields a straight line through the origin.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { syringeMassKg: 1.2 },
      controls: [
        { id: "syringeMassKg", name: "Hanging Mass", min: 0, max: 2.5, step: 0.5, default: 1.2, unit: "kg" }
      ],
      readouts: [
        { label: "Internal Pressure", expr: (p) => (100 - (p.syringeMassKg * 9.8 / 4.5e-4) / 1000).toFixed(1) + " kPa" }
      ],
      explanation: "Increasing hanging mass pulls the piston down, lowering internal pressure and expanding volume."
    }
  },
  {
    globalId: "Q040",
    examId: "Q00231",
    paperRef: "5054/32/M/J/20 Q3",
    pdfPage: 40,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: U-Tube Manometer Gas Pressure Reading",
    paperType: "atp",
    marks: 4,
    questionText: `Fig. 3.1 shows a U-tube manometer containing water of density 1000 kg/m³ connected to a gas supply.
One arm is open to the atmosphere (atmospheric pressure = 1.01 × 10⁵ Pa).
The water level in the open arm is at 38.0 cm, and the water level in the arm connected to the gas supply is at 14.0 cm.
(a) Determine the height difference h of the water columns. [1]
(b) Calculate the pressure difference Δp in Pa. Use g = 9.8 N/kg. [2]
(c) State whether the gas supply pressure is greater than or less than atmospheric pressure, and calculate the absolute gas pressure. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Determine water column height difference, calculate excess pressure using hydrostatic formula, and state absolute gas pressure.",
    givenInfo: [
      "Open arm level = 38.0 cm",
      "Gas arm level = 14.0 cm",
      "Water density ρ = 1000 kg/m³",
      "p_atm = 1.01 × 10⁵ Pa, g = 9.8 N/kg"
    ],
    toFind: "Height difference h, excess pressure Δp, and total absolute gas pressure.",
    physicsConcepts: `Hydrostatic pressure in open-tube manometers:
1. Height difference: $h = h_{\\text{open}} - h_{\\text{gas}}$.
2. Excess pressure:
$$\\Delta p = \\rho g h$$
with $h$ converted to meters.
3. Level analysis: The liquid level is pushed down on the gas side and rises higher in the open arm. This indicates the gas supply pressure is higher than atmospheric pressure:
$$p_{\\text{gas}} = p_{\\text{atm}} + \\rho g h$$`,
    equations: `h = 38.0 - 14.0 = 24.0 \\text{ cm} = 0.24 \\text{ m}; \\quad \\Delta p = \\rho g h = 1000 \\times 9.8 \\times 0.24; \\quad p_{\\text{gas}} = p_{\\text{atm}} + \\Delta p`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Determine Height Difference",
        body: "h = 38.0 cm - 14.0 cm = 24.0 cm = 0.24 m."
      },
      {
        step: 2,
        title: "Part (b) Calculate Pressure Difference",
        body: "Δp = ρ * g * h = 1000 kg/m³ * 9.8 N/kg * 0.24 m = 2352 Pa ≈ 2400 Pa (or 2.35 kPa)."
      },
      {
        step: 3,
        title: "Part (c) Absolute Gas Pressure",
        body: "Because the open side is higher, gas pressure is greater than atmospheric pressure.\np_gas = p_atm + Δp = 101 000 Pa + 2352 Pa = 103 352 Pa ≈ 1.03 × 10⁵ Pa."
      }
    ],
    finalAnswer: "(a) 24.0 cm (or 0.24 m);\n(b) 2400 Pa (or 2350 Pa / 2.35 kPa);\n(c) Greater than atmospheric pressure; absolute pressure = 1.03 × 10⁵ Pa.",
    reasonablenessCheck: "A 24 cm water head corresponds to ~2.4 kPa above atmospheric pressure.",
    commonMistakes: [
      "Using height in cm directly in ρgh without converting to meters.",
      "Subtracting Δp from atmospheric pressure even though the open arm liquid level is higher."
    ],
    takeaway: "Manometer height difference gives excess pressure Δp = ρgh; a higher open-arm level indicates gas pressure exceeds atmospheric pressure.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { hDiffM: 0.24 },
      controls: [],
      readouts: [
        { label: "Height Diff h", expr: () => "0.24 m (24.0 cm)" },
        { label: "Excess Pressure", expr: () => "+2350 Pa (+2.35 kPa)" },
        { label: "Total Gas Pressure", expr: () => "1.03 × 10⁵ Pa" }
      ],
      explanation: "Gas pressure pushes the liquid column down on its side, raising the open side by 24 cm (2.35 kPa above atmospheric pressure)."
    }
  },
  {
    globalId: "Q041",
    examId: "Q00745",
    paperRef: "5054/41/O/N/20 Q3",
    pdfPage: 41,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: Volatile Liquid Evaporation Investigation",
    paperType: "atp",
    marks: 5,
    questionText: `A student investigates the rate of evaporation of three volatile liquids (ethanol, propanone, and water).
Equal drops (0.05 cm³) of each liquid are placed on separate glass microscope slides resting on a laboratory bench at 22 °C.
A stopwatch measures the time t taken for each drop to completely evaporate.
(a) State how the student ensures the drops have identical volumes. [1]
(b) Data shows:
- Propanone: t = 45 s
- Ethanol: t = 160 s
- Water: t = 950 s
Rank the liquids in order of intermolecular attractive forces from weakest to strongest. [2]
(c) State two variables that must be controlled to make this test fair. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify volumetric dispensing technique, deduce intermolecular force rankings from evaporation times, and state controlled variables.",
    givenInfo: [
      "Drop volume = 0.05 cm³ each on glass slides at 22 °C.",
      "Evaporation times: Propanone = 45 s, Ethanol = 160 s, Water = 950 s."
    ],
    toFind: "Dispensing apparatus, ranking of intermolecular forces, and two controlled variables.",
    physicsConcepts: `Evaporation rate and intermolecular forces:
1. Dispensing: A calibrated micropipette, syringe, or dropper held vertically ensures identical drop volume.
2. Intermolecular forces: Liquids with weaker intermolecular attractive forces require less energy for molecules to overcome surface attractions and escape into the vapor phase. Weaker forces produce faster evaporation (shorter evaporation time).
   - Propanone evaporates fastest (45 s) -> weakest attractive forces.
   - Water evaporates slowest (950 s) -> strongest attractive forces (strong hydrogen bonding).
   Order from weakest to strongest: Propanone -> Ethanol -> Water.
3. Control variables: Same temperature, identical glass slide surface material and cleanliness, absence of draughts, and same spread surface area.`,
    equations: `t_{\\text{evap}} \\propto \\text{Strength of intermolecular forces}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Ensure Equal Volume",
        body: "Use a calibrated micropipette / graduated syringe (or count identical drops from a vertical fine dropper)."
      },
      {
        step: 2,
        title: "Part (b) Rank Intermolecular Forces (2 marks)",
        body: "Shorter evaporation time indicates weaker intermolecular attractive forces.\nWeakest: Propanone (45 s)\nIntermediate: Ethanol (160 s)\nStrongest: Water (950 s)."
      },
      {
        step: 3,
        title: "Part (c) State Two Controlled Variables (2 marks)",
        body: "1. Surface area / spread diameter of the drop.\n2. Ambient room temperature (or absence of draughts / same type of glass slide)."
      }
    ],
    finalAnswer: "(a) Use a calibrated micropipette / fine syringe;\n(b) Weakest: propanone -> intermediate: ethanol -> strongest: water;\n(c) 1. Initial surface area of the drop; 2. Surrounding air movement / draught (or temperature of the slides).",
    reasonablenessCheck: "Propanone has weak dipole forces and evaporates in seconds, while water has strong hydrogen bonds requiring far more energy to evaporate.",
    commonMistakes: [
      "Inverting the order (ranking water as weakest because it has the largest time).",
      "Stating 'room temperature' as an independent variable when it must be controlled."
    ],
    takeaway: "Faster evaporation indicates weaker intermolecular attractive forces; fair testing requires controlling drop area, temperature, and draughts.",
    simulation: {
      type: "evaporation",
      defaultParams: { liquidType: "propanone" },
      controls: [],
      readouts: [
        { label: "Propanone Time", expr: () => "45 s (Weakest Forces)" },
        { label: "Ethanol Time", expr: () => "160 s (Intermediate)" },
        { label: "Water Time", expr: () => "950 s (Strongest Forces)" }
      ],
      explanation: "Evaporation rate reflects intermolecular bond strength: weaker bonds yield faster evaporation."
    }
  },
  {
    globalId: "Q042",
    examId: "Q00198",
    paperRef: "5054/42/O/N/20 Q3",
    pdfPage: 42,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: Plunger Friction in Gas Law Experiments",
    paperType: "atp",
    marks: 4,
    questionText: `A student uses a syringe to verify Boyle's Law.
The student notices that when the same mass is added to the piston, the volume reading varies slightly depending on whether the mass was added gently or the piston was pushed down first.
(a) Explain what causes these different volume readings for the same applied load. [1]
(b) Describe a procedure the student should follow before recording each volume reading to minimize this error. [1]
(c) Suggest one reason why a thin layer of oil is applied to the rubber seal of the piston. [1]
(d) State why the gas temperature must be checked throughout the experiment. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify friction errors in syringe gas experiments, state tapping protocol, explain lubricant role, and justify temperature monitoring.",
    givenInfo: [
      "Syringe with moveable rubber plunger under applied mechanical load."
    ],
    toFind: "Cause of reading discrepancies, remedial procedure, lubricant function, and temperature justification.",
    physicsConcepts: `Systematic and random errors in syringe barometry:
1. Friction: Static friction between the rubber piston seal and the plastic barrel resists motion in both directions, causing the piston to stick above or below its true equilibrium position.
2. Remedial tapping: Gently tapping the barrel breaks static friction, allowing the piston to settle at its true mechanical equilibrium where net force is zero.
3. Lubrication: A drop of light oil lubricates the contact surface to reduce friction and provides a gas-tight seal preventing air leakage.
4. Temperature control: Boyle's Law strictly requires constant temperature ($p V = \\text{constant}$). Ambient heating or handling warming would alter gas pressure independently of volume.`,
    equations: `F_{\\text{applied}} \\pm F_{\\text{friction}} = p_{\\text{gas}} A \\implies \\text{Friction introduces error band}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Cause of Discrepancy",
        body: "Friction between the piston / rubber seal and the inside wall of the syringe barrel causes the piston to stick."
      },
      {
        step: 2,
        title: "Part (b) Remedial Procedure",
        body: "Gently tap the syringe barrel before taking each reading so the piston settles at its true equilibrium position."
      },
      {
        step: 3,
        title: "Part (c) Function of Oil",
        body: "To reduce friction between the piston and barrel (and to ensure an airtight seal to prevent air leakage)."
      },
      {
        step: 4,
        title: "Part (d) Reason for Temperature Monitoring",
        body: "Boyle's law is only valid if the temperature remains constant."
      }
    ],
    finalAnswer: "(a) Friction between the piston and the syringe walls causes sticking;\n(b) Gently tap the barrel before reading;\n(c) Reduces friction (or ensures an airtight seal);\n(d) Boyle's law is only valid if temperature remains constant.",
    reasonablenessCheck: "Tapping pistons to overcome static friction is standard protocol in school pressure-volume labs.",
    commonMistakes: [
      "Saying the syringe leaks every time (discrepancy exists even in perfectly sealed syringes due to friction).",
      "Stating tapping expands the gas."
    ],
    takeaway: "Plunger friction causes sticking; gently tap the barrel to settle the piston and maintain constant temperature.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { frictionLevel: "medium" },
      controls: [],
      readouts: [
        { label: "Friction Effect", expr: () => "Plunger sticks (±2 cm³ error)" },
        { label: "After Tapping", expr: () => "Settles to true equilibrium" }
      ],
      explanation: "Static friction causes the plunger to stick; tapping breaks static friction to reveal the true volume."
    }
  },
  {
    globalId: "Q043",
    examId: "Q00746",
    paperRef: "5054/41/M/J/21 Q2",
    pdfPage: 43,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: Charles's Law Capillary Tube Apparatus",
    paperType: "atp",
    marks: 5,
    questionText: `Fig. 2.1 shows apparatus used to investigate the relationship between the volume V of a trapped column of dry air and its temperature θ.
A narrow capillary tube sealed at the bottom contains a column of air trapped by a small index of concentrated sulfuric acid.
The capillary tube is strapped to a 30 cm ruler and immersed in a beaker of water with a thermometer and stirrer.
(a) State the function of the concentrated sulfuric acid index. [2]
(b) Explain why the length L of the air column can be used as a measure of the volume V of the air. [1]
(c) State why the water must be stirred before reading the thermometer. [1]
(d) State why the pressure of the trapped air remains constant throughout this experiment. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain acid plug functions, link column length to volume, justify liquid stirring, and explain constant pressure in Charles's Law apparatus.",
    givenInfo: [
      "Capillary tube sealed at the base, air trapped by sulfuric acid plug.",
      "Immersed in water bath with ruler, thermometer, and stirrer."
    ],
    toFind: "Functions of acid index, justification of L proportional to V, stirring purpose, and constant pressure explanation.",
    physicsConcepts: `Charles's Law capillary tube experiment:
1. Sulfuric acid index functions:
   - Traps the column of air and seals it against the atmosphere.
   - Concentrated sulfuric acid is a desiccant that absorbs water vapor, keeping the trapped air completely dry.
2. Length as volume proxy: The capillary tube has a uniform bore (constant cross-sectional area $A$). Therefore, volume is directly proportional to length:
$$V = A \\cdot L \\propto L$$
3. Stirring: Ensures the water bath has a uniform temperature throughout, so the thermometer reading matches the actual temperature of the trapped air column.
4. Constant pressure: The top of the capillary tube is open to the atmosphere. The pressure of the trapped air is always equal to atmospheric pressure plus the constant weight of the small acid plug:
$$p = p_{\\text{atm}} + \\rho g h_{\\text{plug}} = \\text{constant}$$`,
    equations: `V = A L \\propto L; \\quad p = p_{\\text{atm}} + \\rho g h_{\\text{index}} = \\text{constant}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Function of Sulfuric Acid Index (2 marks)",
        body: "1. Traps the air column / acts as a moveable seal.\n2. Absorbs moisture / keeps the trapped air dry."
      },
      {
        step: 2,
        title: "Part (b) Length as a Measure of Volume (1 mark)",
        body: "The capillary tube has a uniform / constant cross-sectional area (bore diameter), so volume is directly proportional to length (V = A * L)."
      },
      {
        step: 3,
        title: "Part (c) Purpose of Stirring (1 mark)",
        body: "To ensure the water is at a uniform temperature throughout so the thermometer accurately reflects the temperature of the air column."
      },
      {
        step: 4,
        title: "Part (d) Reason for Constant Pressure (1 mark)",
        body: "The tube is open at the top, so the pressure equals atmospheric pressure plus the constant weight of the acid index."
      }
    ],
    finalAnswer: "(a) 1. Traps the air column / acts as a seal; 2. Absorbs moisture to keep the air dry;\n(b) The capillary tube has a uniform cross-sectional area, so volume is directly proportional to length;\n(c) To ensure uniform temperature throughout the water bath;\n(d) The tube is open to the atmosphere, so pressure is fixed by atmospheric pressure plus the weight of the index.",
    reasonablenessCheck: "Because A is uniform, measuring length in mm directly monitors volume changes at constant atmospheric pressure.",
    commonMistakes: [
      "Stating the acid heats the air.",
      "Saying pressure increases as the column expands (the acid plug moves freely, keeping pressure constant)."
    ],
    takeaway: "A sulfuric acid plug seals and dries trapped air; uniform bore means length measures volume at constant atmospheric pressure.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { charlestube: true },
      controls: [],
      readouts: [
        { label: "Trapped Pressure", expr: () => "Constant (Atmospheric + Index weight)" },
        { label: "Bore Geometry", expr: () => "Uniform Area (V ∝ Length)" }
      ],
      explanation: "Heating the water bath causes the dry air column to expand linearly with temperature at constant pressure."
    }
  },
  {
    globalId: "Q044",
    examId: "Q02364",
    paperRef: "5054/42/M/J/21 Q2",
    pdfPage: 44,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: Smoke Cell Optical Setup and Experimental Precautions",
    paperType: "atp",
    marks: 4,
    questionText: `Fig. 2.1 shows a diagram of a smoke cell apparatus used to demonstrate Brownian motion.
The apparatus includes: a glass smoke cell, a cover slip, a small light source (lamp), a converging lens, and a microscope.
(a) State the purpose of the converging lens placed between the lamp and the smoke cell. [1]
(b) Explain why a glass cover slip must be placed over the smoke cell. [1]
(c) State what adjustment the student makes to the microscope to see the smoke particles clearly. [1]
(d) State one safety precaution taken when introducing smoke into the cell. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain optical illumination, cover slip sealing, microscope focusing, and safety precautions in the Brownian smoke cell experiment.",
    givenInfo: [
      "Smoke cell apparatus with lamp, converging lens, glass cell, cover slip, microscope."
    ],
    toFind: "Lens function, cover slip function, optical adjustment, and safety precaution.",
    physicsConcepts: `Optical physics of the smoke cell experiment:
1. Converging lens: Focuses light from the lamp into a narrow, intense horizontal beam centered on the smoke cell, maximizing light scattering by the smoke particles.
2. Glass cover slip: Seals the cell to prevent smoke from escaping into the room and to stop external air draughts from causing bulk convection drift.
3. Microscope adjustment: Adjusting the fine-focus knob moves the objective lens until the smoke particles appear as sharp, bright pinpoints of light.
4. Safety precaution: Use a small amount of smoke / introduce smoke using a pipette or smouldering match in a well-ventilated space to avoid inhaling smoke.`,
    equations: `\\text{Lens focuses beam onto cell} \\implies \\text{Maximizes scattered light into objective}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Purpose of Converging Lens",
        body: "To focus light from the lamp into an intense beam onto the smoke particles in the cell."
      },
      {
        step: 2,
        title: "Part (b) Function of Cover Slip",
        body: "To prevent smoke from escaping and to prevent air currents / draughts from entering and causing bulk air movement."
      },
      {
        step: 3,
        title: "Part (c) Microscope Adjustment",
        body: "Adjust the focusing knob (fine focus) until the smoke particles appear as sharp, bright pinpoints of light."
      },
      {
        step: 4,
        title: "Part (d) Safety Precaution",
        body: "Do not inhale the smoke / introduce smoke using an aspirator or pipette in a ventilated area."
      }
    ],
    finalAnswer: "(a) To focus / concentrate the light into the smoke cell;\n(b) To stop draughts / air currents from disturbing the particles and prevent smoke escaping;\n(c) Adjust the focus knob until bright specks are sharply defined;\n(d) Avoid inhaling smoke / ensure adequate ventilation.",
    reasonablenessCheck: "Intense side lighting is required for Tyndall scattering; without the cover slip, draughts overwhelm the subtle Brownian motion.",
    commonMistakes: [
      "Saying the lens magnifies the smoke particles (the microscope magnifies; the lens focuses the illumination beam).",
      "Stating the cover slip is to keep the smoke hot."
    ],
    takeaway: "The lens focuses illumination into the cell; the cover slip blocks draughts; the focus knob sharpens the scattered specks.",
    simulation: {
      type: "brownian_motion",
      defaultParams: { setupAligned: true },
      controls: [],
      readouts: [
        { label: "Lens Alignment", expr: () => "Beam Focused on Cell" },
        { label: "Cover Slip State", expr: () => "Sealed (No external draughts)" },
        { label: "Focus Quality", expr: () => "Sharp bright specks" }
      ],
      explanation: "A focused light beam illuminates smoke particles, while the cover slip prevents draughts from masking Brownian motion."
    }
  },
  {
    globalId: "Q045",
    examId: "Q00122",
    paperRef: "5054/41/O/N/21 Q1",
    pdfPage: 45,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Paper 4 ATP: Rate of Evaporative Cooling with Forced Airflow",
    paperType: "atp",
    marks: 5,
    questionText: `A student investigates the rate of cooling of water caused by evaporation.
Two identical beakers A and B contain 100 cm³ of water initially at 60 °C.
Beaker A is placed in still air.
Beaker B is placed in front of an electric fan that blows air across the top of the beaker.
(a) Table 1.1 shows temperature readings taken every 30 s for 180 s:
- Beaker A (still air) cools from 60 °C to 54 °C in 180 s (drop = 6.0 °C).
- Beaker B (fan) cools from 60 °C to 45 °C in 180 s (drop = 15.0 °C).
Calculate the average rate of cooling for each beaker in °C/s. [2]
(b) Explain, in terms of molecules, why Beaker B cools more rapidly than Beaker A. [2]
(c) Suggest one modification to the beakers to show that the cooling was primarily caused by evaporation rather than conduction through the beaker walls. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate cooling rates in °C/s under still and forced airflow, explain the molecular evaporation mechanism, and propose an apparatus modification to isolate evaporation from wall conduction.",
    givenInfo: [
      "Beaker A (still air): drops 6.0 °C in 180 s.",
      "Beaker B (fan airflow): drops 15.0 °C in 180 s.",
      "Equal volumes (100 cm³) at 60 °C."
    ],
    toFind: "Cooling rates, molecular explanation of forced evaporation, and modification to isolate evaporative loss.",
    physicsConcepts: `Evaporative cooling and forced convection:
1. Cooling rate formula:
   $$R = \\frac{\\Delta \\theta}{t}$$
2. Molecular explanation:
   - High-energy molecules escape from the water surface into the air.
   - In still air (Beaker A), an accumulation of water vapor forms above the liquid, slowing net evaporation.
   - In Beaker B, moving air from the fan blows away escaped vapor molecules, maintaining a steep concentration gradient and allowing energetic molecules to escape continuously.
   - Because escaping molecules carry away above-average kinetic energy, the average kinetic energy of the remaining liquid drops faster, accelerating cooling.
3. Isolating evaporation: Insulate / lag the sides and bottom of both beakers (or compare with a beaker covered by a lid) to confirm that cooling occurs through the open surface rather than through the glass walls.`,
    equations: `R_A = \\frac{6.0}{180} = 0.0333^\\circ\\text{C/s}; \\quad R_B = \\frac{15.0}{180} = 0.0833^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Calculate Cooling Rates",
        body: "Beaker A: R_A = 6.0 °C / 180 s = 0.0333 °C/s ≈ 0.033 °C/s.\nBeaker B: R_B = 15.0 °C / 180 s = 0.0833 °C/s ≈ 0.083 °C/s."
      },
      {
        step: 2,
        title: "Part (b) Molecular Explanation of Accelerated Cooling (2 marks)",
        body: "Moving air from the fan sweeps away water vapor molecules above the surface, preventing them from condensing back into the water. This allows more energetic molecules to escape continuously, reducing the average kinetic energy of the remaining water more rapidly."
      },
      {
        step: 3,
        title: "Part (c) Modification to Isolate Evaporation (1 mark)",
        body: "Insulate / lag the sides and bottom of the beakers (or place a lid on a third beaker to show that stopping evaporation stops the rapid cooling)."
      }
    ],
    finalAnswer: "(a) Beaker A = 0.033 °C/s; Beaker B = 0.083 °C/s;\n(b) The fan blows away escaped vapor molecules, preventing saturation and allowing more energetic molecules to escape continuously, lowering average kinetic energy faster;\n(c) Insulate the sides and bottom of both beakers (or use a lid to compare).",
    reasonablenessCheck: "Beaker B cools 2.5 times faster than Beaker A (0.083 vs 0.033 °C/s), demonstrating the strong effect of air movement on evaporation.",
    commonMistakes: [
      "Stating the fan cools the water by blowing cold molecules into it.",
      "Omitting units from the calculated rates."
    ],
    takeaway: "Airflow sweeps away escaped vapor, allowing energetic surface molecules to leave continuously; insulating the sides confirms that heat loss occurs primarily through the open surface.",
    simulation: {
      type: "evaporation",
      defaultParams: { fanRunning: true },
      controls: [],
      readouts: [
        { label: "Beaker A Rate", expr: () => "0.033 °C/s (Still Air)" },
        { label: "Beaker B Rate", expr: () => "0.083 °C/s (Fan On - 2.5x Faster)" }
      ],
      explanation: "Airflow removes the vapor layer above Beaker B, accelerating the loss of energetic molecules and driving faster cooling."
    }
  }
];