/**
 * Master Question Store: Batch 11 (Q146 to Q160)
 * Section 2.2: Completes Theory (72/72) and Begins Practical Paper 3
 */

const QUESTIONS_BATCH_11 = [
  {
    globalId: "Q146",
    examId: "Q01548",
    paperRef: "5054/21/M/J/23 Q5",
    pdfPage: 58,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Calorimetry and Thermal Properties Master Overview",
    paperType: "theory",
    marks: 7,
    questionText: `Fig. 5.1 shows the particles (molecules) in a sample of liquid water.
(a) Explain, using ideas about particles, why liquids expand more than solids for the same temperature rise. [2]

(b) The boiling point of water is 100 °C.
(i) State the boiling point of water on the Kelvin scale of temperature. [1]
(ii) The temperature remains constant as water turns from liquid to gas at the boiling point.
Explain, in terms of particles, why energy must be provided even though the temperature stays constant. [1]

(c) An electric heater is used to heat a sample of metal, as shown in Fig. 5.2. There is no thermal energy transferred from the metal to the surroundings during the heating.
The metal has a mass of 200 g and is initially at 15 °C.
The heater is switched on for 2.0 minutes and then switched off. The maximum temperature reached by the metal is 40 °C.
The power of the heater is 20 W.
Calculate the specific heat capacity of the metal. Show your working. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain relative thermal expansion of liquids versus solids, convert boiling point to Kelvin, explain latent heat absorption at constant temperature, and calculate specific heat capacity from electric heater data.",
    givenInfo: [
      "Water boiling point = 100 °C",
      "Metal block mass m = 200 g",
      "Initial temperature T_1 = 15 °C, final temperature T_2 = 40 °C",
      "Heater power P = 20 W, time t = 2.0 minutes = 120 s"
    ],
    toFind: "Particle expansion explanation, Kelvin temperature, latent heat mechanism, and specific heat capacity in J/(g °C).",
    physicsConcepts: `1. Relative expansion: Weaker intermolecular forces in liquids allow particles to move further apart more easily than in a rigid solid lattice.
2. Kelvin scale: T(K) = θ(°C) + 273.
3. Latent heat: Energy supplied at boiling point does work against attractive intermolecular forces to separate particles, increasing potential energy while kinetic energy (temperature) stays constant.
4. Specific heat capacity: E = P * t; c = E / (m * ΔT).`,
    equations: `T = 100 + 273 = 373 \\text{ K}; \\quad E = 20 \\times 120 = 2400 \\text{ J}; \\quad c = \\frac{2400}{200 \\times 25} = 0.48 \\text{ J/(g }^\\circ\\text{C)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Liquid vs Solid Expansion",
        body: "Forces between particles in liquids are weaker than in solids (particles are not locked in fixed lattice sites), so particles move further apart more easily when their kinetic energy increases."
      },
      {
        step: 2,
        title: "Part (b)(i) Kelvin Conversion",
        body: "T = 100 °C + 273 = 373 K."
      },
      {
        step: 3,
        title: "Part (b)(ii) Latent Heat at Constant T",
        body: "Energy is needed to do work to overcome / break the attractive intermolecular forces and separate the particles into a gas."
      },
      {
        step: 4,
        title: "Part (c) Specific Heat Capacity",
        body: "E = P * t = 20 W * 120 s = 2400 J.\nΔT = 40 °C - 15 °C = 25 °C.\nc = E / (m * ΔT) = 2400 J / (200 g * 25 °C) = 0.48 J/(g °C) (or 480 J/(kg °C))."
      }
    ],
    finalAnswer: "(a) Weaker intermolecular forces allow liquid particles to move further apart more easily;\n(b)(i) 373 K;\n(b)(ii) Energy overcomes attractive forces to separate particles;\n(c) 0.48 J/(g °C) (or 480 J/(kg °C)).",
    reasonablenessCheck: "0.48 J/(g °C) matches steel/iron calibration standards in educational calorimetry.",
    commonMistakes: [
      "Using minutes instead of seconds in E = Pt.",
      "Writing °K instead of K.",
      "Saying energy is needed to speed particles up during boiling."
    ],
    takeaway: "Electric heating combines E = Pt with E = mcΔT; phase changes store energy as potential energy without temperature rise.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { powerW: 20, timeS: 120, massG: 200 },
      controls: [
        { id: "powerW", name: "Heater Power", min: 10, max: 40, step: 5, default: 20, unit: "W" }
      ],
      readouts: [
        { label: "Energy Supplied", expr: (p) => (p.powerW * 120) + " J" },
        { label: "Specific Heat c", expr: (p) => ((p.powerW * 120) / (200 * 25)).toFixed(2) + " J/(g °C)" }
      ],
      explanation: "A 20 W heater running for 120 s delivers 2400 J, warming a 200 g metal block through 25 °C."
    }
  },
  {
    globalId: "Q147",
    examId: "Q01145",
    paperRef: "5054/22/M/J/23 Q4(a)",
    pdfPage: 60,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Absolute Zero, Particle Vibration & Melting Energy",
    paperType: "theory",
    marks: 5,
    questionText: `Fig. 4.1 shows the particles (atoms) at one instant in a sample of iron at a temperature below its melting point.

(i) State the lowest possible temperature on the Celsius scale and on the Kelvin scale.
Celsius scale: .................... °C
Kelvin scale: .................... K [1]

(ii) The temperature of the solid increases. The sample remains a solid.
Describe how the motion of the particles changes. [2]

(iii) The solid melts.
State what happens to the internal energy and the temperature of the solid as it melts.
internal energy: ....................
temperature: .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State absolute zero on both scales, describe vibrational changes upon heating solid iron, and determine internal energy and temperature trends during melting.",
    givenInfo: [
      "Solid iron below melting point.",
      "Heating without phase change.",
      "Subsequent melting transition."
    ],
    toFind: "Absolute zero values, vibrational motion description, and internal energy & temperature behavior during melting.",
    physicsConcepts: `1. Absolute zero is the lowest theoretical temperature: -273 °C (or -273.15 °C) and 0 K.
2. In solids, atoms vibrate about fixed lattice sites; increasing temperature increases vibrational speed, frequency, and amplitude.
3. During melting, supplied thermal energy increases intermolecular potential energy (internal energy increases), but average kinetic energy is constant, so temperature stays the same.`,
    equations: `T_{\\text{min}} = -273^\\circ\\text{C} = 0 \\text{ K}; \\quad \\Delta U > 0, \\quad \\Delta T = 0 \\quad (\\text{during melting})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Absolute Zero",
        body: "Celsius scale: -273 °C. Kelvin scale: 0 K."
      },
      {
        step: 2,
        title: "Part (ii) Motion in Solid",
        body: "Particles vibrate faster / gain kinetic energy / vibrate with greater amplitude about their fixed positions."
      },
      {
        step: 3,
        title: "Part (iii) Melting Trends",
        body: "Internal energy: increases (potential energy increases as bonds weaken).\nTemperature: remains constant / stays the same."
      }
    ],
    finalAnswer: "(i) Celsius: -273 °C, Kelvin: 0 K;\n(ii) Particles vibrate faster / with greater amplitude;\n(iii) Internal energy: increases; Temperature: remains constant.",
    reasonablenessCheck: "0 K is the absolute lower limit of temperature; melting absorbs latent heat without raising temperature.",
    commonMistakes: [
      "Saying internal energy stays constant because temperature is constant.",
      "Stating particles translate through space while still solid."
    ],
    takeaway: "Absolute zero is 0 K (-273 °C). Melting increases internal energy while temperature remains constant.",
    simulation: {
      type: "absolute_zero_lattice",
      defaultParams: { tempKelvin: 300 },
      controls: [
        { id: "tempKelvin", name: "Temperature", min: 0, max: 1800, step: 100, default: 300, unit: "K" }
      ],
      readouts: [
        { label: "Vibrational Energy", expr: (p) => p.tempKelvin === 0 ? "Zero (Absolute Zero)" : "Active Vibrations" },
        { label: "Internal Energy Store", expr: (p) => (p.tempKelvin * 0.45).toFixed(0) + " kJ/kg" }
      ],
      explanation: "At 0 K all thermal vibration ceases; raising temperature expands vibrational amplitude until melting occurs."
    }
  },
  {
    globalId: "Q148",
    examId: "Q01146",
    paperRef: "5054/22/M/J/23 Q4(a)(i)",
    pdfPage: 60,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Absolute Zero on Celsius and Kelvin Scales",
    paperType: "theory",
    marks: 1,
    questionText: `State the lowest possible temperature on the Celsius scale and on the Kelvin scale.
Celsius scale: .................... °C
Kelvin scale: .................... K [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State the numerical value of absolute zero on the Celsius scale and on the Kelvin scale.",
    givenInfo: ["Reference point: Absolute zero."],
    toFind: "Values in °C and K.",
    physicsConcepts: `Absolute zero is the thermodynamic origin where particle kinetic energy reaches its minimum possible value: 0 K on the Kelvin scale and -273 °C (or -273.15 °C) on the Celsius scale.`,
    equations: `T = 0 \\text{ K} \\iff \\theta = -273^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Values",
        body: "Celsius scale = -273 °C (or -273.15 °C). Kelvin scale = 0 K."
      }
    ],
    finalAnswer: "Celsius scale: -273 °C; Kelvin scale: 0 K",
    reasonablenessCheck: "Kelvin is an absolute thermodynamic scale, so its minimum possible value is 0 K.",
    commonMistakes: [
      "Writing 0 °C for Celsius.",
      "Writing -273 K for Kelvin."
    ],
    takeaway: "Absolute zero = 0 K = -273 °C.",
    simulation: {
      type: "kelvin_scale",
      defaultParams: { celsiusVal: -273 },
      controls: [],
      readouts: [
        { label: "Celsius Reading", expr: () => "-273 °C" },
        { label: "Kelvin Reading", expr: () => "0 K (Absolute Zero)" }
      ],
      explanation: "Absolute zero aligns at -273 °C and 0 K."
    }
  },
  {
    globalId: "Q149",
    examId: "Q01147",
    paperRef: "5054/22/M/J/23 Q4(a)(ii)",
    pdfPage: 60,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermal Motion in Solid Lattice",
    paperType: "theory",
    marks: 2,
    questionText: `The temperature of the solid increases. The sample remains a solid.
Describe how the motion of the particles changes. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe how particle motion changes as a solid warms without changing state.",
    givenInfo: [
      "Solid sample heated below its melting point."
    ],
    toFind: "Two-point description of microscopic particle motion.",
    physicsConcepts: `In a solid, atoms are constrained to vibrate about fixed equilibrium lattice sites.
Heating increases internal thermal kinetic energy:
1. Particles vibrate faster (higher frequency and greater speed).
2. Particles vibrate with larger amplitude (greater displacement from center).`,
    equations: `\\bar{E}_k = \\frac{1}{2} m \\bar{v}^2 \\propto T`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Speed / Kinetic Energy Change (Mark 1)",
        body: "Particles vibrate faster / move more rapidly / gain kinetic energy."
      },
      {
        step: 2,
        title: "State Amplitude Change (Mark 2)",
        body: "Particles vibrate with greater amplitude / vibrate more vigorously about their fixed positions."
      }
    ],
    finalAnswer: "Particles vibrate faster / gain kinetic energy; particles vibrate with greater amplitude about their fixed positions.",
    reasonablenessCheck: "Higher temperature means higher average kinetic energy, which in solids manifests as faster and wider vibrations.",
    commonMistakes: [
      "Stating particles break free or move around the container.",
      "Saying particles expand in size."
    ],
    takeaway: "Heating a solid causes particles to vibrate faster and with greater amplitude about fixed lattice positions.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "solid", tempC: 200 },
      controls: [
        { id: "tempC", name: "Solid Temp", min: 50, max: 800, step: 50, default: 200, unit: "°C" }
      ],
      readouts: [
        { label: "Vibration Speed", expr: (p) => (Math.sqrt(p.tempC + 273) * 15).toFixed(0) + " m/s" },
        { label: "Vibration Amplitude", expr: (p) => ((p.tempC / 800) * 8 + 1).toFixed(1) + " nm" }
      ],
      explanation: "Atoms vibrate faster and swing through larger displacements as temperature rises."
    }
  },
  {
    globalId: "Q150",
    examId: "Q01148",
    paperRef: "5054/22/M/J/23 Q4(a)(iii)",
    pdfPage: 60,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Internal Energy and Temperature During Melting",
    paperType: "theory",
    marks: 2,
    questionText: `The solid melts.
State what happens to the internal energy and the temperature of the solid as it melts.
internal energy: ....................
temperature: .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State whether internal energy and temperature increase, decrease, or remain constant during melting.",
    givenInfo: ["Solid is melting at its melting point."],
    toFind: "Trend for internal energy and temperature.",
    physicsConcepts: `Internal energy U = total kinetic energy + total potential energy.
During melting:
1. Heat is supplied, doing work against intermolecular attractions to break the lattice, so potential energy increases. Thus, internal energy increases.
2. Average kinetic energy does not change, so temperature remains constant.`,
    equations: `\\Delta U = \\Delta E_p > 0; \\quad \\Delta E_k = 0 \\implies \\Delta T = 0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Determine Internal Energy Trend",
        body: "Thermal energy is continuously absorbed by the solid, increasing intermolecular potential energy. Therefore, internal energy increases."
      },
      {
        step: 2,
        title: "Determine Temperature Trend",
        body: "Average kinetic energy of particles does not change during a change of state. Therefore, temperature remains constant / stays the same."
      }
    ],
    finalAnswer: "internal energy: increases;\ntemperature: remains constant (stays the same / no change)",
    reasonablenessCheck: "Heating adds energy to the system (internal energy must rise), but thermometer readings remain steady during melting.",
    commonMistakes: [
      "Stating internal energy remains constant because temperature is constant.",
      "Saying temperature increases."
    ],
    takeaway: "During melting, internal energy increases (higher potential energy) while temperature remains constant.",
    simulation: {
      type: "bond_energy_phase",
      defaultParams: { energySupplied: 50 },
      controls: [],
      readouts: [
        { label: "Internal Energy Store", expr: () => "INCREASES (Latent Heat In)" },
        { label: "Temperature", expr: () => "CONSTANT (No Change)" }
      ],
      explanation: "Supplied heat increases intermolecular potential energy while temperature stays fixed at the melting point."
    }
  },
  {
    globalId: "Q151",
    examId: "Q01149",
    paperRef: "5054/22/M/J/23 Q4(b)",
    pdfPage: 60,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Method of Mixtures Calorimetry Master Problem",
    paperType: "theory",
    marks: 4,
    questionText: `A student:
- places a 300 g piece of iron in boiling water until the iron is at a temperature of 100 °C
- removes the iron from the water and places it immediately into 100 g of water at 25 °C.
The iron cools and the water warms until both reach the same temperature, 44 °C.
The specific heat capacity of water is 4.2 J/(g °C). No energy is lost to the surroundings.

(i) Calculate the change in energy (internal energy) of the water as it warms up. [2]
(ii) Calculate the specific heat capacity of iron. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate energy gained by water and use energy conservation to determine the specific heat capacity of iron.",
    givenInfo: [
      "Mass of iron m_iron = 300 g",
      "Initial iron temperature = 100 °C",
      "Mass of water m_water = 100 g",
      "Initial water temperature = 25 °C",
      "Equilibrium temperature = 44 °C",
      "Specific heat capacity of water c_water = 4.2 J/(g °C)"
    ],
    toFind: "Energy gained by water in J, and specific heat capacity of iron in J/(g °C).",
    physicsConcepts: `1. Energy gained by water: E_water = m_water * c_water * ΔT_water.
2. Conservation of thermal energy: Energy lost by iron = Energy gained by water.
3. Specific heat capacity of iron: c_iron = E / (m_iron * ΔT_iron).`,
    equations: `E = 100 \\times 4.2 \\times (44 - 25) = 7980 \\text{ J}; \\quad c_{\\text{iron}} = \\frac{7980}{300 \\times (100 - 44)} = 0.475 \\text{ J/(g }^\\circ\\text{C)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Energy Gained by Water",
        body: "ΔT_water = 44 °C - 25 °C = 19 °C.\nE = 100 g * 4.2 J/(g °C) * 19 °C = 7980 J ≈ 8000 J (or 7.98 kJ)."
      },
      {
        step: 2,
        title: "Part (ii) Specific Heat Capacity of Iron",
        body: "ΔT_iron = 100 °C - 44 °C = 56 °C.\nEnergy lost by iron = 7980 J.\nc_iron = 7980 J / (300 g * 56 °C) = 7980 / 16 800 = 0.475 J/(g °C) ≈ 0.48 J/(g °C)."
      }
    ],
    finalAnswer: "(i) 7980 J (or 8000 J / 7.98 kJ);\n(ii) 0.48 J/(g °C) (or 0.475 J/(g °C) / 475 J/(kg °C)).",
    reasonablenessCheck: "0.475 J/(g °C) matches the literature value for iron (460–480 J/(kg °C)).",
    commonMistakes: [
      "Using the water temperature rise (19 °C) for the iron calculation instead of 56 °C.",
      "Dividing by the wrong mass."
    ],
    takeaway: "In calorimetry mixtures without heat loss, heat gained by cold liquid equals heat lost by hot solid.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { ironMassG: 300, waterMassG: 100, finalTemp: 44 },
      controls: [],
      readouts: [
        { label: "Heat Gained by Water", expr: () => "7980 J" },
        { label: "c of Iron", expr: () => "0.475 J/(g °C)" }
      ],
      explanation: "Iron drops through 56 °C, transferring 7980 J into water warming through 19 °C."
    }
  },
  {
    globalId: "Q152",
    examId: "Q01020",
    paperRef: "5054/21/M/J/24 Q3",
    pdfPage: 62,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Ice Heating Curve and Calorimetry Master Suite",
    paperType: "theory",
    marks: 10,
    questionText: `A pan containing ice at -15 °C is placed on a gas heater.
(a) Thermal conduction occurs in the metal from which the pan is made.
By referring to particles, describe the process of thermal conduction in a metal. [2]

(b) Fig. 3.2 shows how the temperature of the contents of the pan varies with time.
(i) State the melting temperature of ice in kelvin. [1]
(ii) Explain why the temperature of the water is constant as the ice melts. [2]
(iii) The initial mass of ice in the pan is 1.5 kg and the initial temperature is -15 °C. The specific heat capacity of ice is 2100 J/(kg °C).
Calculate the energy required to warm the ice to its melting temperature. [2]
(iv) All the energy transferred to the pan comes from the heater. Using your answer to (iii) and Fig. 3.2 (warming time = 3.0 min), determine the power of the heater used to warm the ice. [2]
(v) The graph in Fig. 3.2 has a smaller gradient when the water is liquid than when it is solid. Suggest one reason why. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe metallic conduction via delocalised electrons, state ice melting point in Kelvin, explain latent heat absorption, calculate warming energy and heater power, and compare heating curve gradients.",
    givenInfo: [
      "Initial mass of ice m = 1.5 kg, initial temperature = -15 °C",
      "c_ice = 2100 J/(kg °C), c_water = 4200 J/(kg °C)",
      "Time to warm from -15 °C to 0 °C = 3.0 minutes = 180 s"
    ],
    toFind: "Conduction mechanism, melting point in K, latent heat explanation, warming energy in J, heater power in W, and gradient comparison.",
    physicsConcepts: `1. Conduction in metals: Thermal energy transfers via lattice vibrations and rapidly moving delocalised free electrons colliding with ions.
2. Kelvin scale: T = 0 + 273 = 273 K.
3. Constant temperature: Latent heat of fusion breaks intermolecular bonds without changing kinetic energy.
4. Energy: E = m * c_ice * ΔT = 1.5 * 2100 * 15 = 47 250 J.
5. Power: P = E / t = 47 250 / 180 = 262.5 W.
6. Gradient: dT/dt = P / (m * c). Because c_water (4200) > c_ice (2100), the gradient is smaller for liquid water.`,
    equations: `E = m c \\Delta T; \\quad P = \\frac{E}{t}; \\quad \\frac{\\Delta T}{\\Delta t} \\propto \\frac{1}{c}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Conduction in Metal",
        body: "Ions at the heated base vibrate more vigorously and pass energy to neighbors; delocalised (free) electrons gain kinetic energy and move rapidly through the metal lattice, colliding with distant ions to transfer energy quickly."
      },
      {
        step: 2,
        title: "Part (b)(i) & (ii) Melting Point and Constant T",
        body: "Melting point = 273 K.\nTemperature is constant because supplied thermal energy is used to break / overcome intermolecular bonds, increasing potential energy rather than kinetic energy."
      },
      {
        step: 3,
        title: "Part (b)(iii) Energy to Warm Ice",
        body: "ΔT = 0 °C - (-15 °C) = 15 °C.\nE = 1.5 kg * 2100 J/(kg °C) * 15 °C = 47 250 J ≈ 47 000 J."
      },
      {
        step: 4,
        title: "Part (b)(iv) Heater Power",
        body: "t = 3.0 min * 60 s/min = 180 s.\nP = 47 250 J / 180 s = 262.5 W ≈ 260 W."
      },
      {
        step: 5,
        title: "Part (b)(v) Smaller Gradient in Liquid",
        body: "Specific heat capacity of water is greater than that of ice (4200 vs 2100 J/(kg °C)), so more energy is required per degree rise."
      }
    ],
    finalAnswer: "(a) Vibrating lattice ions plus delocalised free electrons transferring energy;\n(b)(i) 273 K;\n(b)(ii) Energy breaks bonds rather than increasing kinetic energy;\n(b)(iii) 47 000 J (or 47 250 J);\n(b)(iv) 260 W (or 262.5 W);\n(b)(v) Specific heat capacity of liquid water is greater than that of ice.",
    reasonablenessCheck: "Heater power of ~260 W is typical for a small laboratory burner; double specific heat capacity halves the warming gradient.",
    commonMistakes: [
      "Omitting free electrons when explaining conduction in metals.",
      "Using minutes instead of seconds when calculating power.",
      "Using c_water when calculating energy to warm ice."
    ],
    takeaway: "In metals, free electrons drive rapid conduction; on heating curves, gradient is inversely proportional to specific heat capacity.",
    simulation: {
      type: "heating_curve",
      defaultParams: { massKg: 1.5, powerW: 262.5 },
      controls: [],
      readouts: [
        { label: "Warming Energy", expr: () => "47.25 kJ" },
        { label: "Heater Power", expr: () => "262.5 W" },
        { label: "Liquid Gradient", expr: () => "Half of solid slope" }
      ],
      explanation: "Heating curve tracks ice warming at 262.5 W, melting at 273 K, and warming as liquid at half the solid slope."
    }
  },
  {
    globalId: "Q153",
    examId: "Q01022",
    paperRef: "5054/21/M/J/24 Q3(b)(ii)",
    pdfPage: 63,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Particle Energy Dynamics at Melting Point",
    paperType: "theory",
    marks: 2,
    questionText: `Explain why the temperature of the water is constant as the ice melts. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why temperature stays constant during melting in terms of energy and intermolecular bonds.",
    givenInfo: [
      "Ice is melting at 0 °C in a heated pan.",
      "Thermal energy continues to be supplied."
    ],
    toFind: "Two-mark physical explanation.",
    physicsConcepts: `Temperature is a measure of the average kinetic energy of particles.
During melting:
1. Supplied thermal energy is used to do work to overcome / break intermolecular bonds holding the solid lattice together.
2. This increases intermolecular potential energy without increasing average kinetic energy.
3. Therefore, temperature remains constant.`,
    equations: `\\Delta Q \\to \\Delta E_p \\quad (\\Delta E_k = 0 \\implies \\Delta T = 0)`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Work on Bonds (Mark 1)",
        body: "Thermal energy is absorbed to break / weaken / overcome the attractive intermolecular bonds holding the particles in the ice lattice."
      },
      {
        step: 2,
        title: "Relate to Kinetic Energy (Mark 2)",
        body: "The average kinetic energy of the particles does not increase (energy increases potential energy), so temperature remains constant."
      }
    ],
    finalAnswer: "Energy is used to overcome / break bonds between particles (increasing potential energy); average kinetic energy of particles does not change, so temperature remains constant.",
    reasonablenessCheck: "Latent heat of fusion changes phase without changing thermal kinetic energy.",
    commonMistakes: [
      "Saying energy is lost to the air.",
      "Saying molecules stop moving."
    ],
    takeaway: "Latent heat increases intermolecular potential energy by breaking bonds, leaving kinetic energy and temperature unchanged.",
    simulation: {
      type: "bond_energy_phase",
      defaultParams: { energySupplied: 50 },
      controls: [],
      readouts: [
        { label: "Potential Energy", expr: () => "INCREASING (Breaking Bonds)" },
        { label: "Kinetic Energy", expr: () => "CONSTANT (Steady T)" }
      ],
      explanation: "Energy breaks intermolecular bonds at constant temperature during melting."
    }
  },
  {
    globalId: "Q154",
    examId: "Q00498",
    paperRef: "5054/22/M/J/24 Q2",
    pdfPage: 64,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermal Dissipation Processes in Electronic Devices",
    paperType: "theory",
    marks: 3,
    questionText: `After use, the outside surface of a cell phone is warm. When switched off, the cell phone cools down.
Name and describe the three processes by which thermal energy is transferred as the cell phone cools down.
1 ........................................................................................................................
2 ........................................................................................................................
3 ........................................................................................................................ [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Name and describe the three mechanisms of thermal energy transfer by which a warm cell phone cools to ambient temperature.",
    givenInfo: [
      "Warm cell phone cooling in ambient room air."
    ],
    toFind: "Names and descriptions of conduction, convection, and radiation.",
    physicsConcepts: `Thermal energy transfers via three distinct physical processes:
1. Conduction: Vibrating particles in the warm phone casing collide with adjacent air molecules and supporting surfaces, transferring kinetic energy directly.
2. Convection: Air in contact with the warm phone expands, becomes less dense, and rises, setting up a circulating convection current of cooler air.
3. Thermal Radiation: The warm surface emits infrared electromagnetic radiation, which radiates away in all directions without requiring a medium.`,
    equations: `\\frac{dQ_{\\text{total}}}{dt} = \\left(\\frac{dQ}{dt}\\right)_{\\text{cond}} + \\left(\\frac{dQ}{dt}\\right)_{\\text{conv}} + \\left(\\frac{dQ}{dt}\\right)_{\\text{rad}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Process 1: Conduction",
        body: "Conduction: thermal energy transfers to the table / surface in contact and to adjacent air particles through particle collisions."
      },
      {
        step: 2,
        title: "Process 2: Convection",
        body: "Convection: air near the phone warms, expands, becomes less dense, and rises, setting up a convection current."
      },
      {
        step: 3,
        title: "Process 3: Radiation",
        body: "Radiation: thermal energy is emitted from the phone surface as infrared electromagnetic waves."
      }
    ],
    finalAnswer: "1. Conduction: energy transferred through contact with surface / air via particle collisions;\n2. Convection: warm air expands, becomes less dense, and rises;\n3. Radiation: energy emitted as infrared electromagnetic waves.",
    reasonablenessCheck: "Any warm solid exposed to room air transfers heat through all three modes simultaneously.",
    commonMistakes: [
      "Naming processes without describing them.",
      "Confusing evaporation with convection."
    ],
    takeaway: "Cooling in air combines conduction (contact), convection (buoyant fluid circulation), and radiation (infrared emission).",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 45 },
      controls: [],
      readouts: [
        { label: "Mode 1", expr: () => "Conduction (Contact)" },
        { label: "Mode 2", expr: () => "Convection (Buoyant Airflow)" },
        { label: "Mode 3", expr: () => "Radiation (Infrared Waves)" }
      ],
      explanation: "The warm casing cools simultaneously by contact conduction, rising convection currents, and infrared emission."
    }
  },
  {
    globalId: "Q155",
    examId: "Q03398",
    paperRef: "5054/22/M/J/25 Q8(b)",
    pdfPage: 68,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Coolant Selection and Thermal Capacity Criteria",
    paperType: "theory",
    marks: 3,
    questionText: `The specific heat capacity of the coolant is an important quantity in the design of the nuclear reactor.
State two reasons why water or molten sodium is chosen as a coolant in terms of thermal properties and safety. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why coolants require high specific heat capacity and describe thermal safety criteria.",
    givenInfo: [
      "Nuclear reactor cooling systems.",
      "Materials: Water or molten sodium."
    ],
    toFind: "Two thermal reasons for coolant selection.",
    physicsConcepts: `Reactor coolant criteria:
1. High specific heat capacity: Absorbs large quantities of thermal energy per kilogram with only a moderate temperature increase (E = mcΔT), protecting materials from thermal degradation.
2. High boiling point / liquid range: Remains liquid at high operational temperatures to maintain effective convective heat transfer without forming vapor pockets that cause hotspots.`,
    equations: `\\Delta T = \\frac{P}{m c} \\implies \\text{High } c \\implies \\text{Low } \\Delta T`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Primary Thermal Property (Mark 1 & 2)",
        body: "It has a very large specific heat capacity, so it can absorb large amounts of heat energy per second with only a small rise in temperature."
      },
      {
        step: 2,
        title: "State Safety / Operational Criterion (Mark 3)",
        body: "It has a wide liquid range / high boiling point under operating pressure, preventing localized boiling that leads to loss of cooling."
      }
    ],
    finalAnswer: "1. Large specific heat capacity, so it absorbs large amounts of heat with only a small temperature rise;\n2. High thermal conductivity / remains liquid over a wide operating temperature range to prevent vapor lock.",
    reasonablenessCheck: "High specific heat capacity keeps core temperature rise manageable and avoids destructive phase changes.",
    commonMistakes: [
      "Saying coolant should heat up quickly.",
      "Confusing specific heat capacity with density."
    ],
    takeaway: "High specific heat capacity allows a coolant to remove large amounts of thermal energy while keeping temperature rises small.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { coolantCapacity: 4200 },
      controls: [],
      readouts: [
        { label: "Specific Heat c", expr: () => "HIGH (4200 J/(kg °C))" },
        { label: "Core Temp Control", expr: () => "Stable & Protected" }
      ],
      explanation: "High specific heat capacity keeps core temperatures stable under heavy reactor thermal loads."
    }
  },
  {
    globalId: "Q156",
    examId: "Q02797",
    paperRef: "5054/22/M/J/26 Q4(a)",
    pdfPage: 76,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Definition of Specific Heat Capacity (Standard Format)",
    paperType: "theory",
    marks: 2,
    questionText: `State what is meant by 'specific heat capacity'. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State the formal definition of specific heat capacity.",
    givenInfo: ["Physical quantity: Specific heat capacity."],
    toFind: "Definition including mass and temperature terms.",
    physicsConcepts: `Specific heat capacity c is defined as the thermal energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K).
Formula: c = E / (m * ΔT).`,
    equations: `c = \\frac{\\Delta E}{m \\Delta T} \\implies \\text{J/(kg }^\\circ\\text{C)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Energy and Temperature (Mark 1)",
        body: "The energy required to increase the temperature by 1 °C (or 1 K)."
      },
      {
        step: 2,
        title: "State Mass Requirement (Mark 2)",
        body: "Per unit mass / of 1 kg of the substance."
      }
    ],
    finalAnswer: "The energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K).",
    reasonablenessCheck: "Unit J/(kg °C) confirms energy per kg per degree.",
    commonMistakes: [
      "Omitting 1 kg (defining heat capacity instead of specific heat capacity).",
      "Mentioning phase changes."
    ],
    takeaway: "Specific heat capacity is the energy needed to raise the temperature of 1 kg of a substance by 1 °C.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Unit Mass", expr: () => "1.0 kg" },
        { label: "Unit Temp Rise", expr: () => "1.0 °C (1 K)" },
        { label: "Energy Required", expr: () => "c Joules" }
      ],
      explanation: "By definition, specific heat capacity relates 1 kg and 1 °C to thermal energy input."
    }
  },
  {
    globalId: "Q157",
    examId: "Q02799",
    paperRef: "5054/22/M/J/26 Q4(c)",
    pdfPage: 76,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Vacuum Insulation and Surface Emissivity in Travel Mugs",
    paperType: "theory",
    marks: 4,
    questionText: `Inside a travel mug, there are metal walls with a vacuum between the walls.
(i) Explain how the vacuum between the walls reduces the transfer of thermal energy. [2]
(ii) Suggest and explain the best colour and texture for the surface of the walls. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how a vacuum prevents conduction and convection, and recommend wall surface finish to minimize radiation.",
    givenInfo: [
      "Double-walled mug with vacuum between metal walls."
    ],
    toFind: "Vacuum explanation and surface color/texture recommendation.",
    physicsConcepts: `1. Vacuum insulation: Conduction requires vibrating particles, and convection requires circulating fluid. A vacuum contains no particles, completely stopping both conduction and convection.
2. Radiation reduction: Radiation can travel through a vacuum. Shiny, silvered, smooth surfaces are poor emitters and good reflectors of thermal radiation, minimizing radiative heat loss.`,
    equations: `\\text{Vacuum} \\implies \\text{No particles} \\implies \\text{Conduction = 0, Convection = 0}; \\quad \\text{Silvered} \\implies \\text{Emissivity } \\varepsilon \\to 0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Vacuum Explanation",
        body: "Conduction and convection require a medium / particles to transfer thermal energy. Because a vacuum contains no particles, conduction and convection cannot occur."
      },
      {
        step: 2,
        title: "Part (ii) Surface Properties",
        body: "Colour and texture: Shiny / silvered and smooth.\nExplanation: Shiny silvered surfaces are poor emitters of thermal radiation and good reflectors of infrared radiation."
      }
    ],
    finalAnswer: "(i) Conduction and convection require particles / a medium; a vacuum contains no particles, so neither process can occur;\n(ii) Shiny / silvered (and smooth): poor emitter and good reflector of thermal radiation.",
    reasonablenessCheck: "A vacuum eliminates two of three heat transfer modes, and silvered walls minimize the third.",
    commonMistakes: [
      "Claiming a vacuum stops thermal radiation (radiation travels freely through a vacuum).",
      "Suggesting black surfaces."
    ],
    takeaway: "A vacuum stops conduction and convection; silvered surfaces minimize thermal radiation.",
    simulation: {
      type: "vacuum_flask_heat_leak",
      defaultParams: { wallFinish: "silvered" },
      controls: [],
      readouts: [
        { label: "Conduction & Convection", expr: () => "0% (Blocked by Vacuum)" },
        { label: "Radiation Loss", expr: () => "MINIMAL (Silvered Walls)" }
      ],
      explanation: "A vacuum eliminates conduction and convection, while reflective silvered walls minimize radiation."
    }
  },
  {
    globalId: "Q158",
    examId: "Q01184",
    paperRef: "5054/31/M/J/22 Q1",
    pdfPage: 77,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Estimating Thermometer Volume",
    paperType: "practical",
    marks: 5,
    questionText: `In this experiment you will estimate the volume of a thermometer.
You are provided with:
- a thermometer
- a ruler.

(a) Measure and record to the nearest millimetre the length l of the thermometer, and the width w of the thermometer at the 50 °C mark. [1]
(b) Calculate the volume V of the thermometer using the equation:
V = (π / 4) * l * w²
where π = 3.14. [1]
(c) The volume calculated in (b) is an estimate of the volume of the thermometer.
Explain why:
(i) the volume calculation is only an estimate [1]
(ii) the volume calculation is close to the actual volume of the thermometer. [1]
(d) The thermometer contains a liquid.
Suggest one reason why it is difficult to determine the volume of this liquid. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Carry out cylindrical measurement of a thermometer, compute estimated volume, explain sources of approximation, and explain why measuring the liquid volume directly is difficult.",
    givenInfo: [
      "Standard laboratory thermometer treated as a cylinder of length l and diameter w.",
      "Formula: V = (π / 4) * l * w²",
      "π = 3.14"
    ],
    toFind: "Measured dimensions, volume in mm³, estimation explanations, and reason for difficulty in measuring liquid volume.",
    physicsConcepts: `1. Cylinder volume: V = Base Area * Length = (π * d² / 4) * l. Here diameter d is measured as width w.
2. Sources of approximation: The thermometer is not a perfect uniform cylinder (bulb is spherical or bulb shape differs from stem, top has a hanging ring, ends are rounded).
3. Closeness of estimate: The long stem makes up the vast majority of the total volume and is reasonably cylindrical with nearly uniform cross-section.
4. Liquid volume difficulty: The liquid occupies a narrow capillary bore of microscopic diameter, and the liquid in the bulb cannot be measured without knowing bulb wall thickness.`,
    equations: `V = \\frac{\\pi}{4} l w^2; \\quad l \\approx 300 \\text{ mm}, \\quad w \\approx 6.0 \\text{ mm} \\implies V \\approx 8500 \\text{ mm}^3`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Typical Measurements",
        body: "Measure length l to nearest mm (typically 280 mm to 310 mm, e.g. 300 mm).\nMeasure width w at 50 °C mark to nearest mm (typically 6 mm or 7 mm)."
      },
      {
        step: 2,
        title: "Part (b) Calculate Estimated Volume",
        body: "Using l = 300 mm and w = 6.0 mm:\nV = (3.14 / 4) * 300 * (6.0)² = 0.785 * 300 * 36 = 8478 mm³ ≈ 8500 mm³."
      },
      {
        step: 3,
        title: "Part (c)(i) Why it is an Estimate",
        body: "The thermometer is not a uniform cylinder (the bulb has a different shape/diameter, ends are rounded, or there is an expansion chamber/ring at the top)."
      },
      {
        step: 4,
        title: "Part (c)(ii) Why it is Close",
        body: "The stem accounts for most of the thermometer's length and is approximately cylindrical with nearly constant cross-section."
      },
      {
        step: 5,
        title: "Part (d) Difficulty Measuring Liquid Volume",
        body: "The capillary bore has an extremely small diameter / volume of liquid is very small / glass wall thickness of bulb and stem is unknown."
      }
    ],
    finalAnswer: "(a) l ≈ 300 mm, w ≈ 6 mm;\n(b) V ≈ 8500 mm³ (using formula V = (π/4)lw²);\n(c)(i) Bulb has different diameter / ends are rounded / not a perfect cylinder;\n(c)(ii) Most of the thermometer is a cylindrical stem of roughly constant diameter;\n(d) Capillary bore is extremely narrow / liquid volume is very small / wall thickness of glass bulb is unknown.",
    reasonablenessCheck: "8500 mm³ = 8.5 cm³, consistent with water displacement of a laboratory thermometer.",
    commonMistakes: [
      "Using cm instead of mm (formula specifies mm and mm³).",
      "Squaring length instead of width.",
      "Saying the thermometer has no volume."
    ],
    takeaway: "Modeling a thermometer as a cylinder gives a close approximation because the uniform stem dominates the total volume.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { lengthMm: 300, widthMm: 6.0 },
      controls: [
        { id: "lengthMm", name: "Stem Length l", min: 250, max: 350, step: 5, default: 300, unit: "mm" },
        { id: "widthMm", name: "Stem Width w", min: 4.0, max: 8.0, step: 0.5, default: 6.0, unit: "mm" }
      ],
      readouts: [
        { label: "Estimated Volume V", expr: (p) => (0.785 * p.lengthMm * p.widthMm * p.widthMm).toFixed(0) + " mm³" },
        { label: "Volume in cm³", expr: (p) => (0.785 * p.lengthMm * p.widthMm * p.widthMm / 1000).toFixed(1) + " cm³" }
      ],
      explanation: "Vary stem dimensions: volume scales linearly with length and with the square of the width."
    }
  },
  {
    globalId: "Q159",
    examId: "Q01185",
    paperRef: "5054/31/M/J/22 Q1(a)",
    pdfPage: 77,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Practical Dimension Measurement of Thermometer",
    paperType: "practical",
    marks: 1,
    questionText: `Measure and record to the nearest millimetre the length l of the thermometer, and the width w of the thermometer at the 50 °C mark.
l = .................... mm
w = .................... mm [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record physical dimensions of the laboratory thermometer to the nearest millimeter.",
    givenInfo: [
      "Standard laboratory thermometer and 30 cm ruler graduated in mm."
    ],
    toFind: "Length l and width w in mm.",
    physicsConcepts: `Direct length measurement:
- Align the zero mark of the ruler with one end of the thermometer to avoid zero error.
- View scale at 90° to avoid parallax error.
- Measure width at the designated 50 °C graduation mark.`,
    equations: `l \\in [250, 320] \\text{ mm}, \\quad w \\in [5, 8] \\text{ mm}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Length",
        body: "Measure full length from bulb base to top tip: typically 300 mm (acceptable range: 250 mm to 320 mm)."
      },
      {
        step: 2,
        title: "Record Width",
        body: "Measure external glass width at 50 °C mark: typically 6 mm (acceptable range: 5 mm to 8 mm)."
      }
    ],
    finalAnswer: "l = 300 mm; w = 6 mm (values to nearest mm within allowable physical ranges)",
    reasonablenessCheck: "Laboratory thermometers are typically ~30 cm long and 6 mm in diameter.",
    commonMistakes: [
      "Recording in centimeters without writing the unit correctly (e.g. 30 cm instead of 300 mm).",
      "Measuring only the scaled part rather than full thermometer length."
    ],
    takeaway: "Record measurements to the precision of the measuring instrument (nearest 1 mm for a standard ruler).",
    simulation: {
      type: "thermometer_design",
      defaultParams: { lengthMm: 300, widthMm: 6.0 },
      controls: [],
      readouts: [
        { label: "Measured Length l", expr: () => "300 mm" },
        { label: "Measured Width w", expr: () => "6 mm" }
      ],
      explanation: "Measurements recorded to the nearest millimeter using a standard rule."
    }
  },
  {
    globalId: "Q160",
    examId: "Q01186",
    paperRef: "5054/31/M/J/22 Q1(b)",
    pdfPage: 77,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Cylinder Volume Calculation of Thermometer",
    paperType: "practical",
    marks: 1,
    questionText: `Calculate the volume V of the thermometer using the equation:
V = (π / 4) * l * w²
where π = 3.14.
V = .................... mm³ [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Substitute measured dimensions l and w into the cylindrical volume formula.",
    givenInfo: [
      "l = 300 mm (from Q159)",
      "w = 6.0 mm (from Q159)",
      "π = 3.14",
      "Formula: V = (π / 4) * l * w²"
    ],
    toFind: "Volume V in mm³.",
    physicsConcepts: `Volume of cylinder:
V = Area * Length = (π * r²) * l = [π * (w/2)²] * l = (π / 4) * l * w².`,
    equations: `V = \\frac{3.14}{4} \\times 300 \\times (6.0)^2 = 0.785 \\times 300 \\times 36 = 8478 \\text{ mm}^3`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Width Squared",
        body: "w² = (6.0 mm)² = 36 mm²."
      },
      {
        step: 2,
        title: "Substitute into Formula",
        body: "V = (3.14 / 4) * 300 mm * 36 mm² = 0.785 * 10 800 = 8478 mm³."
      },
      {
        step: 3,
        title: "Round Appropriately",
        body: "V ≈ 8500 mm³ (or 8480 mm³)."
      }
    ],
    finalAnswer: "8500 mm³ (or 8478 mm³, consistent with candidate values of l and w)",
    reasonablenessCheck: "8478 mm³ = 8.48 cm³, which matches the physical volume of a 30 cm glass rod.",
    commonMistakes: [
      "Forgetting to square the width.",
      "Multiplying by 4 instead of dividing by 4."
    ],
    takeaway: "V = (π/4)lw² calculates cylinder volume using length and diameter.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { lengthMm: 300, widthMm: 6.0 },
      controls: [],
      readouts: [
        { label: "Formula", expr: () => "V = (π/4) * l * w²" },
        { label: "Calculated Volume", expr: () => "8478 mm³ (8.5 cm³)" }
      ],
      explanation: "Evaluating (3.14/4) * 300 * 6² yields 8478 mm³."
    }
  }
];