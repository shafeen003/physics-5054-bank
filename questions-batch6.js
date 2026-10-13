/**
 * Master Question Store: Batch 6 (Q067 to Q085)
 * Section 2.2: Thermal Properties and Temperature (MCQs Complete)
 */

const QUESTIONS_BATCH_6 = [
  {
    globalId: "Q067",
    examId: "Q03171",
    paperRef: "5054/11/M/J/22 Q15",
    pdfPage: 39,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermocouple Advantages",
    paperType: "mcq",
    marks: 1,
    questionText: `In many applications, a thermocouple is used to measure temperature instead of a liquid-in-glass thermometer.

Which property of a thermocouple is a major advantage?

A its greater heat capacity
B its smaller temperature range
C its quicker response time
D it has a non-linear output`,
    options: [
      { key: "A", text: "its greater heat capacity" },
      { key: "B", text: "its smaller temperature range" },
      { key: "C", text: "its quicker response time" },
      { key: "D", text: "it has a non-linear output" }
    ],
    correctOption: "C",
    whatIsAsking: "Identify the primary operational advantage of a thermocouple compared to a liquid-in-glass thermometer.",
    givenInfo: [
      "Thermocouple thermometer compared with liquid-in-glass thermometer."
    ],
    toFind: "The major advantage among the options.",
    physicsConcepts: `A thermocouple uses the thermoelectric voltage produced across two junctions of dissimilar metals. Because the measuring junction is a microscopic wire weld, it has an extremely small mass and low thermal capacity. It absorbs heat almost instantaneously and reaches thermal equilibrium in milliseconds, giving it a much quicker response time.`,
    equations: `\\tau = \\frac{m c}{h A} \\ll 1 \\text{ s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Evaluate Option A",
        body: "A thermocouple junction has a tiny mass, so it has a much smaller heat capacity, not greater. False."
      },
      {
        step: 2,
        title: "Evaluate Option B",
        body: "A thermocouple has a much wider temperature range (e.g., -200 °C to +1300 °C) than a liquid thermometer. Having a smaller range would also be a disadvantage, not an advantage. False."
      },
      {
        step: 3,
        title: "Evaluate Option C",
        body: "Its tiny junction thermal capacity allows it to respond almost instantaneously to rapid temperature changes. This is a major advantage. True."
      },
      {
        step: 4,
        title: "Evaluate Option D",
        body: "A non-linear output requires calibration correction and is a drawback, not an advantage. False."
      }
    ],
    finalAnswer: "C (its quicker response time)",
    reasonablenessCheck: "In racing engines and gas turbines, temperature fluctuations occur in milliseconds where only a thermocouple can respond fast enough.",
    commonMistakes: [
      "Thinking liquid-in-glass thermometers respond faster because the mercury meniscus moves visually.",
      "Thinking thermocouples have a smaller range."
    ],
    takeaway: "Key advantages of thermocouples: rapid response time, ability to measure very high temperatures, and measurement of localized points.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { probeType: "thermocouple", responseTimeMs: 40 },
      controls: [],
      readouts: [
        { label: "Sensor Type", expr: () => "Thermocouple Junction" },
        { label: "Response Lag", expr: () => "0.04 s (Quicker)" }
      ],
      explanation: "A thermocouple wire junction reaches thermal equilibrium almost instantaneously due to its negligible mass."
    }
  },
  {
    globalId: "Q068",
    examId: "Q03172",
    paperRef: "5054/11/M/J/22 Q16",
    pdfPage: 39,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermometer Liquid Expansion Trade-off",
    paperType: "mcq",
    marks: 1,
    questionText: `A liquid-in-glass thermometer consists of a bulb containing a liquid which expands into a thin capillary tube.

The liquid in the thermometer is replaced by the same volume of a different liquid that expands more for the same temperature rise. The length of the capillary tube remains the same.

How does the new thermometer compare with the old thermometer?

A It has greater sensitivity and a greater range.
B It has greater sensitivity but a smaller range.
C It has the same sensitivity and the same range.
D It has the same sensitivity but a greater range.`,
    options: [
      { key: "A", text: "It has greater sensitivity and a greater range." },
      { key: "B", text: "It has greater sensitivity but a smaller range." },
      { key: "C", text: "It has the same sensitivity and the same range." },
      { key: "D", text: "It has the same sensitivity but a greater range." }
    ],
    correctOption: "B",
    whatIsAsking: "Determine how replacing a thermometric liquid with one that expands more affects sensitivity and measurable temperature range.",
    givenInfo: [
      "New liquid expands more per °C for the same volume.",
      "Capillary tube length and bore dimensions remain unchanged."
    ],
    toFind: "Comparison of sensitivity and range.",
    physicsConcepts: `Sensitivity = distance moved by thread per °C. Because the new liquid expands more per degree, the thread moves further per °C, increasing sensitivity.
Range = total temperature interval accommodated on the fixed tube length. Because the thread moves further per degree, it reaches the top of the tube after a smaller total temperature rise, decreasing range.`,
    equations: `\\text{Sensitivity} \\propto \\gamma; \\quad \\text{Range} = \\frac{L_{\\text{stem}}}{\\text{Sensitivity}} \\propto \\frac{1}{\\gamma}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Sensitivity",
        body: "Because the new liquid expands by a larger volume per degree, the liquid thread travels further along the tube for each 1 °C rise. Thus, sensitivity is greater."
      },
      {
        step: 2,
        title: "Analyze Range",
        body: "Because the tube length is fixed, the liquid thread reaches the top of the stem with fewer total degrees of temperature rise. Thus, range is smaller."
      },
      {
        step: 3,
        title: "Match Option",
        body: "Greater sensitivity but a smaller range corresponds to Option B."
      }
    ],
    finalAnswer: "B (It has greater sensitivity but a smaller range.)",
    reasonablenessCheck: "For a fixed physical scale length, magnifying the movement per degree inevitably reduces the total number of degrees that fit on the scale.",
    commonMistakes: [
      "Assuming a 'better' liquid improves both sensitivity and range simultaneously.",
      "Confusing capillary bore diameter changes with liquid expansion coefficient changes."
    ],
    takeaway: "Higher expansion coefficient yields greater sensitivity but a smaller range for identical tube dimensions.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { liquidExpCoeff: 2.0 },
      controls: [
        { id: "liquidExpCoeff", name: "Liquid Expansion Multiplier", min: 1.0, max: 3.0, step: 0.5, default: 2.0, unit: "x" }
      ],
      readouts: [
        { label: "Sensitivity", expr: (p) => (p.liquidExpCoeff * 1.5).toFixed(1) + " mm/°C (Greater)" },
        { label: "Max Range", expr: (p) => (100 / p.liquidExpCoeff).toFixed(0) + " °C (Smaller)" }
      ],
      explanation: "Increasing liquid expansivity stretches degree spacing (greater sensitivity) but limits the highest readable temperature (smaller range)."
    }
  },
  {
    globalId: "Q069",
    examId: "Q03173",
    paperRef: "5054/11/M/J/22 Q17",
    pdfPage: 39,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Symbol and Unit of Heat Capacity",
    paperType: "mcq",
    marks: 1,
    questionText: `What is the usual symbol and what is the unit for the heat capacity of an object?

| | symbol | unit |
|---|---|---|
| A | C | J/°C |
| B | C | J/(kg °C) |
| C | H | J/°C |
| D | H | J/(kg °C) |`,
    options: [
      { key: "A", text: "symbol: C | unit: J/°C" },
      { key: "B", text: "symbol: C | unit: J/(kg °C)" },
      { key: "C", text: "symbol: H | unit: J/°C" },
      { key: "D", text: "symbol: H | unit: J/(kg °C)" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the conventional standard physics symbol and SI unit for the heat capacity of an object.",
    givenInfo: [
      "Property: Heat capacity (thermal capacity) of an object."
    ],
    toFind: "Standard symbol and unit.",
    physicsConcepts: `Heat capacity C (capital C) of an object is defined as the thermal energy required to raise the temperature of the whole object by 1 °C (or 1 K).
Its unit is joules per degree Celsius (J/°C) or joules per kelvin (J/K).
Specific heat capacity uses lowercase c and has the unit J/(kg °C).`,
    equations: `C = \\frac{\\Delta E}{\\Delta T} \\implies \\text{Unit: } \\frac{\\text{J}}{^\\circ\\text{C}} \\quad [\\text{or J/K}]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Standard Symbol",
        body: "The standard symbol for heat capacity is capital C."
      },
      {
        step: 2,
        title: "Identify Unit",
        body: "Heat capacity applies to a whole object (no mass term in denominator). Unit is J/°C. (J/(kg °C) is specific heat capacity)."
      },
      {
        step: 3,
        title: "Match Row",
        body: "Row A correctly matches symbol C and unit J/°C."
      }
    ],
    finalAnswer: "A (symbol: C | unit: J/°C)",
    reasonablenessCheck: "Dividing Joules (E) by temperature change (°C) gives J/°C directly.",
    commonMistakes: [
      "Selecting B by confusing heat capacity with specific heat capacity.",
      "Selecting H (often confused with enthalpy in chemistry)."
    ],
    takeaway: "Heat capacity: C in J/°C. Specific heat capacity: c in J/(kg °C).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 1.0, tempC: 1.0 },
      controls: [],
      readouts: [
        { label: "Quantity", expr: () => "Heat Capacity (C)" },
        { label: "Standard Unit", expr: () => "J/°C" }
      ],
      explanation: "Heat capacity applies to the entire object, so its unit has no kilogram term."
    }
  },
  {
    globalId: "Q070",
    examId: "Q02734",
    paperRef: "5054/12/M/J/22 Q18",
    pdfPage: 39,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermometer Column Calibration Calculation",
    paperType: "mcq",
    marks: 1,
    questionText: `A liquid column in a liquid-in-glass thermometer is 2.0 cm long at 0 °C. The column expands by 10.0 cm when heated to 100 °C.

Measuring from P, how long is the liquid column at 30 °C?

A 2.3 cm
B 3.0 cm
C 5.0 cm
D 7.0 cm`,
    options: [
      { key: "A", text: "2.3 cm" },
      { key: "B", text: "3.0 cm" },
      { key: "C", text: "5.0 cm" },
      { key: "D", text: "7.0 cm" }
    ],
    correctOption: "C",
    whatIsAsking: "Determine the total length of the thermometric liquid thread measured from datum point P at 30 °C.",
    givenInfo: [
      "Length at 0 °C (from P) l_0 = 2.0 cm",
      "Expansion between 0 °C and 100 °C Delta l_100 = 10.0 cm",
      "Target temperature = 30 °C"
    ],
    toFind: "Total length from P at 30 °C.",
    physicsConcepts: `Linear expansion of a uniform bore thermometer:
Expansion is directly proportional to temperature rise:
Delta l_30 = (30 / 100) * Delta l_100 = 0.30 * 10.0 cm = 3.0 cm.
The total length measured from point P includes the initial length at 0 °C:
l_total = l_0 + Delta l_30 = 2.0 cm + 3.0 cm = 5.0 cm.`,
    equations: `l(T) = l_0 + \\left(\\frac{T}{100}\\right) \\Delta l_{100} = 2.0 + 3.0 = 5.0 \\text{ cm}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Expansion for 30 °C",
        body: "Expansion = (30 °C / 100 °C) * 10.0 cm = 3.0 cm."
      },
      {
        step: 2,
        title: "Add Base Length from P",
        body: "Total length measured from P = 2.0 cm + 3.0 cm = 5.0 cm."
      }
    ],
    finalAnswer: "C (5.0 cm)",
    reasonablenessCheck: "At 0 °C it is 2.0 cm; at 100 °C it is 12.0 cm. At 30 °C (30% of the span), 2.0 + 0.3 * 10.0 = 5.0 cm.",
    commonMistakes: [
      "Selecting B (3.0 cm) by measuring only the expansion and forgetting the initial 2.0 cm stem length.",
      "Selecting A (2.3 cm) by dividing incorrectly."
    ],
    takeaway: "Total column length from base P = initial length at 0 °C + thermal expansion.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 30, baseLenCm: 2.0, scaleExpCm: 10.0 },
      controls: [
        { id: "tempC", name: "Temperature", min: 0, max: 100, step: 10, default: 30, unit: "°C" }
      ],
      readouts: [
        { label: "Expansion", expr: (p) => (p.tempC * 0.1).toFixed(1) + " cm" },
        { label: "Total Length from P", expr: (p) => (2.0 + p.tempC * 0.1).toFixed(1) + " cm" }
      ],
      explanation: "Observe the column grow: 2.0 cm base + 3.0 cm expansion = 5.0 cm total length from P."
    }
  },
  {
    globalId: "Q071",
    examId: "Q02735",
    paperRef: "5054/12/M/J/22 Q19",
    pdfPage: 40,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermometer Liquid Replacement (Variant)",
    paperType: "mcq",
    marks: 1,
    questionText: `A liquid-in-glass thermometer consists of a bulb containing a liquid which expands into a thin capillary tube.

The liquid in the thermometer is replaced by the same volume of a different liquid that expands more for the same temperature rise. The length of the capillary tube remains the same.

How does the new thermometer compare with the old thermometer?

A It has greater sensitivity and a greater range.
B It has greater sensitivity but a smaller range.
C It has the same sensitivity and the same range.
D It has the same sensitivity but a greater range.`,
    options: [
      { key: "A", text: "greater sensitivity and greater range" },
      { key: "B", text: "greater sensitivity but smaller range" },
      { key: "C", text: "same sensitivity and same range" },
      { key: "D", text: "same sensitivity but greater range" }
    ],
    correctOption: "B",
    whatIsAsking: "Determine how a higher-expansion liquid affects sensitivity and range in an identical thermometer tube.",
    givenInfo: [
      "Liquid replaced with one expanding more for the same temperature rise.",
      "Bulb volume and tube length remain constant."
    ],
    toFind: "Change in sensitivity and range.",
    physicsConcepts: `Greater liquid expansion produces larger thread displacement per degree (greater sensitivity). Because the capillary tube has a fixed physical length, the thread reaches the top after fewer total degrees (smaller range).`,
    equations: `\\text{Sensitivity} \\uparrow, \\quad \\text{Range} \\downarrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Recognize Cross-Variant Question",
        body: "Identical to 5054/11/M/J/22 Q16."
      },
      {
        step: 2,
        title: "State Result",
        body: "Greater sensitivity but a smaller range (Option B)."
      }
    ],
    finalAnswer: "B (It has greater sensitivity but a smaller range.)",
    reasonablenessCheck: "High expansion magnifies movement per degree, which fills a fixed stem faster.",
    commonMistakes: [
      "Thinking greater expansion increases both sensitivity and range."
    ],
    takeaway: "Greater expansion coefficient increases sensitivity but decreases range for a fixed stem.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { liquidExpCoeff: 2.0 },
      controls: [],
      readouts: [
        { label: "Sensitivity", expr: () => "GREATER" },
        { label: "Range", expr: () => "SMALLER" }
      ],
      explanation: "Liquid thread moves further per degree, filling the fixed tube sooner."
    }
  },
  {
    globalId: "Q072",
    examId: "Q02737",
    paperRef: "5054/12/M/J/22 Q21",
    pdfPage: 40,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Order of Thermal Expansion",
    paperType: "mcq",
    marks: 1,
    questionText: `Which list shows the states of matter in order of expansion from smallest to greatest for the same temperature rise?

A gas -> liquid -> solid
B liquid -> solid -> gas
C solid -> gas -> liquid
D solid -> liquid -> gas`,
    options: [
      { key: "A", text: "gas -> liquid -> solid" },
      { key: "B", text: "liquid -> solid -> gas" },
      { key: "C", text: "solid -> gas -> liquid" },
      { key: "D", text: "solid -> liquid -> gas" }
    ],
    correctOption: "D",
    whatIsAsking: "Order the three states of matter from smallest to greatest thermal expansion for an equal temperature rise.",
    givenInfo: [
      "States of matter: solid, liquid, gas."
    ],
    toFind: "Ascending order of expansion: smallest -> greatest.",
    physicsConcepts: `Thermal expansion depends inversely on the strength of intermolecular forces:
- Solids: Strongest intermolecular bonds hold particles tightly in a fixed lattice; expansion is smallest.
- Liquids: Weaker intermolecular forces allow particles to move slightly further apart; expansion is moderate.
- Gases: Negligible forces between widely separated particles allow them to expand dramatically; expansion is greatest.`,
    equations: `\\text{Expansion: } \\text{solid (smallest)} < \\text{liquid} < \\text{gas (greatest)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Smallest Expansion",
        body: "Solids expand the least due to strong attractive bonds."
      },
      {
        step: 2,
        title: "Identify Greatest Expansion",
        body: "Gases expand the most because intermolecular forces are negligible."
      },
      {
        step: 3,
        title: "Select Matching Option",
        body: "Solid -> liquid -> gas corresponds to Option D."
      }
    ],
    finalAnswer: "D (solid -> liquid -> gas)",
    reasonablenessCheck: "Gases expand about 100 times more than solids for the same temperature increase.",
    commonMistakes: [
      "Inverting the sequence to gas -> liquid -> solid (Option A).",
      "Placing liquid before solid."
    ],
    takeaway: "Order of thermal expansion: solid < liquid < gas.",
    simulation: {
      type: "compressibility_lattice",
      defaultParams: { tempC: 50 },
      controls: [],
      readouts: [
        { label: "Smallest", expr: () => "SOLID" },
        { label: "Intermediate", expr: () => "LIQUID" },
        { label: "Greatest", expr: () => "GAS" }
      ],
      explanation: "Heating all three states confirms the expansion ranking: solid < liquid < gas."
    }
  },
  {
    globalId: "Q073",
    examId: "Q02492",
    paperRef: "5054/11/O/N/22 Q19",
    pdfPage: 40,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Comparing Thermometer Sensitivity and Range",
    paperType: "mcq",
    marks: 1,
    questionText: `The diagrams represent four thermometers:
P: graduated 0 °C to 25 °C (span = 25 °C)
Q: graduated 0 °C to 40 °C (span = 40 °C)
R: graduated 0 °C to 250 °C (span = 250 °C)
S: graduated 100 °C to 300 °C (span = 200 °C)

All four thermometers have the same total stem length.
Which thermometer has the greatest sensitivity and which thermometer has the greatest range?

| | greatest sensitivity | greatest range |
|---|---|---|
| A | P | R |
| B | P | S |
| C | Q | R |
| D | Q | S |`,
    options: [
      { key: "A", text: "greatest sensitivity: P | greatest range: R" },
      { key: "B", text: "greatest sensitivity: P | greatest range: S" },
      { key: "C", text: "greatest sensitivity: Q | greatest range: R" },
      { key: "D", text: "greatest sensitivity: Q | greatest range: S" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify which thermometer has the greatest sensitivity and which has the greatest overall temperature range.",
    givenInfo: [
      "Stem lengths are identical for all four thermometers.",
      "Thermometer P: 0 °C to 25 °C (range span = 25 °C)",
      "Thermometer Q: 0 °C to 40 °C (range span = 40 °C)",
      "Thermometer R: 0 °C to 250 °C (range span = 250 °C)",
      "Thermometer S: 100 °C to 300 °C (range span = 200 °C)"
    ],
    toFind: "Thermometer with greatest sensitivity and thermometer with greatest range.",
    physicsConcepts: `1. Sensitivity: Distance between scale marks per 1 °C. With equal stem lengths, the thermometer covering the smallest temperature span has the largest distance per degree, giving the greatest sensitivity.
2. Range: Total span of temperature covered (T_max - T_min). The thermometer with the largest numerical difference has the greatest range.`,
    equations: `\\text{Sensitivity} \\propto \\frac{L}{\\text{Span}}; \\quad \\text{Range Span} = T_{\\text{max}} - T_{\\text{min}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Determine Greatest Sensitivity",
        body: "Thermometer P covers only 25 °C over the full stem length. Its marks for each 1 °C are spaced furthest apart. Therefore, P has the greatest sensitivity."
      },
      {
        step: 2,
        title: "Determine Greatest Range",
        body: "Calculate spans:\nP: 25 - 0 = 25 °C\nQ: 40 - 0 = 40 °C\nR: 250 - 0 = 250 °C\nS: 300 - 100 = 200 °C\nThermometer R covers 250 °C, which is the largest span. Thus, R has the greatest range."
      },
      {
        step: 3,
        title: "Match Row",
        body: "Row A: greatest sensitivity P | greatest range R."
      }
    ],
    finalAnswer: "A (greatest sensitivity: P | greatest range: R)",
    reasonablenessCheck: "P spreads 25 °C over the entire tube (most sensitive). R covers 250 °C (broadest range).",
    commonMistakes: [
      "Selecting S for greatest range because it reaches 300 °C, forgetting its span is only 200 °C (300 - 100).",
      "Confusing high sensitivity with large temperature span."
    ],
    takeaway: "Smallest temperature span = greatest sensitivity; largest temperature span = greatest range.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { selectedThermometer: "P" },
      controls: [],
      readouts: [
        { label: "Greatest Sensitivity", expr: () => "Thermometer P (25 °C span)" },
        { label: "Greatest Range", expr: () => "Thermometer R (250 °C span)" }
      ],
      explanation: "P has the widest degree spacing (highest sensitivity); R spans the widest temperature difference (greatest range)."
    }
  },
  {
    globalId: "Q074",
    examId: "Q02493",
    paperRef: "5054/11/O/N/22 Q20",
    pdfPage: 40,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermal Energy Calculation Formula",
    paperType: "mcq",
    marks: 1,
    questionText: `A piece of iron of mass m is placed in a mixture of ice and water.
Its temperature decreases from θ₁ to θ₂.

How much thermal energy is lost by the piece of iron?

A m × specific heat capacity of iron × (θ₁ - θ₂)
B m × specific heat capacity of iron × θ₂
C m × heat capacity of piece of iron × (θ₁ - θ₂)
D m × heat capacity of piece of iron × θ₂`,
    options: [
      { key: "A", text: "m × specific heat capacity of iron × (θ₁ - θ₂)" },
      { key: "B", text: "m × specific heat capacity of iron × θ₂" },
      { key: "C", text: "m × heat capacity of piece of iron × (θ₁ - θ₂)" },
      { key: "D", text: "m × heat capacity of piece of iron × θ₂" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the correct algebraic formula for thermal energy lost by mass m of iron cooling from θ₁ to θ₂.",
    givenInfo: [
      "Mass of iron = m",
      "Initial temperature = θ₁",
      "Final temperature = θ₂ (θ₁ > θ₂)"
    ],
    toFind: "Expression for thermal energy lost.",
    physicsConcepts: `The thermal energy lost or gained by a substance when its temperature changes without a change of state is given by:
E = m * c * Delta T,
where m is the mass, c is the specific heat capacity, and Delta T = (θ₁ - θ₂) is the temperature drop.
Note: Heat capacity C already equals m * c, so m * C would have an extra mass term.`,
    equations: `E = m c \\Delta \\theta = m \\times c \\times (\\theta_1 - \\theta_2)`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Required Formula",
        body: "Thermal energy lost = mass * specific heat capacity * temperature decrease."
      },
      {
        step: 2,
        title: "Substitute Terms",
        body: "Temperature drop = (θ₁ - θ₂). Expression = m * specific heat capacity of iron * (θ₁ - θ₂)."
      },
      {
        step: 3,
        title: "Rule Out Distractors",
        body: "Options B and D omit θ₁, using only the final temperature. Option C incorrectly includes mass m alongside heat capacity (heat capacity already contains mass)."
      }
    ],
    finalAnswer: "A (m × specific heat capacity of iron × (θ₁ - θ₂))",
    reasonablenessCheck: "Energy transfer is proportional to temperature difference (θ₁ - θ₂), not absolute temperature θ₂.",
    commonMistakes: [
      "Selecting C, failing to realize that heat capacity C = mc, which would square the mass.",
      "Selecting B or D by using only final temperature θ₂."
    ],
    takeaway: "Energy lost = m * c * (θ₁ - θ₂). Always multiply specific heat capacity by both mass and temperature change.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 0.5, tempDrop: 40 },
      controls: [
        { id: "massKg", name: "Iron Mass m", min: 0.1, max: 2.0, step: 0.1, default: 0.5, unit: "kg" },
        { id: "tempDrop", name: "Temp Drop (θ₁ - θ₂)", min: 10, max: 80, step: 5, default: 40, unit: "°C" }
      ],
      readouts: [
        { label: "Energy Lost E", expr: (p) => (p.massKg * 460 * p.tempDrop).toFixed(0) + " J" }
      ],
      explanation: "Thermal energy lost scales directly with mass, specific heat capacity, and temperature decrease (θ₁ - θ₂)."
    }
  },
  {
    globalId: "Q075",
    examId: "Q01948",
    paperRef: "5054/12/O/N/22 Q20",
    pdfPage: 41,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermometer Range and Sensitivity (Variant)",
    paperType: "mcq",
    marks: 1,
    questionText: `The diagrams represent four thermometers:
P: 0 °C to 25 °C
Q: 0 °C to 40 °C
R: 0 °C to 250 °C
S: 100 °C to 300 °C

All four have identical stem lengths.
Which thermometer has the greatest sensitivity and which thermometer has the greatest range?

| | greatest sensitivity | greatest range |
|---|---|---|
| A | P | R |
| B | P | S |
| C | Q | R |
| D | Q | S |`,
    options: [
      { key: "A", text: "P | R" },
      { key: "B", text: "P | S" },
      { key: "C", text: "Q | R" },
      { key: "D", text: "Q | S" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the thermometer with greatest sensitivity and the one with greatest range.",
    givenInfo: [
      "Stem lengths are equal.",
      "P span = 25 °C, Q span = 40 °C, R span = 250 °C, S span = 200 °C."
    ],
    toFind: "Greatest sensitivity and greatest range.",
    physicsConcepts: `Identical to 5054/11/O/N/22 Q19 across variants.
- Smallest span (P = 25 °C) -> greatest sensitivity.
- Largest span (R = 250 °C) -> greatest range.`,
    equations: `\\text{Sensitivity} \\propto \\frac{1}{\\text{Span}}, \\quad \\text{Range} = T_{\\text{max}} - T_{\\text{min}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Match Criteria",
        body: "P has the smallest span (25 °C), so it has the greatest sensitivity. R has the largest span (250 °C), so it has the greatest range."
      }
    ],
    finalAnswer: "A (greatest sensitivity: P | greatest range: R)",
    reasonablenessCheck: "P gives the largest movement per degree; R measures across the widest temperature interval.",
    commonMistakes: [
      "Picking S for range because 300 °C is the highest upper limit."
    ],
    takeaway: "Range is the difference between upper and lower fixed marks (T_max - T_min).",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Most Sensitive", expr: () => "P (25 °C span)" },
        { label: "Largest Range", expr: () => "R (250 °C span)" }
      ],
      explanation: "Compare scale layouts: P has the widest mark separation; R spans the widest overall difference."
    }
  },
  {
    globalId: "Q076",
    examId: "Q02584",
    paperRef: "5054/11/M/J/23 Q14",
    pdfPage: 41,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Shape and Volume of Liquids",
    paperType: "mcq",
    marks: 1,
    questionText: `Which row describes the shape and the volume of a liquid at constant temperature?

| | shape | volume |
|---|---|---|
| A | fixed | fixed |
| B | fixed | not fixed |
| C | not fixed | fixed |
| D | not fixed | not fixed |`,
    options: [
      { key: "A", text: "shape: fixed | volume: fixed" },
      { key: "B", text: "shape: fixed | volume: not fixed" },
      { key: "C", text: "shape: not fixed | volume: fixed" },
      { key: "D", text: "shape: not fixed | volume: not fixed" }
    ],
    correctOption: "C",
    whatIsAsking: "Identify the shape and volume characteristics of a liquid at constant temperature.",
    givenInfo: ["Substance is in liquid state at constant temperature."],
    toFind: "Correct description of shape and volume.",
    physicsConcepts: `Particles in a liquid can slide over one another, allowing the liquid to flow and take the shape of the container (shape is not fixed).
However, strong attractive forces keep particles close together with negligible compressibility, giving a definite, fixed volume.`,
    equations: `\\text{Liquid} \\implies \\text{shape not fixed, volume fixed}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Shape",
        body: "Liquids take the shape of the vessel they occupy. Shape is not fixed."
      },
      {
        step: 2,
        title: "Analyze Volume",
        body: "Liquids are nearly incompressible and maintain a constant volume. Volume is fixed."
      },
      {
        step: 3,
        title: "Select Matching Row",
        body: "Row C: not fixed | fixed."
      }
    ],
    finalAnswer: "C (shape: not fixed | volume: fixed)",
    reasonablenessCheck: "Pouring milk from a bottle into a bowl changes its shape, but its volume remains exactly 1 liter.",
    commonMistakes: [
      "Confusing liquids with gases by selecting 'not fixed' for volume.",
      "Confusing liquids with solids by selecting 'fixed' for shape."
    ],
    takeaway: "Liquids have fixed volume but no fixed shape.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "liquid", tempC: 25 },
      controls: [],
      readouts: [
        { label: "Shape", expr: () => "NOT FIXED (Adapts)" },
        { label: "Volume", expr: () => "FIXED (Incompressible)" }
      ],
      explanation: "Molecules slide past one another to adapt to the container while remaining closely packed."
    }
  },
  {
    globalId: "Q077",
    examId: "Q02586",
    paperRef: "5054/11/M/J/23 Q16",
    pdfPage: 41,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Definition and Mechanism of Latent Heat",
    paperType: "mcq",
    marks: 1,
    questionText: `An incomplete statement about latent heat is given:

Latent heat is the ......1...... required to overcome the bonds between molecules and change the ......2...... of a substance.

Which words are inserted into gap 1 and gap 2 to correctly complete the sentence?

| | gap 1 | gap 2 |
|---|---|---|
| A | energy | state |
| B | force | state |
| C | energy | temperature |
| D | force | temperature |`,
    options: [
      { key: "A", text: "gap 1: energy | gap 2: state" },
      { key: "B", text: "gap 1: force | gap 2: state" },
      { key: "C", text: "gap 1: energy | gap 2: temperature" },
      { key: "D", text: "gap 1: force | gap 2: temperature" }
    ],
    correctOption: "A",
    whatIsAsking: "Fill in the missing words defining latent heat and its physical function.",
    givenInfo: [
      "Incomplete sentence describing latent heat."
    ],
    toFind: "Correct terms for gap 1 and gap 2.",
    physicsConcepts: `Latent heat is the thermal energy transferred during a phase change.
It does work against the intermolecular bonds/forces holding particles together, changing the state of the substance (solid to liquid, or liquid to gas) without changing its temperature.`,
    equations: `Q = m L \\implies \\text{Energy to change state at constant } T`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Gap 1",
        body: "Latent heat is a quantity of heat/thermal energy (measured in Joules). Thus, gap 1 = energy."
      },
      {
        step: 2,
        title: "Identify Gap 2",
        body: "Latent heat changes the state (phase) of the substance without changing its temperature. Thus, gap 2 = state."
      },
      {
        step: 3,
        title: "Match Row",
        body: "Row A: energy | state."
      }
    ],
    finalAnswer: "A (gap 1: energy | gap 2: state)",
    reasonablenessCheck: "Latent heat is thermal energy that changes state without temperature change.",
    commonMistakes: [
      "Selecting 'temperature' for gap 2, which contradicts the fundamental definition of latent heat.",
      "Selecting 'force' for gap 1."
    ],
    takeaway: "Latent heat is energy required to change state at constant temperature.",
    simulation: {
      type: "bond_energy_phase",
      defaultParams: { energySupplied: 50 },
      controls: [],
      readouts: [
        { label: "Gap 1 (Quantity)", expr: () => "ENERGY (Joules)" },
        { label: "Gap 2 (Effect)", expr: () => "STATE (Phase change)" }
      ],
      explanation: "Energy is used to overcome intermolecular attractions, driving a change of state without raising temperature."
    }
  },
  {
    globalId: "Q078",
    examId: "Q02129",
    paperRef: "5054/12/M/J/23 Q16",
    pdfPage: 42,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Useful vs Problematic Thermal Expansion",
    paperType: "mcq",
    marks: 1,
    questionText: `The diagrams show examples of thermal expansion:
P: expansion of liquid in a thermometer
Q: expansion of a tight lid on a glass container (warmed by a hairdryer to remove it)
R: expansion of long metal beams supporting a roof (mounted on rollers with expansion gaps)

In which diagrams is the thermal expansion useful?

A P, Q and R
B P and Q only
C P only
D Q and R only`,
    options: [
      { key: "A", text: "P, Q and R" },
      { key: "B", text: "P and Q only" },
      { key: "C", text: "P only" },
      { key: "D", text: "Q and R only" }
    ],
    correctOption: "B",
    whatIsAsking: "Distinguish applications where thermal expansion serves a useful function from cases where it is a problem requiring mitigation.",
    givenInfo: [
      "P: Liquid expanding in a thermometer to measure temperature.",
      "Q: Heating a metal jar lid to expand it and loosen it from glass.",
      "R: Metal roof beams expanding and requiring rollers to avoid buckling the walls."
    ],
    toFind: "Cases where thermal expansion is useful.",
    physicsConcepts: `1. Thermometer (P): The operation relies entirely on thermal expansion of the liquid to register temperature. Useful.
2. Tight lid (Q): Heating expands the metal lid more than the glass jar, loosening the lid so it can be opened easily. Useful.
3. Roof beams (R): Expansion forces can buckle beams or push walls over; rollers and gaps are engineering precautions to prevent damage. Problematic (not useful).`,
    equations: `\\Delta L = \\alpha L_0 \\Delta T`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Evaluate P",
        body: "Liquid expansion indicates temperature; the device cannot work without it. Useful."
      },
      {
        step: 2,
        title: "Evaluate Q",
        body: "Thermal expansion loosens the stuck lid, allowing it to be unscrewed. Useful."
      },
      {
        step: 3,
        title: "Evaluate R",
        body: "Expansion of roof beams creates hazardous stresses; rollers are installed to prevent damage. This expansion is a hazard, not a useful feature."
      },
      {
        step: 4,
        title: "Match Option",
        body: "P and Q only (Option B)."
      }
    ],
    finalAnswer: "B (P and Q only)",
    reasonablenessCheck: "Thermometers and bimetallic thermostats use expansion deliberately; bridges and roof beams install expansion joints to prevent destructive forces.",
    commonMistakes: [
      "Selecting A, assuming any example in physics is an application.",
      "Failing to recognize that rollers in R are damage-prevention measures."
    ],
    takeaway: "Thermal expansion is useful in thermometers, thermostats, and loosening lids, but problematic in structural beams and railway lines.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 60 },
      controls: [],
      readouts: [
        { label: "P (Thermometer)", expr: () => "USEFUL (Measures T)" },
        { label: "Q (Tight Lid)", expr: () => "USEFUL (Loosens lid)" },
        { label: "R (Roof Beams)", expr: () => "HAZARD (Requires rollers)" }
      ],
      explanation: "P and Q utilize thermal expansion directly, whereas R requires engineering safeguards to mitigate damage."
    }
  },
  {
    globalId: "Q079",
    examId: "Q01986",
    paperRef: "5054/11/M/J/24 Q18",
    pdfPage: 42,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermometric Property of Liquid-in-Glass",
    paperType: "mcq",
    marks: 1,
    questionText: `The temperature of a substance is measured with a liquid-in-glass thermometer.

Which physical property changes so that the temperature can be measured?

A length of the thermometer
B mass of the liquid
C specific heat capacity of the liquid
D volume of the liquid`,
    options: [
      { key: "A", text: "length of the thermometer" },
      { key: "B", text: "mass of the liquid" },
      { key: "C", text: "specific heat capacity of the liquid" },
      { key: "D", text: "volume of the liquid" }
    ],
    correctOption: "D",
    whatIsAsking: "Identify the thermometric physical property that varies with temperature to operate a liquid-in-glass thermometer.",
    givenInfo: [
      "Liquid-in-glass thermometer."
    ],
    toFind: "The physical property of the liquid that changes with temperature.",
    physicsConcepts: `A thermometric property is any physical quantity that varies continuously and linearly with temperature.
In a liquid-in-glass thermometer, the liquid in the bulb expands as its temperature rises; its volume increases. Because the volume increases inside a rigid bulb, excess liquid is forced up the narrow capillary bore.
The mass remains constant, specific heat capacity is practically constant, and the overall outer length of the glass thermometer does not meaningfully change.`,
    equations: `V(T) = V_0 (1 + \\gamma \\Delta T) \\implies \\text{Volume of liquid increases}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Evaluate Options",
        body: "A: Length of the thermometer itself is fixed glass. (The liquid thread changes length, but that is caused by volume expansion).\nB: Mass of liquid is conserved.\nC: Specific heat capacity is an intrinsic constant.\nD: Volume of the liquid increases upon heating, forcing liquid up the stem."
      },
      {
        step: 2,
        title: "Conclusion",
        body: "The underlying thermometric property is the volume of the liquid (Option D)."
      }
    ],
    finalAnswer: "D (volume of the liquid)",
    reasonablenessCheck: "Liquid expansion is volumetric; the narrow tube converts volume change into visible length change.",
    commonMistakes: [
      "Selecting A (length of thermometer), confusing the overall glass thermometer with the liquid thread.",
      "Selecting mass."
    ],
    takeaway: "The thermometric property of a liquid-in-glass thermometer is the volume of the liquid.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 50 },
      controls: [
        { id: "tempC", name: "Temperature", min: 0, max: 100, step: 10, default: 50, unit: "°C" }
      ],
      readouts: [
        { label: "Liquid Mass", expr: () => "CONSTANT" },
        { label: "Liquid Volume", expr: (p) => (1.0 + p.tempC * 0.00018).toFixed(4) + " cm³ (Expands)" }
      ],
      explanation: "Liquid volume expands with temperature, pushing the thread along the capillary bore."
    }
  },
  {
    globalId: "Q080",
    examId: "Q01987",
    paperRef: "5054/11/M/J/24 Q19",
    pdfPage: 42,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Boiling at Constant Temperature",
    paperType: "mcq",
    marks: 1,
    questionText: `Boiling and evaporation are different processes.

Which statement is correct?

A Boiling only occurs at the surface of a liquid.
B Evaporation only occurs when the temperature of the liquid is high enough.
C Evaporation does not change the temperature of a liquid.
D When a boiling liquid is heated its temperature remains constant.`,
    options: [
      { key: "A", text: "Boiling only occurs at the surface of a liquid." },
      { key: "B", text: "Evaporation only occurs when the temperature of the liquid is high enough." },
      { key: "C", text: "Evaporation does not change the temperature of a liquid." },
      { key: "D", text: "When a boiling liquid is heated its temperature remains constant." }
    ],
    correctOption: "D",
    whatIsAsking: "Identify the correct scientific statement distinguishing boiling from evaporation.",
    givenInfo: [
      "Processes of boiling and evaporation."
    ],
    toFind: "The accurate statement.",
    physicsConcepts: `During boiling, liquid converts to vapor throughout the whole bulk of the liquid at its boiling point. Even when continuous thermal energy is supplied, the temperature of the boiling liquid remains constant because all added energy is used as latent heat of vaporisation to overcome intermolecular bonds.`,
    equations: `Q = m L_v \\quad (\\Delta T = 0 \\text{ during boiling})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Evaluate Statement A",
        body: "Boiling occurs throughout the liquid, not just at the surface. False."
      },
      {
        step: 2,
        title: "Evaluate Statement B",
        body: "Evaporation occurs at any temperature (even in cold conditions). False."
      },
      {
        step: 3,
        title: "Evaluate Statement C",
        body: "Evaporation cools the liquid by removing high-energy molecules. False."
      },
      {
        step: 4,
        title: "Evaluate Statement D",
        body: "While a liquid boils, added thermal energy goes into latent heat of vaporisation without raising temperature. Temperature remains constant. True."
      }
    ],
    finalAnswer: "D (When a boiling liquid is heated its temperature remains constant.)",
    reasonablenessCheck: "A pot of vigorously boiling water on high heat stays at 100 °C until all water has boiled away.",
    commonMistakes: [
      "Believing turning the stove up makes boiling water hotter than 100 °C.",
      "Thinking evaporation only happens when warm."
    ],
    takeaway: "While a liquid is boiling, its temperature remains constant even as heating continues.",
    simulation: {
      type: "heating_curve",
      defaultParams: { tempC: 100 },
      controls: [],
      readouts: [
        { label: "Boiling Temperature", expr: () => "100.0 °C" },
        { label: "Thermometer Reading", expr: () => "CONSTANT (Does not rise)" }
      ],
      explanation: "Continued heating during boiling drives vaporisation while temperature stays pinned at 100 °C."
    }
  },
  {
    globalId: "Q081",
    examId: "Q01505",
    paperRef: "5054/12/M/J/24 Q21",
    pdfPage: 42,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Definition of Specific Heat Capacity",
    paperType: "mcq",
    marks: 1,
    questionText: `What is the specific heat capacity of a liquid?

A the difference between the boiling temperature and the melting temperature of the liquid
B the energy required to change the state of 1 kg of the liquid
C the energy required to heat 1 kg of the liquid through 1 °C
D the increase in temperature of the liquid when it is heated`,
    options: [
      { key: "A", text: "the difference between boiling and melting temperature" },
      { key: "B", text: "the energy required to change the state of 1 kg of the liquid" },
      { key: "C", text: "the energy required to heat 1 kg of the liquid through 1 °C" },
      { key: "D", text: "the increase in temperature of the liquid when it is heated" }
    ],
    correctOption: "C",
    whatIsAsking: "Select the precise definition of specific heat capacity.",
    givenInfo: ["Quantity: Specific heat capacity of a liquid."],
    toFind: "The correct definition.",
    physicsConcepts: `Specific heat capacity c is defined as the thermal energy required to raise the temperature of 1.0 kg of a substance by 1.0 °C (or 1 K).
Formula: c = E / (m * Delta T). Unit: J/(kg °C).
Option B describes specific latent heat; Option A is the liquid temperature range.`,
    equations: `c = \\frac{E}{m \\Delta T}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Option C",
        body: "Option C incorporates both unit mass (1 kg) and unit temperature rise (1 °C): 'the energy required to heat 1 kg of the liquid through 1 °C'. This is the standard definition."
      },
      {
        step: 2,
        title: "Rule Out Distractors",
        body: "A is a temperature difference. B is specific latent heat. D is a temperature rise."
      }
    ],
    finalAnswer: "C (the energy required to heat 1 kg of the liquid through 1 °C)",
    reasonablenessCheck: "The unit J/(kg °C) matches energy (J) per mass (kg) per temperature (°C).",
    commonMistakes: [
      "Selecting B, which is specific latent heat.",
      "Omitting 1 kg and confusing it with thermal capacity."
    ],
    takeaway: "Specific heat capacity is the energy required to raise the temperature of 1 kg of a substance by 1 °C.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 1.0, tempC: 1.0 },
      controls: [],
      readouts: [
        { label: "Target Mass", expr: () => "1.0 kg" },
        { label: "Temperature Rise", expr: () => "1.0 °C" },
        { label: "Energy Required", expr: () => "c (Joules)" }
      ],
      explanation: "Specific heat capacity is the energy required to warm exactly 1 kg through 1 °C."
    }
  },
  {
    globalId: "Q082",
    examId: "Q01282",
    paperRef: "5054/11/O/N/24 Q23",
    pdfPage: 43,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Identifying Latent Heat Absorption from Heating Curve",
    paperType: "mcq",
    marks: 1,
    questionText: `Thermal energy is supplied at a constant rate to a fixed mass of a substance that is initially solid.
The graph shows how the temperature of the fixed mass varies with time:
- Initial upward slope (solid warming)
- Section W: horizontal line
- Upward slope (liquid warming)
- Section Y: horizontal line
- Upward slope (gas warming)

In which sections of the graph does the substance absorb latent heat?

A W and X
B W and Y
C X and Z
D Y and Z`,
    options: [
      { key: "A", text: "W and X" },
      { key: "B", text: "W and Y" },
      { key: "C", text: "X and Z" },
      { key: "D", text: "Y and Z" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the sections of the heating graph where the substance absorbs latent heat.",
    givenInfo: [
      "Substance starts as solid and is heated steadily.",
      "W is the first horizontal section (melting).",
      "Y is the second horizontal section (boiling)."
    ],
    toFind: "Sections where latent heat is absorbed.",
    physicsConcepts: `Latent heat is absorbed during changes of state. During these phase changes, supplied energy breaks intermolecular bonds at constant temperature, producing horizontal plateaus on a temperature-time graph:
- Section W: Melting (solid to liquid) absorbing latent heat of fusion.
- Section Y: Boiling (liquid to gas) absorbing latent heat of vaporisation.`,
    equations: `\\text{Latent heat absorption} \\iff \\frac{\\Delta T}{\\Delta t} = 0 \\implies \\text{Plateaus W and Y}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Phase Change Sections",
        body: "The substance absorbs latent heat during changes of state, where temperature remains constant. These correspond to the horizontal plateaus W (melting) and Y (boiling)."
      },
      {
        step: 2,
        title: "Match Option",
        body: "W and Y corresponds to Option B."
      }
    ],
    finalAnswer: "B (W and Y)",
    reasonablenessCheck: "Latent heat is absorbed without temperature increase, corresponding directly to the horizontal segments.",
    commonMistakes: [
      "Selecting the sloping sections where temperature is increasing.",
      "Confusing latent heat with sensible heat."
    ],
    takeaway: "Latent heat is absorbed during the flat horizontal plateaus (melting and boiling).",
    simulation: {
      type: "heating_curve",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Section W", expr: () => "Melting Plateau (Latent Heat of Fusion)" },
        { label: "Section Y", expr: () => "Boiling Plateau (Latent Heat of Vaporisation)" }
      ],
      explanation: "Plateaus W and Y show latent heat absorption at constant temperature."
    }
  },
  {
    globalId: "Q083",
    examId: "Q01406",
    paperRef: "5054/11/M/J/25 Q15",
    pdfPage: 43,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Experimental Apparatus for Specific Heat Capacity",
    paperType: "mcq",
    marks: 1,
    questionText: `A student determines the specific heat capacity of a metal by carrying out an experiment.
The list shows the apparatus that the student has available:
1 electronic balance
2 ruler
3 thermometer
4 heater operating at a power of 50 W
5 stopwatch
6 ammeter
7 voltmeter

Which apparatus does the student use?

A 1, 3, 4 and 5
B 1, 3, 6 and 7
C 2, 3, 4 and 6
D 3, 4, 5, 6 and 7`,
    options: [
      { key: "A", text: "1, 3, 4 and 5" },
      { key: "B", text: "1, 3, 6 and 7" },
      { key: "C", text: "2, 3, 4 and 6" },
      { key: "D", text: "3, 4, 5, 6 and 7" }
    ],
    correctOption: "A",
    whatIsAsking: "Select the minimum necessary set of apparatus required to determine the specific heat capacity of a metal block.",
    givenInfo: [
      "Heater has a known fixed power P = 50 W.",
      "List of laboratory equipment (1 to 7)."
    ],
    toFind: "The correct combination of instruments.",
    physicsConcepts: `To calculate specific heat capacity:
c = E / (m * Delta T) = (P * t) / (m * Delta T).
Required measurements:
- Mass m: measured using electronic balance (1).
- Initial and final temperature (Delta T): measured using thermometer (3).
- Heater with known power P = 50 W (4).
- Time t: measured using stopwatch (5).
Because the heater power is already known (50 W), an ammeter and voltmeter are not required. A ruler is irrelevant.`,
    equations: `c = \\frac{P \\cdot t}{m \\cdot \\Delta T}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Required Physical Quantities",
        body: "To find c, the student needs mass m, temperature change Delta T, and thermal energy E supplied."
      },
      {
        step: 2,
        title: "Match Instruments to Quantities",
        body: "Mass m -> 1 (electronic balance)\nTemperature change Delta T -> 3 (thermometer)\nHeater of known power (50 W) -> 4\nHeating time t -> 5 (stopwatch), giving E = P * t."
      },
      {
        step: 3,
        title: "Confirm Redundant Equipment",
        body: "Since heater power is given as 50 W, voltmeter (7) and ammeter (6) are not needed. Balance (1) cannot be omitted."
      },
      {
        step: 4,
        title: "Select Option",
        body: "1, 3, 4 and 5 corresponds to Option A."
      }
    ],
    finalAnswer: "A (1, 3, 4 and 5)",
    reasonablenessCheck: "Knowing power directly (50 W) and timing with a stopwatch gives energy E = Pt. Measuring mass and temperature change provides all variables for c = E/(m Delta T).",
    commonMistakes: [
      "Selecting B or D, thinking electrical meters are required even though heater power is already stated.",
      "Omitting the balance (mass cannot be determined without it)."
    ],
    takeaway: "When heater power is known, specific heat capacity requires a balance (m), thermometer (ΔT), and stopwatch (t).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { powerW: 50, massKg: 1.0, timeS: 300 },
      controls: [
        { id: "timeS", name: "Stopwatch Time (5)", min: 60, max: 600, step: 30, default: 300, unit: "s" },
        { id: "massKg", name: "Balance Mass (1)", min: 0.5, max: 2.0, step: 0.1, default: 1.0, unit: "kg" }
      ],
      readouts: [
        { label: "Energy E = Pt", expr: (p) => (p.powerW * p.timeS) + " J" },
        { label: "Apparatus Set", expr: () => "Balance, Thermometer, Heater, Stopwatch" }
      ],
      explanation: "Apparatus 1, 3, 4, and 5 measure all variables needed for c = (P * t) / (m * Delta T)."
    }
  },
  {
    globalId: "Q084",
    examId: "Q00834",
    paperRef: "5054/11/M/J/26 Q18",
    pdfPage: 44,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Cooking Oil Specific Heat from Heating Graph",
    paperType: "mcq",
    marks: 1,
    questionText: `Cooking oil of mass 0.25 kg is heated using a heater of power 50 W.
The graph shows how the temperature of the cooking oil changes with time:
- At t = 0 min, temperature = 20 °C
- At t = 4.0 min, temperature = 60 °C
Thermal energy transfer from the oil to the surroundings is negligible.

What is the specific heat capacity of the cooking oil?

A 20 J/(kg °C)
B 30 J/(kg °C)
C 1200 J/(kg °C)
D 1800 J/(kg °C)`,
    options: [
      { key: "A", text: "20 J/(kg °C)" },
      { key: "B", text: "30 J/(kg °C)" },
      { key: "C", text: "1200 J/(kg °C)" },
      { key: "D", text: "1800 J/(kg °C)" }
    ],
    correctOption: "C",
    whatIsAsking: "Calculate the specific heat capacity of cooking oil from a heating graph.",
    givenInfo: [
      "Mass of oil m = 0.25 kg",
      "Power of heater P = 50 W",
      "Time t = 4.0 minutes = 4.0 * 60 = 240 s",
      "Initial temperature = 20 °C",
      "Final temperature at 4.0 min = 60 °C",
      "Temperature rise Delta T = 60 - 20 = 40 °C"
    ],
    toFind: "Specific heat capacity c in J/(kg °C).",
    physicsConcepts: `Energy supplied by electric heater:
E = P * t (with time in seconds).
Sensible heat equation:
E = m * c * Delta T -> c = E / (m * Delta T).`,
    equations: `E = 50 \\times (4.0 \\times 60) = 12\\,000 \\text{ J}; \\quad c = \\frac{12\\,000}{0.25 \\times 40} = 1200 \\text{ J/(kg }^\\circ\\text{C)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Energy Supplied",
        body: "t = 4.0 min * 60 s/min = 240 s.\nE = P * t = 50 W * 240 s = 12 000 J."
      },
      {
        step: 2,
        title: "Determine Temperature Rise",
        body: "Delta T = 60 °C - 20 °C = 40 °C."
      },
      {
        step: 3,
        title: "Calculate Specific Heat Capacity",
        body: "c = E / (m * Delta T) = 12 000 / (0.25 kg * 40 °C) = 12 000 / 10 = 1200 J/(kg °C)."
      },
      {
        step: 4,
        title: "Match Option",
        body: "1200 J/(kg °C) corresponds to Option C."
      }
    ],
    finalAnswer: "C (1200 J/(kg °C))",
    reasonablenessCheck: "Organic cooking oils typically have specific heat capacities between 1200 and 2000 J/(kg °C), consistent with this calculation.",
    commonMistakes: [
      "Using minutes instead of seconds (using t = 4 min gives c = 20 J/(kg °C), Option A).",
      "Using final temperature 60 °C instead of temperature rise 40 °C."
    ],
    takeaway: "Always convert time from minutes to seconds before calculating E = Pt.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { powerW: 50, massKg: 0.25, timeS: 240 },
      controls: [
        { id: "powerW", name: "Heater Power", min: 25, max: 100, step: 25, default: 50, unit: "W" },
        { id: "timeS", name: "Heating Time", min: 60, max: 360, step: 60, default: 240, unit: "s" }
      ],
      readouts: [
        { label: "Energy Input", expr: (p) => (p.powerW * p.timeS) + " J" },
        { label: "Calculated c", expr: (p) => ((p.powerW * p.timeS) / (0.25 * 40)).toFixed(0) + " J/(kg °C)" }
      ],
      explanation: "Heating with 50 W for 240 s provides 12 000 J, warming 0.25 kg of oil by 40 °C (c = 1200 J/(kg °C))."
    }
  },
  {
    globalId: "Q085",
    examId: "Q00422",
    paperRef: "5054/12/M/J/26 Q19",
    pdfPage: 44,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Cooling Curve Solidification Point",
    paperType: "mcq",
    marks: 1,
    questionText: `A sample of liquid at 100 °C is allowed to cool to a room temperature of 20 °C.
The diagram shows how the temperature changes with time during the cooling process:
- Cooling from 100 °C down to the horizontal plateau at time A
- Horizontal plateau extends from time A to time C, with midpoint B
- Further cooling from time C down to room temperature at time D

At which time does the sample become completely solid?

A time A
B time B
C time C
D time D`,
    options: [
      { key: "A", text: "time A" },
      { key: "B", text: "time B" },
      { key: "C", text: "time C" },
      { key: "D", text: "time D" }
    ],
    correctOption: "C",
    whatIsAsking: "Determine the exact time marker on the cooling curve when the substance finishes solidifying and becomes completely solid.",
    givenInfo: [
      "Liquid cools to freezing plateau starting at time A.",
      "Freezing continues at constant temperature from A to C.",
      "Solid cools towards 20 °C from C to D."
    ],
    toFind: "Time when the sample becomes completely solid.",
    physicsConcepts: `On a cooling curve for a pure substance:
- Prior to time A: Liquid cooling.
- At time A: Freezing begins (first crystals form).
- Between A and C: Mixture of liquid and solid in equilibrium at the freezing point.
- At time C: Solidification is complete; the last liquid freezes into solid.
- Between C and D: Solid cooling towards room temperature.
Therefore, the sample becomes completely solid at time C.`,
    equations: `\\text{Freezing starts at } t_A, \\quad \\text{Freezing finishes (completely solid) at } t_C`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Section from A to C",
        body: "The horizontal line represents the change of state from liquid to solid. At time A, freezing begins. Between A and C, latent heat of fusion is released as liquid turns into solid. At midpoint B, the substance is half liquid and half solid."
      },
      {
        step: 2,
        title: "Identify Time of Complete Solidification",
        body: "At time C, the flat plateau ends. All liquid has solidified into solid wax/metal. From time C onwards, the solid cools towards room temperature."
      },
      {
        step: 3,
        title: "Select Matching Option",
        body: "The sample becomes completely solid at time C (Option C)."
      }
    ],
    finalAnswer: "C (time C)",
    reasonablenessCheck: "Freezing begins at A and ends at C. Below C, only solid exists.",
    commonMistakes: [
      "Selecting A (where freezing begins, so it is still mostly liquid).",
      "Selecting B (where it is half liquid and half solid).",
      "Selecting D (where it reaches room temperature)."
    ],
    takeaway: "Freezing starts at the beginning of the plateau and finishes (completely solid) at the end of the plateau.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { timeMarker: "C" },
      controls: [],
      readouts: [
        { label: "At Time A", expr: () => "Freezing Starts (100% Liquid)" },
        { label: "At Time B", expr: () => "50% Liquid, 50% Solid" },
        { label: "At Time C", expr: () => "COMPLETELY SOLID (100% Solid)" }
      ],
      explanation: "Tracing the cooling curve confirms the sample is completely solid at the end of the flat plateau (time C)."
    }
  }
];