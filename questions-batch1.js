/**
 * Master Question Store: Batch 1 (Q001 to Q015)
 * Section 2.1: Kinetic Particle Model of Matter (MCQs)
 */

const QUESTIONS_BATCH_1 = [
  {
    globalId: "Q001",
    examId: "Q00205",
    paperRef: "5054/11/M/J/20 Q15",
    pdfPage: 12,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "States of Matter: Molecular Spacing & Forces",
    paperType: "mcq",
    marks: 1,
    questionText: `Which row correctly describes the spacing and the attractive forces between the molecules of a gas compared to a liquid?

| | spacing between molecules | attractive forces between molecules |
|---|---|---|
| A | much greater | much weaker |
| B | much greater | much stronger |
| C | much smaller | much weaker |
| D | much smaller | much stronger |`,
    options: [
      { key: "A", text: "spacing: much greater | attractive forces: much weaker" },
      { key: "B", text: "spacing: much greater | attractive forces: much stronger" },
      { key: "C", text: "spacing: much smaller | attractive forces: much weaker" },
      { key: "D", text: "spacing: much smaller | attractive forces: much stronger" }
    ],
    correctOption: "A",
    whatIsAsking: "Compare intermolecular separation and intermolecular attractive forces in a gas relative to a liquid.",
    givenInfo: [
      "Comparison between gaseous state and liquid state."
    ],
    toFind: "Correct row for spacing and attractive forces.",
    physicsConcepts: `In the kinetic particle model of matter:
- Gases: Particles are far apart (separated by distances roughly 10 times molecular diameter), and intermolecular attractive forces are negligible except during collisions.
- Liquids: Particles are closely packed in contact, and intermolecular attractive forces are strong enough to maintain a fixed volume while allowing fluid sliding.`,
    equations: `r_{\\text{gas}} \\gg r_{\\text{liquid}}; \\quad F_{\\text{attractive, gas}} \\ll F_{\\text{attractive, liquid}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Evaluate Spacing",
        body: "Gas molecules are widely separated with mostly empty space between them. The spacing is much greater than in a liquid."
      },
      {
        step: 2,
        title: "Evaluate Attractive Forces",
        body: "Because gas molecules are widely separated, intermolecular forces of attraction are negligible (much weaker than in a liquid)."
      },
      {
        step: 3,
        title: "Match Row",
        body: "Row A correctly matches: spacing much greater | attractive forces much weaker."
      }
    ],
    finalAnswer: "A (spacing: much greater | attractive forces: much weaker)",
    reasonablenessCheck: "Gases can be easily compressed because the spacing is large and forces are negligible.",
    commonMistakes: [
      "Confusing liquids with gases by assuming liquids have large intermolecular gaps.",
      "Thinking gas molecules repel each other strongly instead of having negligible attraction."
    ],
    takeaway: "Gas molecules have much greater spacing and negligible attractive forces compared to liquids.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "gas" },
      controls: [],
      readouts: [
        { label: "Molecular Spacing", expr: () => "Much Greater (Far Apart)" },
        { label: "Attractive Force", expr: () => "Negligible / Much Weaker" }
      ],
      explanation: "Molecules in a gas move freely in all directions with large separation and negligible attractive forces."
    }
  },
  {
    globalId: "Q002",
    examId: "Q00206",
    paperRef: "5054/12/M/J/20 Q16",
    pdfPage: 12,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Brownian Motion: Observation Specks",
    paperType: "mcq",
    marks: 1,
    questionText: `A smoke cell is viewed through a microscope under bright side illumination.
Small, bright specks of light are seen moving in a continuous, random, zig-zag path.
What are these bright specks of light?

A air molecules reflecting light
B smoke particles reflecting light
C photons of light scattering each other
D vibrating dust atoms`,
    options: [
      { key: "A", text: "air molecules reflecting light" },
      { key: "B", text: "smoke particles reflecting light" },
      { key: "C", text: "photons of light scattering each other" },
      { key: "D", text: "vibrating dust atoms" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify what the visible specks of light represent in a microscope smoke cell experiment.",
    givenInfo: [
      "Smoke cell illuminated from the side and viewed under an optical microscope.",
      "Bright specks execute random zig-zag motion."
    ],
    toFind: "The physical identity of the visible specks.",
    physicsConcepts: `Air molecules are far too small (diameter ~0.3 nm) to reflect visible light or be seen under an optical microscope.
Smoke particles are microscopic clusters of carbon atoms (diameter ~1 µm) that are large enough to scatter visible light, appearing as bright pinpoints of light. Their erratic motion is caused by uneven bombardment by invisible, fast-moving air molecules.`,
    equations: `\\text{Size: } d_{\\text{smoke}} \\sim 10^{-6}\\text{ m} \\gg d_{\\text{air}} \\sim 10^{-10}\\text{ m}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Assess Visibility of Air Molecules",
        body: "Air molecules are individual sub-nanometer particles. Optical microscopes use visible light (wavelength 400-700 nm) and cannot resolve individual air molecules."
      },
      {
        step: 2,
        title: "Identify Visible Entity",
        body: "The visible specks are microscopic smoke particles that reflect light from the illuminator into the microscope lens."
      }
    ],
    finalAnswer: "B (smoke particles reflecting light)",
    reasonablenessCheck: "Individual molecules cannot be resolved by an optical microscope; only microscopic smoke particles scatter enough light to be seen.",
    commonMistakes: [
      "Selecting Option A, believing that air molecules themselves can be seen under a school microscope.",
      "Confusing smoke particles with photons."
    ],
    takeaway: "The visible moving specks in Brownian motion are smoke particles reflecting light, not individual air molecules.",
    simulation: {
      type: "brownian_motion",
      defaultParams: { tempK: 295 },
      controls: [],
      readouts: [
        { label: "Visible Specks", expr: () => "Smoke Particles (Light Scattering)" },
        { label: "Invisible Bombardment", expr: () => "Fast Air Molecules" }
      ],
      explanation: "Light scatters off microscopic smoke particles as they are bombarded by invisible air molecules."
    }
  },
  {
    globalId: "Q003",
    examId: "Q00207",
    paperRef: "5054/11/O/N/20 Q17",
    pdfPage: 13,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Gas Pressure and Temperature: Kinetic Interpretation",
    paperType: "mcq",
    marks: 1,
    questionText: `A fixed mass of gas in a rigid container of fixed volume is heated.
Why does the pressure of the gas increase?

A The gas molecules expand and press against the walls.
B The gas molecules move faster and collide with the walls more frequently and with greater force.
C The number of gas molecules inside the container increases.
D The attractive forces between the gas molecules become stronger.`,
    options: [
      { key: "A", text: "The gas molecules expand and press against the walls." },
      { key: "B", text: "The gas molecules move faster and collide with the walls more frequently and with greater force." },
      { key: "C", text: "The number of gas molecules inside the container increases." },
      { key: "D", text: "The attractive forces between the gas molecules become stronger." }
    ],
    correctOption: "B",
    whatIsAsking: "Explain the increase in gas pressure at constant volume using kinetic theory.",
    givenInfo: [
      "Fixed mass of gas (number of molecules N is constant).",
      "Rigid container (volume V is constant).",
      "Temperature T increases."
    ],
    toFind: "Kinetic theory explanation for pressure increase.",
    physicsConcepts: `Gas pressure is caused by collisions of molecules with the container walls:
$$p = \\frac{F}{A} = \\frac{N \\cdot (\\Delta p / \\Delta t)}{A}$$
When heated, average kinetic energy increases ($E_k \\propto T$), so molecules move at higher speeds:
1. They collide with the walls more frequently (more collisions per second).
2. Each collision involves a larger change in momentum, exerting a greater force. Both factors increase pressure.`,
    equations: `p = \\frac{1}{3} \\rho \\overline{c^2}; \\quad T \\uparrow \\implies \\overline{c^2} \\uparrow \\implies p \\uparrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Temperature to Molecular Motion",
        body: "Heating increases the temperature, which increases the average kinetic energy and speed of the gas molecules."
      },
      {
        step: 2,
        title: "Analyze Wall Collisions",
        body: "Faster-moving molecules strike the walls more often and exert a greater force per collision due to higher momentum change."
      },
      {
        step: 3,
        title: "Evaluate Distractors",
        body: "Molecules do not expand (A is false). Mass is fixed, so the number of molecules does not change (C is false). Intermolecular forces remain negligible (D is false)."
      }
    ],
    finalAnswer: "B (The gas molecules move faster and collide with the walls more frequently and with greater force.)",
    reasonablenessCheck: "Rigid pressure vessels experience higher pressure when heated due to faster molecular impacts.",
    commonMistakes: [
      "Selecting Option A: molecules do not expand when heated.",
      "Stating that the number of particles increases in a sealed container."
    ],
    takeaway: "Higher temperature means faster particles, leading to more frequent and harder collisions with container walls.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { tempC: 80, volumeCm3: 100 },
      controls: [
        { id: "tempC", name: "Gas Temperature", min: 20, max: 200, step: 20, default: 80, unit: "°C" }
      ],
      readouts: [
        { label: "Molecular Speed", expr: (p) => Math.round(400 * Math.sqrt((p.tempC + 273) / 293)) + " m/s" },
        { label: "Pressure", expr: (p) => ((p.tempC + 273) / 293 * 101.3).toFixed(1) + " kPa" }
      ],
      explanation: "Increasing temperature increases molecular speed, producing more frequent and forceful collisions."
    }
  },
  {
    globalId: "Q004",
    examId: "Q00208",
    paperRef: "5054/12/O/N/20 Q18",
    pdfPage: 13,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Boyle's Law: Calculation",
    paperType: "mcq",
    marks: 1,
    questionText: `A cylinder contains 60 cm³ of air at a pressure of 120 kPa.
The piston is pushed in slowly at constant temperature until the volume of the air is 20 cm³.
What is the new pressure of the air?

A 40 kPa
B 180 kPa
C 240 kPa
D 360 kPa`,
    options: [
      { key: "A", text: "40 kPa" },
      { key: "B", text: "180 kPa" },
      { key: "C", text: "240 kPa" },
      { key: "D", text: "360 kPa" }
    ],
    correctOption: "D",
    whatIsAsking: "Calculate the final pressure of a trapped gas compressed at constant temperature using Boyle's Law.",
    givenInfo: [
      "Initial volume V_1 = 60 cm³",
      "Initial pressure p_1 = 120 kPa",
      "Final volume V_2 = 20 cm³",
      "Temperature is constant"
    ],
    toFind: "Final pressure p_2 in kPa.",
    physicsConcepts: `Boyle's Law states that for a fixed mass of gas at constant temperature:
$$p_1 V_1 = p_2 V_2$$
Rearranging for final pressure:
$$p_2 = \\frac{p_1 V_1}{V_2}$$`,
    equations: `p_1 V_1 = p_2 V_2 \\implies p_2 = \\frac{120 \\times 60}{20}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Formula",
        body: "Apply Boyle's Law: p_1 * V_1 = p_2 * V_2."
      },
      {
        step: 2,
        title: "Substitute Known Values",
        body: "120 kPa * 60 cm³ = p_2 * 20 cm³."
      },
      {
        step: 3,
        title: "Solve for Final Pressure",
        body: "p_2 = (120 * 60) / 20 = 7200 / 20 = 360 kPa."
      }
    ],
    finalAnswer: "D (360 kPa)",
    reasonablenessCheck: "Volume decreases to 1/3 of its initial value, so pressure must increase by a factor of 3: 120 * 3 = 360 kPa.",
    commonMistakes: [
      "Dividing initial pressure by 3 instead of multiplying (yielding 40 kPa, Option A).",
      "Subtracting volume differences directly."
    ],
    takeaway: "For a gas at constant temperature, pressure is inversely proportional to volume: p_1 V_1 = p_2 V_2.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { volumeCm3: 20 },
      controls: [
        { id: "volumeCm3", name: "Gas Volume", min: 10, max: 80, step: 5, default: 20, unit: "cm³" }
      ],
      readouts: [
        { label: "Pressure", expr: (p) => (7200 / p.volumeCm3).toFixed(1) + " kPa" },
        { label: "p × V Constant", expr: () => "7200 kPa·cm³" }
      ],
      explanation: "Reducing volume from 60 cm³ to 20 cm³ increases pressure from 120 kPa to 360 kPa."
    }
  },
  {
    globalId: "Q005",
    examId: "Q00209",
    paperRef: "5054/11/M/J/21 Q14",
    pdfPage: 14,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Molecular Arrangement: Solid vs Liquid",
    paperType: "mcq",
    marks: 1,
    questionText: `Which statement correctly describes the arrangement and motion of the particles in a liquid?

A closely packed in a regular arrangement, vibrating about fixed positions
B closely packed in an irregular arrangement, able to slide past one another
C widely separated in a regular arrangement, moving freely at high speed
D widely separated in an irregular arrangement, bouncing off container walls`,
    options: [
      { key: "A", text: "closely packed in a regular arrangement, vibrating about fixed positions" },
      { key: "B", text: "closely packed in an irregular arrangement, able to slide past one another" },
      { key: "C", text: "widely separated in a regular arrangement, moving freely at high speed" },
      { key: "D", text: "widely separated in an irregular arrangement, bouncing off container walls" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the correct particle-level description of a liquid.",
    givenInfo: [
      "State of matter: Liquid."
    ],
    toFind: "Correct description of particle arrangement and motion.",
    physicsConcepts: `State characteristics in the kinetic model:
- Solid: Closely packed, regular lattice arrangement, vibrating about fixed positions.
- Liquid: Closely packed (touching), irregular (random) arrangement, sliding past each other.
- Gas: Widely separated, irregular arrangement, moving rapidly in random directions.`,
    equations: `\\text{Liquid: Close contact, irregular arrangement, translation by sliding}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Spacing in Liquids",
        body: "Liquid particles remain in close contact with little empty space between them (practically incompressible)."
      },
      {
        step: 2,
        title: "Analyze Arrangement and Motion",
        body: "Unlike solids, liquids have no fixed lattice; particles are arranged irregularly and slide past one another to flow."
      },
      {
        step: 3,
        title: "Select Matching Option",
        body: "Option B: Closely packed in an irregular arrangement, able to slide past one another."
      }
    ],
    finalAnswer: "B (closely packed in an irregular arrangement, able to slide past one another)",
    reasonablenessCheck: "Liquids have a fixed volume because particles are closely packed, but flow because particles can slide past each other.",
    commonMistakes: [
      "Selecting Option A (which describes a solid).",
      "Selecting Option D (which describes a gas)."
    ],
    takeaway: "In liquids, particles are closely packed, arranged irregularly, and can slide past each other.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "liquid" },
      controls: [],
      readouts: [
        { label: "Arrangement", expr: () => "Irregular (No fixed lattice)" },
        { label: "Motion", expr: () => "Sliding past one another" }
      ],
      explanation: "Liquid particles maintain close contact while sliding past each other."
    }
  },
  {
    globalId: "Q006",
    examId: "Q00210",
    paperRef: "5054/12/M/J/21 Q15",
    pdfPage: 14,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Syringe Gas Compression: Kinetic Interpretation",
    paperType: "mcq",
    marks: 1,
    questionText: `A gas is trapped inside a syringe with a sealed nozzle.
The piston is slowly pushed inward so that the temperature of the gas does not change.
Why does the pressure of the gas increase?

A The gas molecules collide with the syringe walls more frequently.
B The gas molecules collide with the syringe walls with greater force.
C The average kinetic energy of the gas molecules increases.
D The volume occupied by each individual gas molecule decreases.`,
    options: [
      { key: "A", text: "The gas molecules collide with the syringe walls more frequently." },
      { key: "B", text: "The gas molecules collide with the syringe walls with greater force." },
      { key: "C", text: "The average kinetic energy of the gas molecules increases." },
      { key: "D", text: "The volume occupied by each individual gas molecule decreases." }
    ],
    correctOption: "A",
    whatIsAsking: "Explain why gas pressure increases when compressed isothermally in a syringe.",
    givenInfo: [
      "Sealed syringe with trapped gas.",
      "Piston pushed inward slowly -> volume decreases.",
      "Temperature remains constant."
    ],
    toFind: "Kinetic explanation for the pressure increase.",
    physicsConcepts: `Constant-temperature (isothermal) gas compression:
1. Since temperature is constant, the average kinetic energy and average speed of the molecules remain unchanged. Therefore, each individual collision exerts the same average force.
2. However, the volume is reduced, so the number of molecules per unit volume increases.
3. The molecules travel shorter distances between collisions, striking the walls more frequently (more collisions per second per unit area), which increases the pressure.`,
    equations: `T = \\text{constant} \\implies \\overline{v} = \\text{constant}; \\quad V \\downarrow \\implies \\frac{\\text{Collisions}}{\\text{second}} \\uparrow \\implies p \\uparrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Particle Speed at Constant Temperature",
        body: "Because temperature is constant, particle speed and individual impact force remain unchanged. This rules out Option B and Option C."
      },
      {
        step: 2,
        title: "Analyze Collision Frequency",
        body: "Reducing volume crowds the same number of molecules into a smaller space. Molecules travel shorter distances to reach the walls, increasing the collision frequency per unit area."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Option A: The gas molecules collide with the syringe walls more frequently."
      }
    ],
    finalAnswer: "A (The gas molecules collide with the syringe walls more frequently.)",
    reasonablenessCheck: "If speed does not change, force per collision is constant; pressure increases solely because collisions occur more often per unit area.",
    commonMistakes: [
      "Selecting Option B: force per collision only increases if temperature increases.",
      "Selecting Option D: molecules themselves do not change size."
    ],
    takeaway: "During isothermal compression, pressure increases solely because molecules collide with the walls more frequently.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { volumeCm3: 40 },
      controls: [
        { id: "volumeCm3", name: "Syringe Volume", min: 20, max: 100, step: 10, default: 40, unit: "cm³" }
      ],
      readouts: [
        { label: "Molecular Speed", expr: () => "Constant (Constant T)" },
        { label: "Collision Rate", expr: (p) => (100 / p.volumeCm3).toFixed(1) + "x Baseline" }
      ],
      explanation: "Reducing volume increases the frequency of collisions with the syringe walls."
    }
  },
  {
    globalId: "Q007",
    examId: "Q00211",
    paperRef: "5054/11/O/N/21 Q15",
    pdfPage: 15,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Brownian Motion: Cause of Random Movement",
    paperType: "mcq",
    marks: 1,
    questionText: `The diagram shows a microscopic view of smoke particles in air.
The smoke particles move in an erratic, random zig-zag path.
What causes this motion of the smoke particles?

A collisions with smaller, invisible air molecules moving at high speed
B convection currents in the air caused by illumination from the lamp
C attraction and repulsion between electrostatic charges on the smoke particles
D continuous expansion and contraction of air molecules`,
    options: [
      { key: "A", text: "collisions with smaller, invisible air molecules moving at high speed" },
      { key: "B", text: "convection currents in the air caused by illumination from the lamp" },
      { key: "C", text: "attraction and repulsion between electrostatic charges on the smoke particles" },
      { key: "D", text: "continuous expansion and contraction of air molecules" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the cause of the random zig-zag motion observed in Brownian motion.",
    givenInfo: [
      "Microscopic observation of smoke particles suspended in air.",
      "Erratic, random zig-zag motion."
    ],
    toFind: "The underlying physical cause of this motion.",
    physicsConcepts: `Brownian motion provides experimental evidence for the kinetic particle model:
- Smoke particles are bombarded on all sides by invisible, fast-moving air molecules.
- Because molecular collisions are random, the number of impacts on opposite sides of a smoke particle is momentarily unbalanced at any given instant.
- This net unbalanced force produces the erratic, random zig-zag path.`,
    equations: `\\sum \\vec{F}_{\\text{collisions}}(t) \\neq 0 \\implies \\text{Random net acceleration}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Cause of Motion",
        body: "Air molecules move continuously at high speed (~500 m/s). When they strike a smoke particle unevenly from different directions, they produce a changing net force."
      },
      {
        step: 2,
        title: "Rule Out Convection and Charges",
        body: "Convection causes bulk drift in one direction, not random zig-zag motion. Electrostatic forces do not account for this continuous erratic movement."
      }
    ],
    finalAnswer: "A (collisions with smaller, invisible air molecules moving at high speed)",
    reasonablenessCheck: "Robert Brown and Albert Einstein confirmed that Brownian motion is caused by momentum transfer from molecular bombardment.",
    commonMistakes: [
      "Attributing the motion to convection currents from the microscope lamp.",
      "Stating that smoke particles collide only with other smoke particles."
    ],
    takeaway: "Brownian motion is caused by uneven bombardment of visible microscopic particles by invisible, fast-moving gas molecules.",
    simulation: {
      type: "brownian_motion",
      defaultParams: { tempK: 300 },
      controls: [],
      readouts: [
        { label: "Bombardment Rate", expr: () => "Millions of impacts per second" },
        { label: "Net Force Vector", expr: () => "Random fluctuating direction" }
      ],
      explanation: "Uneven impacts from invisible air molecules produce the smoke particle's random path."
    }
  },
  {
    globalId: "Q008",
    examId: "Q00212",
    paperRef: "5054/12/O/N/21 Q14",
    pdfPage: 15,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Solid Lattice: Heating Behavior",
    paperType: "mcq",
    marks: 1,
    questionText: `A solid metal cube is heated from 20 °C to 80 °C without melting.
Which row describes what happens to the distance between the atoms and the motion of the atoms?

| | distance between atoms | motion of the atoms |
|---|---|---|
| A | increases slightly | vibrate with greater amplitude |
| B | increases slightly | begin to slide past each other |
| C | remains identical | vibrate with greater amplitude |
| D | remains identical | begin to translate randomly |`,
    options: [
      { key: "A", text: "distance: increases slightly | motion: vibrate with greater amplitude" },
      { key: "B", text: "distance: increases slightly | motion: begin to slide past each other" },
      { key: "C", text: "distance: remains identical | motion: vibrate with greater amplitude" },
      { key: "D", text: "distance: remains identical | motion: begin to translate randomly" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify how atomic spacing and motion change when a solid is heated below its melting point.",
    givenInfo: [
      "Solid metal cube heated from 20 °C to 80 °C.",
      "No melting occurs (remains solid)."
    ],
    toFind: "Change in interatomic spacing and atomic motion.",
    physicsConcepts: `Thermal behavior of solids below melting point:
1. As thermal energy is supplied, atoms gain vibrational kinetic energy and vibrate faster with larger amplitude about fixed lattice sites.
2. Because atomic potentials are asymmetric (anharmonic), larger vibrational amplitudes push the equilibrium separation of the atoms slightly further apart. This causes macroscopic thermal expansion.
3. Atoms do not slide or translate because strong bonds keep them bound to their lattice sites until melting occurs.`,
    equations: `T \\uparrow \\implies A_{\\text{vibration}} \\uparrow \\implies r_0 \\uparrow \\text{ slightly (thermal expansion)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Motion",
        body: "The material remains a solid, so atoms vibrate about fixed positions. Heating increases their average kinetic energy, causing them to vibrate with greater amplitude."
      },
      {
        step: 2,
        title: "Analyze Spacing",
        body: "Vibrating with larger amplitude pushes atoms slightly further apart, which accounts for thermal expansion."
      },
      {
        step: 3,
        title: "Match Option",
        body: "Row A correctly matches: distance increases slightly | vibrate with greater amplitude."
      }
    ],
    finalAnswer: "A (distance: increases slightly | motion: vibrate with greater amplitude)",
    reasonablenessCheck: "Solids expand slightly when heated because atoms vibrate with greater amplitude and push slightly further apart.",
    commonMistakes: [
      "Selecting Option B: atoms do not slide past each other until melting occurs.",
      "Selecting Option C: spacing must increase slightly to account for macroscopic thermal expansion."
    ],
    takeaway: "Heating a solid causes atoms to vibrate with greater amplitude and push slightly further apart, producing thermal expansion.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "solid", tempC: 80 },
      controls: [],
      readouts: [
        { label: "Vibration Amplitude", expr: () => "Increased" },
        { label: "Average Spacing", expr: () => "Increased slightly (Expansion)" }
      ],
      explanation: "Heating increases vibrational amplitude, pushing atoms slightly further apart."
    }
  },
  {
    globalId: "Q009",
    examId: "Q00213",
    paperRef: "5054/11/M/J/22 Q12",
    pdfPage: 16,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Forces and Compressibility: Solids vs Liquids vs Gases",
    paperType: "mcq",
    marks: 1,
    questionText: `Why can a gas be easily compressed, but a liquid is almost incompressible?

A Gas molecules attract each other with very strong forces.
B Gas molecules are much further apart with large empty spaces between them.
C Liquid molecules expand to fill their container completely.
D Liquid molecules have negligible mass compared to gas molecules.`,
    options: [
      { key: "A", text: "Gas molecules attract each other with very strong forces." },
      { key: "B", text: "Gas molecules are much further apart with large empty spaces between them." },
      { key: "C", text: "Liquid molecules expand to fill their container completely." },
      { key: "D", text: "Liquid molecules have negligible mass compared to gas molecules." }
    ],
    correctOption: "B",
    whatIsAsking: "Explain why gases are easily compressed while liquids are practically incompressible using kinetic theory.",
    givenInfo: [
      "Comparison of compressibility between gases and liquids."
    ],
    toFind: "The particle-level reason for compressibility differences.",
    physicsConcepts: `Compressibility in the kinetic model:
- Gases: Molecules occupy less than 0.1% of the total container volume; the rest is empty space. Applying pressure pushes molecules closer together through this empty space without encountering strong repulsive forces.
- Liquids: Molecules are already in close contact. Compressing them pushes electron clouds against each other, generating strong repulsive forces that resist further compression.`,
    equations: `V_{\\text{empty, gas}} \\gg V_{\\text{molecules}}; \\quad V_{\\text{empty, liquid}} \\approx 0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Particle Separation",
        body: "Gas molecules are widely spaced with large volumes of empty space between them. Applying pressure simply reduces this empty space."
      },
      {
        step: 2,
        title: "Analyze Liquid Molecular Contact",
        body: "Liquid molecules are already in direct contact. Compressing them encounters strong repulsive intermolecular forces."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option B correctly states that gas molecules are much further apart with large empty spaces between them."
      }
    ],
    finalAnswer: "B (Gas molecules are much further apart with large empty spaces between them.)",
    reasonablenessCheck: "Pumping air into a bicycle tire easily reduces its volume, but water inside a syringe cannot be visibly compressed.",
    commonMistakes: [
      "Thinking liquid molecules expand to fill their container (liquids have a fixed volume).",
      "Confusing compressibility with fluid flow."
    ],
    takeaway: "Gases can be easily compressed because molecules are widely separated with large empty spaces between them.",
    simulation: {
      type: "compressibility_lattice",
      defaultParams: { state: "gas" },
      controls: [],
      readouts: [
        { label: "Gas Compressibility", expr: () => "High (Large empty space)" },
        { label: "Liquid Compressibility", expr: () => "Negligible (Particles touching)" }
      ],
      explanation: "Gases compress readily because molecules are separated by large empty spaces."
    }
  },
  {
    globalId: "Q010",
    examId: "Q00214",
    paperRef: "5054/12/M/J/22 Q14",
    pdfPage: 16,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Gas Pressure Drop during Cooling at Constant Volume",
    paperType: "mcq",
    marks: 1,
    questionText: `A sealed metal tank contains air at high pressure.
During the night, the temperature of the air in the tank decreases.
Which statement describes the change in the motion of the air molecules and the change in pressure?

| | motion of air molecules | pressure inside tank |
|---|---|---|
| A | move slower on average | decreases |
| B | move slower on average | increases |
| C | move at same speed | decreases |
| D | move at same speed | remains unchanged |`,
    options: [
      { key: "A", text: "motion: move slower on average | pressure: decreases" },
      { key: "B", text: "motion: move slower on average | pressure: increases" },
      { key: "C", text: "motion: move at same speed | pressure: decreases" },
      { key: "D", text: "motion: move at same speed | pressure: remains unchanged" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify how molecular speed and gas pressure change when a sealed rigid tank cools down.",
    givenInfo: [
      "Sealed metal tank -> constant mass and constant volume.",
      "Temperature decreases overnight."
    ],
    toFind: "Change in molecular speed and change in internal pressure.",
    physicsConcepts: `Temperature-pressure relationship at constant volume:
1. Temperature is proportional to the average kinetic energy of gas molecules:
$$\\overline{E_k} = \\frac{1}{2} m \\overline{v^2} \\propto T$$
When temperature decreases, molecules move slower on average.
2. Because they move slower, molecules collide with the container walls less frequently and with less momentum per collision, resulting in a lower pressure.`,
    equations: `T \\downarrow \\implies \\overline{v} \\downarrow \\implies p = \\frac{F}{A} \\downarrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Molecular Speed",
        body: "Lower temperature means lower average kinetic energy, so molecules move slower on average."
      },
      {
        step: 2,
        title: "Analyze Gas Pressure",
        body: "Slower molecules collide with the walls less frequently and with smaller impact force, decreasing the pressure inside the tank."
      },
      {
        step: 3,
        title: "Match Option",
        body: "Row A correctly matches: move slower on average | decreases."
      }
    ],
    finalAnswer: "A (motion: move slower on average | pressure: decreases)",
    reasonablenessCheck: "Car tire pressure drops slightly on cold mornings because cooling slows molecular impacts.",
    commonMistakes: [
      "Selecting Option D, assuming volume remaining constant keeps pressure unchanged.",
      "Thinking molecules maintain constant speed regardless of temperature."
    ],
    takeaway: "Cooling a gas at constant volume reduces average molecular speed and lowers pressure.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { tempC: 10 },
      controls: [
        { id: "tempC", name: "Temperature", min: -20, max: 40, step: 10, default: 10, unit: "°C" }
      ],
      readouts: [
        { label: "Molecular Speed", expr: (p) => Math.round(400 * Math.sqrt((p.tempC + 273) / 293)) + " m/s" },
        { label: "Internal Pressure", expr: (p) => ((p.tempC + 273) / 293 * 101.3).toFixed(1) + " kPa" }
      ],
      explanation: "Lowering temperature decreases molecular speed, reducing wall collision frequency and pressure."
    }
  },
  {
    globalId: "Q011",
    examId: "Q00215",
    paperRef: "5054/11/O/N/22 Q15",
    pdfPage: 17,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Brownian Motion: Temperature Effect on Particle Speed",
    paperType: "mcq",
    marks: 1,
    questionText: `In a Brownian motion experiment with smoke particles in air, the temperature of the air is increased.
What change is observed in the motion of the smoke particles?

A They move faster and change direction more frequently.
B They stop moving and settle to the bottom of the cell.
C They begin to move in straight lines without colliding.
D They expand and become invisible.`,
    options: [
      { key: "A", text: "They move faster and change direction more frequently." },
      { key: "B", text: "They stop moving and settle to the bottom of the cell." },
      { key: "C", text: "They begin to move in straight lines without colliding." },
      { key: "D", text: "They expand and become invisible." }
    ],
    correctOption: "A",
    whatIsAsking: "Identify how increasing air temperature alters the observable motion of smoke particles in Brownian motion.",
    givenInfo: [
      "Brownian motion experiment with smoke cell.",
      "Temperature of the air inside the cell is increased."
    ],
    toFind: "The observable change in smoke particle motion.",
    physicsConcepts: `Temperature dependence of Brownian motion:
Increasing temperature increases the average kinetic energy and speed of air molecules.
Faster-moving air molecules strike the smoke particles:
1. With greater momentum per collision, causing larger accelerations.
2. More frequently per second, causing the smoke particles to change direction more rapidly.
Therefore, the smoke particles move faster and execute more frequent, sharper zig-zag changes in direction.`,
    equations: `T \\uparrow \\implies \\overline{v}_{\\text{air}} \\propto \\sqrt{T} \\uparrow \\implies \\text{Faster Brownian agitation}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Temperature to Air Molecule Motion",
        body: "Higher temperature causes surrounding air molecules to move at higher speeds."
      },
      {
        step: 2,
        title: "Analyze Bombardment on Smoke Particles",
        body: "More energetic impacts from air molecules transfer more kinetic energy to the smoke particles, causing them to move faster and change direction more frequently."
      }
    ],
    finalAnswer: "A (They move faster and change direction more frequently.)",
    reasonablenessCheck: "Thermal agitation increases with temperature; warmer fluids produce more vigorous Brownian motion.",
    commonMistakes: [
      "Selecting Option B, assuming heat causes particles to settle.",
      "Selecting Option C: motion remains random and erratic at all temperatures."
    ],
    takeaway: "Increasing temperature increases air molecule speeds, making Brownian motion faster and more erratic.",
    simulation: {
      type: "brownian_motion",
      defaultParams: { tempK: 350 },
      controls: [
        { id: "tempK", name: "Temperature", min: 250, max: 400, step: 25, default: 350, unit: "K" }
      ],
      readouts: [
        { label: "Agitation Level", expr: (p) => p.tempK > 300 ? "Vigorous / Fast" : "Slow" }
      ],
      explanation: "Higher temperatures produce more energetic molecular impacts, accelerating Brownian motion."
    }
  },
  {
    globalId: "Q012",
    examId: "Q00216",
    paperRef: "5054/12/O/N/22 Q16",
    pdfPage: 17,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Boyle's Law: Pressure Halving Calculation",
    paperType: "mcq",
    marks: 1,
    questionText: `A cylinder with a moveable piston contains 50 cm³ of gas at a pressure of 200 kPa.
The piston is pulled outwards slowly at constant temperature until the pressure of the gas decreases to 100 kPa.
What is the new volume of the gas?

A 25 cm³
B 50 cm³
C 100 cm³
D 200 cm³`,
    options: [
      { key: "A", text: "25 cm³" },
      { key: "B", text: "50 cm³" },
      { key: "C", text: "100 cm³" },
      { key: "D", text: "200 cm³" }
    ],
    correctOption: "C",
    whatIsAsking: "Calculate final gas volume when pressure is halved at constant temperature using Boyle's Law.",
    givenInfo: [
      "Initial volume V_1 = 50 cm³",
      "Initial pressure p_1 = 200 kPa",
      "Final pressure p_2 = 100 kPa",
      "Temperature is constant"
    ],
    toFind: "Final volume V_2 in cm³.",
    physicsConcepts: `Boyle's Law for isothermal expansion:
$$p_1 V_1 = p_2 V_2$$
Rearranging for final volume:
$$V_2 = \\frac{p_1 V_1}{p_2}$$`,
    equations: `V_2 = \\frac{p_1 V_1}{p_2} = \\frac{200 \\times 50}{100} = 100 \\text{ cm}^3`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Formula",
        body: "Apply Boyle's Law: p_1 * V_1 = p_2 * V_2."
      },
      {
        step: 2,
        title: "Substitute Known Values",
        body: "200 kPa * 50 cm³ = 100 kPa * V_2."
      },
      {
        step: 3,
        title: "Solve for Final Volume",
        body: "V_2 = (200 * 50) / 100 = 10 000 / 100 = 100 cm³."
      }
    ],
    finalAnswer: "C (100 cm³)",
    reasonablenessCheck: "Pressure is halved (from 200 to 100 kPa), so volume must double: 50 * 2 = 100 cm³.",
    commonMistakes: [
      "Halving the volume instead of doubling it (yielding 25 cm³, Option A).",
      "Multiplying volume by 4."
    ],
    takeaway: "Halving gas pressure at constant temperature doubles its volume: p_1 V_1 = p_2 V_2.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: { volumeCm3: 100 },
      controls: [],
      readouts: [
        { label: "Target Pressure", expr: () => "100 kPa (Halved)" },
        { label: "Calculated Volume", expr: () => "100 cm³ (Doubled)" }
      ],
      explanation: "Halving pressure from 200 kPa to 100 kPa doubles gas volume from 50 cm³ to 100 cm³."
    }
  },
  {
    globalId: "Q013",
    examId: "Q00217",
    paperRef: "5054/11/M/J/23 Q13",
    pdfPage: 18,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Molecular Forces Ranking Across Three States",
    paperType: "mcq",
    marks: 1,
    questionText: `Which list correctly orders the three states of matter by the strength of the attractive forces between their particles, from strongest to weakest?

A solid -> liquid -> gas
B solid -> gas -> liquid
C gas -> liquid -> solid
D liquid -> solid -> gas`,
    options: [
      { key: "A", text: "solid -> liquid -> gas" },
      { key: "B", text: "solid -> gas -> liquid" },
      { key: "C", text: "gas -> liquid -> solid" },
      { key: "D", text: "liquid -> solid -> gas" }
    ],
    correctOption: "A",
    whatIsAsking: "Order solids, liquids, and gases from strongest to weakest intermolecular attractive forces.",
    givenInfo: [
      "States of matter: solid, liquid, gas."
    ],
    toFind: "Descending order of intermolecular attractive forces: strongest -> weakest.",
    physicsConcepts: `Intermolecular force strengths:
1. Solids: Strongest attractive forces lock particles into fixed, rigid lattice sites.
2. Liquids: Intermediate attractive forces keep particles in contact to maintain a fixed volume while allowing sliding.
3. Gases: Weakest / negligible attractive forces allow particles to move independently and fill their container.`,
    equations: `F_{\\text{solid}} > F_{\\text{liquid}} \\gg F_{\\text{gas}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Strongest Attractive Force",
        body: "Solids have the strongest forces, holding particles in a fixed crystalline lattice."
      },
      {
        step: 2,
        title: "Identify Weakest Attractive Force",
        body: "Gases have the weakest attractive forces, allowing molecules to move freely."
      },
      {
        step: 3,
        title: "Select Correct Sequence",
        body: "Option A: solid -> liquid -> gas."
      }
    ],
    finalAnswer: "A (solid -> liquid -> gas)",
    reasonablenessCheck: "Solids require high energy to melt because their intermolecular forces are strongest; gases expand freely because forces are negligible.",
    commonMistakes: [
      "Inverting the order to gas -> liquid -> solid (Option C, weakest to strongest).",
      "Placing liquid before solid."
    ],
    takeaway: "Intermolecular attractive forces rank: solid (strongest) > liquid > gas (weakest).",
    simulation: {
      type: "kinetic_state",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Strongest Forces", expr: () => "Solid (Fixed lattice)" },
        { label: "Intermediate Forces", expr: () => "Liquid (Contact, sliding)" },
        { label: "Weakest Forces", expr: () => "Gas (Negligible)" }
      ],
      explanation: "Intermolecular forces are strongest in solids and negligible in gases."
    }
  },
  {
    globalId: "Q014",
    examId: "Q00218",
    paperRef: "5054/12/M/J/23 Q14",
    pdfPage: 18,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Origin of Gas Pressure: Momentum Change",
    paperType: "mcq",
    marks: 1,
    questionText: `A gas is contained in a closed box.
How do the gas molecules exert a pressure on the inside walls of the box?

A The molecules attract the walls gravitationally.
B The molecules collide with the walls and change their momentum, exerting a force.
C The molecules expand until they touch the outer surface.
D The molecules emit thermal radiation that pushes on the walls.`,
    options: [
      { key: "A", text: "The molecules attract the walls gravitationally." },
      { key: "B", text: "The molecules collide with the walls and change their momentum, exerting a force." },
      { key: "C", text: "The molecules expand until they touch the outer surface." },
      { key: "D", text: "The molecules emit thermal radiation that pushes on the walls." }
    ],
    correctOption: "B",
    whatIsAsking: "Explain the microscopic origin of gas pressure using Newton's laws and momentum change.",
    givenInfo: [
      "Gas molecules trapped in a closed container.",
      "Pressure exerted on container walls."
    ],
    toFind: "The microscopic physical mechanism that produces pressure.",
    physicsConcepts: `Kinetic origin of gas pressure:
1. Gas molecules move continuously at high speed in random directions.
2. When a molecule strikes a container wall, it rebounds elastically, reversing its velocity component perpendicular to the wall.
3. This velocity reversal produces a change in momentum:
$$\\Delta p = m v - (-m v) = 2 m v$$
4. By Newton's Second Law, the rate of change of momentum exerts a force on the wall:
$$F = \\frac{\\Delta p}{\\Delta t}$$
5. Summing over all collisions per second per unit area gives pressure:
$$p = \\frac{F_{\\text{total}}}{A}$$`,
    equations: `\\vec{F} = \\frac{d\\vec{p}}{dt}; \\quad p = \\frac{F}{A}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Wall Impact Mechanism",
        body: "Gas molecules collide elastically with the container walls and bounce back, reversing their momentum."
      },
      {
        step: 2,
        title: "Relate Momentum Change to Force and Pressure",
        body: "This rate of change of momentum exerts an outward force on the wall. Force divided by area produces pressure."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option B correctly describes collisions and momentum change producing force."
      }
    ],
    finalAnswer: "B (The molecules collide with the walls and change their momentum, exerting a force.)",
    reasonablenessCheck: "Gas pressure is directly derived from Newton's laws: billions of molecular momentum changes per second produce a steady average force per unit area.",
    commonMistakes: [
      "Thinking molecules exert pressure by gravitational attraction.",
      "Saying molecules expand in size to touch the walls."
    ],
    takeaway: "Gas pressure is produced by molecules colliding with walls and changing momentum, which exerts a net force per unit area.",
    simulation: {
      type: "gas_laws_chamber",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Collision Mechanism", expr: () => "Rebound exerts Δp / Δt force" },
        { label: "Pressure Definition", expr: () => "Force per unit area (p = F / A)" }
      ],
      explanation: "Molecular collisions with container walls produce momentum changes that exert outward force."
    }
  },
  {
    globalId: "Q015",
    examId: "Q00219",
    paperRef: "5054/11/O/N/23 Q15",
    pdfPage: 19,
    topic: "2.1 Kinetic particle model of matter",
    subtopic: "Molecular Spacing and Forces in Liquids",
    paperType: "mcq",
    marks: 1,
    questionText: `Which row correctly describes the molecules in a liquid?

| | distance between molecules | force between molecules |
|---|---|---|
| A | close together | strong enough to hold them in fixed positions |
| B | close together | strong enough to keep them touching, but they can move past each other |
| C | far apart | strong enough to hold them in fixed positions |
| D | far apart | negligible |`,
    options: [
      { key: "A", text: "close together | strong enough to hold them in fixed positions" },
      { key: "B", text: "close together | strong enough to keep them touching, but they can move past each other" },
      { key: "C", text: "far apart | strong enough to hold them in fixed positions" },
      { key: "D", text: "far apart | negligible" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the correct description of intermolecular distance and forces in a liquid.",
    givenInfo: [
      "State of matter: Liquid."
    ],
    toFind: "Correct row for molecular spacing and forces.",
    physicsConcepts: `In liquids:
1. Molecules are in close contact (touching), which explains why liquids have a definite volume and resist compression.
2. Intermolecular attractive forces are strong enough to keep molecules together, but not strong enough to lock them into fixed lattice positions (as in solids). Molecules can slide past each other, allowing liquids to flow and take the shape of their container.`,
    equations: `\\text{Liquid: Close contact, forces permit sliding flow}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Spacing in Liquids",
        body: "Molecules are close together and touching (ruling out Options C and D)."
      },
      {
        step: 2,
        title: "Analyze Forces and Motion",
        body: "Forces in liquids hold molecules together but allow them to slide past one another. Solids hold them in fixed positions (ruling out Option A)."
      },
      {
        step: 3,
        title: "Match Option",
        body: "Row B correctly describes: close together | strong enough to keep them touching, but they can move past each other."
      }
    ],
    finalAnswer: "B (close together | strong enough to keep them touching, but they can move past each other)",
    reasonablenessCheck: "Liquids have fixed volume (particles touch) but variable shape (particles can slide past each other).",
    commonMistakes: [
      "Selecting Option A (which describes a solid).",
      "Selecting Option D (which describes a gas)."
    ],
    takeaway: "Liquid molecules are close together, held by forces that maintain contact while allowing them to slide past each other.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "liquid" },
      controls: [],
      readouts: [
        { label: "Molecular Spacing", expr: () => "Close together (Touching)" },
        { label: "Intermolecular Forces", expr: () => "Hold volume, allow sliding flow" }
      ],
      explanation: "Liquid molecules maintain close contact while sliding past each other."
    }
  }
];