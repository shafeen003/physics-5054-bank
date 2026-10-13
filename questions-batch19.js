/**
 * Master Question Store: Batch 19 (Q266 to Q280)
 * Section 2.2: Thermal Properties and Temperature (Paper 4 ATP Part 3)
 */

const QUESTIONS_BATCH_19 = [
  {
    globalId: "Q266",
    examId: "Q02460",
    paperRef: "5054/41/M/J/24 Q2(i)(iii)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Graph Plotting for Bare vs Insulated Beakers",
    paperType: "atp",
    marks: 4,
    questionText: `A student investigates the rate of cooling of hot water in an uninsulated beaker and an insulated beaker with a lid[cite: 128].
Table 2.1 (uninsulated beaker):
t / s: 0, 30, 60, 90, 120, 150, 180[cite: 91]
θ / °C: 85, 78, 73, 69, 66, 63, 61
Table 2.2 (insulated beaker with a lid):
t / s: 0, 30, 60, 90, 120, 150, 180
θ / °C: 85, 83, 81, 80, 79, 78, 77

On the grid provided, plot a graph of temperature θ on the y-axis against time t on the x-axis for both beakers[cite: 102].
Draw smooth curves of best fit for each set of data and label them 'uninsulated' and 'insulated'[cite: 102]. [4]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Plot experimental cooling curves for both the uninsulated beaker and the insulated beaker with a lid on the same grid, choose linear scales, plot all points, and draw smooth curves of best fit[cite: 102].",
    givenInfo: [
      "x-axis: time t / s from 0 to 180 s.",
      "y-axis: temperature θ / °C from 55 °C to 90 °C (false origin allowed)[cite: 102].",
      "Data for uninsulated beaker (85 °C down to 61 °C).",
      "Data for insulated beaker with lid (85 °C down to 77 °C)."
    ],
    toFind: "Criteria-compliant graphical representation of both cooling curves on a single set of axes[cite: 102].",
    physicsConcepts: `Cambridge graph-plotting criteria[cite: 102]:
1. Axes: Clearly labeled with physical quantity and unit (time t / s and temperature θ / °C)[cite: 102].
2. Scales: Linear, sensible increments (e.g. 2 cm = 20 s or 50 s on x-axis; 2 cm = 5 °C on y-axis), occupying more than half the grid area[cite: 102].
3. Points: Plotted accurately to within half a small square using neat crosses (x) or encircled dots.
4. Line quality: Smooth, continuous curves of best fit with negative gradients that decrease in steepness over time[cite: 102]. No forced straight lines or jagged connections.
5. Identification: Clear labels distinguishing the 'uninsulated' and 'insulated' curves[cite: 102].`,
    equations: `\\text{Rate of cooling} = -\\frac{d\\theta}{dt}; \\quad |\\text{Gradient}_{\\text{uninsulated}}| > |\\text{Gradient}_{\\text{insulated}}|`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Scale Selection",
        body: "x-axis: 0 to 200 s (2 cm = 20 s or 50 s), starting at 0[cite: 102]. y-axis: 55 °C to 90 °C (2 cm = 5 °C), starting at 55 °C or 60 °C (false origin permitted)[cite: 102]."
      },
      {
        step: 2,
        title: "Plot Uninsulated Beaker Data",
        body: "Plot (0, 85), (30, 78), (60, 73), (90, 69), (120, 66), (150, 63), (180, 61). Draw a smooth downward curve with decreasing steepness; label 'uninsulated'."
      },
      {
        step: 3,
        title: "Plot Insulated Beaker Data",
        body: "Plot (0, 85), (30, 83), (60, 81), (90, 80), (120, 79), (150, 78), (180, 77). Draw a smooth curve lying above the uninsulated curve; label 'insulated'."
      }
    ],
    finalAnswer: "Both datasets plotted within 0.5 small square; linear axes labeled with units; smooth curves of best fit drawn and labeled 'uninsulated' and 'insulated', with the insulated curve displaying a shallower gradient throughout[cite: 102].",
    reasonablenessCheck: "The insulated curve stays above the uninsulated curve at all times t > 0, illustrating reduced heat loss through the lid and lagging.",
    commonMistakes: [
      "Plotting time in minutes instead of seconds.",
      "Drawing straight dot-to-dot line segments instead of a smooth curve[cite: 102].",
      "Omitting curve labels."
    ],
    takeaway: "Ensure scales take up over half the grid, plot points with neat crosses, and draw smooth continuous curves of best fit[cite: 102].",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { plotTwinCurves: true },
      controls: [],
      readouts: [
        { label: "Uninsulated Curve", expr: () => "Steep decay (61 °C at 180 s)" },
        { label: "Insulated Curve", expr: () => "Shallow decay (77 °C at 180 s)" }
      ],
      explanation: "Canvas displays both cooling curves plotted on the same grid, showing how insulation and a lid flatten the cooling slope."
    }
  },
  {
    globalId: "Q267",
    examId: "Q02461",
    paperRef: "5054/41/M/J/24 Q2(i)(iv)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Tangent Gradient Determination from Cooling Curve",
    paperType: "atp",
    marks: 2,
    questionText: `Using your graph from Figure 2.2, determine the rate of cooling of the uninsulated beaker at time t = 60 s[cite: 128].
Show clearly on your graph how you obtained your answer[cite: 128].
rate of cooling at 60 s = .................... °C/s [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Determine the instantaneous cooling rate of the uninsulated beaker at t = 60 s by drawing a tangent to the curve and calculating its gradient[cite: 128].",
    givenInfo: [
      "Cooling curve for the uninsulated beaker[cite: 128].",
      "Target time t = 60 s[cite: 128]."
    ],
    toFind: "Instantaneous rate of cooling at t = 60 s in °C/s with tangent construction lines[cite: 128].",
    physicsConcepts: `Instantaneous rate of cooling from a curved graph[cite: 128]:
1. Draw a tangent to the curve at the point where t = 60 s[cite: 128].
2. Form a large right-angled triangle with hypotenuse along the tangent.
3. Calculate the gradient:
$$\\text{Rate} = \\left|\\frac{\\Delta \\theta}{\\Delta t}\\right| = \\frac{\\theta_1 - \\theta_2}{t_2 - t_1}$$
At t = 60 s, the temperature is 73 °C and the slope is approximately -0.13 °C/s to -0.15 °C/s.`,
    equations: `\\text{Rate} = \\left|\\frac{\\Delta \\theta}{\\Delta t}\\right| \\in [0.12, 0.16] \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Construct Tangent at t = 60 s",
        body: "Place a ruler against the uninsulated curve at t = 60 s (θ = 73 °C) and draw a straight line touching the curve at this single point[cite: 128]."
      },
      {
        step: 2,
        title: "Determine Triangle Coordinates",
        body: "Select two widely spaced points on the tangent line: for example, (0 s, 81.5 °C) and (120 s, 64.5 °C)."
      },
      {
        step: 3,
        title: "Calculate Gradient",
        body: "Δθ = 81.5 °C - 64.5 °C = 17.0 °C.\nΔt = 120 s - 0 s = 120 s.\nRate = 17.0 °C / 120 s = 0.142 °C/s ≈ 0.14 °C/s."
      }
    ],
    finalAnswer: "0.14 °C/s (acceptable range: 0.12 °C/s to 0.16 °C/s, with clear tangent construction shown on the graph)[cite: 128]",
    reasonablenessCheck: "The rate at 60 s (0.14 °C/s) lies smoothly between the initial rate (0.18 °C/s) and the final rate (0.09 °C/s).",
    commonMistakes: [
      "Omitting the tangent line and merely dividing coordinates: 73 / 60.",
      "Using too small a triangle for gradient calculation.",
      "Writing a negative sign for cooling rate."
    ],
    takeaway: "To find the instantaneous rate of cooling on a curve, draw a tangent at the given time and calculate its gradient.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { tangentTime: 60 },
      controls: [],
      readouts: [
        { label: "Tangent Point", expr: () => "t = 60 s, θ = 73 °C" },
        { label: "Tangent Slope", expr: () => "0.142 °C/s" }
      ],
      explanation: "A tangent drawn at t = 60 s yields an instantaneous cooling rate of ~0.14 °C/s."
    }
  },
  {
    globalId: "Q268",
    examId: "Q01912",
    paperRef: "5054/42/M/J/24 Q2",
    pdfPage: 131,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Water Bath Test-Tube Cooling Investigation Suite",
    paperType: "atp",
    marks: 10,
    questionText: `A student investigates the rate of cooling of hot water in a test-tube under two different surrounding conditions: cooling in cold water and cooling in warm water (Figure 2.1 and Figure 2.2)[cite: 94, 131].
Apparatus provided: test-tube, 250 cm³ beaker, thermometer (-10 °C to 110 °C), measuring cylinder, stopwatch, clamp, boss and stand[cite: 94].
The test-tube is filled one-third full with hot water and lowered into a beaker containing 200 cm³ of cold water[cite: 94].
The water level in the test-tube is below the water level in the beaker[cite: 94].

(a) Describe in detail one precaution taken to ensure temperature readings are as accurate as possible[cite: 94]. [1]
(b) Table 2.1 records the temperature θ every 30 s for 180 s[cite: 94].
(i) Temperature decreases from 80.0 °C to 48.0 °C in cold water, and from 80.0 °C to 60.0 °C in warm water[cite: 94, 95].
Calculate the temperature decrease in both conditions[cite: 95]. [1]
(ii) State your conclusion regarding how the beaker water temperature affects cooling rate[cite: 95]. [2]
(iii) Suggest one improvement to the experimental procedure that allows a more valid comparison[cite: 95]. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Carry out the full ATP analytical evaluation of test-tube water cooling inside cold and warm water baths, state measurement precautions, compute temperature decreases, deduce the physical conclusion, and suggest fair-testing improvements[cite: 94, 95, 131].",
    givenInfo: [
      "Test-tube one-third full of hot water immersed in 200 cm³ of water in a beaker[cite: 94].",
      "Condition 1: Beaker contains cold water (~20 °C)[cite: 94].",
      "Condition 2: Beaker contains warm water (~40 °C)[cite: 94].",
      "Cooling timed over 180 s[cite: 94]."
    ],
    toFind: "Accuracy precaution, calculated temperature drops, conclusion on bath temperature effect, and fair-testing improvement[cite: 94, 95].",
    physicsConcepts: `Rate of cooling in liquid immersion baths[cite: 95]:
1. Heat conducts through the thin glass wall of the test-tube directly into the water bath[cite: 94].
2. Because water has high thermal conductivity and thermal capacity, the temperature difference between the hot water inside the test-tube and the surrounding bath governs the cooling rate[cite: 95]:
$$\\frac{dQ}{dt} \\propto (\\theta_{\\text{tube}} - \\theta_{\\text{bath}})$$
3. In a cold water bath (~20 °C), the temperature difference is larger, producing faster heat conduction and a larger temperature drop[cite: 95].
4. In a warm water bath (~40 °C), the temperature difference is smaller, resulting in slower cooling[cite: 95].`,
    equations: `\\Delta \\theta = \\theta_0 - \\theta_{180}; \\quad \\Delta \\theta_{\\text{cold bath}} > \\Delta \\theta_{\\text{warm bath}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This master entry coordinates subparts Q269 through Q271 for the Paper 4 water bath investigation on PDF pages 131–133[cite: 131]."
      }
    ],
    finalAnswer: "Full subpart calculations, deductions, and procedural improvements are detailed in records Q269 to Q271 below[cite: 94, 95].",
    reasonablenessCheck: "Hot water cools much faster when immersed in cold water (32 °C drop) than in warm water (20 °C drop) over the same 180 s period[cite: 95].",
    commonMistakes: [
      "Allowing the hot water level in the test-tube to sit higher than the water level in the beaker[cite: 94].",
      "Failing to control the initial hot water temperature between trials[cite: 95]."
    ],
    takeaway: "The rate of heat loss from an immersed test-tube depends directly on the temperature difference between the liquid inside and the surrounding water bath[cite: 95].",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { bathColdT: 20, bathWarmT: 40 },
      controls: [
        { id: "bathColdT", name: "Cold Bath Temp", min: 10, max: 25, step: 5, default: 20, unit: "°C" }
      ],
      readouts: [
        { label: "Cold Bath Drop", expr: () => "32.0 °C (Faster)" },
        { label: "Warm Bath Drop", expr: () => "20.0 °C (Slower)" }
      ],
      explanation: "A cold water bath maintains a larger thermal gradient across the glass wall, driving a faster cooling rate[cite: 95]."
    }
  },
  {
    globalId: "Q269",
    examId: "Q01913",
    paperRef: "5054/42/M/J/24 Q2(a)",
    pdfPage: 131,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Test-Tube Submersion Level Precaution",
    paperType: "atp",
    marks: 1,
    questionText: `The student lowers the test-tube into the beaker of cold water until the level of the hot water in the test-tube is below the level of the cold water in the beaker (Fig. 2.2)[cite: 94, 131].
Explain why it is important that the level of the hot water in the test-tube is below the level of the water in the beaker[cite: 94]. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the experimental necessity of ensuring the liquid level inside the test-tube is completely below the outer water bath surface[cite: 94].",
    givenInfo: [
      "Hot water is in a test-tube[cite: 94].",
      "Cold water is in the surrounding beaker[cite: 94].",
      "Test-tube liquid level is submerged below the beaker water level[cite: 94]."
    ],
    toFind: "Physical justification for maintaining the hot water level below the water bath level[cite: 94].",
    physicsConcepts: `Uniform heat transfer and complete immersion[cite: 94]:
If the hot water level inside the test-tube extended above the surrounding water bath, the upper portion of the liquid would cool by exposure to room air rather than by conduction through glass to the water bath.
Keeping the entire volume of hot water below the water bath surface ensures that all of the hot water is surrounded by the water bath, so heat transfer occurs uniformly into the bath at the designated temperature.`,
    equations: `\\text{Liquid height in tube } h_{\\text{tube}} < \\text{Bath height } h_{\\text{beaker}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Thermal Boundary Conditions",
        body: "Any portion of hot water above the water bath level would be surrounded by air, introducing uncontrolled air-cooling."
      },
      {
        step: 2,
        title: "State Operational Justification",
        body: "To ensure that all of the hot water is surrounded by the water in the beaker / so that heat transfer occurs completely into the water bath."
      }
    ],
    finalAnswer: "To ensure all of the hot water in the test-tube is surrounded by the water in the beaker (or so the entire volume of hot water cools into the water bath).",
    reasonablenessCheck: "Unsubmerged liquid forms a warm stagnant layer cooled only by air, which distorts the test-tube's cooling curve.",
    commonMistakes: [
      "Saying 'to prevent water from spilling into the beaker'[cite: 92].",
      "Saying 'so the test tube does not float'."
    ],
    takeaway: "The liquid being tested must be fully submerged below the bath surface so that heat transfer occurs uniformly into the bath[cite: 94].",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Immersion Level", expr: () => "Fully below bath surface[cite: 94]" },
        { label: "Boundary Condition", expr: () => "Uniform conduction into bath" }
      ],
      explanation: "Full submersion ensures that all hot water transfers heat into the surrounding liquid rather than escaping into air[cite: 94]."
    }
  },
  {
    globalId: "Q270",
    examId: "Q01914",
    paperRef: "5054/42/M/J/24 Q2(b)",
    pdfPage: 131,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Parallax and Stirring Precautions in Bath Testing",
    paperType: "atp",
    marks: 1,
    questionText: `Describe in detail one precaution that you take to make sure that the temperature measurements are as accurate as possible[cite: 94]. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State an experimental precaution taken to ensure accurate temperature measurements in the water bath test-tube experiment[cite: 94].",
    givenInfo: [
      "Thermometer placed inside a test-tube of hot water surrounded by a beaker water bath[cite: 94]."
    ],
    toFind: "One valid temperature measurement precaution[cite: 94].",
    physicsConcepts: `Precautions for thermometry in narrow test tubes[cite: 94]:
1. Parallax avoidance: Read the thermometer scale with line of sight perpendicular to the stem at the level of the liquid meniscus.
2. Immersion & clearance: Ensure the bulb is fully submerged in the water and does not touch the glass walls or bottom of the test-tube.
3. Stirring: Stir gently before reading so that temperature is uniform throughout the liquid column.
4. Wait for equilibrium: Wait 30 s after immersion before recording the initial temperature[cite: 94].`,
    equations: `\\text{Line of sight } \\perp \\text{ scale stem} \\implies \\text{Zero parallax error}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Parallax Precaution",
        body: "View the scale with line of sight perpendicular to the thermometer (at eye level with the meniscus) to avoid parallax error."
      },
      {
        step: 2,
        title: "Identify Placement Precaution",
        body: "Alternatively, ensure the thermometer bulb is completely submerged and does not touch the sides or bottom of the test-tube (or stir gently before reading)."
      }
    ],
    finalAnswer: "Read the thermometer with line of sight perpendicular to the scale / at eye level with the meniscus to avoid parallax error (or ensure the bulb does not touch the sides/bottom of the test-tube / stir gently before reading).",
    reasonablenessCheck: "In narrow tubes, touching the glass measures the conduction boundary layer rather than the bulk liquid temperature.",
    commonMistakes: [
      "Giving a vague answer like 'measure carefully'.",
      "Stating 'repeat and average' when asked about taking an accurate single reading[cite: 94]."
    ],
    takeaway: "View scale markings at eye level to eliminate parallax error, and keep the bulb centered in the liquid without touching the glass.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Core Precaution", expr: () => "Eye level viewing (No parallax)" },
        { label: "Bulb Position", expr: () => "Submerged, not touching glass" }
      ],
      explanation: "Viewing the meniscus perpendicular to the scale prevents refractive parallax errors across the curved glass."
    }
  },
  {
    globalId: "Q271",
    examId: "Q01915",
    paperRef: "5054/42/M/J/24 Q2(i)",
    pdfPage: 131,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Water Bath Temperature and Cooling Rate Deduction",
    paperType: "atp",
    marks: 3,
    questionText: `(i) In cold water, the hot water temperature decreases by 32 °C in 180 s[cite: 95].
In warm water, the hot water temperature decreases by 20 °C in 180 s[cite: 95].
State your conclusion on how the temperature of the water in the beaker affects the rate of cooling of hot water in the test-tube[cite: 95]. [2]

(ii) Suggest one improvement to the experimental procedure that allows a more valid comparison to be made between the two rates of cooling[cite: 95]. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Deduce the relationship between water bath temperature and test-tube cooling rate, and suggest a fair-testing procedural improvement[cite: 95].",
    givenInfo: [
      "Cold water bath drop: 32 °C in 180 s (Rate ≈ 0.178 °C/s)[cite: 95].",
      "Warm water bath drop: 20 °C in 180 s (Rate ≈ 0.111 °C/s)[cite: 95]."
    ],
    toFind: "Stated conclusion on cooling rate, and one procedural improvement[cite: 95].",
    physicsConcepts: `1. Physical conclusion: The rate of cooling depends on the temperature difference between the hot liquid and the surrounding bath[cite: 95].
A lower bath temperature creates a larger thermal gradient across the glass wall, resulting in a higher rate of thermal energy transfer:
$$\\text{Rate of cooling} \\propto (\\theta_{\\text{tube}} - \\theta_{\\text{bath}})$$
2. Procedural improvement:
   - Ensure the starting temperature of the hot water in the test-tube is identical in both runs[cite: 95].
   - Stir the water in the surrounding beaker bath to keep its temperature uniform[cite: 95].
   - Insulate the beaker or cover it with a lid so the water bath temperature remains steady throughout the 180 s[cite: 95].`,
    equations: `\\text{Rate}_{\\text{cold bath}} > \\text{Rate}_{\\text{warm bath}} \\implies \\text{Lower bath temperature} \\implies \\text{Higher cooling rate}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) State Conclusion",
        body: "The lower the temperature of the water in the beaker, the greater / faster the rate of cooling of the hot water in the test-tube (or rate of cooling decreases as beaker temperature increases)[cite: 95]."
      },
      {
        step: 2,
        title: "Part (ii) Suggest Procedural Improvement",
        body: "Ensure the initial / starting temperature of the hot water in the test-tube is the same in both experiments / stir the water in the beaker bath / insulate the beaker so the bath temperature stays constant[cite: 95]."
      }
    ],
    finalAnswer: "(i) The lower the temperature of the water in the beaker, the greater / faster the rate of cooling of hot water in the test-tube[cite: 95];\n(ii) Ensure the starting temperature of the hot water in the test-tube is the same for both trials (or stir the water in the beaker / insulate the beaker)[cite: 95].",
    reasonablenessCheck: "A colder bath maintains a steeper thermal gradient across the glass wall, driving faster heat loss[cite: 95].",
    commonMistakes: [
      "Stating 'cold water has more energy'.",
      "Suggesting an improvement that alters the test-tube volume or eliminates the water bath[cite: 94]."
    ],
    takeaway: "Lower surrounding bath temperatures increase cooling rates; fair testing requires matching the initial hot water temperature in both trials[cite: 95].",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { bathColdT: 20, bathWarmT: 40 },
      controls: [],
      readouts: [
        { label: "Cold Bath Rate", expr: () => "0.178 °C/s (Faster)[cite: 95]" },
        { label: "Warm Bath Rate", expr: () => "0.111 °C/s (Slower)[cite: 95]" },
        { label: "Fair Test Requirement", expr: () => "Match initial hot water temp[cite: 95]" }
      ],
      explanation: "A colder water bath sustains a steeper temperature gradient across the glass, increasing the cooling rate[cite: 95]."
    }
  },
  {
    globalId: "Q272",
    examId: "Q01339",
    paperRef: "5054/42/M/J/25 Q2(a)",
    pdfPage: 134,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Temperature Sensor Calibration & Response Time",
    paperType: "atp",
    marks: 3,
    questionText: `A student investigates the rate of cooling of hot water using a digital temperature sensor connected to a computer and datalogger, and compares it to an analogue liquid-in-glass thermometer[cite: 134].
(i) State two advantages of using a digital temperature sensor connected to a datalogger compared to a liquid-in-glass thermometer[cite: 134]. [2]
(ii) State one disadvantage of using a liquid-in-glass thermometer in rapid cooling experiments[cite: 134]. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State two advantages of digital dataloggers over liquid-in-glass thermometers and state one disadvantage of liquid-in-glass thermometers during rapid cooling[cite: 134].",
    givenInfo: [
      "Digital temperature sensor with computer datalogger compared to an analogue liquid-in-glass thermometer[cite: 134]."
    ],
    toFind: "Two datalogger advantages and one liquid-in-glass limitation[cite: 134].",
    physicsConcepts: `Digital sensors and automated datalogging:
1. Datalogger advantages:
   - Takes readings automatically at very short, precise time intervals (e.g. every 0.1 s).
   - Plots graphs in real time on a display screen.
   - Eliminates human reaction time and parallax error in reading scales.
   - Higher resolution (reads to 0.1 °C or 0.01 °C).
2. Liquid-in-glass disadvantages:
   - Thermal lag / slow response time: Heat takes time to conduct through the glass bulb.
   - Parallax error when reading the meniscus.
   - Cannot record rapid, transient temperature fluctuations accurately.`,
    equations: `\\Delta t_{\\text{datalogger}} \\ll \\tau_{\\text{glass thermometer}} \\approx 10\\text{--}20\\text{ s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) State Two Datalogger Advantages",
        body: "1. Takes readings automatically at continuous / very small time intervals (or plots graphs automatically).\n2. Eliminates human reading errors / parallax errors / reaction time errors (or has higher resolution / can measure rapid changes)."
      },
      {
        step: 2,
        title: "Part (ii) State Liquid-in-Glass Disadvantage",
        body: "Slow response time / thermal lag (heat takes time to conduct through the glass bulb into the liquid) / parallax error when reading the moving meniscus."
      }
    ],
    finalAnswer: "(i) 1. Takes readings automatically at precise, frequent time intervals (or plots graphs automatically); 2. Eliminates human parallax error and reaction time errors (or higher resolution);\n(ii) Slower response time / thermal lag (or parallax error when reading a rapidly changing meniscus).",
    reasonablenessCheck: "Automated electronic sensors can sample at 100 Hz without human lag, whereas mercury thermometers take ~15 s to respond.",
    commonMistakes: [
      "Stating 'it is cheaper' (datalogging systems are more expensive).",
      "Stating 'it never makes mistakes'."
    ],
    takeaway: "Digital dataloggers record data automatically at high sampling rates without parallax; glass thermometers suffer from thermal lag.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Datalogger Sampling", expr: () => "Continuous / Automatic" },
        { label: "Human Error", expr: () => "0.0 s (No parallax)" },
        { label: "Glass Thermometer Lag", expr: () => "~15 s Thermal Response" }
      ],
      explanation: "Dataloggers record temperature automatically without human reaction time or parallax errors."
    }
  },
  {
    globalId: "Q273",
    examId: "Q00662",
    paperRef: "5054/41/O/N/25 Q1(c)(i)",
    pdfPage: 136,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Measuring Cylinder Volume Resolution",
    paperType: "atp",
    marks: 1,
    questionText: `A student measures a volume of water to use in a specific heat capacity experiment[cite: 136].
Fig. 1.1 shows a 100 cm³ measuring cylinder containing water[cite: 136].
The scale has numbered marks every 10 cm³ from 0 to 100 cm³[cite: 136].
Between 70 and 80 cm³, there are 10 small divisions (1 cm³ per small division)[cite: 136].
The bottom of the curved meniscus sits exactly on the 4th mark above 70 cm³[cite: 136].

Record the volume V of water in the measuring cylinder[cite: 136].
V = .................... cm³ [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read the volume of water from the measuring cylinder scale shown in Fig. 1.1[cite: 136].",
    givenInfo: [
      "100 cm³ measuring cylinder with 1 cm³ subdivisions[cite: 136].",
      "Meniscus bottom sits 4 marks above 70 cm³[cite: 136]."
    ],
    toFind: "Volume V in cm³[cite: 136].",
    physicsConcepts: `Reading measuring cylinders[cite: 136]:
1. The bottom of the concave water meniscus must be read[cite: 113].
2. Scale increment:
$$\\text{Value per division} = \\frac{80 - 70}{10} = 1.0\\text{ cm}^3$$
3. Volume reading:
$$V = 70.0 + (4 \\times 1.0) = 74.0\\text{ cm}^3$$`,
    equations: `V = 70.0 + 4.0 = 74.0 \\text{ cm}^3`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Scale Division Value",
        body: "Between 70 and 80 cm³ there are 10 intervals -> each division is 1.0 cm³[cite: 136]."
      },
      {
        step: 2,
        title: "Locate Bottom of Meniscus",
        body: "The bottom of the meniscus is on the fourth line above 70 cm³: 70 + 4 = 74 cm³ (or 74.0 cm³)[cite: 136]."
      }
    ],
    finalAnswer: "74 cm³ (or 74.0 cm³)",
    reasonablenessCheck: "Four marks above 70 cm³ gives 74 cm³.",
    commonMistakes: [
      "Reading the top edges of the meniscus (reading 75 or 76 cm³).",
      "Counting downwards from 80 and writing 76 cm³."
    ],
    takeaway: "Always read measuring cylinders at the bottom of the concave meniscus: 70 + 4 = 74 cm³[cite: 113, 136].",
    simulation: {
      type: "thermometer_design",
      defaultParams: { volumeCm3: 74 },
      controls: [],
      readouts: [
        { label: "Meniscus Bottom", expr: () => "74 cm³" }
      ],
      explanation: "The bottom of the concave meniscus indicates 74 cm³."
    }
  },
  {
    globalId: "Q274",
    examId: "Q00663",
    paperRef: "5054/41/O/N/25 Q1(c)(ii)",
    pdfPage: 136,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Heat Capacity of Container Error Analysis",
    paperType: "atp",
    marks: 2,
    questionText: `In the experiment, 74 cm³ of water is heated by an immersion heater[cite: 136].
The student calculates the specific heat capacity c of water using the equation:
c = (P * t) / (m * ΔT)
The student's calculated value of c is 4800 J/(kg °C), which is larger than the accepted value of 4200 J/(kg °C)[cite: 34].
(i) Explain why the experimental value of c is larger than the accepted value[cite: 35]. [1]
(ii) Suggest one improvement to the apparatus to reduce this difference[cite: 85]. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why experimental specific heat capacity calculations typically exceed true values, and suggest a physical improvement to reduce the error[cite: 35, 85].",
    givenInfo: [
      "Calculated value c = 4800 J/(kg °C)[cite: 34].",
      "Accepted literature value c = 4200 J/(kg °C)[cite: 34].",
      "Formula: c = (P * t) / (m * ΔT)."
    ],
    toFind: "Explanation for why experimental c is too high, and one apparatus improvement[cite: 35, 85].",
    physicsConcepts: `Calorimetric error analysis[cite: 35]:
1. Real heat losses: Not all electrical energy supplied by the heater goes into raising the water's temperature. Some thermal energy:
   - Escapes to the surrounding room air by conduction, convection, radiation, and surface evaporation.
   - Warms up the container (beaker) and the heater element itself.
2. Effect on formula:
   $$c_{\\text{calc}} = \\frac{E_{\\text{supplied}}}{m \\Delta T}$$
   Because energy is lost, the temperature rise ΔT is smaller than it would be if all heat stayed in the water. A smaller ΔT in the denominator makes the calculated $c$ artificially large[cite: 35].
3. Improvement: Insulate / lag the beaker sides and base, and add a lid to prevent heat loss to the surroundings[cite: 85, 110].`,
    equations: `\\Delta T_{\\text{actual}} < \\Delta T_{\\text{ideal}} \\implies c_{\\text{calc}} = \\frac{P t}{m \\Delta T_{\\text{actual}}} > c_{\\text{true}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Explain Why Calculated c is Too High",
        body: "Thermal energy is lost to the surroundings / absorbed by the container (beaker), so the temperature rise ΔT is smaller than expected, making the calculated c value too large[cite: 35]."
      },
      {
        step: 2,
        title: "Suggest an Apparatus Improvement",
        body: "Insulate / lag the beaker (or put a lid on the beaker / use a polystyrene cup / use a container with lower heat capacity)[cite: 85, 110]."
      }
    ],
    finalAnswer: "(i) Thermal energy is lost to the surroundings / absorbed by the beaker, causing a smaller temperature rise ΔT (so c is overestimated)[cite: 35];\n(ii) Insulate / lag the beaker (or place a lid on the beaker / use a polystyrene cup)[cite: 85, 110].",
    reasonablenessCheck: "Uninsulated beakers lose 10–15% of supplied heat, reducing ΔT and making calculated c ~15% higher than 4200 J/(kg °C)[cite: 34, 35].",
    commonMistakes: [
      "Stating 'heat was gained from the room' (the water was hotter than room temperature).",
      "Stating 'the heater was more powerful'."
    ],
    takeaway: "Heat lost to the surroundings reduces the measured temperature rise ΔT, making calculated specific heat capacity too large[cite: 35].",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { heatLossPct: 14.3 },
      controls: [
        { id: "heatLossPct", name: "Heat Loss to Room", min: 0, max: 30, step: 5, default: 14.3, unit: "%" }
      ],
      readouts: [
        { label: "Effective ΔT", expr: (p) => (20.0 * (1 - p.heatLossPct / 100)).toFixed(1) + " °C" },
        { label: "Calculated c", expr: (p) => (4200 / (1 - p.heatLossPct / 100)).toFixed(0) + " J/(kg °C)" }
      ],
      explanation: "A 14% heat loss reduces the measured temperature rise, driving the calculated c from 4200 up to 4800 J/(kg °C)[cite: 34, 35]."
    }
  },
  {
    globalId: "Q275",
    examId: "Q00096",
    paperRef: "5054/42/O/N/25 Q2",
    pdfPage: 138,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Thermal Radiation Absorption of Different Cards Master Suite",
    paperType: "atp",
    marks: 7,
    questionText: `A student investigates the absorption of thermal radiation by different coloured surfaces using the apparatus shown in Fig. 2.1[cite: 96, 138].
A thermometer has a piece of card attached to its bulb and is clamped at a distance d = 1.5 cm from an incandescent lamp[cite: 96, 97].
Two cards of the same size and thickness are tested: Card A (black) and Card B (white)[cite: 96].

(a) Record initial temperature θ_0 at t = 0[cite: 97].
(b) The lamp is switched on and temperature is recorded every 60 s for 300 s[cite: 97].
Table 2.1 shows:
Card A (black): 20.0 °C to 38.0 °C in 300 s (Δθ = 18.0 °C)[cite: 97, 98].
Card B (white): 20.0 °C to 27.5 °C in 300 s (Δθ = 7.5 °C)[cite: 97, 98].
(i) Calculate the rate of temperature rise for both cards[cite: 98]. [2]
(ii) State your conclusion comparing the absorption of thermal radiation[cite: 98]. [1]
(iii) State two variables that must be controlled[cite: 98]. [2]
(iv) Suggest why the thermometer bulb must be level with the filament of the lamp[cite: 96]. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Evaluate experimental data comparing thermal radiation absorption of black versus white cards, calculate heating rates, state the conclusion, and identify controlled variables and alignment precautions[cite: 96, 97, 98, 138].",
    givenInfo: [
      "Incandescent lamp source[cite: 96].",
      "Distance d = 1.5 cm[cite: 97].",
      "Card A (black): warms by 18.0 °C over 300 s[cite: 98].",
      "Card B (white): warms by 7.5 °C over 300 s[cite: 98]."
    ],
    toFind: "Heating rates, physical absorption conclusion, two control variables, and filament alignment justification[cite: 96, 98].",
    physicsConcepts: `Thermal radiation emission and absorption[cite: 96, 98]:
1. Incandescent lamps emit visible light and infrared radiation[cite: 96].
2. Surface properties:
   - Dull black surfaces have high emissivity and absorptivity ($\\alpha \\approx 0.95$), absorbing most incident infrared radiation[cite: 98].
   - White surfaces reflect most incident infrared radiation (low absorptivity $\\alpha \\approx 0.15$), absorbing much less energy[cite: 98].
3. Rate of heating:
   $$\\text{Rate} = \\frac{\\Delta \\theta}{t}$$
   Card A heats more than twice as fast as Card B[cite: 98].
4. Filament alignment: The incandescent filament emits radiation outward; aligning the thermometer bulb with the filament ensures maximum and consistent radiation intensity[cite: 96].`,
    equations: `\\text{Rate}_A = \\frac{18.0}{300} = 0.060^\\circ\\text{C/s}; \\quad \\text{Rate}_B = \\frac{7.5}{300} = 0.025^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This master entry coordinates subparts Q276 through Q280 for the Paper 4 thermal radiation investigation on PDF pages 138–140[cite: 138]."
      }
    ],
    finalAnswer: "Full analytical calculations, deductions, and control factors are detailed in records Q276 to Q280 below[cite: 98].",
    reasonablenessCheck: "Black card heating rate (0.060 °C/s) is 2.4 times greater than white card (0.025 °C/s), consistent with radiation absorption theory[cite: 98].",
    commonMistakes: [
      "Stating black 'attracts' heat rather than absorbs it.",
      "Varying the distance d between the two trials[cite: 97]."
    ],
    takeaway: "Black surfaces absorb thermal radiation at a much higher rate than white surfaces; alignment and distance must remain constant[cite: 97, 98].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { distanceCm: 1.5 },
      controls: [
        { id: "distanceCm", name: "Distance from Lamp d", min: 1.0, max: 4.0, step: 0.5, default: 1.5, unit: "cm" }
      ],
      readouts: [
        { label: "Black Heating Rate", expr: () => "0.060 °C/s[cite: 98]" },
        { label: "White Heating Rate", expr: () => "0.025 °C/s[cite: 98]" }
      ],
      explanation: "Canvas demonstrates differential radiation absorption, with the black card warming at 2.4 times the rate of the white card[cite: 98]."
    }
  },
  {
    globalId: "Q276",
    examId: "Q00097",
    paperRef: "5054/42/O/N/25 Q2(a)",
    pdfPage: 138,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Initial Thermometer Reading in Radiation Test",
    paperType: "atp",
    marks: 1,
    questionText: `Record the initial temperature θ_0 shown on the thermometer at time t = 0 before the lamp is switched on[cite: 97, 138].
The scale shows 20 °C[cite: 97].
θ_0 = .................... °C [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record initial temperature θ_0 at t = 0 before turning on the lamp[cite: 97].",
    givenInfo: [
      "Thermometer scale indicates 20 °C at ambient conditions[cite: 97]."
    ],
    toFind: "Initial temperature θ_0 in °C[cite: 97].",
    physicsConcepts: `Baseline temperature reading:
Before the lamp is activated, the thermometer with card attached is at thermal equilibrium with the laboratory room air (~20.0 °C)[cite: 96, 97].`,
    equations: `\\theta_0 = 20.0^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Read Scale",
        body: "Meniscus sits on the 20 °C mark: θ_0 = 20.0 °C[cite: 97]."
      }
    ],
    finalAnswer: "20 °C (or 20.0 °C)",
    reasonablenessCheck: "20.0 °C matches ambient room temperature.",
    commonMistakes: [
      "Omitting decimal place if high precision is requested.",
      "Omitting units."
    ],
    takeaway: "Record baseline temperature before activating the heating source[cite: 97].",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 20.0 },
      controls: [],
      readouts: [
        { label: "Initial Reading", expr: () => "20.0 °C[cite: 97]" }
      ],
      explanation: "Thermometer indicates baseline ambient room temperature of 20.0 °C[cite: 97]."
    }
  },
  {
    globalId: "Q277",
    examId: "Q00098",
    paperRef: "5054/42/O/N/25 Q2(a)(i)",
    pdfPage: 138,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Radiation Temperature Rise Calculations",
    paperType: "atp",
    marks: 2,
    questionText: `Determine the temperature increase Δθ between t = 0 and t = 300 s for Card A (black) and Card B (white) using Table 2.1[cite: 98, 138]:
Card A: 20.0 °C to 38.0 °C[cite: 97, 98]
Card B: 20.0 °C to 27.5 °C[cite: 97, 98]

Δθ for Card A (black) = .................... °C
Δθ for Card B (white) = .................... °C [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate total temperature increase over 300 s for black card A and white card B[cite: 98].",
    givenInfo: [
      "Card A: θ(0) = 20.0 °C, θ(300) = 38.0 °C[cite: 97, 98]",
      "Card B: θ(0) = 20.0 °C, θ(300) = 27.5 °C[cite: 97, 98]"
    ],
    toFind: "Temperature increases Δθ_A and Δθ_B in °C[cite: 98].",
    physicsConcepts: `Temperature increase:
$$\\Delta \\theta = \\theta(300) - \\theta(0)$$`,
    equations: `\\Delta \\theta_A = 38.0 - 20.0 = 18.0^\\circ\\text{C}; \\quad \\Delta \\theta_B = 27.5 - 20.0 = 7.5^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Δθ for Card A",
        body: "Δθ_A = 38.0 °C - 20.0 °C = 18.0 °C[cite: 98]."
      },
      {
        step: 2,
        title: "Compute Δθ for Card B",
        body: "Δθ_B = 27.5 °C - 20.0 °C = 7.5 °C[cite: 98]."
      }
    ],
    finalAnswer: "Δθ for Card A (black) = 18.0 °C; Δθ for Card B (white) = 7.5 °C[cite: 98]",
    reasonablenessCheck: "The black card rises by 18.0 °C, more than twice the 7.5 °C rise of the white card[cite: 98].",
    commonMistakes: [
      "Arithmetic subtraction error on 27.5 - 20.0[cite: 98].",
      "Inverting values between Card A and Card B."
    ],
    takeaway: "Δθ = θ_final - θ_initial[cite: 98]. Black surfaces absorb more thermal radiation, producing larger temperature increases[cite: 98].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { dThetaA: 18.0, dThetaB: 7.5 },
      controls: [],
      readouts: [
        { label: "Card A (Black) Rise", expr: () => "18.0 °C[cite: 98]" },
        { label: "Card B (White) Rise", expr: () => "7.5 °C[cite: 98]" }
      ],
      explanation: "Black card rises by 18.0 °C compared to 7.5 °C for the white card over 300 s[cite: 98]."
    }
  },
  {
    globalId: "Q278",
    examId: "Q00099",
    paperRef: "5054/42/O/N/25 Q2(a)(ii)",
    pdfPage: 138,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Rate of Temperature Increase Evaluation",
    paperType: "atp",
    marks: 2,
    questionText: `Calculate the average rate of increase of temperature of each card using the equation[cite: 98]:
average rate of temperature increase = Δθ / t
where t = 300 s[cite: 98]. Include the unit in your answers[cite: 98].
average rate for Card A (black) = .................... unit ....................
average rate for Card B (white) = .................... unit .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate average heating rates over 300 s for Card A and Card B in °C/s, stating the unit[cite: 98].",
    givenInfo: [
      "Card A: Δθ = 18.0 °C[cite: 98]",
      "Card B: Δθ = 7.5 °C[cite: 98]",
      "Time t = 300 s[cite: 98]",
      "Formula: Rate = Δθ / 300[cite: 98]"
    ],
    toFind: "Average heating rates for A and B with units[cite: 98].",
    physicsConcepts: `Average rate of temperature increase[cite: 98]:
$$\\text{Rate} = \\frac{\\Delta \\theta}{t}$$
For Card A:
$$\\text{Rate}_A = \\frac{18.0}{300} = 0.060\\text{ }^\\circ\\text{C/s}$$
For Card B:
$$\\text{Rate}_B = \\frac{7.5}{300} = 0.025\\text{ }^\\circ\\text{C/s}$$
Unit: °C/s (or °C s⁻¹)[cite: 98].`,
    equations: `\\text{Rate}_A = \\frac{18.0}{300} = 0.060 \\text{ }^\\circ\\text{C/s}; \\quad \\text{Rate}_B = \\frac{7.5}{300} = 0.025 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Rate for Card A (Black)",
        body: "Rate_A = 18.0 °C / 300 s = 0.060 °C/s[cite: 98]."
      },
      {
        step: 2,
        title: "Calculate Rate for Card B (White)",
        body: "Rate_B = 7.5 °C / 300 s = 0.025 °C/s[cite: 98]."
      },
      {
        step: 3,
        title: "State Unit",
        body: "Unit for both rates: °C/s[cite: 98]."
      }
    ],
    finalAnswer: "average rate for Card A = 0.060 °C/s, unit: °C/s; average rate for Card B = 0.025 °C/s, unit: °C/s[cite: 98]",
    reasonablenessCheck: "0.060 °C/s vs 0.025 °C/s gives a 2.4x ratio, matching typical black-to-white radiation absorption ratios[cite: 98].",
    commonMistakes: [
      "Omitting the unit or writing only °C[cite: 98].",
      "Dividing 300 by Δθ[cite: 98]."
    ],
    takeaway: "Rate = Δθ / t[cite: 98]. Black surfaces heat more than twice as fast as white surfaces under infrared radiation[cite: 98].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { rateA: 0.060, rateB: 0.025 },
      controls: [],
      readouts: [
        { label: "Card A Rate", expr: () => "0.060 °C/s[cite: 98]" },
        { label: "Card B Rate", expr: () => "0.025 °C/s[cite: 98]" }
      ],
      explanation: "Card A heats at 0.060 °C/s while Card B heats at 0.025 °C/s[cite: 98]."
    }
  },
  {
    globalId: "Q279",
    examId: "Q00100",
    paperRef: "5054/42/O/N/25 Q2(b)",
    pdfPage: 138,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Radiation Absorption Deduction and Filament Alignment",
    paperType: "atp",
    marks: 2,
    questionText: `(i) Use your answers to (a)(ii) to deduce a conclusion comparing the absorption of thermal radiation by the two cards[cite: 98]. [1]
(ii) Suggest why the thermometer bulb must be level with the filament of the lamp[cite: 96]. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State an experimental conclusion on radiation absorption from calculated rates and explain why vertical filament alignment is necessary[cite: 96, 98].",
    givenInfo: [
      "Rate for Card A (black) = 0.060 °C/s[cite: 98]",
      "Rate for Card B (white) = 0.025 °C/s[cite: 98]"
    ],
    toFind: "Comparative absorption conclusion and filament alignment explanation[cite: 96, 98].",
    physicsConcepts: `1. Radiation absorption conclusion:
Because Card A has a higher rate of temperature increase under identical exposure, a black surface absorbs thermal radiation at a greater rate than a white surface (black is a better absorber)[cite: 98].
2. Filament alignment precaution:
An incandescent lamp emits radiation symmetrically from its filament[cite: 96]. The intensity is greatest in the horizontal plane level with the filament. Aligning the thermometer bulb with the filament ensures maximum, consistent radiant intensity on the card across both trials[cite: 96].`,
    equations: `\\text{Rate}_A > \\text{Rate}_B \\implies \\text{Black absorbs radiation faster than white[cite: 98]}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Deduce Conclusion",
        body: "The black card absorbs thermal radiation at a greater rate than the white card (or black is a better / more effective absorber of thermal radiation than white)[cite: 98]."
      },
      {
        step: 2,
        title: "Part (ii) Justify Filament Alignment",
        body: "The filament is the source of thermal radiation; aligning with it ensures the card receives maximum / uniform radiation from the lamp[cite: 96]."
      }
    ],
    finalAnswer: "(i) The black card / surface absorbs thermal radiation at a greater rate than the white card (black is a better absorber)[cite: 98];\n(ii) The filament is where thermal radiation is emitted / to receive maximum radiation from the lamp (or so radiation hits the card directly / symmetrically)[cite: 96].",
    reasonablenessCheck: "Dull black surfaces absorb over 90% of incident radiation; aligning with the filament maintains consistent radiant intensity[cite: 96].",
    commonMistakes: [
      "Stating black is a better emitter when absorption was tested[cite: 98].",
      "Saying 'to see the bulb better' for alignment[cite: 96]."
    ],
    takeaway: "Black surfaces absorb thermal radiation faster than white; aligning the sensor with the filament ensures maximum incident radiation[cite: 96, 98].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Absorption Conclusion", expr: () => "Black absorbs radiation faster than white[cite: 98]" },
        { label: "Alignment Benefit", expr: () => "Receives maximum radiant flux[cite: 96]" }
      ],
      explanation: "Higher rates confirm black is a better absorber; vertical alignment ensures maximum radiant intensity[cite: 96, 98]."
    }
  },
  {
    globalId: "Q280",
    examId: "Q00101",
    paperRef: "5054/42/O/N/25 Q2(i)",
    pdfPage: 138,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Controlled Variables in Surface Absorption Tests",
    paperType: "atp",
    marks: 2,
    questionText: `State two variables that should be controlled in this experiment to ensure a valid conclusion[cite: 98].
controlled variable 1: ........................................................................................
controlled variable 2: ........................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify two key physical variables that must remain constant when comparing radiation absorption between black and white cards[cite: 98].",
    givenInfo: [
      "Testing absorption of radiation between black and white cards exposed to an incandescent lamp[cite: 96, 98].",
      "Independent variable: color of card[cite: 96]."
    ],
    toFind: "Two controlled variables[cite: 98].",
    physicsConcepts: `Fair testing in radiation absorption[cite: 98]:
To ensure differences in heating rate are due solely to surface color, all factors affecting incident radiant energy and thermal capacity must be kept constant:
1. Distance d: Radiation intensity falls rapidly with distance; distance from lamp to card must be identical[cite: 96, 97].
2. Lamp brightness / power: Same voltage and bulb wattage must be used.
3. Card dimensions / area: Exposed area must be equal[cite: 98].
4. Card material / thickness: Cardboard type and thickness must match so thermal capacity is equal[cite: 98].
5. Initial temperature: Both runs must begin at the same ambient baseline[cite: 97].`,
    equations: `\\text{Keep constant: } d, P_{\\text{lamp}}, A_{\\text{card}}, \\text{thickness}, \\theta_0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Distance Variable",
        body: "Distance d between the lamp and the card (must be identical in both trials)[cite: 96, 97]."
      },
      {
        step: 2,
        title: "Identify Source and Specimen Variables",
        body: "Power / brightness of the lamp / size (surface area) of the card / material and thickness of the card / starting temperature[cite: 97, 98]."
      }
    ],
    finalAnswer: "1. Distance between the lamp and the card (d)[cite: 96, 97];\n2. Power / brightness / voltage of the lamp (or surface area / size of the card / thickness of card / starting temperature)[cite: 97, 98].",
    reasonablenessCheck: "Varying distance would alter radiant intensity independently of card color, invalidating the test[cite: 96, 97].",
    commonMistakes: [
      "Naming card color as a controlled variable (color is the independent variable)[cite: 96].",
      "Naming final temperature."
    ],
    takeaway: "Keep distance, lamp power, and card surface area constant to ensure valid comparison of surface absorption[cite: 97, 98].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { distanceCm: 1.5 },
      controls: [],
      readouts: [
        { label: "Control 1 (Distance)", expr: () => "1.5 cm (Identical)[cite: 97]" },
        { label: "Control 2 (Area)", expr: () => "Same Card Dimensions[cite: 98]" }
      ],
      explanation: "Controlling distance and card size ensures heating differences depend solely on surface color[cite: 97, 98]."
    }
  }
];