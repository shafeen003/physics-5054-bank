/**
 * Master Question Store: Batch 17 (Q236 to Q250)
 * Section 2.2: Thermal Properties and Temperature (Paper 4 ATP Part 2)
 */

const QUESTIONS_BATCH_17 = [
  {
    globalId: "Q236",
    examId: "Q03060",
    paperRef: "5054/42/M/J/22 Q2(a)",
    pdfPage: 120,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Thermometer Scale Reading at t = 0",
    paperType: "atp",
    marks: 1,
    questionText: `A student investigates the cooling of hot water in an uninsulated glass beaker.
Fig. 2.1 shows the thermometer placed in the hot water at time t = 0.
The scale between 70 °C and 80 °C has 10 equal divisions, and the liquid meniscus reaches 6 small divisions above 70 °C.

Record the temperature θ_0 of the hot water at time t = 0.
θ_0 = .................... °C [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read the initial temperature of hot water from the analogue thermometer scale shown in Fig. 2.1.",
    givenInfo: [
      "Major scale marks at 70 °C and 80 °C.",
      "10 subdivisions per 10 °C -> 1.0 °C per division.",
      "Meniscus is 6 divisions above 70 °C."
    ],
    toFind: "Initial temperature θ_0 in °C.",
    physicsConcepts: `Analogue thermometer scale reading:
1. Scale division interval:
$$\\text{Value per division} = \\frac{80 - 70}{10} = 1.0^\\circ\\text{C}$$
2. Meniscus position:
$$\\theta_0 = 70.0 + (6 \\times 1.0) = 76.0^\\circ\\text{C}$$`,
    equations: `\\theta_0 = 70.0 + 6.0 = 76.0^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Determine Scale Subdivision Resolution",
        body: "The interval between 70 °C and 80 °C is 10 °C, divided into 10 equal parts. Each mark represents 1.0 °C."
      },
      {
        step: 2,
        title: "Read Liquid Meniscus Level",
        body: "The meniscus sits on the 6th division above 70 °C: 70 + 6 = 76 °C (or 76.0 °C)."
      }
    ],
    finalAnswer: "76 °C (or 76.0 °C)",
    reasonablenessCheck: "Six divisions past 70 °C on a 1 °C-per-division stem gives exactly 76 °C.",
    commonMistakes: [
      "Miscounting divisions and writing 75 °C or 77 °C.",
      "Reading downwards from 80 °C and writing 74 °C."
    ],
    takeaway: "Always check the value of one scale division before reading: 70 + 6 = 76 °C.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 76.0 },
      controls: [],
      readouts: [
        { label: "Base Mark", expr: () => "70 °C" },
        { label: "Subdivisions Added", expr: () => "+6 divisions (6 °C)" },
        { label: "Initial θ_0", expr: () => "76.0 °C" }
      ],
      explanation: "Scale shows 76.0 °C at 6 divisions above the 70 °C graduation."
    }
  },
  {
    globalId: "Q237",
    examId: "Q03061",
    paperRef: "5054/42/M/J/22 Q2(b)",
    pdfPage: 120,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Cooling Rate Calculation Over 180 s",
    paperType: "atp",
    marks: 2,
    questionText: `The student allows the water to cool for 180 s.
At time t = 180 s, the temperature θ_180 of the water is 64.0 °C.
Calculate the average rate of cooling R of the water during the 180 s.
Use the equation:
R = (θ_0 - θ_180) / t
where t = 180 s. State the unit of your answer.
R = .................... unit .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the average cooling rate R in °C/s over 180 s using θ_0 = 76.0 °C and θ_180 = 64.0 °C, and state the unit.",
    givenInfo: [
      "Initial temperature θ_0 = 76.0 °C (from Q236)",
      "Temperature at 180 s: θ_180 = 64.0 °C",
      "Time interval t = 180 s",
      "Formula: R = (θ_0 - θ_180) / t"
    ],
    toFind: "Average cooling rate R with its unit.",
    physicsConcepts: `Average rate of cooling:
$$R = \\frac{\\Delta \\theta}{\\Delta t} = \\frac{\\theta_0 - \\theta_{180}}{t}$$
Because temperature is measured in °C and time in seconds, the unit is °C/s.`,
    equations: `\\Delta \\theta = 76.0 - 64.0 = 12.0^\\circ\\text{C}; \\quad R = \\frac{12.0}{180} = 0.0667 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Temperature Drop",
        body: "Δθ = 76.0 °C - 64.0 °C = 12.0 °C."
      },
      {
        step: 2,
        title: "Compute Average Cooling Rate",
        body: "R = 12.0 °C / 180 s = 0.0667 °C/s ≈ 0.067 °C/s."
      },
      {
        step: 3,
        title: "State the Unit",
        body: "Unit: °C/s (or °C s⁻¹)."
      }
    ],
    finalAnswer: "0.067 °C/s (or 0.0667 °C/s), unit: °C/s",
    reasonablenessCheck: "A 12 °C drop in 3 minutes gives 4.0 °C/min or ~0.067 °C/s, typical for an open glass beaker.",
    commonMistakes: [
      "Omitting the unit or writing only °C.",
      "Dividing 180 by 12 instead of 12 by 180."
    ],
    takeaway: "R = Δθ / t. Express rate with both numerical value and proper unit (°C/s).",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { drop180: 12.0 },
      controls: [],
      readouts: [
        { label: "Temp Drop Δθ", expr: () => "12.0 °C" },
        { label: "Cooling Rate R", expr: () => "0.067 °C/s" }
      ],
      explanation: "Dividing 12.0 °C by 180 s yields an average cooling rate of 0.067 °C/s."
    }
  },
  {
    globalId: "Q238",
    examId: "Q03065",
    paperRef: "5054/42/M/J/22 Q2(d)",
    pdfPage: 120,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Precaution for Accurate Thermometer Readings",
    paperType: "atp",
    marks: 1,
    questionText: `State one precaution that the student should take when reading the thermometer to ensure that the reading is as accurate as possible. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State an experimental precaution to ensure accurate thermometer readings during liquid cooling investigations.",
    givenInfo: [
      "Liquid-in-glass thermometer in hot water inside a beaker."
    ],
    toFind: "One valid temperature measurement precaution.",
    physicsConcepts: `Precautions for liquid-in-glass thermometers:
1. Parallax avoidance: View scale perpendicular to the stem with line of sight at eye level with the liquid meniscus.
2. Immersion: Ensure thermometer bulb is completely immersed in the water.
3. Clearance: Ensure bulb does not touch the glass bottom or sides of the beaker.
4. Thermal uniformity: Stir water gently before reading.`,
    equations: `\\text{Line of sight } \\perp \\text{ scale avoids parallax}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Parallax Precaution",
        body: "Look perpendicular to the thermometer scale / view at eye level with the liquid meniscus."
      },
      {
        step: 2,
        title: "Identify Placement Precaution",
        body: "Alternatively, ensure the thermometer bulb is completely submerged and does not touch the bottom or sides of the beaker (or stir water before reading)."
      }
    ],
    finalAnswer: "Read the thermometer with line of sight perpendicular to the scale / at eye level with the meniscus to avoid parallax error (or ensure bulb is fully submerged and does not touch the sides/bottom of the beaker / stir before reading).",
    reasonablenessCheck: "Parallax and wall contact are the two most common sources of error in school liquid thermometry.",
    commonMistakes: [
      "Stating 'repeat and average' when asked how to take a single reading accurately.",
      "Saying 'use a magnifying glass'."
    ],
    takeaway: "View scale graduations at eye level perpendicular to the meniscus to avoid parallax error.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Standard Precaution", expr: () => "Eye level viewing (No parallax)" },
        { label: "Bulb Position", expr: () => "Centered, not touching glass" }
      ],
      explanation: "Perpendicular viewing eliminates parallax refraction across thick capillary glass."
    }
  },
  {
    globalId: "Q239",
    examId: "Q03066",
    paperRef: "5054/42/M/J/22 Q2(e)",
    pdfPage: 120,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Controlled Variables for Repeated Cooling Trials",
    paperType: "atp",
    marks: 1,
    questionText: `The student repeats the experiment to see if the results are reproducible.
State one variable that must be kept constant. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Name one physical variable that must be controlled when repeating the cooling rate experiment.",
    givenInfo: [
      "Water cooling in an uninsulated beaker.",
      "Repeating to check reproducibility."
    ],
    toFind: "One controlled variable.",
    physicsConcepts: `Fair testing and reproducibility:
Cooling rate depends on water volume (thermal capacity), initial temperature (thermal gradient), container geometry (surface area), and ambient conditions.
To test reproducibility, these parameters must remain identical across repeated runs:
- Volume / mass of water.
- Initial temperature of hot water.
- Same beaker (same size, shape, and material).
- Room temperature / absence of draughts.`,
    equations: `\\text{Keep constant: } V_{\\text{water}}, \\theta_{\\text{initial}}, \\theta_{\\text{room}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Invariant Physical Factors",
        body: "Select a variable that affects thermal capacity or heat transfer rate."
      },
      {
        step: 2,
        title: "State Approved Variable",
        body: "Volume / mass of water (or initial starting temperature of water / room temperature / same beaker)."
      }
    ],
    finalAnswer: "Volume / mass of water (or initial / starting temperature of the water / room temperature / same beaker).",
    reasonablenessCheck: "Changing water volume changes thermal capacity ($mc$), altering the cooling rate independently of experimental error.",
    commonMistakes: [
      "Naming 'cooling time' (the measurement duration is set by procedure, not a system variable).",
      "Naming 'final temperature' (which is the dependent result)."
    ],
    takeaway: "Control volume of water, starting temperature, and container dimensions to ensure reproducible cooling curves.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Control 1", expr: () => "Volume of water (Constant)" },
        { label: "Control 2", expr: () => "Starting temperature (Constant)" }
      ],
      explanation: "Keeping water volume and initial temperature constant isolates genuine physical reproducibility."
    }
  },
  {
    globalId: "Q240",
    examId: "Q02927",
    paperRef: "5054/41/O/N/22 Q2",
    pdfPage: 121,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Insulation Layers Investigation Master Suite",
    paperType: "atp",
    marks: 7,
    questionText: `A student investigates how the thickness of insulation affects the rate of cooling of hot water in a beaker.
The student wraps different numbers of layers of insulating material around a 250 cm³ glass beaker.
For each number of layers N (0, 1, 2, 4 layers):
- 150 cm³ of hot water is poured into the beaker.
- The initial temperature θ_0 is recorded at t = 0.
- The temperature θ_180 is recorded after cooling for 180 s.

(a) Read the thermometer scale showing the initial temperature in Fig. 2.1. [1]
(b) (i) Calculate the temperature decrease Δθ for each number of layers N. [2]
(ii) State the relationship between the number of layers of insulation and the temperature decrease. [1]
(c) State two variables that must be kept constant to ensure a fair test. [2]
(d) Suggest why wrapping insulation around the sides of the beaker does not stop all heat loss. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Evaluate experimental data on how adding insulation layers around a beaker reduces temperature drop over 180 s, deduce trends, state control variables, and identify uninsulated heat pathways.",
    givenInfo: [
      "Water volume = 150 cm³ in a 250 cm³ beaker.",
      "Layers of insulation N = 0, 1, 2, 4.",
      "Cooling timed for 180 s."
    ],
    toFind: "Initial temperature, calculated temperature drops, trend description, two control variables, and remaining heat loss pathways.",
    physicsConcepts: `Thermal insulation and Fourier's law of conduction:
1. Rate of conduction through a wall:
$$\\frac{dQ}{dt} = \\frac{k A \\Delta T}{d}$$
Increasing the number of insulating layers increases effective barrier thickness $d$, reducing thermal conduction through the sides.
2. Heat loss through other pathways:
Wrapping the sides reduces side conduction and convection, but heat continues to escape via:
- Evaporation and convection from the open top surface.
- Conduction through the bottom of the beaker to the bench.
- Radiation from the top surface.`,
    equations: `\\frac{dQ}{dt} \\propto \\frac{1}{d} \\implies \\text{More layers} \\implies \\text{Smaller } \\Delta \\theta`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This entry coordinates subparts Q241 through Q243 for the Paper 4 insulation thickness investigation on PDF pages 121–123."
      }
    ],
    finalAnswer: "Full analytical calculations and practical evaluations detailed in records Q241 to Q243 below.",
    reasonablenessCheck: "Each added layer of insulation traps more air, reducing the 180 s temperature drop non-linearly.",
    commonMistakes: [
      "Stating that adding insulation completely prevents heat loss.",
      "Confusing the number of layers with water volume."
    ],
    takeaway: "Adding insulation layers increases thickness and slows heat loss through the sides, though open tops and bases continue to leak heat.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { layers: 2 },
      controls: [
        { id: "layers", name: "Insulation Layers N", min: 0, max: 6, step: 1, default: 2, unit: "layers" }
      ],
      readouts: [
        { label: "180 s Temp Drop", expr: (p) => (20.0 / (1 + p.layers * 0.4)).toFixed(1) + " °C" },
        { label: "Insulation Factor", expr: (p) => (1 + p.layers * 0.4).toFixed(1) + "x Resistance" }
      ],
      explanation: "Increasing insulation layers reduces the 180 s temperature drop by adding thermal resistance to the sides."
    }
  },
  {
    globalId: "Q241",
    examId: "Q02928",
    paperRef: "5054/41/O/N/22 Q2(a)",
    pdfPage: 121,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Thermometer Scale Reading in Insulation Setup",
    paperType: "atp",
    marks: 1,
    questionText: `Fig. 2.1 shows the thermometer used to measure the temperature of the water at t = 0:
The scale has marks at 80 °C and 90 °C with 10 small divisions between them.
The meniscus reaches 2 small divisions above 80 °C.

Record the temperature θ_0 shown by the thermometer.
θ_0 = .................... °C [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read the initial temperature θ_0 from the scale in Fig. 2.1.",
    givenInfo: [
      "Major divisions at 80 °C and 90 °C.",
      "10 subdivisions -> 1.0 °C per division.",
      "Meniscus is 2 divisions above 80 °C."
    ],
    toFind: "Temperature θ_0 in °C.",
    physicsConcepts: `Scale reading:
$$\\theta_0 = 80 + (2 \\times 1.0) = 82.0^\\circ\\text{C}$$`,
    equations: `\\theta_0 = 80.0 + 2.0 = 82.0^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Determine Division Value",
        body: "Each small division represents 1.0 °C."
      },
      {
        step: 2,
        title: "Read Scale",
        body: "Two marks above 80 °C: 80 + 2 = 82 °C (or 82.0 °C)."
      }
    ],
    finalAnswer: "82 °C (or 82.0 °C)",
    reasonablenessCheck: "Two divisions above 80 °C on a 1 °C-per-division stem gives 82 °C.",
    commonMistakes: [
      "Writing 81 °C or 83 °C by miscounting divisions.",
      "Omitting decimal place if required by precision instruction."
    ],
    takeaway: "Check graduation interval: 80 + 2 = 82 °C.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 82.0 },
      controls: [],
      readouts: [
        { label: "Graduation Reading", expr: () => "82.0 °C" }
      ],
      explanation: "Meniscus sits on the second mark above 80 °C, indicating 82.0 °C."
    }
  },
  {
    globalId: "Q242",
    examId: "Q02929",
    paperRef: "5054/41/O/N/22 Q2(b)(i)",
    pdfPage: 122,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Temperature Decrease Calculation for Varying Layers",
    paperType: "atp",
    marks: 2,
    questionText: `Table 2.1 shows the results obtained for different numbers of layers of insulation:
N = 0: θ_0 = 82 °C, θ_180 = 65 °C
N = 1: θ_0 = 82 °C, θ_180 = 70 °C
N = 2: θ_0 = 82 °C, θ_180 = 73 °C
N = 4: θ_0 = 82 °C, θ_180 = 76 °C

Calculate the temperature decrease Δθ after 180 s for each number of layers N. Record values in Table 2.1. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate temperature decreases Δθ = θ_0 - θ_180 for N = 0, 1, 2, and 4 layers of insulation.",
    givenInfo: [
      "N = 0: 82 °C -> 65 °C",
      "N = 1: 82 °C -> 70 °C",
      "N = 2: 82 °C -> 73 °C",
      "N = 4: 82 °C -> 76 °C"
    ],
    toFind: "Four values of Δθ in °C.",
    physicsConcepts: `Temperature decrease calculation:
$$\\Delta \\theta = \\theta_0 - \\theta_{180}$$`,
    equations: `\\Delta \\theta_0 = 82 - 65 = 17^\\circ\\text{C}; \\quad \\Delta \\theta_1 = 82 - 70 = 12^\\circ\\text{C}; \\quad \\Delta \\theta_2 = 82 - 73 = 9^\\circ\\text{C}; \\quad \\Delta \\theta_4 = 82 - 76 = 6^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Δθ for N = 0",
        body: "Δθ_0 = 82 °C - 65 °C = 17 °C."
      },
      {
        step: 2,
        title: "Compute Δθ for N = 1",
        body: "Δθ_1 = 82 °C - 70 °C = 12 °C."
      },
      {
        step: 3,
        title: "Compute Δθ for N = 2",
        body: "Δθ_2 = 82 °C - 73 °C = 9 °C."
      },
      {
        step: 4,
        title: "Compute Δθ for N = 4",
        body: "Δθ_4 = 82 °C - 76 °C = 6 °C."
      }
    ],
    finalAnswer: "N = 0: 17 °C; N = 1: 12 °C; N = 2: 9 °C; N = 4: 6 °C",
    reasonablenessCheck: "Temperature drops decrease monotonically as insulation layers increase: 17 °C -> 12 °C -> 9 °C -> 6 °C.",
    commonMistakes: [
      "Arithmetic subtraction slips.",
      "Writing negative numbers."
    ],
    takeaway: "Δθ = θ_0 - θ_180. Temperature drop decreases consistently with each added layer of insulation.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "N = 0 drop", expr: () => "17 °C" },
        { label: "N = 1 drop", expr: () => "12 °C" },
        { label: "N = 2 drop", expr: () => "9 °C" },
        { label: "N = 4 drop", expr: () => "6 °C" }
      ],
      explanation: "Tabulated drops show increasing thermal resistance with layer count."
    }
  },
  {
    globalId: "Q243",
    examId: "Q02930",
    paperRef: "5054/41/O/N/22 Q2(b)(ii)",
    pdfPage: 122,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Relationship Deduction (Insulation vs Cooling Rate)",
    paperType: "atp",
    marks: 1,
    questionText: `State the relationship between the number of layers of insulation and the temperature decrease. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State the mathematical and physical relationship between the number of insulation layers N and the temperature drop Δθ.",
    givenInfo: [
      "As N increases (0, 1, 2, 4), Δθ decreases (17 °C, 12 °C, 9 °C, 6 °C)."
    ],
    toFind: "Statement of relationship.",
    physicsConcepts: `Inverse relationship between insulation thickness and heat loss:
As the number of layers of insulation increases, the temperature decrease Δθ decreases (or as insulation increases, the rate of cooling decreases).
Note: It is not inversely proportional, as doubling layers does not halve Δθ ($17 \\to 12 \\neq 8.5$).`,
    equations: `N \\uparrow \\implies \\Delta \\theta \\downarrow \\quad (\\text{Negative correlation})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Observe Direction of Change",
        body: "When N increases from 0 to 4, Δθ decreases from 17 °C to 6 °C."
      },
      {
        step: 2,
        title: "Formulate Relationship Statement",
        body: "As the number of layers of insulation increases, the temperature decrease decreases (or water cools more slowly)."
      }
    ],
    finalAnswer: "As the number of layers increases, the temperature decrease decreases (or water cools more slowly / cooling rate decreases as insulation increases).",
    reasonablenessCheck: "Thicker insulation provides greater thermal resistance, reducing heat loss.",
    commonMistakes: [
      "Stating 'inversely proportional' without proving $N \\times \\Delta \\theta = \\text{constant}$ (which does not hold here).",
      "Stating temperature increases instead of temperature decrease decreases."
    ],
    takeaway: "State direct trends simply: as insulation thickness increases, the temperature decrease drops.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Observed Trend", expr: () => "More layers -> Smaller temperature decrease" }
      ],
      explanation: "Increasing insulation layers progressively reduces heat loss."
    }
  },
  {
    globalId: "Q244",
    examId: "Q02441",
    paperRef: "5054/42/O/N/22 Q4",
    pdfPage: 124,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Thermometer Design Principles Master Suite",
    paperType: "atp",
    marks: 4,
    questionText: `A student investigates the sensitivity, linearity and range of liquid-in-glass thermometers.
(a) Define what is meant by the sensitivity of a liquid-in-glass thermometer. [1]
(b) State two design changes to a liquid-in-glass thermometer that increase its sensitivity. [2]
(c) State what is meant by the term linearity when applied to a thermometer scale. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Define thermometer sensitivity, identify structural design modifications that increase sensitivity, and define scale linearity.",
    givenInfo: [
      "Liquid-in-glass thermometer design parameters: bulb volume V_0, capillary bore diameter d, stem length L."
    ],
    toFind: "Definition of sensitivity, two design modifications for higher sensitivity, and definition of linearity.",
    physicsConcepts: `Thermometer performance metrics:
1. Sensitivity: Distance moved by the liquid thread per 1.0 °C change in temperature ($\\Delta l / \\Delta T$).
2. Increasing sensitivity:
   - Make capillary bore narrower (smaller cross-sectional area $A$): liquid rises further for the same volume expansion.
   - Use a larger bulb (greater volume of liquid $V_0$): more liquid expands per degree.
   - Use a liquid with a higher expansion coefficient $\\gamma$.
3. Linearity: The distance between degree marks is constant across the entire scale (equal changes in temperature produce equal movements of the liquid thread).`,
    equations: `\\text{Sensitivity} = \\frac{\\Delta l}{\\Delta T} = \\frac{V_0 \\gamma}{A_{\\text{bore}}} = \\frac{4 V_0 \\gamma}{\\pi d^2}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This entry coordinates subparts Q245 and Q246 for the Paper 4 thermometer design analysis on PDF page 124."
      }
    ],
    finalAnswer: "Full definitions and design criteria are detailed in records Q245 and Q246 below.",
    reasonablenessCheck: "A narrower bore and larger bulb both increase thread displacement per degree.",
    commonMistakes: [
      "Confusing sensitivity with range or speed of response.",
      "Saying linearity means the stem is straight physically."
    ],
    takeaway: "Sensitivity = movement per degree (increased by narrower bore and larger bulb); linearity = equal movement per degree across the scale.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { bulbVol: 2.0, boreDiam: 0.2 },
      controls: [
        { id: "bulbVol", name: "Bulb Volume", min: 1.0, max: 4.0, step: 0.5, default: 2.0, unit: "cm³" },
        { id: "boreDiam", name: "Bore Diameter", min: 0.1, max: 0.5, step: 0.05, default: 0.2, unit: "mm" }
      ],
      readouts: [
        { label: "Sensitivity", expr: (p) => (p.bulbVol / (p.boreDiam * p.boreDiam)).toFixed(1) + " mm/°C" },
        { label: "Scale Division Spacing", expr: () => "Constant (Linear)" }
      ],
      explanation: "A larger bulb and narrower capillary bore both increase thread movement per degree."
    }
  },
  {
    globalId: "Q245",
    examId: "Q02442",
    paperRef: "5054/42/O/N/22 Q4(a)",
    pdfPage: 124,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Definition and Enhancement of Sensitivity",
    paperType: "atp",
    marks: 3,
    questionText: `(i) Define what is meant by the sensitivity of a liquid-in-glass thermometer. [1]
(ii) State two design changes to a liquid-in-glass thermometer that increase its sensitivity.
1 ........................................................................................................................
2 ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Define thermometer sensitivity and state two physical modifications to the thermometer that increase sensitivity.",
    givenInfo: [
      "Liquid-in-glass thermometer."
    ],
    toFind: "Definition of sensitivity and two structural enhancements.",
    physicsConcepts: `1. Definition: Sensitivity is the change in length of the liquid thread per unit change in temperature ($\\Delta l / \\Delta \\theta$).
2. Modifications:
   - Narrower capillary bore (smaller diameter / cross-sectional area): thread moves further for a given volume change.
   - Larger bulb (greater volume of liquid): greater absolute expansion per degree.
   - Liquid that expands more per degree (higher thermal expansion coefficient).`,
    equations: `\\text{Sensitivity} = \\frac{\\Delta l}{\\Delta \\theta} \\propto \\frac{V_{\\text{bulb}}}{d_{\\text{bore}}^2}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Define Sensitivity (Part i)",
        body: "The change in length of the liquid column / movement of the thread per degree change in temperature."
      },
      {
        step: 2,
        title: "State Two Design Modifications (Part ii)",
        body: "1. Make the capillary bore narrower / smaller diameter.\n2. Use a larger bulb / larger volume of liquid (or use a liquid that expands more)."
      }
    ],
    finalAnswer: "(i) The change in length of the liquid column per degree Celsius (movement per degree);\n(ii) 1. Narrower capillary bore (smaller diameter); 2. Larger bulb (larger volume of liquid).",
    reasonablenessCheck: "A narrower tube magnifies movement; a larger reservoir expands more total volume per degree.",
    commonMistakes: [
      "Defining sensitivity as 'ability to detect small temperatures' without referencing thread movement.",
      "Saying 'make the stem longer' (a longer stem increases range, not sensitivity)."
    ],
    takeaway: "Sensitivity is thread displacement per degree; increase it using a narrower capillary bore and a larger bulb.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Definition", expr: () => "Length change per 1 °C" },
        { label: "Modification 1", expr: () => "Narrower capillary bore" },
        { label: "Modification 2", expr: () => "Larger bulb volume" }
      ],
      explanation: "A narrower bore and larger bulb increase thread movement per degree Celsius."
    }
  },
  {
    globalId: "Q246",
    examId: "Q02443",
    paperRef: "5054/42/O/N/22 Q4(b)",
    pdfPage: 124,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Meaning of Linearity in Thermometry",
    paperType: "atp",
    marks: 1,
    questionText: `State what is meant by the term linearity when applied to a thermometer scale. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Define linearity for a graduated thermometer scale.",
    givenInfo: [
      "Graduated liquid-in-glass thermometer."
    ],
    toFind: "Definition of scale linearity.",
    physicsConcepts: `Linearity means equal changes in temperature produce equal changes in the measured thermometric property.
On a liquid-in-glass thermometer:
- The liquid thread moves by an equal distance for each 1 °C rise throughout the range.
- The graduation marks are spaced at equal distances apart along the stem.
- A graph of liquid column length against temperature is a straight line.`,
    equations: `\\frac{\\Delta l}{\\Delta \\theta} = \\text{constant} \\implies \\text{Equal division spacing}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Operational Meaning",
        body: "Equal changes in temperature produce equal changes in length of the liquid column (or scale marks are equally spaced / thread moves by the same distance for every degree)."
      }
    ],
    finalAnswer: "Equal changes in temperature produce equal changes in length of the liquid thread (or distance between scale marks is constant / scale divisions are equally spaced).",
    reasonablenessCheck: "Non-linear thermometers have crowded marks at one end and spread-out marks at the other; linear thermometers have uniform spacing throughout.",
    commonMistakes: [
      "Saying the thermometer is physically straight.",
      "Saying the liquid expands indefinitely."
    ],
    takeaway: "Linearity means equal changes in temperature produce equal distances between scale marks.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Scale Property", expr: () => "Linear Scale" },
        { label: "Graduation Spacing", expr: () => "Equally spaced divisions" }
      ],
      explanation: "A linear scale maintains constant distance between consecutive degree markings."
    }
  },
  {
    globalId: "Q247",
    examId: "Q02990",
    paperRef: "5054/41/M/J/23 Q1",
    pdfPage: 125,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Beaker Surface Area and Cooling Rates Master Suite",
    paperType: "atp",
    marks: 7,
    questionText: `A student investigates how the surface area of water affects the rate of cooling.
She uses two beakers:
Beaker A: tall and narrow (diameter 5.0 cm, volume 200 cm³).
Beaker B: shallow and wide (diameter 9.0 cm, volume 200 cm³).
Both contain 100 cm³ of hot water initially at 85 °C.

(a) Read the initial temperature θ_0 from the thermometer shown in Fig. 1.1. [1]
(b) (i) Data shows:
Beaker A cools from 85 °C to 70 °C in 240 s.
Beaker B cools from 85 °C to 58 °C in 240 s.
Calculate the average cooling rate for each beaker in °C/s. [2]
(ii) State and explain which beaker cools more rapidly. [2]
(c) State two variables that must be kept constant to ensure a valid comparison. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Evaluate the effect of surface area on cooling rates across narrow and wide beakers, calculate cooling rates in °C/s, explain the physical cause, and state two controlled variables.",
    givenInfo: [
      "Beaker A: diameter 5.0 cm (narrow).",
      "Beaker B: diameter 9.0 cm (wide).",
      "Volume of water = 100 cm³ in each.",
      "Initial temperature = 85 °C.",
      "Cooling time = 240 s."
    ],
    toFind: "Initial temperature, calculated rates, surface area explanation, and two control variables.",
    physicsConcepts: `Surface area effect on heat transfer:
1. Cooling rate:
   $$R = \\frac{\\Delta \\theta}{t}$$
2. Evaporative and convective loss:
   $$\\text{Surface Area } A = \\frac{\\pi d^2}{4}$$
   For Beaker A: $A_A \\approx \\frac{\\pi (5)^2}{4} \\approx 19.6\\text{ cm}^2$.
   For Beaker B: $A_B \\approx \\frac{\\pi (9)^2}{4} \\approx 63.6\\text{ cm}^2$.
   Beaker B has over 3 times the exposed surface area of Beaker A. Because evaporative cooling and convection occur at the open surface, Beaker B loses thermal energy much faster.`,
    equations: `R_A = \\frac{85 - 70}{240} = 0.0625^\\circ\\text{C/s}; \\quad R_B = \\frac{85 - 58}{240} = 0.1125^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This entry coordinates subparts Q248 through Q250 for the Paper 4 surface area cooling experiment on PDF pages 125–126."
      }
    ],
    finalAnswer: "Full analytical calculations and explanations are detailed in records Q248 to Q250 below.",
    reasonablenessCheck: "Beaker B has 3.2 times the surface area, resulting in a cooling rate roughly 1.8 times higher (0.113 vs 0.063 °C/s).",
    commonMistakes: [
      "Assuming depth affects cooling rate more than surface area.",
      "Omitting units from calculated rates."
    ],
    takeaway: "Cooling rate increases with surface area because evaporation and convection occur at the exposed surface.",
    simulation: {
      type: "evaporation",
      defaultParams: { diamA: 5.0, diamB: 9.0 },
      controls: [
        { id: "diamB", name: "Beaker B Diameter", min: 6.0, max: 12.0, step: 1.0, default: 9.0, unit: "cm" }
      ],
      readouts: [
        { label: "Rate A (5 cm)", expr: () => "0.063 °C/s" },
        { label: "Rate B (9 cm)", expr: (p) => (0.063 * Math.pow(p.diamB / 5.0, 1.2)).toFixed(3) + " °C/s" }
      ],
      explanation: "A wider diameter exposes more surface area, accelerating evaporation and cooling."
    }
  },
  {
    globalId: "Q248",
    examId: "Q02991",
    paperRef: "5054/41/M/J/23 Q1(a)",
    pdfPage: 125,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Initial Thermometer Reading in Surface Area Experiment",
    paperType: "atp",
    marks: 1,
    questionText: `Read the initial temperature θ_0 from the thermometer shown in Fig. 1.1:
The scale has marks at 80 °C and 90 °C with 10 small divisions.
The meniscus reaches the fifth small mark above 80 °C.

θ_0 = .................... °C [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read initial temperature θ_0 from the thermometer scale in Fig. 1.1.",
    givenInfo: [
      "Major divisions at 80 °C and 90 °C.",
      "10 subdivisions -> 1.0 °C per division.",
      "Meniscus is at 5 divisions above 80 °C."
    ],
    toFind: "Initial temperature θ_0 in °C.",
    physicsConcepts: `Scale reading:
$$\\theta_0 = 80 + (5 \\times 1.0) = 85.0^\\circ\\text{C}$$`,
    equations: `\\theta_0 = 80.0 + 5.0 = 85.0^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Determine Scale Division Value",
        body: "Each small division represents 1.0 °C."
      },
      {
        step: 2,
        title: "Read Scale",
        body: "Five marks above 80 °C: 80 + 5 = 85 °C (or 85.0 °C)."
      }
    ],
    finalAnswer: "85 °C (or 85.0 °C)",
    reasonablenessCheck: "The meniscus sits at the midpoint between 80 °C and 90 °C, confirming 85 °C.",
    commonMistakes: [
      "Writing 84 °C or 86 °C.",
      "Omitting the decimal place if high precision is requested."
    ],
    takeaway: "The midpoint between 80 °C and 90 °C is 85 °C.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 85.0 },
      controls: [],
      readouts: [
        { label: "Observed Reading", expr: () => "85.0 °C" }
      ],
      explanation: "Meniscus sits at the fifth mark above 80 °C, indicating 85.0 °C."
    }
  },
  {
    globalId: "Q249",
    examId: "Q02993",
    paperRef: "5054/41/M/J/23 Q1(i)",
    pdfPage: 125,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Comparative Cooling Rates Calculation",
    paperType: "atp",
    marks: 2,
    questionText: `Beaker A cools from 85 °C to 70 °C in 240 s.
Beaker B cools from 85 °C to 58 °C in 240 s.

Calculate the average cooling rate for each beaker in °C/s.
cooling rate for Beaker A = .................... °C/s
cooling rate for Beaker B = .................... °C/s [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the average cooling rates for Beakers A and B over 240 s in °C/s.",
    givenInfo: [
      "Beaker A: drops from 85 °C to 70 °C (Δθ = 15 °C) in 240 s",
      "Beaker B: drops from 85 °C to 58 °C (Δθ = 27 °C) in 240 s"
    ],
    toFind: "Cooling rates R_A and R_B in °C/s.",
    physicsConcepts: `Average cooling rate:
$$R = \\frac{\\Delta \\theta}{t}$$
For Beaker A:
$$R_A = \\frac{85 - 70}{240} = \\frac{15}{240} = 0.0625\\text{ }^\\circ\\text{C/s}$$
For Beaker B:
$$R_B = \\frac{85 - 58}{240} = \\frac{27}{240} = 0.1125\\text{ }^\\circ\\text{C/s}$$`,
    equations: `R_A = \\frac{15}{240} = 0.0625 \\text{ }^\\circ\\text{C/s}; \\quad R_B = \\frac{27}{240} = 0.1125 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Rate for Beaker A",
        body: "Δθ_A = 85 °C - 70 °C = 15 °C.\nR_A = 15 °C / 240 s = 0.0625 °C/s ≈ 0.063 °C/s."
      },
      {
        step: 2,
        title: "Compute Rate for Beaker B",
        body: "Δθ_B = 85 °C - 58 °C = 27 °C.\nR_B = 27 °C / 240 s = 0.1125 °C/s ≈ 0.11 °C/s (or 0.113 °C/s)."
      }
    ],
    finalAnswer: "cooling rate for Beaker A = 0.063 °C/s (or 0.0625 °C/s);\ncooling rate for Beaker B = 0.11 °C/s (or 0.1125 °C/s / 0.113 °C/s)",
    reasonablenessCheck: "Beaker B has a higher rate (0.113 °C/s vs 0.063 °C/s), consistent with its larger temperature drop.",
    commonMistakes: [
      "Inverting division (e.g. 240 / 15).",
      "Using minutes instead of seconds without converting."
    ],
    takeaway: "Cooling rate = Δθ / t. Express values to consistent significant figures (typically 2 to 3 s.f.).",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { rateA: 0.0625, rateB: 0.1125 },
      controls: [],
      readouts: [
        { label: "Rate A", expr: () => "0.063 °C/s" },
        { label: "Rate B", expr: () => "0.113 °C/s" }
      ],
      explanation: "Dividing temperature drops by 240 s yields 0.063 °C/s for A and 0.113 °C/s for B."
    }
  },
  {
    globalId: "Q250",
    examId: "Q02994",
    paperRef: "5054/41/M/J/23 Q1(i)(ii)",
    pdfPage: 125,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Surface Area Mechanism and Controlled Variables",
    paperType: "atp",
    marks: 4,
    questionText: `(i) State and explain which beaker cools more rapidly. [2]
(ii) State two variables that must be kept constant to ensure a valid comparison between Beaker A and Beaker B. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State which beaker cools faster with physical reasoning based on surface area, and identify two controlled variables.",
    givenInfo: [
      "Beaker A: narrow, diameter 5.0 cm, rate = 0.063 °C/s",
      "Beaker B: wide, diameter 9.0 cm, rate = 0.113 °C/s"
    ],
    toFind: "Choice of beaker, surface area explanation, and two controlled variables.",
    physicsConcepts: `1. Physical mechanism: Beaker B cools more rapidly because it has a larger diameter and greater exposed surface area. Evaporative cooling and convection are surface phenomena; a larger exposed area increases the number of molecules escaping per second, increasing heat loss.
2. Controlled variables:
   - Volume / mass of water (100 cm³): thermal capacity must be equal.
   - Initial temperature (85 °C): starting thermal gradient must be identical.
   - Material / thickness of beaker glass.
   - External conditions: room temperature and air draughts.`,
    equations: `A_{\\text{surface}} \\propto d^2 \\implies A_B > A_A \\implies \\text{Higher evaporation and convection rate}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) State and Explain Faster Cooling",
        body: "Beaker B cools more rapidly. Explanation: Beaker B has a larger surface area (wider diameter), so more thermal energy is lost per second by evaporation and convection."
      },
      {
        step: 2,
        title: "Part (ii) Identify Two Controlled Variables",
        body: "1. Volume / mass of water (100 cm³).\n2. Initial / starting temperature of the water (85 °C) (or room temperature / material of beaker)."
      }
    ],
    finalAnswer: "(i) Beaker B cools more rapidly because it has a larger exposed surface area (wider diameter) for evaporation and convection;\n(ii) 1. Volume / mass of water (100 cm³); 2. Initial starting temperature of the water (85 °C) (or room temperature).",
    reasonablenessCheck: "Evaporation rate scales with surface area; fair comparison requires identical water volume and starting temperature.",
    commonMistakes: [
      "Stating Beaker A cools faster because it is deeper.",
      "Naming beaker diameter as a controlled variable (diameter is the independent variable)."
    ],
    takeaway: "Larger surface area accelerates cooling via evaporation and convection; valid testing requires controlling water volume and initial temperature.",
    simulation: {
      type: "evaporation",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Faster Beaker", expr: () => "Beaker B (Wide, 9 cm)" },
        { label: "Mechanism", expr: () => "Greater exposed surface area" }
      ],
      explanation: "Beaker B's larger surface area increases evaporation and convection rates."
    }
  }
];