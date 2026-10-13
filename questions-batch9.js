/**
 * Master Question Store: Batch 9 (Q116 to Q130)
 * Section 2.2: Thermal Properties and Temperature (Theory Paper 2)
 */

const QUESTIONS_BATCH_9 = [
  {
    globalId: "Q116",
    examId: "Q01707",
    paperRef: "5054/22/M/J/22 Q2(b)",
    pdfPage: 56,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Mechanical Work to Thermal Energy Inversion Tube",
    paperType: "theory",
    marks: 6,
    questionText: `Fig. 2.1 shows a long cardboard tube, sealed at both ends, which contains many small pieces of metal.
The tube is turned vertically so that the pieces of metal fall from one end to the other.
The temperature of the pieces increases as a result of the fall.
The pieces fall an average distance of 1.2 m during one turn. The total mass of the metal pieces is 150 g.
The gravitational field strength g is 10 N/kg.

(i) Calculate the loss in the gravitational potential energy of the pieces as they fall once. [2]
(ii) A student turns the tube quickly. After the small metal pieces have fallen from one end to the other 80 times, their temperature has increased by 7.0 °C.
Determine the specific heat capacity of the metal. [3]
(iii) The student repeats the experiment, turning the tube more slowly.
Suggest why a different temperature increase is obtained. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate gravitational potential energy lost in a single inversion of a tube, determine the specific heat capacity of the metal pieces after 80 inversions, and explain why turning the tube slowly gives a smaller temperature increase.",
    givenInfo: [
      "Total mass of metal pieces m = 150 g = 0.15 kg",
      "Fall distance per turn h = 1.2 m",
      "Gravitational field strength g = 10 N/kg",
      "Number of turns N = 80",
      "Temperature rise ΔT = 7.0 °C"
    ],
    toFind: "(i) GPE loss in one fall; (ii) Specific heat capacity c; (iii) Reason for different temperature increase when turned slowly.",
    physicsConcepts: `1. Gravitational potential energy loss in one fall: ΔE_p = m * g * h.
2. Inelastic collision: When pieces hit the bottom, kinetic energy transfers to internal energy. Total energy transferred in N turns: E_total = N * (m * g * h).
3. Specific heat capacity: E_total = m * c * ΔT, so c = (N * g * h) / ΔT (independent of mass if all energy is retained).
4. Heat loss: Turning the tube slowly takes more time, allowing more thermal energy to conduct into the tube walls and surroundings, yielding a smaller net temperature rise.`,
    equations: `\\Delta E_p = m g h; \\quad E_{\\text{total}} = N m g h = m c \\Delta T \\implies c = \\frac{N g h}{\\Delta T}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Single Fall GPE Loss",
        body: "Convert mass to kg: m = 150 g / 1000 = 0.15 kg.\nΔE_p = m * g * h = 0.15 kg * 10 N/kg * 1.2 m = 1.8 J."
      },
      {
        step: 2,
        title: "Part (ii) Specific Heat Capacity",
        body: "Total energy transferred in 80 turns = 80 * 1.8 J = 144 J.\nApply E = m * c * ΔT:\n144 J = 0.15 kg * c * 7.0 °C.\nc = 144 / (0.15 * 7.0) = 144 / 1.05 = 137.14 J/(kg °C) ≈ 140 J/(kg °C) (or 137 J/(kg °C))."
      },
      {
        step: 3,
        title: "Part (iii) Slower Turning Effect",
        body: "Turning the tube more slowly takes longer, allowing more thermal energy to be transferred / lost to the surroundings and the cardboard tube, resulting in a smaller temperature rise."
      }
    ],
    finalAnswer: "(i) 1.8 J;\n(ii) 140 J/(kg °C) (or 137 J/(kg °C));\n(iii) More thermal energy is lost to the surroundings / tube because the experiment takes longer.",
    reasonablenessCheck: "Specific heat capacity of lead is ~130 J/(kg °C), matching the calculated value of ~137 J/(kg °C).",
    commonMistakes: [
      "Leaving mass in grams: 150 * 10 * 1.2 = 1800 J.",
      "Forgetting to multiply single fall energy by 80 turns."
    ],
    takeaway: "Mechanical work done by gravity converts to internal energy on impact: N * mgh = mcΔT.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { turns: 80, heightM: 1.2, massKg: 0.15 },
      controls: [
        { id: "turns", name: "Number of Inversions", min: 20, max: 150, step: 10, default: 80, unit: "turns" },
        { id: "heightM", name: "Tube Height", min: 0.8, max: 2.0, step: 0.2, default: 1.2, unit: "m" }
      ],
      readouts: [
        { label: "GPE per Fall", expr: (p) => (p.massKg * 10 * p.heightM).toFixed(2) + " J" },
        { label: "Total Energy Input", expr: (p) => (p.turns * p.massKg * 10 * p.heightM).toFixed(0) + " J" },
        { label: "Temperature Rise", expr: (p) => ((p.turns * 10 * p.heightM) / 137.14).toFixed(1) + " °C" }
      ],
      explanation: "Each inversion transfers gravitational potential energy into internal thermal energy upon impact."
    }
  },
  {
    globalId: "Q117",
    examId: "Q01707_A",
    paperRef: "5054/22/M/J/22 Q2(b)(i)",
    pdfPage: 56,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Single Turn Gravitational Energy Calculation",
    paperType: "theory",
    marks: 2,
    questionText: `The pieces of metal fall an average distance of 1.2 m during one turn. The total mass of the metal pieces is 150 g.
The gravitational field strength g is 10 N/kg.
Calculate the loss in the gravitational potential energy of the pieces as they fall once.
loss in gravitational potential energy = .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the loss in gravitational potential energy for 150 g of metal pieces falling through 1.2 m.",
    givenInfo: [
      "Mass m = 150 g = 0.15 kg",
      "Distance h = 1.2 m",
      "Gravitational field strength g = 10 N/kg"
    ],
    toFind: "Loss in GPE in Joules.",
    physicsConcepts: `Gravitational potential energy change:
ΔE_p = m * g * h.
Mass must be expressed in kilograms.`,
    equations: `m = 0.15 \\text{ kg}; \\quad \\Delta E_p = m g h = 0.15 \\times 10 \\times 1.2 = 1.8 \\text{ J}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Mass to Kilograms",
        body: "m = 150 g / 1000 = 0.15 kg."
      },
      {
        step: 2,
        title: "Compute Potential Energy Loss",
        body: "ΔE_p = 0.15 kg * 10 N/kg * 1.2 m = 1.8 J."
      }
    ],
    finalAnswer: "1.8 J",
    reasonablenessCheck: "0.15 kg falling 1.2 m under 10 N/kg yields 1.8 J, consistent with manual handling.",
    commonMistakes: [
      "Using mass as 150 without converting to kg (yielding 1800 J).",
      "Omitting the unit Joules."
    ],
    takeaway: "ΔE_p = mgh. Always convert grams to kilograms first.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 0.15, heightM: 1.2 },
      controls: [],
      readouts: [
        { label: "Mass m", expr: () => "0.15 kg" },
        { label: "Single Drop GPE", expr: () => "1.8 J" }
      ],
      explanation: "A single fall of 150 g through 1.2 m converts 1.8 J of potential energy into kinetic energy."
    }
  },
  {
    globalId: "Q118",
    examId: "Q01709",
    paperRef: "5054/22/M/J/22 Q2(b)(ii)",
    pdfPage: 56,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Specific Heat Capacity from Mechanical Falls",
    paperType: "theory",
    marks: 3,
    questionText: `A student turns the tube quickly. After the small metal pieces have fallen from one end to the other 80 times, their temperature has increased by 7.0 °C.
Determine the specific heat capacity of the metal.
specific heat capacity = .................... [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Determine the specific heat capacity of metal pieces using 80 falls generating 1.8 J each and a temperature rise of 7.0 °C.",
    givenInfo: [
      "Number of falls N = 80",
      "Energy per fall = 1.8 J",
      "Mass of metal m = 150 g = 0.15 kg",
      "Temperature rise ΔT = 7.0 °C"
    ],
    toFind: "Specific heat capacity c in J/(kg °C).",
    physicsConcepts: `Total thermal energy supplied by falling:
E_total = N * 1.8 J = 80 * 1.8 J = 144 J.
By conservation of energy:
E_total = m * c * ΔT -> c = E_total / (m * ΔT).`,
    equations: `E_{\\text{total}} = 80 \\times 1.8 = 144 \\text{ J}; \\quad c = \\frac{144}{0.15 \\times 7.0} = 137.1 \\text{ J/(kg }^\\circ\\text{C)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Total Mechanical Energy Transferred",
        body: "E_total = 80 * 1.8 J = 144 J."
      },
      {
        step: 2,
        title: "Rearrange Specific Heat Formula",
        body: "c = E_total / (m * ΔT)."
      },
      {
        step: 3,
        title: "Substitute Values and Calculate",
        body: "c = 144 J / (0.15 kg * 7.0 °C) = 144 / 1.05 = 137.14 J/(kg °C) ≈ 140 J/(kg °C) (or 137 J/(kg °C))."
      }
    ],
    finalAnswer: "140 J/(kg °C) (or 137 J/(kg °C))",
    reasonablenessCheck: "Lead shot has c ≈ 130 J/(kg °C); small heat losses during turning account for the slightly higher empirical value.",
    commonMistakes: [
      "Using mass as 150 g without converting to kg (yielding 0.137 J/(kg °C)).",
      "Dividing by 80 instead of multiplying total energy."
    ],
    takeaway: "c = E_total / (mΔT). Total energy from repeated mechanical drops equals N * mgh.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { totalE: 144, massKg: 0.15, tempRise: 7.0 },
      controls: [],
      readouts: [
        { label: "Total Energy", expr: () => "144 J" },
        { label: "Specific Heat c", expr: () => "137 J/(kg °C)" }
      ],
      explanation: "Dividing total energy by mass and temperature rise gives the specific heat capacity."
    }
  },
  {
    globalId: "Q119",
    examId: "Q01710",
    paperRef: "5054/22/M/J/22 Q2(b)(iii)",
    pdfPage: 56,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermal Losses During Extended Experimental Duration",
    paperType: "theory",
    marks: 1,
    questionText: `The student repeats the experiment, turning the tube more slowly.
Suggest why a different temperature increase is obtained. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why turning the tube slowly produces a smaller temperature increase.",
    givenInfo: [
      "Tube is turned more slowly for the same 80 inversions."
    ],
    toFind: "Reason for the different temperature increase.",
    physicsConcepts: `Turning more slowly extends the total time of the experiment. Thermal energy transfers from the warm metal pieces to the cardboard tube and surrounding air over a longer period, resulting in greater cumulative heat loss and a lower measured final temperature.`,
    equations: `Q_{\\text{loss}} = P_{\\text{loss}} \\cdot t_{\\text{elapsed}} \\implies \\text{Larger } t \\implies \\text{Greater loss} \\implies \\text{Smaller } \\Delta T`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Speed to Time",
        body: "Turning the tube slowly means the 80 turns take significantly longer to complete."
      },
      {
        step: 2,
        title: "Relate Time to Energy Loss",
        body: "Over this longer duration, more thermal energy is transferred / lost to the surroundings and the cardboard tube, resulting in a lower final temperature rise."
      }
    ],
    finalAnswer: "More thermal energy is transferred / lost to the surroundings (or to the tube) because the experiment takes longer.",
    reasonablenessCheck: "Heat loss to ambient air increases with exposure time; faster runs minimize heat leakage.",
    commonMistakes: [
      "Saying gravity does less work when turned slowly (mgh is independent of speed).",
      "Claiming air resistance inside the tube changes significantly."
    ],
    takeaway: "Longer experimental duration allows greater heat loss to surroundings, reducing measured temperature rise.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { elapsedMinutes: 5.0 },
      controls: [
        { id: "elapsedMinutes", name: "Inversion Duration", min: 1.0, max: 8.0, step: 1.0, default: 5.0, unit: "min" }
      ],
      readouts: [
        { label: "Heat Lost to Surroundings", expr: (p) => (p.elapsedMinutes * 12).toFixed(0) + " J" },
        { label: "Net Temp Rise", expr: (p) => (7.0 - p.elapsedMinutes * 0.45).toFixed(1) + " °C" }
      ],
      explanation: "A slower run increases exposure time, allowing more heat to leak into the tube walls and air."
    }
  },
  {
    globalId: "Q120",
    examId: "Q00986",
    paperRef: "5054/22/O/N/22 Q7(c)(i)",
    pdfPage: 57,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Water Heating in a Copper Pan",
    paperType: "theory",
    marks: 3,
    questionText: `A copper pan contains 750 g of water at room temperature.
The water in the pan is heated from 17 °C until it starts to boil at 100 °C.
The specific heat capacity of water is 4200 J/(kg °C).

Calculate the energy needed to increase the temperature of the water from 17 °C to 100 °C.
energy = .................... [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the thermal energy required to heat 750 g of water from 17 °C to its boiling point of 100 °C.",
    givenInfo: [
      "Mass of water m = 750 g = 0.75 kg",
      "Initial temperature T_1 = 17 °C",
      "Final temperature T_2 = 100 °C",
      "Specific heat capacity of water c = 4200 J/(kg °C)"
    ],
    toFind: "Energy E in Joules.",
    physicsConcepts: `Sensible thermal energy required to warm a substance:
E = m * c * ΔT,
where mass must be converted to kilograms: m = 750 / 1000 = 0.75 kg, and ΔT = 100 °C - 17 °C.`,
    equations: `\\Delta T = 100 - 17 = 83^\\circ\\text{C}; \\quad E = m c \\Delta T = 0.75 \\times 4200 \\times 83`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Mass to Kilograms",
        body: "m = 750 g / 1000 = 0.75 kg."
      },
      {
        step: 2,
        title: "Calculate Temperature Rise",
        body: "ΔT = 100 °C - 17 °C = 83 °C."
      },
      {
        step: 3,
        title: "Calculate Energy Required",
        body: "E = m * c * ΔT = 0.75 kg * 4200 J/(kg °C) * 83 °C = 261 450 J."
      },
      {
        step: 4,
        title: "Express with Significant Figures",
        body: "E ≈ 260 000 J (or 2.6 × 10⁵ J / 261 kJ)."
      }
    ],
    finalAnswer: "260 000 J (or 261 450 J / 2.6 × 10⁵ J)",
    reasonablenessCheck: "Heating 0.75 kg of water by 83 °C requires roughly 260 kJ, typical for a standard kitchen burner over ~3 minutes.",
    commonMistakes: [
      "Using mass as 750 g directly (giving 2.6 × 10⁸ J).",
      "Using 100 °C instead of the temperature difference 83 °C."
    ],
    takeaway: "E = mcΔT. Always convert mass to kilograms and calculate the temperature difference before multiplying.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 0.75, tempC: 83 },
      controls: [
        { id: "massKg", name: "Water Mass", min: 0.25, max: 2.0, step: 0.25, default: 0.75, unit: "kg" }
      ],
      readouts: [
        { label: "Temperature Rise", expr: () => "83.0 °C" },
        { label: "Energy Required E", expr: (p) => (p.massKg * 4200 * 83 / 1000).toFixed(1) + " kJ" }
      ],
      explanation: "Heating 750 g of water from 17 °C to 100 °C absorbs 261.5 kJ of thermal energy."
    }
  },
  {
    globalId: "Q121",
    examId: "Q00987",
    paperRef: "5054/22/O/N/22 Q7(c)(iii)",
    pdfPage: 57,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Molecular Explanation of Latent Heat of Vaporisation",
    paperType: "theory",
    marks: 2,
    questionText: `At 100 °C the temperature of the water stops increasing, even though energy is still being transferred to the water.
Explain, in terms of molecules, why thermal energy is needed to change the state of the water from liquid to gas. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain using kinetic particle theory why thermal energy must be continuously supplied to boil water at 100 °C while temperature remains constant.",
    givenInfo: [
      "Water is at boiling point (100 °C).",
      "Thermal energy is continuously transferred.",
      "Temperature stops increasing."
    ],
    toFind: "Molecular explanation for the latent heat of vaporisation requirement.",
    physicsConcepts: `In liquid water, molecules are held in close proximity by attractive intermolecular forces (hydrogen bonds and van der Waals attractions).
To change state from liquid to gas, molecules must be completely separated against these attractive forces and work must be done against atmospheric pressure.
Supplied thermal energy increases intermolecular potential energy rather than kinetic energy, so the temperature remains constant.`,
    equations: `\\Delta Q = \\Delta E_p = \\text{Work done overcoming attractive intermolecular forces} \\quad (\\Delta E_k = 0)`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Intermolecular Forces (Mark 1)",
        body: "There are attractive intermolecular forces holding the molecules together in the liquid."
      },
      {
        step: 2,
        title: "Explain Role of Energy (Mark 2)",
        body: "Thermal energy is needed to do work to overcome / break these attractive forces and separate the molecules completely into a gas."
      }
    ],
    finalAnswer: "Energy is needed to overcome / break the attractive forces between the molecules and separate them (or do work against atmospheric pressure).",
    reasonablenessCheck: "Separating attracted particles requires positive work, which absorbs energy without increasing particle speed.",
    commonMistakes: [
      "Stating energy breaks bonds inside the H2O molecule (chemical bonds).",
      "Saying molecules gain kinetic energy (temperature is constant)."
    ],
    takeaway: "Latent heat of vaporisation does work to overcome attractive intermolecular forces and separate particles into a gas.",
    simulation: {
      type: "bond_energy_phase",
      defaultParams: { energySupplied: 75 },
      controls: [],
      readouts: [
        { label: "Molecular Speed", expr: () => "CONSTANT (373 K)" },
        { label: "Work Done", expr: () => "Overcoming Intermolecular Attractions" }
      ],
      explanation: "Added energy breaks liquid bonds, separating molecules into the gas phase while temperature remains constant at 100 °C."
    }
  },
  {
    globalId: "Q122",
    examId: "Q00988",
    paperRef: "5054/22/O/N/22 Q7(c)(iv)",
    pdfPage: 57,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Mass Boiled Away from Power and Latent Heat",
    paperType: "theory",
    marks: 3,
    questionText: `The specific latent heat of vaporisation of water is 2.3 × 10⁶ J/kg.
Thermal energy is transferred to the boiling water at a rate of 1300 J/s.
Calculate the mass of water that boils away in the 10 minutes immediately after the water reaches 100 °C.
mass = .................... [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate mass of water vaporised when supplied with 1300 J/s for 10 minutes, using specific latent heat of vaporisation 2.3 × 10⁶ J/kg.",
    givenInfo: [
      "Specific latent heat of vaporisation L_v = 2.3 × 10⁶ J/kg",
      "Power / rate of energy transfer P = 1300 J/s (W)",
      "Time t = 10 minutes = 10 * 60 = 600 s"
    ],
    toFind: "Mass of water boiled away m in kg.",
    physicsConcepts: `1. Total thermal energy supplied: E = P * t.
2. Latent heat equation: E = m * L_v -> m = E / L_v.`,
    equations: `t = 10 \\times 60 = 600 \\text{ s}; \\quad E = 1300 \\times 600 = 780\\,000 \\text{ J}; \\quad m = \\frac{E}{L_v} = \\frac{780\\,000}{2.3 \\times 10^6}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Time to Seconds",
        body: "t = 10 minutes * 60 s/min = 600 s."
      },
      {
        step: 2,
        title: "Calculate Total Energy Supplied",
        body: "E = P * t = 1300 J/s * 600 s = 780 000 J."
      },
      {
        step: 3,
        title: "Calculate Mass Boiled Away",
        body: "m = E / L_v = 780 000 J / (2.3 × 10⁶ J/kg) = 0.3391 kg ≈ 0.34 kg (or 340 g)."
      }
    ],
    finalAnswer: "0.34 kg (or 0.339 kg / 340 g)",
    reasonablenessCheck: "780 kJ supplied boils off ~0.34 kg from the initial 0.75 kg in the pan, leaving ~0.41 kg of liquid.",
    commonMistakes: [
      "Using time as 10 minutes instead of 600 seconds (yielding 0.0056 kg).",
      "Multiplying energy by latent heat instead of dividing."
    ],
    takeaway: "m = (P * t) / L_v. Always convert minutes to seconds before calculating energy.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { powerW: 1300, timeMin: 10, latentHeatJkg: 2.3e6 },
      controls: [
        { id: "timeMin", name: "Boiling Time", min: 2, max: 20, step: 2, default: 10, unit: "min" }
      ],
      readouts: [
        { label: "Energy Supplied", expr: (p) => (p.powerW * p.timeMin * 60 / 1000).toFixed(0) + " kJ" },
        { label: "Mass Boiled Off", expr: (p) => ((p.powerW * p.timeMin * 60) / 2.3e6).toFixed(3) + " kg" }
      ],
      explanation: "Supplying 1300 W for 10 minutes delivers 780 kJ, boiling away 0.34 kg of water."
    }
  },
  {
    globalId: "Q123",
    examId: "Q01549",
    paperRef: "5054/21/M/J/23 Q5(a)",
    pdfPage: 58,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Why Liquids Expand More Than Solids",
    paperType: "theory",
    marks: 2,
    questionText: `Fig. 5.1 shows the particles (molecules) in a sample of liquid water.
Explain, using ideas about particles, why liquids expand more than solids for the same temperature rise. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain using kinetic theory why liquids exhibit greater thermal expansion than solids for an equal temperature increase.",
    givenInfo: [
      "Liquid water particle diagram.",
      "Same temperature rise applied to both liquid and solid."
    ],
    toFind: "Particle-level explanation for greater liquid expansion.",
    physicsConcepts: `In solids, particles are locked in a rigid lattice held by strong intermolecular forces, limiting vibrational expansion.
In liquids, intermolecular forces are weaker, allowing particles to slide past each other and move further apart more easily as kinetic energy increases, resulting in greater volumetric expansion.`,
    equations: `F_{\\text{inter, liquid}} < F_{\\text{inter, solid}} \\implies \\Delta r_{\\text{liquid}} > \\Delta r_{\\text{solid}} \\implies \\gamma_{\\text{liquid}} > \\gamma_{\\text{solid}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compare Intermolecular Forces (Mark 1)",
        body: "The attractive forces between particles in liquids are weaker than the forces between particles in solids (or particles in liquids are not locked in fixed positions)."
      },
      {
        step: 2,
        title: "Relate to Particle Separation on Heating (Mark 2)",
        body: "Because forces are weaker, particles in liquids can move further apart more easily when their kinetic energy increases, producing a greater expansion."
      }
    ],
    finalAnswer: "The forces between particles in liquids are weaker than in solids (or particles are free to move); so particles move further apart more easily as temperature rises.",
    reasonablenessCheck: "Liquid expansion is visible in thermometer capillary stems, whereas solid expansion requires sensitive gauges.",
    commonMistakes: [
      "Saying liquid particles move faster than solid particles at the same temperature (at equal T, average KE is equal).",
      "Stating liquid particles expand in size."
    ],
    takeaway: "Weaker intermolecular forces allow liquid particles to move further apart more readily than particles in a rigid solid lattice.",
    simulation: {
      type: "compressibility_lattice",
      defaultParams: { tempC: 50 },
      controls: [],
      readouts: [
        { label: "Solid Force Strength", expr: () => "STRONG (Lattice locked)" },
        { label: "Liquid Force Strength", expr: () => "WEAKER (Expands more)" }
      ],
      explanation: "Weaker intermolecular bonding allows liquid molecules to separate more than lattice-locked solid atoms."
    }
  },
  {
    globalId: "Q124",
    examId: "Q01552",
    paperRef: "5054/21/M/J/23 Q5(c)",
    pdfPage: 59,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Calorimetric Determination of Metal Specific Heat",
    paperType: "theory",
    marks: 3,
    questionText: `An electric heater is used to heat a sample of metal, as shown in Fig. 5.2. There is no thermal energy transferred from the metal to the surroundings during the heating.
The metal has a mass of 200 g and is initially at 15 °C.
The heater is switched on for 2.0 minutes and then switched off. The maximum temperature reached by the metal is 40 °C.
The power of the heater is 20 W.

Calculate the specific heat capacity of the metal. Show your working.
specific heat capacity = .................... J/(g °C) [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the specific heat capacity of a 200 g metal block in J/(g °C) heated by a 20 W heater for 2.0 minutes.",
    givenInfo: [
      "Mass of metal m = 200 g",
      "Initial temperature T_1 = 15 °C",
      "Final temperature T_2 = 40 °C",
      "Heater power P = 20 W",
      "Heating time t = 2.0 minutes = 120 s",
      "Target unit: J/(g °C)"
    ],
    toFind: "Specific heat capacity c in J/(g °C).",
    physicsConcepts: `Energy supplied by electric heater:
E = P * t (with t in seconds).
Sensible heat equation:
E = m * c * ΔT -> c = E / (m * ΔT).
Because the requested unit is J/(g °C), mass can remain in grams (m = 200 g).`,
    equations: `E = P t = 20 \\times (2.0 \\times 60) = 2400 \\text{ J}; \\quad \\Delta T = 40 - 15 = 25^\\circ\\text{C}; \\quad c = \\frac{2400}{200 \\times 25}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Time to Seconds",
        body: "t = 2.0 min * 60 s/min = 120 s."
      },
      {
        step: 2,
        title: "Calculate Energy Supplied",
        body: "E = P * t = 20 W * 120 s = 2400 J."
      },
      {
        step: 3,
        title: "Calculate Temperature Rise",
        body: "ΔT = 40 °C - 15 °C = 25 °C."
      },
      {
        step: 4,
        title: "Calculate Specific Heat Capacity in J/(g °C)",
        body: "c = E / (m * ΔT) = 2400 J / (200 g * 25 °C) = 2400 / 5000 = 0.48 J/(g °C)."
      }
    ],
    finalAnswer: "0.48 J/(g °C) (or 480 J/(kg °C))",
    reasonablenessCheck: "0.48 J/(g °C) equals 480 J/(kg °C), matching standard iron/steel blocks used in school laboratories.",
    commonMistakes: [
      "Using minutes instead of seconds: E = 20 * 2 = 40 J, giving c = 0.008 J/(g °C).",
      "Converting mass to kg when the printed answer line explicitly specifies J/(g °C)."
    ],
    takeaway: "c = (P * t) / (mΔT). Always convert time to seconds; check the answer line for mass units (g vs kg).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { powerW: 20, timeS: 120, massG: 200 },
      controls: [
        { id: "powerW", name: "Heater Power", min: 10, max: 50, step: 5, default: 20, unit: "W" }
      ],
      readouts: [
        { label: "Energy Supplied E", expr: (p) => (p.powerW * 120) + " J" },
        { label: "Specific Heat c", expr: (p) => ((p.powerW * 120) / (200 * 25)).toFixed(2) + " J/(g °C)" }
      ],
      explanation: "A 20 W heater running for 120 s delivers 2400 J, warming a 200 g block by 25 °C (c = 0.48 J/(g °C))."
    }
  },
  {
    globalId: "Q125",
    examId: "Q01150",
    paperRef: "5054/22/M/J/23 Q4(b)(i)",
    pdfPage: 60,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Calorimetric Water Energy Absorption",
    paperType: "theory",
    marks: 2,
    questionText: `A student places a 300 g piece of iron in boiling water until the iron is at a temperature of 100 °C.
She removes the iron from the water and places it immediately into 100 g of water at 25 °C.
The iron cools and the water warms until both reach the same temperature, 44 °C.
The specific heat capacity of water is 4.2 J/(g °C). No energy is lost to the surroundings.

Calculate the change in energy (internal energy) of the water as it warms up.
change in energy = .................... J [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate thermal energy gained by 100 g of water warming from 25 °C to 44 °C.",
    givenInfo: [
      "Mass of water m_w = 100 g",
      "Initial water temperature T_1 = 25 °C",
      "Equilibrium temperature T_2 = 44 °C",
      "Specific heat capacity of water c_w = 4.2 J/(g °C)"
    ],
    toFind: "Energy gained by water in Joules.",
    physicsConcepts: `Internal thermal energy increase:
E = m_w * c_w * ΔT_w.
Using m in grams with c in J/(g °C) gives energy directly in Joules.`,
    equations: `\\Delta T_w = 44 - 25 = 19^\\circ\\text{C}; \\quad E = 100 \\times 4.2 \\times 19`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Water Temperature Rise",
        body: "ΔT_w = 44 °C - 25 °C = 19 °C."
      },
      {
        step: 2,
        title: "Compute Energy Absorbed",
        body: "E = m_w * c_w * ΔT_w = 100 g * 4.2 J/(g °C) * 19 °C = 7980 J."
      }
    ],
    finalAnswer: "7980 J (or 8000 J / 7.98 kJ)",
    reasonablenessCheck: "100 g * 4.2 * 19 = 7980 J. Roughly 8 kJ absorbed corresponds to iron cooling through 56 °C.",
    commonMistakes: [
      "Using 44 °C instead of the temperature difference 19 °C.",
      "Using the mass of iron (300 g) instead of water (100 g)."
    ],
    takeaway: "E = mcΔT. Ensure mass and temperature change match the specific substance being calculated.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { waterMassG: 100, tempRise: 19 },
      controls: [],
      readouts: [
        { label: "Water Mass", expr: () => "100 g" },
        { label: "Energy Gained", expr: () => "7980 J" }
      ],
      explanation: "Water absorbs 7980 J warming from 25 °C to 44 °C."
    }
  },
  {
    globalId: "Q126",
    examId: "Q01151",
    paperRef: "5054/22/M/J/23 Q4(b)(ii)",
    pdfPage: 60,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Specific Heat Capacity of Iron from Method of Mixtures",
    paperType: "theory",
    marks: 2,
    questionText: `Using your answer to (b)(i), calculate the specific heat capacity of iron.
The 300 g piece of iron cooled from 100 °C to 44 °C.
specific heat capacity = .................... J/(g °C) [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the specific heat capacity of iron using heat lost to water (7980 J).",
    givenInfo: [
      "Mass of iron m_iron = 300 g",
      "Initial iron temperature = 100 °C",
      "Final temperature = 44 °C",
      "Thermal energy lost by iron = energy gained by water = 7980 J"
    ],
    toFind: "Specific heat capacity of iron c_iron in J/(g °C).",
    physicsConcepts: `By conservation of energy (assuming no heat loss to surroundings):
Energy lost by iron = Energy gained by water = 7980 J.
E = m_iron * c_iron * ΔT_iron -> c_iron = E / (m_iron * ΔT_iron).`,
    equations: `\\Delta T_{\\text{iron}} = 100 - 44 = 56^\\circ\\text{C}; \\quad c_{\\text{iron}} = \\frac{7980}{300 \\times 56}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Temperature Drop of Iron",
        body: "ΔT_iron = 100 °C - 44 °C = 56 °C."
      },
      {
        step: 2,
        title: "Apply Conservation of Energy",
        body: "Heat lost by iron = 7980 J."
      },
      {
        step: 3,
        title: "Calculate Specific Heat Capacity",
        body: "c_iron = 7980 J / (300 g * 56 °C) = 7980 / 16 800 = 0.475 J/(g °C) ≈ 0.48 J/(g °C)."
      }
    ],
    finalAnswer: "0.48 J/(g °C) (or 0.475 J/(g °C) / 475 J/(kg °C))",
    reasonablenessCheck: "0.48 J/(g °C) aligns with the accepted textbook value for iron (~460–480 J/(kg °C)).",
    commonMistakes: [
      "Using the water temperature change (19 °C) instead of the iron temperature change (56 °C).",
      "Dividing by mass of water instead of mass of iron."
    ],
    takeaway: "In calorimetry mixtures: m_metal * c_metal * ΔT_metal = m_water * c_water * ΔT_water.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { ironMassG: 300, ironDrop: 56 },
      controls: [],
      readouts: [
        { label: "Iron Temp Drop", expr: () => "56.0 °C" },
        { label: "Specific Heat of Iron", expr: () => "0.475 J/(g °C)" }
      ],
      explanation: "7980 J transferred across a 56 °C drop yields c = 0.475 J/(g °C) for the 300 g iron sample."
    }
  },
  {
    globalId: "Q127",
    examId: "Q00873",
    paperRef: "5054/21/O/N/23 Q3(b)(iv)",
    pdfPage: 62,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Electric Kettle Water Internal Energy Increase",
    paperType: "theory",
    marks: 3,
    questionText: `The heater in a kettle is near to the base of the kettle. The kettle is filled with water at a temperature of 17 °C and the heater is switched on.
The kettle contains 2.5 kg of water at standard atmospheric pressure.
The specific heat capacity of water is 4200 J/(kg °C).
When the water reaches its boiling temperature (100 °C), the kettle switches off.

Calculate the increase in the internal energy of the water.
increase in internal energy = .................... J [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the increase in internal energy when 2.5 kg of water is heated from 17 °C to its boiling point of 100 °C.",
    givenInfo: [
      "Mass of water m = 2.5 kg",
      "Initial temperature T_1 = 17 °C",
      "Boiling temperature T_2 = 100 °C",
      "Specific heat capacity of water c = 4200 J/(kg °C)"
    ],
    toFind: "Increase in internal energy ΔU in Joules.",
    physicsConcepts: `Thermal energy transferred to water increases its internal energy store:
ΔU = m * c * ΔT,
where ΔT = T_boil - T_initial = 100 °C - 17 °C = 83 °C.`,
    equations: `\\Delta T = 100 - 17 = 83^\\circ\\text{C}; \\quad \\Delta U = m c \\Delta T = 2.5 \\times 4200 \\times 83`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Temperature Increase",
        body: "ΔT = 100 °C - 17 °C = 83 °C."
      },
      {
        step: 2,
        title: "Calculate Increase in Internal Energy",
        body: "ΔU = m * c * ΔT = 2.5 kg * 4200 J/(kg °C) * 83 °C = 871 500 J."
      },
      {
        step: 3,
        title: "State with Significant Figures",
        body: "ΔU ≈ 8.7 × 10⁵ J (or 870 000 J / 872 kJ)."
      }
    ],
    finalAnswer: "870 000 J (or 871 500 J / 8.7 × 10⁵ J)",
    reasonablenessCheck: "2.5 kg is a full kettle; boiling it takes ~870 kJ, consistent with a 2.5 kW kettle running for ~350 seconds.",
    commonMistakes: [
      "Using 100 °C instead of the temperature change 83 °C.",
      "Confusing sensible heat increase with latent heat of boiling."
    ],
    takeaway: "Internal energy increase during warming = mcΔT. Temperature rise is measured relative to initial temperature.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 2.5, tempC: 83 },
      controls: [
        { id: "massKg", name: "Kettle Water Mass", min: 1.0, max: 3.0, step: 0.5, default: 2.5, unit: "kg" }
      ],
      readouts: [
        { label: "Temp Rise ΔT", expr: () => "83.0 °C" },
        { label: "Internal Energy Increase", expr: (p) => (p.massKg * 4200 * 83 / 1000).toFixed(0) + " kJ" }
      ],
      explanation: "Heating 2.5 kg of water from 17 °C to 100 °C increases internal energy by 871.5 kJ."
    }
  },
  {
    globalId: "Q128",
    examId: "Q01024",
    paperRef: "5054/21/M/J/24 Q3(b)(iii)",
    pdfPage: 63,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Energy to Warm Sub-Zero Ice to Melting Point",
    paperType: "theory",
    marks: 2,
    questionText: `A pan containing ice at -15 °C is placed on a gas heater.
The initial mass of ice in the pan is 1.5 kg and the initial temperature is -15 °C.
The specific heat capacity of ice is 2100 J/(kg °C).

Calculate the energy required to warm the ice to its melting temperature (0 °C).
energy = .................... J [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate thermal energy needed to warm 1.5 kg of ice from -15 °C to its melting point of 0 °C.",
    givenInfo: [
      "Mass of ice m = 1.5 kg",
      "Initial temperature T_1 = -15 °C",
      "Melting temperature T_2 = 0 °C",
      "Specific heat capacity of ice c_ice = 2100 J/(kg °C)"
    ],
    toFind: "Energy E in Joules.",
    physicsConcepts: `Sensible heating of solid ice below its melting point:
E = m * c_ice * ΔT,
where ΔT = 0 °C - (-15 °C) = 15 °C.
(Note: Specific heat capacity of ice is 2100 J/(kg °C), half that of liquid water).`,
    equations: `\\Delta T = 0 - (-15) = 15^\\circ\\text{C}; \\quad E = m c_{\\text{ice}} \\Delta T = 1.5 \\times 2100 \\times 15`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Temperature Change",
        body: "ΔT = 0 °C - (-15 °C) = 15 °C."
      },
      {
        step: 2,
        title: "Calculate Thermal Energy",
        body: "E = m * c_ice * ΔT = 1.5 kg * 2100 J/(kg °C) * 15 °C = 47 250 J."
      },
      {
        step: 3,
        title: "Express with Significant Figures",
        body: "E ≈ 47 000 J (or 4.7 × 10⁴ J / 47.3 kJ)."
      }
    ],
    finalAnswer: "47 000 J (or 47 250 J / 4.7 × 10⁴ J)",
    reasonablenessCheck: "1.5 * 2100 * 15 = 47 250 J. Warming sub-zero ice requires substantially less energy than melting it.",
    commonMistakes: [
      "Using the specific heat capacity of water (4200 J/(kg °C)) instead of ice (2100 J/(kg °C)).",
      "Attempting to add latent heat of fusion when only warming to melting point is requested."
    ],
    takeaway: "Ice has c = 2100 J/(kg °C). Use c_ice when warming below 0 °C, not the value for liquid water.",
    simulation: {
      type: "heating_curve",
      defaultParams: { massKg: 1.5, tempC: -15 },
      controls: [
        { id: "massKg", name: "Ice Mass", min: 0.5, max: 3.0, step: 0.5, default: 1.5, unit: "kg" }
      ],
      readouts: [
        { label: "Ice Temp", expr: () => "-15 °C ➔ 0 °C" },
        { label: "Warming Energy E", expr: (p) => (p.massKg * 2100 * 15 / 1000).toFixed(1) + " kJ" }
      ],
      explanation: "Warming 1.5 kg of ice to 0 °C absorbs 47.25 kJ before melting begins."
    }
  },
  {
    globalId: "Q129",
    examId: "Q01025",
    paperRef: "5054/21/M/J/24 Q3(b)(iv)",
    pdfPage: 63,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Heater Power Determination from Heating Curve",
    paperType: "theory",
    marks: 2,
    questionText: `All the energy transferred to the pan comes from the heater.
Fig. 3.2 shows that the temperature of the ice increases from -15 °C to 0 °C in 3.0 minutes (180 s).
Using your answer to (iii) and Fig. 3.2, determine the power of the heater used to warm the ice.
power = .................... W [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate heater power using energy required to warm ice (47 250 J) and heating duration (3.0 minutes).",
    givenInfo: [
      "Energy supplied E = 47 250 J (from Q128)",
      "Time taken from graph t = 3.0 minutes = 3.0 * 60 = 180 s"
    ],
    toFind: "Power of heater P in Watts.",
    physicsConcepts: `Power is the rate at which energy is transferred:
P = E / t,
where time must be converted to seconds: t = 3.0 min = 180 s.`,
    equations: `t = 3.0 \\times 60 = 180 \\text{ s}; \\quad P = \\frac{E}{t} = \\frac{47\\,250}{180}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Time to Seconds",
        body: "t = 3.0 min * 60 s/min = 180 s."
      },
      {
        step: 2,
        title: "Calculate Power",
        body: "P = E / t = 47 250 J / 180 s = 262.5 W ≈ 260 W (or 263 W)."
      }
    ],
    finalAnswer: "260 W (or 262.5 W / 263 W)",
    reasonablenessCheck: "A small portable gas burner typically outputs 200–300 W into a pan, consistent with 262.5 W.",
    commonMistakes: [
      "Using time as 3.0 minutes without converting to seconds (giving 15 750 W).",
      "Using the total time including the melting period."
    ],
    takeaway: "Power P = Energy / time (in seconds). Always convert minutes to seconds.",
    simulation: {
      type: "heating_curve",
      defaultParams: { timeMin: 3.0, energyJ: 47250 },
      controls: [],
      readouts: [
        { label: "Warming Time", expr: () => "180 s (3.0 min)" },
        { label: "Heater Power P", expr: () => "262.5 W" }
      ],
      explanation: "Transferring 47 250 J over 180 s requires an average heater power of 262.5 W."
    }
  },
  {
    globalId: "Q130",
    examId: "Q01027",
    paperRef: "5054/21/M/J/24 Q3(b)(v)",
    pdfPage: 63,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Heating Curve Gradient Comparison Between Liquid and Solid",
    paperType: "theory",
    marks: 1,
    questionText: `The graph in Fig. 3.2 has a smaller gradient when the water is liquid than when it is solid.
Suggest one reason why. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why the temperature-time slope is shallower for liquid water than for solid ice.",
    givenInfo: [
      "Gradient dT/dt is smaller for liquid water than for solid ice.",
      "Same heater supplies energy to both phases."
    ],
    toFind: "Physical explanation for the smaller gradient in the liquid state.",
    physicsConcepts: `Rate of temperature change:
dT/dt = P / (m * c).
Specific heat capacity of liquid water (c_water = 4200 J/(kg °C)) is twice that of ice (c_ice = 2100 J/(kg °C)).
Because liquid water requires more thermal energy per degree rise, it warms up more slowly, producing a smaller gradient.
(An alternative valid reason: at higher liquid temperatures, heat loss to surroundings is greater, reducing net heating rate).`,
    equations: `\\frac{\\Delta T}{\\Delta t} = \\frac{P}{m c} \\implies c_{\\text{water}} > c_{\\text{ice}} \\implies \\text{Gradient}_{\\text{water}} < \\text{Gradient}_{\\text{ice}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Gradient to Specific Heat Capacity",
        body: "Gradient represents the rate of temperature rise. The specific heat capacity of liquid water (4200 J/(kg °C)) is greater than the specific heat capacity of ice (2100 J/(kg °C)), so more energy is required to raise its temperature by 1 °C."
      },
      {
        step: 2,
        title: "Consider Alternative Heat Loss Explanation",
        body: "Liquid water is at a higher temperature than sub-zero ice, so more thermal energy is lost to the surroundings / evaporates."
      }
    ],
    finalAnswer: "The specific heat capacity of water is greater than the specific heat capacity of ice (or more thermal energy is lost to surroundings / water evaporates).",
    reasonablenessCheck: "Water's specific heat capacity is double that of ice (4200 vs 2100 J/(kg °C)), so its temperature rises half as fast for the same power input.",
    commonMistakes: [
      "Stating that the heater power decreased.",
      "Saying water is denser without referencing specific heat capacity."
    ],
    takeaway: "On a heating curve, gradient is inversely proportional to specific heat capacity: higher c yields a shallower slope.",
    simulation: {
      type: "heating_curve",
      defaultParams: { slopeIce: 2.0, slopeWater: 1.0 },
      controls: [],
      readouts: [
        { label: "Ice Slope (c = 2100)", expr: () => "STEEPER (Faster Rise)" },
        { label: "Water Slope (c = 4200)", expr: () => "SHALLOWER (Half Speed)" }
      ],
      explanation: "Water has double the specific heat capacity of ice, halving the rate of temperature rise."
    }
  }
];