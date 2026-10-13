/**
 * Master Question Store: Batch 10 (Q131 to Q145)
 * Section 2.2: Thermal Properties and Temperature (Theory Paper 2)
 */

const QUESTIONS_BATCH_10 = [
  {
    globalId: "Q131",
    examId: "Q000210",
    paperRef: "5054/21/O/N/24 Q2",
    pdfPage: 65,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Mechanical Work to Thermal Energy Conversion Overview",
    paperType: "theory",
    marks: 8,
    questionText: `A student makes a ball from modelling clay. The ball has a mass of 0.20 kg.
She drops the ball from a height of 40 m above the ground.

(a) (i) Calculate the initial gravitational potential energy of the ball. [2]
(ii) Calculate the speed of the ball immediately before the ball hits the ground. Ignore the effect of air resistance. [3]

(b) When the ball hits the ground, it stops moving.
The kinetic energy of the ball is transferred to internal energy.
The temperature of the ball increases.
(i) The specific heat capacity of modelling clay is 1400 J/(kg °C).
Calculate the maximum possible temperature increase of the ball. Show your working. [2]
(ii) Suggest one reason why the actual temperature increase of the ball may be smaller than the value calculated in (b)(i). [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Analyze gravitational potential energy loss, terminal impact velocity, conversion of impact kinetic energy into internal thermal energy, and reasons for thermal losses to surroundings.",
    givenInfo: [
      "Mass of modelling clay ball m = 0.20 kg",
      "Drop height h = 40 m",
      "Gravitational field strength g = 10 N/kg (or 9.8 N/kg)",
      "Specific heat capacity of clay c = 1400 J/(kg °C)"
    ],
    toFind: "Initial GPE, impact speed, maximum temperature rise ΔT, and reason for lower actual ΔT.",
    physicsConcepts: `1. Gravitational potential energy: E_p = m * g * h.
2. Conservation of mechanical energy (free fall): E_k = (1/2) * m * v² = E_p, so v = √(2gh).
3. Inelastic impact: When the ball stops, its kinetic energy transfers into the internal energy store of the clay.
4. Thermal temperature rise: E = m * c * ΔT, so ΔT_max = E / (m * c) = (g * h) / c.
5. Real-world losses: Thermal energy transfers to the ground, work is done against air resistance during fall, or energy is dissipated as sound.`,
    equations: `E_p = m g h; \\quad v = \\sqrt{2 g h}; \\quad \\Delta T = \\frac{E_k}{m c} = \\frac{g h}{c}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a)(i) Initial Gravitational Potential Energy",
        body: "E_p = m * g * h = 0.20 kg * 10 N/kg * 40 m = 80 J (or 78.4 J using g = 9.8 N/kg)."
      },
      {
        step: 2,
        title: "Part (a)(ii) Impact Speed",
        body: "E_k = (1/2) m v² = 80 J.\nv² = (2 * 80) / 0.20 = 800 m²/s².\nv = √800 ≈ 28.3 m/s (or 28 m/s)."
      },
      {
        step: 3,
        title: "Part (b)(i) Maximum Temperature Increase",
        body: "Assume all 80 J transfers to internal energy of the ball:\nE = m * c * ΔT.\n80 J = 0.20 kg * 1400 J/(kg °C) * ΔT.\nΔT = 80 / (0.20 * 1400) = 80 / 280 = 0.2857 °C ≈ 0.29 °C."
      },
      {
        step: 4,
        title: "Part (b)(ii) Why Actual Rise is Smaller",
        body: "Some thermal energy is transferred into the ground / air resistance dissipates energy during fall / energy is transferred as sound on impact."
      }
    ],
    finalAnswer: "(a)(i) 80 J;\n(a)(ii) 28 m/s (or 28.3 m/s);\n(b)(i) 0.29 °C (or 0.286 °C);\n(b)(ii) Thermal energy is transferred to the ground / air resistance removes energy during fall / sound produced on impact.",
    reasonablenessCheck: "80 J / 280 J/°C yields a modest ~0.29 °C rise, showing why dropping soft clay does not make it noticeably hot to human touch.",
    commonMistakes: [
      "Forgetting to multiply by mass in E = mgh.",
      "Inverting the division when calculating ΔT (e.g. dividing 280 by 80).",
      "Stating energy is destroyed on impact."
    ],
    takeaway: "In completely inelastic collisions, mechanical energy converts to internal thermal energy (mgh = mcΔT), with some lost to the ground and surroundings.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { heightM: 40, massKg: 0.20, cClay: 1400 },
      controls: [
        { id: "heightM", name: "Drop Height", min: 10, max: 100, step: 10, default: 40, unit: "m" }
      ],
      readouts: [
        { label: "Impact GPE", expr: (p) => (p.massKg * 10 * p.heightM).toFixed(0) + " J" },
        { label: "Impact Velocity", expr: (p) => Math.sqrt(2 * 10 * p.heightM).toFixed(1) + " m/s" },
        { label: "Max Clay Temp Rise", expr: (p) => ((10 * p.heightM) / p.cClay).toFixed(3) + " °C" }
      ],
      explanation: "Dropping clay converts gravitational potential energy into internal thermal energy upon impact."
    }
  },
  {
    globalId: "Q132",
    examId: "Q000211",
    paperRef: "5054/21/O/N/24 Q2(a)(i)",
    pdfPage: 65,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Gravitational Potential Energy of Dropped Mass",
    paperType: "theory",
    marks: 2,
    questionText: `A student makes a ball from modelling clay. The ball has a mass of 0.20 kg.
She drops the ball from a height of 40 m above the ground.

Calculate the initial gravitational potential energy of the ball.
gravitational potential energy = .................... J [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the initial gravitational potential energy of the 0.20 kg clay ball at height 40 m.",
    givenInfo: [
      "Mass of ball m = 0.20 kg",
      "Height h = 40 m",
      "Gravitational field strength g = 10 N/kg (or 9.8 N/kg)"
    ],
    toFind: "Initial gravitational potential energy in Joules.",
    physicsConcepts: `Gravitational potential energy stored in an elevated mass:
E_p = m * g * h.`,
    equations: `E_p = m g h = 0.20 \\times 10 \\times 40 = 80 \\text{ J}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Formula",
        body: "E_p = m * g * h."
      },
      {
        step: 2,
        title: "Substitute and Evaluate",
        body: "E_p = 0.20 kg * 10 N/kg * 40 m = 80 J (or 0.20 * 9.8 * 40 = 78.4 J)."
      }
    ],
    finalAnswer: "80 J (or 78 J / 78.4 J)",
    reasonablenessCheck: "0.2 kg has a weight of 2 N. Lifting 2 N through 40 m requires 2 * 40 = 80 J of work.",
    commonMistakes: [
      "Dividing by height instead of multiplying.",
      "Omitting g in the calculation."
    ],
    takeaway: "Gravitational potential energy is E_p = mgh.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 0.20, heightM: 40 },
      controls: [],
      readouts: [
        { label: "Mass", expr: () => "0.20 kg" },
        { label: "Height", expr: () => "40 m" },
        { label: "GPE Store", expr: () => "80 J" }
      ],
      explanation: "A 0.20 kg object elevated to 40 m stores 80 J of gravitational potential energy."
    }
  },
  {
    globalId: "Q133",
    examId: "Q000215",
    paperRef: "5054/21/O/N/24 Q2(b)(i)",
    pdfPage: 65,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Impact Kinetic Energy to Temperature Rise",
    paperType: "theory",
    marks: 2,
    questionText: `When the ball hits the ground, it stops moving.
The kinetic energy of the ball is transferred to internal energy.
The temperature of the ball increases.
The specific heat capacity of modelling clay is 1400 J/(kg °C).

Calculate the maximum possible temperature increase of the ball. Show your working.
temperature increase = .................... °C [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the maximum temperature rise when 80 J of kinetic energy converts into internal energy in 0.20 kg of modelling clay.",
    givenInfo: [
      "Kinetic energy transferred E = 80 J (from Q132)",
      "Mass of ball m = 0.20 kg",
      "Specific heat capacity c = 1400 J/(kg °C)"
    ],
    toFind: "Temperature increase ΔT in °C.",
    physicsConcepts: `When mechanical kinetic energy is converted entirely into internal energy:
E = m * c * ΔT -> ΔT = E / (m * c).
Notice that m * c is the heat capacity of the ball.`,
    equations: `\\Delta T = \\frac{E}{m c} = \\frac{80}{0.20 \\times 1400} = \\frac{80}{280} = 0.2857^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Kinetic Energy to Thermal Energy",
        body: "Assuming 100% conversion of the 80 J of kinetic energy into internal thermal energy:\nE = 80 J."
      },
      {
        step: 2,
        title: "Rearrange Specific Heat Capacity Equation",
        body: "ΔT = E / (m * c)."
      },
      {
        step: 3,
        title: "Substitute Values and Calculate",
        body: "ΔT = 80 J / (0.20 kg * 1400 J/(kg °C)) = 80 / 280 = 0.2857 °C ≈ 0.29 °C (or 0.286 °C)."
      }
    ],
    finalAnswer: "0.29 °C (or 0.286 °C / 0.28 °C)",
    reasonablenessCheck: "Dividing 80 J by the ball's heat capacity of 280 J/°C gives ~0.29 °C, which matches energy conservation.",
    commonMistakes: [
      "Inverting the fraction to calculate 280 / 80 = 3.5 °C.",
      "Leaving mass in grams or dividing by 1400 only."
    ],
    takeaway: "Temperature rise from mechanical impact: ΔT = E / (mc).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { energyJ: 80, massKg: 0.20, cClay: 1400 },
      controls: [],
      readouts: [
        { label: "Energy Converted", expr: () => "80 J" },
        { label: "Heat Capacity C = mc", expr: () => "280 J/°C" },
        { label: "Temperature Rise ΔT", expr: () => "0.286 °C" }
      ],
      explanation: "Dissipating 80 J of impact energy across 280 J/°C raises the ball's temperature by ~0.29 °C."
    }
  },
  {
    globalId: "Q134",
    examId: "Q000216",
    paperRef: "5054/21/O/N/24 Q2(b)(ii)",
    pdfPage: 65,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Energy Dissipation Losses during Inelastic Impact",
    paperType: "theory",
    marks: 1,
    questionText: `Suggest one reason why the actual temperature increase of the ball may be smaller than the value calculated in (b)(i). [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State a physical reason why the measured temperature rise of the ball is less than the theoretical maximum.",
    givenInfo: [
      "Theoretical maximum assumed all 80 J stayed inside the ball."
    ],
    toFind: "One source of energy loss.",
    physicsConcepts: `In reality, not all gravitational potential energy converts to internal energy within the ball itself:
1. Some thermal energy transfers into the ground at impact.
2. Air resistance does work against the falling ball, dissipating energy to the surrounding air.
3. Some energy is transferred as sound on impact.
4. Energy is used in permanent plastic deformation of the ground or clay.`,
    equations: `E_{\\text{total}} = \\Delta U_{\\text{ball}} + Q_{\\text{ground}} + Q_{\\text{air}} + E_{\\text{sound}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Dissipation Paths",
        body: "Name any realistic pathway that transfers energy away from the ball's internal store."
      },
      {
        step: 2,
        title: "State Clear Valid Reason",
        body: "Thermal energy is transferred to the ground (or surroundings) / air resistance opposes motion during fall / energy is transferred as sound."
      }
    ],
    finalAnswer: "Thermal energy is transferred to the ground / surroundings (or work is done against air resistance / energy is transferred as sound).",
    reasonablenessCheck: "When dropping an object, you hear an impact sound and the floor absorbs part of the shock and heat.",
    commonMistakes: [
      "Stating energy is lost without naming where it went.",
      "Saying gravity is weaker near the ground."
    ],
    takeaway: "Impact energy divides between the ball, the ground, sound, and air resistance.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Energy to Ball", expr: () => "~70% (Warms Ball)" },
        { label: "Energy to Ground / Air", expr: () => "~30% (Losses)" }
      ],
      explanation: "Energy lost to the ground, air resistance, and sound reduces the actual temperature rise."
    }
  },
  {
    globalId: "Q135",
    examId: "Q03397",
    paperRef: "5054/22/M/J/25 Q8(c)",
    pdfPage: 68,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Nuclear Reactor Coolant Specific Heat Overview",
    paperType: "theory",
    marks: 3,
    questionText: `The specific heat capacity of the coolant is an important quantity in the design of the nuclear reactor.

(i) State what is meant by 'specific heat capacity'. [2]
(ii) Suggest and explain whether the coolant should have a large or a small specific heat capacity. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Define specific heat capacity and explain why nuclear reactor coolants require a high specific heat capacity.",
    givenInfo: [
      "Coolant circulates through a nuclear reactor core to transfer heat away from fuel rods."
    ],
    toFind: "Definition of specific heat capacity and justification of coolant choice.",
    physicsConcepts: `1. Specific heat capacity c: The energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K).
2. Coolant design: E = m * c * ΔT. A coolant with a large specific heat capacity absorbs a large amount of thermal energy per kilogram for only a small temperature rise. This keeps reactor operating temperatures moderate and reduces the required mass flow rate of coolant.`,
    equations: `c = \\frac{E}{m \\Delta T}; \\quad \\Delta T = \\frac{E}{m c} \\implies \\text{Large } c \\implies \\text{Small } \\Delta T \\text{ for huge heat transfer}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Define Specific Heat Capacity",
        body: "The energy required to increase the temperature of 1 kg of a substance by 1 °C (or 1 K)."
      },
      {
        step: 2,
        title: "Part (ii) Justify Large Specific Heat Capacity",
        body: "The coolant should have a large specific heat capacity so that it can absorb a large amount of thermal energy without an excessively large rise in its temperature (or so a smaller mass/volume of coolant can carry away the heat).",
      }
    ],
    finalAnswer: "(i) The energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K);\n(ii) Large specific heat capacity, so it can absorb a large amount of energy with only a small increase in temperature.",
    reasonablenessCheck: "Water and molten sodium are standard coolants because both possess exceptionally high specific heat capacities.",
    commonMistakes: [
      "Omitting 1 kg or 1 °C from the definition.",
      "Recommending small specific heat capacity thinking fast heating is beneficial."
    ],
    takeaway: "Coolants require large specific heat capacity to carry away large amounts of thermal energy without overheating.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { coolantCapacity: 4200, powerHeatMw: 50 },
      controls: [
        { id: "coolantCapacity", name: "Coolant Specific Heat", min: 1000, max: 5000, step: 500, default: 4200, unit: "J/(kg °C)" }
      ],
      readouts: [
        { label: "Coolant Temp Rise", expr: (p) => (50e6 / (250 * p.coolantCapacity)).toFixed(1) + " °C" },
        { label: "Heat Absorbed", expr: () => "50 MW (Constant)" }
      ],
      explanation: "A high specific heat capacity keeps coolant temperature rise manageable under heavy core heat loads."
    }
  },
  {
    globalId: "Q136",
    examId: "Q03399",
    paperRef: "5054/22/M/J/25 Q8(c)(i)",
    pdfPage: 68,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Formal Definition of Specific Heat Capacity",
    paperType: "theory",
    marks: 2,
    questionText: `State what is meant by 'specific heat capacity'. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Provide the Cambridge-standard definition of specific heat capacity.",
    givenInfo: ["Physical property: Specific heat capacity."],
    toFind: "Complete definition with required mass and temperature terms.",
    physicsConcepts: `Specific heat capacity c is the thermal energy needed to change the temperature of a unit mass (1 kg) of a substance by unit temperature (1 °C or 1 K).
Formula: c = ΔE / (m * ΔT).`,
    equations: `c = \\frac{\\Delta E}{m \\Delta T} \\implies 1 \\text{ kg raised by } 1^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Energy and Temperature Requirement (Mark 1)",
        body: "The energy required to increase the temperature by 1 °C (or 1 K)."
      },
      {
        step: 2,
        title: "State Mass Requirement (Mark 2)",
        body: "For 1 kg of the substance (or per unit mass)."
      }
    ],
    finalAnswer: "The energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K).",
    reasonablenessCheck: "The unit J/(kg °C) confirms the three components: energy (J), mass (kg), and temperature change (°C).",
    commonMistakes: [
      "Defining heat capacity instead (omitting 1 kg).",
      "Confusing with latent heat by mentioning changes of state."
    ],
    takeaway: "Specific heat capacity is the energy required to raise the temperature of 1 kg of a substance by 1 °C.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Mass Term", expr: () => "Exactly 1.0 kg" },
        { label: "Temp Term", expr: () => "Exactly 1.0 °C (1 K)" },
        { label: "Energy Required", expr: () => "c Joules" }
      ],
      explanation: "By definition, specific heat capacity relates 1 kg and 1 °C to thermal energy input."
    }
  },
  {
    globalId: "Q137",
    examId: "Q03400",
    paperRef: "5054/22/M/J/25 Q8(c)(ii)",
    pdfPage: 68,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Coolant Heat Capacity Optimization",
    paperType: "theory",
    marks: 1,
    questionText: `Suggest and explain whether the coolant should have a large or a small specific heat capacity. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Choose large or small specific heat capacity for a reactor coolant and justify the selection.",
    givenInfo: ["Application: Coolant in a nuclear reactor core."],
    toFind: "Choice (large vs small) and explanation.",
    physicsConcepts: `Rearranging the heat equation: ΔT = E / (m * c).
For a given rate of thermal energy removal E, a substance with a large c requires less temperature rise ΔT to carry the heat away, preventing the coolant from boiling and keeping reactor core temperatures stable.`,
    equations: `\\Delta T = \\frac{E}{m c} \\implies c \\uparrow \\implies \\Delta T \\downarrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Choice",
        body: "The coolant should have a large specific heat capacity."
      },
      {
        step: 2,
        title: "Explain Reasoning",
        body: "So it can absorb a large amount of energy with only a small temperature increase (or so less mass of coolant is needed to remove heat)."
      }
    ],
    finalAnswer: "Large specific heat capacity, so it can absorb a large amount of energy with only a small increase in temperature.",
    reasonablenessCheck: "Water has one of the highest known specific heat capacities (4200 J/(kg °C)), making it the most common nuclear and automotive coolant.",
    commonMistakes: [
      "Choosing small so it 'heats up fast' (which would cause rapid boiling and core overheating).",
      "Stating large without explaining the small temperature increase."
    ],
    takeaway: "Coolants require a high specific heat capacity to carry away large amounts of heat while keeping temperature rises small.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { cVal: 4200 },
      controls: [],
      readouts: [
        { label: "Coolant Selection", expr: () => "LARGE Specific Heat" },
        { label: "Core Protection", expr: () => "Absorbs large heat with small ΔT" }
      ],
      explanation: "A high specific heat capacity prevents rapid boiling by keeping temperature rises small."
    }
  },
  {
    globalId: "Q138",
    examId: "Q02620",
    paperRef: "5054/21/O/N/25 Q3",
    pdfPage: 70,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Ice Melting in Water Calorimetry Overview",
    paperType: "theory",
    marks: 7,
    questionText: `Fig. 3.1 shows a small block of ice at 0 °C and a plastic cup that contains 0.24 kg of water.
The initial temperature of the water in the cup is 22.0 °C.
The block of ice is dropped into the water.

(a) Describe, in terms of molecules, how energy is transferred by conduction from the water to the ice. [2]

(b) All of the ice melts and, at equilibrium, the temperature of the water in the cup is 6.0 °C.
(i) The specific heat capacity of water is 4200 J/(kg °C).
Calculate the energy transferred from the 0.24 kg of water as it cools. [2]
(ii) Describe how the molecular structure of water at 6.0 °C differs from the molecular structure of ice at 0 °C. [2]
(iii) The plastic cup containing water at 6.0 °C is left in a room where the room temperature is 22.0 °C. The temperature of the water in the cup rises slowly to room temperature.
When the water at 6.0 °C is left in a metal cup, the temperature of the water rises to room temperature more quickly.
State why the temperature of the water in the cup returns to room temperature more quickly when the cup is made from metal. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain conduction at the ice-water interface, calculate sensible heat lost by cooling water, contrast molecular structures of liquid water and ice, and compare thermal conductivities of metal versus plastic.",
    givenInfo: [
      "Water mass m = 0.24 kg",
      "Initial water temperature = 22.0 °C",
      "Ice initial temperature = 0 °C",
      "Final equilibrium temperature = 6.0 °C",
      "Specific heat capacity of water c = 4200 J/(kg °C)"
    ],
    toFind: "(a) Molecular conduction; (b)(i) Energy transferred from water; (b)(ii) Molecular structure comparison; (b)(iii) Metal vs plastic cup conduction reason.",
    physicsConcepts: `1. Interface conduction: Faster-moving water molecules collide with vibrating ice molecules at the boundary, transferring kinetic energy.
2. Sensible heat transfer: E = m * c * ΔT = 0.24 * 4200 * (22.0 - 6.0).
3. Phase structure differences: Liquid water has an irregular, disordered arrangement where molecules slide past each other; solid ice has a regular lattice arrangement held in fixed vibrating positions.
4. Conduction through walls: Metals contain delocalised free electrons, making them good thermal conductors that transfer heat from the room much faster than insulating plastic.`,
    equations: `E = m c \\Delta T; \\quad \\Delta T = 22.0 - 6.0 = 16.0^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Interface Conduction",
        body: "Molecules in the warmer water have greater kinetic energy and collide with molecules in the ice at the boundary, transferring kinetic energy to the ice molecules."
      },
      {
        step: 2,
        title: "Part (b)(i) Energy Transferred from Water",
        body: "ΔT = 22.0 °C - 6.0 °C = 16.0 °C.\nE = m * c * ΔT = 0.24 kg * 4200 J/(kg °C) * 16.0 °C = 16 128 J ≈ 16 000 J (or 16.1 kJ)."
      },
      {
        step: 3,
        title: "Part (b)(ii) Molecular Structure Differences",
        body: "In liquid water at 6.0 °C, molecules are in an irregular / disordered arrangement and can slide past each other. In ice at 0 °C, molecules are arranged in a regular pattern / fixed lattice and vibrate about fixed positions."
      },
      {
        step: 4,
        title: "Part (b)(iii) Metal vs Plastic Cup",
        body: "Metal is a good thermal conductor (or conducts heat much faster than plastic / has a higher thermal conductivity)."
      }
    ],
    finalAnswer: "(a) Energetic water molecules collide with ice molecules, transferring kinetic energy;\n(b)(i) 16 000 J (or 16 128 J / 16.1 kJ);\n(b)(ii) Water molecules are disordered and slide past each other; ice molecules are in a regular lattice and vibrate in fixed positions;\n(b)(iii) Metal is a good conductor of thermal energy (transfers heat faster than plastic).",
    reasonablenessCheck: "0.24 kg cooling by 16 °C releases 16.1 kJ, which is enough to melt ~0.048 kg of ice at 0 °C.",
    commonMistakes: [
      "Using 6.0 °C instead of the temperature change 16.0 °C.",
      "Saying ice molecules are completely motionless."
    ],
    takeaway: "Calorimetry connects energy release (mcΔT) with molecular rearrangement from a solid lattice to a disordered liquid.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { waterMassKg: 0.24, tempInitial: 22.0, tempFinal: 6.0 },
      controls: [
        { id: "waterMassKg", name: "Water Mass", min: 0.1, max: 0.5, step: 0.02, default: 0.24, unit: "kg" }
      ],
      readouts: [
        { label: "Cooling Span ΔT", expr: () => "16.0 °C" },
        { label: "Energy Released E", expr: (p) => (p.waterMassKg * 4200 * 16.0 / 1000).toFixed(1) + " kJ" }
      ],
      explanation: "Water cools from 22.0 °C to 6.0 °C, transferring 16.1 kJ into melting the ice."
    }
  },
  {
    globalId: "Q139",
    examId: "Q02622",
    paperRef: "5054/21/O/N/25 Q3(b)(i)",
    pdfPage: 70,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermal Energy Calculation for Cooling Water",
    paperType: "theory",
    marks: 2,
    questionText: `All of the ice melts and, at equilibrium, the temperature of the water in the cup is 6.0 °C.
The specific heat capacity of water is 4200 J/(kg °C) and the initial temperature of the 0.24 kg of water was 22.0 °C.

Calculate the energy transferred from the 0.24 kg of water as it cools.
energy = .................... J [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate heat energy released by 0.24 kg of water cooling from 22.0 °C down to 6.0 °C.",
    givenInfo: [
      "Mass of water m = 0.24 kg",
      "Initial temperature T_1 = 22.0 °C",
      "Final temperature T_2 = 6.0 °C",
      "Specific heat capacity c = 4200 J/(kg °C)"
    ],
    toFind: "Energy transferred E in Joules.",
    physicsConcepts: `Sensible thermal energy released during cooling:
E = m * c * ΔT,
where ΔT = T_initial - T_final = 22.0 °C - 6.0 °C = 16.0 °C.`,
    equations: `\\Delta T = 22.0 - 6.0 = 16.0^\\circ\\text{C}; \\quad E = m c \\Delta T = 0.24 \\times 4200 \\times 16.0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Temperature Change",
        body: "ΔT = 22.0 °C - 6.0 °C = 16.0 °C."
      },
      {
        step: 2,
        title: "Calculate Energy Released",
        body: "E = m * c * ΔT = 0.24 kg * 4200 J/(kg °C) * 16.0 °C = 16 128 J."
      },
      {
        step: 3,
        title: "Apply Significant Figures",
        body: "E ≈ 16 000 J (or 1.6 × 10⁴ J / 16.1 kJ)."
      }
    ],
    finalAnswer: "16 000 J (or 16 128 J / 16.1 kJ)",
    reasonablenessCheck: "0.24 * 4200 * 16 = 16 128 J. The value is consistent with realistic heat exchanges in a small cup.",
    commonMistakes: [
      "Using 22.0 °C or 6.0 °C directly instead of the temperature difference 16.0 °C.",
      "Miscalculating decimal arithmetic."
    ],
    takeaway: "E = mcΔT. Always compute ΔT = T_hot - T_cold before multiplying.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 0.24, tempC: 16.0 },
      controls: [],
      readouts: [
        { label: "Water Mass", expr: () => "0.24 kg" },
        { label: "Temp Drop ΔT", expr: () => "16.0 °C" },
        { label: "Energy Transferred", expr: () => "16 128 J" }
      ],
      explanation: "Water releases 16.1 kJ as it cools from 22.0 °C to 6.0 °C."
    }
  },
  {
    globalId: "Q140",
    examId: "Q02623",
    paperRef: "5054/21/O/N/25 Q3(b)(ii)",
    pdfPage: 71,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Structural Comparison: Liquid Water vs Solid Ice",
    paperType: "theory",
    marks: 2,
    questionText: `Describe how the molecular structure of water at 6.0 °C differs from the molecular structure of ice at 0 °C. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Contrast the molecular arrangement and motion of liquid water at 6.0 °C with solid ice at 0 °C.",
    givenInfo: [
      "Phase 1: Liquid water at 6.0 °C.",
      "Phase 2: Solid ice at 0 °C."
    ],
    toFind: "Two comparative structural differences.",
    physicsConcepts: `Key differences between liquid and solid states:
1. Arrangement: Ice molecules form a regular, repeating crystalline lattice; liquid water molecules have a disordered, random, non-regular arrangement.
2. Motion: Ice molecules vibrate about fixed lattice points; liquid water molecules can slide / move past one another.`,
    equations: `\\text{Ice: Regular lattice, fixed positions} \\iff \\text{Water: Disordered, molecules slide past each other}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compare Arrangement (Mark 1)",
        body: "In liquid water at 6.0 °C, the molecules are in an irregular / disordered arrangement, whereas in ice at 0 °C, they are arranged in a regular lattice pattern."
      },
      {
        step: 2,
        title: "Compare Motion (Mark 2)",
        body: "In liquid water, the molecules can slide past each other / flow, whereas in ice, the molecules vibrate about fixed positions."
      }
    ],
    finalAnswer: "In water at 6.0 °C, molecules are in an irregular / disordered arrangement and can slide past each other; in ice at 0 °C, molecules are in a regular lattice and vibrate about fixed positions.",
    reasonablenessCheck: "Ice maintains a rigid shape (fixed lattice); water flows to fill its container (sliding molecules).",
    commonMistakes: [
      "Saying molecules in water are far apart like a gas (water molecules remain in dense contact).",
      "Stating ice molecules do not move at all."
    ],
    takeaway: "Ice molecules are locked in a regular vibrating lattice; liquid water molecules are disordered and slide past each other.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "liquid", tempC: 6 },
      controls: [],
      readouts: [
        { label: "Ice (0 °C)", expr: () => "Regular Lattice, Fixed Vibrations" },
        { label: "Water (6 °C)", expr: () => "Disordered, Sliding Molecules" }
      ],
      explanation: "Compare the regular lattice of ice with the disordered, sliding molecules of liquid water."
    }
  },
  {
    globalId: "Q141",
    examId: "Q02625",
    paperRef: "5054/21/O/N/25 Q3(b)(iii)",
    pdfPage: 71,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Container Thermal Conductivity Comparison",
    paperType: "theory",
    marks: 1,
    questionText: `The plastic cup containing water at 6.0 °C is left in a room where the room temperature is 22.0 °C. The temperature of the water in the cup rises slowly to room temperature.
When the water at 6.0 °C is left in a metal cup, the temperature of the water rises to room temperature more quickly.
State why the temperature of the water in the cup returns to room temperature more quickly when the cup is made from metal. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why water in a metal cup warms back to room temperature faster than in a plastic cup.",
    givenInfo: [
      "Water is cold (6.0 °C); room is warm (22.0 °C).",
      "Metal cup warms water faster than plastic cup."
    ],
    toFind: "Property of metal causing faster temperature rise.",
    physicsConcepts: `Thermal conduction through container walls:
Rate of thermal conduction: dQ/dt = (k * A * ΔT) / d.
Metals have delocalised free electrons that transfer kinetic energy rapidly through the structure, making them good thermal conductors (high thermal conductivity k). Plastics have tightly bound electrons and are poor conductors (insulators). Therefore, heat conducts from the room into the water faster through metal.`,
    equations: `k_{\\text{metal}} \\gg k_{\\text{plastic}} \\implies \\left(\\frac{dQ}{dt}\\right)_{\\text{metal}} > \\left(\\frac{dQ}{dt}\\right)_{\\text{plastic}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Property Difference",
        body: "Metal is a good thermal conductor (or plastic is a poor conductor / thermal insulator)."
      },
      {
        step: 2,
        title: "Relate to Heat Transfer Rate",
        body: "Because metal conducts thermal energy faster, heat transfers from the warmer room air into the cold water at a greater rate."
      }
    ],
    finalAnswer: "Metal is a good conductor of thermal energy (or conducts heat much faster than plastic / has higher thermal conductivity).",
    reasonablenessCheck: "A cold soda can in metal feels cold immediately and warms up quickly; in polystyrene or plastic, it stays cold longer.",
    commonMistakes: [
      "Saying metal attracts heat.",
      "Saying metal has a lower temperature."
    ],
    takeaway: "Metals conduct thermal energy rapidly via free electrons, transferring heat from room air into cold water faster than plastic.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 22 },
      controls: [],
      readouts: [
        { label: "Metal Cup", expr: () => "Good Conductor (Fast Heat Inflow)" },
        { label: "Plastic Cup", expr: () => "Insulator (Slow Heat Inflow)" }
      ],
      explanation: "Delocalised electrons in the metal wall transfer heat into the cold water much faster than insulating plastic."
    }
  },
  {
    globalId: "Q142",
    examId: "Q02169",
    paperRef: "5054/22/O/N/25 Q4",
    pdfPage: 73,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Solid Wax Heating Curve Overview",
    paperType: "theory",
    marks: 8,
    questionText: `A large test-tube contains a thermometer and some solid wax at a temperature of 21 °C.
At time t = 0, the test-tube is partially immersed in a beaker of boiling water and the temperature of the wax is recorded for the next 600 s.
Fig. 4.1 shows the variation of the temperature of the wax with time t:
The temperature rises from 21 °C at t = 0 to 48 °C at t = 220 s, reaching a horizontal plateau at 63 °C between t = 420 s and t = 600 s.
The mass of wax is 0.040 kg and its specific heat capacity is 2100 J/(kg °C).

Solve the subparts examining melting point, internal energy store increase, molecular motion, and latent forces. [8]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Analyze the heating curve of solid wax, including identifying melting point, calculating internal energy increase, describing molecular motion changes, and explaining intermolecular bond breaking.",
    givenInfo: [
      "Mass of solid wax m = 0.040 kg",
      "Initial temperature = 21 °C",
      "Specific heat capacity of wax c = 2100 J/(kg °C)",
      "Heating curve shows T = 48 °C at t = 220 s, and a flat plateau at 63 °C from t = 420 s to 600 s"
    ],
    toFind: "Complete analysis of melting point, internal energy calculation, and particle interactions.",
    physicsConcepts: `1. Internal energy increase: ΔU = m * c * ΔT.
2. Kinetic particle model: Increasing internal energy below the melting point increases molecular vibrational speed and amplitude.
3. Latent heat plateau: At 63 °C, the curve becomes horizontal because energy is absorbed to overcome attractive intermolecular forces, changing state without temperature rise.`,
    equations: `\\Delta U = m c \\Delta T; \\quad T_{\\text{melt}} = 63^\\circ\\text{C}; \\quad \\Delta Q = \\text{Work done against intermolecular attractions}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Problem Context",
        body: "This master record coordinates the subparts covering heating curve readings, sensible heat calculations, and molecular explanations (addressed individually in Q143 and Q144)."
      }
    ],
    finalAnswer: "Full subpart solutions detailed in Q143 and Q144 below.",
    reasonablenessCheck: "Solid paraffin wax melts between 60 °C and 65 °C, consistent with the 63 °C plateau.",
    commonMistakes: [
      "Misreading the temperature at t = 220 s from Fig. 4.1.",
      "Confusing sensible heating with the melting plateau."
    ],
    takeaway: "Heating curves show single-phase warming (mcΔT) followed by a constant-temperature phase change plateau.",
    simulation: {
      type: "heating_curve",
      defaultParams: { tempC: 63, massKg: 0.040 },
      controls: [
        { id: "tempC", name: "Wax Temperature", min: 21, max: 80, step: 2, default: 48, unit: "°C" }
      ],
      readouts: [
        { label: "Melting Point", expr: () => "63 °C" },
        { label: "Current Phase", expr: (p) => p.tempC < 63 ? "SOLID" : "MELTING / LIQUID" }
      ],
      explanation: "Heating curve shows solid wax warming from 21 °C to its 63 °C melting plateau."
    }
  },
  {
    globalId: "Q143",
    examId: "Q02171",
    paperRef: "5054/22/O/N/25 Q4(b)(i)",
    pdfPage: 74,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Internal Energy Store Calculation from Graph",
    paperType: "theory",
    marks: 3,
    questionText: `The mass of the wax in the test-tube is 0.040 kg and its temperature at time t = 0 is 21 °C.
The specific heat capacity of wax is 2100 J/(kg °C).
Using Fig. 4.1, determine the increase in the energy in the internal energy store of the wax between t = 0 and t = 220 s. Show your working.
increase in energy in internal energy store = .................... J [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read temperature at t = 220 s from Fig. 4.1 and calculate the increase in internal energy of 0.040 kg of wax.",
    givenInfo: [
      "Mass of wax m = 0.040 kg",
      "Initial temperature at t = 0 is T_1 = 21 °C",
      "Specific heat capacity c = 2100 J/(kg °C)",
      "From Fig. 4.1, temperature at t = 220 s is T_2 = 48 °C (accepting 47 °C to 49 °C)"
    ],
    toFind: "Increase in internal energy ΔU in Joules.",
    physicsConcepts: `For temperature rise without change of state:
Increase in internal energy store:
ΔU = m * c * ΔT,
where ΔT = T(220 s) - T(0 s).`,
    equations: `\\Delta T = 48 - 21 = 27^\\circ\\text{C}; \\quad \\Delta U = m c \\Delta T = 0.040 \\times 2100 \\times 27`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Read Temperature at t = 220 s from Graph",
        body: "Locate t = 220 s on the horizontal axis of Fig. 4.1 and read the vertical temperature axis: T = 48 °C (accept 47 °C to 49 °C)."
      },
      {
        step: 2,
        title: "Calculate Temperature Rise",
        body: "ΔT = 48 °C - 21 °C = 27 °C (range: 26 °C to 28 °C)."
      },
      {
        step: 3,
        title: "Calculate Increase in Internal Energy",
        body: "ΔU = m * c * ΔT = 0.040 kg * 2100 J/(kg °C) * 27 °C = 2268 J."
      },
      {
        step: 4,
        title: "Apply Significant Figures",
        body: "ΔU ≈ 2300 J (or 2270 J / 2.3 × 10³ J)."
      }
    ],
    finalAnswer: "2300 J (or 2268 J / 2270 J, within range 2180 J – 2350 J)",
    reasonablenessCheck: "0.04 kg * 2100 * 27 = 2268 J. A 2.3 kJ input matches warming a small sample of solid wax over several minutes.",
    commonMistakes: [
      "Misreading the graph temperature at 220 s as 40 °C or 50 °C.",
      "Using the final melting temperature 63 °C instead of reading at t = 220 s."
    ],
    takeaway: "ΔU = mcΔT. Read the temperature at the specified time directly from the graph to find ΔT.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 0.040, tempC: 27 },
      controls: [],
      readouts: [
        { label: "Temp at t = 220 s", expr: () => "48.0 °C" },
        { label: "ΔT Rise", expr: () => "27.0 °C" },
        { label: "Internal Energy ΔU", expr: () => "2268 J" }
      ],
      explanation: "Warming 0.040 kg of wax by 27 °C adds 2268 J to its internal energy store."
    }
  },
  {
    globalId: "Q144",
    examId: "Q02172",
    paperRef: "5054/22/O/N/25 Q4(b)(ii)",
    pdfPage: 74,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Molecular Motion in Warming Solid Wax",
    paperType: "theory",
    marks: 2,
    questionText: `Describe what happens to the motion of the molecules of the solid wax as the internal energy of the wax increases. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe how molecular motion changes as solid wax is heated below its melting point.",
    givenInfo: [
      "Wax remains solid as internal energy increases."
    ],
    toFind: "Description of molecular motion changes.",
    physicsConcepts: `In a solid, molecules are locked in fixed positions and vibrate.
As internal energy (and temperature) increases:
1. The average kinetic energy of the molecules increases, meaning they vibrate faster / move more rapidly.
2. The amplitude of their vibrations increases, causing them to push slightly further apart.`,
    equations: `T \\propto \\overline{E_k} = \\frac{1}{2} m \\omega^2 A^2 \\implies \\text{Vibrate faster and with greater amplitude}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Change in Speed / Frequency (Mark 1)",
        body: "The molecules vibrate faster / have greater kinetic energy / their speed of vibration increases."
      },
      {
        step: 2,
        title: "State Change in Amplitude (Mark 2)",
        body: "The molecules vibrate with greater amplitude / vibrate more vigorously about their fixed positions."
      }
    ],
    finalAnswer: "The molecules vibrate faster / gain kinetic energy; they vibrate with greater amplitude (or vibrate more vigorously about fixed positions).",
    reasonablenessCheck: "Heating a solid increases vibrational energy until vibrations become energetic enough to break the lattice at the melting point.",
    commonMistakes: [
      "Stating molecules start sliding past each other (that only happens after melting).",
      "Stating molecules expand in size."
    ],
    takeaway: "In a solid, heating causes molecules to vibrate faster and with greater amplitude about their fixed positions.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "solid", tempC: 48 },
      controls: [
        { id: "tempC", name: "Solid Temp", min: 20, max: 60, step: 5, default: 48, unit: "°C" }
      ],
      readouts: [
        { label: "Vibration Speed", expr: (p) => (p.tempC * 8 + 100) + " a.u." },
        { label: "Vibration Amplitude", expr: (p) => (p.tempC * 0.05 + 1.0).toFixed(1) + " nm" }
      ],
      explanation: "Heating solid wax increases both the speed and the amplitude of its molecular vibrations."
    }
  },
  {
    globalId: "Q145",
    examId: "Q02796",
    paperRef: "5054/22/M/J/26 Q4",
    pdfPage: 76,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Travel Mug Thermal Energy Transfer & Definition",
    paperType: "theory",
    marks: 6,
    questionText: `Figure 4.1 shows a travel mug used to keep a liquid hot. Inside the mug, there are metal walls with a vacuum between the walls.
The mug contains 250 g of water, initially at 90 °C. Over 6.0 hours, the water cools to 75 °C.
The specific heat capacity of water is 4.2 J/(g °C).

(a) State what is meant by 'specific heat capacity'. [2]

(b) Calculate the thermal energy transferred from the water over 6.0 hours.
thermal energy = .................... J [2]

(c) (i) Explain how the vacuum between the walls reduces the transfer of thermal energy. [2]
(ii) Suggest and explain the best colour and texture for the surface of the walls. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Define specific heat capacity, calculate thermal energy lost by cooling water in a travel mug, explain how a vacuum stops conduction and convection, and recommend optimal surface finish to minimize radiation.",
    givenInfo: [
      "Mass of water m = 250 g",
      "Initial temperature T_1 = 90 °C",
      "Final temperature T_2 = 75 °C",
      "Cooling duration = 6.0 hours",
      "Specific heat capacity of water c = 4.2 J/(g °C)"
    ],
    toFind: "Definition of c, thermal energy transferred, vacuum explanation, and surface color/texture recommendation.",
    physicsConcepts: `1. Definition of specific heat capacity: Energy required to raise the temperature of 1 kg of a substance by 1 °C.
2. Sensible heat lost: E = m * c * ΔT = 250 g * 4.2 J/(g °C) * (90 - 75) °C.
3. Vacuum insulation: Conduction and convection both require a material medium (particles) to transfer energy. A vacuum contains no particles, completely stopping conduction and convection.
4. Radiation reduction: Shiny silvered surfaces are poor emitters of thermal radiation and good reflectors, minimizing radiative heat transfer across the vacuum.`,
    equations: `E = m c \\Delta T = 250 \\times 4.2 \\times 15 = 15\\,750 \\text{ J}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Definition of Specific Heat Capacity",
        body: "The energy required to increase the temperature of 1 kg of a substance by 1 °C (or 1 K)."
      },
      {
        step: 2,
        title: "Part (b) Calculate Thermal Energy Transferred",
        body: "ΔT = 90 °C - 75 °C = 15 °C.\nE = m * c * ΔT = 250 g * 4.2 J/(g °C) * 15 °C = 15 750 J ≈ 16 000 J (or 1.6 × 10⁴ J / 15.8 kJ)."
      },
      {
        step: 3,
        title: "Part (c)(i) Vacuum Function",
        body: "Conduction and convection require a medium / particles to transfer thermal energy. A vacuum has no particles / matter, so conduction and convection cannot occur."
      },
      {
        step: 4,
        title: "Part (c)(ii) Best Colour and Texture",
        body: "Shiny / silvered (and smooth). Shiny silvered surfaces are poor emitters of thermal radiation and good reflectors of infrared radiation."
      }
    ],
    finalAnswer: "(a) Energy required to raise the temperature of 1 kg of a substance by 1 °C;\n(b) 16 000 J (or 15 750 J / 15.8 kJ);\n(c)(i) Conduction and convection require particles / a medium; a vacuum has no particles so neither can occur;\n(c)(ii) Shiny / silvered: poor emitter and good reflector of thermal radiation.",
    reasonablenessCheck: "250 g cooling by only 15 °C over 6 hours confirms the effectiveness of vacuum and silvered surfaces in minimizing heat loss.",
    commonMistakes: [
      "Saying a vacuum stops thermal radiation (radiation travels freely through a vacuum).",
      "Recommending black surfaces for the mug walls.",
      "Using hours in E = mcΔT."
    ],
    takeaway: "A vacuum stops conduction and convection; shiny silvered surfaces minimize thermal radiation.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { waterMassG: 250, tempDrop: 15 },
      controls: [
        { id: "tempDrop", name: "Temperature Drop", min: 5, max: 30, step: 5, default: 15, unit: "°C" }
      ],
      readouts: [
        { label: "Cooling Span", expr: () => "90 °C ➔ 75 °C" },
        { label: "Heat Lost", expr: (p) => (250 * 4.2 * p.tempDrop / 1000).toFixed(1) + " kJ" }
      ],
      explanation: "Water cooling through 15 °C transfers 15.75 kJ through the mug walls over 6.0 hours."
    }
  }
];