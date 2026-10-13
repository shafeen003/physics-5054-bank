/**
 * Master Question Store: Batch 18 (Q251 to Q265)
 * Section 2.2: Thermal Properties and Temperature (Paper 4 ATP Part 2)
 */

const QUESTIONS_BATCH_18 = [
  {
    globalId: "Q251",
    examId: "Q02997",
    paperRef: "5054/41/M/J/23 Q1(i)(i)",
    pdfPage: 125,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Graph Plotting for Surface Area Cooling",
    paperType: "atp",
    marks: 4,
    questionText: `A student investigates how the surface area of water affects the rate of cooling using a narrow beaker A (diameter 5.0 cm) and a wide beaker B (diameter 9.0 cm).
Both beakers contain 100 cm³ of water initially at 85 °C.
Table 1.1 records temperature θ against time t up to 240 s:
t / s | θ_A / °C | θ_B / °C
0     | 85       | 85
30    | 82       | 79
60    | 79       | 74
90    | 76       | 70
120   | 74       | 66
150   | 72       | 63
180   | 71       | 61
210   | 70       | 59
240   | 70       | 58

On the grid provided, plot a graph of temperature θ on the y-axis against time t on the x-axis for both beakers.
Draw smooth curves of best fit for each set of data and label them A and B. [4]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Plot experimental cooling curves for Beaker A and Beaker B on the same grid, choose linear scales, plot points, and draw smooth curves of best fit labeled A and B.",
    givenInfo: [
      "x-axis: time t / s from 0 to 240 s.",
      "y-axis: temperature θ / °C from 50 °C to 90 °C (false origin permitted).",
      "Data for Beaker A (narrow) and Beaker B (wide) from Table 1.1."
    ],
    toFind: "Criteria-compliant graphical representation of both cooling curves on a single set of axes.",
    physicsConcepts: `Graph plotting criteria for Cambridge Paper 4:
1. Axes: Clearly labeled with quantity and unit (time / s and temperature / °C).
2. Scales: Linear, sensible increments (e.g. 2 cm = 50 s on x-axis; 2 cm = 5 °C on y-axis), filling more than half the grid.
3. Points: Plotted to within half a small square using small crosses (x) or dots in circles.
4. Line quality: Smooth, continuous curves of best fit with negative gradient flattening over time; no forced straight lines or angular segments.
5. Identification: Clear labels identifying Curve A and Curve B.`,
    equations: `\\text{Cooling Rate} = -\\frac{d\\theta}{dt}; \\quad |\\text{Gradient}_B| > |\\text{Gradient}_A|`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Scale Selection",
        body: "x-axis: 0 to 250 s (2 cm = 50 s).\ny-axis: 50 °C to 90 °C (2 cm = 5 °C), starting at 50 °C (false origin allowed)."
      },
      {
        step: 2,
        title: "Plot Points for Beaker A",
        body: "Plot (0, 85), (30, 82), (60, 79), (90, 76), (120, 74), (150, 72), (180, 71), (210, 70), (240, 70). Draw smooth curve; label 'A'."
      },
      {
        step: 3,
        title: "Plot Points for Beaker B",
        body: "Plot (0, 85), (30, 79), (60, 74), (90, 70), (120, 66), (150, 63), (180, 61), (210, 59), (240, 58). Draw smooth curve below curve A; label 'B'."
      }
    ],
    finalAnswer: "Both sets of data plotted accurately to within 0.5 small square; linear axes labeled with units; smooth curves of best fit drawn and labeled A and B, with curve B consistently steeper and lower than curve A.",
    reasonablenessCheck: "Curve B lies below Curve A at all times t > 0, illustrating faster cooling due to larger surface area.",
    commonMistakes: [
      "Plotting time in minutes instead of seconds.",
      "Drawing straight dot-to-dot lines instead of a smooth curve.",
      "Omitting labels A and B on the curves."
    ],
    takeaway: "Scale axes to occupy more than half the grid; plot points with small crosses and draw smooth curves of best fit.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { plotTwinCurves: true },
      controls: [],
      readouts: [
        { label: "Curve A (Narrow)", expr: () => "Shallower slope (70 °C at 240 s)" },
        { label: "Curve B (Wide)", expr: () => "Steeper slope (58 °C at 240 s)" }
      ],
      explanation: "Canvas displays both cooling curves: the wider beaker B exhibits a steeper drop due to greater surface area."
    }
  },
  {
    globalId: "Q252",
    examId: "Q02995",
    paperRef: "5054/41/M/J/23 Q1(i)(iii)",
    pdfPage: 125,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Reading Temperature and Gradient from Graph",
    paperType: "atp",
    marks: 2,
    questionText: `Using your graph from Figure 1.2:
(i) Determine the temperature of the water in Beaker B at time t = 100 s. Show clearly on your graph how you obtained your answer.
temperature in Beaker B at 100 s = .................... °C [1]

(ii) Compare the rate of cooling of Beaker A with the rate of cooling of Beaker B at time t = 100 s. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read the temperature of Beaker B at t = 100 s from the plotted curve and compare the gradients of curves A and B at that time.",
    givenInfo: [
      "Cooling curves A and B plotted on Figure 1.2.",
      "Target time t = 100 s."
    ],
    toFind: "Temperature value at t = 100 s for Beaker B, and rate comparison.",
    physicsConcepts: `Reading and gradient analysis from cooling curves:
1. Interpolation: Draw a vertical dashed line from t = 100 s on the x-axis to Curve B, then project horizontally to read the temperature on the y-axis (typically ~68.5 °C).
2. Instantaneous cooling rate: Given by the magnitude of the tangent gradient $|d\\theta / dt|$. At t = 100 s, Curve B has a steeper slope than Curve A, meaning Beaker B is cooling faster.`,
    equations: `\\text{Rate} = \\left|\\frac{d\\theta}{dt}\\right|; \\quad |\\text{Slope}_B(100\\text{ s})| > |\\text{Slope}_A(100\\text{ s})|`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Interpolate Temperature for Beaker B at t = 100 s",
        body: "Locate t = 100 s on the x-axis. Follow vertically to Curve B and project across to the y-axis: θ ≈ 68.5 °C (acceptable range: 68.0 °C to 69.5 °C)."
      },
      {
        step: 2,
        title: "Compare Gradients at t = 100 s",
        body: "Observe the steepness of both curves at t = 100 s. Curve B is steeper than Curve A, meaning the cooling rate of Beaker B is greater than that of Beaker A."
      }
    ],
    finalAnswer: "(i) 68.5 °C (acceptable: 68.0 °C to 69.5 °C, with construction lines shown on graph);\n(ii) Rate of cooling of Beaker B is greater / faster than Beaker A (Curve B has a steeper gradient).",
    reasonablenessCheck: "At t = 90 s, θ_B = 70 °C and at t = 120 s, θ_B = 66 °C; at 100 s, ~68.5 °C is consistent.",
    commonMistakes: [
      "Omitting dashed construction lines on the graph.",
      "Misreading the y-axis scale divisions."
    ],
    takeaway: "Show construction lines when reading from a graph; the steeper curve indicates the higher rate of cooling.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { targetTime: 100 },
      controls: [],
      readouts: [
        { label: "Beaker B at 100 s", expr: () => "68.5 °C" },
        { label: "Rate Comparison at 100 s", expr: () => "Beaker B is steeper (faster cooling)" }
      ],
      explanation: "Vertical projection from t = 100 s gives θ_B = 68.5 °C, where Curve B remains steeper than Curve A."
    }
  },
  {
    globalId: "Q253",
    examId: "Q02996",
    paperRef: "5054/41/M/J/23 Q1(i)(iv)",
    pdfPage: 125,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Experimental Limitation in Surface Cooling",
    paperType: "atp",
    marks: 1,
    questionText: `A student suggests that the rate of cooling of water in Beaker B is greater than in Beaker A only because Beaker B has a larger diameter.
Another student points out that the depth of the water is also different in the two beakers.
Suggest how the experiment can be modified so that the effect of surface area on the rate of cooling can be investigated with water of the same depth. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Propose an experimental modification to study the effect of surface area while keeping water depth constant.",
    givenInfo: [
      "In the original experiment, both beakers held 100 cm³ of water.",
      "Because Beaker B is wider, the water depth was smaller than in Beaker A.",
      "Depth and surface area were both varied simultaneously."
    ],
    toFind: "Procedural modification to keep depth constant while varying surface area.",
    physicsConcepts: `Fair testing and variable isolation:
In the original experiment:
$$\\text{Depth } h = \\frac{V}{A}$$
Using equal volumes resulted in different depths.
To maintain identical depth $h$ in containers of different cross-sectional areas, the volume of water must be adjusted proportionally:
$$V = A \\cdot h$$
Alternatively, fill both containers to the same measured depth mark (using different water volumes), or adjust the container base areas while controlling depth directly.`,
    equations: `h_A = h_B \\implies \\frac{V_A}{A_A} = \\frac{V_B}{A_B} \\implies V_B > V_A`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify the Confounding Variable",
        body: "Using equal volumes (100 cm³) in beakers of different diameters caused water in the wider beaker to be shallower."
      },
      {
        step: 2,
        title: "Propose Valid Modification",
        body: "Pour water into both beakers until the water reaches the same depth / height (using different volumes of water)."
      }
    ],
    finalAnswer: "Pour water into both beakers to the same depth / height (or adjust the volume of water in each beaker so the depth is the same).",
    reasonablenessCheck: "Equal depth isolates surface area from depth-dependent temperature gradients.",
    commonMistakes: [
      "Suggesting using beakers of the same diameter (which eliminates the independent variable).",
      "Suggesting adding insulation."
    ],
    takeaway: "To keep water depth constant in containers of different diameters, fill each container to the same measured depth mark using different volumes.",
    simulation: {
      type: "evaporation",
      defaultParams: { equalDepth: true },
      controls: [],
      readouts: [
        { label: "Depth in Beaker A", expr: () => "3.0 cm (Controlled)" },
        { label: "Depth in Beaker B", expr: () => "3.0 cm (Controlled)" }
      ],
      explanation: "Filling both beakers to the same 3.0 cm depth isolates exposed surface area as the sole variable."
    }
  },
  {
    globalId: "Q254",
    examId: "Q01824",
    paperRef: "5054/42/O/N/23 Q2(a)",
    pdfPage: 126,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Boiling Tube Cooling Setup and Reading",
    paperType: "atp",
    marks: 2,
    questionText: `A student investigates the rate of cooling of hot water in a boiling tube.
The student pours 30 cm³ of hot water into an uninsulated boiling tube supported in a rack.
Fig. 2.1 shows the thermometer placed in the boiling tube at time t = 0.
The scale has marks at 70, 80 and 90 °C, with 10 small divisions between 80 and 90 °C.
The liquid thread is at 7 divisions above 80 °C.

(i) Record the initial temperature θ_0 of the water.
θ_0 = .................... °C [1]

(ii) State one precaution taken when placing the thermometer in the boiling tube to ensure accurate readings. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read the initial temperature from the scale and state a precaution regarding thermometer placement in the boiling tube.",
    givenInfo: [
      "Scale has 10 divisions between 80 °C and 90 °C -> 1.0 °C per division.",
      "Meniscus is 7 divisions above 80 °C.",
      "Thermometer placed in 30 cm³ of water in a boiling tube."
    ],
    toFind: "Initial temperature θ_0 and one placement precaution.",
    physicsConcepts: `1. Scale reading:
$$\\theta_0 = 80 + (7 \\times 1.0) = 87.0^\\circ\\text{C}$$
2. Placement precautions:
   - The thermometer bulb must be completely submerged in the water.
   - The bulb must not touch the glass sides or bottom of the boiling tube (to avoid measuring glass temperature rather than water temperature).
   - The thermometer should be clamped vertically to avoid tipping and parallax.`,
    equations: `\\theta_0 = 80.0 + 7.0 = 87.0^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Read Scale (Part i)",
        body: "Seven small marks above 80 °C on a 1 °C-per-division scale: 80 + 7 = 87 °C (or 87.0 °C)."
      },
      {
        step: 2,
        title: "State Placement Precaution (Part ii)",
        body: "Ensure the thermometer bulb is completely immersed in the water and does not touch the bottom or sides of the boiling tube."
      }
    ],
    finalAnswer: "(i) θ_0 = 87 °C (or 87.0 °C);\n(ii) Ensure the bulb is fully submerged in the water / does not touch the sides or bottom of the tube.",
    reasonablenessCheck: "87 °C is typical for hot water in a test tube; keeping the bulb off the glass ensures the thermometer measures liquid temperature.",
    commonMistakes: [
      "Reading 86 °C or 88 °C.",
      "Saying 'stir fast' instead of focusing on placement."
    ],
    takeaway: "Read the scale carefully (80 + 7 = 87 °C) and keep the bulb fully submerged without touching the container walls.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 87.0 },
      controls: [],
      readouts: [
        { label: "Measured θ_0", expr: () => "87.0 °C" },
        { label: "Bulb Clearance", expr: () => "Centered, not touching glass" }
      ],
      explanation: "Scale shows 87.0 °C with the bulb submerged in the center of the tube."
    }
  },
  {
    globalId: "Q255",
    examId: "Q01825",
    paperRef: "5054/42/O/N/23 Q2(i)",
    pdfPage: 126,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Boiling Tube Cooling Table 2.1 Analysis",
    paperType: "atp",
    marks: 2,
    questionText: `The student records the temperature θ of the water every 30 s for 180 s.
The results for the uninsulated boiling tube are shown in Table 2.1:
t / s | θ / °C
0     | 87
30    | 79
60    | 73
90    | 68
120   | 64
150   | 61
180   | 59

(i) Calculate the temperature decrease Δθ_1 of the water in the first 90 s (from t = 0 to t = 90 s).
Δθ_1 = .................... °C [1]

(ii) Calculate the temperature decrease Δθ_2 of the water in the second 90 s (from t = 90 s to t = 180 s).
Δθ_2 = .................... °C [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate temperature drops for the first 90 s and the second 90 s intervals from Table 2.1.",
    givenInfo: [
      "t = 0 s: 87 °C",
      "t = 90 s: 68 °C",
      "t = 180 s: 59 °C"
    ],
    toFind: "Temperature drops Δθ_1 and Δθ_2 in °C.",
    physicsConcepts: `Temperature drop over equal time intervals:
$$\\Delta \\theta_1 = \\theta(0) - \\theta(90)$$
$$\\Delta \\theta_2 = \\theta(90) - \\theta(180)$$
Because cooling slows as the temperature approaches room temperature, Δθ_1 is larger than Δθ_2.`,
    equations: `\\Delta \\theta_1 = 87 - 68 = 19^\\circ\\text{C}; \\quad \\Delta \\theta_2 = 68 - 59 = 9^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute First Interval Drop (0 to 90 s)",
        body: "Δθ_1 = 87 °C - 68 °C = 19 °C."
      },
      {
        step: 2,
        title: "Compute Second Interval Drop (90 to 180 s)",
        body: "Δθ_2 = 68 °C - 59 °C = 9 °C."
      }
    ],
    finalAnswer: "(i) Δθ_1 = 19 °C;\n(ii) Δθ_2 = 9 °C",
    reasonablenessCheck: "The drop in the first 90 s (19 °C) is more than double the drop in the second 90 s (9 °C), consistent with exponential cooling.",
    commonMistakes: [
      "Subtracting from 0 instead of 90 for the second interval.",
      "Arithmetic errors."
    ],
    takeaway: "Δθ_1 = 87 - 68 = 19 °C; Δθ_2 = 68 - 59 = 9 °C. The temperature drop decreases over time as the water cools.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { drop1: 19, drop2: 9 },
      controls: [],
      readouts: [
        { label: "First 90 s Drop", expr: () => "19 °C (Rate: 0.21 °C/s)" },
        { label: "Second 90 s Drop", expr: () => "9 °C (Rate: 0.10 °C/s)" }
      ],
      explanation: "Successive 90 s drops (19 °C vs 9 °C) show the cooling rate slowing over time.",
    }
  },
  {
    globalId: "Q256",
    examId: "Q01827",
    paperRef: "5054/42/O/N/23 Q2(i)(i)",
    pdfPage: 126,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Cotton Wool Lagging Comparison",
    paperType: "atp",
    marks: 2,
    questionText: `The student repeats the experiment using an identical boiling tube wrapped in cotton wool.
The temperature decrease in the first 90 s is 11 °C.
(i) Compare the cooling rate of the insulated tube with the uninsulated tube in the first 90 s. [1]
(ii) Explain why wrapping the tube in cotton wool changes the rate of cooling. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Compare the 90 s cooling rate with and without cotton wool and explain how the insulation slows heat transfer.",
    givenInfo: [
      "Uninsulated tube: Δθ_1 = 19 °C in 90 s (from Q255)",
      "Insulated tube: Δθ_cotton = 11 °C in 90 s"
    ],
    toFind: "Rate comparison and physical explanation of cotton wool insulation.",
    physicsConcepts: `Thermal insulation mechanics:
1. Rate comparison: Δθ_cotton (11 °C) < Δθ_plain (19 °C) over the same 90 s, so the cooling rate is smaller for the insulated tube.
2. Physical mechanism: Cotton wool traps pockets of stationary air. Air is a poor thermal conductor, and trapping it suppresses convection currents around the glass tube, reducing conductive and convective heat loss to the room.`,
    equations: `\\text{Rate}_{\\text{insulated}} = \\frac{11}{90} = 0.122^\\circ\\text{C/s} < \\text{Rate}_{\\text{plain}} = \\frac{19}{90} = 0.211^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compare Rates (Part i)",
        body: "The rate of cooling is smaller / slower for the insulated tube (11 °C drop compared to 19 °C drop in 90 s)."
      },
      {
        step: 2,
        title: "Explain Physical Mechanism (Part ii)",
        body: "Cotton wool is a poor conductor of thermal energy / traps air, which reduces heat loss by conduction and convection to the surroundings."
      }
    ],
    finalAnswer: "(i) The rate of cooling of the insulated tube is smaller / slower than the uninsulated tube;\n(ii) Cotton wool is a thermal insulator / poor conductor / traps air, reducing heat loss by conduction and convection.",
    reasonablenessCheck: "A drop of 11 °C vs 19 °C represents a ~42% reduction in cooling rate from wrapping in cotton wool.",
    commonMistakes: [
      "Saying cotton wool generates heat.",
      "Saying cotton wool stops all heat loss."
    ],
    takeaway: "Cotton wool traps air, reducing thermal conduction and convection and lowering the cooling rate.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Insulated 90 s Drop", expr: () => "11 °C (0.12 °C/s)" },
        { label: "Uninsulated 90 s Drop", expr: () => "19 °C (0.21 °C/s)" },
        { label: "Insulation Mechanism", expr: () => "Traps air; cuts conduction/convection" }
      ],
      explanation: "Cotton wool lagging cuts the 90 s drop from 19 °C to 11 °C by trapping air around the tube."
    }
  },
  {
    globalId: "Q257",
    examId: "Q02451",
    paperRef: "5054/41/M/J/24 Q2(a)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Cooling Curve Investigation Setup",
    paperType: "atp",
    marks: 1,
    questionText: `A student investigates the rate of cooling of hot water in a glass beaker under two conditions: uninsulated and insulated.
State the purpose of clamping the thermometer vertically in the stand rather than letting it rest on the side of the beaker. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the experimental purpose of supporting the thermometer with a clamp and stand during a cooling curve investigation.",
    givenInfo: [
      "Setup uses a clamp, boss and stand to hold the thermometer vertically in a 250 cm³ beaker."
    ],
    toFind: "One reason for clamping the thermometer.",
    physicsConcepts: `Clamping the thermometer provides two practical benefits:
1. Prevents the bulb from touching the glass bottom or sides of the beaker, ensuring it measures water temperature rather than container temperature.
2. Holds the thermometer steady at eye level, preventing movement and reducing parallax error when taking readings at timed intervals.
3. Prevents the thermometer from tipping the beaker over.`,
    equations: `\\text{Bulb clearance} > 0 \\implies \\theta_{\\text{measured}} = \\theta_{\\text{liquid}} \\neq \\theta_{\\text{container}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Wall Contact Error",
        body: "Letting the thermometer rest against the glass measures heat conduction through the container walls rather than the bulk liquid temperature."
      },
      {
        step: 2,
        title: "State Operational Justification",
        body: "To prevent the thermometer bulb from touching the sides or bottom of the beaker (or to hold the thermometer steady at eye level / prevent the beaker from tipping over)."
      }
    ],
    finalAnswer: "To prevent the bulb from touching the sides or bottom of the beaker (or to keep the thermometer steady / at eye level / prevent the beaker tipping over).",
    reasonablenessCheck: "Glass in contact with ambient air cools faster than the bulk water; clamping avoids this source of error.",
    commonMistakes: [
      "Saying 'to look professional'.",
      "Saying 'to keep the water hot'."
    ],
    takeaway: "Clamping the thermometer prevents bulb contact with beaker walls and keeps the scale steady for accurate reading.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Support Method", expr: () => "Clamped in Stand" },
        { label: "Benefit", expr: () => "Prevents wall contact & parallax" }
      ],
      explanation: "Clamping the thermometer keeps the bulb suspended in the bulk liquid without touching the glass."
    }
  },
  {
    globalId: "Q258",
    examId: "Q02452",
    paperRef: "5054/41/M/J/24 Q2(a)(i)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Initial Temperature Scale Reading",
    paperType: "atp",
    marks: 1,
    questionText: `Fig. 2.1 shows part of the thermometer scale at time t = 0 for the uninsulated beaker:
Major marks at 70, 80 and 90 °C.
Between 80 and 90 °C there are 10 small divisions.
The liquid thread is at 5 small divisions above 80 °C.

Record the temperature θ_0 at time t = 0.
θ_0 = .................... °C [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read initial temperature θ_0 from the analogue thermometer scale in Fig. 2.1.",
    givenInfo: [
      "10 subdivisions per 10 °C -> 1.0 °C per division.",
      "Meniscus is 5 divisions above 80 °C."
    ],
    toFind: "Initial temperature θ_0 in °C.",
    physicsConcepts: `Scale reading:
$$\\theta_0 = 80 + (5 \\times 1.0) = 85.0^\\circ\\text{C}$$`,
    equations: `\\theta_0 = 80.0 + 5.0 = 85.0^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Determine Scale Value",
        body: "Each small division represents 1.0 °C."
      },
      {
        step: 2,
        title: "Read Position",
        body: "Five marks above 80 °C: 80 + 5 = 85 °C (or 85.0 °C)."
      }
    ],
    finalAnswer: "85 °C (or 85.0 °C)",
    reasonablenessCheck: "Midpoint between 80 °C and 90 °C is 85 °C.",
    commonMistakes: [
      "Reading 84 °C or 86 °C.",
      "Writing without units if not printed."
    ],
    takeaway: "80 + 5 divisions = 85 °C.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 85.0 },
      controls: [],
      readouts: [
        { label: "Scale Reading", expr: () => "85.0 °C" }
      ],
      explanation: "Meniscus sits on the fifth mark above 80 °C, indicating 85.0 °C."
    }
  },
  {
    globalId: "Q259",
    examId: "Q02453",
    paperRef: "5054/41/M/J/24 Q2(a)(ii)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Uninsulated Beaker Cooling Data Table 2.1",
    paperType: "atp",
    marks: 1,
    questionText: `The student measures the temperature θ of the water in the uninsulated beaker every 30 s for 180 s.
The readings are recorded in Table 2.1:
t = 0 s: 85 °C
t = 30 s: 78 °C
t = 60 s: 73 °C
t = 90 s: 69 °C
t = 120 s: 66 °C
t = 150 s: 63 °C
t = 180 s: 61 °C

State what happens to the temperature drop in each 30 s interval as time progresses. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Analyze the sequence of 30-second temperature drops in Table 2.1 and describe the trend.",
    givenInfo: [
      "Intervals: 0–30 s (drop = 7 °C), 30–60 s (drop = 5 °C), 60–90 s (drop = 4 °C), 90–120 s (drop = 3 °C), 120–150 s (drop = 3 °C), 150–180 s (drop = 2 °C)."
    ],
    toFind: "Trend in 30-second temperature drops over time.",
    physicsConcepts: `Newton's law of cooling:
Temperature decreases non-linearly over time:
$$\\Delta \\theta_{30\\text{ s}} \\propto (\\theta - \\theta_{\\text{room}})$$
Because the water cools toward room temperature, the temperature difference decreases with each interval, causing the temperature drop in each successive 30 s period to become progressively smaller.`,
    equations: `\\Delta \\theta_1 = 7^\\circ\\text{C} > \\Delta \\theta_2 = 5^\\circ\\text{C} > \\Delta \\theta_3 = 4^\\circ\\text{C} > \\Delta \\theta_4 = 3^\\circ\\text{C} > \\Delta \\theta_6 = 2^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Successive Drops",
        body: "85 - 78 = 7 °C; 78 - 73 = 5 °C; 73 - 69 = 4 °C; 69 - 66 = 3 °C; 66 - 63 = 3 °C; 63 - 61 = 2 °C."
      },
      {
        step: 2,
        title: "Deduce Pattern",
        body: "The temperature drop in each 30 s interval decreases / becomes smaller as time progresses."
      }
    ],
    finalAnswer: "The temperature drop in each 30 s interval decreases / becomes smaller over time (rate of cooling slows down).",
    reasonablenessCheck: "7 °C -> 5 °C -> 4 °C -> 3 °C -> 2 °C reflects standard exponential cooling.",
    commonMistakes: [
      "Stating 'temperature decreases' rather than 'temperature drop per interval decreases'.",
      "Claiming drops are constant."
    ],
    takeaway: "The temperature drop per interval decreases over time because the thermal gradient with ambient air diminishes.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Drops per 30 s", expr: () => "7, 5, 4, 3, 3, 2 °C" },
        { label: "Trend", expr: () => "Decreases each interval" }
      ],
      explanation: "Successive 30 s drops decrease from 7 °C to 2 °C as the water cools toward room temperature."
    }
  },
  {
    globalId: "Q260",
    examId: "Q02454",
    paperRef: "5054/41/M/J/24 Q2(a)(iii)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Initial Cooling Rate Calculation R_1",
    paperType: "atp",
    marks: 2,
    questionText: `Calculate the average rate of cooling R_1 of the water in the uninsulated beaker for the first 90 s of the experiment.
Use the data from Table 2.1 (θ_0 = 85 °C, θ_90 = 69 °C) and the equation:
R_1 = (θ_0 - θ_90) / t
where t = 90 s. State the unit of your answer.
R_1 = .................... unit .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the initial average cooling rate R_1 over the first 90 s and state its unit.",
    givenInfo: [
      "θ_0 = 85 °C",
      "θ_90 = 69 °C",
      "Time t = 90 s",
      "Formula: R_1 = (θ_0 - θ_90) / 90"
    ],
    toFind: "Cooling rate R_1 with unit.",
    physicsConcepts: `Average cooling rate:
$$R_1 = \\frac{\\theta_0 - \\theta_{90}}{t} = \\frac{85 - 69}{90} = \\frac{16}{90} = 0.178\\text{ }^\\circ\\text{C/s}$$
Unit: °C/s (or °C s⁻¹).`,
    equations: `\\Delta \\theta = 85 - 69 = 16^\\circ\\text{C}; \\quad R_1 = \\frac{16}{90} = 0.1778 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Temperature Decrease",
        body: "Δθ = 85 °C - 69 °C = 16 °C."
      },
      {
        step: 2,
        title: "Compute Rate R_1",
        body: "R_1 = 16 °C / 90 s = 0.1778 °C/s ≈ 0.18 °C/s (or 0.178 °C/s)."
      },
      {
        step: 3,
        title: "State Unit",
        body: "Unit: °C/s."
      }
    ],
    finalAnswer: "0.18 °C/s (or 0.178 °C/s), unit: °C/s",
    reasonablenessCheck: "0.18 °C/s corresponds to roughly 10.7 °C per minute, consistent with rapid cooling from an initial temperature of 85 °C.",
    commonMistakes: [
      "Omitting the unit or writing only °C.",
      "Dividing by 1.5 minutes without changing unit to °C/min."
    ],
    takeaway: "R_1 = 16 / 90 = 0.18 °C/s. Include the time unit in the denominator.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { dropR1: 16 },
      controls: [],
      readouts: [
        { label: "Drop in 90 s", expr: () => "16.0 °C" },
        { label: "Rate R_1", expr: () => "0.178 °C/s" }
      ],
      explanation: "Dividing a 16 °C drop by 90 s yields an initial cooling rate of 0.18 °C/s."
    }
  },
  {
    globalId: "Q261",
    examId: "Q02455",
    paperRef: "5054/41/M/J/24 Q2(a)(iv)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Later Interval Cooling Rate Calculation R_2",
    paperType: "atp",
    marks: 1,
    questionText: `Calculate the average rate of cooling R_2 of the water for the final 90 s of the experiment (from t = 90 s to t = 180 s).
From Table 2.1: θ_90 = 69 °C, θ_180 = 61 °C.
Use the equation:
R_2 = (θ_90 - θ_180) / t
where t = 90 s.
R_2 = .................... °C/s [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the average cooling rate R_2 over the second 90 s interval in °C/s.",
    givenInfo: [
      "θ_90 = 69 °C",
      "θ_180 = 61 °C",
      "Time interval t = 180 - 90 = 90 s",
      "Formula: R_2 = (θ_90 - θ_180) / 90"
    ],
    toFind: "Cooling rate R_2 in °C/s.",
    physicsConcepts: `Cooling rate in a later time interval:
$$R_2 = \\frac{\\theta_{90} - \\theta_{180}}{90} = \\frac{69 - 61}{90} = \\frac{8.0}{90} = 0.0889\\text{ }^\\circ\\text{C/s}$$`,
    equations: `\\Delta \\theta = 69 - 61 = 8.0^\\circ\\text{C}; \\quad R_2 = \\frac{8.0}{90} = 0.0889 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Temperature Decrease",
        body: "Δθ = 69 °C - 61 °C = 8.0 °C."
      },
      {
        step: 2,
        title: "Compute Rate R_2",
        body: "R_2 = 8.0 °C / 90 s = 0.0889 °C/s ≈ 0.089 °C/s (or 0.09 °C/s)."
      }
    ],
    finalAnswer: "0.089 °C/s (or 0.0889 °C/s / 0.09 °C/s)",
    reasonablenessCheck: "R_2 (0.089 °C/s) is half of R_1 (0.178 °C/s), consistent with the halving of the temperature difference with room air.",
    commonMistakes: [
      "Dividing by 180 s instead of 90 s.",
      "Using the wrong temperature values from Table 2.1."
    ],
    takeaway: "R_2 = 8 / 90 = 0.089 °C/s. The cooling rate decreases as the liquid temperature approaches room temperature.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { dropR2: 8.0 },
      controls: [],
      readouts: [
        { label: "Drop (90–180 s)", expr: () => "8.0 °C" },
        { label: "Rate R_2", expr: () => "0.089 °C/s" }
      ],
      explanation: "An 8.0 °C drop over 90 s yields a cooling rate of 0.089 °C/s."
    }
  },
  {
    globalId: "Q262",
    examId: "Q02456",
    paperRef: "5054/41/M/J/24 Q2(a)(v)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Comparative Explanation of Cooling Rates R_1 and R_2",
    paperType: "atp",
    marks: 1,
    questionText: `Compare your values of R_1 and R_2.
Explain any difference in these values. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Compare R_1 and R_2 and explain the physical cause of the difference.",
    givenInfo: [
      "R_1 ≈ 0.18 °C/s (first 90 s)",
      "R_2 ≈ 0.089 °C/s (second 90 s)"
    ],
    toFind: "Comparison and physical explanation.",
    physicsConcepts: `Newton's law of cooling:
The rate of thermal energy transfer depends directly on the temperature difference between the water and the surrounding air:
$$\\text{Rate} \\propto (\\theta - \\theta_{\\text{surroundings}})$$
In the first 90 s, the water is hotter (~85 °C to 69 °C), so the temperature difference with room air (~20 °C) is larger.
In the second 90 s, the water is cooler (~69 °C to 61 °C), so the temperature difference is smaller.
Therefore, R_1 is greater than R_2.`,
    equations: `R_1 > R_2 \\iff (\\theta_0 - \\theta_{\\text{room}}) > (\\theta_{90} - \\theta_{\\text{room}})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Comparison",
        body: "R_1 is greater than R_2 (cooling is faster in the first 90 s)."
      },
      {
        step: 2,
        title: "Explain Physical Cause",
        body: "The water is hotter initially, so the temperature difference between the water and the surroundings is greater, resulting in faster thermal energy transfer."
      }
    ],
    finalAnswer: "R_1 is greater than R_2 because the temperature of the water is higher initially, so the temperature difference between the water and the surroundings is greater.",
    reasonablenessCheck: "Hotter bodies lose heat to ambient surroundings at a faster rate.",
    commonMistakes: [
      "Saying R_1 is larger because there was more water initially.",
      "Failing to mention temperature difference with surroundings."
    ],
    takeaway: "Cooling rates decrease over time because the temperature difference between the liquid and its surroundings diminishes.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Rate Comparison", expr: () => "R_1 > R_2" },
        { label: "Physical Reason", expr: () => "Greater initial ΔT with room air" }
      ],
      explanation: "Heat loss slows over time as the temperature gap between water and ambient air shrinks."
    }
  },
  {
    globalId: "Q263",
    examId: "Q02457",
    paperRef: "5054/41/M/J/24 Q2(b)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Cooling with Lid and Insulation Setup",
    paperType: "atp",
    marks: 1,
    questionText: `The student repeats the experiment using an identical beaker, but places a cardboard lid on the beaker and wraps the sides with a layer of insulation.
State two ways in which this modified apparatus reduces heat loss compared to the uninsulated beaker. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify the heat transfer mechanisms reduced by adding a cardboard lid and side insulation.",
    givenInfo: [
      "Modifications: Cardboard lid added; sides wrapped with insulation."
    ],
    toFind: "Two heat loss reduction mechanisms.",
    physicsConcepts: `Thermal protection mechanisms:
1. Cardboard lid: Traps water vapor, saturating the air above the liquid and stopping evaporation; blocks rising warm air currents, reducing upward convection.
2. Side insulation: Traps stagnant air in porous fibers, reducing conduction and convection through the glass walls to the room.`,
    equations: `\\text{Lid} \\to \\text{Reduces evaporation and convection}; \\quad \\text{Side insulation} \\to \\text{Reduces conduction and convection}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Lid Effect",
        body: "The lid reduces heat loss by evaporation and upward convection."
      },
      {
        step: 2,
        title: "Analyze Insulation Effect",
        body: "The insulation reduces heat loss by conduction and convection through the sides of the beaker."
      }
    ],
    finalAnswer: "The lid reduces heat loss by evaporation (and convection); the insulation reduces heat loss by conduction (and convection through the sides).",
    reasonablenessCheck: "Lids target evaporative loss; lagging targets conduction through container walls.",
    commonMistakes: [
      "Saying the lid generates heat.",
      "Saying insulation stops all radiation."
    ],
    takeaway: "Lids primarily reduce evaporation and upward convection; side lagging primarily reduces conduction.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Lid Action", expr: () => "Stops surface evaporation & convection" },
        { label: "Insulation Action", expr: () => "Reduces conduction through sides" }
      ],
      explanation: "The lid prevents evaporative loss while insulation slows conduction through the beaker walls."
    }
  },
  {
    globalId: "Q264",
    examId: "Q02458",
    paperRef: "5054/41/M/J/24 Q2(i)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Insulated Beaker Temperature Drop Calculation",
    paperType: "atp",
    marks: 1,
    questionText: `Table 2.2 shows the results for the insulated beaker with a lid:
t = 0 s: 85 °C
t = 180 s: 77 °C

Calculate the total temperature decrease Δθ_ins of the water in the insulated beaker with a lid after 180 s.
Δθ_ins = .................... °C [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate total temperature decrease over 180 s for the insulated beaker with a lid.",
    givenInfo: [
      "Initial temperature at t = 0 s: 85 °C",
      "Final temperature at t = 180 s: 77 °C"
    ],
    toFind: "Temperature decrease Δθ_ins in °C.",
    physicsConcepts: `Temperature drop calculation:
$$\\Delta \\theta_{\\text{ins}} = \\theta(0) - \\theta(180)$$`,
    equations: `\\Delta \\theta_{\\text{ins}} = 85 - 77 = 8.0^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Drop",
        body: "Δθ_ins = 85 °C - 77 °C = 8.0 °C."
      }
    ],
    finalAnswer: "8 °C (or 8.0 °C)",
    reasonablenessCheck: "In the uninsulated beaker, the drop was 24 °C (85 to 61 °C); with lid and insulation, the drop is reduced to 8 °C.",
    commonMistakes: [
      "Arithmetic error.",
      "Omitting units."
    ],
    takeaway: "Δθ_ins = 85 - 77 = 8 °C, confirming a large reduction in heat loss compared to the bare beaker.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { dropIns: 8.0 },
      controls: [],
      readouts: [
        { label: "Insulated 180 s Drop", expr: () => "8.0 °C (Protected)" },
        { label: "Uninsulated 180 s Drop", expr: () => "24.0 °C (Unprotected)" }
      ],
      explanation: "Adding a lid and insulation cuts the 180 s temperature drop from 24 °C down to 8 °C."
    }
  },
  {
    globalId: "Q265",
    examId: "Q02459",
    paperRef: "5054/41/M/J/24 Q2(i)(ii)",
    pdfPage: 128,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Deductions and Controlled Variables in Insulation Testing",
    paperType: "atp",
    marks: 2,
    questionText: `(i) Use your answers to (a) and (b) to state the effect of the lid and insulation on the rate of cooling of the water. [1]
(ii) State one variable that the student must keep constant between the two experiments to make a fair comparison. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State the quantitative conclusion on cooling rate reduction from the lid and insulation, and name one control variable.",
    givenInfo: [
      "Uninsulated beaker: drops 24 °C in 180 s (85 °C -> 61 °C).",
      "Insulated beaker with lid: drops 8 °C in 180 s (85 °C -> 77 °C)."
    ],
    toFind: "Stated conclusion on cooling rate, and one controlled variable.",
    physicsConcepts: `1. Conclusion: The lid and insulation reduce / decrease the rate of cooling (water cools more slowly).
2. Fair testing control variables:
   - Volume / mass of hot water (must be identical in both runs, e.g. 150 cm³).
   - Initial starting temperature of the water (85 °C).
   - Same beaker material, thickness, and dimensions.
   - Ambient room temperature.`,
    equations: `\\text{Rate}_{\\text{ins}} = \\frac{8}{180} = 0.044^\\circ\\text{C/s} < \\text{Rate}_{\\text{bare}} = \\frac{24}{180} = 0.133^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) State Conclusion",
        body: "The lid and insulation decrease / reduce the rate of cooling / make the water cool more slowly."
      },
      {
        step: 2,
        title: "Part (ii) State Controlled Variable",
        body: "Volume / mass of water (or initial starting temperature of water / room temperature / same size/type of beaker)."
      }
    ],
    finalAnswer: "(i) The lid and insulation decrease / reduce the rate of cooling (water cools more slowly);\n(ii) Volume / mass of water (or initial / starting temperature of water / room temperature / same beaker).",
    reasonablenessCheck: "Cooling rate is cut by a factor of 3 (from 0.133 °C/s to 0.044 °C/s); volume and starting temperature must be kept equal.",
    commonMistakes: [
      "Naming 'time' as a controlled variable.",
      "Saying the lid increases the temperature of the water."
    ],
    takeaway: "Adding a lid and insulation substantially decreases cooling rate; fair comparisons require matching water volume and initial temperature.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Conclusion", expr: () => "Lid & insulation reduce cooling rate" },
        { label: "Control Variable", expr: () => "Water volume & starting temp" }
      ],
      explanation: "Lid and insulation reduce the cooling rate by roughly two-thirds, provided water volume and starting temperature are kept equal."
    }
  }
];