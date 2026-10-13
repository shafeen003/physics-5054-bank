/**
 * Master Question Store: Batch 5 (Q061 to Q075)
 * Section 2.2: Thermal Properties and Temperature (MCQs Part 2)
 */

const QUESTIONS_BATCH_5 = [
  {
    globalId: "Q061",
    examId: "Q00245",
    paperRef: "5054/12/M/J/20 Q18",
    pdfPage: 58,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermal Capacity vs Specific Heat Capacity",
    paperType: "mcq",
    marks: 1,
    questionText: `Which statement correctly defines the thermal capacity (heat capacity) of an object?

A the thermal energy required to melt 1 kg of the object without a change in temperature
B the thermal energy required to raise the temperature of the whole object by 1 °C
C the thermal energy required to raise the temperature of 1 kg of the object by 1 °C
D the total kinetic energy of all the molecules contained inside the object`,
    options: [
      { key: "A", text: "the thermal energy required to melt 1 kg of the object without a change in temperature" },
      { key: "B", text: "the thermal energy required to raise the temperature of the whole object by 1 °C" },
      { key: "C", text: "the thermal energy required to raise the temperature of 1 kg of the object by 1 °C" },
      { key: "D", text: "the total kinetic energy of all the molecules contained inside the object" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the precise physics definition of thermal capacity (heat capacity) of an entire object.",
    givenInfo: [
      "Concept: Thermal capacity (heat capacity) C."
    ],
    toFind: "The accurate definition among the options.",
    physicsConcepts: `Thermal capacity vs Specific heat capacity:
1. Thermal capacity (heat capacity, $C$): The amount of thermal energy required to raise the temperature of the whole object (regardless of mass) by 1 °C (or 1 K).
$$C = \\frac{\\Delta Q}{\\Delta \\theta} = m c$$
Units: $\\text{J}/^\\circ\\text{C}$ or $\\text{J}/\\text{K}$.
2. Specific heat capacity ($c$): The thermal energy required per unit mass to raise the temperature of 1 kg of the substance by 1 °C.
$$c = \\frac{\\Delta Q}{m \\Delta \\theta}$$
Units: $\\text{J}/(\\text{kg }^\\circ\\text{C})$.
3. Option A defines specific latent heat of fusion. Option D defines thermal internal energy.`,
    equations: `C = \\frac{\\Delta Q}{\\Delta \\theta} \\quad [\\text{J}/^\\circ\\text{C}]; \\quad c = \\frac{C}{m} = \\frac{\\Delta Q}{m \\Delta \\theta} \\quad [\\text{J}/(\\text{kg }^\\circ\\text{C})]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Differentiate Capacity and Specific Capacity",
        body: "The word 'specific' in physics denotes 'per unit mass' (per kg). Without the word 'specific', thermal capacity refers to the entire object as a whole."
      },
      {
        step: 2,
        title: "Evaluate Definitions",
        body: "Option C defines specific heat capacity (specifying 1 kg). Option B defines the thermal capacity of the whole object."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Option B: the thermal energy required to raise the temperature of the whole object by 1 °C."
      }
    ],
    finalAnswer: "B (the thermal energy required to raise the temperature of the whole object by 1 °C)",
    reasonablenessCheck: "A bathtub of water has a larger thermal capacity than a teacup of water, although both share the same specific heat capacity ($4200\\text{ J}/(\\text{kg }^\\circ\\text{C})$).",
    commonMistakes: [
      "Selecting Option C: confusing thermal capacity with specific heat capacity.",
      "Selecting Option A: confusing thermal capacity with latent heat."
    ],
    takeaway: "Thermal capacity is for the whole object (J/°C); specific heat capacity is per unit mass (J/(kg °C)).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 5, cValue: 4200 },
      controls: [],
      readouts: [
        { label: "Specific Capacity c", expr: () => "4200 J/(kg °C) (Property of substance)" },
        { label: "Thermal Capacity C", expr: () => "21,000 J/°C (Entire 5 kg object)" }
      ],
      explanation: "Thermal capacity scales with mass (C = mc), measuring the energy required to raise the whole object's temperature by 1 °C."
    }
  },
  {
    globalId: "Q062",
    examId: "Q00246",
    paperRef: "5054/11/O/N/20 Q19",
    pdfPage: 58,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Specific Heat Capacity Units and Formula",
    paperType: "mcq",
    marks: 1,
    questionText: `Which expression represents the specific heat capacity c of a substance of mass m when thermal energy ΔQ causes a temperature change Δθ, and what is its SI unit?

| | formula for c | SI unit of c |
|---|---|---|
| A | c = ΔQ / (m × Δθ) | J / (kg °C) |
| B | c = (m × Δθ) / ΔQ | J / (kg °C) |
| C | c = ΔQ / (m × Δθ) | J / °C |
| D | c = (ΔQ × m) / Δθ | J kg / °C |`,
    options: [
      { key: "A", text: "formula: c = ΔQ / (m × Δθ) | unit: J / (kg °C)" },
      { key: "B", text: "formula: c = (m × Δθ) / ΔQ | unit: J / (kg °C)" },
      { key: "C", text: "formula: c = ΔQ / (m × Δθ) | unit: J / °C" },
      { key: "D", text: "formula: c = (ΔQ × m) / Δθ | unit: J kg / °C" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the defining formula and corresponding SI unit for specific heat capacity c.",
    givenInfo: [
      "Thermal energy supplied = ΔQ.",
      "Mass = m.",
      "Temperature change = Δθ."
    ],
    toFind: "Algebraic formula and unit of specific heat capacity.",
    physicsConcepts: `Defining formula of specific heat capacity:
$$\\Delta Q = m c \\Delta \\theta \\implies c = \\frac{\\Delta Q}{m \\Delta \\theta}$$
Dimensional unit analysis:
$$\\text{Unit of } c = \\frac{\\text{Unit of } \\Delta Q}{(\\text{Unit of } m) \\times (\\text{Unit of } \\Delta \\theta)} = \\frac{\\text{J}}{\\text{kg }^\\circ\\text{C}} \\quad (\\text{or } \\text{J kg}^{-1}\\text{ K}^{-1})$$`,
    equations: `c = \\frac{\\Delta Q}{m \\Delta \\theta} \\quad [\\text{J}/(\\text{kg }^\\circ\\text{C})]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Rearrange Fundamental Heat Formula",
        body: "Start from ΔQ = mcΔθ. Divide both sides by (m * Δθ) to isolate c: c = ΔQ / (m * Δθ)."
      },
      {
        step: 2,
        title: "Determine Unit",
        body: "ΔQ is in Joules (J), m is in kilograms (kg), and Δθ is in degrees Celsius (°C) or Kelvin (K). The unit is J / (kg °C)."
      },
      {
        step: 3,
        title: "Match Row",
        body: "Row A correctly matches both the rearranged equation and the unit."
      }
    ],
    finalAnswer: "A (formula: c = ΔQ / (m × Δθ) | unit: J / (kg °C))",
    reasonablenessCheck: "Specific heat capacity indicates Joules required per kilogram per degree: J / (kg °C).",
    commonMistakes: [
      "Selecting Row C: J / °C is the unit for thermal capacity (C), missing mass in the denominator.",
      "Inverting the fraction to get (mΔθ) / ΔQ."
    ],
    takeaway: "c = ΔQ / (mΔθ), measured in J / (kg °C) or J / (kg K).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Formula", expr: () => "c = ΔQ / (m · Δθ)" },
        { label: "SI Unit", expr: () => "J / (kg °C) or J / (kg K)" }
      ],
      explanation: "Dividing thermal energy by mass and temperature rise gives specific heat capacity in J/(kg °C)."
    }
  },
  {
    globalId: "Q063",
    examId: "Q00247",
    paperRef: "5054/12/O/N/20 Q20",
    pdfPage: 58,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Sensible Heat Calculation for Water Heating",
    paperType: "mcq",
    marks: 1,
    questionText: `An electric heater supplies thermal energy to 2.0 kg of water.
The temperature of the water rises from 20 °C to 50 °C.
The specific heat capacity of water is 4200 J / (kg °C).
How much thermal energy is absorbed by the water?

A 60 kJ
B 126 kJ
C 252 kJ
D 420 kJ`,
    options: [
      { key: "A", text: "60 kJ" },
      { key: "B", text: "126 kJ" },
      { key: "C", text: "252 kJ" },
      { key: "D", text: "420 kJ" }
    ],
    correctOption: "C",
    whatIsAsking: "Calculate total thermal energy absorbed by water using mass, temperature rise, and specific heat capacity.",
    givenInfo: [
      "Mass of water m = 2.0 kg",
      "Initial temperature θ_1 = 20 °C",
      "Final temperature θ_2 = 50 °C",
      "Specific heat capacity c = 4200 J / (kg °C)"
    ],
    toFind: "Thermal energy ΔQ in kJ.",
    physicsConcepts: `Sensible thermal energy formula:
$$\\Delta Q = m c \\Delta \\theta$$
where:
$$\\Delta \\theta = \\theta_2 - \\theta_1 = 50^\\circ\\text{C} - 20^\\circ\\text{C} = 30^\\circ\\text{C}$$`,
    equations: `\\Delta \\theta = 50 - 20 = 30^\\circ\\text{C}; \\quad \\Delta Q = 2.0 \\times 4200 \\times 30 = 252\\,000 \\text{ J} = 252 \\text{ kJ}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Temperature Change",
        body: "Δθ = 50 °C - 20 °C = 30 °C."
      },
      {
        step: 2,
        title: "Substitute into Formula",
        body: "ΔQ = m * c * Δθ = 2.0 kg * 4200 J/(kg °C) * 30 °C."
      },
      {
        step: 3,
        title: "Calculate Value in Joules and Kilojoules",
        body: "ΔQ = 252 000 J = 252 kJ."
      }
    ],
    finalAnswer: "C (252 kJ)",
    reasonablenessCheck: "Heating 1 kg by 30 °C takes 126 kJ; heating 2 kg takes twice that: 252 kJ.",
    commonMistakes: [
      "Using the final temperature 50 °C instead of the temperature change 30 °C (giving 420 kJ, Option D).",
      "Forgetting to multiply by mass (giving 126 kJ, Option B)."
    ],
    takeaway: "ΔQ = mcΔθ; always compute temperature change Δθ = (θ_final - θ_initial) before multiplying.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 2.0, tempC: 30 },
      controls: [
        { id: "tempC", name: "Temperature Rise", min: 10, max: 60, step: 5, default: 30, unit: "°C" }
      ],
      readouts: [
        { label: "Energy Required", expr: (p) => (2.0 * 4200 * p.tempC / 1000).toFixed(0) + " kJ" }
      ],
      explanation: "Heating 2.0 kg of water by 30 °C requires 252 kJ of thermal energy."
    }
  },
  {
    globalId: "Q064",
    examId: "Q00248",
    paperRef: "5054/11/M/J/21 Q17",
    pdfPage: 59,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Comparing Temperature Rise for Equal Heat Input",
    paperType: "mcq",
    marks: 1,
    questionText: `Two beakers contain equal masses of two different liquids, X and Y.
The specific heat capacity of liquid X is 2000 J / (kg °C) and the specific heat capacity of liquid Y is 4000 J / (kg °C).
Both liquids are heated at the same constant rate for 5 minutes.
No change of state occurs, and thermal losses are negligible.
Which statement describes the temperature increase of liquid X compared to liquid Y?

A Liquid X has twice the temperature increase of liquid Y.
B Liquid X has half the temperature increase of liquid Y.
C Liquid X has four times the temperature increase of liquid Y.
D Both liquids have identical temperature increases.`,
    options: [
      { key: "A", text: "Liquid X has twice the temperature increase of liquid Y." },
      { key: "B", text: "Liquid X has half the temperature increase of liquid Y." },
      { key: "C", text: "Liquid X has four times the temperature increase of liquid Y." },
      { key: "D", text: "Both liquids have identical temperature increases." }
    ],
    correctOption: "A",
    whatIsAsking: "Compare temperature increases for two equal masses receiving equal thermal energy with different specific heat capacities.",
    givenInfo: [
      "Equal masses: m_X = m_Y.",
      "Equal thermal energy supplied: ΔQ_X = ΔQ_Y (same heating rate and time).",
      "c_X = 2000 J / (kg °C); c_Y = 4000 J / (kg °C)."
    ],
    toFind: "Ratio of temperature increases Δθ_X / Δθ_Y.",
    physicsConcepts: `Temperature rise dependence on specific heat capacity:
$$\\Delta Q = m c \\Delta \\theta \\implies \\Delta \\theta = \\frac{\\Delta Q}{m c}$$
For equal mass $m$ and equal energy input $\\Delta Q$:
$$\\Delta \\theta \\propto \\frac{1}{c}$$
Ratio of temperature changes:
$$\\frac{\\Delta \\theta_X}{\\Delta \\theta_Y} = \\frac{c_Y}{c_X} = \\frac{4000}{2000} = 2$$
The liquid with half the specific heat capacity experiences twice the temperature increase.`,
    equations: `\\Delta \\theta_X = \\frac{\\Delta Q}{m \\times 2000}; \\quad \\Delta \\theta_Y = \\frac{\\Delta Q}{m \\times 4000} \\implies \\Delta \\theta_X = 2 \\times \\Delta \\theta_Y`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Temperature Rise to Specific Heat Capacity",
        body: "Δθ = ΔQ / (mc). Because ΔQ and m are identical, temperature rise Δθ is inversely proportional to specific heat capacity c."
      },
      {
        step: 2,
        title: "Evaluate Ratio",
        body: "Liquid X has half the specific heat capacity of liquid Y (2000 vs 4000). Therefore, it requires half as much energy per degree, resulting in twice the temperature rise."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Option A: Liquid X has twice the temperature increase of liquid Y."
      }
    ],
    finalAnswer: "A (Liquid X has twice the temperature increase of liquid Y.)",
    reasonablenessCheck: "Substances with lower specific heat capacities heat up and cool down faster; half the capacity yields double the temperature change.",
    commonMistakes: [
      "Selecting Option B: directly correlating c with Δθ instead of recognizing the inverse relationship.",
      "Thinking equal energy input produces equal temperature changes regardless of substance."
    ],
    takeaway: "For equal mass and heat input, temperature rise is inversely proportional to specific heat capacity: Δθ ∝ 1/c.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { cX: 2000, cY: 4000 },
      controls: [],
      readouts: [
        { label: "Liquid X Rise", expr: () => "20 °C (c = 2000)" },
        { label: "Liquid Y Rise", expr: () => "10 °C (c = 4000)" }
      ],
      explanation: "Liquid X has half the specific heat capacity of Y, so it achieves twice the temperature rise for the same energy input."
    }
  },
  {
    globalId: "Q065",
    examId: "Q00249",
    paperRef: "5054/12/M/J/21 Q18",
    pdfPage: 59,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Electrical Immersion Heater Temperature Rise",
    paperType: "mcq",
    marks: 1,
    questionText: `A 500 W electric immersion heater is switched on for 120 s to heat 0.80 kg of oil.
The temperature of the oil rises by 35 °C.
Assuming no thermal energy is lost to the surroundings or container, what is the specific heat capacity of the oil?

A 460 J / (kg °C)
B 1470 J / (kg °C)
C 2140 J / (kg °C)
D 3200 J / (kg °C)`,
    options: [
      { key: "A", text: "460 J / (kg °C)" },
      { key: "B", text: "1470 J / (kg °C)" },
      { key: "C", text: "2140 J / (kg °C)" },
      { key: "D", text: "3200 J / (kg °C)" }
    ],
    correctOption: "C",
    whatIsAsking: "Calculate specific heat capacity of oil using electric power, time, mass, and temperature rise.",
    givenInfo: [
      "Power P = 500 W",
      "Time t = 120 s",
      "Mass of oil m = 0.80 kg",
      "Temperature rise Δθ = 35 °C",
      "100% efficiency (no heat losses)"
    ],
    toFind: "Specific heat capacity c in J / (kg °C).",
    physicsConcepts: `Electrical heating energy conservation:
$$E = P \\times t$$
$$\\Delta Q = m c \\Delta \\theta$$
Equating electrical energy supplied to thermal energy absorbed:
$$P t = m c \\Delta \\theta \\implies c = \\frac{P t}{m \\Delta \\theta}$$`,
    equations: `E = 500 \\times 120 = 60\\,000 \\text{ J}; \\quad c = \\frac{60\\,000}{0.80 \\times 35} = \\frac{60\\,000}{28} = 2142.86 \\text{ J}/(\\text{kg }^\\circ\\text{C})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Electrical Energy Supplied",
        body: "E = P * t = 500 W * 120 s = 60 000 J."
      },
      {
        step: 2,
        title: "Compute Denominator (m * Δθ)",
        body: "m * Δθ = 0.80 kg * 35 °C = 28 kg °C."
      },
      {
        step: 3,
        title: "Calculate Specific Heat Capacity c",
        body: "c = 60 000 J / 28 kg °C = 2142.86 J / (kg °C) ≈ 2140 J / (kg °C)."
      }
    ],
    finalAnswer: "C (2140 J / (kg °C))",
    reasonablenessCheck: "Typical cooking oils have specific heat capacities around 1800–2200 J/(kg °C), half that of water.",
    commonMistakes: [
      "Dividing power by time (500 / 120) instead of multiplying.",
      "Omitting mass from the calculation."
    ],
    takeaway: "For electrical heating: Pt = mcΔθ; c = (Pt) / (mΔθ).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { powerW: 500, timeS: 120, massOilKg: 0.80 },
      controls: [],
      readouts: [
        { label: "Energy Supplied", expr: () => "60,000 J" },
        { label: "Calculated c", expr: () => "2140 J/(kg °C)" }
      ],
      explanation: "A 500 W heater running for 120 s supplies 60 kJ, raising 0.80 kg of oil by 35 °C."
    }
  },
  {
    globalId: "Q066",
    examId: "Q00250",
    paperRef: "5054/11/O/N/21 Q17",
    pdfPage: 60,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermal Energy Calculation for Metal Block",
    paperType: "mcq",
    marks: 1,
    questionText: `An aluminium block of mass 2.5 kg is heated from 15 °C to 75 °C.
The specific heat capacity of aluminium is 900 J / (kg °C).
How much thermal energy is supplied to the block?

A 33.75 kJ
B 135 kJ
C 168.75 kJ
D 202.5 kJ`,
    options: [
      { key: "A", text: "33.75 kJ" },
      { key: "B", text: "135 kJ" },
      { key: "C", text: "168.75 kJ" },
      { key: "D", text: "202.5 kJ" }
    ],
    correctOption: "B",
    whatIsAsking: "Calculate total thermal energy supplied to an aluminium block from mass, temperature rise, and specific heat capacity.",
    givenInfo: [
      "Mass m = 2.5 kg",
      "Initial temperature θ_1 = 15 °C",
      "Final temperature θ_2 = 75 °C",
      "Specific heat capacity of aluminium c = 900 J / (kg °C)"
    ],
    toFind: "Thermal energy ΔQ in kJ.",
    physicsConcepts: `Sensible heat formula:
$$\\Delta Q = m c \\Delta \\theta$$
$$\\Delta \\theta = 75^\\circ\\text{C} - 15^\\circ\\text{C} = 60^\\circ\\text{C}$$`,
    equations: `\\Delta \\theta = 75 - 15 = 60^\\circ\\text{C}; \\quad \\Delta Q = 2.5 \\times 900 \\times 60 = 135\\,000 \\text{ J} = 135 \\text{ kJ}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Temperature Change",
        body: "Δθ = 75 °C - 15 °C = 60 °C."
      },
      {
        step: 2,
        title: "Calculate Energy in Joules",
        body: "ΔQ = 2.5 kg * 900 J/(kg °C) * 60 °C = 135 000 J."
      },
      {
        step: 3,
        title: "Convert to Kilojoules",
        body: "135 000 J / 1000 = 135 kJ."
      }
    ],
    finalAnswer: "B (135 kJ)",
    reasonablenessCheck: "2.5 kg * 900 J/(kg °C) = 2250 J/°C; multiplying by 60 °C gives 135 kJ.",
    commonMistakes: [
      "Using final temperature 75 °C directly: 2.5 * 900 * 75 = 168.75 kJ (Option C).",
      "Using initial temperature 15 °C directly: 2.5 * 900 * 15 = 33.75 kJ (Option A)."
    ],
    takeaway: "Always subtract temperatures to find Δθ before multiplying by mass and specific heat capacity.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 2.5, tempC: 60 },
      controls: [],
      readouts: [
        { label: "Temp Rise Δθ", expr: () => "60 °C" },
        { label: "Thermal Energy", expr: () => "135 kJ" }
      ],
      explanation: "Heating 2.5 kg of aluminium through a 60 °C rise requires 135 kJ of thermal energy."
    }
  },
  {
    globalId: "Q067",
    examId: "Q00251",
    paperRef: "5054/12/O/N/21 Q18",
    pdfPage: 60,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Specific Latent Heat of Fusion Definition",
    paperType: "mcq",
    marks: 1,
    questionText: `Which statement correctly defines the specific latent heat of fusion of a substance?

A the energy required to melt 1 kg of a solid to liquid at its melting point without a change in temperature
B the energy required to raise the temperature of 1 kg of a solid by 1 °C
C the energy required to turn 1 kg of a liquid into gas at its boiling point without a change in temperature
D the energy released when 1 kg of a gas condenses into a liquid at constant temperature`,
    options: [
      { key: "A", text: "the energy required to melt 1 kg of a solid to liquid at its melting point without a change in temperature" },
      { key: "B", text: "the energy required to raise the temperature of 1 kg of a solid by 1 °C" },
      { key: "C", text: "the energy required to turn 1 kg of a liquid into gas at its boiling point without a change in temperature" },
      { key: "D", text: "the energy released when 1 kg of a gas condenses into a liquid at constant temperature" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the precise definition of specific latent heat of fusion.",
    givenInfo: [
      "Concept: Specific latent heat of fusion (L_f)."
    ],
    toFind: "The accurate physical definition.",
    physicsConcepts: `Definitions of latent heat:
1. Specific latent heat of fusion ($L_f$): The thermal energy required per unit mass to change 1 kg of a substance from solid to liquid at its melting point without any change in temperature.
$$L_f = \\frac{\\Delta Q}{m} \\quad [\\text{J/kg}]$$
2. Specific latent heat of vaporisation ($L_v$): Thermal energy required per unit mass to change 1 kg of liquid to gas at its boiling point without temperature change (Option C).
3. Option B defines specific heat capacity of a solid. Option D defines specific latent heat of condensation.`,
    equations: `L_f = \\frac{\\Delta Q}{m} \\quad (T = \\text{constant at melting point})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze 'Fusion'",
        body: "Fusion refers to the solid-liquid phase change (melting)."
      },
      {
        step: 2,
        title: "Analyze 'Specific Latent Heat'",
        body: "'Specific' means per unit mass (1 kg). 'Latent' means hidden energy absorbed without a change in temperature."
      },
      {
        step: 3,
        title: "Match Option",
        body: "Option A correctly states: energy required to melt 1 kg of solid to liquid at melting point without temperature change."
      }
    ],
    finalAnswer: "A (the energy required to melt 1 kg of a solid to liquid at its melting point without a change in temperature)",
    reasonablenessCheck: "Latent heat of fusion applies to melting/freezing; latent heat of vaporisation applies to boiling/condensation.",
    commonMistakes: [
      "Selecting Option C: confusing fusion (melting) with vaporisation (boiling).",
      "Omitting the phrase 'without a change in temperature'."
    ],
    takeaway: "Specific latent heat of fusion is the energy required to melt 1 kg of solid to liquid at constant temperature.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { phase: "fusion" },
      controls: [],
      readouts: [
        { label: "Phase Transition", expr: () => "Solid ➔ Liquid (Melting)" },
        { label: "Temperature Status", expr: () => "Constant at Melting Point" }
      ],
      explanation: "During fusion, absorbed energy breaks lattice bonds to melt 1 kg of solid at constant temperature."
    }
  },
  {
    globalId: "Q068",
    examId: "Q00252",
    paperRef: "5054/11/M/J/22 Q15",
    pdfPage: 61,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Molecular Energy Changes During Melting",
    paperType: "mcq",
    marks: 1,
    questionText: `A solid substance is melting at a constant temperature.
What happens to the kinetic energy and the potential energy of the molecules during melting?

| | average kinetic energy of molecules | potential energy of molecules |
|---|---|---|
| A | increases | increases |
| B | increases | remains constant |
| C | remains constant | increases |
| D | remains constant | decreases |`,
    options: [
      { key: "A", text: "kinetic energy: increases | potential energy: increases" },
      { key: "B", text: "kinetic energy: increases | potential energy: remains constant" },
      { key: "C", text: "kinetic energy: remains constant | potential energy: increases" },
      { key: "D", text: "kinetic energy: remains constant | potential energy: decreases" }
    ],
    correctOption: "C",
    whatIsAsking: "Identify how average molecular kinetic energy and potential energy change during melting at constant temperature.",
    givenInfo: [
      "Phase change: Melting (solid to liquid).",
      "Temperature is constant throughout."
    ],
    toFind: "Changes in average kinetic energy and potential energy.",
    physicsConcepts: `Energy partitioning during phase transitions:
1. Temperature is directly proportional to the average translational/vibrational kinetic energy of the molecules:
$$T \\propto \\overline{E_k}$$
Because temperature remains constant during melting, average molecular kinetic energy remains constant.
2. The thermal energy supplied does work against attractive intermolecular forces to break the regular crystal lattice and separate particles into a disordered liquid state.
3. Doing work against attractive forces increases the intermolecular potential energy ($E_p$).`,
    equations: `T = \\text{constant} \\implies \\Delta E_k = 0; \\quad \\Delta Q > 0 \\implies \\Delta E_p > 0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Evaluate Kinetic Energy",
        body: "Temperature measures average kinetic energy. Because temperature is constant during melting, average kinetic energy remains constant."
      },
      {
        step: 2,
        title: "Evaluate Potential Energy",
        body: "Thermal energy is supplied to break lattice bonds, doing work against intermolecular attractions. This work increases molecular potential energy."
      },
      {
        step: 3,
        title: "Match Row",
        body: "Row C: kinetic energy remains constant | potential energy increases."
      }
    ],
    finalAnswer: "C (kinetic energy: remains constant | potential energy: increases)",
    reasonablenessCheck: "Supplied energy must go somewhere (conservation of energy); since temperature is constant, it increases potential energy.",
    commonMistakes: [
      "Selecting Row A, believing heating always increases kinetic energy.",
      "Selecting Row D, thinking bond breaking decreases potential energy."
    ],
    takeaway: "During melting at constant temperature, kinetic energy remains constant while potential energy increases as bonds break.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { melting: true },
      controls: [],
      readouts: [
        { label: "Average Kinetic Energy", expr: () => "Constant (Constant T)" },
        { label: "Molecular Potential Energy", expr: () => "Increases (Bonds broken)" }
      ],
      explanation: "Supplied heat does work against intermolecular forces, raising potential energy while kinetic energy remains fixed."
    }
  },
  {
    globalId: "Q069",
    examId: "Q00253",
    paperRef: "5054/12/M/J/22 Q18",
    pdfPage: 61,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Ice Melting Calculation Using Latent Heat of Fusion",
    paperType: "mcq",
    marks: 1,
    questionText: `An ice cube of mass 0.040 kg at 0 °C is completely melted into water at 0 °C.
The specific latent heat of fusion of ice is 3.3 × 10⁵ J / kg.
How much thermal energy is absorbed by the ice?

A 8.25 kJ
B 13.2 kJ
C 132 kJ
D 825 kJ`,
    options: [
      { key: "A", text: "8.25 kJ" },
      { key: "B", text: "13.2 kJ" },
      { key: "C", text: "132 kJ" },
      { key: "D", text: "825 kJ" }
    ],
    correctOption: "B",
    whatIsAsking: "Calculate thermal energy required to melt an ice cube of given mass at its melting point.",
    givenInfo: [
      "Mass of ice m = 0.040 kg",
      "Temperature = 0 °C (constant melting point)",
      "Specific latent heat of fusion L_f = 3.3 × 10⁵ J / kg"
    ],
    toFind: "Thermal energy absorbed ΔQ in kJ.",
    physicsConcepts: `Latent heat of fusion formula:
$$\\Delta Q = m L_f$$
Because the temperature remains at 0 °C throughout, no sensible heat ($mc\Delta\theta$) is involved.`,
    equations: `\\Delta Q = m L_f = 0.040 \\times (3.3 \\times 10^5) = 13\\,200 \\text{ J} = 13.2 \\text{ kJ}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Formula",
        body: "Apply ΔQ = m * L_f."
      },
      {
        step: 2,
        title: "Substitute Values",
        body: "ΔQ = 0.040 kg * 330 000 J/kg = 13 200 J."
      },
      {
        step: 3,
        title: "Convert to Kilojoules",
        body: "13 200 J / 1000 = 13.2 kJ."
      }
    ],
    finalAnswer: "B (13.2 kJ)",
    reasonablenessCheck: "Melting 1 kg takes 330 kJ; melting 40 g (0.04 kg) takes 0.04 * 330 = 13.2 kJ.",
    commonMistakes: [
      "Dividing latent heat by mass instead of multiplying (yielding 8.25 kJ, Option A).",
      "Power-of-ten arithmetic errors (132 kJ vs 13.2 kJ)."
    ],
    takeaway: "ΔQ = mL_f for melting at constant temperature; multiply mass in kg by specific latent heat in J/kg.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { massKg: 0.040, Lf: 330000 },
      controls: [],
      readouts: [
        { label: "Mass of Ice", expr: () => "0.040 kg (40 g)" },
        { label: "Energy to Melt", expr: () => "13.2 kJ" }
      ],
      explanation: "Melting 40 g of ice at 0 °C absorbs 13.2 kJ of latent heat of fusion."
    }
  },
  {
    globalId: "Q070",
    examId: "Q00254",
    paperRef: "5054/11/O/N/22 Q16",
    pdfPage: 62,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Why Latent Heat of Vaporisation Exceeds Fusion",
    paperType: "mcq",
    marks: 1,
    questionText: `For equal masses of water, why is the specific latent heat of vaporisation (2.3 × 10⁶ J / kg) much greater than the specific latent heat of fusion (3.3 × 10⁵ J / kg)?

A Boiling takes place at a higher temperature than melting.
B Molecules in steam are much smaller than molecules in ice.
C Molecules must be completely separated against strong intermolecular forces during boiling, but only slide past each other during melting.
D Steam expands to fill its container while ice floats on water.`,
    options: [
      { key: "A", text: "Boiling takes place at a higher temperature than melting." },
      { key: "B", text: "Molecules in steam are much smaller than molecules in ice." },
      { key: "C", text: "Molecules must be completely separated against strong intermolecular forces during boiling, but only slide past each other during melting." },
      { key: "D", text: "Steam expands to fill its container while ice floats on water." }
    ],
    correctOption: "C",
    whatIsAsking: "Explain microscopically why latent heat of vaporisation is roughly 7 times greater than latent heat of fusion for water.",
    givenInfo: [
      "L_v = 2.3 × 10⁶ J / kg (vaporisation)",
      "L_f = 3.3 × 10⁵ J / kg (fusion)"
    ],
    toFind: "Microscopic physical reason for L_v >> L_f.",
    physicsConcepts: `Work done against intermolecular forces across phase transitions:
1. Melting (fusion): Thermal energy only needs to break the rigid crystalline lattice bonds. Molecules remain in close contact in the liquid state, so attractive intermolecular forces are still largely active.
2. Boiling (vaporisation): Molecules must be pulled completely apart from close contact to large separations (roughly 10 times molecular diameter), breaking all intermolecular attractions completely, and work must be done against atmospheric pressure during volume expansion.
3. Therefore, vastly more potential energy work is required to vaporise 1 kg of liquid than to melt 1 kg of solid ($L_v \\gg L_f$).`,
    equations: `W_{\\text{separate completely}} \\gg W_{\\text{disrupt lattice}} \\implies L_v \\gg L_f`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Melting Mechanism",
        body: "During melting, bonds in the solid lattice are loosened, but molecules remain close together and touching in the liquid."
      },
      {
        step: 2,
        title: "Analyze Boiling Mechanism",
        body: "During boiling, molecules must be completely separated against attractive intermolecular forces to form a widely spaced gas, requiring vastly more work."
      },
      {
        step: 3,
        title: "Select Matching Option",
        body: "Option C correctly describes the complete separation of molecules during boiling versus sliding past each other during melting."
      }
    ],
    finalAnswer: "C (Molecules must be completely separated against strong intermolecular forces during boiling, but only slide past each other during melting.)",
    reasonablenessCheck: "Pulling magnets completely apart takes far more energy than sliding them past each other while touching.",
    commonMistakes: [
      "Selecting Option A: boiling temperature is higher, but latent heat is energy per kg at constant temperature, not temperature itself.",
      "Thinking molecules change size during phase transitions."
    ],
    takeaway: "L_v is much greater than L_f because boiling requires completely separating molecules against attractive forces, whereas melting only breaks the rigid lattice.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { compareLfLv: true },
      controls: [],
      readouts: [
        { label: "Latent Heat of Fusion L_f", expr: () => "0.33 MJ/kg (Bonds loosened)" },
        { label: "Latent Heat of Vaporisation L_v", expr: () => "2.30 MJ/kg (All bonds broken, 7x)" }
      ],
      explanation: "Vaporisation requires 7 times more energy than fusion because molecules must be completely pulled apart."
    }
  },
  {
    globalId: "Q071",
    examId: "Q00255",
    paperRef: "5054/12/O/N/22 Q17",
    pdfPage: 62,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Boiling Water Calculation Using Latent Heat of Vaporisation",
    paperType: "mcq",
    marks: 1,
    questionText: `An electric kettle of power rating 2000 W contains water at 100 °C.
The kettle remains switched on for 115 s after boiling begins.
The specific latent heat of vaporisation of water is 2.3 × 10⁶ J / kg.
What mass of water boils away into steam during this time?

A 0.050 kg
B 0.10 kg
C 0.20 kg
D 0.50 kg`,
    options: [
      { key: "A", text: "0.050 kg" },
      { key: "B", text: "0.10 kg" },
      { key: "C", text: "0.20 kg" },
      { key: "D", text: "0.50 kg" }
    ],
    correctOption: "B",
    whatIsAsking: "Calculate mass of water vaporised using electric power, boiling duration, and specific latent heat of vaporisation.",
    givenInfo: [
      "Power P = 2000 W",
      "Time t = 115 s",
      "Water already at 100 °C (no heating required)",
      "Specific latent heat of vaporisation L_v = 2.3 × 10⁶ J / kg"
    ],
    toFind: "Mass of water converted to steam m in kg.",
    physicsConcepts: `Energy conservation during phase change:
$$E = P \\times t$$
$$\\Delta Q = m L_v$$
Equating electrical energy to latent heat absorbed:
$$P t = m L_v \\implies m = \\frac{P t}{L_v}$$`,
    equations: `E = 2000 \\times 115 = 230\\,000 \\text{ J}; \\quad m = \\frac{230\\,000}{2.3 \\times 10^6} = 0.10 \\text{ kg}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Electrical Energy Supplied",
        body: "E = P * t = 2000 W * 115 s = 230 000 J (230 kJ)."
      },
      {
        step: 2,
        title: "Calculate Mass Vaporised",
        body: "m = E / L_v = 230 000 J / (2.3 × 10⁶ J/kg) = 0.10 kg (100 g)."
      }
    ],
    finalAnswer: "B (0.10 kg)",
    reasonablenessCheck: "230 kJ vaporises exactly 0.10 kg (100 g) of water, consistent with kitchen kettle observations.",
    commonMistakes: [
      "Multiplying energy by latent heat instead of dividing.",
      "Arithmetic power-of-ten errors resulting in 0.01 kg or 1.0 kg."
    ],
    takeaway: "Pt = mL_v; mass vaporised is m = (Pt) / L_v.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { powerW: 2000, timeS: 115 },
      controls: [],
      readouts: [
        { label: "Energy Supplied", expr: () => "230,000 J" },
        { label: "Mass Boiled Away", expr: () => "0.10 kg (100 g)" }
      ],
      explanation: "A 2000 W kettle running for 115 s supplies 230 kJ, converting 0.10 kg of water into steam."
    }
  },
  {
    globalId: "Q072",
    examId: "Q00256",
    paperRef: "5054/11/M/J/23 Q14",
    pdfPage: 63,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Cooling Curve Plateau and Freezing Point",
    paperType: "mcq",
    marks: 1,
    questionText: `A liquid substance at 80 °C is allowed to cool in a laboratory at 20 °C.
The temperature of the substance is recorded over time, producing the cooling curve shown.
A horizontal plateau is observed between time t = 4 min and t = 10 min at a constant temperature of 54 °C.
What is occurring during this horizontal plateau?

A The liquid is evaporating rapidly into vapor.
B The substance is solidifying and releasing latent heat of fusion.
C The substance has reached thermal equilibrium with the laboratory room.
D The thermometer has reached its minimum measurable temperature.`,
    options: [
      { key: "A", text: "The liquid is evaporating rapidly into vapor." },
      { key: "B", text: "The substance is solidifying and releasing latent heat of fusion." },
      { key: "C", text: "The substance has reached thermal equilibrium with the laboratory room." },
      { key: "D", text: "The thermometer has reached its minimum measurable temperature." }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the physical process responsible for a horizontal plateau at 54 °C on a cooling curve.",
    givenInfo: [
      "Substance cooling from 80 °C towards room temperature (20 °C).",
      "Horizontal plateau at 54 °C between t = 4 min and t = 10 min."
    ],
    toFind: "The physical process taking place at 54 °C.",
    physicsConcepts: `Cooling curves and latent heat of solidification:
1. When a pure liquid cools to its freezing point, it begins to solidify (freeze).
2. During freezing, molecules form bonds in a solid crystal lattice. As bonds form, molecular potential energy decreases, releasing latent heat of fusion.
3. This released latent heat offsets the thermal energy being lost to the cooler surroundings, keeping the temperature constant at the freezing point until the entire sample has solidified.
4. Room temperature is 20 °C, so a plateau at 54 °C cannot represent room thermal equilibrium.`,
    equations: `\\frac{dQ_{\\text{loss}}}{dt} = \\frac{dm_{\\text{solid}}}{dt} L_f \\implies \\frac{d\\theta}{dt} = 0 \\quad (\\text{Plateau at freezing point})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Plateau Temperature",
        body: "The plateau occurs at 54 °C, well above room temperature (20 °C). This rules out thermal equilibrium with the room (Option C)."
      },
      {
        step: 2,
        title: "Identify Phase Transition",
        body: "A cooling liquid that remains at a constant temperature above ambient is undergoing solidification (freezing). Latent heat of fusion is released as the liquid turns to solid."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Option B: The substance is solidifying and releasing latent heat of fusion."
      }
    ],
    finalAnswer: "B (The substance is solidifying and releasing latent heat of fusion.)",
    reasonablenessCheck: "Stearic acid or wax solidifying in a school lab exhibits a flat freezing plateau at ~54 °C while releasing latent heat.",
    commonMistakes: [
      "Selecting Option C: thermal equilibrium occurs at room temperature (20 °C), not 54 °C.",
      "Confusing cooling plateau (solidifying) with heating plateau (melting)."
    ],
    takeaway: "A horizontal plateau on a cooling curve represents a phase change (solidification) where latent heat is released at constant temperature.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { plateauTemp: 54 },
      controls: [],
      readouts: [
        { label: "Plateau Temperature", expr: () => "54 °C (Freezing Point)" },
        { label: "Active Process", expr: () => "Solidifying (Releasing L_f)" }
      ],
      explanation: "The temperature remains constant at 54 °C while latent heat of fusion is released as the liquid solidifies."
    }
  },
  {
    globalId: "Q073",
    examId: "Q00257",
    paperRef: "5054/12/M/J/23 Q15",
    pdfPage: 63,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Internal Energy Microscopic Definition",
    paperType: "mcq",
    marks: 1,
    questionText: `Which statement correctly defines the internal energy of a substance?

A the total kinetic energy of the molecules plus the total potential energy of the molecules
B the average kinetic energy of the molecules only
C the thermal energy required to melt 1 kg of the substance
D the total gravitational potential energy of the object due to its height`,
    options: [
      { key: "A", text: "the total kinetic energy of the molecules plus the total potential energy of the molecules" },
      { key: "B", text: "the average kinetic energy of the molecules only" },
      { key: "C", text: "the thermal energy required to melt 1 kg of the substance" },
      { key: "D", text: "the total gravitational potential energy of the object due to its height" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the complete microscopic physics definition of internal energy.",
    givenInfo: [
      "Concept: Internal energy U of a system."
    ],
    toFind: "The accurate definition.",
    physicsConcepts: `Thermodynamic internal energy definition:
The internal energy ($U$) of a substance is the total energy stored within its particles.
It is the sum of:
1. Total microscopic kinetic energy of all its particles (from translational, rotational, and vibrational motion, which determines temperature).
2. Total microscopic potential energy of all its particles (from intermolecular bonds and forces, which changes during phase transitions).
$$U = E_{k,\\text{total}} + E_{p,\\text{total}}$$
Option B defines temperature (which depends on average kinetic energy). Option C defines specific latent heat. Option D defines macroscopic gravitational potential energy.`,
    equations: `U = \\sum E_k + \\sum E_p`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Recall Microscopic Components of Energy",
        body: "Particles inside matter possess kinetic energy (motion) and potential energy (intermolecular bonds/forces)."
      },
      {
        step: 2,
        title: "Define Internal Energy",
        body: "Internal energy is the sum of both total kinetic energy and total potential energy of all particles in the substance."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Option A: total kinetic energy of the molecules plus total potential energy of the molecules."
      }
    ],
    finalAnswer: "A (the total kinetic energy of the molecules plus the total potential energy of the molecules)",
    reasonablenessCheck: "Heating an object can increase kinetic energy (temperature rises) or potential energy (melts/boils); both contribute to internal energy.",
    commonMistakes: [
      "Selecting Option B: average kinetic energy reflects temperature, not total internal energy.",
      "Confusing microscopic potential energy with macroscopic gravitational potential energy (Option D)."
    ],
    takeaway: "Internal energy is the sum of the total microscopic kinetic energy and total potential energy of all particles in a substance.",
    simulation: {
      type: "kinetic_state",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Internal Energy U", expr: () => "Total E_k + Total E_p" },
        { label: "Temperature T", expr: () => "Proportional to average E_k" }
      ],
      explanation: "Internal energy combines the total kinetic energy of particle motion and the potential energy of intermolecular bonds."
    }
  },
  {
    globalId: "Q074",
    examId: "Q00258",
    paperRef: "5054/11/O/N/23 Q16",
    pdfPage: 64,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "High Specific Heat Capacity of Water and Coastal Climates",
    paperType: "mcq",
    marks: 1,
    questionText: `Coastal regions and islands experience much smaller temperature variations between day and night compared to inland desert regions.
Which physical property of water is responsible for this moderating effect on climate?

A water expands when it freezes
B water has a high specific latent heat of vaporisation
C water has a very high specific heat capacity
D water is a good thermal conductor`,
    options: [
      { key: "A", text: "water expands when it freezes" },
      { key: "B", text: "water has a high specific latent heat of vaporisation" },
      { key: "C", text: "water has a very high specific heat capacity" },
      { key: "D", text: "water is a good thermal conductor" }
    ],
    correctOption: "C",
    whatIsAsking: "Identify the thermal property of water that moderates temperature swings in coastal and island climates.",
    givenInfo: [
      "Coastal regions have smaller day/night temperature swings than inland deserts."
    ],
    toFind: "The responsible physical property of water.",
    physicsConcepts: `Thermal moderation by high specific heat capacity:
1. Water has an unusually high specific heat capacity ($c_{\\text{water}} \\approx 4200\\text{ J}/(\\text{kg }^\\circ\\text{C})$) compared to dry soil, sand, and rock ($c_{\\text{sand}} \\approx 800\\text{ J}/(\\text{kg }^\\circ\\text{C})$).
2. Under daytime solar heating ($\Delta Q$):
$$\\Delta \\theta = \\frac{\\Delta Q}{m c}$$
Because $c_{\\text{water}}$ is ~5 times greater than sand, the ocean absorbs large amounts of heat with only a small rise in temperature.
3. At night, the ocean slowly releases this heat with only a small drop in temperature.
4. Surrounding land and air temperatures are moderated by breezes from the ocean, preventing extreme temperature fluctuations.`,
    equations: `\\Delta \\theta = \\frac{\\Delta Q}{m c}; \\quad c_{\\text{water}} \\gg c_{\\text{sand}} \\implies \\Delta \\theta_{\\text{water}} \\ll \\Delta \\theta_{\\text{sand}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Specific Heat Capacity to Temperature Stability",
        body: "A high specific heat capacity means a substance requires large amounts of energy to change its temperature, resisting rapid heating or cooling."
      },
      {
        step: 2,
        title: "Compare Ocean to Desert Sand",
        body: "Oceans absorb solar energy during the day and release it at night with minimal temperature change. Dry desert sand has low specific heat capacity and changes temperature rapidly."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Option C: water has a very high specific heat capacity."
      }
    ],
    finalAnswer: "C (water has a very high specific heat capacity)",
    reasonablenessCheck: "Desert temperatures can swing by 30 °C between day and night, whereas ocean temperatures change by less than 1 °C.",
    commonMistakes: [
      "Selecting Option D: water is actually a poor thermal conductor.",
      "Selecting Option B: latent heat of vaporisation applies during boiling/evaporation, but the primary temperature moderator is sensible heat capacity."
    ],
    takeaway: "Water's very high specific heat capacity moderates coastal climates by absorbing and releasing heat with minimal temperature changes.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { cWater: 4200, cSand: 800 },
      controls: [],
      readouts: [
        { label: "Ocean Δθ (Day/Night)", expr: () => "±1 °C (High Capacity)" },
        { label: "Desert Sand Δθ", expr: () => "±30 °C (Low Capacity)" }
      ],
      explanation: "Water's high specific heat capacity buffers temperature changes, stabilizing coastal climates."
    }
  },
  {
    globalId: "Q075",
    examId: "Q00259",
    paperRef: "5054/12/O/N/23 Q17",
    pdfPage: 64,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Method of Mixtures: Thermal Equilibrium",
    paperType: "mcq",
    marks: 1,
    questionText: `A solid metal block of mass 0.50 kg at 100 °C is dropped into 0.50 kg of water at 20 °C contained in an insulated cup.
The specific heat capacity of water is 4200 J / (kg °C) and the specific heat capacity of the metal is 400 J / (kg °C).
Assuming negligible thermal losses to the cup and surroundings, what is the final equilibrium temperature of the mixture?

A 27 °C
B 60 °C
C 73 °C
D 80 °C`,
    options: [
      { key: "A", text: "27 °C" },
      { key: "B", text: "60 °C" },
      { key: "C", text: "73 °C" },
      { key: "D", text: "80 °C" }
    ],
    correctOption: "A",
    whatIsAsking: "Calculate final thermal equilibrium temperature when a hot metal block is dropped into cold water.",
    givenInfo: [
      "Metal block: m_m = 0.50 kg, θ_m = 100 °C, c_m = 400 J / (kg °C)",
      "Water: m_w = 0.50 kg, θ_w = 20 °C, c_w = 4200 J / (kg °C)",
      "Insulated system (heat lost by metal = heat gained by water)"
    ],
    toFind: "Final equilibrium temperature θ_f in °C.",
    physicsConcepts: `Method of mixtures calorimetry (conservation of energy):
$$Q_{\\text{lost}} = Q_{\\text{gained}}$$
$$m_m c_m (\\theta_m - \\theta_f) = m_w c_w (\\theta_f - \\theta_w)$$
Since masses are equal ($m_m = m_w = 0.50\\text{ kg}$), mass cancels out:
$$c_m (100 - \\theta_f) = c_w (\\theta_f - 20)$$
$$400 (100 - \\theta_f) = 4200 (\\theta_f - 20)$$
$$40\\,000 - 400 \\theta_f = 4200 \\theta_f - 84\\,000$$
$$4600 \\theta_f = 124\\,000 \\implies \\theta_f = \\frac{124\\,000}{4600} \\approx 26.96^\\circ\\text{C} \\approx 27^\\circ\\text{C}$$`,
    equations: `400(100 - \\theta_f) = 4200(\\theta_f - 20) \\implies 4600 \\theta_f = 124\\,000 \\implies \\theta_f \\approx 27^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Set up Energy Conservation Equation",
        body: "Heat lost by metal = Heat gained by water: m_m * c_m * (100 - θ_f) = m_w * c_w * (θ_f - 20)."
      },
      {
        step: 2,
        title: "Simplify Using Equal Masses",
        body: "0.50 kg cancels from both sides:\n400 * (100 - θ_f) = 4200 * (θ_f - 20)."
      },
      {
        step: 3,
        title: "Expand and Group Like Terms",
        body: "40 000 - 400 θ_f = 4200 θ_f - 84 000\n40 000 + 84 000 = 4200 θ_f + 400 θ_f\n124 000 = 4600 θ_f."
      },
      {
        step: 4,
        title: "Solve for θ_f",
        body: "θ_f = 124 000 / 4600 = 26.96 °C ≈ 27 °C."
      }
    ],
    finalAnswer: "A (27 °C)",
    reasonablenessCheck: "Water's specific heat capacity is over 10 times higher than the metal's, so the equilibrium temperature sits much closer to water's initial temperature (20 °C) than the metal's (100 °C).",
    commonMistakes: [
      "Averaging the temperatures directly: (100 + 20) / 2 = 60 °C (Option B, which ignores the 10:1 ratio in specific heat capacity).",
      "Confusing which substance gains versus loses heat."
    ],
    takeaway: "In thermal mixtures, the final temperature sits much closer to the substance with the larger thermal capacity ($mc$).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massMetalKg: 0.5, massWaterKg: 0.5, tempMetal: 100, tempWater: 20 },
      controls: [],
      readouts: [
        { label: "Final Temperature", expr: () => "27 °C" },
        { label: "Dominant Heat Sink", expr: () => "Water (c = 4200 J/kg °C)" }
      ],
      explanation: "Water's high specific heat capacity absorbs the metal's heat with only a 7 °C rise, reaching equilibrium at 27 °C."
    }
  }
];