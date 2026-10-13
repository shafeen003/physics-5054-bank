/**
 * Master Question Store: Batch 16 (Q221 to Q235)
 * Section 2.2: Thermal Properties and Temperature (Paper 4 ATP Part 1)
 */

const QUESTIONS_BATCH_16 = [
  {
    globalId: "Q221",
    examId: "Q00201",
    paperRef: "5054/42/O/N/20 Q4(b)",
    pdfPage: 110,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Cooling Curve Table Deduction (Lid vs No Lid)",
    paperType: "atp",
    marks: 1,
    questionText: `The student lets the water cool for 5.0 minutes and records the temperature of the water at the end of this time.
She then pours 200 cm³ of hot water into an identical beaker, covers the beaker with a lid, and repeats the procedure.
The set-up is shown in Fig. 4.3.

Table 4.1:
Time / minutes | without lid temperature / °C | with lid temperature / °C
0              | 83                           | 83
5.0            | 64                           | 74

Explain how the results in Table 4.1 show that the water cools more quickly without a lid. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how the numerical values in Table 4.1 prove that hot water cools faster when the beaker is uncovered.",
    givenInfo: [
      "Without lid: initial = 83 °C, final after 5.0 min = 64 °C (Δθ = 19 °C)",
      "With lid: initial = 83 °C, final after 5.0 min = 74 °C (Δθ = 9 °C)",
      "Identical time interval: 5.0 minutes in both trials"
    ],
    toFind: "Comparative explanation based on the tabulated temperature drops.",
    physicsConcepts: `The average rate of cooling is defined as the temperature decrease divided by elapsed time:
\\text{Rate} = \\frac{\\Delta \\theta}{\\Delta t}
Because the elapsed time Δt is identical (5.0 minutes) in both experiments, a larger temperature drop directly indicates a greater cooling rate:
\\Delta \\theta_{\\text{no lid}} = 19^\\circ\\text{C} > \\Delta \\theta_{\\text{lid}} = 9^\\circ\\text{C}`,
    equations: `\\Delta \\theta_{\\text{no lid}} = 83 - 64 = 19^\\circ\\text{C}; \\quad \\Delta \\theta_{\\text{lid}} = 83 - 74 = 9^\\circ\\text{C}; \\quad 19^\\circ\\text{C} > 9^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Temperature Decreases",
        body: "Without lid: Δθ = 83 °C - 64 °C = 19 °C drop.\nWith lid: Δθ = 83 °C - 74 °C = 9 °C drop."
      },
      {
        step: 2,
        title: "Relate Drops to Time Interval",
        body: "In the same period of 5.0 minutes, the temperature decreases by a greater amount (19 °C compared to 9 °C) without a lid (or final temperature is lower without a lid)."
      }
    ],
    finalAnswer: "The temperature decrease is greater without a lid in the same time (19 °C drop compared to 9 °C drop / final temperature is lower without a lid).",
    reasonablenessCheck: "A 19 °C drop in 5 minutes represents an average rate of 3.8 °C/min, compared to only 1.8 °C/min with a lid.",
    commonMistakes: [
      "Stating 'the temperature is 64 °C' without referencing the temperature decrease or comparing with 74 °C.",
      "Saying heat is lost faster without referencing the table data."
    ],
    takeaway: "For equal time intervals, a larger temperature drop directly proves a faster rate of cooling.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { dropNoLid: 19, dropLid: 9 },
      controls: [],
      readouts: [
        { label: "Without Lid Drop", expr: () => "19 °C in 5 min (Faster)" },
        { label: "With Lid Drop", expr: () => "9 °C in 5 min (Slower)" }
      ],
      explanation: "Comparing identical time frames confirms the uncovered beaker cools at more than twice the rate."
    }
  },
  {
    globalId: "Q222",
    examId: "Q00202",
    paperRef: "5054/42/O/N/20 Q4(c)",
    pdfPage: 110,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Controlled Variables in Comparative Cooling",
    paperType: "atp",
    marks: 1,
    questionText: `Name one quantity that the student must keep the same to make a fair comparison between the speeds of cooling of the two beakers. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify a key physical variable that must be controlled to ensure a fair test between the covered and uncovered beakers.",
    givenInfo: [
      "Comparing cooling speeds of hot water with and without a lid.",
      "Independent variable: presence or absence of a lid."
    ],
    toFind: "One controlled variable.",
    physicsConcepts: `Fair testing principles in thermal cooling:
To isolate the effect of the lid, all other parameters governing heat loss must remain constant:
1. Volume / mass of water (200 cm³): Thermal capacity is proportional to mass.
2. Initial water temperature (83 °C): Cooling rate depends on the temperature difference with room air.
3. Beaker type and material: Must use identical glass beakers to ensure equal surface area and thermal capacity.
4. Ambient room temperature / draughts: External conditions must remain stable.`,
    equations: `\\frac{dQ}{dt} = f(\\text{Mass}, \\theta_{\\text{initial}}, \\theta_{\\text{room}}, \\text{Beaker Area}, \\text{Lid})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Controlled Physical Quantities",
        body: "Select any parameter that influences heat capacity or heat loss rate apart from the lid."
      },
      {
        step: 2,
        title: "State Approved Variable",
        body: "Initial / starting temperature of the water (or volume / mass of water, 200 cm³ / room temperature / same type or size of beaker)."
      }
    ],
    finalAnswer: "Initial / starting temperature of the water (or volume / mass of water / room temperature / same type of beaker).",
    reasonablenessCheck: "Using different starting temperatures or volumes would distort the cooling curves, invalidating the lid comparison.",
    commonMistakes: [
      "Naming 'time' (time is the independent measurement duration, not a physical property of the setup).",
      "Naming 'final temperature' (final temperature is a dependent observation)."
    ],
    takeaway: "In comparative cooling investigations, volume of water and initial temperature must remain strictly identical.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { waterVol: 200, initTemp: 83 },
      controls: [],
      readouts: [
        { label: "Water Volume", expr: () => "200 cm³ (Controlled)" },
        { label: "Starting Temp", expr: () => "83 °C (Controlled)" }
      ],
      explanation: "Keeping water volume and starting temperature identical isolates the lid as the sole independent variable."
    }
  },
  {
    globalId: "Q223",
    examId: "Q00747",
    paperRef: "5054/41/M/J/21 Q3(a)",
    pdfPage: 111,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Thermometer Equilibration Delay at t = 0",
    paperType: "atp",
    marks: 1,
    questionText: `A student investigates the effect of insulation on the rate of cooling of hot water.
- She pours 200 cm³ of hot water into a beaker as shown in Fig. 3.1.
- She waits a short time.
- She then starts a stop-watch and records the temperature of the water. This is at time t = 0.

Suggest why the student waits a short time before recording the temperature at time t = 0. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why the student pauses before taking the initial temperature reading at t = 0.",
    givenInfo: [
      "Thermometer inserted into freshly poured hot water.",
      "Pre-timing pause before starting the stopwatch."
    ],
    toFind: "Physical justification for waiting a short time before t = 0.",
    physicsConcepts: `Thermal response lag in liquid-in-glass thermometers:
The glass bulb and internal thermometric liquid (mercury or alcohol) start at room temperature (~20 °C). Heat must conduct through the glass wall into the liquid before the thread expands.
Waiting 15–30 seconds allows the thermometer to reach thermal equilibrium with the hot water, ensuring the reading reaches its true maximum before timing starts.`,
    equations: `\\text{Thermal response time } \\tau = \\frac{m c}{h A} \\implies \\text{Requires } \\sim 15\\text{--}30\\text{ s to stabilize}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Heat Transfer Delay",
        body: "The glass bulb takes time to absorb thermal energy and warm up from room temperature."
      },
      {
        step: 2,
        title: "State Equilibration Condition",
        body: "To allow the thermometer to reach the temperature of the hot water / reach thermal equilibrium (or to allow the liquid column to stop rising / reach maximum)."
      }
    ],
    finalAnswer: "To allow the thermometer to reach the temperature of the hot water / reach thermal equilibrium (or to allow the reading to stop rising / reach maximum).",
    reasonablenessCheck: "Recording immediately would record an artificially low, rising temperature rather than the actual initial hot water temperature.",
    commonMistakes: [
      "Saying 'to let the water cool down'.",
      "Saying 'to make the experiment fair' without explaining the thermometer's response time."
    ],
    takeaway: "Always allow the thermometer time to reach thermal equilibrium with the hot liquid before starting the timer.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { waitTimeS: 20 },
      controls: [],
      readouts: [
        { label: "Thermometer Bulb", expr: () => "Reaches Thermal Equilibrium" },
        { label: "Scale Reading", expr: () => "Stabilizes at Maximum" }
      ],
      explanation: "Waiting allows heat conduction through the glass bulb to complete, reaching a stable peak reading."
    }
  },
  {
    globalId: "Q224",
    examId: "Q00748",
    paperRef: "5054/41/M/J/21 Q3(b)",
    pdfPage: 111,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Analogue Thermometer Scale Reading",
    paperType: "atp",
    marks: 1,
    questionText: `Fig. 3.2 shows part of the thermometer at time t = 0:
The scale has major marks at 70, 80, and 90 °C.
Between 80 °C and 90 °C there are 10 small divisions.
The mercury meniscus reaches 4 small divisions above 80 °C.

Read the thermometer and record the temperature θ on the answer line and in Table 3.1.
θ = .................... °C [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read the liquid meniscus position from the scale shown in Fig. 3.2.",
    givenInfo: [
      "Major divisions: 70, 80, 90 °C.",
      "10 subdivisions per 10 °C -> each division = 1.0 °C.",
      "Liquid thread reaches 4 divisions past 80 °C."
    ],
    toFind: "Temperature value θ in °C.",
    physicsConcepts: `Analogue scale graduation reading:
1. Scale division interval:
\\text{Value per division} = \\frac{90 - 80}{10} = 1.0^\\circ\\text{C}
2. Liquid thread position:
\\theta = 80 + (4 \\times 1.0) = 84.0^\\circ\\text{C}`,
    equations: `\\theta = 80.0 + (4 \\times 1.0) = 84.0^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Determine Scale Subdivision Resolution",
        body: "The difference between 80 and 90 is 10 °C, split into 10 intervals. Each small mark represents 1.0 °C."
      },
      {
        step: 2,
        title: "Read Meniscus Level",
        body: "The meniscus sits on the fourth division above 80 °C: 80 + 4 = 84 °C (or 84.0 °C)."
      }
    ],
    finalAnswer: "84 °C (or 84.0 °C)",
    reasonablenessCheck: "Four divisions above 80 °C on a 1 °C-per-division stem equals exactly 84 °C.",
    commonMistakes: [
      "Miscounting divisions and writing 83 °C or 85 °C.",
      "Reading from the bottom of the scale."
    ],
    takeaway: "Determine the value of one scale division before reading: 80 + 4 divisions = 84 °C.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 84.0 },
      controls: [],
      readouts: [
        { label: "Base Mark", expr: () => "80 °C" },
        { label: "Subdivisions Added", expr: () => "+4 divisions (4 °C)" },
        { label: "Recorded θ", expr: () => "84 °C" }
      ],
      explanation: "Scale shows 84 °C at 4 divisions above the 80 °C graduation."
    }
  },
  {
    globalId: "Q225",
    examId: "Q00749",
    paperRef: "5054/41/M/J/21 Q3(c)",
    pdfPage: 111,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Rate of Cooling Decay & Average Rate Calculation",
    paperType: "atp",
    marks: 3,
    questionText: `The student records the temperature of the water every minute for 5.0 minutes. Table 3.1 shows her results:
Table 3.1:
t / min | θ / °C
0       | 84
1.0     | 76
2.0     | 70
3.0     | 65
4.0     | 62
5.0     | 61

(i) Using the results from Table 3.1, describe how the rate of cooling of the water changes over the 5.0 minutes. [1]
(ii) Calculate the average rate of cooling over the 5.0 minutes using the equation:
average rate of cooling = (temperature change in 5.0 minutes) / 5.0
average rate of cooling = .................... unit .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe the trend in cooling rate over 5.0 minutes and calculate the average cooling rate in °C/min with proper units.",
    givenInfo: [
      "Table 3.1 data: t = 0 (84 °C), 1.0 (76 °C), 2.0 (70 °C), 3.0 (65 °C), 4.0 (62 °C), 5.0 (61 °C)",
      "Time interval = 5.0 minutes"
    ],
    toFind: "Description of rate trend, calculated average rate, and unit.",
    physicsConcepts: `1. Trend evaluation:
   - Minute 1: drop = 84 - 76 = 8 °C/min.
   - Minute 2: drop = 76 - 70 = 6 °C/min.
   - Minute 3: drop = 70 - 65 = 5 °C/min.
   - Minute 4: drop = 65 - 62 = 3 °C/min.
   - Minute 5: drop = 62 - 61 = 1 °C/min.
   The cooling rate continuously decreases / slows down over time.
2. Average rate calculation:
   $$\\text{Rate} = \\frac{\\Delta \\theta_{\\text{total}}}{\\Delta t} = \\frac{84 - 61}{5.0} = \\frac{23}{5.0} = 4.6^\\circ\\text{C/min}$$`,
    equations: `\\Delta \\theta = 84 - 61 = 23^\\circ\\text{C}; \\quad \\text{Average Rate} = \\frac{23}{5.0} = 4.6^\\circ\\text{C/min}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Describe Cooling Rate Trend",
        body: "The rate of cooling decreases / slows down / becomes less over the 5.0 minutes (the temperature drops by smaller amounts in each successive minute)."
      },
      {
        step: 2,
        title: "Part (ii) Calculate Total Temperature Change",
        body: "Δθ = 84 °C - 61 °C = 23 °C."
      },
      {
        step: 3,
        title: "Part (ii) Calculate Average Rate",
        body: "Average rate of cooling = 23 °C / 5.0 min = 4.6 °C/min."
      },
      {
        step: 4,
        title: "Part (ii) State Unit",
        body: "Unit: °C/min (or °C min⁻¹)."
      }
    ],
    finalAnswer: "(i) Decreases / slows down / becomes less;\n(ii) 4.6, unit: °C/min (or °C min⁻¹).",
    reasonablenessCheck: "23 °C drop over 5 minutes gives 4.6 °C/min, consistent with typical uninsulated beaker cooling.",
    commonMistakes: [
      "Stating 'temperature decreases' instead of 'rate of cooling decreases'.",
      "Omitting the unit or writing only °C."
    ],
    takeaway: "Distinguish between temperature (which decreases) and rate of cooling (which also decreases); rate = Δθ / t.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { totalDrop: 23, totalMin: 5.0 },
      controls: [],
      readouts: [
        { label: "Rate Trend", expr: () => "Decreases each minute" },
        { label: "Average Rate", expr: () => "4.6 °C/min" }
      ],
      explanation: "Successive minute drops (8, 6, 5, 3, 1 °C) confirm that the cooling rate continuously slows down."
    }
  },
  {
    globalId: "Q226",
    examId: "Q00750",
    paperRef: "5054/41/M/J/21 Q3(d)(i)",
    pdfPage: 112,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Cotton Wool Insulation Effect on Cooling Rate",
    paperType: "atp",
    marks: 1,
    questionText: `The student now covers the sides of the beaker with a layer of cotton wool and repeats the procedure, ensuring that the starting temperature is the same as the temperature recorded in (b).
Table 3.2 shows her new results:
t / min | θ / °C
0       | 84
1.0     | 79
2.0     | 76
3.0     | 74
4.0     | 72
5.0     | 71

Use the results in Table 3.1 and Table 3.2 to suggest how the layer of cotton wool has changed the rate of cooling of the water. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Deduce how cotton wool lagging modifies the cooling rate by comparing Table 3.1 (uninsulated) and Table 3.2 (insulated).",
    givenInfo: [
      "Without cotton wool (Table 3.1): cools from 84 °C to 61 °C (Δθ = 23 °C).",
      "With cotton wool (Table 3.2): cools from 84 °C to 71 °C (Δθ = 13 °C).",
      "Same starting temperature (84 °C) and same duration (5.0 min)."
    ],
    toFind: "Effect of cotton wool on cooling rate.",
    physicsConcepts: `Thermal insulation mechanisms:
Cotton wool traps pockets of stagnant air. Air is a poor thermal conductor, and trapped air prevents convective circulation around the glass beaker walls.
This reduces the rate of thermal conduction and convection to the surrounding room, resulting in a smaller temperature decrease over 5 minutes (13 °C vs 23 °C).`,
    equations: `\\Delta \\theta_{\\text{cotton}} = 13^\\circ\\text{C} < \\Delta \\theta_{\\text{plain}} = 23^\\circ\\text{C} \\implies \\text{Rate of cooling decreased}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compare 5.0-Minute Temperature Drops",
        body: "Uninsulated: 84 - 61 = 23 °C drop.\nWith cotton wool: 84 - 71 = 13 °C drop."
      },
      {
        step: 2,
        title: "Deduce Effect on Rate",
        body: "Because the temperature drop is smaller in the same time, the layer of cotton wool has decreased / reduced / slowed down the rate of cooling."
      }
    ],
    finalAnswer: "Decreased / reduced the rate of cooling / water cools more slowly.",
    reasonablenessCheck: "A 13 °C drop represents an average rate of 2.6 °C/min, down from 4.6 °C/min in the plain beaker.",
    commonMistakes: [
      "Stating 'increased the temperature' instead of describing the rate of cooling.",
      "Saying the cotton wool heats the water."
    ],
    takeaway: "Insulating lagging traps air, reducing thermal conduction and slowing the rate of cooling.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Uninsulated Drop", expr: () => "23 °C in 5 min" },
        { label: "Cotton Wool Drop", expr: () => "13 °C in 5 min" },
        { label: "Insulation Effect", expr: () => "Reduces Cooling Rate" }
      ],
      explanation: "Cotton wool slows heat loss through the glass walls, reducing the 5-minute drop from 23 °C to 13 °C."
    }
  },
  {
    globalId: "Q227",
    examId: "Q00751",
    paperRef: "5054/41/M/J/21 Q3(d)(ii)",
    pdfPage: 112,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Modifications to Further Reduce Heat Loss",
    paperType: "atp",
    marks: 1,
    questionText: `The student repeats the experiment again with the same starting temperature.
Suggest how the student changes her apparatus to ensure that the temperature after 5.0 minutes is greater than 71 °C. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Suggest a practical modification to the apparatus to reduce heat loss further so the final water temperature exceeds 71 °C.",
    givenInfo: [
      "Setup currently has one layer of cotton wool on the sides.",
      "Top remains open (no lid).",
      "Base rests directly on the bench.",
      "Final temperature was 71 °C."
    ],
    toFind: "One apparatus improvement to increase final temperature.",
    physicsConcepts: `Heat loss pathways in an open, side-lagged beaker:
1. Top surface: Loses substantial heat via evaporation and upward convection. Adding a lid or cover provides the most significant reduction in heat loss.
2. Side walls: Adding more layers / thicker cotton wool further reduces conduction.
3. Base: Heat conducts through the beaker bottom into the bench. Placing the beaker on an insulating mat / cork stand reduces base conduction.`,
    equations: `\\text{Add lid (stops evaporation)} \\quad \\text{or} \\quad \\text{Increase insulation thickness}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Remaining Heat Loss Pathways",
        body: "The open top allows evaporation and convection; the base conducts heat to the bench; the sides have only a single layer of insulation."
      },
      {
        step: 2,
        title: "Select a Practical Modification",
        body: "Put a lid / cover on the beaker (or use more layers / thicker cotton wool / insulate the bottom / place on an insulating mat)."
      }
    ],
    finalAnswer: "Put a lid / cover on the beaker (or use thicker / more layers of cotton wool / insulate the bottom of the beaker / put on an insulating mat).",
    reasonablenessCheck: "Adding a lid suppresses evaporative cooling, which is typically the largest remaining heat loss pathway.",
    commonMistakes: [
      "Saying 'heat the water more' (the question specifies starting at the same initial temperature).",
      "Saying 'use less water' (smaller volume cools faster due to lower heat capacity).",
      "Saying 'wait less time' (the question specifies measuring at 5.0 minutes)."
    ],
    takeaway: "To reduce heat loss in a side-lagged vessel, add a lid to stop surface evaporation or insulate the base.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { lidAdded: true },
      controls: [],
      readouts: [
        { label: "Apparatus Change", expr: () => "Add lid / thicker insulation" },
        { label: "Expected Final Temp", expr: () => "> 75 °C" }
      ],
      explanation: "Adding a lid suppresses evaporative heat loss, keeping the final temperature well above 71 °C."
    }
  },
  {
    globalId: "Q228",
    examId: "Q00123",
    paperRef: "5054/41/O/N/21 Q2",
    pdfPage: 112,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Copper Specific Heat Capacity Master Suite",
    paperType: "atp",
    marks: 5,
    questionText: `A student carries out an investigation to find the specific heat capacity c of copper.
(a) The student places a small block of copper on a balance to find its mass m as shown in Fig. 2.1 (display reads 29.165 g).
Record the mass m of the block, correct to one decimal place. [1]

(b) The student measures a volume of water in a measuring cylinder, as shown in Fig. 2.2 (meniscus at 46 cm³).
Record the volume V of water shown in Fig. 2.2. [1]

(c) The student pours the water into a beaker, records initial temperature θ_1 = 23 °C, places the copper block in boiling water at 100 °C, lowers it into the water, stirs, and records the final temperature as 27 °C.
The specific heat capacity c of copper is calculated using:
c = [V * 4.2 * (27 - θ_1)] / [m * (100 - 27)]
Calculate c and give the unit. [2]

(d) This method does not give an accurate value for c. Suggest one reason for this. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Carry out the full analytical procedure to determine the specific heat capacity of copper, including scale readings, calculation, unit assignment, and error analysis.",
    givenInfo: [
      "Digital balance reading = 29.165 g",
      "Measuring cylinder reading = 46 cm³",
      "Initial water temperature θ_1 = 23 °C",
      "Boiling water temperature = 100 °C",
      "Final mixture temperature = 27 °C",
      "Working formula: c = [V * 4.2 * (27 - θ_1)] / [m * (100 - 27)]"
    ],
    toFind: "Mass to 1 d.p., water volume, calculated c with unit, and reason for inaccuracy.",
    physicsConcepts: `Method of mixtures calorimetry:
Heat gained by water = V * rho_w * c_w * ΔT_w = V * 1.0 g/cm³ * 4.2 J/(g °C) * (27 - θ_1).
Heat lost by copper block = m * c * ΔT_copper = m * c * (100 - 27).
Equating heat gained and heat lost:
m * c * (100 - 27) = V * 4.2 * (27 - θ_1)
c = \\frac{V \\times 4.2 \\times (27 - \\theta_1)}{m \\times (100 - 27)}`,
    equations: `c = \\frac{V \\times 4.2 \\times (27 - \\theta_1)}{m \\times 73}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This master entry coordinates subparts Q229 through Q232 for the Paper 4 copper calorimetry experiment on PDF pages 112–113."
      }
    ],
    finalAnswer: "Detailed subpart solutions are provided in records Q229 to Q232 below.",
    reasonablenessCheck: "The formula balances heat gained by water with heat lost by copper, using rho_water = 1.0 g/cm³ so mass in grams equals volume in cm³.",
    commonMistakes: [
      "Rounding the balance reading incorrectly.",
      "Omitting the unit J/(g °C) or writing J/(kg °C) without converting mass.",
      "Misreading the inverted measuring cylinder scale."
    ],
    takeaway: "Calorimetry equations require consistent mass units throughout; experimental values typically exceed true values due to transfer heat losses.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massG: 29.2, volWater: 46, theta1: 23, thetaFinal: 27 },
      controls: [
        { id: "volWater", name: "Water Volume V", min: 30, max: 70, step: 2, default: 46, unit: "cm³" },
        { id: "massG", name: "Copper Mass m", min: 20, max: 50, step: 1, default: 29.2, unit: "g" }
      ],
      readouts: [
        { label: "Water Heat Gained", expr: (p) => (p.volWater * 4.2 * 4).toFixed(1) + " J" },
        { label: "Calculated c", expr: (p) => ((p.volWater * 4.2 * 4) / (p.massG * 73)).toFixed(3) + " J/(g °C)" }
      ],
      explanation: "Heat gained by water (772.8 J) divided by (m * 73) gives the specific heat capacity of copper."
    }
  },
  {
    globalId: "Q229",
    examId: "Q00124",
    paperRef: "5054/41/O/N/21 Q2(a)",
    pdfPage: 113,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Digital Balance Precision & Rounding",
    paperType: "atp",
    marks: 1,
    questionText: `The student places a small block of copper on a balance to find its mass m as shown in Fig. 2.1.
The balance display shows: 29.165 g.
Record the mass m of the block, correct to one decimal place.
m = .................... g [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Round the digital balance reading of 29.165 g to one decimal place.",
    givenInfo: [
      "Digital display reading = 29.165 g",
      "Precision requirement: exactly one decimal place"
    ],
    toFind: "Mass m in grams to 1 decimal place.",
    physicsConcepts: `Rounding to one decimal place:
Look at the second decimal digit (the hundredths place).
In 29.165, the first decimal digit is 1, and the second is 6.
Because 6 ≥ 5, round up the first decimal place from 1 to 2.`,
    equations: `29.165 \\xrightarrow{\\text{round to 1 d.p.}} 29.2 \\text{ g}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Digits",
        body: "Value = 29.165 g. First decimal digit is 1; second decimal digit is 6."
      },
      {
        step: 2,
        title: "Apply Rounding Rules",
        body: "Because the digit following 1 is 6 (which is 5 or greater), round up: 29.165 -> 29.2 g."
      }
    ],
    finalAnswer: "29.2 g",
    reasonablenessCheck: "29.165 is closer to 29.2 than to 29.1.",
    commonMistakes: [
      "Truncating without rounding (writing 29.1 g).",
      "Copying all three decimal places (writing 29.165 g).",
      "Rounding to the nearest whole number (writing 29 g)."
    ],
    takeaway: "Follow stated decimal-place precision instructions: 29.165 rounds up to 29.2 g.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massDisplay: 29.165 },
      controls: [],
      readouts: [
        { label: "Raw Display", expr: () => "29.165 g" },
        { label: "Rounded (1 d.p.)", expr: () => "29.2 g" }
      ],
      explanation: "Rounding 29.165 g to one decimal place gives 29.2 g."
    }
  },
  {
    globalId: "Q230",
    examId: "Q00125",
    paperRef: "5054/41/O/N/21 Q2(b)",
    pdfPage: 113,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Measuring Cylinder Meniscus Reading",
    paperType: "atp",
    marks: 1,
    questionText: `The student measures a volume of water in a measuring cylinder, as shown in Fig. 2.2.
The magnified view shows the scale between 40 and 50 cm³, with 10 subdivisions (1 cm³ per subdivision).
The bottom of the curved liquid meniscus aligns with the sixth mark above 40 cm³.

Record the volume V of water shown in Fig. 2.2.
V = .................... cm³ [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read the volume of water from the measuring cylinder in Fig. 2.2 at the bottom of the curved meniscus.",
    givenInfo: [
      "Measuring cylinder graduated in 1 cm³ intervals.",
      "Bottom of meniscus is at 6 divisions above 40 cm³."
    ],
    toFind: "Volume V in cm³.",
    physicsConcepts: `Measuring cylinder reading rules:
1. Liquid water forms a concave meniscus in glass.
2. The true volume must be read at the bottom of the curved meniscus, not at the upper curved edges.
3. Viewing angle must be horizontal at the meniscus level to avoid parallax error.
4. Scale subdivisions: $(50 - 40) / 10 = 1.0\\text{ cm}^3$ per mark.
   $$V = 40 + (6 \\times 1.0) = 46\\text{ cm}^3$$`,
    equations: `V = 40 + 6 = 46 \\text{ cm}^3`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Determine Subdivision Value",
        body: "Between 40 and 50 there are 10 spaces. Each mark represents 1.0 cm³."
      },
      {
        step: 2,
        title: "Locate Bottom of Meniscus",
        body: "The bottom of the curved meniscus rests on the 6th mark above 40: 40 + 6 = 46 cm³ (or 46.0 cm³)."
      }
    ],
    finalAnswer: "46 cm³ (or 46.0 cm³)",
    reasonablenessCheck: "The bottom of the meniscus is above the 45 cm³ midpoint, matching 46 cm³.",
    commonMistakes: [
      "Reading the top edges of the meniscus (reading 47 or 48 cm³).",
      "Reading downwards from 50 and recording 44 cm³."
    ],
    takeaway: "Always read measuring cylinders at the bottom of the concave meniscus.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { volumeCm3: 46 },
      controls: [],
      readouts: [
        { label: "Meniscus Bottom", expr: () => "46 cm³" },
        { label: "Meniscus Top Edge", expr: () => "47.5 cm³ (Do not read)" }
      ],
      explanation: "Reading at the bottom of the concave meniscus gives 46 cm³."
    }
  },
  {
    globalId: "Q231",
    examId: "Q00126",
    paperRef: "5054/41/O/N/21 Q2(c)",
    pdfPage: 113,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Specific Heat Capacity Formula Evaluation",
    paperType: "atp",
    marks: 2,
    questionText: `The specific heat capacity c of copper can be found using the equation:
c = [V * 4.2 * (27 - θ_1)] / [m * (100 - 27)]
Use your results in (a) and (b) and the value of θ_1 = 23 °C to calculate the value of c.
Give the unit of your answer.
c = .................... unit = .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Substitute measured values m = 29.2 g, V = 46 cm³, and θ_1 = 23 °C into the equation to calculate c, and state the correct unit.",
    givenInfo: [
      "Mass of copper m = 29.2 g (from Q229)",
      "Volume of water V = 46 cm³ (from Q230)",
      "Initial water temperature θ_1 = 23 °C",
      "Specific heat capacity formula: c = [V * 4.2 * (27 - θ_1)] / [m * (100 - 27)]"
    ],
    toFind: "Numerical value of c and its unit.",
    physicsConcepts: `Evaluating the formula:
$$\\Delta T_{\\text{water}} = 27 - 23 = 4^\\circ\\text{C}$$
$$\\Delta T_{\\text{copper}} = 100 - 27 = 73^\\circ\\text{C}$$
$$c = \\frac{46 \\times 4.2 \\times 4}{29.2 \\times 73}$$
Because water volume V is in cm³ (equivalent to mass in grams), water specific heat is 4.2 J/(g °C), and copper mass m is in grams, the resulting unit for c is J/(g °C) or J/(g K).`,
    equations: `\\text{Numerator} = 46 \\times 4.2 \\times 4 = 772.8; \\quad \\text{Denominator} = 29.2 \\times 73 = 2131.6; \\quad c = \\frac{772.8}{2131.6} = 0.3625 \\text{ J/(g }^\\circ\\text{C)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Numerator (Heat Gained by Water)",
        body: "Numerator = 46 * 4.2 * (27 - 23) = 46 * 4.2 * 4 = 772.8 J."
      },
      {
        step: 2,
        title: "Compute Denominator",
        body: "Denominator = m * (100 - 27) = 29.2 * 73 = 2131.6 g °C."
      },
      {
        step: 3,
        title: "Calculate c",
        body: "c = 772.8 / 2131.6 = 0.36254 J/(g °C) ≈ 0.36 J/(g °C) (or 0.363 J/(g °C))."
      },
      {
        step: 4,
        title: "State Unit",
        body: "Unit: J/(g °C) (or J/(g K)). (If converted to kg: 360 J/(kg °C))."
      }
    ],
    finalAnswer: "c = 0.36 J/(g °C) (or 0.363 J/(g °C)), unit: J/(g °C) (or J g⁻¹ °C⁻¹ / J/(kg °C) if converted)",
    reasonablenessCheck: "The literature value for pure copper is ~0.385 J/(g °C) (385 J/(kg °C)); 0.36 J/(g °C) is within reasonable range for school apparatus.",
    commonMistakes: [
      "Omitting the unit or writing J/°C (omitting the mass unit).",
      "Using ΔT_copper = 27 °C instead of 73 °C."
    ],
    takeaway: "Check units when substituting: grams in both numerator and denominator yield J/(g °C).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { num: 772.8, den: 2131.6 },
      controls: [],
      readouts: [
        { label: "Numerator", expr: () => "772.8 J" },
        { label: "Denominator", expr: () => "2131.6 g °C" },
        { label: "Calculated c", expr: () => "0.363 J/(g °C)" }
      ],
      explanation: "Evaluating the formula gives c = 0.363 J/(g °C)."
    }
  },
  {
    globalId: "Q232",
    examId: "Q00127",
    paperRef: "5054/41/O/N/21 Q2(d)",
    pdfPage: 113,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Method Inaccuracies in Metal Calorimetry",
    paperType: "atp",
    marks: 1,
    questionText: `This method does not give an accurate value for c.
Suggest one reason for this. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify a source of experimental error that causes the method of mixtures to yield an inaccurate value for specific heat capacity.",
    givenInfo: [
      "Copper block heated in boiling water and transferred through air into cold water in an uninsulated beaker."
    ],
    toFind: "One valid physical reason for inaccuracy.",
    physicsConcepts: `Sources of error in method of mixtures calorimetry:
1. Transfer heat loss: Thermal energy is lost to the air while moving the copper block from the boiling water to the beaker.
2. Incomplete warming: The copper block may not have reached 100 °C throughout before transfer.
3. Beaker thermal capacity: Thermal energy transfers into the glass beaker walls, which is omitted from the formula.
4. Water splash / evaporation: Boiling water carried on the block evaporates, or water splashes out when dropping the block in.
5. Incomplete mixing: Temperature may not be uniform if not stirred thoroughly.`,
    equations: `Q_{\\text{lost by copper}} \\neq Q_{\\text{gained by water}} \\quad (\\text{due to transfer and beaker losses})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Primary Heat Loss Pathway",
        body: "Thermal energy is lost to the air / surroundings during the transfer of the copper block from the boiling water to the beaker."
      },
      {
        step: 2,
        title: "Consider Secondary Errors",
        body: "Thermal energy is absorbed by the glass beaker / copper block does not reach 100 °C / water splashes out during transfer / water carried over on the copper block."
      }
    ],
    finalAnswer: "Thermal energy is lost to the surroundings during transfer of the block (or thermal energy is absorbed by the beaker / block was not at 100 °C / water splashes out on entry / water drops carry over on the block).",
    reasonablenessCheck: "Transferring hot metal through air cools the surface rapidly, which is the main source of error in school calorimetry.",
    commonMistakes: [
      "Vague answers like 'human error' or 'the thermometer was faulty'.",
      "Saying copper is a bad conductor."
    ],
    takeaway: "Transfer heat loss to air and heat absorbed by the beaker are the main systematic errors in method of mixtures calorimetry.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Primary Error", expr: () => "Heat lost to air during transfer" },
        { label: "Secondary Error", expr: () => "Heat absorbed by glass beaker" }
      ],
      explanation: "Transfer heat loss and container absorption cause the experimental specific heat value to deviate from the true value."
    }
  },
  {
    globalId: "Q233",
    examId: "Q02966",
    paperRef: "5054/42/O/N/21 Q1",
    pdfPage: 114,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Ice Melting and Funnel Water Collection Master Suite",
    paperType: "atp",
    marks: 6,
    questionText: `A student investigates the melting of ice in a glass funnel.
Crushed ice at 0 °C is placed in a filter funnel supported by a clamp and stand above a measuring cylinder.
(a) State why crushed ice is used rather than large lumps of ice. [1]
(b) The student records the volume V of water collected in the measuring cylinder every 2.0 minutes for 10 minutes.
Explain why water continues to melt and collect in the cylinder even though no heater is used. [1]
(c) The ambient room temperature is 22 °C. Describe how thermal energy is transferred from the room to the ice in the funnel. [2]
(d) State one precaution to ensure that the volume of water collected is read accurately. [1]
(e) Suggest one way to reduce the rate at which the ice melts. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Analyze the melting of ice in a filter funnel without a heater, explain heat transfer mechanisms, identify accuracy precautions, and suggest ways to reduce melting rate.",
    givenInfo: [
      "Crushed ice in a glass funnel at 0 °C.",
      "Ambient room temperature = 22 °C.",
      "Measuring cylinder collects meltwater."
    ],
    toFind: "Reasons for using crushed ice, ambient melting explanation, heat transfer modes, volume reading precaution, and method to reduce melting.",
    physicsConcepts: `1. Crushed ice: Increases total surface area in contact with the funnel and air, allowing faster and more uniform heat transfer, and fits more compactly without large air voids.
2. Ambient melting: Room temperature (22 °C) is higher than the melting point of ice (0 °C). Thermal energy naturally transfers from the warmer surroundings to the colder ice.
3. Transfer mechanisms: Conduction through the glass funnel and through air, plus convection of warmer room air circulating over the funnel top.
4. Reading volume: Read at the bottom of the meniscus with eye level horizontal to avoid parallax.
5. Reducing melting rate: Insulate the funnel / cover the funnel with a lid.`,
    equations: `\\frac{dQ}{dt} \\propto (\\theta_{\\text{room}} - 0^\\circ\\text{C}); \\quad \\theta_{\\text{room}} = 22^\\circ\\text{C} > 0^\\circ\\text{C} \\implies \\text{Ice absorbs latent heat}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Why Crushed Ice",
        body: "Crushed ice has a larger surface area / packs more closely into the funnel with fewer air gaps, ensuring good thermal contact."
      },
      {
        step: 2,
        title: "Part (b) Why Ice Melts Without Heater",
        body: "The room temperature (22 °C) is higher than the melting point of ice (0 °C), so thermal energy conducts / transfers from the warmer air and surroundings to the ice."
      },
      {
        step: 3,
        title: "Part (c) Heat Transfer Modes",
        body: "Conduction through the glass funnel walls and air in contact with ice, and convection currents in the air circulating above the ice."
      },
      {
        step: 4,
        title: "Part (d) Accurate Volume Reading",
        body: "Read the scale with line of sight perpendicular to the cylinder at the bottom of the meniscus (at eye level to avoid parallax error)."
      },
      {
        step: 5,
        title: "Part (e) Reduce Melting Rate",
        body: "Wrap the funnel in insulation (e.g. cotton wool / foil) / place a lid on the funnel."
      }
    ],
    finalAnswer: "(a) Larger surface area / better thermal contact;\n(b) Room temperature is above 0 °C (heat transfers from surroundings);\n(c) Conduction through glass/air and convection of warm room air;\n(d) Read at eye level at the bottom of the meniscus to avoid parallax error;\n(e) Insulate the funnel / put a lid on the funnel.",
    reasonablenessCheck: "Ice at 0 °C in a 22 °C room absorbs latent heat of fusion continuously until completely melted.",
    commonMistakes: [
      "Saying ice melts because of room pressure.",
      "Reading the top of the meniscus in measuring cylinders."
    ],
    takeaway: "Ice melts in ambient air because room temperature exceeds 0 °C; insulating the funnel reduces the rate of ambient heat gain.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { roomTemp: 22 },
      controls: [
        { id: "roomTemp", name: "Room Temperature", min: 15, max: 35, step: 1, default: 22, unit: "°C" }
      ],
      readouts: [
        { label: "Thermal Gradient", expr: (p) => (p.roomTemp - 0) + " °C Difference" },
        { label: "Melt Rate", expr: (p) => (p.roomTemp * 0.12).toFixed(2) + " cm³/min" }
      ],
      explanation: "Ambient room temperature drives heat transfer into the ice, causing it to melt without an external heater."
    }
  },
  {
    globalId: "Q234",
    examId: "Q00071",
    paperRef: "5054/41/M/J/22 Q1",
    pdfPage: 117,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Cooling Curve Graph Axes and Rate Comparison Master Suite",
    paperType: "atp",
    marks: 6,
    questionText: `A student investigates the cooling of water in two beakers of different surface areas: Beaker A (narrow) and Beaker B (wide).
Both contain 150 cm³ of water initially at 80 °C.
(a) State two precautions taken when measuring temperature during cooling. [2]
(b) Data shows:
Beaker A cools from 80 °C to 65 °C in 300 s (Δθ = 15 °C).
Beaker B cools from 80 °C to 53 °C in 300 s (Δθ = 27 °C).
Calculate the cooling rate for each beaker in °C/s. [2]
(c) State and explain which beaker loses thermal energy at a faster rate. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Evaluate precautions during beaker cooling, calculate cooling rates for beakers of different surface areas, and explain which loses heat faster based on exposed area.",
    givenInfo: [
      "Volume of water = 150 cm³ in both beakers.",
      "Initial temperature = 80 °C.",
      "Beaker A (narrow): drops 15 °C in 300 s.",
      "Beaker B (wide): drops 27 °C in 300 s."
    ],
    toFind: "Two measurement precautions, cooling rates, and comparative surface area explanation.",
    physicsConcepts: `Surface area and cooling rates:
1. Precautions: Stir water before reading so temperature is uniform; view thermometer at eye level to avoid parallax error; keep bulb fully immersed without touching beaker walls.
2. Cooling rate:
   $$\\text{Rate} = \\frac{\\Delta \\theta}{t}$$
3. Surface area effect: Beaker B has a wider diameter, so its exposed surface area is larger. Evaporation and convection are surface phenomena whose rates are proportional to exposed surface area:
   $$\\frac{dQ}{dt} \\propto A_{\\text{surface}}$$
   Therefore, Beaker B loses thermal energy faster and cools more quickly.`,
    equations: `\\text{Rate}_A = \\frac{15}{300} = 0.050^\\circ\\text{C/s}; \\quad \\text{Rate}_B = \\frac{27}{300} = 0.090^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) State Two Precautions",
        body: "1. Stir water before reading so temperature is uniform throughout.\n2. Read thermometer at eye level (perpendicular to stem) to avoid parallax error (or ensure bulb does not touch beaker sides/bottom)."
      },
      {
        step: 2,
        title: "Part (b) Calculate Cooling Rates",
        body: "Beaker A: Rate = 15 °C / 300 s = 0.050 °C/s.\nBeaker B: Rate = 27 °C / 300 s = 0.090 °C/s."
      },
      {
        step: 3,
        title: "Part (c) State and Explain Faster Loss",
        body: "Beaker B loses thermal energy at a faster rate because it has a larger surface area, allowing more evaporation and convection from the surface."
      }
    ],
    finalAnswer: "(a) Stir water before reading; view thermometer at eye level to avoid parallax;\n(b) Beaker A: 0.050 °C/s; Beaker B: 0.090 °C/s;\n(c) Beaker B loses thermal energy faster because it has a larger surface area for evaporation and convection.",
    reasonablenessCheck: "A wider beaker exposes more surface area, nearly doubling the cooling rate (0.090 vs 0.050 °C/s).",
    commonMistakes: [
      "Stating Beaker B cooled slower because 53 °C is lower.",
      "Omitting surface area in the explanation."
    ],
    takeaway: "Cooling rate is directly proportional to exposed surface area: wider beakers lose heat faster through surface evaporation and convection.",
    simulation: {
      type: "evaporation",
      defaultParams: { areaA: 40, areaB: 90 },
      controls: [],
      readouts: [
        { label: "Rate A (Narrow)", expr: () => "0.050 °C/s" },
        { label: "Rate B (Wide)", expr: () => "0.090 °C/s (Faster)" }
      ],
      explanation: "A larger exposed surface area in Beaker B increases the rate of evaporation and heat loss."
    }
  },
  {
    globalId: "Q235",
    examId: "Q03059",
    paperRef: "5054/42/M/J/22 Q2",
    pdfPage: 120,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Thermometer Design, Bore Uniformity & Parallax Master Suite",
    paperType: "atp",
    marks: 6,
    questionText: `A student investigates the properties of a liquid-in-glass thermometer.
(a) The thermometer scale has equal divisions of 1 °C along its length. State what assumption is made about the capillary bore of the thermometer. [1]
(b) State two features of a liquid-in-glass thermometer that make it sensitive. [2]
(c) State one feature of a liquid-in-glass thermometer that gives it a large range. [1]
(d) State why mercury is suitable as a thermometric liquid for measuring high temperatures compared to alcohol. [1]
(e) Explain how the thermometer can be modified to respond more quickly to changes in temperature. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Evaluate geometric and thermometric design factors of liquid-in-glass thermometers, including bore uniformity, sensitivity features, range features, liquid choice, and speed of response.",
    givenInfo: [
      "Liquid-in-glass thermometer with linear 1 °C scale graduations."
    ],
    toFind: "Bore assumption, sensitivity features, range feature, liquid comparison, and response time modification.",
    physicsConcepts: `Thermometer design principles:
1. Scale linearity: Equal degree spacing assumes the capillary bore has a uniform cross-sectional area throughout its length, and the liquid expands uniformly.
2. Sensitivity: Large movement of thread per 1 °C. Requires a large bulb (more liquid to expand) and a narrow capillary bore (small cross-sectional area).
3. Large range: Long capillary tube, wide capillary bore, or a smaller bulb volume.
4. Thermometric liquid: Mercury has a high boiling point (357 °C) compared to alcohol (78 °C), allowing it to measure high temperatures.
5. Speed of response: Thin glass walls on the bulb (faster conduction) and a smaller bulb volume (smaller thermal capacity).`,
    equations: `\\text{Sensitivity} = \\frac{V_0 \\gamma}{A_{\\text{bore}}} = \\frac{4 V_0 \\gamma}{\\pi d^2}; \\quad \\text{Range} = \\frac{L}{\\text{Sensitivity}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Capillary Bore Assumption",
        body: "The capillary bore has a uniform / constant diameter / cross-sectional area along its length."
      },
      {
        step: 2,
        title: "Part (b) Two Sensitivity Features",
        body: "1. A narrow / thin capillary bore (small diameter).\n2. A large bulb (large volume of liquid)."
      },
      {
        step: 3,
        title: "Part (c) Feature for Large Range",
        body: "A long stem / long capillary tube (or a wider bore / smaller bulb)."
      },
      {
        step: 4,
        title: "Part (d) Mercury vs Alcohol for High Temp",
        body: "Mercury has a higher boiling point (357 °C) than alcohol (78 °C), so it does not vaporize at high temperatures."
      },
      {
        step: 5,
        title: "Part (e) Quicker Response Modification",
        body: "Use a bulb with thinner glass (or a smaller bulb with smaller mass of liquid)."
      }
    ],
    finalAnswer: "(a) The capillary bore has a constant / uniform diameter (cross-sectional area);\n(b) Narrow capillary bore (small diameter) and large bulb (large volume of liquid);\n(c) Long stem / long capillary tube (or wider bore);\n(d) Mercury has a much higher boiling point than alcohol;\n(e) Thinner glass on the bulb (or a smaller bulb).",
    reasonablenessCheck: "Sensitivity (large bulb, narrow bore) trades off with range and response time, reflecting core design trade-offs.",
    commonMistakes: [
      "Saying a larger bulb makes the thermometer respond faster (it makes it slower due to larger heat capacity).",
      "Confusing sensitivity with range."
    ],
    takeaway: "Sensitivity requires a large bulb and narrow bore; quick response requires thin glass; high temperature measurement requires a high boiling point liquid.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { bulbSize: "large", boreSize: "narrow" },
      controls: [],
      readouts: [
        { label: "High Sensitivity", expr: () => "Large Bulb + Narrow Bore" },
        { label: "Quick Response", expr: () => "Thin Glass Bulb Wall" },
        { label: "High Temp Liquid", expr: () => "Mercury (Boils at 357 °C)" }
      ],
      explanation: "Thermometer design balances sensitivity (large bulb, narrow bore) against range and response time."
    }
  }
];