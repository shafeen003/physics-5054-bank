/**
 * Master Question Store: Batch 2 (Q016 to Q030)
 * Section 2.1: Kinetic Particle Model of Matter (MCQs & Theory)
 */

const QUESTIONS_BATCH_2 = [
  {
    globalId: "Q016",
    examId: "Q00220",
    paperRef: "5054/12/O/N/23 Q16",
    pdfPage: 19,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Evaporation: Cooling Mechanism",
    paperType: "mcq",
    marks: 1,
    questionText: `A puddle of water on a road gradually dries up on a warm day.
Why does the temperature of the remaining water in the puddle decrease as evaporation occurs?

A The water molecules with the lowest kinetic energy escape first.
B The water molecules with the highest kinetic energy escape from the surface.
C Heat conducts away through the road surface into the ground.
D Convection currents carry thermal energy into the clouds.`,
    options: [
      { key: "A", text: "The water molecules with the lowest kinetic energy escape first." },
      { key: "B", text: "The water molecules with the highest kinetic energy escape from the surface." },
      { key: "C", text: "Heat conducts away through the road surface into the ground." },
      { key: "D", text: "Convection currents carry thermal energy into the clouds." }
    ],
    correctOption: "B",
    whatIsAsking: "Explain why evaporation causes cooling in the remaining liquid using kinetic particle theory.",
    givenInfo: [
      "Water evaporating from a puddle on a road.",
      "Temperature of the remaining liquid decreases."
    ],
    toFind: "The microscopic particle explanation for evaporative cooling.",
    physicsConcepts: `Evaporative cooling mechanics:
1. Molecules in a liquid have a distribution of speeds and kinetic energies.
2. The most energetic molecules near the surface have enough kinetic energy to do work against attractive intermolecular forces and escape into the vapor phase.
3. Because the molecules that escape carry away above-average kinetic energy, the average kinetic energy of the molecules left behind decreases.
4. Since temperature is proportional to the average kinetic energy of the particles, the temperature of the remaining liquid drops.`,
    equations: `T \\propto \\overline{E_k}; \\quad E_{k,\\text{escaping}} > \\overline{E_k} \\implies \\overline{E_k}_{\\text{remaining}} \\downarrow \\implies T \\downarrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Energy Distribution",
        body: "Liquid particles move with a range of speeds. Only the fastest, most energetic particles near the surface can break free from intermolecular attractions."
      },
      {
        step: 2,
        title: "Evaluate Remaining Particles",
        body: "When the highest-energy particles leave, the average kinetic energy of the remaining particles drops, causing the temperature of the liquid to decrease."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Option B correctly states that molecules with the highest kinetic energy escape from the surface."
      }
    ],
    finalAnswer: "B (The water molecules with the highest kinetic energy escape from the surface.)",
    reasonablenessCheck: "Sweating cools the human body via this exact mechanism: the most energetic water molecules leave the skin, lowering average skin temperature.",
    commonMistakes: [
      "Selecting Option A: low-energy molecules cannot overcome intermolecular forces to escape.",
      "Attributing the temperature drop to ground conduction."
    ],
    takeaway: "Evaporation cools a liquid because the most energetic molecules escape, lowering the average kinetic energy of the remaining liquid.",
    simulation: {
      type: "evaporation",
      defaultParams: { tempC: 25 },
      controls: [
        { id: "tempC", name: "Liquid Temp", min: 10, max: 60, step: 5, default: 25, unit: "°C" }
      ],
      readouts: [
        { label: "Escaping Particles", expr: () => "High kinetic energy" },
        { label: "Remaining Liquid", expr: () => "Average kinetic energy drops" }
      ],
      explanation: "Surface molecules with kinetic energy exceeding the escape threshold leave, lowering the average energy and temperature of the liquid."
    }
  },
  {
    globalId: "Q017",
    examId: "Q00221",
    paperRef: "5054/11/M/J/24 Q16",
    pdfPage: 20,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Factors Affecting Rate of Evaporation",
    paperType: "mcq",
    marks: 1,
    questionText: `Which set of environmental conditions results in the fastest rate of evaporation of water from an open container?

| | surface area | temperature of water | air movement (draught) |
|---|---|---|---|
| A | large | high | strong |
| B | large | low | none |
| C | small | high | strong |
| D | small | low | none |`,
    options: [
      { key: "A", text: "surface area: large | temperature: high | air movement: strong" },
      { key: "B", text: "surface area: large | temperature: low | air movement: none" },
      { key: "C", text: "surface area: small | temperature: high | air movement: strong" },
      { key: "D", text: "surface area: small | temperature: low | air movement: none" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the combination of surface area, temperature, and draught that maximizes evaporation rate.",
    givenInfo: [
      "Open container of water.",
      "Three variables: surface area, water temperature, wind speed / draught."
    ],
    toFind: "The combination producing the maximum rate of evaporation.",
    physicsConcepts: `Factors increasing the rate of evaporation:
1. Larger surface area: More molecules are situated at the surface with the opportunity to escape.
2. Higher temperature: A larger fraction of molecules possess kinetic energy exceeding the escape work function.
3. Stronger air movement / draught: Sweeps away escaped vapor molecules directly above the liquid surface, reducing the local humidity and preventing vapor molecules from re-entering the liquid.`,
    equations: `\\text{Rate of evaporation} \\propto A_{\\text{surface}} \\times T \\times v_{\\text{air}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Surface Area",
        body: "A larger surface area exposes more water molecules to the air boundary, increasing the escape rate."
      },
      {
        step: 2,
        title: "Analyze Temperature",
        body: "Higher temperature raises the average kinetic energy, so a higher percentage of molecules have enough energy to break surface bonds."
      },
      {
        step: 3,
        title: "Analyze Draught",
        body: "Strong air movement blows away vapor molecules, preventing condensation back into the water."
      },
      {
        step: 4,
        title: "Match Row",
        body: "Row A pairs large surface area, high temperature, and strong air movement."
      }
    ],
    finalAnswer: "A (surface area: large | temperature: high | air movement: strong)",
    reasonablenessCheck: "Clothes dry fastest on a hot, windy day when spread out flat across a line.",
    commonMistakes: [
      "Thinking cold water evaporates faster because of condensation differences.",
      "Overlooking air movement's role in clearing the saturated boundary layer."
    ],
    takeaway: "Evaporation rate is maximized by high temperature, large surface area, and strong air movement.",
    simulation: {
      type: "evaporation",
      defaultParams: { areaScale: 2.0, windSpeed: 3 },
      controls: [],
      readouts: [
        { label: "Evaporation Rate", expr: () => "MAXIMUM (Fastest)" },
        { label: "Conditions", expr: () => "Large Area + High T + Strong Wind" }
      ],
      explanation: "Maximizing exposed surface area, temperature, and airflow maximizes the rate of liquid evaporation."
    }
  },
  {
    globalId: "Q018",
    examId: "Q00222",
    paperRef: "5054/12/M/J/24 Q17",
    pdfPage: 20,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Boiling vs Evaporation Differences",
    paperType: "mcq",
    marks: 1,
    questionText: `Which row correctly distinguishes boiling from evaporation for pure water at standard atmospheric pressure?

| | temperature at which it occurs | location in the liquid where bubbles form |
|---|---|---|
| A | only at 100 °C | throughout the liquid |
| B | only at 100 °C | only at the surface |
| C | at any temperature | throughout the liquid |
| D | at any temperature | only at the surface |`,
    options: [
      { key: "A", text: "temperature: only at 100 °C | bubbles form: throughout the liquid" },
      { key: "B", text: "temperature: only at 100 °C | bubbles form: only at the surface" },
      { key: "C", text: "temperature: at any temperature | bubbles form: throughout the liquid" },
      { key: "D", text: "temperature: at any temperature | bubbles form: only at the surface" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the temperature and physical location criteria that define boiling as opposed to evaporation.",
    givenInfo: [
      "Process: Boiling of pure water at 1 atm."
    ],
    toFind: "Correct row for boiling characteristics.",
    physicsConcepts: `Distinguishing boiling from evaporation:
1. Boiling:
   - Occurs at a single fixed temperature (the boiling point, 100 °C for pure water at 1 atm).
   - Occurs throughout the entire bulk of the liquid.
   - Bubbles of steam form within the liquid and rise to the surface because vapor pressure equals atmospheric pressure.
2. Evaporation:
   - Occurs at any temperature below the boiling point.
   - Occurs only at the exposed surface of the liquid.
   - No bubbles form.`,
    equations: `\\text{Boiling: } p_{\\text{vapor}} = p_{\\text{atm}} \\implies \\text{Bubbles form at } T = T_{\\text{boil}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Evaluate Temperature Criterion for Boiling",
        body: "Boiling occurs only at the fixed boiling point (100 °C at standard pressure). Evaporation occurs at any temperature."
      },
      {
        step: 2,
        title: "Evaluate Bubble Formation Criterion",
        body: "During boiling, vapor pressure equals external pressure, allowing steam bubbles to form throughout the bulk of the liquid."
      },
      {
        step: 3,
        title: "Match Row",
        body: "Row A correctly specifies: only at 100 °C | throughout the liquid."
      }
    ],
    finalAnswer: "A (temperature: only at 100 °C | bubbles form: throughout the liquid)",
    reasonablenessCheck: "Vigorously boiling water displays steam bubbles rising from the bottom of the pot, whereas an evaporating glass of water shows no bubbles.",
    commonMistakes: [
      "Confusing boiling with evaporation by selecting Row D.",
      "Thinking bubbles form only at the surface during boiling."
    ],
    takeaway: "Boiling occurs at a fixed temperature throughout the liquid with bubbles; evaporation occurs at any temperature only at the surface without bubbles.",
    simulation: {
      type: "heating_curve",
      defaultParams: { tempC: 100 },
      controls: [],
      readouts: [
        { label: "Phase Transition", expr: () => "Boiling at 100 °C" },
        { label: "Bubble Formation", expr: () => "Throughout entire liquid bulk" }
      ],
      explanation: "At 100 °C, vapor pressure matches atmospheric pressure, creating steam bubbles throughout the liquid."
    }
  },
  {
    globalId: "Q019",
    examId: "Q00223",
    paperRef: "5054/11/O/N/24 Q16",
    pdfPage: 21,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Boyle's Law: Graphical Representation",
    paperType: "mcq",
    marks: 1,
    questionText: `A fixed mass of gas is kept at a constant temperature.
Which graph correctly represents the relationship between the pressure p and the volume V of the gas?

A a straight line with positive gradient starting at the origin for p against V
B a straight line with negative gradient for p against V
C a curved line showing p decreasing as V increases for p against V
D a curved line showing p increasing as 1/V increases`,
    options: [
      { key: "A", text: "a straight line with positive gradient starting at the origin for p against V" },
      { key: "B", text: "a straight line with negative gradient for p against V" },
      { key: "C", text: "a curved line showing p decreasing as V increases for p against V" },
      { key: "D", text: "a curved line showing p increasing as 1/V increases" }
    ],
    correctOption: "C",
    whatIsAsking: "Identify the correct graphical shape for pressure p plotted against volume V for an ideal gas at constant temperature.",
    givenInfo: [
      "Fixed mass of gas.",
      "Temperature is held constant (isothermal condition)."
    ],
    toFind: "Correct description of the p against V graph.",
    physicsConcepts: `Boyle's Law states:
$$p \\propto \\frac{1}{V} \\implies p V = \\text{constant}$$
Graphical profiles:
1. $p$ against $V$: Forms a rectangular hyperbola (a smooth curve that slopes downward as $V$ increases, asymptotic to both axes).
2. $p$ against $1/V$: Forms a straight line passing through the origin $(0, 0)$.`,
    equations: `p = \\frac{k}{V} \\implies \\text{Hyperbolic curve on } (V, p) \\text{ axes}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Examine p vs V Relationship",
        body: "Pressure is inversely proportional to volume. The mathematical function is y = k / x, which is a curve, not a straight line."
      },
      {
        step: 2,
        title: "Evaluate Options",
        body: "Option A and B are straight lines, so they are incorrect. Option C describes a curve showing p decreasing as V increases, which is the correct rectangular hyperbola. (Option D states p against 1/V is curved, but it is actually a straight line)."
      }
    ],
    finalAnswer: "C (a curved line showing p decreasing as V increases for p against V)",
    reasonablenessCheck: "Doubling volume halves pressure; this non-linear reciprocal relationship produces a hyperbolic curve.",
    commonMistakes: [
      "Selecting Option B: confusing inverse proportionality with a linear negative gradient (y = -mx + c).",
      "Selecting Option D: p plotted against 1/V yields a straight line, not a curve."
    ],
    takeaway: "A graph of p against V is a downward sloping hyperbolic curve; a graph of p against 1/V is a straight line through the origin.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { plotType: "pV" },
      controls: [],
      readouts: [
        { label: "p vs V Graph", expr: () => "Smooth downward hyperbola" },
        { label: "p vs 1/V Graph", expr: () => "Straight line through (0,0)" }
      ],
      explanation: "Plotting p against V produces a curve; plotting p against 1/V yields a straight line through the origin."
    }
  },
  {
    globalId: "Q020",
    examId: "Q00224",
    paperRef: "5054/12/O/N/24 Q17",
    pdfPage: 21,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Absolute Zero and Particle Kinetic Energy",
    paperType: "mcq",
    marks: 1,
    questionText: `What is the significance of the temperature called absolute zero (0 K or -273 °C)?

A It is the temperature at which water freezes into ice at standard pressure.
B It is the temperature at which particles have the minimum possible kinetic energy.
C It is the temperature at which all gases condense into liquids.
D It is the temperature at which mercury in a thermometer solidifies.`,
    options: [
      { key: "A", text: "It is the temperature at which water freezes into ice at standard pressure." },
      { key: "B", text: "It is the temperature at which particles have the minimum possible kinetic energy." },
      { key: "C", text: "It is the temperature at which all gases condense into liquids." },
      { key: "D", text: "It is the temperature at which mercury in a thermometer solidifies." }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the thermodynamic definition and microscopic significance of absolute zero.",
    givenInfo: [
      "Temperature: Absolute zero (0 K / -273 °C)."
    ],
    toFind: "The physical definition of absolute zero.",
    physicsConcepts: `Thermodynamic temperature scale:
Temperature is a measure of the average translational kinetic energy of the particles in a substance.
As temperature decreases, molecular motion slows down.
At absolute zero ($0\\text{ K} = -273.15^\\circ\\text{C}$), particles possess the minimum possible internal energy and kinetic energy (in classical thermodynamics, all translational particle motion ceases). No system can be cooled below absolute zero.`,
    equations: `T = 0\\text{ K} = -273^\\circ\\text{C} \\implies \\overline{E_k} = 0 \\text{ (minimum theoretical kinetic energy)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Temperature to Kinetic Energy",
        body: "Kinetic energy of particles is directly proportional to temperature in Kelvin. As T approaches 0 K, particle kinetic energy drops to its minimum theoretical limit."
      },
      {
        step: 2,
        title: "Evaluate Options",
        body: "A is 0 °C (273 K). C describes substance-specific condensation points (helium liquefies at 4 K). D is -39 °C. Option B is the correct universal definition."
      }
    ],
    finalAnswer: "B (It is the temperature at which particles have the minimum possible kinetic energy.)",
    reasonablenessCheck: "Kelvin is an absolute thermodynamic scale whose zero point is defined by minimum possible internal thermal energy.",
    commonMistakes: [
      "Confusing absolute zero (0 K) with the ice point (0 °C = 273 K).",
      "Thinking absolute zero is the temperature at which liquid nitrogen boils."
    ],
    takeaway: "Absolute zero (0 K or -273 °C) is the lowest theoretical temperature, at which particles have minimum kinetic energy.",
    simulation: {
      type: "absolute_zero_lattice",
      defaultParams: { tempK: 0 },
      controls: [],
      readouts: [
        { label: "Thermodynamic State", expr: () => "0 K (-273 °C)" },
        { label: "Particle Kinetic Energy", expr: () => "Minimum Possible (Zero)" }
      ],
      explanation: "At 0 K, molecular motion reaches its minimum theoretical limit."
    }
  },
  {
    globalId: "Q021",
    examId: "Q00225",
    paperRef: "5054/11/M/J/25 Q14",
    pdfPage: 22,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Gas Pressure and Temperature Proportionality",
    paperType: "mcq",
    marks: 1,
    questionText: `A gas in a sealed rigid metal container has its temperature increased from 20 °C to 40 °C.
Which statement describes what happens to the gas pressure?

A The pressure doubles because the Celsius temperature doubles.
B The pressure increases slightly because the absolute temperature increases by a small fraction.
C The pressure remains constant because the volume is constant.
D The pressure decreases because the molecules move further apart.`,
    options: [
      { key: "A", text: "The pressure doubles because the Celsius temperature doubles." },
      { key: "B", text: "The pressure increases slightly because the absolute temperature increases by a small fraction." },
      { key: "C", text: "The pressure remains constant because the volume is constant." },
      { key: "D", text: "The pressure decreases because the molecules move further apart." }
    ],
    correctOption: "B",
    whatIsAsking: "Determine the quantitative change in gas pressure when temperature changes from 20 °C to 40 °C in a rigid container.",
    givenInfo: [
      "Sealed rigid container -> volume V is constant.",
      "T_1 = 20 °C = 293 K.",
      "T_2 = 40 °C = 313 K."
    ],
    toFind: "The accurate statement describing the pressure change.",
    physicsConcepts: `Pressure Law (Gay-Lussac's Law):
Gas pressure is directly proportional to temperature on the **Kelvin (absolute) scale**, not the Celsius scale:
$$\\frac{p_1}{T_1} = \\frac{p_2}{T_2} \\quad (T \\text{ in Kelvin})$$
Converting to Kelvin:
$$T_1 = 20 + 273 = 293\\text{ K}$$
$$T_2 = 40 + 273 = 313\\text{ K}$$
Ratio of absolute temperature:
$$\\frac{T_2}{T_1} = \\frac{313}{293} \\approx 1.068$$
Pressure increases by only about 6.8%, not 100%.`,
    equations: `p \\propto T \\text{ (Kelvin)}; \\quad \\frac{p_2}{p_1} = \\frac{313\\text{ K}}{293\\text{ K}} = 1.068 \\implies \\text{Increases slightly by } \\sim 7\\%`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Temperatures to Kelvin",
        body: "Gas laws require Kelvin temperatures: T_1 = 20 + 273 = 293 K, T_2 = 40 + 273 = 313 K."
      },
      {
        step: 2,
        title: "Compute Ratio",
        body: "The ratio is 313 / 293 = 1.068. The absolute temperature increases by only ~6.8%."
      },
      {
        step: 3,
        title: "Evaluate Pressure Response",
        body: "Because volume is fixed, pressure increases proportionally by ~6.8% (increases slightly). It does not double."
      }
    ],
    finalAnswer: "B (The pressure increases slightly because the absolute temperature increases by a small fraction.)",
    reasonablenessCheck: "Celsius doubling (20 to 40 °C) is not an energetic doubling; true thermodynamic doubling requires heating 293 K to 586 K (313 °C).",
    commonMistakes: [
      "Selecting Option A: assuming pressure is proportional to Celsius temperature.",
      "Selecting Option C: confusing constant volume with constant pressure."
    ],
    takeaway: "Gas laws use absolute temperature in Kelvin: doubling Celsius temperature does not double gas pressure.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { tempC: 40 },
      controls: [
        { id: "tempC", name: "Temperature", min: 20, max: 40, step: 20, default: 40, unit: "°C" }
      ],
      readouts: [
        { label: "Temp in Kelvin", expr: (p) => (p.tempC + 273) + " K" },
        { label: "Pressure Ratio", expr: (p) => ((p.tempC + 273) / 293).toFixed(3) + "x initial" }
      ],
      explanation: "Heating from 20 °C (293 K) to 40 °C (313 K) increases pressure by a factor of 1.068 (about 7%)."
    }
  },
  {
    globalId: "Q022",
    examId: "Q02675",
    paperRef: "5054/21/O/N/20 Q3",
    pdfPage: 23,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Evaporative Cooling: Sweating and Kinetic Model",
    paperType: "theory",
    marks: 4,
    questionText: `A athlete sweats during exercise. A thin film of sweat (mostly water) forms on the skin.
(a) Describe the process of evaporation from the surface of the skin in terms of water molecules. [2]
(b) Explain why sweating causes the athlete's body temperature to decrease. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe molecular evaporation from skin and explain how it cools the athlete's body.",
    givenInfo: [
      "Thin layer of sweat on the athlete's skin.",
      "Evaporation occurs during exercise."
    ],
    toFind: "Molecular description of evaporation and physical explanation of cooling.",
    physicsConcepts: `Kinetic particle model of evaporative cooling:
1. Molecules in liquid sweat have a range of kinetic energies and move in random directions.
2. The most energetic molecules near the surface have enough energy to overcome intermolecular attractive forces and escape into the air as water vapor.
3. Because the molecules that escape have higher-than-average kinetic energy, the average kinetic energy of the molecules remaining on the skin decreases.
4. Thermal energy conducts from the warm skin into the remaining sweat layer, lowering the athlete's body temperature.`,
    equations: `\\bar{E}_{k,\\text{escaped}} > \\bar{E}_{k,\\text{sweat}} \\implies \\bar{E}_{k,\\text{remaining}} \\downarrow \\implies T_{\\text{skin}} \\downarrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Molecular Description of Evaporation (2 marks)",
        body: "Water molecules in sweat move with a range of speeds. The most energetic / fastest-moving molecules near the surface overcome attractive intermolecular forces and escape into the air as water vapor."
      },
      {
        step: 2,
        title: "Part (b) Cooling Explanation (2 marks)",
        body: "Because the escaping molecules carry away above-average kinetic energy, the average kinetic energy of the remaining molecules decreases. Thermal energy conducts from the skin to the sweat, cooling the athlete."
      }
    ],
    finalAnswer: "(a) Energetic water molecules at the surface overcome attractive intermolecular forces and escape into the air;\n(b) Escaping molecules carry away above-average kinetic energy, so the average kinetic energy of the remaining liquid decreases, conducting heat away from the skin.",
    reasonablenessCheck: "Removing high-energy particles reduces the mean energy of the system, lowering temperature.",
    commonMistakes: [
      "Stating that sweat 'absorbs cold air'.",
      "Failing to mention average kinetic energy decreasing."
    ],
    takeaway: "Fast molecules escape; average kinetic energy of remaining liquid falls; heat conducts from skin to restore equilibrium.",
    simulation: {
      type: "evaporation",
      defaultParams: { sweatRate: "high" },
      controls: [],
      readouts: [
        { label: "Molecules Leaving", expr: () => "Highest kinetic energy" },
        { label: "Skin Heat Flow", expr: () => "Conducts into sweat layer" }
      ],
      explanation: "Escaping high-energy sweat molecules lower the liquid's average energy, drawing heat from the skin."
    }
  },
  {
    globalId: "Q023",
    examId: "Q02676",
    paperRef: "5054/21/O/N/20 Q3(c)",
    pdfPage: 23,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Brownian Motion: Microscope Observation and Deduction",
    paperType: "theory",
    marks: 4,
    questionText: `Fig. 3.1 shows apparatus used to observe Brownian motion in smoke particles in air.
(a) Describe what is seen through the microscope. [1]
(b) Explain what causes this motion. [2]
(c) State what deduction about air molecules can be made from this experiment. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe the optical observation of Brownian motion, explain its cause, and state deductions about air molecules.",
    givenInfo: [
      "Smoke cell illuminated from the side and viewed under a microscope."
    ],
    toFind: "Visible observation, physical cause, and deduction about air molecules.",
    physicsConcepts: `Brownian motion analysis:
1. Observation: Small, bright specks of light moving in a random, erratic, zig-zag path.
2. Cause: Microscopic smoke particles are bombarded unevenly by invisible, fast-moving air molecules. Momentary unbalances in impact forces produce net accelerations.
3. Deduction: Air molecules move continuously, randomly, and at high speed, and are much smaller than smoke particles.`,
    equations: `\\text{Observation: Random zig-zag specks} \\implies \\text{Deduction: Air molecules move rapidly and randomly}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Describe What is Seen",
        body: "Bright specks of light / smoke particles moving in a random, erratic, zig-zag path."
      },
      {
        step: 2,
        title: "Part (b) Explain the Cause",
        body: "Invisible air molecules moving at high speed collide unevenly / bombard the smoke particles on different sides, producing an unbalanced net force."
      },
      {
        step: 3,
        title: "Part (c) State Deduction",
        body: "Air molecules move continuously, randomly, and at high speed (and are much smaller than smoke particles)."
      }
    ],
    finalAnswer: "(a) Bright specks of light moving in a random / zig-zag path;\n(b) Invisible air molecules moving at high speed collide unevenly with the smoke particles;\n(c) Air molecules move continuously, randomly, and at high speed.",
    reasonablenessCheck: "Brownian motion provided the first direct physical evidence of discrete molecular motion in fluids.",
    commonMistakes: [
      "Stating that air molecules can be seen directly through the microscope.",
      "Saying smoke particles move because of convection currents from the lamp."
    ],
    takeaway: "Visible smoke specks move in a zig-zag path because invisible air molecules bombard them randomly at high speed.",
    simulation: {
      type: "brownian_motion",
      defaultParams: { tempK: 295 },
      controls: [],
      readouts: [
        { label: "What is seen", expr: () => "Bright specks in random zig-zag motion" },
        { label: "Deduction", expr: () => "Air molecules move fast and randomly" }
      ],
      explanation: "Random collisions from invisible air molecules produce the visible zig-zag motion of smoke specks."
    }
  },
  {
    globalId: "Q024",
    examId: "Q02074",
    paperRef: "5054/22/O/N/20 Q2",
    pdfPage: 24,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Boyle's Law: Calculation and Molecular Explanation",
    paperType: "theory",
    marks: 6,
    questionText: `A piston traps 140 cm³ of air at a pressure of 100 kPa in a cylinder.
The piston is pushed in slowly so that the temperature of the air does not change.
The volume of the trapped air decreases to 40 cm³.

(a) Calculate the new pressure of the trapped air. [2]
(b) Explain, in terms of molecules, why the pressure increases as the volume decreases at constant temperature. [3]
(c) State why the piston must be moved slowly. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate final pressure using Boyle's Law, explain the pressure increase using kinetic theory, and explain why the compression must be slow.",
    givenInfo: [
      "Initial volume V_1 = 140 cm³",
      "Initial pressure p_1 = 100 kPa",
      "Final volume V_2 = 40 cm³",
      "Temperature is constant"
    ],
    toFind: "New pressure p_2, molecular explanation, and justification for slow compression.",
    physicsConcepts: `Boyle's Law and isothermal compression:
1. Boyle's Law: $p_1 V_1 = p_2 V_2 \\implies p_2 = (p_1 V_1) / V_2$.
2. Molecular mechanism:
   - Temperature is constant, so average molecular speed and momentum change per collision remain unchanged.
   - Compressing the gas increases the number of molecules per unit volume (molecular density).
   - Molecules travel shorter distances between collisions and strike the walls more frequently (more collisions per second per unit area), which increases the pressure.
3. Moving slowly: Rapid compression does work on the gas, converting mechanical work into internal energy and raising the temperature. Moving the piston slowly allows heat to conduct away to the surroundings, keeping the temperature constant.`,
    equations: `p_1 V_1 = p_2 V_2; \\quad p_2 = \\frac{100 \\times 140}{40} = 350 \\text{ kPa}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Calculate New Pressure",
        body: "Apply Boyle's Law: p_1 * V_1 = p_2 * V_2.\n100 kPa * 140 cm³ = p_2 * 40 cm³.\np_2 = 14 000 / 40 = 350 kPa."
      },
      {
        step: 2,
        title: "Part (b) Molecular Explanation (3 marks)",
        body: "1. The molecules have the same average speed / kinetic energy because temperature is constant.\n2. In a smaller volume, molecules are closer together / number of molecules per unit volume increases.\n3. Molecules collide with the walls more frequently (more collisions per unit area per second), increasing pressure."
      },
      {
        step: 3,
        title: "Part (c) Reason for Slow Movement (1 mark)",
        body: "To allow thermal energy to escape so that the temperature of the gas remains constant (rapid compression warms the gas)."
      }
    ],
    finalAnswer: "(a) 350 kPa;\n(b) Molecular speed is constant; smaller volume means molecules are closer together and collide with the walls more frequently;\n(c) To keep temperature constant (allows thermal energy to escape).",
    reasonablenessCheck: "Volume decreases to 40/140 = 2/7 of initial, so pressure increases to 7/2 = 3.5 times initial: 100 * 3.5 = 350 kPa.",
    commonMistakes: [
      "Stating that molecules hit the walls harder (force per collision is constant at constant temperature).",
      "Forgetting to state that compression does work that raises temperature if done quickly."
    ],
    takeaway: "p_1 V_1 = p_2 V_2; at constant temperature, pressure increases solely because molecules collide with the walls more frequently.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { volumeCm3: 40 },
      controls: [
        { id: "volumeCm3", name: "Piston Volume", min: 30, max: 140, step: 10, default: 40, unit: "cm³" }
      ],
      readouts: [
        { label: "Target Pressure", expr: (p) => (14000 / p.volumeCm3).toFixed(1) + " kPa" }
      ],
      explanation: "Compressing volume from 140 cm³ to 40 cm³ increases pressure from 100 kPa to 350 kPa."
    }
  },
  {
    globalId: "Q025",
    examId: "Q02825",
    paperRef: "5054/21/M/J/21 Q1",
    pdfPage: 25,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Gas Pressure from Molecular Collisions",
    paperType: "theory",
    marks: 4,
    questionText: `A gas cylinder has a rigid metal shell and contains gas under high pressure.
(a) Describe how gas molecules exert a pressure on the inside walls of the cylinder. [2]
(b) The gas cylinder is left in direct sunlight on a hot day. The temperature of the gas increases.
Explain, in terms of molecules, why the pressure of the gas increases. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how gas molecules exert pressure and why heating at constant volume increases that pressure.",
    givenInfo: [
      "Rigid gas cylinder (constant volume).",
      "Gas heated by sunlight."
    ],
    toFind: "Kinetic explanation of pressure and kinetic explanation of thermal pressure increase.",
    physicsConcepts: `Molecular origin of pressure:
1. Molecules move in random directions at high speed and collide with the cylinder walls.
2. When a molecule bounces off a wall, its velocity reverses, producing a change in momentum.
3. The rate of change of momentum exerts a force on the wall ($F = \\Delta p / \\Delta t$).
4. The sum of these forces over the wall surface area produces pressure ($p = F / A$).
5. Heating at constant volume:
   - Molecules gain kinetic energy and move faster ($v \\propto \\sqrt{T}$).
   - Faster molecules collide with the walls more frequently and with greater momentum change per collision, exerting a larger force and increasing pressure.`,
    equations: `F = \\frac{\\Delta p}{\\Delta t}; \\quad p = \\frac{F}{A}; \\quad T \\uparrow \\implies \\overline{v} \\uparrow \\implies p \\uparrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) How Molecules Exert Pressure (2 marks)",
        body: "Gas molecules collide with the walls of the cylinder. Each collision causes a change in momentum, which exerts a force on the wall; pressure is force per unit area."
      },
      {
        step: 2,
        title: "Part (b) Why Pressure Increases on Heating (2 marks)",
        body: "Higher temperature means molecules have greater kinetic energy and move faster. They collide with the walls more frequently and with greater force / momentum change."
      }
    ],
    finalAnswer: "(a) Molecules collide with the walls and undergo a change in momentum, exerting a force per unit area;\n(b) Molecules move faster, colliding with the walls more frequently and with greater force.",
    reasonablenessCheck: "Rigid containers heated by sunlight can burst because higher kinetic energy causes harder, more frequent wall collisions.",
    commonMistakes: [
      "Stating molecules expand when heated.",
      "Omitting momentum change when explaining the force exerted on walls."
    ],
    takeaway: "Gas pressure originates from momentum changes during wall collisions; higher temperatures make collisions harder and more frequent.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { tempC: 50 },
      controls: [
        { id: "tempC", name: "Cylinder Temp", min: 20, max: 100, step: 10, default: 50, unit: "°C" }
      ],
      readouts: [
        { label: "Molecular Speed", expr: (p) => Math.round(450 * Math.sqrt((p.tempC + 273) / 293)) + " m/s" },
        { label: "Pressure", expr: (p) => (200 * (p.tempC + 273) / 293).toFixed(1) + " kPa" }
      ],
      explanation: "Heating increases molecular speed, increasing both collision frequency and force on the cylinder walls."
    }
  },
  {
    globalId: "Q026",
    examId: "Q02365",
    paperRef: "5054/22/M/J/21 Q2",
    pdfPage: 26,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Comparing States of Matter Properties",
    paperType: "theory",
    marks: 4,
    questionText: `Complete the table to describe the arrangement, separation, and motion of particles in solids, liquids, and gases:

| state | arrangement of particles | separation of particles | motion of particles |
|---|---|---|---|
| solid | regular lattice | closely packed | vibrate about fixed positions |
| liquid | (i) .................... | closely packed | (ii) .................... |
| gas | random | (iii) .................... | (iv) .................... | [4]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Fill in the missing descriptors for particle arrangement, separation, and motion in liquids and gases.",
    givenInfo: [
      "Table of states of matter properties with four missing entries."
    ],
    toFind: "Entries (i), (ii), (iii), and (iv).",
    physicsConcepts: `Comparative state properties in the kinetic model:
- Solid: Regular lattice, closely packed, vibrating about fixed positions.
- Liquid: Irregular / random / disordered arrangement; closely packed (touching); sliding past one another / flowing.
- Gas: Random / disordered; far apart / widely separated; moving rapidly in all directions at high speed.`,
    equations: `\\text{Liquid: Irregular, touching, sliding} \\quad \\text{Gas: Random, far apart, rapid translation}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Fill Entry (i) - Liquid Arrangement",
        body: "Irregular / random / disordered / no fixed pattern."
      },
      {
        step: 2,
        title: "Fill Entry (ii) - Liquid Motion",
        body: "Slide past one another / move randomly while remaining in contact."
      },
      {
        step: 3,
        title: "Fill Entry (iii) - Gas Separation",
        body: "Far apart / widely separated / large empty spaces between particles."
      },
      {
        step: 4,
        title: "Fill Entry (iv) - Gas Motion",
        body: "Move freely / rapidly in all directions / high speed in random directions."
      }
    ],
    finalAnswer: "(i) irregular / random / disordered;\n(ii) slide past each other / flow;\n(iii) far apart / widely separated;\n(iv) move rapidly / freely in all directions.",
    reasonablenessCheck: "Liquids have fixed volume (particles touch) but no fixed shape (particles slide); gases expand to fill containers (particles are widely spaced and free).",
    commonMistakes: [
      "Stating liquid particles are far apart (they are in close contact).",
      "Stating gas particles vibrate in place."
    ],
    takeaway: "Liquids are closely packed, disordered, and slide; gases are widely separated, disordered, and move rapidly in all directions.",
    simulation: {
      type: "kinetic_state",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Liquid", expr: () => "Disordered, closely packed, sliding" },
        { label: "Gas", expr: () => "Widely separated, fast random motion" }
      ],
      explanation: "Compare the three states: solids vibrate in a lattice, liquids slide while touching, and gases fly freely."
    }
  },
  {
    globalId: "Q027",
    examId: "Q02051",
    paperRef: "5054/21/O/N/21 Q2",
    pdfPage: 27,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Drying Clothes: Evaporation and Airflow",
    paperType: "theory",
    marks: 4,
    questionText: `Wet clothes are hung on a washing line outside on a windy, warm day.
(a) Explain why wet clothes dry faster when it is windy. [2]
(b) Explain why wet clothes dry faster when the temperature is higher. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain using kinetic theory why wind and higher temperature accelerate the drying of wet clothes.",
    givenInfo: [
      "Wet clothes hung on a line.",
      "Factors: wind speed and temperature."
    ],
    toFind: "Physical explanations for wind effect and temperature effect on evaporation.",
    physicsConcepts: `Factors affecting evaporation:
1. Wind / Airflow:
   - Water evaporates into the thin layer of air directly adjacent to the fabric, raising local humidity.
   - Without wind, this stagnant air layer becomes saturated, increasing condensation back onto the fabric.
   - Wind carries away the escaped water vapor molecules, maintaining a lower vapor concentration and allowing evaporation to continue rapidly.
2. Higher Temperature:
   - Molecules in the liquid have higher average kinetic energy.
   - A larger fraction of molecules have kinetic energy exceeding the escape threshold, allowing more molecules to overcome intermolecular bonds and escape per second.`,
    equations: `\\text{Wind} \\implies \\text{Sweeps boundary layer}; \\quad T \\uparrow \\implies \\text{Fraction with } E_k > W \\uparrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Explain Effect of Wind (2 marks)",
        body: "Moving air blows away water vapor molecules that have evaporated from the clothes. This prevents the air near the surface from becoming saturated, allowing more water molecules to escape continuously."
      },
      {
        step: 2,
        title: "Part (b) Explain Effect of Higher Temperature (2 marks)",
        body: "At higher temperature, water molecules have greater average kinetic energy. More molecules have enough energy to overcome attractive intermolecular forces and escape from the liquid surface."
      }
    ],
    finalAnswer: "(a) Wind removes water vapor molecules from near the surface, preventing saturation and allowing more molecules to escape;\n(b) Higher temperature gives molecules greater kinetic energy, so more molecules have enough energy to overcome intermolecular bonds and escape.",
    reasonablenessCheck: "Both mechanisms increase the net rate of evaporation by removing escaped vapor and providing more kinetic energy.",
    commonMistakes: [
      "Saying wind heats the clothes.",
      "Omitting the concept of saturation / molecular removal when explaining wind."
    ],
    takeaway: "Wind removes escaped vapor to prevent local saturation; higher temperature gives more molecules enough energy to escape.",
    simulation: {
      type: "evaporation",
      defaultParams: { windActive: true },
      controls: [],
      readouts: [
        { label: "Wind Effect", expr: () => "Removes saturated vapor layer" },
        { label: "Temperature Effect", expr: () => "More molecules exceed escape threshold" }
      ],
      explanation: "Wind sweeps away vapor molecules, while higher temperatures give more particles enough energy to leave the surface."
    }
  },
  {
    globalId: "Q028",
    examId: "Q02213",
    paperRef: "5054/21/M/J/22 Q2",
    pdfPage: 28,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Scuba Tank Gas Laws and Pressure",
    paperType: "theory",
    marks: 5,
    questionText: `A diver uses a cylinder containing 12 liters of compressed air at a pressure of 20 000 kPa at 20 °C.
(a) The diver breathes air from the cylinder at a depth where the pressure is 250 kPa.
Calculate the volume of air available at 250 kPa, assuming the temperature remains constant. [2]
(b) When left in the sun, the temperature of the air inside the cylinder rises to 45 °C.
Explain, in terms of molecules, why the pressure inside the cylinder increases. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate expanded air volume using Boyle's Law and explain pressure rise in a rigid cylinder when heated.",
    givenInfo: [
      "Cylinder volume V_1 = 12 liters",
      "Initial pressure p_1 = 20 000 kPa",
      "Final pressure p_2 = 250 kPa",
      "Rigid cylinder heated from 20 °C to 45 °C"
    ],
    toFind: "Expanded volume V_2 and molecular explanation of thermal pressure increase.",
    physicsConcepts: `Gas laws applied to scuba diving:
1. Boyle's Law (isothermal expansion):
$$p_1 V_1 = p_2 V_2 \\implies V_2 = \\frac{p_1 V_1}{p_2}$$
2. Thermal pressure increase (rigid cylinder):
   - Volume is fixed by the metal cylinder walls.
   - As temperature rises, molecules absorb thermal energy and their average speed increases ($v \\propto \\sqrt{T}$).
   - Faster molecules collide with the cylinder walls more frequently and with greater momentum change per collision, exerting a larger force per unit area and increasing pressure.`,
    equations: `p_1 V_1 = p_2 V_2 \\implies V_2 = \\frac{20\\,000 \\times 12}{250} = 960 \\text{ liters}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Calculate Available Air Volume",
        body: "Apply Boyle's Law: p_1 * V_1 = p_2 * V_2.\n20 000 kPa * 12 liters = 250 kPa * V_2.\nV_2 = (240 000) / 250 = 960 liters."
      },
      {
        step: 2,
        title: "Part (b) Molecular Explanation of Pressure Rise (3 marks)",
        body: "1. The temperature increase gives molecules greater kinetic energy, so they move faster.\n2. Faster molecules collide with the walls of the cylinder more frequently.\n3. Each collision involves a larger change in momentum, exerting a greater force per collision. Combined with higher frequency, this increases pressure."
      }
    ],
    finalAnswer: "(a) 960 liters;\n(b) Molecules gain kinetic energy and move faster; they collide with the cylinder walls more frequently and with greater force / momentum change.",
    reasonablenessCheck: "Pressure decreases by a factor of 80 (20 000 / 250 = 80), so volume expands by 80 times: 12 * 80 = 960 liters.",
    commonMistakes: [
      "Multiplying 12 by 250 instead of using p_1 * V_1 / p_2.",
      "Stating the cylinder expands significantly (scuba tanks are rigid steel or aluminum)."
    ],
    takeaway: "p_1 V_1 = p_2 V_2; heating a fixed volume makes molecules move faster, producing more frequent and forceful wall collisions.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { volumeLiters: 12 },
      controls: [],
      readouts: [
        { label: "Available Volume at 250 kPa", expr: () => "960 Liters" },
        { label: "Expansion Factor", expr: () => "80x Original Volume" }
      ],
      explanation: "Compressed air expands from 12 L at 20 000 kPa to 960 L at 250 kPa."
    }
  },
  {
    globalId: "Q029",
    examId: "Q01705",
    paperRef: "5054/22/M/J/22 Q2",
    pdfPage: 29,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Diffusion in Gases and Liquids",
    paperType: "theory",
    marks: 4,
    questionText: `A gas jar of red-brown bromine vapor is separated from a gas jar of air by a glass plate.
When the glass plate is removed, the red-brown color slowly spreads throughout both jars.
(a) State the name of this process. [1]
(b) Explain, in terms of molecules, why the bromine vapor spreads throughout both jars. [2]
(c) State and explain how the time taken for the color to spread would change if the experiment were carried out at a higher temperature. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify diffusion, explain its molecular mechanism in gases, and describe the effect of temperature on diffusion rate.",
    givenInfo: [
      "Bromine vapor jar and air jar placed end-to-end.",
      "Partition removed; gas spreads throughout."
    ],
    toFind: "Process name, molecular explanation, and temperature dependence.",
    physicsConcepts: `Diffusion in gases:
1. Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration as a result of random molecular motion.
2. Both bromine molecules and air molecules move randomly at high speed in all directions.
3. Random collisions between molecules cause them to intermingle and disperse until concentration is uniform throughout both jars.
4. Higher temperature: Molecules possess greater kinetic energy and move faster ($v \\propto \\sqrt{T}$), so diffusion occurs more rapidly and the time taken decreases.`,
    equations: `\\text{Diffusion Rate} \\propto T; \\quad \\text{Net flux } J = -D \\frac{dc}{dx}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Name the Process",
        body: "Diffusion."
      },
      {
        step: 2,
        title: "Part (b) Molecular Explanation (2 marks)",
        body: "Bromine and air molecules move randomly at high speed in all directions. Frequent collisions cause the molecules to spread out and mix into the spaces between each other until uniformly distributed."
      },
      {
        step: 3,
        title: "Part (c) Effect of Higher Temperature (1 mark)",
        body: "The time taken would decrease / it would spread faster because molecules have greater kinetic energy and move faster at higher temperature."
      }
    ],
    finalAnswer: "(a) Diffusion;\n(b) Bromine and air molecules move randomly at high speed, colliding and spreading into the spaces between each other;\n(c) Time taken decreases (spreads faster) because molecules move faster at higher temperature.",
    reasonablenessCheck: "Perfume spreads faster across a warm room than a cold room because molecular diffusion rates scale with temperature.",
    commonMistakes: [
      "Calling the process convection (no density-driven fluid buoyancy is required).",
      "Stating molecules move in straight lines without colliding (gas molecules collide billions of times per second)."
    ],
    takeaway: "Diffusion is the net movement of particles due to random motion; higher temperatures increase molecular speeds and speed up diffusion.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { diffusionActive: true },
      controls: [],
      readouts: [
        { label: "Process", expr: () => "Diffusion" },
        { label: "Rate Factor", expr: () => "Faster at higher temperature" }
      ],
      explanation: "Random molecular motion and collisions cause bromine particles to disperse evenly throughout both jars."
    }
  },
  {
    globalId: "Q030",
    examId: "Q00984",
    paperRef: "5054/22/O/N/22 Q2",
    pdfPage: 30,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Pressure-Temperature Graph and Absolute Zero Extrapolation",
    paperType: "theory",
    marks: 5,
    questionText: `A student investigates the relationship between the pressure p and temperature θ of a fixed mass of gas in a rigid container.
Fig. 2.1 shows the graph of pressure p against temperature θ in °C.
The graph is a straight line that does not pass through (0, 0) on the Celsius scale.
When extrapolated backwards, the line intersects the temperature axis at -273 °C.

(a) State the name given to the temperature -273 °C. [1]
(b) Explain why the pressure of the gas becomes zero at -273 °C according to the kinetic model. [2]
(c) At a temperature of 20 °C, the pressure of the gas is 100 kPa.
Calculate the pressure of the gas when its temperature is increased to 80 °C. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify absolute zero from a p-θ graph, explain zero pressure at 0 K, and calculate pressure at 80 °C using the Kelvin scale.",
    givenInfo: [
      "Rigid container (volume is constant).",
      "p-θ graph intercepts θ-axis at -273 °C.",
      "p_1 = 100 kPa at θ_1 = 20 °C.",
      "θ_2 = 80 °C."
    ],
    toFind: "Name of -273 °C, kinetic explanation of zero pressure, and new pressure p_2.",
    physicsConcepts: `Gay-Lussac's Law and the Kelvin scale:
1. Extrapolation: A graph of pressure against Celsius temperature is a straight line ($p = m \\theta + c$) that intercepts the temperature axis at $-273^\\circ\\text{C}$ (absolute zero, $0\\text{ K}$).
2. Zero pressure: Pressure is caused by molecular collisions with the container walls. At absolute zero, particles have minimum internal energy and no translational motion; with no collisions occurring, pressure is zero.
3. Pressure calculation requires absolute temperature:
$$T_1 = 20 + 273 = 293\\text{ K}$$
$$T_2 = 80 + 273 = 353\\text{ K}$$
$$\\frac{p_1}{T_1} = \\frac{p_2}{T_2} \\implies p_2 = p_1 \\times \\frac{T_2}{T_1}$$`,
    equations: `T = \\theta + 273; \\quad \\frac{p_1}{T_1} = \\frac{p_2}{T_2} \\implies p_2 = 100 \\times \\frac{353}{293} = 120.5 \\text{ kPa}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Name the Temperature",
        body: "Absolute zero (0 K)."
      },
      {
        step: 2,
        title: "Part (b) Explain Zero Pressure at Absolute Zero",
        body: "Pressure is caused by particles colliding with the walls. At -273 °C (absolute zero), particles have minimum kinetic energy and stop moving, so there are no collisions with the walls to exert a force."
      },
      {
        step: 3,
        title: "Part (c) Convert Temperatures to Kelvin",
        body: "T_1 = 20 °C + 273 = 293 K.\nT_2 = 80 °C + 273 = 353 K."
      },
      {
        step: 4,
        title: "Part (c) Calculate Final Pressure",
        body: "p_2 = p_1 * (T_2 / T_1) = 100 kPa * (353 / 293) = 100 * 1.2048 = 120.5 kPa ≈ 120 kPa (or 121 kPa)."
      }
    ],
    finalAnswer: "(a) Absolute zero;\n(b) Particles have minimum kinetic energy / stop moving, so they do not collide with the container walls;\n(c) 120 kPa (or 120.5 kPa / 121 kPa).",
    reasonablenessCheck: "Heating from 293 K to 353 K is a ~20% increase in absolute temperature, so pressure rises from 100 kPa to ~120 kPa.",
    commonMistakes: [
      "Using Celsius temperatures directly: p_2 = 100 * (80/20) = 400 kPa (incorrect).",
      "Calling -273 °C the ice point."
    ],
    takeaway: "Gas calculations must use Kelvin temperatures ($T = \\theta + 273$). At absolute zero, molecular motion stops and pressure is zero.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { tempC: 80 },
      controls: [
        { id: "tempC", name: "Temperature", min: 20, max: 120, step: 20, default: 80, unit: "°C" }
      ],
      readouts: [
        { label: "Absolute Temp", expr: (p) => (p.tempC + 273) + " K" },
        { label: "Pressure", expr: (p) => (100 * (p.tempC + 273) / 293).toFixed(1) + " kPa" }
      ],
      explanation: "Pressure increases linearly with absolute temperature, reaching 120.5 kPa at 80 °C (353 K)."
    }
  }
];