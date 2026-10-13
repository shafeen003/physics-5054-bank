/**
 * Master Question Store: Batch 20 (Q281 to Q295)
 * Section 2.2: Completes Paper 4 ATP (77/77) — Section 2.2 Complete (236/236)
 * Section 2.3: Transfer of Thermal Energy (MCQs Launched: Q290 to Q295)
 */

const QUESTIONS_BATCH_20 = [
  {
    globalId: "Q281",
    examId: "Q01249",
    paperRef: "5054/41/M/J/26 Q3",
    pdfPage: 142,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Beaker Heat Loss Investigation Master Suite",
    paperType: "atp",
    marks: 8,
    questionText: `A student investigates the rate of cooling of hot water in an uninsulated glass beaker and a lagged beaker over a 6-minute period.
(a) The student measures 150 cm³ of hot water using a measuring cylinder and pours it into the beaker.
State two precautions taken when reading the measuring cylinder to ensure the volume is measured accurately. [2]
(b) The initial temperature θ_0 is recorded using a thermometer graduated in 1.0 °C intervals.
State why the student waits 30 s after placing the thermometer in the hot water before taking the reading at t = 0. [1]
(c) The water cools from 82.0 °C to 61.0 °C in 360 s in the uninsulated beaker, and from 82.0 °C to 71.5 °C in the lagged beaker.
Calculate the average cooling rate for each beaker in °C/s. [2]
(d) State and explain which beaker has the smaller rate of heat loss. [2]
(e) State one variable that must be controlled to make this comparison fair. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Evaluate experimental procedures for measuring liquid volume, thermometer equilibration, cooling rate calculations, insulation mechanisms, and controlled fair-testing parameters.",
    givenInfo: [
      "Water volume = 150 cm³.",
      "Uninsulated beaker: 82.0 °C down to 61.0 °C in 360 s (Δθ = 21.0 °C).",
      "Lagged beaker: 82.0 °C down to 71.5 °C in 360 s (Δθ = 10.5 °C).",
      "Time t = 360 s (6.0 minutes)."
    ],
    toFind: "Measuring cylinder precautions, equilibration reason, calculated cooling rates, insulation deduction, and control variable.",
    physicsConcepts: `Principles of calorimetric cooling investigations:
1. Meniscus observation: Liquids must be read at the bottom of the concave meniscus with line of sight perpendicular to the scale to eliminate parallax error. The measuring cylinder must rest on a flat, horizontal bench.
2. Thermometer thermal lag: The glass bulb and thermometric liquid require non-zero time (~20–30 s) to absorb thermal energy and establish thermal equilibrium with the hot liquid.
3. Cooling rate:
   $$\\text{Rate} = \\frac{\\Delta \\theta}{t}$$
4. Thermal insulation: Lagging traps stationary air around the glass walls. Because air is a poor conductor of heat and trapped air prevents convective circulation, thermal conduction and convection are reduced.
5. Controlled variables: Initial water temperature, water volume (150 cm³), identical container shape, and ambient room temperature.`,
    equations: `\\text{Rate}_{\\text{plain}} = \\frac{21.0}{360} = 0.0583^\\circ\\text{C/s}; \\quad \\text{Rate}_{\\text{lagged}} = \\frac{10.5}{360} = 0.0292^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Measuring Cylinder Precautions",
        body: "1. Place the measuring cylinder on a flat, horizontal surface.\n2. Read the scale with line of sight at eye level at the bottom of the meniscus to avoid parallax error."
      },
      {
        step: 2,
        title: "Part (b) Thermometer Equilibration Delay",
        body: "To allow the thermometer to absorb heat and reach thermal equilibrium with the hot water (so the liquid thread reaches its maximum reading before timing begins)."
      },
      {
        step: 3,
        title: "Part (c) Calculate Cooling Rates",
        body: "Uninsulated beaker: Rate = (82.0 - 61.0) / 360 = 21.0 / 360 = 0.0583 °C/s ≈ 0.058 °C/s.\nLagged beaker: Rate = (82.0 - 71.5) / 360 = 10.5 / 360 = 0.0292 °C/s ≈ 0.029 °C/s."
      },
      {
        step: 4,
        title: "Part (d) Deduction on Heat Loss",
        body: "The lagged beaker has the smaller rate of heat loss because the insulation traps air, reducing thermal energy transfer by conduction and convection."
      },
      {
        step: 5,
        title: "Part (e) Control Variable",
        body: "Volume / mass of water (150 cm³) / initial starting temperature of water (82.0 °C) / ambient room temperature."
      }
    ],
    finalAnswer: "(a) Place on a level surface; read at eye level at the bottom of the meniscus;\n(b) To allow the thermometer to reach thermal equilibrium with the hot water;\n(c) Uninsulated = 0.058 °C/s, Lagged = 0.029 °C/s;\n(d) The lagged beaker: insulation reduces conduction and convection by trapping air;\n(e) Volume of water (150 cm³) / starting temperature / room temperature.",
    reasonablenessCheck: "The lagged beaker cools at exactly half the rate of the bare beaker (0.029 vs 0.058 °C/s), matching the effect of thermal insulation.",
    commonMistakes: [
      "Stating 'look closely' instead of specifying eye-level viewing at the bottom of the meniscus.",
      "Calculating cooling rate using minutes without stating the unit as °C/min."
    ],
    takeaway: "View measuring cylinders at the bottom of the meniscus on a flat bench; lagging halves cooling rate by trapping air.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { dropPlain: 21.0, dropLagged: 10.5 },
      controls: [],
      readouts: [
        { label: "Uninsulated Rate", expr: () => "0.058 °C/s" },
        { label: "Lagged Rate", expr: () => "0.029 °C/s" }
      ],
      explanation: "Canvas displays the two cooling curves: lagging halves the rate of heat loss over the 360 s run."
    }
  },
  {
    globalId: "Q282",
    examId: "Q01250",
    paperRef: "5054/41/M/J/26 Q3(a)",
    pdfPage: 142,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Measuring Cylinder Handling Precautions",
    paperType: "atp",
    marks: 2,
    questionText: `State two precautions taken when measuring the volume of water using a measuring cylinder to ensure an accurate reading.
1 ........................................................................................................................
2 ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "List two practical laboratory techniques required to measure liquid volume accurately with a graduated cylinder.",
    givenInfo: [
      "Measuring 150 cm³ of water using a transparent measuring cylinder."
    ],
    toFind: "Two independent measurement precautions.",
    physicsConcepts: `Accurate volumetric measurement:
1. Horizontal base: The cylinder must be placed on a level, flat bench so the liquid surface is horizontal rather than tilted.
2. Meniscus position: Water adheres to glass, forming a curved concave meniscus. The measurement must be taken at the lowest point (bottom) of the curved meniscus.
3. Viewing angle: Line of sight must be horizontal and perpendicular to the scale at the level of the meniscus to eliminate parallax error.`,
    equations: `\\text{Viewing angle } = 90^\\circ \\text{ to scale}; \\quad \\text{Read lowest point of concave meniscus}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Base Placement Precaution",
        body: "Place the measuring cylinder on a flat / level, horizontal bench so the liquid surface does not tilt."
      },
      {
        step: 2,
        title: "Identify Visual Meniscus Precaution",
        body: "Read the volume at the bottom of the curved meniscus with line of sight at eye level to avoid parallax error."
      }
    ],
    finalAnswer: "1. Place the measuring cylinder on a flat, level bench;\n2. Read the scale with line of sight at eye level at the bottom of the meniscus to avoid parallax error.",
    reasonablenessCheck: "Holding a cylinder in hand causes tilting; reading the top edge overestimates volume by 1–2 mL.",
    commonMistakes: [
      "Reading from the upper edge of the meniscus.",
      "Holding the cylinder in the air while reading."
    ],
    takeaway: "Always place the cylinder on a level bench and read at eye level at the bottom of the concave meniscus.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Bench Placement", expr: () => "Flat, horizontal surface" },
        { label: "Meniscus Reading", expr: () => "Bottom of concave curve" }
      ],
      explanation: "A level bench and eye-level viewing at the bottom of the meniscus ensure volume measurement accuracy."
    }
  },
  {
    globalId: "Q283",
    examId: "Q01251",
    paperRef: "5054/41/M/J/26 Q3(a)(i)",
    pdfPage: 142,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Parallax Error Elimination in Thermometry",
    paperType: "atp",
    marks: 1,
    questionText: `Explain how the student avoids parallax error when reading the thermometer. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how to align the eye to eliminate parallax error on a liquid-in-glass thermometer scale.",
    givenInfo: [
      "Liquid-in-glass thermometer with scale etched on outer glass tube."
    ],
    toFind: "Description of proper eye alignment.",
    physicsConcepts: `Parallax error occurs when an observer views a scale from an angle. The thickness of the glass wall refracts light, displacing the apparent position of the liquid thread relative to the external graduation marks.
To eliminate parallax error, the line of sight must be perpendicular (at 90°) to the thermometer stem, with the eye positioned level with the top of the liquid column.`,
    equations: `\\theta_{\\text{viewing}} = 90^\\circ \\implies \\text{Line of sight parallel to scale marks}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Geometric Requirement",
        body: "The observer must position their eye at the same vertical height as the liquid meniscus."
      },
      {
        step: 2,
        title: "State Operational Alignment",
        body: "Look perpendicular to the thermometer scale / view with line of sight at eye level with the liquid meniscus."
      }
    ],
    finalAnswer: "Look perpendicular to the thermometer scale / view with line of sight at eye level with the top of the liquid column.",
    reasonablenessCheck: "Viewing from above makes the thread appear higher; viewing from below makes it appear lower. Perpendicular alignment yields the true reading.",
    commonMistakes: [
      "Saying 'look closely' or 'use a magnifier' without mentioning perpendicular or eye-level alignment.",
      "Confusing parallax with zero error."
    ],
    takeaway: "View the scale with line of sight perpendicular to the stem at eye level with the meniscus to eliminate parallax.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Viewing Alignment", expr: () => "Perpendicular (90°) at Eye Level" },
        { label: "Parallax Error", expr: () => "0.0 °C (Eliminated)" }
      ],
      explanation: "Viewing directly perpendicular to the glass stem prevents refraction-induced scale shifts."
    }
  },
  {
    globalId: "Q284",
    examId: "Q01252",
    paperRef: "5054/41/M/J/26 Q3(a)(ii)",
    pdfPage: 142,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Delay Prior to Initial Temperature Reading",
    paperType: "atp",
    marks: 1,
    questionText: `State why the student waits for 30 s after placing the thermometer in the hot water before taking the reading at t = 0. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State the physical reason for waiting 30 seconds before recording the initial temperature of hot water.",
    givenInfo: [
      "Thermometer placed into hot water from room temperature."
    ],
    toFind: "Physical justification for the 30-second delay.",
    physicsConcepts: `Thermal conduction delay through glass:
The glass bulb and internal thermometric liquid start at ambient room temperature (~20 °C). Heat takes time to conduct through the glass into the liquid.
Waiting 30 seconds allows the thermometer to reach thermal equilibrium with the hot liquid, ensuring the liquid thread stops rising and reaches its true maximum before timing starts.`,
    equations: `\\tau = \\frac{m c}{h A} \\implies \\text{Equilibration requires } 20\\text{--}30\\text{ s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Heat Transfer Process",
        body: "Thermal energy conducts from the hot water into the glass bulb and liquid thread."
      },
      {
        step: 2,
        title: "State Equilibration Condition",
        body: "To allow the thermometer to reach the temperature of the water / reach thermal equilibrium (or to allow the liquid column to stop rising / reach its maximum value)."
      }
    ],
    finalAnswer: "To allow the thermometer to reach thermal equilibrium with the hot water / allow the liquid thread to reach its maximum reading.",
    reasonablenessCheck: "Recording immediately would record an artificially low, rising temperature.",
    commonMistakes: [
      "Saying 'to let the water cool down'.",
      "Saying 'to prepare the stopwatch'."
    ],
    takeaway: "Allow thermometers time to reach thermal equilibrium with the test liquid before recording initial readings.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { waitTimeS: 30 },
      controls: [],
      readouts: [
        { label: "Equilibration Status", expr: () => "Thermal Equilibrium Reached" },
        { label: "Liquid Thread", expr: () => "Stabilized at Maximum" }
      ],
      explanation: "Waiting 30 seconds allows heat conduction through the glass bulb to finish, stabilizing the initial reading."
    }
  },
  {
    globalId: "Q285",
    examId: "Q01253",
    paperRef: "5054/41/M/J/26 Q3(a)(iii)",
    pdfPage: 142,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Rate of Cooling Calculation Over 360 s",
    paperType: "atp",
    marks: 2,
    questionText: `The uninsulated beaker cools from 82.0 °C to 61.0 °C in 360 s.
Calculate the average rate of cooling R of the water during the 360 s.
Use the equation:
R = (θ_0 - θ_360) / t
where t = 360 s. State the unit of your answer.
R = .................... unit .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the average cooling rate R in °C/s over 360 s and state its unit.",
    givenInfo: [
      "θ_0 = 82.0 °C",
      "θ_360 = 61.0 °C",
      "Time t = 360 s",
      "Formula: R = (θ_0 - θ_360) / 360"
    ],
    toFind: "Cooling rate R with its unit.",
    physicsConcepts: `Average cooling rate:
$$R = \\frac{\\Delta \\theta}{t} = \\frac{\\theta_0 - \\theta_{360}}{360}$$
Because temperature is in °C and time is in seconds, the unit is °C/s.`,
    equations: `\\Delta \\theta = 82.0 - 61.0 = 21.0^\\circ\\text{C}; \\quad R = \\frac{21.0}{360} = 0.05833 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Temperature Decrease",
        body: "Δθ = 82.0 °C - 61.0 °C = 21.0 °C."
      },
      {
        step: 2,
        title: "Calculate Average Cooling Rate",
        body: "R = 21.0 °C / 360 s = 0.05833 °C/s ≈ 0.058 °C/s."
      },
      {
        step: 3,
        title: "State Unit",
        body: "Unit: °C/s (or °C s⁻¹)."
      }
    ],
    finalAnswer: "0.058 °C/s (or 0.0583 °C/s), unit: °C/s",
    reasonablenessCheck: "A 21 °C drop over 6 minutes represents 3.5 °C/min or ~0.058 °C/s, typical for an open glass beaker.",
    commonMistakes: [
      "Omitting the unit or writing only °C.",
      "Dividing by 6.0 minutes without changing the unit to °C/min."
    ],
    takeaway: "R = Δθ / t in °C/s. Express rate with both numerical value and proper unit.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { drop360: 21.0 },
      controls: [],
      readouts: [
        { label: "Temp Drop Δθ", expr: () => "21.0 °C" },
        { label: "Cooling Rate R", expr: () => "0.058 °C/s" }
      ],
      explanation: "Dividing 21.0 °C by 360 s yields an average cooling rate of 0.058 °C/s."
    }
  },
  {
    globalId: "Q286",
    examId: "Q01255",
    paperRef: "5054/41/M/J/26 Q3(a)(iv)",
    pdfPage: 142,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Insulated Beaker Cooling Rate Calculation",
    paperType: "atp",
    marks: 1,
    questionText: `The lagged beaker cools from 82.0 °C to 71.5 °C in the same time of 360 s.
Calculate the average rate of cooling R_lagged of the water in the lagged beaker.
R_lagged = .................... °C/s [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the average cooling rate in °C/s for the lagged beaker over 360 s.",
    givenInfo: [
      "θ_0 = 82.0 °C",
      "θ_360 = 71.5 °C",
      "Time t = 360 s",
      "Formula: R_lagged = (82.0 - 71.5) / 360"
    ],
    toFind: "Cooling rate R_lagged in °C/s.",
    physicsConcepts: `Average cooling rate:
$$R_{\\text{lagged}} = \\frac{\\Delta \\theta}{t} = \\frac{82.0 - 71.5}{360} = \\frac{10.5}{360} = 0.0292\\text{ }^\\circ\\text{C/s}$$`,
    equations: `\\Delta \\theta = 82.0 - 71.5 = 10.5^\\circ\\text{C}; \\quad R_{\\text{lagged}} = \\frac{10.5}{360} = 0.0292 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Temperature Decrease",
        body: "Δθ = 82.0 °C - 71.5 °C = 10.5 °C."
      },
      {
        step: 2,
        title: "Calculate Cooling Rate",
        body: "R_lagged = 10.5 °C / 360 s = 0.02917 °C/s ≈ 0.029 °C/s."
      }
    ],
    finalAnswer: "0.029 °C/s (or 0.0292 °C/s)",
    reasonablenessCheck: "The lagged rate (0.029 °C/s) is half the uninsulated rate (0.058 °C/s), matching the effect of thermal insulation.",
    commonMistakes: [
      "Arithmetic error on 82.0 - 71.5.",
      "Dividing by 60 instead of 360."
    ],
    takeaway: "R_lagged = 10.5 / 360 = 0.029 °C/s. Insulation cuts the cooling rate in half.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { dropLagged360: 10.5 },
      controls: [],
      readouts: [
        { label: "Lagged Drop", expr: () => "10.5 °C" },
        { label: "Lagged Rate", expr: () => "0.029 °C/s" }
      ],
      explanation: "A 10.5 °C drop over 360 s gives an average cooling rate of 0.029 °C/s."
    }
  },
  {
    globalId: "Q287",
    examId: "Q01256",
    paperRef: "5054/41/M/J/26 Q3(d)",
    pdfPage: 142,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Insulation Mechanism Deduction",
    paperType: "atp",
    marks: 2,
    questionText: `State and explain which beaker has the smaller rate of heat loss. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify which beaker loses heat more slowly and explain the physical insulation mechanism.",
    givenInfo: [
      "Uninsulated beaker rate = 0.058 °C/s (from Q285)",
      "Lagged beaker rate = 0.029 °C/s (from Q286)"
    ],
    toFind: "Choice of beaker and physical explanation of lagging.",
    physicsConcepts: `Thermal insulation mechanics:
The lagged beaker has a lower cooling rate (0.029 °C/s vs 0.058 °C/s) and a smaller temperature decrease over 360 s.
Insulation contains trapped pockets of air. Air is a poor thermal conductor, and trapping it suppresses convection currents around the outer glass surface, reducing conductive and convective heat transfer to the room.`,
    equations: `\\text{Rate}_{\\text{lagged}} < \\text{Rate}_{\\text{uninsulated}} \\implies \\text{Lagging reduces conduction and convection}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Beaker with Smaller Rate",
        body: "The lagged / insulated beaker."
      },
      {
        step: 2,
        title: "Explain Physical Mechanism",
        body: "The lagging / insulation is a poor thermal conductor / traps air, reducing thermal energy loss by conduction and convection to the surroundings."
      }
    ],
    finalAnswer: "The lagged beaker; the insulation is a poor conductor / traps air, which reduces heat loss by conduction and convection.",
    reasonablenessCheck: "Lower rate of temperature decrease corresponds directly to a smaller rate of heat loss.",
    commonMistakes: [
      "Stating the plain beaker cooled slower.",
      "Saying insulation generates heat."
    ],
    takeaway: "Lagging traps air, acting as a thermal barrier that reduces conduction and convection.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Lower Heat Loss", expr: () => "Lagged Beaker" },
        { label: "Mechanism", expr: () => "Trapped air suppresses conduction/convection" }
      ],
      explanation: "Lagging traps air against the glass, reducing conductive and convective heat losses."
    }
  },
  {
    globalId: "Q288",
    examId: "Q01257",
    paperRef: "5054/41/M/J/26 Q3(d)(i)-(ii)",
    pdfPage: 142,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Controlled Variables in Comparative Calorimetry",
    paperType: "atp",
    marks: 1,
    questionText: `State one variable that must be kept constant between the two experiments to make this comparison fair. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Name one physical variable that must be controlled when comparing cooling rates between uninsulated and lagged beakers.",
    givenInfo: [
      "Comparing cooling rates of water in plain vs lagged beakers.",
      "Independent variable: presence of lagging."
    ],
    toFind: "One controlled variable.",
    physicsConcepts: `Fair testing parameters:
To isolate lagging as the sole independent variable, all other parameters influencing heat capacity and heat loss must be kept constant:
- Volume / mass of water (150 cm³).
- Starting / initial temperature of the water (82.0 °C).
- Identical size, shape, and glass thickness of the beakers.
- Ambient room temperature / absence of air draughts.`,
    equations: `\\text{Keep constant: } V_{\\text{water}}, \\theta_{\\text{initial}}, \\theta_{\\text{room}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Controlled Factor",
        body: "Select a parameter affecting thermal capacity or ambient heat transfer."
      },
      {
        step: 2,
        title: "State Approved Variable",
        body: "Volume / mass of water (or initial starting temperature of water / room temperature / same size of beaker)."
      }
    ],
    finalAnswer: "Volume / mass of water (or initial / starting temperature of the water / room temperature / same type and size of beaker).",
    reasonablenessCheck: "Changing water volume changes thermal capacity ($mc$), altering the cooling rate independently of insulation.",
    commonMistakes: [
      "Naming 'time' (time is the observation interval, not a physical property).",
      "Naming 'final temperature' (which is the dependent result)."
    ],
    takeaway: "In comparative cooling investigations, volume of water and initial temperature must remain strictly identical.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Controlled Variable 1", expr: () => "Water Volume (150 cm³)" },
        { label: "Controlled Variable 2", expr: () => "Initial Temperature (82.0 °C)" }
      ],
      explanation: "Keeping water volume and starting temperature constant ensures a fair test of insulation effectiveness."
    }
  },
  {
    globalId: "Q289",
    examId: "Q00725",
    paperRef: "5054/42/M/J/26 Q2",
    pdfPage: 147,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 4 ATP: Thermometer Calibration & Fixed Points Verification",
    paperType: "atp",
    marks: 4,
    questionText: `A student checks the calibration of a mercury-in-glass thermometer at the ice point and at the steam point.
(a) Describe how the student checks the lower fixed point (ice point) of the thermometer. [2]
(b) (i) When the thermometer is placed in steam above boiling water at standard atmospheric pressure, the reading is 99.0 °C.
State the upper fixed point of the thermometer on the Celsius scale. [1]
(ii) Calculate the error in the thermometer reading at the steam point. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe the procedure for verifying the ice point, state the theoretical steam point, and determine calibration error from the reading.",
    givenInfo: [
      "Thermometer tested in pure melting ice and in steam at standard atmospheric pressure.",
      "Reading in steam = 99.0 °C."
    ],
    toFind: "Ice point procedure, theoretical steam point value, and calibration error.",
    physicsConcepts: `Calibration of liquid-in-glass thermometers:
1. Lower fixed point (ice point): Place the bulb into a funnel of pure melting ice. The ice must be melting so ice and water are in equilibrium at 0 °C. Wait until the mercury thread stops moving and read the scale.
2. Upper fixed point (steam point): Defined as the temperature of steam above pure boiling water at standard atmospheric pressure (101.3 kPa), exactly 100.0 °C.
3. Calibration error:
   $$\\text{Error} = \\text{Observed reading} - \\text{True value} = 99.0^\\circ\\text{C} - 100.0^\\circ\\text{C} = -1.0^\\circ\\text{C}$$`,
    equations: `T_{\\text{steam}} = 100.0^\\circ\\text{C}; \\quad \\text{Error} = 99.0 - 100.0 = -1.0^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Ice Point Check Procedure",
        body: "Place the thermometer bulb into pure melting ice (crushed ice in a funnel with water draining). Wait for the mercury thread to stop moving / reach a steady reading, and record the temperature (should read 0 °C)."
      },
      {
        step: 2,
        title: "Part (b)(i) State Upper Fixed Point",
        body: "The upper fixed point on the Celsius scale is 100 °C (or 100.0 °C)."
      },
      {
        step: 3,
        title: "Part (b)(ii) Calculate Calibration Error",
        body: "Error = 99.0 °C - 100.0 °C = -1.0 °C (reads 1.0 °C too low)."
      }
    ],
    finalAnswer: "(a) Place bulb in pure melting ice; wait until the thread is steady and read the temperature (0 °C);\n(b)(i) 100 °C (or 100.0 °C);\n(b)(ii) -1.0 °C (or 1.0 °C too low).",
    reasonablenessCheck: "Pure ice melts at 0 °C; steam at 1 atm is 100 °C. A reading of 99.0 °C is 1.0 °C low.",
    commonMistakes: [
      "Placing the thermometer in cold water rather than melting ice.",
      "Stating the steam point is 99.0 °C instead of 100.0 °C."
    ],
    takeaway: "Ice point = 0 °C (pure melting ice); steam point = 100 °C (pure steam at 1 atm). Difference from reading gives calibration error.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { fixedPoint: "steam", reading: 99.0 },
      controls: [],
      readouts: [
        { label: "Observed Reading", expr: () => "99.0 °C" },
        { label: "True Steam Point", expr: () => "100.0 °C" },
        { label: "Calibration Error", expr: () => "-1.0 °C (Reads 1 °C low)" }
      ],
      explanation: "Thermometer reads 99.0 °C in steam at 1 atm, indicating a calibration error of -1.0 °C."
    }
  },
  {
    globalId: "Q290",
    examId: "Q03133",
    paperRef: "5054/12/O/N/20 Q17",
    pdfPage: 153,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Convection Current Mechanism in Fluids",
    paperType: "mcq",
    marks: 1,
    questionText: `A heater is placed near the floor of a room.
Why does warm air circulate throughout the entire room?

A Warm air is less dense than cool air, so it rises.
B Air molecules expand when heated and become lighter.
C Heat travels through air by conduction from particle to particle.
D Air particles lose mass when they absorb thermal energy.`,
    options: [
      { key: "A", text: "Warm air is less dense than cool air, so it rises." },
      { key: "B", text: "Air molecules expand when heated and become lighter." },
      { key: "C", text: "Heat travels through air by conduction from particle to particle." },
      { key: "D", text: "Air particles lose mass when they absorb thermal energy." }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the correct physical mechanism explaining why air heated near the floor circulates through the room by convection.",
    givenInfo: [
      "Heater placed near floor level.",
      "Thermal energy transfers through room air."
    ],
    toFind: "Correct scientific explanation of convection.",
    physicsConcepts: `Convection in fluids:
1. Air near the heater absorbs thermal energy; particles gain kinetic energy, move faster, and move further apart.
2. The heated air expands, so its volume increases for a constant mass.
3. Because density is mass divided by volume ($\\rho = m / V$), the density of the warm air decreases.
4. Cooler, denser air sinks and displaces the warmer, less dense air, which rises. This circulation forms a convection current.`,
    equations: `\\rho = \\frac{m}{V}; \\quad V \\uparrow \\implies \\rho \\downarrow \\implies \\text{Warm fluid rises buoyantly}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Density and Buoyancy",
        body: "When air is heated, it expands, decreasing its density. The less dense warm air rises, and cooler, denser air sinks to take its place."
      },
      {
        step: 2,
        title: "Evaluate Distractors",
        body: "B is incorrect: molecules do not expand; the spacing between molecules increases. C is incorrect: air is a very poor thermal conductor. D is incorrect: mass is conserved."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option A accurately describes the mechanism: Warm air is less dense than cool air, so it rises."
      }
    ],
    finalAnswer: "A (Warm air is less dense than cool air, so it rises.)",
    reasonablenessCheck: "Hot air balloons float on the same principle: heating air inside decreases its density below ambient air.",
    commonMistakes: [
      "Saying 'heat rises' (heat is energy; warm *fluid* rises).",
      "Stating that molecules themselves expand or become lighter."
    ],
    takeaway: "Convection occurs because heated fluid expands, its density decreases, and it rises above cooler, denser fluid.",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Mechanism", expr: () => "Expands ➔ Density Falls ➔ Rises" },
        { label: "Circulation", expr: () => "Convection Current Active" }
      ],
      explanation: "Heated air expands, becomes less dense, and rises, setting up a circulating convection current."
    }
  },
  {
    globalId: "Q291",
    examId: "Q00329",
    paperRef: "5054/11/M/J/21 Q15",
    pdfPage: 153,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Role of Free Electrons in Metallic Conduction",
    paperType: "mcq",
    marks: 1,
    questionText: `Why do metals conduct thermal energy much more rapidly than non-metallic solids?

A Atoms in metals vibrate much faster than in non-metals.
B Metals contain free (delocalised) electrons that transfer energy rapidly.
C Metals have a higher density than non-metals.
D Interatomic forces are weaker in metals than in non-metals.`,
    options: [
      { key: "A", text: "Atoms in metals vibrate much faster than in non-metals." },
      { key: "B", text: "Metals contain free (delocalised) electrons that transfer energy rapidly." },
      { key: "C", text: "Metals have a higher density than non-metals." },
      { key: "D", text: "Interatomic forces are weaker in metals than in non-metals." }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the microscopic feature that makes metals superior thermal conductors compared to non-metals.",
    givenInfo: [
      "Comparison of thermal conduction: metals vs non-metallic solids."
    ],
    toFind: "Microscopic reason for high thermal conductivity in metals.",
    physicsConcepts: `Thermal conduction mechanisms:
1. In non-metals: Conduction occurs solely via lattice vibrations. Atoms at the hot end vibrate and collide with neighboring atoms, passing energy slowly along the structure.
2. In metals: In addition to lattice vibrations, metals contain a sea of free (delocalised) electrons. These light, mobile electrons absorb thermal kinetic energy at the hot end, drift rapidly through the lattice, and collide with distant metal ions throughout the material, transferring energy much faster.`,
    equations: `k_{\\text{metal}} = k_{\\text{lattice}} + k_{\\text{electrons}} \\gg k_{\\text{lattice}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Metallic Structure",
        body: "Metals have metallic bonding with fixed positive ions surrounded by mobile, delocalised free electrons."
      },
      {
        step: 2,
        title: "Describe Energy Transfer by Electrons",
        body: "Free electrons gain kinetic energy at the hot end, move rapidly through the spaces between ions, and collide with cooler ions further down the metal, transferring energy much faster than lattice vibrations alone."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option B: Metals contain free (delocalised) electrons that transfer energy rapidly."
      }
    ],
    finalAnswer: "B (Metals contain free (delocalised) electrons that transfer energy rapidly.)",
    reasonablenessCheck: "Materials with free electrons (copper, aluminium, silver) are both the best electrical conductors and the best thermal conductors.",
    commonMistakes: [
      "Stating density is the cause of high thermal conduction.",
      "Forgetting to mention free electrons in metallic conduction explanations."
    ],
    takeaway: "Metals conduct thermal energy rapidly because free (delocalised) electrons move quickly through the lattice, transferring kinetic energy.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 80 },
      controls: [],
      readouts: [
        { label: "Primary Conduction Carrier", expr: () => "Free (Delocalised) Electrons" },
        { label: "Secondary Carrier", expr: () => "Lattice Ion Vibrations" }
      ],
      explanation: "Mobile free electrons travel rapidly through the lattice, colliding with ions to transfer thermal energy quickly."
    }
  },
  {
    globalId: "Q292",
    examId: "Q03304",
    paperRef: "5054/12/M/J/21 Q17",
    pdfPage: 153,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Conduction Mechanism in Solid Rods",
    paperType: "mcq",
    marks: 1,
    questionText: `A metal rod is heated at one end.
Which statement describes how thermal energy is conducted along the rod?

A The atoms move along the rod from the hot end to the cold end.
B Convection currents are produced inside the solid metal.
C Vibrating particles pass energy to neighbouring particles, and free electrons move through the rod.
D Infra-red radiation travels through the spaces between the atoms.`,
    options: [
      { key: "A", text: "The atoms move along the rod from the hot end to the cold end." },
      { key: "B", text: "Convection currents are produced inside the solid metal." },
      { key: "C", text: "Vibrating particles pass energy to neighbouring particles, and free electrons move through the rod." },
      { key: "D", text: "Infra-red radiation travels through the spaces between the atoms." }
    ],
    correctOption: "C",
    whatIsAsking: "Identify the correct particle-level description of thermal conduction in a metal rod.",
    givenInfo: [
      "Metal rod heated at one end."
    ],
    toFind: "Accurate physical description of conduction.",
    physicsConcepts: `Thermal conduction in a metal involves two simultaneous processes:
1. Lattice vibration: Ions at the hot end vibrate with greater amplitude and collide with neighboring ions, passing energy along the rod.
2. Free electron diffusion: Delocalised electrons gain kinetic energy, move rapidly through the lattice, and collide with ions throughout the rod.
Atoms do not translate through the rod, and convection cannot occur in solids.`,
    equations: `\\text{Conduction in metal} = \\text{Lattice vibration collision} + \\text{Free electron diffusion}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Evaluate Options A and B",
        body: "A is incorrect: atoms in solids vibrate about fixed positions and do not translate. B is incorrect: convection requires fluid movement and cannot occur in solids."
      },
      {
        step: 2,
        title: "Evaluate Option C",
        body: "Option C correctly describes both mechanisms: vibrating particles pass energy to neighbors, and free electrons move through the lattice."
      }
    ],
    finalAnswer: "C (Vibrating particles pass energy to neighbouring particles, and free electrons move through the rod.)",
    reasonablenessCheck: "Solids maintain a fixed shape because atoms do not translate; conduction transfers energy, not matter.",
    commonMistakes: [
      "Thinking atoms move from the hot end to the cold end.",
      "Saying convection occurs in solids."
    ],
    takeaway: "In metals, thermal conduction occurs via vibrating lattice ions colliding with neighbors and free electrons diffusing through the structure.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 90 },
      controls: [],
      readouts: [
        { label: "Atom Position", expr: () => "Fixed Lattice (No translation)" },
        { label: "Heat Mechanism", expr: () => "Vibrations + Free Electron Drift" }
      ],
      explanation: "Fixed ions vibrate and pass energy to neighbors while free electrons drift rapidly along the rod."
    }
  },
  {
    globalId: "Q293",
    examId: "Q03305",
    paperRef: "5054/12/M/J/21 Q18",
    pdfPage: 154,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Thermal Insulators and Trapped Air",
    paperType: "mcq",
    marks: 1,
    questionText: `Fibreglass, wool, and polystyrene are widely used as thermal insulators in building construction.
Why are these materials such effective thermal insulators?

A They have a very high density which blocks heat.
B They contain many small pockets of trapped air, and air is a poor conductor of thermal energy.
C They absorb all infra-red radiation and convert it to chemical energy.
D They generate thermal energy by internal friction.`,
    options: [
      { key: "A", text: "They have a very high density which blocks heat." },
      { key: "B", text: "They contain many small pockets of trapped air, and air is a poor conductor of thermal energy." },
      { key: "C", text: "They absorb all infra-red radiation and convert it to chemical energy." },
      { key: "D", text: "They generate thermal energy by internal friction." }
    ],
    correctOption: "B",
    whatIsAsking: "Explain why porous insulating materials like fibreglass, wool, and polystyrene are effective thermal insulators.",
    givenInfo: [
      "Materials: Fibreglass, wool, polystyrene.",
      "Application: Building insulation."
    ],
    toFind: "Physical mechanism of their insulating properties.",
    physicsConcepts: `Thermal insulation mechanics in porous materials:
1. Low thermal conductivity of air: Air has very low thermal conductivity ($k \\approx 0.026\\text{ W/(m K)}$) because gas molecules are widely separated, resulting in infrequent molecular collisions.
2. Suppression of convection: In open spaces, air transfers heat readily by convection. Fibres and cellular structures divide the air into small pockets (< 1 mm), preventing convective circulation.
3. As a result, both conduction and convection are suppressed.`,
    equations: `k_{\\text{air}} \\approx 0.026 \\text{ W/(m K)} \\ll k_{\\text{solid}}; \\quad \\text{Trapped pockets eliminate convection}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Material Structure",
        body: "Fibreglass, wool, and expanded polystyrene consist of solid fibers or cell walls enclosing air pockets."
      },
      {
        step: 2,
        title: "Relate to Heat Transfer Mechanisms",
        body: "Air is an exceptionally poor conductor of heat. Trapping the air in small pockets prevents it from circulating, stopping convection currents."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option B correctly states that they contain small pockets of trapped air, and air is a poor conductor."
      }
    ],
    finalAnswer: "B (They contain many small pockets of trapped air, and air is a poor conductor of thermal energy.)",
    reasonablenessCheck: "Double glazing, down jackets, and wool sweaters all rely on trapped air to provide insulation.",
    commonMistakes: [
      "Saying insulators keep things warm by generating heat.",
      "Claiming insulators have high density (they are lightweight and porous)."
    ],
    takeaway: "Trapped air is an effective thermal insulator because air has very low thermal conductivity and trapping it prevents convection.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { insulationType: "trapped_air" },
      controls: [],
      readouts: [
        { label: "Trapped Air k", expr: () => "0.026 W/(m K) (Very Poor Conductor)" },
        { label: "Convection Status", expr: () => "Suppressed by small pockets" }
      ],
      explanation: "Trapped air pockets prevent convection currents, while the low conductivity of air blocks conduction."
    }
  },
  {
    globalId: "Q294",
    examId: "Q03024",
    paperRef: "5054/11/O/N/21 Q13",
    pdfPage: 154,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Thermal Radiation Through a Vacuum",
    paperType: "mcq",
    marks: 1,
    questionText: `Thermal energy travels from the Sun to the Earth across empty space.
By which method of thermal energy transfer does this energy travel?

A conduction only
B convection only
C radiation only
D conduction and radiation`,
    options: [
      { key: "A", text: "conduction only" },
      { key: "B", text: "convection only" },
      { key: "C", text: "radiation only" },
      { key: "D", text: "conduction and radiation" }
    ],
    correctOption: "C",
    whatIsAsking: "Identify the mechanism of thermal energy transfer that can propagate across empty space (a vacuum) between the Sun and the Earth.",
    givenInfo: [
      "Thermal energy originates at the Sun and reaches Earth.",
      "The space between the Sun and Earth is a vacuum (empty space)."
    ],
    toFind: "The transfer method.",
    physicsConcepts: `Thermal energy transfer mechanisms:
1. Conduction requires physical contact between particles (matter).
2. Convection requires the movement of a bulk fluid (liquid or gas).
3. Thermal radiation consists of electromagnetic waves (infrared and visible light) that do not require any material medium and travel through a vacuum at the speed of light ($c = 3.0 \\times 10^8\\text{ m/s}$).
Because space is a vacuum containing no matter, energy from the Sun can only reach Earth by radiation.`,
    equations: `\\text{Vacuum} \\implies \\text{Conduction = 0, Convection = 0} \\implies \\text{Radiation only}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Medium Requirements",
        body: "Conduction and convection both require particles (a material medium) to transfer energy."
      },
      {
        step: 2,
        title: "Apply Vacuum Condition",
        body: "The space between the Sun and the Earth is a vacuum. Only electromagnetic radiation can travel through empty space."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Radiation only (Option C)."
      }
    ],
    finalAnswer: "C (radiation only)",
    reasonablenessCheck: "Solar radiation brings light and warmth through space, demonstrating that radiation does not require a material medium.",
    commonMistakes: [
      "Selecting D, thinking solar particles conduct heat.",
      "Confusing radiation with convection."
    ],
    takeaway: "Thermal radiation travels as electromagnetic waves and is the only heat transfer method that can cross a vacuum.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Vacuum Medium", expr: () => "Empty Space (No particles)" },
        { label: "Active Transfer", expr: () => "Radiation Only (EM Waves)" }
      ],
      explanation: "Thermal radiation consists of infrared waves that travel through a vacuum without needing a material medium."
    }
  },
  {
    globalId: "Q295",
    examId: "Q02545",
    paperRef: "5054/12/O/N/21 Q15",
    pdfPage: 154,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Surface Emission and Absorption of Thermal Radiation",
    paperType: "mcq",
    marks: 1,
    questionText: `Which row correctly describes the properties of a dull black surface compared to a shiny silver surface?

| | emission of radiation | absorption of radiation |
|---|---|---|
| A | better | better |
| B | better | worse |
| C | worse | better |
| D | worse | worse |`,
    options: [
      { key: "A", text: "emission: better | absorption: better" },
      { key: "B", text: "emission: better | absorption: worse" },
      { key: "C", text: "emission: worse | absorption: better" },
      { key: "D", text: "emission: worse | absorption: worse" }
    ],
    correctOption: "A",
    whatIsAsking: "Compare the emission and absorption of thermal radiation by a dull black surface to that of a shiny silver surface.",
    givenInfo: [
      "Surface 1: Dull black surface.",
      "Surface 2: Shiny silver surface."
    ],
    toFind: "Emission and absorption characteristics of dull black compared to shiny silver.",
    physicsConcepts: `Surface emissivity and absorptivity (Kirchhoff's law of thermal radiation):
1. Dull, matte black surfaces are:
   - Best emitters of thermal radiation (high emissivity $\\varepsilon \\approx 0.95$).
   - Best absorbers of thermal radiation (high absorptivity $\\alpha \\approx 0.95$).
   - Poor reflectors of thermal radiation.
2. Shiny, polished silver surfaces are:
   - Worst emitters of thermal radiation (low emissivity $\\varepsilon \\approx 0.05$).
   - Worst absorbers of thermal radiation (low absorptivity $\\alpha \\approx 0.05$).
   - Best reflectors of thermal radiation.
Therefore, dull black is a better emitter and a better absorber than shiny silver.`,
    equations: `\\varepsilon_{\\text{black}} > \\varepsilon_{\\text{silver}}; \\quad \\alpha_{\\text{black}} > \\alpha_{\\text{silver}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Emission",
        body: "A hot dull black object emits infrared radiation much faster than an identical shiny silver object at the same temperature. Black is a better emitter."
      },
      {
        step: 2,
        title: "Analyze Absorption",
        body: "A dull black object absorbs incident infrared radiation readily, whereas a shiny silver object reflects most incident radiation. Black is a better absorber."
      },
      {
        step: 3,
        title: "Match Row",
        body: "Row A: better | better."
      }
    ],
    finalAnswer: "A (emission: better | absorption: better)",
    reasonablenessCheck: "Good absorbers are always good emitters (Kirchhoff's law); shiny surfaces reflect radiation instead of absorbing or emitting it.",
    commonMistakes: [
      "Selecting B, assuming black absorbs heat well but reflects or retains it when hot.",
      "Thinking shiny surfaces emit heat well because they shine."
    ],
    takeaway: "Dull black surfaces are the best emitters and the best absorbers of thermal radiation; shiny silver surfaces are poor emitters and poor absorbers (good reflectors).",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Dull Black Surface", expr: () => "Best Emitter & Best Absorber" },
        { label: "Shiny Silver Surface", expr: () => "Worst Emitter & Best Reflector" }
      ],
      explanation: "Dull black surfaces emit and absorb thermal radiation most effectively, while shiny silver surfaces reflect it."
    }
  }
];