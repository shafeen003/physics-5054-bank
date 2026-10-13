/**
 * Master Question Store: Batch 15 (Q206 to Q220)
 * Section 2.2: Completes Paper 3 Practical (55/55) & Begins Paper 4 ATP (8/77)
 */

const QUESTIONS_BATCH_15 = [
  {
    globalId: "Q206",
    examId: "Q02322",
    paperRef: "5054/31/M/J/26 Q3",
    pdfPage: 100,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Aluminium Foil Insulation on Beaker Cooling Master Suite",
    paperType: "practical",
    marks: 10,
    questionText: `You will investigate the effect of aluminium foil on the rate of cooling of a beaker of water.
You are provided with:
- a 100 cm³ glass beaker
- a piece of aluminium foil
- a stirring thermometer with a range of -10 °C to +110 °C
- a clamp, boss and stand
- a stopwatch reading to 0.1 s.

(a) (i) The thermometer has been placed in the clamp (Figure 3.1). Record the temperature to the nearest 0.5 °C. This is room temperature θ_R. [1]
(ii) Explain how you avoid parallax error when reading the room temperature from the thermometer scale. [1]

(b) (i) Pour 100 cm³ of hot water into the uninsulated beaker. Wait for thermometer to reach maximum value, start stopwatch. Stir gently before each reading. Record temperature θ_1 every 1.0 minute for 5.0 minutes in Table 3.1. [2]
(ii) Cover sides and bottom of beaker with aluminium foil. Repeat procedure to obtain readings of temperature θ_2. Record in Table 3.1. [1]

(c) (i) On the grid provided, plot a graph of θ_1 / °C on the y-axis against time / min on the x-axis. Draw curve of best fit. [4]
(ii) On the same axes, plot a graph of θ_2 / °C against time / min. Draw curve of best fit. [1]
(iii) Use the data in Table 3.1 and your graphs to compare the rates of cooling of the water in the beakers without and with the aluminium foil. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Investigate cooling curves of water in an uninsulated beaker versus a beaker wrapped with aluminium foil, plot comparative curves of best fit, and deduce the effect of foil on cooling rate.",
    givenInfo: [
      "Volume of hot water = 100 cm³.",
      "Trial 1: Uninsulated glass beaker (θ_1).",
      "Trial 2: Glass beaker wrapped with aluminium foil on sides and bottom (θ_2).",
      "Timing: 0.0 to 5.0 minutes at 1.0 minute intervals."
    ],
    toFind: "Baseline room temperature, parallax precaution, experimental cooling tables, graph plotting rules, and cooling rate comparison.",
    physicsConcepts: `Thermal radiation and reflective insulation:
1. An uninsulated glass beaker loses thermal energy via:
   - Conduction through the bottom glass to the bench.
   - Convection of surrounding air warmed by the sides.
   - Thermal radiation emitted from the glass surface (glass has a high infrared emissivity $\\varepsilon \\approx 0.94$).
   - Surface evaporation from the open top.
2. Wrapping the sides and base with aluminium foil:
   - Shiny aluminium is a poor emitter of thermal radiation (low emissivity $\\varepsilon \\approx 0.05$) and a good reflector of infrared radiation.
   - It also traps a thin layer of stagnant air against the glass, reducing conductive/convective loss.
   - Consequently, the rate of heat loss is reduced, and the curve of $\\theta_2$ is less steep than $\\theta_1$.`,
    equations: `P_{\\text{rad}} = \\varepsilon \\sigma A (T^4 - T_{\\text{env}}^4); \\quad \\varepsilon_{\\text{foil}} \\ll \\varepsilon_{\\text{glass}} \\implies \\left(\\frac{d\\theta}{dt}\\right)_{\\text{foil}} < \\left(\\frac{d\\theta}{dt}\\right)_{\\text{plain}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Practical Suite",
        body: "This master entry coordinates subparts Q207 through Q210 for the Paper 3 reflective insulation experiment on PDF pages 100–102."
      }
    ],
    finalAnswer: "Full practical procedures, readings, and deductions are detailed in subparts Q207 to Q210 below.",
    reasonablenessCheck: "Aluminium foil suppresses radiative and convective losses, ensuring the temperature of the foiled beaker remains higher at t = 5.0 min.",
    commonMistakes: [
      "Plotting time in seconds when the axis and question specify minutes.",
      "Drawing straight point-to-point lines instead of smooth curves of best fit."
    ],
    takeaway: "Aluminium foil acts as a thermal radiation barrier: its shiny metallic surface is a poor emitter of infrared radiation, slowing down the rate of cooling.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { foilApplied: true, timeMin: 5.0 },
      controls: [
        { id: "timeMin", name: "Cooling Time", min: 1.0, max: 5.0, step: 0.5, default: 5.0, unit: "min" }
      ],
      readouts: [
        { label: "Plain Beaker Temp θ1", expr: (p) => (85.0 - p.timeMin * 4.2).toFixed(1) + " °C" },
        { label: "Foiled Beaker Temp θ2", expr: (p) => (85.0 - p.timeMin * 2.6).toFixed(1) + " °C" },
        { label: "Foil Retention Benefit", expr: (p) => (p.timeMin * 1.6).toFixed(1) + " °C Warmer" }
      ],
      explanation: "Aluminium foil reflects thermal radiation internally and emits very little infrared, keeping the water warmer."
    }
  },
  {
    globalId: "Q207",
    examId: "Q02323",
    paperRef: "5054/31/M/J/26 Q3(a)(i)-(ii)",
    pdfPage: 100,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Ambient Reading and Parallax Avoidance",
    paperType: "practical",
    marks: 2,
    questionText: `(i) The thermometer has been placed in the clamp as shown in Figure 3.1.
Record the temperature on the thermometer to the nearest 0.5 °C. This is room temperature.
θ_R = .................... °C [1]

(ii) Explain how you avoid parallax error when reading the room temperature from the thermometer scale. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record ambient room temperature to 0.5 °C resolution and explain how to position the line of sight to eliminate parallax error.",
    givenInfo: [
      "Stirring thermometer held vertically in a stand clamp.",
      "Room temperature conditions."
    ],
    toFind: "Room temperature θ_R and explanation of parallax error prevention.",
    physicsConcepts: `Scale reading and parallax error:
Parallax error occurs when the observer's line of sight is not perpendicular to the scale mark, causing the apparent position of the liquid meniscus to shift relative to the graduation lines etched on the outer glass surface.
To eliminate parallax error, the observer must view the thermometer with their eye directly level with the top of the liquid meniscus (line of sight perpendicular to the thermometer stem).`,
    equations: `\\text{Line of sight } \\perp \\text{ scale stem} \\implies \\text{Parallax error} = 0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Room Temperature (Part i)",
        body: "Read thermometer meniscus at ambient conditions: typically θ_R = 21.5 °C (acceptable laboratory range: 19.0 °C to 24.0 °C recorded to nearest 0.5 °C)."
      },
      {
        step: 2,
        title: "Explain Parallax Avoidance (Part ii)",
        body: "Look directly perpendicular to the scale / place eye at the same horizontal level as the liquid meniscus."
      }
    ],
    finalAnswer: "(i) θ_R = 21.5 °C (to nearest 0.5 °C);\n(ii) Look perpendicular to the thermometer scale / view at eye level with the liquid meniscus.",
    reasonablenessCheck: "21.5 °C is standard room temperature; eye-level viewing is the universal procedure for all liquid-column instruments.",
    commonMistakes: [
      "Omitting decimal place when reading to 0.5 °C.",
      "Giving a vague answer like 'look closely' without mentioning eye level or perpendicular angle."
    ],
    takeaway: "View scale graduations perpendicular to the stem at eye level with the meniscus to prevent parallax error.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 21.5 },
      controls: [],
      readouts: [
        { label: "Measured θ_R", expr: () => "21.5 °C" },
        { label: "Eye Alignment", expr: () => "Perpendicular to Meniscus" }
      ],
      explanation: "Viewing at exact eye level eliminates angular refractive displacement."
    }
  },
  {
    globalId: "Q208",
    examId: "Q02324",
    paperRef: "5054/31/M/J/26 Q3(b)",
    pdfPage: 101,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Beaker Cooling Data Collection Table 3.1",
    paperType: "practical",
    marks: 3,
    questionText: `(b) (i) Place the glass beaker below the thermometer so the bulb is in the middle of the beaker.
Ask supervisor to pour 100 cm³ of hot water into the beaker.
Wait for thermometer to reach maximum value and start stopwatch.
Take readings of temperature θ_1 of the water every 1.0 minute for 5.0 minutes.
Stir the water gently before each reading. Record in Table 3.1. [2]

(ii) Use the boss to raise thermometer out of water. Pour water away.
Cover sides and bottom of beaker with aluminium foil provided.
Repeat procedure to obtain readings of temperature θ_2 of the water in the beaker covered with aluminium foil.
Record in Table 3.1. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Collect time-series temperature cooling data over 5.0 minutes for both the plain glass beaker (θ_1) and the aluminium-foil-wrapped beaker (θ_2).",
    givenInfo: [
      "Hot water volume = 100 cm³ in a 100 cm³ beaker.",
      "Times: t = 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 minutes.",
      "Water stirred gently before each reading."
    ],
    toFind: "Complete sets of cooling temperatures θ_1 and θ_2 for Table 3.1.",
    physicsConcepts: `Experimental observations during cooling:
1. Stirring ensures thermal equilibrium throughout the liquid, preventing localized temperature stratification.
2. Uninsulated beaker (θ_1): High radiation emission and conduction to air cause a rapid drop (~20 °C to 25 °C over 5 minutes).
3. Aluminium foil beaker (θ_2): Reduced radiative emission and barrier insulation slow the heat transfer rate, so temperatures stay several degrees higher at each minute mark.`,
    equations: `\\Delta \\theta_1(5\\text{ min}) > \\Delta \\theta_2(5\\text{ min}); \\quad \\theta_2(t) > \\theta_1(t) \\quad \\text{for } t > 0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Typical Data for Uninsulated Beaker θ_1",
        body: "t = 0.0 min: 84.0 °C\nt = 1.0 min: 78.5 °C\nt = 2.0 min: 74.0 °C\nt = 3.0 min: 70.0 °C\nt = 4.0 min: 66.5 °C\nt = 5.0 min: 63.5 °C (Total drop = 20.5 °C)."
      },
      {
        step: 2,
        title: "Record Typical Data for Foiled Beaker θ_2",
        body: "t = 0.0 min: 84.0 °C (matching initial temp)\nt = 1.0 min: 80.5 °C\nt = 2.0 min: 77.0 °C\nt = 3.0 min: 74.0 °C\nt = 4.0 min: 71.5 °C\nt = 5.0 min: 69.0 °C (Total drop = 15.0 °C)."
      }
    ],
    finalAnswer: "Table 3.1:\ntime / min | 0.0 | 1.0 | 2.0 | 3.0 | 4.0 | 5.0\nθ_1 / °C   | 84.0 | 78.5 | 74.0 | 70.0 | 66.5 | 63.5\nθ_2 / °C   | 84.0 | 80.5 | 77.0 | 74.0 | 71.5 | 69.0",
    reasonablenessCheck: "The plain beaker drops by 20.5 °C, while the foiled beaker drops by only 15.0 °C, reflecting the thermal insulation benefit of the reflective foil.",
    commonMistakes: [
      "Failing to stir before taking readings, causing temperature erraticism.",
      "Starting the second trial with water at a vastly different starting temperature."
    ],
    takeaway: "Gentle stirring ensures uniform liquid temperature; reflective foil consistently reduces the temperature drop over time.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { timeMin: 5.0 },
      controls: [],
      readouts: [
        { label: "Plain Beaker at 5 min", expr: () => "63.5 °C (Drop 20.5 °C)" },
        { label: "Foiled Beaker at 5 min", expr: () => "69.0 °C (Drop 15.0 °C)" }
      ],
      explanation: "Table 3.1 tracks parallel cooling curves showing the protective benefit of the reflective foil."
    }
  },
  {
    globalId: "Q209",
    examId: "Q02325",
    paperRef: "5054/31/M/J/26 Q3(c)(i)-(ii)",
    pdfPage: 102,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Dual Cooling Curve Graph Plotting",
    paperType: "practical",
    marks: 5,
    questionText: `(c) (i) On the grid provided in Figure 3.3, plot a graph of θ_1 / °C on the y-axis against time / min on the x-axis.
Start your x-axis at 0. You do not have to start your y-axis at 0.
Draw the curve of best fit for the θ_1 results. Label this line θ_1. [4]

(ii) On the same axes in Figure 3.3, plot a graph of θ_2 / °C on the y-axis against time / min.
Draw the curve of best fit for the θ_2 results. Label this line θ_2. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Plot experimental cooling curves θ_1 and θ_2 on the same grid with labeled axes, appropriate linear scales, accurately plotted points, smooth curves of best fit, and clear labels.",
    givenInfo: [
      "x-axis: time / min from 0.0 to 5.0 (must start at 0).",
      "y-axis: temperature / °C from ~60 °C to 85 °C (false origin allowed).",
      "Points for θ_1 and θ_2 from Table 3.1."
    ],
    toFind: "Criteria-compliant graphical representation of both cooling curves.",
    physicsConcepts: `Cambridge graph-plotting criteria:
1. Axes: Clearly labeled with quantity and unit (time / min and temperature / °C).
2. Scales: Linear, sensible increments (e.g. 1 major div = 1.0 min on x-axis; 1 major div = 5.0 °C on y-axis). Occupies at least half of the available grid area.
3. Plotting: Points plotted accurately to within half a small square using small neat crosses (x) or dots in circles.
4. Line quality: Smooth, continuous curves of best fit with negative gradient that flattens over time. No forced straight lines or 'dot-to-dot' zig-zags.
5. Identification: Lines clearly labeled as θ_1 and θ_2.`,
    equations: `\\text{Gradient} = \\frac{d\\theta}{dt} < 0; \\quad |\\text{Gradient}_{\\theta 1}| > |\\text{Gradient}_{\\theta 2}|`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Scale Selection",
        body: "x-axis: 0 to 5.0 min (2 cm = 1.0 min).\ny-axis: 60 °C to 90 °C (2 cm = 5 °C), starting at 60 °C (false origin)."
      },
      {
        step: 2,
        title: "Plot θ_1 Points and Draw Curve",
        body: "Plot (0, 84.0), (1, 78.5), (2, 74.0), (3, 70.0), (4, 66.5), (5, 63.5). Draw smooth decreasing curve; label 'θ_1'."
      },
      {
        step: 3,
        title: "Plot θ_2 Points and Draw Curve",
        body: "Plot (0, 84.0), (1, 80.5), (2, 77.0), (3, 74.0), (4, 71.5), (5, 69.0). Draw smooth curve lying above θ_1; label 'θ_2'."
      }
    ],
    finalAnswer: "Correctly scaled and labeled axes (time / min, θ / °C); all points plotted within 0.5 square; two smooth, continuous curves of best fit drawn and labeled θ_1 and θ_2, with θ_2 remaining above θ_1.",
    reasonablenessCheck: "Both curves show decreasing negative gradients as water cools; curve θ_2 lies above θ_1 at all times t > 0.",
    commonMistakes: [
      "Using awkward scales such as multiples of 3 or 7.",
      "Drawing thick, hairy, or disjointed lines.",
      "Forcing curves to pass through the origin (0, 0)."
    ],
    takeaway: "Scale graphs to occupy more than half the grid; plot with neat crosses and draw smooth continuous curves of best fit.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { plotTwinCurves: true },
      controls: [],
      readouts: [
        { label: "Curve θ1", expr: () => "Plain Beaker (Steeper Decay)" },
        { label: "Curve θ2", expr: () => "Foiled Beaker (Shallower Decay)" }
      ],
      explanation: "Canvas graph displays both curves plotted on the same grid, showing the shallower slope of the foiled beaker."
    }
  },
  {
    globalId: "Q210",
    examId: "Q02326",
    paperRef: "5054/31/M/J/26 Q3(c)(iii)",
    pdfPage: 102,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Comparing Cooling Rates with and without Foil",
    paperType: "practical",
    marks: 1,
    questionText: `Use the data in Table 3.1 and your graphs in Figure 3.3 to compare the rates of cooling of the water in the beakers without and with the aluminium foil. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Deduce how aluminium foil affects the rate of cooling by referencing graph gradients and table temperature drops.",
    givenInfo: [
      "Without foil: Δθ_1 = 20.5 °C over 5.0 min (gradient is steeper).",
      "With foil: Δθ_2 = 15.0 °C over 5.0 min (gradient is shallower)."
    ],
    toFind: "Comparative statement on the cooling rates.",
    physicsConcepts: `Cooling rate is represented by the magnitude of the curve gradient:
\\text{Cooling Rate} = -\\frac{d\\theta}{dt}
Because the curve for the beaker without foil (θ_1) has a steeper negative gradient throughout and experiences a larger overall temperature drop in 5.0 minutes, water cools faster without aluminium foil (or aluminium foil reduces the rate of cooling).`,
    equations: `\\left|\\frac{d\\theta_1}{dt}\\right| > \\left|\\frac{d\\theta_2}{dt}\\right| \\implies \\text{Rate without foil} > \\text{Rate with foil}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compare Graph Gradients",
        body: "The line for θ_1 is steeper than the line for θ_2 at all corresponding times."
      },
      {
        step: 2,
        title: "State Conclusion",
        body: "The rate of cooling of the water in the beaker without aluminium foil is greater / faster than with aluminium foil (or aluminium foil decreases the rate of cooling)."
      }
    ],
    finalAnswer: "The rate of cooling is greater / faster without the aluminium foil than with the aluminium foil (or water cools more slowly when covered with aluminium foil).",
    reasonablenessCheck: "Shiny aluminium reflects infrared radiation and inhibits convective air contact, slowing the cooling process.",
    commonMistakes: [
      "Stating temperature instead of rate of cooling.",
      "Saying the foil heats the water."
    ],
    takeaway: "The steeper graph gradient indicates a higher rate of cooling; aluminium foil reduces the cooling rate.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Plain Beaker Rate", expr: () => "4.1 °C/min (Faster)" },
        { label: "Foiled Beaker Rate", expr: () => "3.0 °C/min (Slower)" }
      ],
      explanation: "Aluminium foil reduces the average cooling rate from 4.1 °C/min to 3.0 °C/min."
    }
  },
  {
    globalId: "Q211",
    examId: "Q01755",
    paperRef: "5054/32/M/J/26 Q2",
    pdfPage: 103,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Insulation vs Lid Cooling Master Suite",
    paperType: "practical",
    marks: 10,
    questionText: `In this experiment you will compare two methods of reducing the rate of temperature decrease in a beaker of hot water.
You are provided with:
- 2 beakers labelled P and Q: Beaker P is wrapped with a layer of insulation but has no lid; Beaker Q has a lid but no layer of insulation (Figure 2.1)
- a stirring thermometer (-10 °C to 110 °C)
- hot water (~80 °C)
- a stopwatch.

(a) Pour 200 cm³ of hot water into beaker P. Wait until reading stops increasing.
(i) Measure temperature θ at t = 0 to nearest 0.5 °C. Record in Table 2.1. [1]
(ii) Allow to cool for 240 s. Measure and record temperature at t = 240 s in Table 2.1. [1]

(b) Remove lid from beaker Q. Pour 200 cm³ of hot water into beaker Q. Replace lid. Place thermometer through hole in lid into water. Wait until reading stops increasing.
(i) Repeat measurements for beaker Q at t = 0 and t = 240 s in Table 2.1. [2]
(ii) Add the units to the column headings in Table 2.1. [1]

(c) Calculate temperature decrease in beaker P and beaker Q after cooling for 240 s. [1]
(d) Compare rates of temperature decrease in beakers P and Q. [2]
(e) State one factor that must be controlled to make a valid comparison. [1]
(f) A student wants to find how rate of temperature decrease in an insulated beaker compares with a beaker with no insulation. Suggest one change to the apparatus to enable this new comparison. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Investigate whether a lid or side insulation is more effective at reducing hot water cooling over 240 s, evaluate rates, state control factors, and suggest an experimental modification.",
    givenInfo: [
      "Beaker P: Insulated sides, open top (no lid).",
      "Beaker Q: Uninsulated sides, covered with lid.",
      "Volume of hot water = 200 cm³ in each beaker.",
      "Cooling timed for 240 seconds."
    ],
    toFind: "Initial and final temperatures, units, temperature decreases, rate comparison, control variables, and apparatus modification.",
    physicsConcepts: `Thermal loss pathways in open vs closed containers:
1. Open top (Beaker P): Allows significant latent heat loss via surface evaporation, plus buoyant air convection. Side insulation slows conduction through the glass, but surface evaporation remains the dominant cooling mechanism for hot water.
2. Lid (Beaker Q): A lid traps water vapor, saturating the air above the liquid and largely stopping evaporation and upward convection. Even with bare glass sides, preventing evaporation provides greater overall heat retention than insulating the sides of an open vessel.
3. Comparative result: Beaker Q (lid) exhibits a smaller temperature decrease than Beaker P (side insulation).`,
    equations: `\\Delta \\theta = \\theta(0) - \\theta(240); \\quad \\Delta \\theta_Q < \\Delta \\theta_P \\implies \\text{Lid is more effective than lagging}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Practical Suite",
        body: "This entry coordinates subparts Q211 and Q212 for the Paper 3 lid-versus-insulation investigation on PDF pages 103–105."
      }
    ],
    finalAnswer: "Full practical procedures, readings, and deductions are detailed in record Q212 below.",
    reasonablenessCheck: "Because water has an enormous latent heat of vaporisation (2.3 MJ/kg), stopping evaporation with a lid saves more thermal energy than insulating the beaker sides.",
    commonMistakes: [
      "Assuming side insulation is more effective than a lid.",
      "Forgetting to add units to table column headings."
    ],
    takeaway: "A lid reduces cooling more effectively than side insulation because it suppresses evaporative heat loss.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { dropP: 18.0, dropQ: 11.5 },
      controls: [],
      readouts: [
        { label: "Beaker P (Lagged, No Lid)", expr: () => "Δθ = 18.0 °C drop" },
        { label: "Beaker Q (Lid, No Lagging)", expr: () => "Δθ = 11.5 °C drop (Better)" }
      ],
      explanation: "Stopping surface evaporation with a lid preserves more thermal energy than lagging the beaker sides."
    }
  },
  {
    globalId: "Q212",
    examId: "Q01756",
    paperRef: "5054/32/M/J/26 Q2(c)-(f)",
    pdfPage: 104,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Beaker P vs Q Analysis and Apparatus Modification",
    paperType: "practical",
    marks: 5,
    questionText: `(c) Use your temperature readings in Table 2.1 to calculate the temperature decrease of the hot water in beaker P and in beaker Q after cooling for 240 s.
temperature decrease in beaker P = .................... °C
temperature decrease in beaker Q = .................... °C [1]

(d) Use your answers to 2(c) to compare the rates of temperature decrease of the water in beakers P and Q. [2]

(e) State one factor that must be controlled to make a valid comparison between the rates of temperature decrease of beaker P and beaker Q. [1]

(f) A student wants to find how the rate of decrease of temperature of the water in a beaker surrounded by a layer of insulation compares with the rate of decrease of temperature of the water in a beaker with no insulation.
Suggest one change to the apparatus that will enable this new comparison to be made. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate 240 s temperature drops, compare cooling rates, identify a key controlled variable, and suggest an apparatus modification to test insulation alone.",
    givenInfo: [
      "Table 2.1 typical data: Beaker P (82.0 °C -> 64.0 °C); Beaker Q (82.0 °C -> 70.5 °C).",
      "Cooling time = 240 s."
    ],
    toFind: "Temperature drops, rate comparison, control factor, and apparatus change.",
    physicsConcepts: `1. Temperature decrease: Δθ_P = 82.0 - 64.0 = 18.0 °C; Δθ_Q = 82.0 - 70.5 = 11.5 °C.
2. Rate comparison: The rate of temperature decrease in beaker P is greater than in beaker Q (water cools faster in P than in Q).
3. Controlled factor: Same starting temperature of hot water, same volume of water (200 cm³), or identical beaker size.
4. Apparatus change for testing insulation alone: To isolate the effect of side insulation, remove the lid from both beakers (or compare Beaker P with a plain beaker that has neither lid nor insulation).`,
    equations: `\\text{Rate}_P = \\frac{18.0}{240} = 0.075^\\circ\\text{C/s} > \\text{Rate}_Q = \\frac{11.5}{240} = 0.048^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (c) Calculate Temperature Decreases",
        body: "Beaker P: Δθ_P = 82.0 °C - 64.0 °C = 18.0 °C.\nBeaker Q: Δθ_Q = 82.0 °C - 70.5 °C = 11.5 °C."
      },
      {
        step: 2,
        title: "Part (d) Compare Rates of Temperature Decrease",
        body: "Water cools faster / rate of temperature decrease is greater in beaker P than in beaker Q (or beaker Q cools more slowly / has a lower rate of temperature decrease)."
      },
      {
        step: 3,
        title: "Part (e) Control Variable",
        body: "Initial / starting temperature of the water (or volume/mass of water, 200 cm³ / same room temperature)."
      },
      {
        step: 4,
        title: "Part (f) Apparatus Change for New Comparison",
        body: "Remove the lid from beaker Q / use an identical third beaker with neither insulation nor a lid."
      }
    ],
    finalAnswer: "(c) decrease in P = 18.0 °C, decrease in Q = 11.5 °C;\n(d) Rate of temperature decrease is greater in beaker P than in beaker Q (beaker Q cools more slowly);\n(e) Starting / initial temperature of the water (or volume of water);\n(f) Remove the lid from beaker Q (or test a beaker with no insulation and no lid).",
    reasonablenessCheck: "To isolate side insulation as the sole independent variable, neither beaker can have a lid.",
    commonMistakes: [
      "Stating 'add insulation to beaker Q' in part (f) (which would test two layers of insulation).",
      "Stating temperature decrease without units."
    ],
    takeaway: "Fair comparisons require changing only one variable at a time; testing insulation requires both vessels to have the same lid status.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Drop in P (Lagged, No Lid)", expr: () => "18.0 °C Drop" },
        { label: "Drop in Q (Lid, No Lag)", expr: () => "11.5 °C Drop" },
        { label: "Apparatus Change (f)", expr: () => "Remove lid from Beaker Q" }
      ],
      explanation: "Beaker Q cools more slowly than P; removing the lid from Q enables a direct test of insulation alone."
    }
  },
  {
    globalId: "Q213",
    examId: "Q00803",
    paperRef: "5054/41/O/N/20 Q2",
    pdfPage: 107,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Latent Heat of Fusion Calorimetry Master Suite",
    paperType: "atp",
    marks: 9,
    questionText: `A student carries out an experiment to find a value for the specific latent heat of fusion of ice.
He needs to find the mass of ice melted by the heater in time t.
He uses the apparatus shown in Fig. 2.1: an electric heater is placed in crushed ice inside a glass funnel above a beaker resting on an electronic balance reading 239.4 g. The heater circuit contains an ammeter, voltmeter, and battery.

(a) State what the student must do before switching on the heater. [1]
(b) (i) The heater is switched on and water drips into the beaker. The student switches off the heater after time t.
Suggest why the student waits a further minute after switching off the heater before taking a reading from the balance. [1]
(ii) The scales on the voltmeter and ammeter when the heater is switched on are shown in Fig. 2.2.
State the reading of current I and voltage V. [2]
(iii) Using E = I * V * t, calculate the energy E supplied by the heater when t = 5.0 minutes. [1]
(iv) The mass m of ice melted in 5.0 minutes is 36.2 g.
Using L = E / m, calculate a value for L and give a unit for your answer. [2]

(c) The teacher tells the student that his value is different from the accepted value.
Apart from your answer in (a), suggest two improvements to the experiment. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Analyze the practical determination of the specific latent heat of fusion of ice using an immersion heater in an ice funnel, including reading meters, calculating energy and latent heat, and suggesting procedural improvements.",
    givenInfo: [
      "Apparatus: immersion heater in ice funnel, beaker on electronic balance, ammeter, voltmeter.",
      "Heating time t = 5.0 minutes = 300 s.",
      "Mass of melted ice m = 36.2 g = 0.0362 kg."
    ],
    toFind: "Pre-ignition precaution, equilibration wait reason, meter readings, energy E, specific latent heat L with unit, and two improvements.",
    physicsConcepts: `Specific latent heat of fusion calorimetry:
1. Tare / Baseline: Ice in a room at ~20 °C melts naturally without the heater. The student must wait until water drips at a steady rate and record the baseline dripping rate (or tare the balance).
2. Thermal delay: When switched off, the heater remains hot and continues melting ice for several seconds, and meltwater takes time to trickle through the funnel. Waiting 1 minute ensures all ice melted by the electrical energy reaches the beaker.
3. Electrical energy: $E = I \\cdot V \\cdot t$, with $t$ converted to seconds ($5.0 \\times 60 = 300\\text{ s}$).
4. Specific latent heat: $L = E / m$.
5. Systematic errors: Ambient room heat also melts ice, making measured mass $m$ too high and calculated $L$ too low. Improvements include using a control funnel (without heater) to subtract ambient meltwater and insulating the funnel.`,
    equations: `E = I V t; \\quad L = \\frac{E}{m}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This entry coordinates subparts Q214 through Q218 for the Paper 4 latent heat of fusion investigation on PDF pages 107–108."
      }
    ],
    finalAnswer: "Full analytical calculations and practical improvements are provided in records Q214 to Q218 below.",
    reasonablenessCheck: "Electrical energy of ~8.6 kJ melting 36.2 g yields L ≈ 2.4 × 10⁵ J/kg, within range of the accepted value of 3.3 × 10⁵ J/kg when uncorrected for ambient melting.",
    commonMistakes: [
      "Using minutes instead of seconds in E = VIt.",
      "Leaving the unit off the final answer for L."
    ],
    takeaway: "Calorimetric determination of latent heat using an immersion heater requires converting time to seconds and subtracting ambient melting via a control setup.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { voltageV: 12.0, currentA: 2.4, timeMin: 5.0, massG: 36.2 },
      controls: [
        { id: "timeMin", name: "Heating Time", min: 2.0, max: 10.0, step: 1.0, default: 5.0, unit: "min" }
      ],
      readouts: [
        { label: "Energy Input E", expr: (p) => (p.voltageV * p.currentA * p.timeMin * 60).toFixed(0) + " J" },
        { label: "Melted Mass", expr: () => "36.2 g" },
        { label: "Calculated L", expr: () => "239 J/g (2.39 × 10⁵ J/kg)" }
      ],
      explanation: "Immersion heater supplies electrical energy to melt ice; dividing by melted mass yields specific latent heat."
    }
  },
  {
    globalId: "Q214",
    examId: "Q00804",
    paperRef: "5054/41/O/N/20 Q2(a)",
    pdfPage: 107,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Pre-Heating Baseline Precaution",
    paperType: "atp",
    marks: 1,
    questionText: `State what the student must do before switching on the heater. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify the practical step required before turning on the immersion heater to establish a valid mass baseline.",
    givenInfo: [
      "Funnel contains ice at melting point (0 °C) in a warm room.",
      "Beaker is collecting water on an electronic balance."
    ],
    toFind: "Required action before switching on the heater.",
    physicsConcepts: `Because the funnel is in a room at ~20 °C, heat conducts from the ambient air into the ice, causing it to melt without the heater.
Before switching on the electrical circuit:
The student must wait until water drips from the funnel at a constant rate, and either tare (zero) the balance or record the initial balance reading (or empty the beaker).`,
    equations: `m_{\\text{measured}} = m_{\\text{electrical}} + m_{\\text{ambient}} \\implies \\text{Establish baseline reading first}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Recognize Ambient Heat Gain",
        body: "Ice melts naturally from room heat before the heater is turned on."
      },
      {
        step: 2,
        title: "State Required Action",
        body: "Wait until water drips at a steady rate / empty the beaker / record the initial mass on the balance (or tare / zero the balance)."
      }
    ],
    finalAnswer: "Wait until water is dripping at a constant rate (or record the initial reading on the balance / zero or tare the balance / empty the beaker).",
    reasonablenessCheck: "Failing to account for pre-existing melting would falsely attribute ambient melting to electrical heating.",
    commonMistakes: [
      "Saying 'heat the ice first'.",
      "Saying 'check if the wires are connected'."
    ],
    takeaway: "Before starting an electrical melting experiment, establish a steady baseline drip rate or tare the balance.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Pre-ignition Action", expr: () => "Tare balance / wait for steady drip rate" }
      ],
      explanation: "Taring the balance or recording the initial reading accounts for ambient melting before heating begins."
    }
  },
  {
    globalId: "Q215",
    examId: "Q00805",
    paperRef: "5054/41/O/N/20 Q2(b)(i)",
    pdfPage: 107,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Post-Heating Equilibration Delay",
    paperType: "atp",
    marks: 1,
    questionText: `The heater is switched on and water drips into the beaker. The student switches off the heater after time t.
Suggest why the student waits a further minute after switching off the heater before taking a reading from the balance. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why the student waits 1 minute after switching off the heater before recording the final mass.",
    givenInfo: [
      "Immersion heater switched off after time t.",
      "Final balance reading taken 1 minute later."
    ],
    toFind: "Physical justification for the 1-minute delay.",
    physicsConcepts: `Thermal capacity of the heater element and drainage lag:
1. The heater remains above 0 °C after being switched off and continues to transfer its residual heat to the ice.
2. Meltwater takes time to trickle through the crushed ice pack and drip down the funnel stem into the beaker.
Waiting 1 minute allows residual heat to melt remaining ice and lets all meltwater drain into the beaker.`,
    equations: `t_{\\text{drainage}} + t_{\\text{residual}} \\approx 60 \\text{ s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Residual Heat",
        body: "The heater is still hot after being switched off and continues to melt ice."
      },
      {
        step: 2,
        title: "Identify Liquid Drainage",
        body: "Water that has melted takes time to run down through the ice and drip out of the funnel into the beaker."
      }
    ],
    finalAnswer: "To allow all the ice melted by the heater to drip into the beaker (or because the heater is still hot and continues to melt ice).",
    reasonablenessCheck: "Measuring immediately would miss the water melted by the heater's residual heat.",
    commonMistakes: [
      "Saying 'to let the water cool down'.",
      "Saying 'to let the balance settle' without mentioning melting water drainage."
    ],
    takeaway: "Waiting after switching off allows residual heater energy to finish melting ice and all meltwater to drain into the beaker.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Post-heat Status", expr: () => "Meltwater finishes draining" },
        { label: "Heater Element", expr: () => "Cools to 0 °C" }
      ],
      explanation: "Waiting allows residual heat to finish melting ice and all meltwater to reach the balance."
    }
  },
  {
    globalId: "Q216",
    examId: "Q00806",
    paperRef: "5054/41/O/N/20 Q2(b)(ii)",
    pdfPage: 107,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Voltmeter and Ammeter Analogue Scale Reading",
    paperType: "atp",
    marks: 2,
    questionText: `The scales on the voltmeter and ammeter when the heater is switched on are shown in Fig. 2.2:
- The ammeter scale is graduated 0 to 5 A, with 10 small divisions between 2 and 3 A; pointer is at 4 small divisions past 2 A.
- The voltmeter scale is graduated 0 to 15 V, with 10 small divisions between 10 and 15 V; pointer is at 4 small divisions past 10 V.

State the reading of current I and voltage V when the heater is switched on.
I = .................... A
V = .................... V [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read analogue pointer positions for current I and voltage V from Fig. 2.2.",
    givenInfo: [
      "Ammeter: range 0 to 5 A; 10 divisions per 1 A -> 0.1 A per division; pointer at 2.4 A.",
      "Voltmeter: range 0 to 15 V; 10 divisions per 5 V -> 0.5 V per division; pointer at 4 divisions past 10 V -> 12.0 V."
    ],
    toFind: "Current I in A and voltage V in V.",
    physicsConcepts: `Analogue meter scale interpretation:
1. Ammeter: Major marks at 2 and 3 A. Subdivisions: $(3 - 2) / 10 = 0.1\\text{ A}$. Pointer at 4 marks past 2:
$$I = 2.0 + (4 \\times 0.1) = 2.4\\text{ A}$$
2. Voltmeter: Major marks at 10 and 15 V. Subdivisions: $(15 - 10) / 10 = 0.5\\text{ V}$. Pointer at 4 marks past 10:
$$V = 10.0 + (4 \\times 0.5) = 12.0\\text{ V}$$`,
    equations: `I = 2.0 + (4 \\times 0.1) = 2.4 \\text{ A}; \\quad V = 10.0 + (4 \\times 0.5) = 12.0 \\text{ V}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Determine Ammeter Resolution",
        body: "Between 2 A and 3 A there are 10 intervals -> each interval is 0.1 A. The pointer is 4 divisions past 2 -> I = 2.4 A."
      },
      {
        step: 2,
        title: "Determine Voltmeter Resolution",
        body: "Between 10 V and 15 V there are 10 intervals -> each interval is 0.5 V. The pointer is 4 divisions past 10 -> V = 10.0 + (4 * 0.5) = 12.0 V."
      }
    ],
    finalAnswer: "I = 2.4 A; V = 12.0 V (or 12 V)",
    reasonablenessCheck: "A 12 V power supply drawing 2.4 A produces P = 28.8 W, a standard rating for school immersion heaters.",
    commonMistakes: [
      "Misinterpreting voltmeter division value as 0.1 V or 1.0 V (reading 10.4 V or 14 V).",
      "Misreading ammeter as 2.8 A."
    ],
    takeaway: "Always calculate the value of one scale subdivision: (Mark_2 - Mark_1) / number of divisions.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { voltageV: 12.0, currentA: 2.4 },
      controls: [],
      readouts: [
        { label: "Ammeter Reading", expr: () => "2.4 A" },
        { label: "Voltmeter Reading", expr: () => "12.0 V" },
        { label: "Heater Power P = VI", expr: () => "28.8 W" }
      ],
      explanation: "Analogue scales show current of 2.4 A and voltage of 12.0 V."
    }
  },
  {
    globalId: "Q217",
    examId: "Q00808",
    paperRef: "5054/41/O/N/20 Q2(b)(iii)",
    pdfPage: 107,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Electrical Energy Calculation",
    paperType: "atp",
    marks: 1,
    questionText: `Using the equation:
E = I * V * t
calculate the energy E that has been supplied by the heater when t = 5.0 minutes.
E = .................... J [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate electrical energy supplied by the heater in Joules for t = 5.0 minutes using E = IVt.",
    givenInfo: [
      "I = 2.4 A (from Q216)",
      "V = 12.0 V (from Q216)",
      "Time t = 5.0 minutes",
      "Formula: E = I * V * t"
    ],
    toFind: "Electrical energy E in Joules.",
    physicsConcepts: `Electrical energy calculation:
$$E = I \\cdot V \\cdot t$$
Time must be converted from minutes to seconds:
$$t = 5.0\\text{ min} \\times 60\\text{ s/min} = 300\\text{ s}$$`,
    equations: `t = 5.0 \\times 60 = 300 \\text{ s}; \\quad E = 2.4 \\times 12.0 \\times 300 = 8640 \\text{ J}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Time to Seconds",
        body: "t = 5.0 min * 60 s/min = 300 s."
      },
      {
        step: 2,
        title: "Substitute into Formula",
        body: "E = 2.4 A * 12.0 V * 300 s = 28.8 W * 300 s = 8640 J."
      },
      {
        step: 3,
        title: "State with Significant Figures",
        body: "E = 8640 J ≈ 8600 J (or 8.6 × 10³ J / 8.64 kJ)."
      }
    ],
    finalAnswer: "8600 J (or 8640 J / 8.6 × 10³ J)",
    reasonablenessCheck: "28.8 W running for 300 s yields ~8.6 kJ, sufficient to melt ~25–35 g of ice.",
    commonMistakes: [
      "Using time as 5.0 without converting to seconds (E = 2.4 * 12 * 5 = 144 J).",
      "Omitting unit."
    ],
    takeaway: "E = IVt. Always convert time in minutes to seconds before multiplying.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { timeSec: 300, powerW: 28.8 },
      controls: [],
      readouts: [
        { label: "Time in Seconds", expr: () => "300 s (5.0 min)" },
        { label: "Energy Supplied E", expr: () => "8640 J" }
      ],
      explanation: "2.4 A at 12.0 V for 300 s delivers 8640 J of electrical energy."
    }
  },
  {
    globalId: "Q218",
    examId: "Q00809",
    paperRef: "5054/41/O/N/20 Q2(b)(iv)-(c)",
    pdfPage: 108,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Specific Latent Heat Evaluation & Improvements",
    paperType: "atp",
    marks: 4,
    questionText: `(iv) The mass m of ice melted in 5.0 minutes is 36.2 g.
The specific latent heat of fusion L of ice is given by:
L = E / m
Calculate a value for L and give a unit for your answer.
L = .................... unit .................... [2]

(c) The teacher tells the student that his value is different from the accepted value.
Apart from your answer in (a), suggest two improvements to the experiment.
1 ........................................................................................................................
2 ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate specific latent heat of fusion L in J/g (or J/kg) from energy and melted mass, and suggest two practical procedural improvements.",
    givenInfo: [
      "Energy supplied E = 8640 J (from Q217)",
      "Mass of ice melted m = 36.2 g = 0.0362 kg",
      "Formula: L = E / m"
    ],
    toFind: "Specific latent heat L with unit, and two valid improvements.",
    physicsConcepts: `1. Latent heat calculation:
$$L = \\frac{E}{m} = \\frac{8640\\text{ J}}{36.2\\text{ g}} = 238.7\\text{ J/g} = 2.39 \\times 10^5\\text{ J/kg}$$
2. Systematic discrepancy: The accepted value is $3.3 \\times 10^5\\text{ J/kg}$ ($330\\text{ J/g}$). The experimental value is too low because ambient heat from the room also melts ice, making measured mass $m$ too high ($L = E / m$ becomes too small).
3. Improvements:
   - Set up a control funnel with identical ice but no heater; measure mass melted by room air and subtract it: $m_{\\text{corrected}} = m_{\\text{heated}} - m_{\\text{control}}$.
   - Insulate / lag the funnel to reduce ambient heat gain.
   - Use crushed ice to ensure good thermal contact with the heater.
   - Use a lid on the funnel.`,
    equations: `L = \\frac{E}{m} = \\frac{8640}{36.2} = 239 \\text{ J/g}; \\quad m_{\\text{net}} = m_{\\text{heated}} - m_{\\text{control}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (iv) Calculate Latent Heat",
        body: "L = 8640 J / 36.2 g = 238.67 J/g ≈ 240 J/g (or 239 J/g).\nAlternatively, using kilograms: L = 8640 J / 0.0362 kg = 2.39 × 10⁵ J/kg ≈ 2.4 × 10⁵ J/kg."
      },
      {
        step: 2,
        title: "Part (iv) State Unit",
        body: "Unit: J/g (if m = 36.2 g) or J/kg (if m = 0.0362 kg)."
      },
      {
        step: 3,
        title: "Part (c) Suggest Two Improvements",
        body: "1. Set up a control funnel (without heater) to measure and subtract mass of ice melted by room temperature;\n2. Insulate / lag the funnel / place a lid on the funnel to reduce heat absorbed from the room."
      }
    ],
    finalAnswer: "(iv) L = 240 J/g (or 2.4 × 10⁵ J/kg), unit: J/g (or J/kg);\n(c) 1. Use a control funnel without a heater to find the mass of ice melted by ambient heat (and subtract it);\n2. Insulate / lag the funnel (or put a lid on the funnel).",
    reasonablenessCheck: "Ambient heat melting ice increases the denominator, lowering the experimental value below 330 J/g. A control funnel directly corrects this systematic error.",
    commonMistakes: [
      "Omitting the unit or writing J/s.",
      "Suggesting repeating the experiment without explaining a procedural change."
    ],
    takeaway: "In ice-melting calorimetry, ambient heat makes the measured mass too high and L too low; use a control funnel without a heater to correct for ambient melting.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { massG: 36.2, energyJ: 8640 },
      controls: [],
      readouts: [
        { label: "Experimental L", expr: () => "239 J/g (2.39 × 10⁵ J/kg)" },
        { label: "Accepted L", expr: () => "330 J/g (3.3 × 10⁵ J/kg)" },
        { label: "Improvement", expr: () => "Use control funnel to subtract ambient melt" }
      ],
      explanation: "Ambient room heat accounts for the discrepancy; subtracting control meltwater aligns the result with the accepted 330 J/g."
    }
  },
  {
    globalId: "Q219",
    examId: "Q00199",
    paperRef: "5054/42/O/N/20 Q4",
    pdfPage: 109,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Beaker Cooling with and without Lid Master Suite",
    paperType: "atp",
    marks: 4,
    questionText: `A student investigates the effect of using a lid on the speed of cooling of hot water in a beaker.
- She pours 200 cm³ of hot water into a beaker.
- She places a thermometer into the water (Fig. 4.1).
- She waits for a short time.
- She records the temperature of the water and at the same time starts a stopwatch (t = 0).
Fig. 4.2 shows the thermometer at time t = 0: reading is 83 °C.

(a) (i) Record the temperature θ shown by the thermometer at time t = 0. [1]
(ii) State why the student waits for a short time before reading the thermometer at time t = 0. [1]

(b) The student lets the water cool for 5.0 minutes and records the temperature.
She repeats the procedure with 200 cm³ of hot water in an identical beaker covered with a lid (Fig. 4.3).
Table 4.1 shows:
Without lid: 0 min = 83 °C, 5.0 min = 64 °C (drop = 19 °C).
With lid: 0 min = 83 °C, 5.0 min = 74 °C (drop = 9 °C).
Explain how the results in Table 4.1 show that the water cools more quickly without a lid. [1]

(c) Name one quantity that the student must keep the same to make a fair comparison between the speeds of cooling of the two beakers. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read initial thermometer scale, explain pre-reading equilibration delay, deduce cooling comparison from data, and identify a control variable.",
    givenInfo: [
      "Volume of water = 200 cm³.",
      "Fig. 4.2 thermometer reading between 80 °C and 90 °C.",
      "Table 4.1: Without lid cools by 19 °C in 5 min; With lid cools by 9 °C in 5 min."
    ],
    toFind: "Initial temperature, equilibration justification, deduction from table, and one controlled variable.",
    physicsConcepts: `1. Scale reading: Mercury thread reaches 3 divisions past 80 °C -> 83 °C.
2. Thermal delay: Waiting allows the glass bulb to reach thermal equilibrium with the hot water.
3. Comparative cooling deduction: The beaker without a lid has a larger temperature drop (19 °C vs 9 °C) over the same 5.0-minute time interval, showing that it cools more quickly.
4. Control variables: Volume/mass of water (200 cm³), initial starting temperature (83 °C), or room temperature.`,
    equations: `\\Delta \\theta_{\\text{no lid}} = 83 - 64 = 19^\\circ\\text{C} > \\Delta \\theta_{\\text{lid}} = 83 - 74 = 9^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This entry coordinates subparts Q220 through Q222 for the Paper 4 cooling-with-lid experiment on PDF pages 109–110."
      }
    ],
    finalAnswer: "Full analytical readings and answers detailed in record Q220 below.",
    reasonablenessCheck: "A beaker without a lid loses 19 °C vs 9 °C with a lid, confirming the role of a lid in suppressing evaporative cooling.",
    commonMistakes: [
      "Misreading the thermometer as 82 °C or 85 °C.",
      "Saying 'heat' instead of 'temperature decrease' in the explanation."
    ],
    takeaway: "A lid halves the temperature drop over 5 minutes by stopping evaporative heat loss.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { theta0: 83, dropNoLid: 19, dropLid: 9 },
      controls: [],
      readouts: [
        { label: "Without Lid Drop", expr: () => "19 °C in 5 min (Faster)" },
        { label: "With Lid Drop", expr: () => "9 °C in 5 min (Slower)" }
      ],
      explanation: "Table 4.1 shows hot water cooling at double the rate when uncovered."
    }
  },
  {
    globalId: "Q220",
    examId: "Q00200",
    paperRef: "5054/42/O/N/20 Q4(a)",
    pdfPage: 109,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Initial Thermometer Reading and Equilibration Delay",
    paperType: "atp",
    marks: 2,
    questionText: `Fig. 4.2 shows the thermometer at time t = 0: the scale between 80 °C and 90 °C has 10 divisions, and the mercury level is at 3 divisions above 80 °C.
(i) Record the temperature θ shown by the thermometer at time t = 0.
θ = .................... °C [1]

(ii) State why the student waits for a short time before reading the thermometer at time t = 0. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read the temperature from the scale in Fig. 4.2 and state why an initial wait time is necessary before taking the t = 0 reading.",
    givenInfo: [
      "Thermometer scale in Fig. 4.2 has major marks at 80 °C and 90 °C.",
      "10 subdivisions per 10 °C -> 1.0 °C per division.",
      "Liquid meniscus is at 3 divisions above 80 °C."
    ],
    toFind: "Initial temperature θ and justification for wait time.",
    physicsConcepts: `1. Scale reading:
$$\\theta = 80 + (3 \\times 1.0) = 83.0^\\circ\\text{C}$$
2. Thermal response time: The glass bulb and thermometric liquid take 15–30 seconds to absorb heat from the surrounding hot water and reach thermal equilibrium. Reading immediately would record a lower intermediate temperature before the mercury thread reaches its peak.`,
    equations: `\\theta = 80 + 3 = 83^\\circ\\text{C}; \\quad \\text{Wait time} \\implies \\text{Liquid thread reaches maximum}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Read Thermometer Scale (Part i)",
        body: "The scale has 1 °C per small division. The liquid column reaches 3 divisions above 80 °C -> θ = 83 °C (or 83.0 °C)."
      },
      {
        step: 2,
        title: "State Reason for Waiting (Part ii)",
        body: "To allow the thermometer to reach the temperature of the water / reach thermal equilibrium (or to allow the reading to stop rising / reach maximum)."
      }
    ],
    finalAnswer: "(i) θ = 83 °C (or 83.0 °C);\n(ii) To allow the thermometer to reach the temperature of the hot water / reach thermal equilibrium (or to allow the reading to reach its maximum).",
    reasonablenessCheck: "83 °C is typical for hot water freshly poured into a laboratory beaker; waiting allows the reading to stabilize.",
    commonMistakes: [
      "Reading 82 °C or 84 °C by miscounting divisions.",
      "Saying 'to let the water cool down' for the wait time."
    ],
    takeaway: "Read divisions carefully: 80 + 3 = 83 °C; allow the thermometer to reach thermal equilibrium before timing.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 83.0 },
      controls: [],
      readouts: [
        { label: "Reading at t = 0", expr: () => "83 °C" },
        { label: "Equilibration Status", expr: () => "Reached Maximum Reading" }
      ],
      explanation: "Scale shows 83 °C after waiting for the thermometer bulb to equilibrate with the hot water."
    }
  }
];