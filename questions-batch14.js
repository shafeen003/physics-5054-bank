/**
 * Master Question Store: Batch 14 (Q191 to Q205)
 * Section 2.2: Thermal Properties and Temperature (Paper 3 Practical)
 */

const QUESTIONS_BATCH_14 = [
  {
    globalId: "Q191",
    examId: "Q00052",
    paperRef: "5054/31/M/J/24 Q2",
    pdfPage: 91,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Surrounding Temperature and Cooling Rate Master Suite",
    paperType: "practical",
    marks: 10,
    questionText: `In this experiment, you will investigate how the temperature of the surroundings affects the rate of cooling of water.
You are provided with:
- a stopwatch
- a 250 cm³ beaker
- a larger beaker (500 cm³ or 600 cm³)
- a thermometer
- a supply of hot water
- a supply of mixed ice and water.

(a) Pour approximately 100 cm³ of hot water into the 250 cm³ beaker.
(i) Measure the temperature θ_0 of the water and start the stopwatch immediately. Record in Table 2.1. [1]
(ii) Record the temperature of the water every 30 s for 4 minutes in Table 2.1. [1]
(iii) Calculate the average cooling rate C_1 for the first 90 s of the experiment using C_1 = (θ_0 - θ_90) / t, where t = 90 s. Give the unit for C_1. [2]
(iv) Calculate the average cooling rate C_2 for the final 90 s of the experiment using C_2 = (θ_150 - θ_240) / t, where t = 90 s. [1]
(v) Compare your values of C_1 and C_2. Explain any difference. [1]

(b) Pour 100 cm³ of iced water into the larger beaker. Place the 250 cm³ beaker of hot water into the iced water (Fig. 2.1).
(i) Record temperature every 30 s up to 120 s in Table 2.2. [1]
(ii) Calculate average cooling rate C_3 for the first 90 s using C_3 = (θ_0 - θ_90) / t. [1]
(iii) Describe how C_3 differs from C_1. Explain your answer. [1]
(iv) State one variable that should be kept constant to make a valid comparison of C_1 and C_3. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Investigate how cooling rate varies over time in room air and compare it directly to cooling when surrounded by an iced water bath.",
    givenInfo: [
      "100 cm³ hot water in a 250 cm³ beaker.",
      "Part (a): Cooling in ambient room air over 240 s.",
      "Part (b): Cooling inside a water bath of iced water over 120 s.",
      "Cooling rate formulas: C = (θ_start - θ_end) / 90 s."
    ],
    toFind: "Complete set of experimental observations, rates C_1, C_2, C_3 with units, comparative physical explanations, and control variables.",
    physicsConcepts: `Rate of thermal energy transfer and Newton's law of cooling:
1. The rate of cooling is directly proportional to the temperature difference between the hot liquid and its surroundings:
\\frac{d\\theta}{dt} \\propto (\\theta - \\theta_{\\text{env}})
2. Cooling in air: As water cools from θ_0 to θ_240, the temperature difference with room air decreases. Hence, the initial cooling rate C_1 (0 to 90 s) is greater than the final cooling rate C_2 (150 to 240 s).
3. Cooling in iced water bath: Iced water maintains an external temperature of ~0 °C. The temperature difference (θ - 0 °C) is much larger than (θ - θ_room), so the cooling rate C_3 is significantly higher than C_1.`,
    equations: `C_1 = \\frac{\\theta_0 - \\theta_{90}}{90}; \\quad C_2 = \\frac{\\theta_{150} - \\theta_{240}}{90}; \\quad C_3 = \\frac{\\theta_0 - \\theta_{90}}{90} \\quad (\\text{in ice bath})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Suite",
        body: "This entry coordinates subparts Q192 through Q197 for the Paper 3 cooling rate investigation on PDF pages 91–92."
      }
    ],
    finalAnswer: "Complete practical readings and derived values are provided in records Q192 to Q197 below.",
    reasonablenessCheck: "Water cools faster when it is hotter, and cools much faster when placed in ice water than in room-temperature air.",
    commonMistakes: [
      "Using minutes instead of seconds in the denominator.",
      "Allowing water from the outer ice bath to spill into the inner hot water beaker."
    ],
    takeaway: "Cooling rate is governed by temperature difference: it decreases over time as water cools, and increases in a cold surrounding bath.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { tempC: 85, bathTemp: 0 },
      controls: [
        { id: "bathTemp", name: "Surrounding Temp (20=Air, 0=Ice)", min: 0, max: 20, step: 20, default: 20, unit: "°C" }
      ],
      readouts: [
        { label: "Surroundings", expr: (p) => p.bathTemp === 0 ? "Ice Bath (0 °C)" : "Room Air (20 °C)" },
        { label: "Initial Cooling Rate", expr: (p) => p.bathTemp === 0 ? "0.22 °C/s (Fast)" : "0.08 °C/s (Slow)" }
      ],
      explanation: "A larger temperature difference between water and its surroundings drives a steeper cooling gradient."
    }
  },
  {
    globalId: "Q192",
    examId: "Q00053",
    paperRef: "5054/31/M/J/24 Q2(a)(i)-(ii)",
    pdfPage: 91,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Hot Water Cooling in Air Table 2.1",
    paperType: "practical",
    marks: 2,
    questionText: `Pour approximately 100 cm³ of hot water into the 250 cm³ beaker.
(i) Measure the temperature θ of the water and immediately start the stop-watch. Record this temperature in the first row of Table 2.1 (at t = 0 s). [1]
(ii) Record in Table 2.1 the temperature of the water every 30 s for 4 minutes (up to t = 240 s). [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record the temperature decay of 100 cm³ of hot water in room air at 30 s intervals over 4 minutes in Table 2.1.",
    givenInfo: [
      "100 cm³ of hot water in an open 250 cm³ beaker in room air.",
      "Time intervals: t = 0, 30, 60, 90, 120, 150, 180, 210, 240 s."
    ],
    toFind: "Complete series of temperature values for Table 2.1.",
    physicsConcepts: `Hot water cools non-linearly according to Newton's law of cooling.
The temperature drop is largest during the first 30 seconds and gradually diminishes as water approaches ambient room temperature (~20 °C). Readings should be recorded to the nearest 0.5 °C or 1.0 °C with proper units.`,
    equations: `\\theta(t) = \\theta_{\\text{room}} + (\\theta_0 - \\theta_{\\text{room}}) e^{-k t}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Initial Temperature",
        body: "At t = 0 s: θ_0 = 85.0 °C (typical initial value between 80.0 °C and 90.0 °C)."
      },
      {
        step: 2,
        title: "Record Decreasing Temperatures Every 30 s",
        body: "t = 30 s: 81.0 °C\nt = 60 s: 77.5 °C\nt = 90 s: 74.5 °C\nt = 120 s: 72.0 °C\nt = 150 s: 69.5 °C\nt = 180 s: 67.5 °C\nt = 210 s: 66.0 °C\nt = 240 s: 64.5 °C"
      }
    ],
    finalAnswer: "Table 2.1: t = 0 s: 85.0 °C; 30 s: 81.0 °C; 60 s: 77.5 °C; 90 s: 74.5 °C; 120 s: 72.0 °C; 150 s: 69.5 °C; 180 s: 67.5 °C; 210 s: 66.0 °C; 240 s: 64.5 °C (typical laboratory values showing decreasing temperature drops)",
    reasonablenessCheck: "The drop in the first 90 s is 10.5 °C (85.0 -> 74.5), while the drop in the final 90 s is 5.0 °C (69.5 -> 64.5), reflecting natural exponential decay.",
    commonMistakes: [
      "Recording constant differences (linear decrease) rather than a slowing rate of cooling.",
      "Omitting decimal places."
    ],
    takeaway: "Water cooling in air follows an exponential curve: temperature decreases more rapidly at first and levels off over time.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { theta0: 85.0, theta90: 74.5, theta240: 64.5 },
      controls: [],
      readouts: [
        { label: "θ at 0 s", expr: () => "85.0 °C" },
        { label: "θ at 90 s", expr: () => "74.5 °C" },
        { label: "θ at 240 s", expr: () => "64.5 °C" }
      ],
      explanation: "Water temperature decays non-linearly toward ambient room temperature."
    }
  },
  {
    globalId: "Q193",
    examId: "Q00054",
    paperRef: "5054/31/M/J/24 Q2(a)(iii)",
    pdfPage: 91,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Initial Cooling Rate Calculation",
    paperType: "practical",
    marks: 2,
    questionText: `Calculate the average cooling rate C_1 of the water for the first 90 s of the experiment.
Use your readings in Table 2.1 and the equation:
C_1 = (θ_0 - θ_90) / t
where θ_0 is the temperature at 0 s, θ_90 is the temperature at 90 s and t is the time of 90 s.
Give the unit for C_1.
C_1 = .................... unit .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the average cooling rate C_1 during the initial 90 s period and state the correct unit.",
    givenInfo: [
      "θ_0 = 85.0 °C (from Q192)",
      "θ_90 = 74.5 °C (from Q192)",
      "Time t = 90 s",
      "Formula: C_1 = (θ_0 - θ_90) / 90"
    ],
    toFind: "Cooling rate C_1 and its physical unit.",
    physicsConcepts: `Average cooling rate is the change in temperature divided by elapsed time:
C_1 = \\frac{\\Delta \\theta}{\\Delta t} = \\frac{\\theta_0 - \\theta_{90}}{90}
Because temperature is measured in °C and time in seconds, the unit is °C/s.`,
    equations: `C_1 = \\frac{85.0 - 74.5}{90} = \\frac{10.5}{90} = 0.1167 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Temperature Decrease",
        body: "Δθ = θ_0 - θ_90 = 85.0 °C - 74.5 °C = 10.5 °C."
      },
      {
        step: 2,
        title: "Calculate Average Cooling Rate",
        body: "C_1 = 10.5 °C / 90 s = 0.1167 °C/s ≈ 0.12 °C/s."
      },
      {
        step: 3,
        title: "State the Unit",
        body: "Unit: °C/s (or °C s⁻¹)."
      }
    ],
    finalAnswer: "C_1 = 0.12 °C/s (or 0.117 °C/s), unit: °C/s",
    reasonablenessCheck: "0.12 °C/s corresponds to roughly 7.0 °C per minute, consistent with hot water cooling near 85 °C.",
    commonMistakes: [
      "Omitting the unit or writing only °C.",
      "Dividing by 1.5 minutes without changing the unit to °C/min."
    ],
    takeaway: "Cooling rate = temperature drop / time in seconds, with unit °C/s.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { drop90: 10.5 },
      controls: [],
      readouts: [
        { label: "Δθ (First 90 s)", expr: () => "10.5 °C" },
        { label: "Rate C_1", expr: () => "0.117 °C/s" }
      ],
      explanation: "Dividing 10.5 °C by 90 s gives an initial cooling rate of ~0.12 °C/s."
    }
  },
  {
    globalId: "Q194",
    examId: "Q00055",
    paperRef: "5054/31/M/J/24 Q2(a)(iv)",
    pdfPage: 91,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Final Cooling Rate Calculation",
    paperType: "practical",
    marks: 1,
    questionText: `Calculate the average cooling rate C_2 of the water for the final 90 s of the experiment.
Use the equation:
C_2 = (θ_150 - θ_240) / t
where θ_150 is the temperature of the water at 150 s, θ_240 is the temperature of the water at 240 s and t is the time of 90 s.
C_2 = .................... unit .................... [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the average cooling rate C_2 during the final 90 s interval (from t = 150 s to t = 240 s).",
    givenInfo: [
      "θ_150 = 69.5 °C (from Q192)",
      "θ_240 = 64.5 °C (from Q192)",
      "Time interval t = 240 - 150 = 90 s",
      "Formula: C_2 = (θ_150 - θ_240) / 90"
    ],
    toFind: "Cooling rate C_2 with unit.",
    physicsConcepts: `As hot water cools towards room temperature, its rate of heat loss decreases because the thermal gradient (θ - θ_room) becomes smaller.
C_2 represents cooling at lower temperatures, so C_2 must be smaller than C_1.`,
    equations: `C_2 = \\frac{69.5 - 64.5}{90} = \\frac{5.0}{90} = 0.0556 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Temperature Decrease",
        body: "Δθ = θ_150 - θ_240 = 69.5 °C - 64.5 °C = 5.0 °C."
      },
      {
        step: 2,
        title: "Calculate Final Cooling Rate",
        body: "C_2 = 5.0 °C / 90 s = 0.0556 °C/s ≈ 0.056 °C/s."
      }
    ],
    finalAnswer: "C_2 = 0.056 °C/s (or 0.0556 °C/s), unit: °C/s",
    reasonablenessCheck: "C_2 (0.056 °C/s) is roughly half of C_1 (0.117 °C/s), consistent with the decreased temperature difference between the water and the room.",
    commonMistakes: [
      "Using the wrong times (e.g. dividing by 240 s instead of 90 s).",
      "Writing a negative value for rate."
    ],
    takeaway: "Cooling rate drops as water cools because the temperature difference between the water and ambient air decreases.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { dropFinal90: 5.0 },
      controls: [],
      readouts: [
        { label: "Δθ (Final 90 s)", expr: () => "5.0 °C" },
        { label: "Rate C_2", expr: () => "0.056 °C/s" }
      ],
      explanation: "A smaller temperature drop over the final 90 s yields a lower cooling rate of ~0.056 °C/s."
    }
  },
  {
    globalId: "Q195",
    examId: "Q00056",
    paperRef: "5054/31/M/J/24 Q2(a)(v)",
    pdfPage: 91,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Comparing Initial and Final Cooling Rates",
    paperType: "practical",
    marks: 1,
    questionText: `Compare your values of C_1 and C_2.
Explain any difference in these values. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Compare C_1 and C_2 numerically and explain the physical cause of the difference.",
    givenInfo: [
      "C_1 ≈ 0.12 °C/s (initial cooling rate)",
      "C_2 ≈ 0.056 °C/s (final cooling rate)"
    ],
    toFind: "Comparison and physical explanation.",
    physicsConcepts: `Newton's law of cooling:
The rate of heat loss by conduction, convection, radiation, and surface evaporation is proportional to the difference in temperature between the water and the surrounding air:
\\text{Rate of cooling} \\propto (\\theta - \\theta_{\\text{surroundings}})
In the first 90 s, the water is hotter (~85 °C to 74.5 °C), so the temperature difference with room air (~20 °C) is ~60 °C.
In the final 90 s, the water is cooler (~69.5 °C to 64.5 °C), so the temperature difference is only ~47 °C.
Because the temperature difference decreases over time, C_1 > C_2.`,
    equations: `C_1 > C_2 \\iff (\\theta_0 - \\theta_{\\text{room}}) > (\\theta_{150} - \\theta_{\\text{room}})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Comparison",
        body: "C_1 is greater than C_2 (the initial cooling rate is faster than the final cooling rate)."
      },
      {
        step: 2,
        title: "Explain Physical Cause",
        body: "Because the temperature of the water decreases, the temperature difference between the water and the room/surroundings decreases, so the rate of thermal energy transfer decreases."
      }
    ],
    finalAnswer: "C_1 is greater than C_2 because the temperature of the water is higher initially, so the temperature difference between the water and the surroundings is greater.",
    reasonablenessCheck: "Hotter objects lose heat to their surroundings at a higher rate.",
    commonMistakes: [
      "Saying C_1 is larger because there was more water (mass remained constant).",
      "Failing to mention temperature difference with surroundings."
    ],
    takeaway: "Cooling rates decrease over time because the temperature difference between the liquid and its surroundings diminishes.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "C_1 vs C_2", expr: () => "C_1 > C_2 (Slows down)" },
        { label: "Reason", expr: () => "ΔT with room air decreases" }
      ],
      explanation: "Heat loss slows over time as the temperature gap with the room shrinks."
    }
  },
  {
    globalId: "Q196",
    examId: "Q00057",
    paperRef: "5054/31/M/J/24 Q2(b)(i)-(ii)",
    pdfPage: 92,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Ice Bath Cooling Rate C_3 Calculation",
    paperType: "practical",
    marks: 2,
    questionText: `Pour approximately 100 cm³ of iced water into the larger beaker.
Ask the supervisor to pour approximately 100 cm³ of hot water into the 250 cm³ beaker.
Carefully place the 250 cm³ beaker of hot water into the larger beaker of iced water as shown in Fig. 2.1.
(i) Measure the temperature of the hot water and immediately start the stop-watch. Record in Table 2.2 the temperature θ at times t = 0 s, 30 s, 60 s, 90 s and 120 s. [1]
(ii) Calculate the average cooling rate C_3 for the first 90 s of the experiment using C_3 = (θ_0 - θ_90) / t, where t = 90 s. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record the temperature decay of hot water placed in an iced water bath over 120 s in Table 2.2 and calculate cooling rate C_3.",
    givenInfo: [
      "100 cm³ hot water in 250 cm³ beaker placed into 500 cm³ beaker of iced water.",
      "Times: 0, 30, 60, 90, 120 s."
    ],
    toFind: "Table 2.2 values and calculated rate C_3 with units.",
    physicsConcepts: `In an iced water bath, the beaker is surrounded by water at ~0 °C.
Because water has a much higher thermal conductivity than air and the surrounding temperature is 0 °C instead of ~20 °C, thermal energy conducts rapidly through the beaker walls into the ice bath, causing a much steeper temperature drop.`,
    equations: `C_3 = \\frac{\\theta_0 - \\theta_{90}}{90} \\quad (\\text{surroundings at } 0^\\circ\\text{C})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Typical Laboratory Readings for Table 2.2",
        body: "t = 0 s: 84.0 °C\nt = 30 s: 76.5 °C\nt = 60 s: 69.5 °C\nt = 90 s: 64.0 °C\nt = 120 s: 59.5 °C"
      },
      {
        step: 2,
        title: "Calculate Temperature Drop for First 90 s",
        body: "Δθ = 84.0 °C - 64.0 °C = 20.0 °C."
      },
      {
        step: 3,
        title: "Calculate Average Cooling Rate C_3",
        body: "C_3 = 20.0 °C / 90 s = 0.222 °C/s ≈ 0.22 °C/s."
      }
    ],
    finalAnswer: "(i) Table 2.2: 0 s: 84.0 °C, 30 s: 76.5 °C, 60 s: 69.5 °C, 90 s: 64.0 °C, 120 s: 59.5 °C;\n(ii) C_3 = 0.22 °C/s (or 0.222 °C/s), unit: °C/s.",
    reasonablenessCheck: "In the ice bath, temperature drops by 20.0 °C in 90 s (C_3 = 0.22 °C/s), nearly double the cooling rate in air (C_1 = 0.12 °C/s).",
    commonMistakes: [
      "Allowing water from the outer ice bath to enter the inner beaker.",
      "Calculating over 120 s instead of the requested 90 s."
    ],
    takeaway: "An iced water bath increases the thermal gradient and conduction rate, roughly doubling the cooling rate compared to air.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { bathTemp: 0, dropIce90: 20.0 },
      controls: [],
      readouts: [
        { label: "Δθ in Ice Bath", expr: () => "20.0 °C" },
        { label: "Rate C_3", expr: () => "0.222 °C/s" }
      ],
      explanation: "Surrounding the beaker with iced water increases the cooling rate to 0.22 °C/s."
    }
  },
  {
    globalId: "Q197",
    examId: "Q00058",
    paperRef: "5054/31/M/J/24 Q2(b)(iii)-(iv)",
    pdfPage: 92,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Environment Comparison and Control Variables",
    paperType: "practical",
    marks: 2,
    questionText: `(iii) Describe how C_3 differs from C_1. Explain your answer. [1]
(iv) State one variable that you should keep constant to make a valid comparison of C_1 and C_3. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Compare cooling rates C_3 (ice bath) and C_1 (air), explain the physical mechanism, and name a critical control variable.",
    givenInfo: [
      "C_1 ≈ 0.12 °C/s (air surroundings at ~20 °C)",
      "C_3 ≈ 0.22 °C/s (iced water surroundings at ~0 °C)"
    ],
    toFind: "Comparative explanation and one control variable.",
    physicsConcepts: `1. Physical mechanism: The temperature of iced water (~0 °C) is much lower than room temperature (~20 °C), so the temperature difference between the hot water and its surroundings is much larger in the ice bath. Water is also a better thermal conductor than air. Therefore, the rate of thermal energy transfer is greater (C_3 > C_1).
2. Control variable: To isolate the effect of surrounding temperature, other factors affecting cooling rate must remain constant: starting temperature of hot water, volume of hot water (100 cm³), or beaker size and material.`,
    equations: `\\Delta T_{\\text{ice}} = \\theta - 0^\\circ\\text{C} > \\Delta T_{\\text{air}} = \\theta - 20^\\circ\\text{C} \\implies C_3 > C_1`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (iii) Comparison and Explanation",
        body: "C_3 is greater / faster than C_1 because the temperature difference between the hot water and the iced water surroundings is greater than the temperature difference between the hot water and the room air."
      },
      {
        step: 2,
        title: "Part (iv) State Control Variable",
        body: "Initial starting temperature of the hot water / volume (mass) of hot water (100 cm³) / same type of inner beaker."
      }
    ],
    finalAnswer: "(iii) C_3 is greater than C_1 because the temperature difference between the hot water and the iced water is greater (or water conducts heat away faster than air);\n(iv) Starting / initial temperature of hot water (or volume/mass of hot water / 100 cm³).",
    reasonablenessCheck: "Cooling from ~85 °C into 0 °C gives ΔT = 85 °C; cooling into 20 °C air gives ΔT = 65 °C. The larger gradient produces a higher cooling rate.",
    commonMistakes: [
      "Naming a variable that varied in the experiment (e.g. surrounding temperature).",
      "Stating C_3 is smaller."
    ],
    takeaway: "Lower surrounding temperatures create a larger temperature gradient, increasing cooling rate; valid comparisons require matching initial liquid volumes and temperatures.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Rate Comparison", expr: () => "C_3 (Ice) > C_1 (Air)" },
        { label: "Key Control Variable", expr: () => "Hot water volume & start temp" }
      ],
      explanation: "A larger thermal gradient drives faster heat loss in the ice bath, provided initial water volume and temperature are kept equal."
    }
  },
  {
    globalId: "Q198",
    examId: "Q02951",
    paperRef: "5054/32/M/J/24 Q2(a)",
    pdfPage: 94,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Test-Tube Cooling in Cold Water Bath",
    paperType: "practical",
    marks: 3,
    questionText: `In this experiment you investigate the rate of cooling of hot water in a test-tube in cold water and in warm water.
Pour 200 cm³ of cold water into the beaker.
Ask the supervisor to pour hot water into the test-tube until it is approximately one-third full.
Lower the test-tube into the beaker of cold water until the level of hot water is below the cold water level (Fig. 2.2).
Place the thermometer into the test-tube and wait approximately 30 s.
(i) Measure the temperature θ of the hot water in the test-tube and start the stop-watch immediately. Record in Table 2.1 at t = 0 s. [1]
(ii) Measure the temperature θ of the hot water every 30 s for 180 s. Record your readings in the second column of Table 2.1. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record the temperature of hot water in a test-tube cooling inside a 200 cm³ cold water bath every 30 s for 180 s.",
    givenInfo: [
      "Test-tube one-third full of hot water immersed in 200 cm³ of room temperature cold water.",
      "Cooling timed over 180 s at 30 s intervals."
    ],
    toFind: "Table 2.1 values for cooling in cold water.",
    physicsConcepts: `A small volume of hot water in a thin-walled glass test-tube immersed in a large volume (200 cm³) of cold water cools rapidly.
Thermal energy conducts through the thin glass wall into the large heat sink of surrounding water, causing a substantial temperature drop.`,
    equations: `\\Delta \\theta_{\\text{cold bath}} = \\theta(0) - \\theta(180)`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Initial Temperature",
        body: "After waiting 30 s for thermometer equilibration: θ(0) = 78.0 °C (typical range: 70 °C to 85 °C)."
      },
      {
        step: 2,
        title: "Record Decaying Temperatures in Cold Water",
        body: "t = 30 s: 68.0 °C\nt = 60 s: 60.5 °C\nt = 90 s: 55.0 °C\nt = 120 s: 51.0 °C\nt = 150 s: 48.0 °C\nt = 180 s: 46.0 °C"
      }
    ],
    finalAnswer: "Table 2.1 (Cold water): 0 s: 78.0 °C; 30 s: 68.0 °C; 60 s: 60.5 °C; 90 s: 55.0 °C; 120 s: 51.0 °C; 150 s: 48.0 °C; 180 s: 46.0 °C (typical laboratory values showing a total drop of ~32 °C)",
    reasonablenessCheck: "A small volume of hot water in a test tube cools by 30–35 °C in 3 minutes when surrounded by 200 mL of cold water.",
    commonMistakes: [
      "Allowing the test-tube to touch the beaker sides directly.",
      "Failing to submerge the hot water level below the cold water level."
    ],
    takeaway: "Thin-walled test tubes lose heat rapidly when immersed in a colder liquid bath.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { tempC: 78.0, bathTemp: 20 },
      controls: [],
      readouts: [
        { label: "Initial Hot Water", expr: () => "78.0 °C" },
        { label: "After 180 s in Cold Bath", expr: () => "46.0 °C (Δθ = 32.0 °C)" }
      ],
      explanation: "Heat conducts rapidly through the thin glass wall into the cold water bath, dropping the temperature by ~32 °C."
    }
  },
  {
    globalId: "Q199",
    examId: "Q02952",
    paperRef: "5054/32/M/J/24 Q2(b)",
    pdfPage: 94,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Temperature Reading Accuracy Precautions",
    paperType: "practical",
    marks: 1,
    questionText: `Describe in detail one precaution that you take to make sure that the temperature measurements are as accurate as possible. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State a practical experimental precaution to ensure accurate temperature measurements in the test-tube cooling investigation.",
    givenInfo: [
      "Thermometer placed inside a test-tube of hot water."
    ],
    toFind: "One detailed accuracy precaution.",
    physicsConcepts: `Key accuracy precautions in liquid thermometry:
1. Parallax avoidance: Read scale with line of sight perpendicular to the thermometer stem at the liquid meniscus.
2. Bulb positioning: Ensure thermometer bulb is completely submerged in water and does not touch the glass walls or bottom of the test-tube.
3. Stirring: Stir gently before reading to ensure temperature is uniform throughout the water column.`,
    equations: `\\text{Line of sight } \\perp \\text{ scale avoids parallax; bulb centered in liquid avoids wall contact}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Parallax Precaution",
        body: "View the scale with line of sight perpendicular to the thermometer (at eye level / head-on) to avoid parallax error."
      },
      {
        step: 2,
        title: "Alternative Placement Precaution",
        body: "Ensure the thermometer bulb is fully submerged in the water and does not touch the glass sides or bottom of the test-tube."
      }
    ],
    finalAnswer: "View the thermometer scale with line of sight perpendicular to the stem / at eye level to avoid parallax error (or ensure the thermometer bulb does not touch the sides/bottom of the test-tube / stir gently before reading).",
    reasonablenessCheck: "Viewing off-angle introduces ±1 °C parallax errors on thick-walled glass thermometers.",
    commonMistakes: [
      "Stating 'repeat and average' when asked about taking an accurate single measurement.",
      "Saying 'use a digital thermometer'."
    ],
    takeaway: "View the meniscus at eye level to eliminate parallax error, and keep the bulb centered in the liquid.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Core Precaution", expr: () => "Eye level viewing (No parallax)" },
        { label: "Bulb Placement", expr: () => "Submerged, not touching glass" }
      ],
      explanation: "Viewing the meniscus at eye level prevents parallax error on graduated glass scales."
    }
  },
  {
    globalId: "Q200",
    examId: "Q02953",
    paperRef: "5054/32/M/J/24 Q2(d)&(e)",
    pdfPage: 95,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Cold vs Warm Water Bath Cooling Rates",
    paperType: "practical",
    marks: 4,
    questionText: `(d) Calculate the temperature decrease of the hot water in the test-tube after cooling for 180 s in both the beaker of cold water and the beaker of warm water using Table 2.1.
temperature decrease in cold water = .................... °C
temperature decrease in warm water = .................... °C [1]

(e) (i) Use your answers to (d) to decide how the temperature of the water in the beaker affects the rate of cooling of hot water in the test-tube.
State your conclusion. [2]
(ii) Suggest one improvement to the experimental procedure described in (a) and (c) that allows a more valid comparison to be made between the two rates of cooling. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate temperature decreases in cold versus warm water baths, state the experimental conclusion, and suggest a procedural improvement for a fair comparison.",
    givenInfo: [
      "Cold water bath (~20 °C): hot water drops from 78.0 °C to 46.0 °C (Δθ ≈ 32 °C).",
      "Warm water bath (~40 °C): hot water drops from 78.0 °C to 58.0 °C (Δθ ≈ 20 °C)."
    ],
    toFind: "Temperature drops, conclusion, and valid procedural improvement.",
    physicsConcepts: `1. Temperature decrease comparison: In the cold bath, the temperature difference between hot water and surrounding bath is larger (~58 °C vs ~38 °C), driving faster heat conduction through the test tube walls. Thus, the temperature decrease in cold water is larger than in warm water.
2. Conclusion: A lower surrounding water bath temperature increases the rate of cooling of hot water in the test-tube.
3. Improvement: Ensure the starting temperature of the hot water in the test-tube is identical in both runs, or use a lid/insulation on the beaker to prevent the bath itself from cooling.`,
    equations: `\\Delta \\theta_{\\text{cold}} > \\Delta \\theta_{\\text{warm}} \\implies \\text{Lower bath temperature} \\implies \\text{Higher cooling rate}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (d) Calculate Temperature Drops",
        body: "Cold water: Δθ = 78.0 °C - 46.0 °C = 32.0 °C.\nWarm water: Δθ = 78.0 °C - 58.0 °C = 20.0 °C."
      },
      {
        step: 2,
        title: "Part (e)(i) State Conclusion",
        body: "The lower the temperature of the water in the beaker, the greater the rate of cooling of the hot water in the test-tube (or rate of cooling decreases as beaker temperature increases)."
      },
      {
        step: 3,
        title: "Part (e)(ii) Suggest Improvement",
        body: "Ensure the initial temperature of the hot water in the test-tube is the same at the start of both experiments / stir the water in the beaker / insulate the beaker so the bath temperature remains constant."
      }
    ],
    finalAnswer: "(d) Cold water decrease: 32.0 °C; Warm water decrease: 20.0 °C;\n(e)(i) The lower the temperature of the water in the beaker, the faster / greater the rate of cooling of hot water in the test-tube;\n(e)(ii) Ensure the starting temperature of hot water in the test-tube is identical for both trials (or stir the water in the beaker / insulate the beaker).",
    reasonablenessCheck: "A larger temperature gap between test-tube water and water bath drives faster heat transfer, producing a larger 180 s drop.",
    commonMistakes: [
      "Stating 'cold water absorbs more heat' without linking to rate of cooling.",
      "Suggesting an improvement that alters the independent variable."
    ],
    takeaway: "Lower surrounding bath temperatures increase cooling rates; fair testing requires matching the initial hot water temperature in both trials.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { bathColdT: 20, bathWarmT: 40 },
      controls: [],
      readouts: [
        { label: "Cold Bath Drop", expr: () => "32.0 °C (Faster)" },
        { label: "Warm Bath Drop", expr: () => "20.0 °C (Slower)" }
      ],
      explanation: "Hot water loses heat faster in cold water (32 °C drop) than in warm water (20 °C drop) over the same 180 s period."
    }
  },
  {
    globalId: "Q201",
    examId: "Q01115",
    paperRef: "5054/32/O/N/25 Q2(a)",
    pdfPage: 96,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Thermal Radiation Absorption of White Card",
    paperType: "practical",
    marks: 3,
    questionText: `In this experiment, you will investigate the absorption of thermal radiation by different coloured surfaces.
A lamp is placed level with the thermometer bulb, which has a piece of white card attached to it.
Distance d from lamp to card is approximately 1 cm (Fig. 2.1).
(i) Record, in Table 2.1, the initial temperature θ_W shown on the thermometer at t = 0 s. [1]
(ii) Switch on the lamp, and at the same time, start the stopwatch.
Record, in Table 2.1, the reading on the thermometer every 60 s for 300 s. Switch off the lamp. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record initial and 60 s interval temperatures over 300 s for a thermometer bulb covered with white card positioned 1 cm from an incandescent lamp.",
    givenInfo: [
      "Thermometer bulb wrapped in white card.",
      "Distance to filament d = 1.0 cm.",
      "Times: 0, 60, 120, 180, 240, 300 s."
    ],
    toFind: "Table 2.1 values for white card heating.",
    physicsConcepts: `Thermal radiation absorption:
An incandescent filament lamp emits visible light and infrared radiation.
White surfaces are poor absorbers and good reflectors of thermal radiation.
Although the temperature increases over 300 s, the temperature rise is moderate because most incident radiation is reflected.`,
    equations: `\\theta_W(t) = \\theta_0 + \\Delta \\theta_W(t); \\quad \\Delta \\theta_{\\text{white}} < \\Delta \\theta_{\\text{black}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Initial Temperature θ_W",
        body: "At t = 0 s (lamp off): θ_W = 21.0 °C (typical room temperature, 19.0 °C to 24.0 °C)."
      },
      {
        step: 2,
        title: "Record Increasing Temperatures in Table 2.1",
        body: "t = 60 s: 23.5 °C\nt = 120 s: 25.5 °C\nt = 180 s: 27.0 °C\nt = 240 s: 28.0 °C\nt = 300 s: 29.0 °C"
      }
    ],
    finalAnswer: "Table 2.1 (White card): 0 s: 21.0 °C; 60 s: 23.5 °C; 120 s: 25.5 °C; 180 s: 27.0 °C; 240 s: 28.0 °C; 300 s: 29.0 °C (typical laboratory values showing ~8 °C rise)",
    reasonablenessCheck: "White card warms by ~8 °C over 5 minutes because it reflects most of the incident thermal radiation.",
    commonMistakes: [
      "Starting timing before switching on the lamp.",
      "Placing the thermometer at varying distances from the lamp."
    ],
    takeaway: "White surfaces reflect most incident infrared radiation, resulting in a modest rate of temperature rise.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { surfaceType: "white", timeSec: 300 },
      controls: [
        { id: "timeSec", name: "Exposure Time", min: 60, max: 300, step: 60, default: 300, unit: "s" }
      ],
      readouts: [
        { label: "White Card Temp", expr: (p) => (21.0 + (p.timeSec / 300) * 8.0).toFixed(1) + " °C" },
        { label: "Reflection", expr: () => "HIGH (Poor Absorber)" }
      ],
      explanation: "White card reflects most incident thermal radiation, warming slowly to ~29 °C."
    }
  },
  {
    globalId: "Q202",
    examId: "Q01116",
    paperRef: "5054/32/O/N/25 Q2(b)",
    pdfPage: 97,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Thermal Radiation Absorption of Black Card",
    paperType: "practical",
    marks: 2,
    questionText: `Carefully remove the thermometer from the clamp and place it on the bench.
Place the thermometer which has a piece of black card attached to its bulb in the clamp.
Make sure that the black card is facing the lamp and that the bulb of the thermometer is level with the filament of the lamp.
Adjust the distance d between the lamp and the black card so that it is approximately 1 cm.
Repeat the procedure in (a)(i) and (a)(ii) and record, in Table 2.1, the temperatures for the black card θ_B. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Repeat the heating procedure using a thermometer covered with black card at distance d = 1 cm and record temperatures in Table 2.1.",
    givenInfo: [
      "Thermometer bulb wrapped in black card.",
      "Same lamp, same distance d = 1.0 cm.",
      "Times: 0, 60, 120, 180, 240, 300 s."
    ],
    toFind: "Table 2.1 values for black card heating.",
    physicsConcepts: `Dull black surfaces are good absorbers of thermal radiation.
Under identical radiant intensity from the lamp, the black card absorbs infrared radiation at a much higher rate than the white card, transferring more thermal energy to the bulb and producing a faster, larger temperature rise.`,
    equations: `\\Delta \\theta_{\\text{black}} > \\Delta \\theta_{\\text{white}}; \\quad \\alpha_{\\text{black}} \\approx 0.95 \\gg \\alpha_{\\text{white}} \\approx 0.15`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Initial Temperature θ_B",
        body: "At t = 0 s (lamp off): θ_B = 21.0 °C (identical baseline room temperature)."
      },
      {
        step: 2,
        title: "Record Rapidly Increasing Temperatures for Black Card",
        body: "t = 60 s: 26.5 °C\nt = 120 s: 31.0 °C\nt = 180 s: 34.5 °C\nt = 240 s: 37.0 °C\nt = 300 s: 39.0 °C"
      }
    ],
    finalAnswer: "Table 2.1 (Black card): 0 s: 21.0 °C; 60 s: 26.5 °C; 120 s: 31.0 °C; 180 s: 34.5 °C; 240 s: 37.0 °C; 300 s: 39.0 °C (typical laboratory values showing ~18 °C rise)",
    reasonablenessCheck: "The black card rises by 18.0 °C (to 39.0 °C) compared to only 8.0 °C for the white card, consistent with black being a strong absorber of thermal radiation.",
    commonMistakes: [
      "Changing the distance d between the black card run and white card run.",
      "Starting with a thermometer that is already warm from previous use."
    ],
    takeaway: "Dull black surfaces absorb thermal radiation rapidly, producing a much larger temperature rise than white surfaces.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { surfaceType: "black", timeSec: 300 },
      controls: [
        { id: "timeSec", name: "Exposure Time", min: 60, max: 300, step: 60, default: 300, unit: "s" }
      ],
      readouts: [
        { label: "Black Card Temp", expr: (p) => (21.0 + (p.timeSec / 300) * 18.0).toFixed(1) + " °C" },
        { label: "Absorption", expr: () => "HIGH (Good Absorber)" }
      ],
      explanation: "The black card absorbs most incident radiation, warming to ~39 °C over 300 s."
    }
  },
  {
    globalId: "Q203",
    examId: "Q01117",
    paperRef: "5054/32/O/N/25 Q2(c)",
    pdfPage: 98,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Temperature Increase and Rate of Heating Calculations",
    paperType: "practical",
    marks: 3,
    questionText: `(i) Determine the temperature increase Δθ between t = 0 and t = 300 s for each card.
Δθ for white card = .................... °C
Δθ for black card = .................... °C [1]

(ii) Calculate the average rate of increase of temperature of each card. Use the equation:
average rate of temperature increase = Δθ / t
where t = 300 s.
Include the unit in your answers.
average rate of temperature increase of white card = .................... unit ....................
average rate of temperature increase of black card = .................... unit .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate total temperature rise Δθ and average heating rates (Δθ / 300 s) for both white and black cards, stating units.",
    givenInfo: [
      "White card: θ(0) = 21.0 °C, θ(300) = 29.0 °C",
      "Black card: θ(0) = 21.0 °C, θ(300) = 39.0 °C",
      "Time interval t = 300 s"
    ],
    toFind: "Temperature increases Δθ_W and Δθ_B, and heating rates with units.",
    physicsConcepts: `1. Temperature increase:
\\Delta \\theta = \\theta(300\\text{ s}) - \\theta(0\\text{ s})
2. Average rate of temperature increase:
\\text{Rate} = \\frac{\\Delta \\theta}{t} = \\frac{\\Delta \\theta}{300}
Unit: °C/s (or °C s⁻¹).`,
    equations: `\\Delta \\theta_W = 29.0 - 21.0 = 8.0^\\circ\\text{C}; \\quad \\text{Rate}_W = \\frac{8.0}{300} = 0.0267^\\circ\\text{C/s}; \\quad \\Delta \\theta_B = 39.0 - 21.0 = 18.0^\\circ\\text{C}; \\quad \\text{Rate}_B = \\frac{18.0}{300} = 0.060^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Calculate Temperature Increases",
        body: "White card: Δθ = 29.0 °C - 21.0 °C = 8.0 °C.\nBlack card: Δθ = 39.0 °C - 21.0 °C = 18.0 °C."
      },
      {
        step: 2,
        title: "Part (ii) Calculate Heating Rate for White Card",
        body: "Rate_white = 8.0 °C / 300 s = 0.0267 °C/s ≈ 0.027 °C/s."
      },
      {
        step: 3,
        title: "Part (ii) Calculate Heating Rate for Black Card",
        body: "Rate_black = 18.0 °C / 300 s = 0.060 °C/s."
      },
      {
        step: 4,
        title: "State Units",
        body: "Unit for both rates: °C/s."
      }
    ],
    finalAnswer: "(i) Δθ for white card = 8.0 °C; Δθ for black card = 18.0 °C;\n(ii) White card rate = 0.027 °C/s, unit: °C/s; Black card rate = 0.060 °C/s, unit: °C/s.",
    reasonablenessCheck: "The heating rate for the black card (0.060 °C/s) is more than double that of the white card (0.027 °C/s), consistent with radiation absorption theory.",
    commonMistakes: [
      "Omitting the unit or writing only °C instead of °C/s.",
      "Dividing 300 by Δθ instead of Δθ by 300."
    ],
    takeaway: "Heating rate = Δθ / t in °C/s; black surfaces heat more than twice as fast as white surfaces under infrared radiation.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { dThetaW: 8.0, dThetaB: 18.0 },
      controls: [],
      readouts: [
        { label: "White Rate", expr: () => "0.027 °C/s" },
        { label: "Black Rate", expr: () => "0.060 °C/s" },
        { label: "Absorption Ratio", expr: () => "2.25x Higher for Black" }
      ],
      explanation: "Dividing temperature rise by 300 s gives a heating rate of 0.060 °C/s for black vs 0.027 °C/s for white."
    }
  },
  {
    globalId: "Q204",
    examId: "Q01117_D",
    paperRef: "5054/32/O/N/25 Q2(d)",
    pdfPage: 98,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Radiation Absorption Conclusion",
    paperType: "practical",
    marks: 1,
    questionText: `Use your answers to (c)(ii) to deduce a conclusion which compares the absorption of thermal radiation by the two different coloured cards.
State your conclusion. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State an experimental conclusion comparing thermal radiation absorption by black and white surfaces based on calculated heating rates.",
    givenInfo: [
      "Rate of heating of black card (0.060 °C/s) is greater than white card (0.027 °C/s)."
    ],
    toFind: "Comparative conclusion about thermal radiation absorption.",
    physicsConcepts: `Thermal radiation surface properties:
The rate of temperature rise reflects the rate of net thermal energy absorption.
Because the black card experiences a higher rate of temperature rise under identical radiant exposure, black surfaces are better absorbers of thermal radiation than white surfaces (or absorb radiation at a greater rate).`,
    equations: `\\text{Rate}_B > \\text{Rate}_W \\implies \\text{Black surface is a better absorber of thermal radiation}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compare Quantitative Rates",
        body: "The rate of temperature increase of the black card (0.060 °C/s) is greater than that of the white card (0.027 °C/s)."
      },
      {
        step: 2,
        title: "Deduce Radiation Conclusion",
        body: "A black surface absorbs thermal radiation at a greater rate than a white surface (or black is a better / more effective absorber of thermal radiation than white)."
      }
    ],
    finalAnswer: "The black card / surface absorbs thermal radiation at a greater rate than the white card (or black is a better absorber of thermal radiation than white).",
    reasonablenessCheck: "Dull black surfaces absorb >90% of incident infrared radiation, while white surfaces reflect most of it.",
    commonMistakes: [
      "Stating 'black is a better emitter' (the experiment measures *absorption*, not emission).",
      "Stating black attracts heat (heat is absorbed, not attracted)."
    ],
    takeaway: "Black surfaces absorb thermal radiation at a significantly higher rate than white surfaces.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Experimental Conclusion", expr: () => "Black is a better absorber of thermal radiation than white" }
      ],
      explanation: "Higher heating rates confirm that black surfaces absorb thermal radiation more effectively than white surfaces."
    }
  },
  {
    globalId: "Q205",
    examId: "Q01117_E",
    paperRef: "5054/32/O/N/25 Q2(e)",
    pdfPage: 98,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Control Variables in Radiation Experiments",
    paperType: "practical",
    marks: 2,
    questionText: `State two variables that should be controlled in this experiment to ensure a valid conclusion.
controlled variable 1: ........................................................................................
controlled variable 2: ........................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify two key physical variables that must be kept constant when comparing radiation absorption between black and white surfaces.",
    givenInfo: [
      "Comparing absorption of radiation between black and white cards exposed to an incandescent lamp."
    ],
    toFind: "Two valid controlled variables.",
    physicsConcepts: `Fair testing in thermal radiation absorption:
To isolate surface color as the only independent variable, all factors affecting radiation intensity and thermal capacity must remain constant:
1. Distance d: Radiant intensity follows the inverse-square law; distance from filament to card must be identical (1.0 cm).
2. Lamp brightness / power: Supply voltage and bulb wattage must remain constant.
3. Card dimensions / area: Exposed surface area must be identical.
4. Card material / thickness: Cardboard type and thickness must be identical so thermal capacity is equal.
5. Orientation: Card angle relative to filament must be perpendicular in both runs.
6. Initial temperature: Both runs should start at the same ambient temperature.`,
    equations: `I \\propto \\frac{P_{\\text{lamp}}}{4 \\pi d^2} \\implies \\text{Keep } d, P_{\\text{lamp}}, A_{\\text{card}} \\text{ constant}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Distance Variable",
        body: "Distance d between the lamp and the card (must remain at 1.0 cm)."
      },
      {
        step: 2,
        title: "Identify Source & Card Variables",
        body: "Power / brightness of the lamp / size (surface area) of the card / material and thickness of the card / starting temperature."
      }
    ],
    finalAnswer: "1. Distance between the lamp and the card (d);\n2. Power / brightness / voltage of the lamp (or surface area / size of the card / starting temperature).",
    reasonablenessCheck: "A small change in distance (e.g. from 1 cm to 2 cm) reduces radiation intensity by a factor of 4, invalidating the color comparison.",
    commonMistakes: [
      "Stating color of card (that is the independent variable being tested).",
      "Stating final temperature."
    ],
    takeaway: "Distance from radiation source and card surface area must be kept constant to ensure a fair comparison of surface absorption.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { distanceCm: 1.0, powerW: 60 },
      controls: [
        { id: "distanceCm", name: "Distance from Lamp d", min: 0.5, max: 4.0, step: 0.5, default: 1.0, unit: "cm" }
      ],
      readouts: [
        { label: "Control 1 (Distance)", expr: (p) => p.distanceCm + " cm (Constant)" },
        { label: "Control 2 (Power)", expr: () => "60 W (Constant)" }
      ],
      explanation: "Keeping distance and lamp power constant ensures differences in heating rate are due solely to surface color."
    }
  }
];