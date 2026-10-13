/**
 * Master Question Store: Batch 13 (Q176 to Q190)
 * Section 2.2: Thermal Properties and Temperature (Paper 3 Practical)
 */

const QUESTIONS_BATCH_13 = [
  {
    globalId: "Q176",
    examId: "Q00007",
    paperRef: "5054/32/O/N/22 Q2(c)",
    pdfPage: 83,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Rate of Thermal Energy Loss Calculation",
    paperType: "practical",
    marks: 2,
    questionText: `The mass M of the water in the beaker is 100 g.
The mass m of the beaker is written on the card.
Record m.
m = .................... g
Calculate the rate of thermal energy loss from the water and beaker P using the equation:
P = R(M * c_w + m * c_g)
where the specific heat capacity of water c_w is 4.2 J/(g °C) and the specific heat capacity of glass c_g is 0.67 J/(g °C).
Show your working. Give a unit for your answer.
P = .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record the mass of the glass beaker, and calculate the combined rate of thermal energy loss P in watts from the cooling water and glass beaker using the cooling rate R.",
    givenInfo: [
      "Mass of water M = 100 g",
      "Specific heat capacity of water c_w = 4.2 J/(g °C)",
      "Specific heat capacity of glass c_g = 0.67 J/(g °C)",
      "Rate of temperature change R ≈ 0.048 °C/s (from Q175)",
      "Card mass m of 250 cm³ glass beaker (typically 80 g to 110 g, e.g. 90 g)"
    ],
    toFind: "Mass m in g, and rate of thermal energy loss P with correct SI units.",
    physicsConcepts: `Combined heat capacity of water and container:
C_{\\text{total}} = M c_w + m c_g
Thermal power loss is the total heat capacity multiplied by the rate of temperature decrease:
P = \\frac{dQ}{dt} = C_{\\text{total}} \\frac{dT}{dt} = R (M c_w + m c_g)
Because mass is in grams and specific heat capacities are in J/(g °C), the heat capacity has units of J/°C. Multiplying by R in °C/s yields power in J/s (Watts, W).`,
    equations: `C_{\\text{total}} = (100 \\times 4.2) + (90 \\times 0.67) = 420 + 60.3 = 480.3 \\text{ J/}^\\circ\\text{C}; \\quad P = 0.048 \\times 480.3 = 23.05 \\text{ W}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Mass of Beaker",
        body: "Read the mass written on the supervisor card: typically m = 90 g (acceptable range: 70 g to 120 g)."
      },
      {
        step: 2,
        title: "Calculate Combined Heat Capacity",
        body: "Water heat capacity: M * c_w = 100 g * 4.2 J/(g °C) = 420 J/°C.\nBeaker glass heat capacity: m * c_g = 90 g * 0.67 J/(g °C) = 60.3 J/°C.\nTotal heat capacity = 420 + 60.3 = 480.3 J/°C."
      },
      {
        step: 3,
        title: "Calculate Thermal Power Loss P",
        body: "P = R * (M * c_w + m * c_g) = 0.048 °C/s * 480.3 J/°C = 23.05 W ≈ 23 W (or J/s)."
      }
    ],
    finalAnswer: "m = 90 g; P = 23 W (or 23 J/s, consistent with candidate values of m and R)",
    reasonablenessCheck: "23 W of cooling loss from an uninsulated 100 mL beaker of hot water matches typical bench heat loss via convection, radiation, and surface evaporation.",
    commonMistakes: [
      "Omitting the unit or writing Joules instead of Watts (or J/s).",
      "Using mass of beaker only, forgetting the water term."
    ],
    takeaway: "Total thermal power loss accounts for the thermal capacities of both the liquid and its container: P = R(Mc_w + mc_g).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massWaterG: 100, massGlassG: 90, rateR: 0.048 },
      controls: [
        { id: "massGlassG", name: "Beaker Mass m", min: 70, max: 120, step: 5, default: 90, unit: "g" },
        { id: "rateR", name: "Cooling Rate R", min: 0.02, max: 0.08, step: 0.005, default: 0.048, unit: "°C/s" }
      ],
      readouts: [
        { label: "Water Heat Cap", expr: () => "420 J/°C" },
        { label: "Glass Heat Cap", expr: (p) => (p.massGlassG * 0.67).toFixed(1) + " J/°C" },
        { label: "Total Power Loss P", expr: (p) => (p.rateR * (420 + p.massGlassG * 0.67)).toFixed(1) + " W" }
      ],
      explanation: "Thermal power loss accounts for the heat lost from both the 100 g of water and the glass beaker walls."
    }
  },
  {
    globalId: "Q177",
    examId: "Q00008",
    paperRef: "5054/32/O/N/22 Q2(d)",
    pdfPage: 83,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Beaker Temperature Gradient Limitations",
    paperType: "practical",
    marks: 1,
    questionText: `A student suggests that for any value of R, the correct value of P will be less than that calculated in (c).
Observe the arrangement of the apparatus and state one reason why the student may be correct. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify why the formula P = R(Mc_w + mc_g) overestimates actual heat loss, based on the non-uniform temperature distribution in the beaker.",
    givenInfo: [
      "Formula assumes the entire beaker of mass m cools by 10 °C at rate R.",
      "Water occupies only 100 cm³ of a 250 cm³ beaker."
    ],
    toFind: "One physical reason why actual heat loss is less than calculated.",
    physicsConcepts: `Systematic overestimation in container heat capacity:
1. Liquid volume: 100 cm³ of water fills only about 40% of the 250 cm³ beaker.
2. Temperature gradient: The upper rim and top sides of the beaker are above the water level and do not reach the hot water temperature.
3. Average glass temperature drop: Because the entire mass m of the beaker does not cool by the full 10 °C, the effective thermal capacity of the participating glass is less than m * c_g.`,
    equations: `m_{\\text{effective}} < m_{\\text{total}} \\implies P_{\\text{actual}} < R(M c_w + m c_g)`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Observe Water Level in Beaker",
        body: "100 cm³ of water leaves the upper half of the 250 cm³ beaker empty."
      },
      {
        step: 2,
        title: "Analyze Glass Temperature Distribution",
        body: "Not all of the glass beaker is in contact with hot water / the upper rim and sides above the water line remain cooler and do not cool by the full 10 °C."
      }
    ],
    finalAnswer: "Not all of the beaker is in contact with the hot water / the top of the beaker is cooler and does not decrease in temperature by 10 °C (or the whole beaker does not cool at rate R).",
    reasonablenessCheck: "Only the submerged lower portion of the glass undergoes the full 10 °C temperature drop; assuming the entire beaker cools overestimates the energy released.",
    commonMistakes: [
      "Stating the thermometer was inaccurate.",
      "Saying heat was gained from the room."
    ],
    takeaway: "Assuming an entire container cools uniformly overestimates heat loss when the liquid only partially fills the vessel.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { fillFraction: 0.45 },
      controls: [],
      readouts: [
        { label: "Wetted Glass Fraction", expr: () => "~45% of Beaker" },
        { label: "Effective Glass Capacity", expr: () => "Less than m * c_g" }
      ],
      explanation: "Because only the lower glass is submerged, the dry upper glass remains cooler, reducing actual heat loss below the calculated value."
    }
  },
  {
    globalId: "Q178",
    examId: "Q00570",
    paperRef: "5054/31/M/J/23 Q1",
    pdfPage: 85,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Method of Mixtures Calorimetry Master Suite",
    paperType: "practical",
    marks: 10,
    questionText: `In this experiment you will investigate specific heat capacity.
You are provided with:
- a 100 cm³ beaker labelled A with a mark at the 25 cm³ level
- a beaker of water labelled B
- a thermometer
- access to a 50 g mass at 100 °C tied to string.

(a) Pour 25 cm³ of water from beaker B into beaker A. Measure and record the temperature θ_1 of the water. [1]
(b) (i) Remove one 50 g mass from the boiling water using the string and place it carefully in beaker A.
Measure and record the maximum temperature θ_2 of the water in beaker A. [1]
(ii) Describe how you make sure that your value of θ_2 is as accurate as possible. [2]
(iii) Beaker A has a capacity of 100 cm³ and beaker B has a capacity of 250 cm³. Explain why beaker A is more suitable for this experiment than beaker B. [1]
(iv) Calculate the specific heat capacity c_m of the 50 g mass using the equation:
c_m = [2.1 * (θ_2 - θ_1)] / (100 - θ_2)
Show your working. [1]
(c) (i) Describe two sources of error in the method used to determine c_m. [2]
(ii) Suggest two improvements to the method. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Carry out method of mixtures calorimetry using a boiling metal mass transferred into cold water, evaluate experimental precautions, calculate specific heat capacity, and identify systematic errors with practical improvements.",
    givenInfo: [
      "Mass of metal m_m = 50 g at initial temperature 100 °C",
      "Volume of water V_w = 25 cm³ -> mass m_w = 25 g",
      "Working equation: c_m = [2.1 * (θ_2 - θ_1)] / (100 - θ_2)"
    ],
    toFind: "Initial and final temperatures, accuracy precautions, suitability explanation, calculated c_m, error sources, and procedural improvements.",
    physicsConcepts: `Method of mixtures energy balance:
Heat gained by water = m_w * c_w * (θ_2 - θ_1) = 25 g * 4.2 J/(g °C) * (θ_2 - θ_1) = 105 * (θ_2 - θ_1).
Heat lost by 50 g metal = m_m * c_m * (100 - θ_2) = 50 * c_m * (100 - θ_2).
Equating heat gained and heat lost:
50 * c_m * (100 - θ_2) = 105 * (θ_2 - θ_1)
c_m = \\frac{105}{50} \\frac{\\theta_2 - \\theta_1}{100 - \\theta_2} = \\frac{2.1 (\\theta_2 - \\theta_1)}{100 - \\theta_2} \\text{ J/(g }^\\circ\\text{C)}`,
    equations: `c_m = \\frac{2.1 (\\theta_2 - \\theta_1)}{100 - \\theta_2}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Practical Suite",
        body: "This master entry coordinates subparts Q179 through Q184 for the Paper 3 specific heat capacity investigation on PDF page 85."
      }
    ],
    finalAnswer: "Detailed solutions for subparts (a) to (c) are provided in records Q179 through Q184 below.",
    reasonablenessCheck: "The 2.1 constant equals (25 * 4.2) / 50, verifying the heat balance derivation.",
    commonMistakes: [
      "Splashing water when lowering the 50 g mass.",
      "Failing to stir before recording the peak temperature θ_2."
    ],
    takeaway: "Method of mixtures equates heat gained by cold water to heat lost by hot metal, yielding c_m = 2.1(ΔT_water) / (ΔT_metal).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { theta1: 22.0, theta2: 36.0 },
      controls: [
        { id: "theta1", name: "Initial Water Temp θ1", min: 18.0, max: 26.0, step: 0.5, default: 22.0, unit: "°C" },
        { id: "theta2", name: "Final Max Temp θ2", min: 30.0, max: 45.0, step: 0.5, default: 36.0, unit: "°C" }
      ],
      readouts: [
        { label: "Water Rise", expr: (p) => (p.theta2 - p.theta1).toFixed(1) + " °C" },
        { label: "Metal Drop", expr: (p) => (100 - p.theta2).toFixed(1) + " °C" },
        { label: "Calculated c_m", expr: (p) => ((2.1 * (p.theta2 - p.theta1)) / (100 - p.theta2)).toFixed(3) + " J/(g °C)" }
      ],
      explanation: "Dropping a 50 g mass at 100 °C into 25 cm³ of water warms the mixture to equilibrium temperature θ2."
    }
  },
  {
    globalId: "Q179",
    examId: "Q00571",
    paperRef: "5054/31/M/J/23 Q1(a)",
    pdfPage: 85,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Baseline Water Temperature Measurement",
    paperType: "practical",
    marks: 1,
    questionText: `Pour 25 cm³ of water from beaker B into beaker A.
Measure and record the temperature θ_1 of the water.
Place the thermometer back on the bench.
θ_1 = .................... °C [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Measure and record initial temperature θ_1 of room temperature water in beaker A.",
    givenInfo: [
      "25 cm³ of water at room temperature in beaker A."
    ],
    toFind: "Initial water temperature θ_1 in °C.",
    physicsConcepts: `Read thermometer scale with line of sight perpendicular to the liquid column to avoid parallax error.
Record reading to the nearest 0.5 °C or 1.0 °C with correct units.
Typical laboratory ambient values range between 18.0 °C and 25.0 °C.`,
    equations: `\\theta_1 \\approx T_{\\text{room}} \\in [18.0, 25.0]^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Read Thermometer",
        body: "Immerse thermometer bulb fully in 25 cm³ of water. Wait for thread to settle."
      },
      {
        step: 2,
        title: "Record Typical Lab Reading",
        body: "θ_1 = 21.5 °C (or candidate room temperature within 18.0 °C to 25.0 °C)."
      }
    ],
    finalAnswer: "θ_1 = 21.5 °C (typical laboratory room temperature recorded to 0.5 °C)",
    reasonablenessCheck: "21.5 °C matches ambient laboratory conditions.",
    commonMistakes: [
      "Omitting the unit (°C).",
      "Holding the thermometer by the bulb, warming it with body heat."
    ],
    takeaway: "Immerse the bulb fully, allow the thread to settle, and view perpendicular to the scale to avoid parallax error.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 21.5 },
      controls: [],
      readouts: [
        { label: "Baseline Water Temp θ1", expr: () => "21.5 °C" }
      ],
      explanation: "Thermometer records baseline water temperature before adding the heated mass."
    }
  },
  {
    globalId: "Q180",
    examId: "Q00573",
    paperRef: "5054/31/M/J/23 Q1(b)(i)",
    pdfPage: 85,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Equilibrium Maximum Temperature Recording",
    paperType: "practical",
    marks: 1,
    questionText: `Remove one 50 g mass from the boiling water using the string and place it carefully in beaker A.
Measure and record the maximum temperature θ_2 of the water in beaker A.
θ_2 = .................... °C [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Measure and record the maximum equilibrium temperature θ_2 reached after immersing the 50 g mass at 100 °C into beaker A.",
    givenInfo: [
      "25 cm³ of water initially at θ_1 ≈ 21.5 °C.",
      "50 g mass transferred from boiling water (100 °C)."
    ],
    toFind: "Maximum equilibrium temperature θ_2 in °C.",
    physicsConcepts: `When the hot mass is added, thermal energy conducts from metal to water.
The water temperature rises to a maximum θ_2 before heat loss to the surroundings causes it to slowly decrease.
Candidate must observe the rising mercury thread continuously and record the peak value.
For metal shot (such as brass or steel with c ≈ 0.4–0.5 J/(g °C)), θ_2 typically reaches 34.0 °C to 38.0 °C.`,
    equations: `\\theta_2 > \\theta_1; \\quad \\theta_2 \\in [30.0, 42.0]^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Observe Rising Temperature",
        body: "Stir water gently around the mass. Watch the liquid column rise."
      },
      {
        step: 2,
        title: "Record Peak Temperature",
        body: "Record temperature at the peak before it begins to cool: typically θ_2 = 36.0 °C (acceptable range: 30.0 °C to 42.0 °C)."
      }
    ],
    finalAnswer: "θ_2 = 36.0 °C (typical laboratory maximum within acceptable range 30.0–42.0 °C)",
    reasonablenessCheck: "Adding a 50 g metal mass at 100 °C to 25 g of water at ~21 °C produces a temperature rise of 13–15 °C.",
    commonMistakes: [
      "Recording temperature before it finishes rising.",
      "Waiting too long until the mixture has cooled below the maximum."
    ],
    takeaway: "Monitor the thermometer continuously to capture the peak equilibrium temperature θ_2 before ambient cooling begins.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { theta2: 36.0 },
      controls: [],
      readouts: [
        { label: "Equilibrium Max θ2", expr: () => "36.0 °C" },
        { label: "Temperature Rise", expr: () => "14.5 °C Rise" }
      ],
      explanation: "Water warms to a peak of 36.0 °C before heat losses to the glass and room cause it to cool."
    }
  },
  {
    globalId: "Q181",
    examId: "Q00574",
    paperRef: "5054/31/M/J/23 Q1(b)(ii)",
    pdfPage: 85,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Accuracy Precautions in Calorimetry",
    paperType: "practical",
    marks: 2,
    questionText: `Describe how you make sure that your value of θ_2 is as accurate as possible. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State two experimental precautions taken during calorimetry to ensure the measured maximum temperature θ_2 is accurate.",
    givenInfo: [
      "Hot 50 g mass immersed in 25 cm³ of water in a 100 cm³ glass beaker."
    ],
    toFind: "Two valid accuracy precautions.",
    physicsConcepts: `Calorimetric temperature measurement precautions:
1. Stirring: Stir water continuously so heat from the metal distributes uniformly throughout the water volume.
2. Timing: Watch thermometer rise continuously and record immediately upon reaching maximum.
3. Reading technique: View scale perpendicularly at eye level to avoid parallax error.
4. Position: Ensure bulb is fully submerged in water without touching the hot metal mass or glass walls.`,
    equations: `\\text{Uniform temperature distribution via stirring; Eye-level meniscus reading avoids parallax}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State First Precaution (Stirring)",
        body: "Stir the water gently / thoroughly before reading so the temperature is uniform throughout the beaker."
      },
      {
        step: 2,
        title: "State Second Precaution (Reading / Placement)",
        body: "Read thermometer at eye level to avoid parallax error / ensure thermometer bulb does not touch the metal mass or beaker bottom / record the highest temperature reached."
      }
    ],
    finalAnswer: "1. Stir the water thoroughly so the temperature is uniform throughout;\n2. Read the thermometer with eye level at the meniscus to avoid parallax error (or ensure bulb does not touch the metal mass / record the highest reading reached).",
    reasonablenessCheck: "Unstirred water develops thermal layers; reading off-angle can introduce errors of ±1 °C.",
    commonMistakes: [
      "Saying 'repeat and average' (θ_2 is a single-event peak measurement).",
      "Allowing thermometer bulb to rest directly against the 100 °C metal mass."
    ],
    takeaway: "Stir water for uniform heat distribution and view the meniscus at eye level to avoid parallax error.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Precaution 1", expr: () => "Stir water thoroughly" },
        { label: "Precaution 2", expr: () => "View meniscus at eye level" }
      ],
      explanation: "Stirring prevents localized hot spots; eye-level viewing prevents parallax error."
    }
  },
  {
    globalId: "Q182",
    examId: "Q00575",
    paperRef: "5054/31/M/J/23 Q1(b)(iii)",
    pdfPage: 85,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Beaker Geometry and Submersion Depth",
    paperType: "practical",
    marks: 1,
    questionText: `Beaker A has a capacity of 100 cm³ and beaker B has a capacity of 250 cm³.
Explain why beaker A is more suitable for this experiment than beaker B. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why a smaller 100 cm³ beaker is preferable to a larger 250 cm³ beaker when using 25 cm³ of water.",
    givenInfo: [
      "Water volume is only 25 cm³.",
      "50 g mass must be submerged.",
      "Thermometer bulb must be submerged.",
      "Beaker A: 100 cm³ (narrower); Beaker B: 250 cm³ (wider)."
    ],
    toFind: "Physical justification for choosing the smaller beaker A.",
    physicsConcepts: `Depth vs cross-sectional area:
Depth h = Volume / Area.
A 250 cm³ beaker has a wider diameter, so 25 cm³ of water forms only a shallow layer (< 0.5 cm deep), leaving the 50 g mass and thermometer bulb partially exposed to air.
The narrower 100 cm³ beaker provides greater water depth, ensuring the mass and thermometer bulb are fully submerged. Beaker A also has a smaller mass, reducing heat absorbed by the glass.`,
    equations: `h = \\frac{V}{A} \\implies A_{\\text{beaker A}} < A_{\\text{beaker B}} \\implies h_A > h_B`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Liquid Depth",
        body: "In a larger 250 cm³ beaker, 25 cm³ of water is too shallow."
      },
      {
        step: 2,
        title: "Relate Depth to Apparatus Immersion",
        body: "The narrower 100 cm³ beaker A gives greater water depth so the 50 g mass and the thermometer bulb are completely submerged in the water (or beaker A absorbs less thermal energy due to smaller mass)."
      }
    ],
    finalAnswer: "The water is deeper in beaker A so the 50 g mass / thermometer bulb is completely submerged (or beaker A has a smaller mass and absorbs less heat).",
    reasonablenessCheck: "In a wide 250 cm³ beaker, 25 mL covers only the base, leaving the thermometer bulb exposed to air.",
    commonMistakes: [
      "Saying beaker A holds more water.",
      "Stating beaker B would shatter."
    ],
    takeaway: "Smaller-diameter beakers provide greater depth for small liquid volumes, ensuring complete immersion of thermometer bulbs and test masses.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { depthBeakerA: 28, depthBeakerB: 11 },
      controls: [],
      readouts: [
        { label: "Depth in 100 cm³ Beaker", expr: () => "28 mm (Fully Submerged)" },
        { label: "Depth in 250 cm³ Beaker", expr: () => "11 mm (Partially Exposed)" }
      ],
      explanation: "A narrower beaker gives greater water depth, ensuring the mass and thermometer bulb are fully covered."
    }
  },
  {
    globalId: "Q183",
    examId: "Q00577",
    paperRef: "5054/31/M/J/23 Q1(b)(iv)",
    pdfPage: 85,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Specific Heat Capacity Evaluation",
    paperType: "practical",
    marks: 1,
    questionText: `Calculate the specific heat capacity c_m of the 50 g mass using the equation:
c_m = [2.1 * (θ_2 - θ_1)] / (100 - θ_2)
Show your working.
c_m = .................... J/(g °C) [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Substitute measured temperatures θ_1 and θ_2 into the given equation to calculate c_m in J/(g °C).",
    givenInfo: [
      "θ_1 = 21.5 °C (from Q179)",
      "θ_2 = 36.0 °C (from Q180)",
      "Formula: c_m = [2.1 * (θ_2 - θ_1)] / (100 - θ_2)"
    ],
    toFind: "Specific heat capacity c_m in J/(g °C).",
    physicsConcepts: `Working equation:
c_m = \\frac{2.1 (\\theta_2 - \\theta_1)}{100 - \\theta_2}
Where:
- ΔT_water = θ_2 - θ_1 = 36.0 - 21.5 = 14.5 °C
- ΔT_metal = 100 - θ_2 = 100 - 36.0 = 64.0 °C`,
    equations: `c_m = \\frac{2.1 \\times (36.0 - 21.5)}{100 - 36.0} = \\frac{2.1 \\times 14.5}{64.0} = \\frac{30.45}{64.0} = 0.4758 \\text{ J/(g }^\\circ\\text{C)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Temperature Differences",
        body: "θ_2 - θ_1 = 36.0 °C - 21.5 °C = 14.5 °C.\n100 - θ_2 = 100 °C - 36.0 °C = 64.0 °C."
      },
      {
        step: 2,
        title: "Substitute into Working Equation",
        body: "c_m = (2.1 * 14.5) / 64.0 = 30.45 / 64.0 = 0.4758 J/(g °C)."
      },
      {
        step: 3,
        title: "Round Appropriately",
        body: "c_m ≈ 0.48 J/(g °C) (or 0.476 J/(g °C))."
      }
    ],
    finalAnswer: "c_m = 0.48 J/(g °C) (or 0.476 J/(g °C), consistent with candidate values)",
    reasonablenessCheck: "0.48 J/(g °C) = 480 J/(kg °C), consistent with common metal slotted masses (iron/steel ~460–480 J/(kg °C)).",
    commonMistakes: [
      "Inverting the temperature differences.",
      "Omitting the 2.1 factor."
    ],
    takeaway: "Substitute temperature differences into c_m = 2.1(θ_2 - θ_1) / (100 - θ_2) and express to 2–3 significant figures.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { dTw: 14.5, dTm: 64.0 },
      controls: [],
      readouts: [
        { label: "Numerator 2.1*ΔTw", expr: () => "30.45" },
        { label: "Denominator ΔTm", expr: () => "64.0" },
        { label: "Calculated c_m", expr: () => "0.476 J/(g °C)" }
      ],
      explanation: "Evaluating (2.1 * 14.5) / 64.0 yields c_m = 0.476 J/(g °C)."
    }
  },
  {
    globalId: "Q184",
    examId: "Q00576",
    paperRef: "5054/31/M/J/23 Q1(c)",
    pdfPage: 85,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Sources of Error and Procedural Improvements",
    paperType: "practical",
    marks: 4,
    questionText: `(i) Describe two sources of error in the method used to determine c_m.
1 ........................................................................................................................
2 ........................................................................................................................ [2]

(ii) Suggest two improvements to the method.
1 ........................................................................................................................
2 ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify two sources of systematic error in the metal-transfer calorimetry method and suggest two practical modifications to reduce them.",
    givenInfo: [
      "Hot mass transferred by string from boiling water into cold water in an open glass beaker."
    ],
    toFind: "Two sources of error and two corresponding improvements.",
    physicsConcepts: `Calorimetric error analysis:
1. Transfer heat loss: Thermal energy is lost to the air while carrying the hot metal from boiling water to beaker A.
2. Water carryover: Boiling water clinging to the metal mass transfers additional heat and adds mass to the cold water.
3. Heat loss from container: The open glass beaker loses heat to the room via radiation, conduction, and surface evaporation.
4. Glass thermal capacity: Thermal energy transfers into the glass beaker walls without being accounted for in the simplified formula.
Corresponding improvements:
- Insulate beaker A / place in a polystyrene container / add a lid.
- Transfer the mass as quickly as possible / minimize transfer distance.
- Shake off excess boiling water before immersion.`,
    equations: `Q_{\\text{loss}} \\propto \\Delta t_{\\text{transfer}} + \\text{Uninsulated area}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Two Sources of Error (Part i)",
        body: "1. Thermal energy is lost to the air as the hot mass is transferred from boiling water to beaker A.\n2. Water carries over on the hot mass into beaker A (or heat is lost from beaker A to the surroundings)."
      },
      {
        step: 2,
        title: "Identify Two Improvements (Part ii)",
        body: "1. Insulate beaker A (or add a lid / place in a jacket) to reduce heat loss to surroundings.\n2. Transfer the mass more quickly / move boiling water container closer to beaker A to reduce transfer heat loss."
      }
    ],
    finalAnswer: "(i) Sources of error:\n1. Thermal energy is lost to the surroundings during transfer of the hot mass;\n2. Hot water is carried over with the mass into beaker A (or heat lost from beaker to surroundings / heat absorbed by glass).\n(ii) Improvements:\n1. Insulate beaker A / use a lid / use a polystyrene cup;\n2. Transfer the mass more quickly / move the boiling water closer to beaker A.",
    reasonablenessCheck: "Unlagged glass beakers lose significant heat to ambient air, and transferring through cold air cools the metal before immersion.",
    commonMistakes: [
      "Giving human error or parallax as a source of error without physical justification.",
      "Suggesting using more water (which reduces the temperature rise, increasing percentage measurement uncertainty)."
    ],
    takeaway: "Transfer heat loss and container heat loss are the primary systematic errors in calorimetry; reduce them with insulation, lids, and rapid transfer.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Main Error 1", expr: () => "Transfer cooling in air" },
        { label: "Main Error 2", expr: () => "Uninsulated beaker heat loss" },
        { label: "Key Fix", expr: () => "Add lid and insulation" }
      ],
      explanation: "Lagging the beaker and transferring the mass quickly reduces heat loss to the surroundings."
    }
  },
  {
    globalId: "Q185",
    examId: "Q00580",
    paperRef: "5054/31/M/J/23 Q2(b)-(d)",
    pdfPage: 86,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Thermistor Temperature Sensor Calibration",
    paperType: "practical",
    marks: 5,
    questionText: `In this experiment you investigate a thermistor circuit shown in Fig. 2.1:
(b) Record room temperature T_W on the thermometer. Close the switch and record voltmeter reading V_W. Open the switch.
T_W = .................... °C
V_W = .................... V [1]

(c) Submerge the thermistor in cold water (ice and water). Wait until steady and record voltage V_C.
V_C = .................... V [1]

(d) (i) Assume that temperature T_C of the ice and water is 0 °C.
Calculate the average change in voltage for one degree temperature change ΔV_AV using the equation:
ΔV_AV = (V_C - V_W) / (T_W - T_C)
State the unit of your answer. [2]
(ii) Use your answer to (d)(i) to predict the voltage V_PB across the thermistor when at body temperature (37 °C).
Assume ΔV_AV is constant. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record thermistor voltages at room temperature and in melting ice, calculate voltage sensitivity per degree Celsius, and predict voltage at body temperature (37 °C).",
    givenInfo: [
      "Room temperature water: T_W ≈ 22.0 °C",
      "Ice-water temperature: T_C = 0 °C",
      "Body temperature: T_PB = 37 °C",
      "Circuit: Battery, series fixed resistor, NTC thermistor, voltmeter across thermistor"
    ],
    toFind: "Voltages V_W and V_C, sensitivity ΔV_AV with unit, and predicted voltage V_PB.",
    physicsConcepts: `Negative Temperature Coefficient (NTC) thermistor behavior:
1. As temperature decreases, thermistor resistance increases.
2. In a potential divider with a fixed resistor, higher thermistor resistance increases the voltage drop across it: V_C > V_W.
3. Average voltage sensitivity:
\\Delta V_{\\text{AV}} = \\frac{V_C - V_W}{T_W - T_C} \\quad [\\text{Unit: V/}^\\circ\\text{C}]
4. Voltage prediction at body temperature (37 °C > T_W):
Because temperature is higher, resistance and voltage decrease:
V_{\\text{PB}} = V_W - \\Delta V_{\\text{AV}} \\cdot (37 - T_W)`,
    equations: `\\Delta V_{\\text{AV}} = \\frac{V_C - V_W}{T_W - 0}; \\quad V_{\\text{PB}} = V_W - \\Delta V_{\\text{AV}} (37 - T_W)`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Typical Lab Values (b & c)",
        body: "Room temperature: T_W = 22 °C, V_W = 1.45 V.\nIn ice-water (0 °C): resistance rises, so V_C = 2.15 V."
      },
      {
        step: 2,
        title: "Calculate Voltage Sensitivity (d)(i)",
        body: "ΔV_AV = (2.15 - 1.45) / (22 - 0) = 0.70 / 22 = 0.0318 V/°C ≈ 0.032 V/°C.\nUnit: V/°C (or V/K)."
      },
      {
        step: 3,
        title: "Predict Voltage at Body Temperature (d)(ii)",
        body: "ΔT above room temperature = 37 °C - 22 °C = 15 °C.\nV_PB = V_W - (0.0318 * 15) = 1.45 V - 0.48 V = 0.97 V (or candidate value)."
      }
    ],
    finalAnswer: "(b) T_W ≈ 22 °C, V_W ≈ 1.45 V;\n(c) V_C ≈ 2.15 V;\n(d)(i) ΔV_AV ≈ 0.032 V/°C (unit: V/°C);\n(d)(ii) V_PB ≈ 0.97 V (within 0.8 V to 1.1 V depending on candidate readings).",
    reasonablenessCheck: "In an NTC thermistor, voltage decreases as temperature increases: 2.15 V (0 °C) -> 1.45 V (22 °C) -> 0.97 V (37 °C).",
    commonMistakes: [
      "Adding the voltage change at 37 °C instead of subtracting.",
      "Omitting the unit V/°C."
    ],
    takeaway: "An NTC thermistor's resistance and voltage drop decrease as temperature rises: V(T) = V_W - ΔV_AV(T - T_W).",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 22 },
      controls: [
        { id: "tempC", name: "Sensor Temperature", min: 0, max: 50, step: 1, default: 22, unit: "°C" }
      ],
      readouts: [
        { label: "Thermistor Resistance", expr: (p) => (2000 * Math.exp(-0.03 * p.tempC)).toFixed(0) + " Ω" },
        { label: "Voltmeter Reading", expr: (p) => (2.15 - 0.0318 * p.tempC).toFixed(2) + " V" }
      ],
      explanation: "As temperature increases from 0 °C to 37 °C, thermistor resistance drops, lowering the measured voltage."
    }
  },
  {
    globalId: "Q186",
    examId: "Q02882",
    paperRef: "5054/32/O/N/23 Q2(a)",
    pdfPage: 88,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Surface Water Cooling Rate Observations",
    paperType: "practical",
    marks: 1,
    questionText: `Ask your supervisor to pour hot water into the beaker until it reaches the 200 cm³ mark.
Lower the thermometer until the bulb is just covered by the hot water (Fig. 2.1).
Wait approximately 30 s.
Start the stop-watch and read the thermometer.
Record the temperature reading at time t = 0 to the nearest 0.5 °C in the second column of Table 2.1.
Wait for 3.0 minutes and record temperature at t = 3.0 min. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record initial and 3.0-minute temperatures for water cooling with the thermometer bulb positioned just below the surface.",
    givenInfo: [
      "200 cm³ hot water in a 250 cm³ glass beaker.",
      "Thermometer bulb positioned just below the surface.",
      "Cooling interval = 3.0 minutes."
    ],
    toFind: "Table readings for bulb just below surface at t = 0 and t = 3.0 min.",
    physicsConcepts: `Surface cooling observations:
Water at the surface loses heat directly to the atmosphere via surface evaporation, convection currents in the air above, and thermal radiation.
Temperatures should be recorded to the nearest 0.5 °C with correct units.`,
    equations: `\\Delta T_{\\text{top}} = \\theta(0) - \\theta(3.0\\text{ min})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record t = 0 Reading",
        body: "After waiting 30 s, record initial temperature: typically θ(0) = 84.5 °C (acceptable: 75.0 °C to 90.0 °C)."
      },
      {
        step: 2,
        title: "Record t = 3.0 min Reading",
        body: "After 3.0 minutes: typically θ(3.0) = 71.0 °C (typical decrease of 10 °C to 16 °C)."
      }
    ],
    finalAnswer: "At t = 0: 84.5 °C; at t = 3.0 min: 71.0 °C (typical values to nearest 0.5 °C in Table 2.1)",
    reasonablenessCheck: "A temperature drop of 13.5 °C in 3 minutes for 200 mL of uninsulated hot water is consistent with expected cooling rates.",
    commonMistakes: [
      "Starting timing before waiting 30 s for thermometer equilibration.",
      "Recording values without tenths or halves of a degree."
    ],
    takeaway: "Record laboratory temperatures to 0.5 °C precision and allow the thermometer to reach thermal equilibrium before timing.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { tempTop0: 84.5, tempTop3: 71.0 },
      controls: [],
      readouts: [
        { label: "Top Temp t = 0", expr: () => "84.5 °C" },
        { label: "Top Temp t = 3.0 min", expr: () => "71.0 °C (Drop: 13.5 °C)" }
      ],
      explanation: "Water at the surface cools by ~13.5 °C in 3 minutes due to open surface evaporation and air convection."
    }
  },
  {
    globalId: "Q187",
    examId: "Q02883",
    paperRef: "5054/32/O/N/23 Q2(a)(iii)",
    pdfPage: 89,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Thermometer Thermal Equilibration Wait Time",
    paperType: "practical",
    marks: 1,
    questionText: `Explain why you waited for 30 s before reading the initial temperature of the hot water. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State the physical reason for waiting 30 seconds before taking the initial temperature reading of hot water.",
    givenInfo: [
      "Thermometer at room temperature placed into hot water."
    ],
    toFind: "Physical justification for the 30-second delay.",
    physicsConcepts: `Thermal inertia / heat transfer lag:
The glass bulb and thermometric liquid (mercury or alcohol) have non-zero thermal capacity. When transferred from room temperature (~20 °C) into hot water (~85 °C), thermal conduction through the glass walls takes time.
Waiting 30 seconds ensures the bulb reaches thermal equilibrium with the hot water, so the liquid column reaches its peak before timing begins.`,
    equations: `\\tau = \\frac{m c}{h A} \\implies \\text{Equilibration time } t \\approx 5\\tau \\approx 20\\text{--}30\\text{ s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Heat Transfer Delay",
        body: "The cold thermometer absorbs heat from the water, taking time for heat to conduct through the glass."
      },
      {
        step: 2,
        title: "State Equilibration Condition",
        body: "To allow the thermometer to reach the temperature of the water / reach thermal equilibrium (or to allow the liquid thread to reach its maximum reading)."
      }
    ],
    finalAnswer: "To allow the thermometer to reach the temperature of the water / reach thermal equilibrium (or to allow the liquid column to stop rising / reach maximum).",
    reasonablenessCheck: "Reading immediately would register an intermediate warming temperature rather than the actual initial water temperature.",
    commonMistakes: [
      "Saying 'to let the water cool down'.",
      "Saying 'to start the stopwatch accurately'."
    ],
    takeaway: "Always allow thermometers time to reach thermal equilibrium with the liquid before recording temperatures.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { waitTimeS: 30 },
      controls: [],
      readouts: [
        { label: "Thermometer Status", expr: () => "Reaches Thermal Equilibrium" },
        { label: "Meniscus State", expr: () => "Stabilized at Maximum" }
      ],
      explanation: "Waiting 30 s allows thermal conduction through the glass to establish equilibrium between the bulb and hot water."
    }
  },
  {
    globalId: "Q188",
    examId: "Q02884",
    paperRef: "5054/32/O/N/23 Q2(b)",
    pdfPage: 89,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Bottom Water Cooling Observations",
    paperType: "practical",
    marks: 1,
    questionText: `Remove the thermometer and pour the water away.
Ask your supervisor to pour another 200 cm³ of hot water into the beaker.
Repeat the procedure but positioning the thermometer lower in the beaker so that the bulb is just above, but not touching, the bottom of the beaker (Fig. 2.2).
Record the temperature of the water at times t = 0 and t = 3.0 min in the third column of Table 2.1. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record initial and 3.0-minute temperatures for water cooling with the thermometer bulb positioned near the bottom of the beaker.",
    givenInfo: [
      "Fresh 200 cm³ hot water in the beaker.",
      "Thermometer bulb just above, but not touching, the bottom of the beaker.",
      "Cooling observed over 3.0 minutes."
    ],
    toFind: "Table readings for bulb at bottom at t = 0 and t = 3.0 min.",
    physicsConcepts: `Cooling at bottom of beaker:
At the bottom, water is shielded from direct air draughts and surface evaporation.
However, cooler water sinks to the bottom by convection, and heat conducts through the beaker base to the bench.
Typically, water near the bottom cools slightly less rapidly than the open surface layer, or shows a different temperature drop depending on bench thermal conductivity.`,
    equations: `\\Delta T_{\\text{bottom}} = \\theta(0) - \\theta(3.0\\text{ min})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record t = 0 Reading at Bottom",
        body: "Wait 30 s after fresh water is poured: typically θ(0) = 84.0 °C (acceptable: 75.0 °C to 90.0 °C)."
      },
      {
        step: 2,
        title: "Record t = 3.0 min Reading at Bottom",
        body: "After 3.0 minutes: typically θ(3.0) = 73.5 °C (typical drop of 8.0 °C to 13.0 °C)."
      }
    ],
    finalAnswer: "At t = 0: 84.0 °C; at t = 3.0 min: 73.5 °C (typical laboratory values recorded in Table 2.1)",
    reasonablenessCheck: "Temperature drop at the bottom (~10.5 °C) is smaller than at the surface (~13.5 °C) because the bottom is shielded from surface evaporation.",
    commonMistakes: [
      "Allowing the thermometer bulb to touch the glass bottom directly.",
      "Reusing cooled water instead of obtaining fresh hot water."
    ],
    takeaway: "Keep the bulb suspended just above the base without touching the glass to measure water temperature rather than container temperature.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { tempBot0: 84.0, tempBot3: 73.5 },
      controls: [],
      readouts: [
        { label: "Bottom Temp t = 0", expr: () => "84.0 °C" },
        { label: "Bottom Temp t = 3.0 min", expr: () => "73.5 °C (Drop: 10.5 °C)" }
      ],
      explanation: "Water at the bottom cools by ~10.5 °C, a smaller drop than at the surface."
    }
  },
  {
    globalId: "Q189",
    examId: "Q02885",
    paperRef: "5054/32/O/N/23 Q2(c)",
    pdfPage: 89,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Top vs Bottom Cooling Rates Evaluation",
    paperType: "practical",
    marks: 3,
    questionText: `(i) Calculate the average rate of cooling P_T of the hot water at the top of the beaker.
Use the equation:
average rate of cooling = (decrease in temperature of the water) / (time taken)
Give the unit of your answer.
P_T = .................... unit .................... [2]

(ii) Calculate the average rate of cooling P_B of the hot water at the bottom of the beaker.
P_B = .................... [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the average cooling rates P_T (top) and P_B (bottom) using temperature drops over 3.0 minutes, stating units.",
    givenInfo: [
      "Top: ΔT_T = 84.5 °C - 71.0 °C = 13.5 °C over 3.0 min (or 180 s)",
      "Bottom: ΔT_B = 84.0 °C - 73.5 °C = 10.5 °C over 3.0 min (or 180 s)"
    ],
    toFind: "Cooling rates P_T and P_B with units (°C/min or °C/s).",
    physicsConcepts: `Average cooling rate:
P = \\frac{\\Delta \\theta}{t}
Can be expressed in:
- °C/min (using t = 3.0 min)
- °C/s (using t = 180 s)`,
    equations: `P_T = \\frac{13.5}{3.0} = 4.5^\\circ\\text{C/min} = 0.075^\\circ\\text{C/s}; \\quad P_B = \\frac{10.5}{3.0} = 3.5^\\circ\\text{C/min} = 0.058^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Top Cooling Rate P_T",
        body: "ΔT_T = 13.5 °C.\nP_T = 13.5 °C / 3.0 min = 4.5 °C/min (or 13.5 / 180 s = 0.075 °C/s)."
      },
      {
        step: 2,
        title: "State Unit for P_T",
        body: "Unit: °C/min (or °C/s)."
      },
      {
        step: 3,
        title: "Calculate Bottom Cooling Rate P_B",
        body: "ΔT_B = 10.5 °C.\nP_B = 10.5 °C / 3.0 min = 3.5 °C/min (or 10.5 / 180 s = 0.058 °C/s)."
      }
    ],
    finalAnswer: "(i) P_T = 4.5 °C/min (or 0.075 °C/s), unit: °C/min (or °C/s);\n(ii) P_B = 3.5 °C/min (or 0.058 °C/s).",
    reasonablenessCheck: "P_T > P_B reflects greater heat loss from the top due to surface evaporation and open convection.",
    commonMistakes: [
      "Mixing minutes and seconds between the two calculations.",
      "Omitting the unit or writing only °C."
    ],
    takeaway: "Cooling rate = Δθ / t. Keep units consistent across both measurements (°C/min or °C/s).",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { rateT: 4.5, rateB: 3.5 },
      controls: [],
      readouts: [
        { label: "Top Rate P_T", expr: () => "4.5 °C/min" },
        { label: "Bottom Rate P_B", expr: () => "3.5 °C/min" },
        { label: "Rate Comparison", expr: () => "P_T > P_B (Surface cools faster)" }
      ],
      explanation: "Water cools faster at the top (4.5 °C/min) than at the bottom (3.5 °C/min)."
    }
  },
  {
    globalId: "Q190",
    examId: "Q02886",
    paperRef: "5054/32/O/N/23 Q2(d)&(e)",
    pdfPage: 89,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Stirring Justification and Control Variables",
    paperType: "practical",
    marks: 3,
    questionText: `(d) (i) Use your results to suggest why a hot liquid should be stirred before measuring its temperature. [1]
(ii) State one way in which the apparatus in this experiment is arranged to make it easy to read the thermometer accurately. [1]

(e) The experiment is repeated to check the results.
Suggest one variable that must be kept constant. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why stirring is necessary based on the observed temperature gradient, identify an apparatus arrangement aiding reading accuracy, and name a control variable for repeating the experiment.",
    givenInfo: [
      "Different cooling rates and temperatures observed at the top vs bottom of the beaker."
    ],
    toFind: "Reason for stirring, reading setup feature, and controlled variable.",
    physicsConcepts: `1. Why stir: The experiment demonstrates that water cools at different rates at the top and bottom, creating a vertical temperature gradient. Stirring mixes the water to make temperature uniform.
2. Apparatus arrangement: The clamp and stand hold the thermometer steady at eye level so the student does not have to hold it while reading.
3. Control variable: To make repeated runs comparable, keep initial water temperature, water volume (200 cm³), beaker size/material, or room temperature constant.`,
    equations: `\\text{Stirring} \\implies T_{\\text{top}} = T_{\\text{bottom}} = T_{\\text{uniform}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (d)(i) Why Stir",
        body: "The water is at different temperatures at the top and bottom (a temperature gradient forms). Stirring ensures the temperature is uniform throughout the liquid."
      },
      {
        step: 2,
        title: "Part (d)(ii) Apparatus Arrangement for Accurate Reading",
        body: "The thermometer is held vertically by a clamp and stand (held steady / at eye level / does not move)."
      },
      {
        step: 3,
        title: "Part (e) Control Variable",
        body: "Volume / mass of water (200 cm³) / initial starting temperature of the water / same beaker / same room temperature."
      }
    ],
    finalAnswer: "(d)(i) Temperature is different at the top and bottom / stirring ensures uniform temperature throughout;\n(d)(ii) Thermometer is held vertically by a clamp / held steady;\n(e) Volume of water (200 cm³) / initial temperature / same beaker / ambient room temperature.",
    reasonablenessCheck: "Unstirred liquids establish vertical temperature layers; a clamped thermometer eliminates hand shake and parallax.",
    commonMistakes: [
      "Stating 'to make the water cool faster' for stirring.",
      "Naming an uncontrolled variable (e.g. final temperature) as the control variable."
    ],
    takeaway: "Stirring equalizes vertical temperature gradients; clamping the thermometer provides steady, repeatable readings.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Why Stir?", expr: () => "Mixes top/bottom temperature layers" },
        { label: "Clamp Benefit", expr: () => "Holds thermometer steady" },
        { label: "Control Variable", expr: () => "Volume (200 cm³) & Start Temp" }
      ],
      explanation: "Stirring blends temperature layers; clamping ensures steady readings; fixed volume ensures repeatability."
    }
  }
];