/**
 * Master Question Store: Batch 7 (Q086 to Q100)
 * Section 2.2: Thermal Properties and Temperature (Theory Paper 2)
 */

const QUESTIONS_BATCH_7 = [
  {
    globalId: "Q086",
    examId: "Q02680",
    paperRef: "5054/21/O/N/20 Q5",
    pdfPage: 45,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermocouple Structure and Operating Principles",
    paperType: "theory",
    marks: 6,
    questionText: `Fig. 5.1 shows some parts of a thermocouple thermometer that is being used to determine the temperature of a liquid.
The diagram shows wire X in an ice and water mixture, connected via wire Y to the hot liquid, with wire Z leading to the output terminals.

(a) Suggest an appropriate material for:
X: ....................
Y: ....................
Z: .................... [1]

(b) All types of thermometer require the measurement of a physical property that varies with temperature in order to obtain a value for the temperature.
(i) State the physical property of a thermocouple thermometer that is used in this way. [1]
(ii) Discuss what is meant by the term linearity when applied to a thermocouple thermometer. [2]

(c) State two advantages of a thermocouple thermometer over a liquid-in-glass thermometer.
1. ........................................................................................................................
2. ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify suitable materials for thermocouple wires X, Y, and Z; state the thermometric property; explain linearity; and list two practical advantages over liquid-in-glass thermometers.",
    givenInfo: [
      "Thermocouple circuit with two junctions (cold junction in ice-water, hot junction in liquid).",
      "Connecting wires X, Y, Z."
    ],
    toFind: "Wire materials, thermometric property, linearity definition, and two advantages.",
    physicsConcepts: `A thermocouple relies on the Seebeck thermoelectric effect: when two junctions of two dissimilar metal wires are maintained at different temperatures, an electromotive force (e.m.f.) is generated between the free terminals.
1. Materials: Wires X and Z must be the same metal (e.g., copper), while central wire Y must be a different metal (e.g., constantan or iron).
2. Thermometric property: Electromotive force (e.m.f.) or potential difference / voltage.
3. Linearity: The e.m.f. produced changes by an equal amount for each 1 °C change in temperature (straight-line graph of e.m.f. against temperature).
4. Advantages: Very fast response time (tiny junction mass), ability to measure very high temperatures, and compact size allowing measurement at a specific point.`,
    equations: `V_{\\text{out}} = S \\cdot (T_{\\text{hot}} - T_{\\text{cold}}) \\implies V \\propto \\Delta T \\quad (\\text{if linear})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Wire Materials",
        body: "To form a functional thermocouple, two different metals must join at the two junctions. X and Z must be the same metal, and Y must be a different metal. Example: X = copper, Y = constantan (or iron), Z = copper."
      },
      {
        step: 2,
        title: "Part (b)(i) Physical Property",
        body: "The measured thermometric property is the electromotive force (e.m.f.) or voltage generated across the junctions."
      },
      {
        step: 3,
        title: "Part (b)(ii) Linearity Discussion",
        body: "Linearity means that the e.m.f. is directly proportional to the temperature difference; the change in voltage per degree Celsius remains constant across the entire scale, producing a straight line on a voltage-temperature calibration graph."
      },
      {
        step: 4,
        title: "Part (c) Two Advantages",
        body: "1. It responds very quickly to temperature changes (has a very small thermal capacity).\n2. It can measure very high temperatures (up to 1200 °C or higher) and can measure temperature at a very small localized point."
      }
    ],
    finalAnswer: "(a) X = copper, Y = constantan, Z = copper;\n(b)(i) electromotive force (e.m.f.) / voltage;\n(b)(ii) e.m.f. changes by an equal amount for each degree change in temperature (or e.m.f. is directly proportional to temperature difference);\n(c) 1. responds rapidly to temperature changes; 2. can measure very high temperatures / measures localized small regions.",
    reasonablenessCheck: "Using identical metals for all three wires would result in zero net voltage. A dissimilar central wire Y is physically required.",
    commonMistakes: [
      "Naming three completely different metals for X, Y, and Z.",
      "Stating electrical resistance as the thermometric property of a thermocouple (confusing it with a resistance thermometer or thermistor).",
      "Stating that linearity means measuring in a straight line physically."
    ],
    takeaway: "A thermocouple uses two junctions of dissimilar metals; its thermometric property is voltage (e.m.f.), and its small thermal capacity provides rapid response.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 80, probeType: "thermocouple" },
      controls: [
        { id: "tempC", name: "Liquid Temperature", min: 0, max: 400, step: 20, default: 80, unit: "°C" }
      ],
      readouts: [
        { label: "Thermoelectric e.m.f.", expr: (p) => (p.tempC * 0.041).toFixed(2) + " mV" },
        { label: "Response Lag", expr: () => "0.02 s (Instantaneous)" }
      ],
      explanation: "Vary the hot liquid temperature: the voltage generated across the copper-constantan junctions increases linearly at ~41 µV/°C."
    }
  },
  {
    globalId: "Q087",
    examId: "Q02681",
    paperRef: "5054/21/O/N/20 Q5(a)",
    pdfPage: 45,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermocouple Wire Selection",
    paperType: "theory",
    marks: 1,
    questionText: `Fig. 5.1 shows some parts of a thermocouple thermometer that is being used to determine the temperature of a liquid.
Suggest an appropriate material for:
X: ....................
Y: ....................
Z: .................... [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Name compatible conductor metals for wires X, Y, and Z in a standard thermocouple circuit.",
    givenInfo: [
      "X and Z connect to the meter output terminals.",
      "Y connects the reference cold junction to the test junction."
    ],
    toFind: "Valid metal choices for X, Y, and Z.",
    physicsConcepts: `A thermocouple requires two junctions between two dissimilar metals. Wires X and Z must be of the same metal so that no parasitic thermoelectric voltages are introduced at the output connections. Wire Y must be a different metal.`,
    equations: `\\text{Metal}(X) = \\text{Metal}(Z) \\neq \\text{Metal}(Y)`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Circuit Requirements",
        body: "Outer leads X and Z connect to the measuring instrument and must be made of identical metal (standard copper). Central bridge wire Y must be an alloy or metal with a different Seebeck coefficient (such as constantan, iron, or alumel)."
      },
      {
        step: 2,
        title: "Formulate Solution",
        body: "X: copper; Y: constantan; Z: copper (or X: iron, Y: constantan, Z: iron)."
      }
    ],
    finalAnswer: "X: copper, Y: constantan, Z: copper",
    reasonablenessCheck: "Copper and constantan form a Type T thermocouple, which is standard in low-to-medium temperature measurement.",
    commonMistakes: [
      "Naming an insulator like plastic or glass.",
      "Making X and Z different metals."
    ],
    takeaway: "Wires X and Z must be the same metal; central wire Y must be a different metal.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { probeType: "thermocouple" },
      controls: [],
      readouts: [
        { label: "Wire Pair X & Z", expr: () => "Copper" },
        { label: "Wire Y", expr: () => "Constantan" }
      ],
      explanation: "Circuit schematic showing dissimilar wire junctions generating thermoelectric voltage."
    }
  },
  {
    globalId: "Q088",
    examId: "Q02682",
    paperRef: "5054/21/O/N/20 Q5(b)(i)",
    pdfPage: 45,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermometric Property of Thermocouple",
    paperType: "theory",
    marks: 1,
    questionText: `All types of thermometer require the measurement of a physical property that varies with temperature in order to obtain a value for the temperature.
State the physical property of a thermocouple thermometer that is used in this way. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify the thermometric physical property of a thermocouple.",
    givenInfo: ["Device: Thermocouple thermometer."],
    toFind: "Physical property that varies with temperature.",
    physicsConcepts: `Every thermometer measures a thermometric property that changes with temperature:
- Liquid-in-glass: Volume of liquid.
- Resistance thermometer: Electrical resistance.
- Thermocouple: Thermoelectric electromotive force (e.m.f.) or potential difference (voltage).`,
    equations: `\\mathcal{E} = f(\\Delta T) \\implies \\text{e.m.f. / voltage}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Thermocouple Output",
        body: "When the two junctions are at different temperatures, a potential difference or electromotive force (e.m.f.) is developed across the leads."
      }
    ],
    finalAnswer: "electromotive force (e.m.f.) / voltage / potential difference",
    reasonablenessCheck: "The reading is displayed on a millivoltmeter calibrated in degrees.",
    commonMistakes: [
      "Writing 'resistance' (which belongs to thermistors or resistance temperature detectors).",
      "Writing 'current' (current depends on external meter circuit resistance)."
    ],
    takeaway: "The thermometric property of a thermocouple is electromotive force (e.m.f.) / voltage.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 100 },
      controls: [],
      readouts: [
        { label: "Measured Property", expr: () => "Electromotive Force (e.m.f.)" },
        { label: "Output Unit", expr: () => "Millivolts (mV)" }
      ],
      explanation: "Voltage generated across the junctions is directly proportional to temperature difference."
    }
  },
  {
    globalId: "Q089",
    examId: "Q02683",
    paperRef: "5054/21/O/N/20 Q5(b)(ii)",
    pdfPage: 45,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Linearity of Thermometers",
    paperType: "theory",
    marks: 2,
    questionText: `Discuss what is meant by the term linearity when applied to a thermocouple thermometer. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Define linearity in the context of thermocouple calibration.",
    givenInfo: ["A thermocouple thermometer."],
    toFind: "Explanation of linearity.",
    physicsConcepts: `Linearity means the change in the thermometric property is directly proportional to the change in temperature across its operating range. For a thermocouple, this means equal temperature increments produce equal increments in e.m.f., resulting in a straight-line calibration graph with constant gradient.`,
    equations: `\\frac{\\Delta \\mathcal{E}}{\\Delta T} = \\text{constant} \\implies \\mathcal{E} = k \\cdot \\Delta T`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Proportionality",
        body: "The change in e.m.f. is directly proportional to the change in temperature."
      },
      {
        step: 2,
        title: "Describe Graph or Increments",
        body: "Equal changes in temperature produce equal changes in e.m.f. (or a graph of e.m.f. plotted against temperature is a straight line)."
      }
    ],
    finalAnswer: "The e.m.f. changes by an equal amount for each degree change in temperature (or e.m.f. is directly proportional to temperature / graph of e.m.f. against temperature is a straight line with constant gradient).",
    reasonablenessCheck: "A linear scale allows uniform division spacing with no crowding at either end.",
    commonMistakes: [
      "Stating that the thermocouple itself is physically straight.",
      "Saying temperature increases at a constant speed over time."
    ],
    takeaway: "Linearity means equal changes in temperature produce equal changes in the measured physical property.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 50 },
      controls: [
        { id: "tempC", name: "Temperature Input", min: 0, max: 200, step: 20, default: 50, unit: "°C" }
      ],
      readouts: [
        { label: "d(e.m.f.) / dT", expr: () => "0.040 mV/°C (Constant)" },
        { label: "Graph Linearity", expr: () => "STRICTLY LINEAR" }
      ],
      explanation: "A linear calibration curve has a constant slope, meaning sensitivity does not drift across the range."
    }
  },
  {
    globalId: "Q090",
    examId: "Q02684",
    paperRef: "5054/21/O/N/20 Q5(c)",
    pdfPage: 45,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermocouple Advantages over Liquid Thermometers",
    paperType: "theory",
    marks: 2,
    questionText: `State two advantages of a thermocouple thermometer over a liquid-in-glass thermometer.
1. ........................................................................................................................
2. ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "List two operational advantages of thermocouples over liquid-in-glass thermometers.",
    givenInfo: ["Comparison: Thermocouple vs Liquid-in-glass."],
    toFind: "Two distinct advantages.",
    physicsConcepts: `Comparative engineering advantages:
1. Fast response time: Tiny wire junction mass has low thermal capacity, reaching equilibrium in milliseconds.
2. High temperature limit: Metallic wires withstand temperatures above 1000 °C, where mercury (bp 357 °C) and alcohol (bp 78 °C) boil.
3. Localized sensing: The tiny junction can measure temperature at a precise point or inside small cavities.
4. Electrical output: Can connect directly to data loggers and automated control systems.`,
    equations: `\\tau_{\\text{thermocouple}} \\ll \\tau_{\\text{glass}}; \\quad T_{\\text{max}} > 1000^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Select Two Independent Advantages",
        body: "1. Rapid response time to temperature changes.\n2. Ability to measure very high temperatures."
      }
    ],
    finalAnswer: "1. It responds very quickly to temperature changes (has a small thermal capacity).\n2. It can measure very high temperatures (or can measure temperature at a point / can be read remotely / can be logged electronically).",
    reasonablenessCheck: "Liquid-in-glass thermometers have fragile glass, large thermal lag, and low boiling points.",
    commonMistakes: [
      "Stating 'it is cheaper' (thermocouples require digital readout meters and are generally more expensive).",
      "Stating 'it is always more accurate' without qualification."
    ],
    takeaway: "Thermocouples excel in speed of response, high temperature limits, and localized point measurement.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { probeType: "thermocouple" },
      controls: [],
      readouts: [
        { label: "Advantage 1", expr: () => "Rapid Response Time" },
        { label: "Advantage 2", expr: () => "Measures High Temperatures (>1000 °C)" }
      ],
      explanation: "Thermocouples are suited to industrial furnaces and rapid thermal cycling."
    }
  },
  {
    globalId: "Q091",
    examId: "Q02692",
    paperRef: "5054/21/O/N/20 Q7(c)",
    pdfPage: 46,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Gravitational Collapse & Stellar Thermal Equilibrium",
    paperType: "theory",
    marks: 4,
    questionText: `A star forms when the temperature of a large cloud of gas in space increases as the cloud collapses inwards.

(i) State the energy transfers that occur as the cloud collapses. [2]
(ii) The temperature increase starts a nuclear fusion reaction.
Explain why the temperature of the star eventually reaches a steady value. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State energy transformations during gravitational collapse of a protostellar cloud and explain how energy balance stabilizes stellar temperature.",
    givenInfo: [
      "Gas cloud collapses inward under gravity.",
      "Temperature rises until nuclear fusion begins.",
      "Star reaches a steady equilibrium temperature."
    ],
    toFind: "Energy transfers during collapse and physical mechanism of steady temperature.",
    physicsConcepts: `1. Gravitational collapse: Gas particles fall toward the center, converting gravitational potential energy into kinetic energy. Frequent collisions between particles convert kinetic energy into thermal energy, raising temperature.
2. Thermal equilibrium: Steady temperature requires conservation of energy: rate of energy generated by core nuclear fusion must equal the rate of energy radiated into space as electromagnetic radiation.`,
    equations: `\\Delta E_{\\text{GPE}} \\to \\Delta E_k \\to \\Delta E_{\\text{thermal}}; \\quad P_{\\text{fusion}} = P_{\\text{radiated}} \\implies \\frac{dT}{dt} = 0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Energy Transfers",
        body: "Gravitational potential energy of the gas cloud is transferred into kinetic energy of gas particles, which is then transferred into thermal energy / internal energy stores as particles collide."
      },
      {
        step: 2,
        title: "Part (ii) Equilibrium Explanation",
        body: "The star reaches thermal equilibrium when the rate at which energy is generated by nuclear fusion equals the rate at which energy is radiated away into space from its surface."
      }
    ],
    finalAnswer: "(i) Gravitational potential energy is transferred to kinetic energy and then to thermal energy (internal energy).\n(ii) The rate of energy produced by nuclear fusion equals the rate of energy radiated / emitted into space.",
    reasonablenessCheck: "If energy production exceeded radiation, temperature would rise; if radiation exceeded production, it would cool. A steady temperature requires balanced rates.",
    commonMistakes: [
      "Omitting gravitational potential energy as the initial energy store.",
      "Saying nuclear fusion runs out of fuel immediately."
    ],
    takeaway: "Steady temperature occurs when power generated by fusion equals power radiated into space.",
    simulation: {
      type: "stellar_fusion_balance",
      defaultParams: { fusionPower: 3.8e26, radPower: 3.8e26 },
      controls: [
        { id: "fusionPower", name: "Core Fusion Power", min: 1.0, max: 6.0, step: 0.5, default: 3.8, unit: "×10²⁶ W" }
      ],
      readouts: [
        { label: "Radiated Power", expr: (p) => p.fusionPower.toFixed(1) + " × 10²⁶ W" },
        { label: "Thermal State", expr: () => "EQUILIBRIUM (Steady Temp)" }
      ],
      explanation: "Balancing fusion energy release with surface thermal radiation stabilizes core temperature."
    }
  },
  {
    globalId: "Q092",
    examId: "Q02693",
    paperRef: "5054/21/O/N/20 Q7(c)(i)",
    pdfPage: 46,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Protostellar Energy Transformation",
    paperType: "theory",
    marks: 2,
    questionText: `A star forms when the temperature of a large cloud of gas in space increases as the cloud collapses inwards.
State the energy transfers that occur as the cloud collapses. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State the sequence of energy transfers occurring during protostellar gravitational collapse.",
    givenInfo: ["Gas cloud collapses inward under gravity, increasing temperature."],
    toFind: "Energy transfer sequence.",
    physicsConcepts: `As gas particles are pulled closer by mutual gravitational attraction, their gravitational potential energy decreases, transferring to kinetic energy (particles move faster inward). Particle collisions randomize this motion, transferring kinetic energy to thermal energy (internal energy).`,
    equations: `E_{\\text{GPE}} \\xrightarrow{\\text{gravity}} E_k \\xrightarrow{\\text{collisions}} E_{\\text{thermal}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Initial Store",
        body: "Gravitational potential energy (GPE)."
      },
      {
        step: 2,
        title: "Identify Intermediate and Final Stores",
        body: "GPE is transferred to kinetic energy, which converts to thermal energy (internal energy) through collisions."
      }
    ],
    finalAnswer: "Gravitational potential energy is transferred to kinetic energy and thermal energy (internal energy).",
    reasonablenessCheck: "Falling objects convert GPE to KE; inelastic collisions convert KE to heat.",
    commonMistakes: [
      "Stating nuclear energy is transferred before fusion starts.",
      "Omitting GPE."
    ],
    takeaway: "Gravitational collapse converts gravitational potential energy into kinetic energy, then into thermal energy through particle collisions.",
    simulation: {
      type: "stellar_fusion_balance",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Initial Store", expr: () => "Gravitational Potential Energy" },
        { label: "Final Store", expr: () => "Thermal / Internal Energy" }
      ],
      explanation: "Inward gravitational fall accelerates gas particles; collisions convert kinetic energy into thermal energy."
    }
  },
  {
    globalId: "Q093",
    examId: "Q02694",
    paperRef: "5054/21/O/N/20 Q7(c)(ii)",
    pdfPage: 46,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Stellar Thermal Equilibrium Mechanism",
    paperType: "theory",
    marks: 2,
    questionText: `The temperature increase starts a nuclear fusion reaction.
Explain why the temperature of the star eventually reaches a steady value. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how power balance leads to a steady star temperature.",
    givenInfo: ["Nuclear fusion produces thermal energy inside the star."],
    toFind: "Explanation for the stabilization of temperature.",
    physicsConcepts: `A star reaches thermal equilibrium when the rate of internal energy production from nuclear fusion equals the rate of thermal energy emitted from the photosphere as electromagnetic radiation into space.`,
    equations: `P_{\\text{in}} = P_{\\text{out}} \\implies \\frac{dE}{dt} = 0 \\implies T = \\text{constant}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Energy Input and Output",
        body: "Input: energy released by nuclear fusion in the core. Output: radiation emitted into space from the surface."
      },
      {
        step: 2,
        title: "State Condition for Steady Temperature",
        body: "Temperature stabilizes when rate of energy generation equals rate of energy radiated into space."
      }
    ],
    finalAnswer: "The rate at which thermal energy is released by nuclear fusion equals the rate at which thermal energy is radiated / emitted into space.",
    reasonablenessCheck: "A kettle boiling with heat input matching steam loss stabilizes at 100 °C; stars similarly stabilize when power in equals power out.",
    commonMistakes: [
      "Claiming fusion reactions stop.",
      "Saying space absorbs all heat so temperature drops to absolute zero."
    ],
    takeaway: "Steady temperature requires a dynamic balance: rate of energy generation must equal rate of energy loss.",
    simulation: {
      type: "stellar_fusion_balance",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Power Balance", expr: () => "Rate In = Rate Out" },
        { label: "Net dT/dt", expr: () => "0.0 °C/s (Stable)" }
      ],
      explanation: "Dynamic equilibrium maintains constant surface and core temperatures."
    }
  },
  {
    globalId: "Q094",
    examId: "Q02703",
    paperRef: "5054/21/O/N/20 Q9",
    pdfPage: 47,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Oil Freezing Curve Overview",
    paperType: "theory",
    marks: 15,
    questionText: `A small glass measuring cylinder of oil is placed inside a freezer where the temperature is -18 °C.
Fig. 9.1 shows how the temperature of the oil varies with time t:
It takes 700 s for the temperature to decrease from 20 °C to 10 °C, but 1900 s to decrease from 0 °C to -10 °C.
A horizontal plateau occurs at -10 °C between t = 3600 s and t = 10800 s.
There is 45 g of oil in the cylinder, and the specific latent heat of fusion of the oil is 5.7 × 10⁴ J/kg.

Solve parts (a) to (e) based on this experiment. [15]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Analyze the complete cooling and freezing process of oil in a freezer across multiple subsections.",
    givenInfo: [
      "Freezer ambient temperature = -18 °C",
      "Cooling times: 20 °C to 10 °C in 700 s; 0 °C to -10 °C in 1900 s",
      "Freezing plateau at -10 °C from 3600 s to 10800 s",
      "Mass of oil m = 45 g = 0.045 kg",
      "Specific latent heat of fusion L_f = 5.7 × 10⁴ J/kg"
    ],
    toFind: "Complete analysis of cooling rates, particle behavior, latent heat, and state heat capacities.",
    physicsConcepts: `1. Cooling rate depends on temperature difference with surroundings: (dT/dt) proportional to (T - T_freezer).
2. Phase change plateau occurs at constant temperature while latent heat is released: E = m * L_f.
3. Heat transfer rate during plateau: P = E / Delta t.
4. Slope comparison: dT/dt = P / (m * c), so gradient is inversely proportional to specific heat capacity.`,
    equations: `E = m L_f, \\quad P = \\frac{E}{\\Delta t}, \\quad \\frac{\\Delta T}{\\Delta t} \\propto (T - T_{\\text{env}}), \\quad c = \\frac{P}{m (dT/dt)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Problem Parts",
        body: "This master record coordinates subparts (a) through (e), including Newton's cooling rate, liquid volume contraction, latent heat, and comparative specific heat capacity."
      }
    ],
    finalAnswer: "Full solution broken down in subparts Q095 through Q100 below.",
    reasonablenessCheck: "Consistent with standard calorimetric cooling curves.",
    commonMistakes: [
      "Using mass in grams instead of kilograms in latent heat equations.",
      "Misreading graph axes."
    ],
    takeaway: "Cooling curves combine Newton's law of cooling, constant-temperature latent heat plateaus, and phase-dependent specific heat capacities.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { plateauTemp: -10, freezerTemp: -18 },
      controls: [
        { id: "freezerTemp", name: "Freezer Temp", min: -25, max: -12, step: 1, default: -18, unit: "°C" }
      ],
      readouts: [
        { label: "Freezing Point", expr: () => "-10 °C" },
        { label: "Plateau Duration", expr: () => "7200 s (2.0 h)" }
      ],
      explanation: "Complete cooling curve showing initial liquid cooling, the horizontal freezing plateau, and solid cooling."
    }
  },
  {
    globalId: "Q095",
    examId: "Q02704",
    paperRef: "5054/21/O/N/20 Q9(a)",
    pdfPage: 47,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Rate of Cooling and Temperature Difference",
    paperType: "theory",
    marks: 3,
    questionText: `Fig. 9.1 shows that it takes 700 s for the temperature to decrease from 20 °C to 10 °C but that it takes 1900 s to decrease from 0 °C to -10 °C.
Suggest why these times are different. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why cooling through a 10 °C interval takes longer at lower temperatures than at higher temperatures.",
    givenInfo: [
      "Freezer temperature = -18 °C",
      "Time to cool from 20 °C to 10 °C = 700 s (Delta T = 10 °C)",
      "Time to cool from 0 °C to -10 °C = 1900 s (Delta T = 10 °C)"
    ],
    toFind: "Explanation for the difference in cooling durations.",
    physicsConcepts: `The rate of thermal energy transfer by conduction, convection, and radiation depends directly on the temperature difference between the object and its surroundings:
Rate of heat loss proportional to (T_oil - T_freezer).
- Between 20 °C and 10 °C, the average temperature difference is [15 - (-18)] = 33 °C.
- Between 0 °C and -10 °C, the average temperature difference is [-5 - (-18)] = 13 °C.
Because the temperature difference is larger initially, heat transfer is faster, so the temperature drops more quickly.`,
    equations: `\\frac{dQ}{dt} \\propto (T - T_{\\text{surroundings}}) \\implies \\text{Higher } \\Delta T_{\\text{diff}} \\implies \\text{Faster cooling} \\implies \\text{Shorter time}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Governing Principle (Mark 1)",
        body: "The rate of thermal energy transfer (cooling rate) depends on the temperature difference between the oil and the freezer surroundings."
      },
      {
        step: 2,
        title: "Compare Temperature Differences (Mark 2)",
        body: "The temperature difference between the oil and the freezer is larger when cooling from 20 °C to 10 °C than when cooling from 0 °C to -10 °C."
      },
      {
        step: 3,
        title: "Relate to Time Taken (Mark 3)",
        body: "Because thermal energy is transferred at a greater rate initially, it takes less time (700 s) to drop by 10 °C than when the temperature difference is small (1900 s)."
      }
    ],
    finalAnswer: "The rate of thermal energy transfer depends on the temperature difference between the oil and the freezer; the temperature difference between the oil and the freezer is greater between 20 °C and 10 °C than between 0 °C and -10 °C; therefore, the rate of cooling is greater initially, so it takes less time.",
    reasonablenessCheck: "A hot drink cools down rapidly at first, then cools more slowly as its temperature approaches room temperature.",
    commonMistakes: [
      "Assuming cooling rate is constant over time.",
      "Failing to mention the freezer temperature (-18 °C) or the temperature difference.",
      "Saying the oil has different heat capacity in the liquid state."
    ],
    takeaway: "Cooling rate is proportional to the temperature difference between an object and its surroundings.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { freezerTemp: -18 },
      controls: [],
      readouts: [
        { label: "ΔT Diff (20 to 10 °C)", expr: () => "33 °C (Fast Cooling)" },
        { label: "ΔT Diff (0 to -10 °C)", expr: () => "13 °C (Slow Cooling)" }
      ],
      explanation: "Initial cooling rate is faster because of the larger temperature gap between the oil and the freezer."
    }
  },
  {
    globalId: "Q096",
    examId: "Q02705",
    paperRef: "5054/21/O/N/20 Q9(b)",
    pdfPage: 47,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Molecular Motion and Liquid Contraction on Cooling",
    paperType: "theory",
    marks: 3,
    questionText: `Explain what happens to the molecules of the oil and what happens to the level of the oil in the glass measuring cylinder as the temperature decreases from 20 °C to 0 °C. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe changes in molecular motion and oil volume/level as the liquid cools from 20 °C to 0 °C.",
    givenInfo: [
      "Oil cools from 20 °C to 0 °C in a measuring cylinder.",
      "Remains in liquid state throughout this range."
    ],
    toFind: "Effects on oil molecules and liquid level.",
    physicsConcepts: `As temperature falls:
1. Average kinetic energy of the molecules decreases, so they move more slowly.
2. Intermolecular attractive forces pull them closer together, reducing their average separation.
3. This reduction in molecular spacing causes the bulk volume to contract, lowering the liquid level in the cylinder.`,
    equations: `T \\downarrow \\implies \\bar{E}_k \\downarrow \\implies \\text{Molecules move slower and closer} \\implies V \\downarrow \\implies \\text{Level falls}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Describe Molecular Speed (Mark 1)",
        body: "The molecules lose kinetic energy and move more slowly."
      },
      {
        step: 2,
        title: "Describe Molecular Spacing (Mark 2)",
        body: "The average separation between molecules decreases (they move closer together)."
      },
      {
        step: 3,
        title: "Describe Macroscopic Level (Mark 3)",
        body: "Because the oil contracts, the level of oil in the measuring cylinder falls / decreases."
      }
    ],
    finalAnswer: "The molecules move more slowly / lose kinetic energy; the molecules move closer together / their average separation decreases; the level of the oil falls / decreases.",
    reasonablenessCheck: "Liquids contract when cooled, lowering their meniscus level in a graduated cylinder.",
    commonMistakes: [
      "Stating the molecules themselves shrink in size.",
      "Saying the oil expands on cooling (water expands near 0 °C, but typical liquids contract continuously)."
    ],
    takeaway: "Cooling reduces molecular kinetic energy and spacing, causing thermal contraction and a lower liquid level.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "liquid", tempC: 10 },
      controls: [
        { id: "tempC", name: "Oil Temperature", min: 0, max: 20, step: 2, default: 10, unit: "°C" }
      ],
      readouts: [
        { label: "Molecular Speed", expr: (p) => (200 + p.tempC * 5) + " m/s" },
        { label: "Liquid Level in Cylinder", expr: (p) => (45.0 - (20 - p.tempC) * 0.08).toFixed(2) + " cm³" }
      ],
      explanation: "Cooling from 20 °C to 0 °C slows the molecules down and draws them closer together, causing the meniscus to drop."
    }
  },
  {
    globalId: "Q097",
    examId: "Q02706",
    paperRef: "5054/21/O/N/20 Q9(c)(ii)",
    pdfPage: 47,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Molecular Explanation of Freezing Plateau",
    paperType: "theory",
    marks: 3,
    questionText: `Explain, in terms of molecules, why the temperature of the oil does not change between t = 3600 s and t = 10800 s. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why temperature remains constant during the freezing plateau using kinetic particle theory.",
    givenInfo: [
      "Between t = 3600 s and 10800 s, temperature is constant at -10 °C.",
      "Oil is freezing inside the freezer."
    ],
    toFind: "Molecular explanation for zero temperature change during freezing.",
    physicsConcepts: `During solidification/freezing:
1. Molecules lock into fixed positions as intermolecular bonds form.
2. Forming bonds releases latent heat of fusion (intermolecular potential energy decreases).
3. This released thermal energy is transferred to the freezer, compensating for heat loss and keeping the average kinetic energy of the molecules constant.
4. Because temperature is proportional to average kinetic energy, temperature remains constant.`,
    equations: `\\Delta U = \\Delta E_p + \\Delta E_k \\quad (\\Delta E_k = 0 \\implies \\Delta T = 0)`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Phase Change (Mark 1)",
        body: "The oil is solidifying / freezing / changing state from liquid to solid."
      },
      {
        step: 2,
        title: "Describe Bond Formation and Latent Heat (Mark 2)",
        body: "Bonds form between the molecules (intermolecular forces pull them into fixed positions), which releases latent heat of fusion / reduces potential energy."
      },
      {
        step: 3,
        title: "Relate to Kinetic Energy and Temperature (Mark 3)",
        body: "The average kinetic energy of the molecules does not change while bonds are forming, so the temperature remains constant."
      }
    ],
    finalAnswer: "The oil is freezing / changing state; bonds form between molecules / potential energy decreases, releasing latent heat; the average kinetic energy of the molecules remains constant, so temperature does not change.",
    reasonablenessCheck: "Releasing latent heat maintains constant temperature until every molecule locks into the solid structure.",
    commonMistakes: [
      "Stating that no heat is transferred during the plateau.",
      "Saying molecules move faster during freezing."
    ],
    takeaway: "During freezing, latent heat released by bond formation balances cooling losses, keeping molecular kinetic energy and temperature constant.",
    simulation: {
      type: "bond_energy_phase",
      defaultParams: { energySupplied: 50 },
      controls: [],
      readouts: [
        { label: "Average Kinetic Energy", expr: () => "CONSTANT (No ΔT)" },
        { label: "Latent Heat Flow", expr: () => "Released as bonds form" }
      ],
      explanation: "Bonds form between molecules, releasing latent heat to the cold freezer while temperature remains constant at -10 °C."
    }
  },
  {
    globalId: "Q098",
    examId: "Q02708",
    paperRef: "5054/21/O/N/20 Q9(d)(i)",
    pdfPage: 47,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Latent Heat Energy Calculation",
    paperType: "theory",
    marks: 2,
    questionText: `There is 45 g of oil in the glass measuring cylinder and the specific latent heat of fusion (melting) of the oil is 5.7 × 10⁴ J/kg.
Calculate the energy transferred from the oil between t = 3600 s and t = 10800 s.
energy = .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate total thermal energy transferred during the freezing plateau using mass and specific latent heat of fusion.",
    givenInfo: [
      "Mass of oil m = 45 g",
      "Specific latent heat of fusion L_f = 5.7 × 10⁴ J/kg",
      "Time interval: t = 3600 s to 10800 s (the freezing plateau)"
    ],
    toFind: "Energy transferred E in Joules.",
    physicsConcepts: `During the freezing plateau, all 45 g of oil changes state from liquid to solid.
Energy transferred: E = m * L_f,
where mass must be converted to kilograms: m = 45 g = 0.045 kg.`,
    equations: `m = \\frac{45}{1000} = 0.045 \\text{ kg}, \\quad E = m L_f = 0.045 \\times 5.7 \\times 10^4 \\text{ J}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Mass to Kilograms",
        body: "m = 45 g / 1000 = 0.045 kg."
      },
      {
        step: 2,
        title: "Apply Latent Heat Equation",
        body: "E = m * L_f = 0.045 kg * (5.7 * 10⁴ J/kg) = 2565 J."
      },
      {
        step: 3,
        title: "State with Significant Figures",
        body: "2565 J rounds to 2600 J (or 2.6 × 10³ J) to 2 significant figures."
      }
    ],
    finalAnswer: "2600 J (or 2565 J / 2.6 × 10³ J)",
    reasonablenessCheck: "0.045 kg * 57000 J/kg = 2565 J. Approximately 2.6 kJ is physically consistent with freezing a small quantity of oil.",
    commonMistakes: [
      "Leaving mass in grams: 45 * 5.7 * 10⁴ = 2.57 × 10⁶ J (a factor of 1000 too large).",
      "Attempting to use E = mcΔT with ΔT = 0."
    ],
    takeaway: "E = mL applies across phase transitions. Always convert mass to kilograms first.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { massKg: 0.045, latentHeatJkg: 57000 },
      controls: [
        { id: "massKg", name: "Oil Mass", min: 0.02, max: 0.10, step: 0.005, default: 0.045, unit: "kg" }
      ],
      readouts: [
        { label: "Mass in kg", expr: (p) => p.massKg.toFixed(3) + " kg" },
        { label: "Latent Energy E = mL", expr: (p) => (p.massKg * 57000).toFixed(0) + " J" }
      ],
      explanation: "Multiplying mass in kg by specific latent heat gives the total energy transferred during the plateau."
    }
  },
  {
    globalId: "Q099",
    examId: "Q02709",
    paperRef: "5054/21/O/N/20 Q9(d)(ii)",
    pdfPage: 47,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Rate of Energy Transfer Calculation",
    paperType: "theory",
    marks: 1,
    questionText: `Calculate the average rate at which energy is transferred from the oil between t = 3600 s and t = 10800 s.
rate = .................... [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the average power (rate of energy transfer) during the freezing plateau.",
    givenInfo: [
      "Energy transferred E = 2565 J (or 2600 J)",
      "Start time = 3600 s",
      "End time = 10800 s"
    ],
    toFind: "Rate of energy transfer in W (or J/s).",
    physicsConcepts: `Rate of energy transfer is power:
P = E / Delta t,
where Delta t is the duration of the time interval in seconds.`,
    equations: `\\Delta t = 10800 - 3600 = 7200 \\text{ s}, \\quad P = \\frac{E}{\\Delta t} = \\frac{2565}{7200}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Time Duration",
        body: "Delta t = 10800 s - 3600 s = 7200 s."
      },
      {
        step: 2,
        title: "Calculate Average Rate",
        body: "Rate P = E / Delta t = 2565 J / 7200 s = 0.35625 W ≈ 0.36 W (or 0.36 J/s). (If using 2600 J: 2600 / 7200 = 0.361 W)."
      }
    ],
    finalAnswer: "0.36 W (or 0.36 J/s / 0.356 W)",
    reasonablenessCheck: "2565 J transferred over 2 hours (7200 s) corresponds to a low heat loss rate of roughly one-third of a watt through small glass walls.",
    commonMistakes: [
      "Using the full time 10800 s instead of the interval 7200 s.",
      "Omitting the unit or writing Joules instead of Watts / J/s."
    ],
    takeaway: "Rate of energy transfer = Energy / Time (P = E / Δt), measured in Watts (W) or J/s.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { totalJoules: 2565, durationS: 7200 },
      controls: [],
      readouts: [
        { label: "Plateau Duration", expr: () => "7200 s (2.0 hours)" },
        { label: "Average Power P", expr: () => "0.36 W (J/s)" }
      ],
      explanation: "Dividing total latent heat by the 7200 s duration yields an average cooling power of 0.36 W."
    }
  },
  {
    globalId: "Q100",
    examId: "Q02710",
    paperRef: "5054/21/O/N/20 Q9(e)",
    pdfPage: 47,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Comparing Specific Heat Capacities from Graph Slopes",
    paperType: "theory",
    marks: 2,
    questionText: `The graph in Fig. 9.1 is steeper before the horizontal section than it is after.
Use this observation to compare the specific heat capacity of oil in the liquid and solid states and explain your reasoning. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Compare the specific heat capacity of liquid oil to solid oil based on the slopes before and after the freezing plateau.",
    givenInfo: [
      "Slope before plateau (liquid cooling) is steeper than slope after plateau (solid cooling).",
      "Mass m is constant.",
      "Cooling rates (rates of energy transfer) are comparable."
    ],
    toFind: "Comparison of specific heat capacity (liquid vs solid) with reasoning.",
    physicsConcepts: `Rate of temperature change:
dT/dt = P / (m * c), where P is rate of heat loss and c is specific heat capacity.
Gradient of the curve = dT/dt.
A steeper gradient means temperature falls faster for a given rate of heat loss.
Because the gradient is steeper in the liquid state, the liquid has a smaller specific heat capacity than the solid (c_liquid < c_solid).`,
    equations: `\\frac{\\Delta T}{\\Delta t} = \\frac{P}{m c} \\implies c \\propto \\frac{1}{\\text{gradient}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Slope to Specific Heat Capacity",
        body: "Gradient represents the rate of temperature decrease (dT/dt). At comparable rates of heat loss, a steeper gradient indicates that less thermal energy is required to produce a 1 °C temperature change."
      },
      {
        step: 2,
        title: "Compare States",
        body: "Because the graph is steeper before the plateau (in the liquid state), liquid oil cools faster per unit of energy lost. Therefore, the specific heat capacity of liquid oil is less than that of solid oil."
      }
    ],
    finalAnswer: "The specific heat capacity of liquid oil is less / smaller than that of solid oil, because the steeper gradient before the plateau means temperature falls more rapidly for a given rate of energy loss (c is inversely proportional to gradient).",
    reasonablenessCheck: "Steeper slope = lower heat capacity; shallower slope = higher heat capacity.",
    commonMistakes: [
      "Claiming liquid has higher heat capacity because the slope is steeper.",
      "Forgetting to link the gradient to the formula dT/dt = P/(mc)."
    ],
    takeaway: "On a cooling curve, a steeper slope indicates a smaller specific heat capacity (gradient ∝ 1/c).",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { slopeLiquid: 1.8, slopeSolid: 0.9 },
      controls: [],
      readouts: [
        { label: "Liquid State Slope", expr: () => "STEEPER (Lower c)" },
        { label: "Solid State Slope", expr: () => "SHALLOWER (Higher c)" }
      ],
      explanation: "Comparing the slopes before and after the plateau shows that specific heat capacity is inversely related to curve gradient."
    }
  }
];