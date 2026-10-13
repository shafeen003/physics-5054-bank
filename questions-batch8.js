/**
 * Master Question Store: Batch 8 (Q101 to Q115)
 * Section 2.2: Thermal Properties and Temperature (Theory Paper 2)
 */

const QUESTIONS_BATCH_8 = [
  {
    globalId: "Q101",
    examId: "Q02711",
    paperRef: "5054/21/O/N/20 Q9(d)",
    pdfPage: 47,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Latent Heat and Heat Transfer Rate during Solidification",
    paperType: "theory",
    marks: 3,
    questionText: `There is 45 g of oil in the glass measuring cylinder and the specific latent heat of fusion (melting) of the oil is 5.7 × 10⁴ J/kg.
Fig. 9.1 shows that the oil solidifies along a horizontal plateau at -10 °C between t = 3600 s and t = 10800 s.

Calculate:
(i) the energy transferred from the oil between t = 3600 s and t = 10800 s.
energy = .................... [2]

(ii) the average rate at which energy is transferred from the oil between t = 3600 s and t = 10800 s.
rate = .................... [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the total latent heat energy released by 45 g of freezing oil and determine the average rate of heat transfer (power) over the 7200 s plateau duration.",
    givenInfo: [
      "Mass of oil m = 45 g = 0.045 kg",
      "Specific latent heat of fusion L_f = 5.7 × 10⁴ J/kg",
      "Start of plateau t_1 = 3600 s",
      "End of plateau t_2 = 10800 s"
    ],
    toFind: "Total energy E in J, and average rate P in W (or J/s).",
    physicsConcepts: `During a change of state at constant temperature:
1. Energy transferred: E = m * L_f, where m must be in kilograms.
2. Rate of energy transfer (power): P = E / Δt, where Δt = t_2 - t_1 in seconds.`,
    equations: `E = m L_f = 0.045 \\times (5.7 \\times 10^4) = 2565 \\text{ J}; \\quad P = \\frac{E}{\\Delta t} = \\frac{2565}{10800 - 3600} \\text{ W}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Mass to Kilograms",
        body: "m = 45 g / 1000 = 0.045 kg."
      },
      {
        step: 2,
        title: "Calculate Energy Transferred (i)",
        body: "E = m * L_f = 0.045 kg * 57 000 J/kg = 2565 J (or 2.6 × 10³ J to 2 significant figures)."
      },
      {
        step: 3,
        title: "Calculate Time Duration",
        body: "Δt = 10 800 s - 3600 s = 7200 s."
      },
      {
        step: 4,
        title: "Calculate Average Transfer Rate (ii)",
        body: "Rate P = E / Δt = 2565 J / 7200 s = 0.356 W ≈ 0.36 W (or J/s)."
      }
    ],
    finalAnswer: "(i) 2600 J (or 2565 J);\n(ii) 0.36 W (or 0.36 J/s)",
    reasonablenessCheck: "2.6 kJ transferred over 2 hours represents a slow heat loss rate of roughly one third of a watt through glass walls.",
    commonMistakes: [
      "Leaving mass in grams (yielding 2.57 × 10⁶ J).",
      "Using the full elapsed time 10 800 s instead of the interval 7200 s."
    ],
    takeaway: "Total latent heat is E = mL. Dividing this by the plateau duration gives the average rate of energy loss P = E / Δt.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { totalJoules: 2565, durationS: 7200 },
      controls: [
        { id: "totalJoules", name: "Latent Energy Released", min: 1000, max: 5000, step: 200, default: 2565, unit: "J" }
      ],
      readouts: [
        { label: "Plateau Span", expr: () => "7200 s (2.0 h)" },
        { label: "Transfer Rate P", expr: (p) => (p.totalJoules / 7200).toFixed(2) + " W" }
      ],
      explanation: "Latent heat is released over 7200 s, producing an average cooling power of ~0.36 W."
    }
  },
  {
    globalId: "Q102",
    examId: "Q02079",
    paperRef: "5054/22/O/N/20 Q3(a)(ii)",
    pdfPage: 48,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Convection Suppression Below a Heating Element",
    paperType: "theory",
    marks: 2,
    questionText: `Fig. 3.1 shows a hot water tank that contains two electric heaters X and Y.
Heater X is located near the top of the tank, and heater Y is located near the bottom.
The tank is full of cold water and heater X is switched on while heater Y remains switched off.
The temperature of all the water above X increases very quickly, but the temperature of the water below X increases much more slowly.

Heater Y remains switched off. Explain why the temperature of the water below heater X increases much more slowly than the temperature of the water above heater X. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why water below heating element X warms up much more slowly than water above it, referencing convection currents and water conductivity.",
    givenInfo: [
      "Heater X is near the top of the tank.",
      "Heater Y is off at the bottom.",
      "Water above X warms rapidly; water below X warms very slowly."
    ],
    toFind: "Physical explanation for slow warming of water below heater X.",
    physicsConcepts: `1. Convection: Water heated by element X expands, its density falls, and it rises to the top of the tank. Convection currents only circulate warm water upward above the heater level.
2. Conduction in water: Water is a very poor thermal conductor. Because warm water cannot sink (it is less dense), thermal energy can only reach the region below heater X by slow conduction downward through the liquid.`,
    equations: `\\rho_{\\text{warm}} < \\rho_{\\text{cold}} \\implies \\text{Warm water floats on cold water; } k_{\\text{water}} \\approx 0.6 \\text{ W/(m K)} \\text{ (poor conductor)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Explain Convection Direction (Mark 1)",
        body: "Convection currents only travel upwards because heated water expands, becomes less dense, and rises. Convection does not carry thermal energy downwards below heater X."
      },
      {
        step: 2,
        title: "Explain Downward Conduction (Mark 2)",
        body: "Water is a poor thermal conductor, so thermal energy can only transfer downwards below heater X very slowly by conduction."
      }
    ],
    finalAnswer: "Convection only carries warm water upwards (warm water is less dense and floats); water is a poor thermal conductor, so thermal energy only transfers downwards very slowly by conduction.",
    reasonablenessCheck: "In an unmixed hot water cylinder, water below the active upper element stays cold for hours because hot water floats on cold water.",
    commonMistakes: [
      "Stating that convection occurs downwards.",
      "Claiming water is a good conductor of heat."
    ],
    takeaway: "Warm fluid floats upward by convection; downward heat transfer in liquids is limited to slow conduction.",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: { heaterPosition: "top" },
      controls: [],
      readouts: [
        { label: "Water Above Heater X", expr: () => "HOT (Rapid Convection)" },
        { label: "Water Below Heater X", expr: () => "COLD (No Convection)" }
      ],
      explanation: "Heater X warms the upper water via buoyant circulation, leaving lower water cold due to poor thermal conduction."
    }
  },
  {
    globalId: "Q103",
    examId: "Q02080",
    paperRef: "5054/22/O/N/20 Q4",
    pdfPage: 50,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Calorimetry of Hot Metal in Water Overview",
    paperType: "theory",
    marks: 8,
    questionText: `(a) Describe, in terms of molecules, the structure of a solid. [3]

(b) Fig. 4.1 shows a metal-worker heating a horseshoe to a high temperature before shaping it.
The metal-worker then cools the horseshoe by dropping it into 8.0 kg of water at 18 °C. The final temperature of the water is 43 °C.
The specific heat capacity of water is 4200 J/(kg °C).
(i) Calculate the thermal energy transferred to the water as the horseshoe cools. [2]
(ii) The heat capacity of the horseshoe is 850 J/°C.
Calculate the temperature of the horseshoe immediately before it is dropped into the water. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe molecular structure of a solid, calculate thermal energy gained by water, and determine the initial temperature of the hot horseshoe.",
    givenInfo: [
      "Water mass m_w = 8.0 kg",
      "Initial water temperature T_w1 = 18 °C",
      "Final mixture temperature T_final = 43 °C",
      "Specific heat capacity of water c_w = 4200 J/(kg °C)",
      "Heat capacity of horseshoe C_iron = 850 J/°C"
    ],
    toFind: "(a) Molecular structure description; (b)(i) Thermal energy to water; (b)(ii) Initial horseshoe temperature.",
    physicsConcepts: `1. Solid molecular structure: Particles are closely packed in a regular lattice arrangement, held by strong intermolecular forces, and vibrate about fixed positions.
2. Thermal energy gained by water: E = m_w * c_w * ΔT_w.
3. Conservation of energy (assuming no heat loss): Energy lost by horseshoe = Energy gained by water.
4. Horseshoe temperature drop: E = C_shoe * (T_initial - T_final).`,
    equations: `E = m_w c_w (T_{\\text{final}} - T_{w1}); \\quad T_{\\text{initial}} = T_{\\text{final}} + \\frac{E}{C_{\\text{shoe}}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Structure of a Solid",
        body: "Particles are packed closely together in a regular arrangement / fixed lattice pattern, held by strong attractive forces, and only vibrate about fixed positions."
      },
      {
        step: 2,
        title: "Part (b)(i) Energy Transferred to Water",
        body: "ΔT_w = 43 °C - 18 °C = 25 °C.\nE = m_w * c_w * ΔT_w = 8.0 kg * 4200 J/(kg °C) * 25 °C = 840 000 J (8.4 × 10⁵ J)."
      },
      {
        step: 3,
        title: "Part (b)(ii) Initial Horseshoe Temperature",
        body: "Energy lost by horseshoe = 840 000 J.\nΔT_shoe = E / C_shoe = 840 000 J / 850 J/°C = 988.2 °C.\nInitial temperature T_initial = T_final + ΔT_shoe = 43 °C + 988.2 °C = 1031.2 °C ≈ 1030 °C (or 1000 °C)."
      }
    ],
    finalAnswer: "(a) Regular lattice, closely packed, vibrating about fixed positions;\n(b)(i) 840 000 J (8.4 × 10⁵ J);\n(b)(ii) 1030 °C (or 1000 °C)",
    reasonablenessCheck: "840 kJ absorbed by 8 kg of water matches an iron horseshoe cooling from bright red heat (~1000 °C) down to 43 °C.",
    commonMistakes: [
      "Using mass of iron alongside heat capacity C (C already includes mass).",
      "Subtracting 43 °C from ΔT instead of adding."
    ],
    takeaway: "In calorimetry, energy gained by water (mcΔT) equals energy lost by the object (CΔT).",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { waterMassKg: 8.0, initialShoeTemp: 1031, shoeCapacity: 850 },
      controls: [
        { id: "initialShoeTemp", name: "Initial Horseshoe Temp", min: 500, max: 1200, step: 50, default: 1031, unit: "°C" }
      ],
      readouts: [
        { label: "Energy to Water", expr: (p) => ((p.initialShoeTemp - 43) * 850 / 1000).toFixed(0) + " kJ" },
        { label: "Final Water Temp", expr: () => "43.0 °C" }
      ],
      explanation: "Hot horseshoe plunges into water, transferring 840 kJ until thermal equilibrium is established at 43 °C."
    }
  },
  {
    globalId: "Q104",
    examId: "Q02081",
    paperRef: "5054/22/O/N/20 Q4(a)",
    pdfPage: 50,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Molecular Description of a Solid",
    paperType: "theory",
    marks: 3,
    questionText: `Describe, in terms of molecules, the structure of a solid. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe the arrangement, separation, and motion of molecules in a solid.",
    givenInfo: ["State of matter = Solid."],
    toFind: "3-mark molecular description of a solid.",
    physicsConcepts: `Kinetic particle model of a solid:
1. Arrangement: Particles are in a regular, repeating pattern (crystalline lattice).
2. Spacing: Particles are closely packed together (touching).
3. Motion: Particles vibrate about fixed positions (they cannot translate or slide).`,
    equations: `\\text{Solid: Regular pattern, closely packed, vibrating about fixed positions}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Arrangement (Mark 1)",
        body: "Particles are arranged in a regular pattern / repeating lattice."
      },
      {
        step: 2,
        title: "State Spacing (Mark 2)",
        body: "Particles are tightly packed / touching / very close together."
      },
      {
        step: 3,
        title: "State Motion (Mark 3)",
        body: "Particles vibrate about fixed positions (strong forces prevent them moving from place to place)."
      }
    ],
    finalAnswer: "Particles are arranged in a regular pattern / lattice; they are tightly packed / touching; they vibrate about fixed positions.",
    reasonablenessCheck: "These three points define fixed shape, fixed volume, and incompressibility in solids.",
    commonMistakes: [
      "Saying particles in a solid do not move at all (they vibrate continually).",
      "Describing a random arrangement."
    ],
    takeaway: "Solids: regular arrangement, closely packed, vibrating about fixed positions.",
    simulation: {
      type: "kinetic_state",
      defaultParams: { state: "solid", tempC: 20 },
      controls: [],
      readouts: [
        { label: "Arrangement", expr: () => "Regular Crystalline Lattice" },
        { label: "Particle Motion", expr: () => "Vibrating About Fixed Sites" }
      ],
      explanation: "Solid particles vibrate in place within a fixed lattice structure."
    }
  },
  {
    globalId: "Q105",
    examId: "Q02082",
    paperRef: "5054/22/O/N/20 Q4(b)(i)",
    pdfPage: 50,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermal Energy Calculation for Quenching Water",
    paperType: "theory",
    marks: 2,
    questionText: `A metal-worker cools a hot horseshoe by dropping it into 8.0 kg of water at 18 °C. The final temperature of the water is 43 °C.
The specific heat capacity of water is 4200 J/(kg °C).

Calculate the thermal energy transferred to the water as the horseshoe cools.
energy = .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate heat energy gained by 8.0 kg of water when its temperature rises from 18 °C to 43 °C.",
    givenInfo: [
      "Mass of water m = 8.0 kg",
      "Initial temperature T_1 = 18 °C",
      "Final temperature T_2 = 43 °C",
      "Specific heat capacity c = 4200 J/(kg °C)"
    ],
    toFind: "Thermal energy E in Joules.",
    physicsConcepts: `Thermal energy transfer without change of state:
E = m * c * ΔT,
where ΔT is the temperature rise (T_2 - T_1).`,
    equations: `\\Delta T = 43 - 18 = 25^\\circ\\text{C}; \\quad E = m c \\Delta T = 8.0 \\times 4200 \\times 25`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Temperature Rise",
        body: "ΔT = 43 °C - 18 °C = 25 °C."
      },
      {
        step: 2,
        title: "Calculate Energy Transferred",
        body: "E = m * c * ΔT = 8.0 kg * 4200 J/(kg °C) * 25 °C = 840 000 J."
      }
    ],
    finalAnswer: "840 000 J (or 8.4 × 10⁵ J / 840 kJ)",
    reasonablenessCheck: "8.0 * 25 = 200 kg °C; 200 * 4200 = 840 000 J.",
    commonMistakes: [
      "Using 43 °C instead of the temperature difference 25 °C.",
      "Leaving the answer without units."
    ],
    takeaway: "E = mcΔT. Always calculate the temperature change ΔT before multiplying.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 8.0, tempC: 25 },
      controls: [
        { id: "massKg", name: "Water Mass", min: 4.0, max: 12.0, step: 1.0, default: 8.0, unit: "kg" },
        { id: "tempC", name: "Temperature Rise", min: 10, max: 40, step: 5, default: 25, unit: "°C" }
      ],
      readouts: [
        { label: "Energy Transferred E", expr: (p) => (p.massKg * 4200 * p.tempC / 1000).toFixed(0) + " kJ" }
      ],
      explanation: "Heating 8.0 kg of water through 25 °C requires 840 kJ of energy."
    }
  },
  {
    globalId: "Q106",
    examId: "Q02083",
    paperRef: "5054/22/O/N/20 Q4(b)(ii)",
    pdfPage: 50,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Initial Temperature from Thermal Capacity",
    paperType: "theory",
    marks: 3,
    questionText: `The heat capacity of the horseshoe is 850 J/°C.
Calculate the temperature of the horseshoe immediately before it is dropped into the water.
temperature = .................... [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the initial temperature of the horseshoe using its heat capacity and the energy lost to the water.",
    givenInfo: [
      "Heat capacity of horseshoe C = 850 J/°C",
      "Energy lost by horseshoe = 840 000 J (from Q105)",
      "Final temperature of horseshoe = final water temperature = 43 °C"
    ],
    toFind: "Initial temperature T_initial of the horseshoe.",
    physicsConcepts: `By conservation of energy:
Energy lost by horseshoe = Energy gained by water = 840 000 J.
For a whole body of heat capacity C:
E = C * ΔT_horseshoe = C * (T_initial - T_final).
Therefore:
T_initial = T_final + (E / C).`,
    equations: `\\Delta T_{\\text{horseshoe}} = \\frac{E}{C} = \\frac{840\\,000}{850} = 988.2^\\circ\\text{C}; \\quad T_{\\text{initial}} = 43 + 988.2 = 1031.2^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Temperature Drop of Horseshoe",
        body: "ΔT = E / C = 840 000 J / 850 J/°C = 988.24 °C."
      },
      {
        step: 2,
        title: "Calculate Initial Temperature",
        body: "T_initial = T_final + ΔT = 43 °C + 988.24 °C = 1031.24 °C."
      },
      {
        step: 3,
        title: "Round to Appropriate Significant Figures",
        body: "T_initial ≈ 1030 °C (or 1000 °C to 2 s.f.)."
      }
    ],
    finalAnswer: "1030 °C (or 1000 °C / 1031 °C)",
    reasonablenessCheck: "A blacksmith heats iron to glowing orange-red heat, which corresponds to 1000–1100 °C.",
    commonMistakes: [
      "Subtracting 43 °C from 988 °C instead of adding.",
      "Attempting to divide by mass again (heat capacity C already includes mass)."
    ],
    takeaway: "Initial temperature = final temperature + (E / C). Remember that heat capacity C has units J/°C.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { shoeCapacity: 850, energyJ: 840000 },
      controls: [
        { id: "shoeCapacity", name: "Heat Capacity C", min: 600, max: 1100, step: 50, default: 850, unit: "J/°C" }
      ],
      readouts: [
        { label: "Temp Drop ΔT", expr: (p) => (840000 / p.shoeCapacity).toFixed(1) + " °C" },
        { label: "Initial Horseshoe Temp", expr: (p) => (43 + 840000 / p.shoeCapacity).toFixed(0) + " °C" }
      ],
      explanation: "Losing 840 kJ with a heat capacity of 850 J/°C requires the horseshoe to cool by 988 °C down to 43 °C."
    }
  },
  {
    globalId: "Q107",
    examId: "Q02831",
    paperRef: "5054/21/M/J/21 Q3(a)",
    pdfPage: 51,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Steel Rod Quenching Heat Loss",
    paperType: "theory",
    marks: 3,
    questionText: `A hot steel rod is cooled by plunging it into cold water, as shown in Fig. 3.1.
The steel rod has a mass of 2.0 kg and is initially at a temperature of 500 °C.
It cools to 50 °C when placed in the water.
The specific heat capacity of steel is 460 J/(kg °C).

Calculate the thermal energy (heat) lost by the steel rod as it cools to 50 °C.
thermal energy = .................... [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the thermal energy released by a 2.0 kg steel rod cooling from 500 °C to 50 °C.",
    givenInfo: [
      "Mass of steel rod m = 2.0 kg",
      "Initial temperature T_1 = 500 °C",
      "Final temperature T_2 = 50 °C",
      "Specific heat capacity of steel c = 460 J/(kg °C)"
    ],
    toFind: "Thermal energy lost E in Joules.",
    physicsConcepts: `Thermal energy released by a cooling object:
E = m * c * ΔT,
where ΔT = T_initial - T_final.`,
    equations: `\\Delta T = 500 - 50 = 450^\\circ\\text{C}; \\quad E = m c \\Delta T = 2.0 \\times 460 \\times 450`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Temperature Change",
        body: "ΔT = 500 °C - 50 °C = 450 °C."
      },
      {
        step: 2,
        title: "Apply Heat Equation",
        body: "E = m * c * ΔT = 2.0 kg * 460 J/(kg °C) * 450 °C = 414 000 J."
      },
      {
        step: 3,
        title: "State in Standard Form",
        body: "E = 4.14 × 10⁵ J (or 414 kJ)."
      }
    ],
    finalAnswer: "414 000 J (or 4.14 × 10⁵ J / 414 kJ)",
    reasonablenessCheck: "2 kg * 460 * 450 = 414 000 J. Units and dimensions match correctly.",
    commonMistakes: [
      "Using 500 °C instead of the temperature change 450 °C.",
      "Arithmetic errors in multiplying large numbers."
    ],
    takeaway: "E = mcΔT applies directly to sensible heat loss during quenching.",
    simulation: {
      type: "quench_and_boil",
      defaultParams: { rodTemp: 500, rodMass: 2.0 },
      controls: [
        { id: "rodTemp", name: "Initial Rod Temp", min: 200, max: 700, step: 50, default: 500, unit: "°C" }
      ],
      readouts: [
        { label: "Temperature Drop", expr: (p) => (p.rodTemp - 50) + " °C" },
        { label: "Energy Released E", expr: (p) => (2.0 * 460 * (p.rodTemp - 50) / 1000).toFixed(1) + " kJ" }
      ],
      explanation: "Cooling a 2.0 kg steel rod through 450 °C releases 414 kJ into the water."
    }
  },
  {
    globalId: "Q108",
    examId: "Q02371",
    paperRef: "5054/22/M/J/21 Q9(c)(i)",
    pdfPage: 53,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Mobile Phone Battery Heating Dissipation",
    paperType: "theory",
    marks: 3,
    questionText: `A student estimates the thermal energy produced in a mobile phone battery when the phone is used.
He measures a temperature rise of 5.0 °C within the battery in a period of time when the useful energy output from the battery is 5200 J.
The mass of the battery is 110 g and its specific heat capacity is 830 J/(kg °C).

Calculate the thermal energy (heat) needed to raise the temperature of the battery by 5.0 °C.
thermal energy = .................... [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the heat generated inside a 110 g battery producing a 5.0 °C temperature rise.",
    givenInfo: [
      "Mass of battery m = 110 g = 0.11 kg",
      "Specific heat capacity c = 830 J/(kg °C)",
      "Temperature rise ΔT = 5.0 °C",
      "Useful energy output = 5200 J (supplementary)"
    ],
    toFind: "Thermal energy E required in Joules.",
    physicsConcepts: `Sensible thermal energy absorbed:
E = m * c * ΔT,
where mass must be converted from grams to kilograms: m = 110 / 1000 = 0.11 kg.`,
    equations: `m = 0.11 \\text{ kg}; \\quad E = m c \\Delta T = 0.11 \\times 830 \\times 5.0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Mass to Kilograms",
        body: "m = 110 g / 1000 = 0.11 kg."
      },
      {
        step: 2,
        title: "Calculate Thermal Energy",
        body: "E = m * c * ΔT = 0.11 kg * 830 J/(kg °C) * 5.0 °C = 456.5 J."
      },
      {
        step: 3,
        title: "State with Significant Figures",
        body: "E ≈ 460 J (or 457 J to 3 s.f.)."
      }
    ],
    finalAnswer: "460 J (or 456.5 J / 457 J)",
    reasonablenessCheck: "0.11 * 830 * 5 = 456.5 J. Heat energy dissipated is roughly 8% of the useful battery output, consistent with typical battery efficiency.",
    commonMistakes: [
      "Forgetting to convert grams to kilograms (giving 456 500 J).",
      "Confusing useful output 5200 J with thermal energy."
    ],
    takeaway: "Always convert grams to kilograms (divide by 1000) before applying E = mcΔT.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 0.11, tempC: 5.0 },
      controls: [
        { id: "tempC", name: "Battery Temp Rise", min: 1.0, max: 15.0, step: 1.0, default: 5.0, unit: "°C" }
      ],
      readouts: [
        { label: "Battery Mass", expr: () => "0.11 kg (110 g)" },
        { label: "Internal Heat E", expr: (p) => (0.11 * 830 * p.tempC).toFixed(1) + " J" }
      ],
      explanation: "Internal resistance warms the 110 g battery, dissipating 456.5 J of waste thermal energy during discharge."
    }
  },
  {
    globalId: "Q109",
    examId: "Q02053",
    paperRef: "5054/21/O/N/21 Q9",
    pdfPage: 53,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Thermometer Calibration & Dimensional Range Factors",
    paperType: "theory",
    marks: 9,
    questionText: `Liquid-in-glass thermometers use the expansion of a liquid to indicate the temperature.
Fig. 9.2 shows an ungraduated liquid-in-glass thermometer with a bulb and a narrow capillary tube. There is no scale on the thermometer.

(b) (i) State what is meant by the ice point and the steam point. [2]
(ii) Describe how the ice point and the steam point are used on the thermometer. [2]

(c) Explain how the range of a liquid-in-glass thermometer is affected by:
(i) increasing the mass of liquid in the bulb [2]
(ii) increasing the diameter of the narrow tube. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Define the two calibration fixed points, describe scale calibration, and explain how bulb volume and tube diameter govern thermometer range.",
    givenInfo: [
      "Ungraduated liquid-in-glass thermometer.",
      "Modification 1: Increasing bulb liquid mass.",
      "Modification 2: Increasing capillary tube diameter."
    ],
    toFind: "Definitions of fixed points, calibration procedure, and explanation of range effects.",
    physicsConcepts: `1. Calibration fixed points: Ice point is pure melting ice at standard atmospheric pressure (0 °C); steam point is steam above boiling water at standard atmospheric pressure (100 °C).
2. Calibration method: Mark liquid level in melting ice (0 °C mark) and in steam (100 °C mark). Divide distance into 100 equal divisions.
3. Range dependencies:
   - Increasing liquid mass in bulb means more liquid expands per degree, increasing sensitivity and reducing range.
   - Increasing bore diameter increases cross-sectional area, decreasing thread movement per degree and increasing range.`,
    equations: `\\text{Sensitivity} = \\frac{V_0 \\gamma}{A}; \\quad \\text{Range} = \\frac{L}{\\text{Sensitivity}} = \\frac{L \\cdot A}{V_0 \\gamma}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (b)(i) Define Fixed Points",
        body: "Ice point: temperature of pure melting ice (at standard atmospheric pressure), taken as 0 °C.\nSteam point: temperature of steam above water boiling at standard atmospheric pressure, taken as 100 °C."
      },
      {
        step: 2,
        title: "Part (b)(ii) Calibration Procedure",
        body: "Place bulb in melting ice and mark liquid level as 0 °C. Place bulb in steam and mark liquid level as 100 °C. Divide the distance between the two marks into 100 equal intervals."
      },
      {
        step: 3,
        title: "Part (c)(i) Effect of Larger Bulb Mass",
        body: "Range decreases. A larger mass of liquid produces greater total volume expansion per degree, making the thread move further along the stem per °C (greater sensitivity), so it reaches the top of the tube at a lower temperature."
      },
      {
        step: 4,
        title: "Part (c)(ii) Effect of Wider Bore Diameter",
        body: "Range increases. A larger bore diameter has a larger cross-sectional area, so the thread moves a smaller distance per degree (lower sensitivity). Consequently, more degrees fit along the fixed length of the stem."
      }
    ],
    finalAnswer: "(b)(i) Ice point: temperature of pure melting ice (0 °C); Steam point: temperature of steam from boiling water at standard atmospheric pressure (100 °C);\n(b)(ii) Mark levels at 0 °C and 100 °C, divide distance into 100 equal parts;\n(c)(i) Range decreases: more liquid expands so thread moves further per °C;\n(c)(ii) Range increases: wider bore means smaller thread movement per °C, fitting more degrees along the stem.",
    reasonablenessCheck: "Range and sensitivity have an inverse relationship for a tube of fixed physical length.",
    commonMistakes: [
      "Omitting 'standard atmospheric pressure' for the steam point.",
      "Stating range increases when bulb volume increases."
    ],
    takeaway: "Fixed points calibrate the scale. Greater bulb mass decreases range; wider capillary bore increases range.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { bulbMassFactor: 1.0, boreDiamFactor: 1.0 },
      controls: [
        { id: "bulbMassFactor", name: "Bulb Liquid Mass", min: 0.5, max: 2.5, step: 0.5, default: 1.0, unit: "x" },
        { id: "boreDiamFactor", name: "Tube Bore Diameter", min: 0.5, max: 2.0, step: 0.25, default: 1.0, unit: "x" }
      ],
      readouts: [
        { label: "Sensitivity", expr: (p) => (p.bulbMassFactor / (p.boreDiamFactor * p.boreDiamFactor)).toFixed(2) + " mm/°C" },
        { label: "Measurable Range", expr: (p) => (100 * (p.boreDiamFactor * p.boreDiamFactor) / p.bulbMassFactor).toFixed(0) + " °C" }
      ],
      explanation: "Larger bulb decreases range; wider capillary increases range."
    }
  },
  {
    globalId: "Q110",
    examId: "Q02055",
    paperRef: "5054/21/O/N/21 Q9(b)(i)",
    pdfPage: 54,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Definitions of Ice Point and Steam Point",
    paperType: "theory",
    marks: 2,
    questionText: `State what is meant by the ice point and the steam point.
ice point: ....................................................................................................................
steam point: ................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State standard Cambridge definitions for the lower and upper fixed points on the Celsius scale.",
    givenInfo: ["Terms: Ice point and steam point."],
    toFind: "Definitions of ice point and steam point.",
    physicsConcepts: `Definitions:
- Ice point: The temperature of pure melting ice at standard atmospheric pressure, taken as 0 °C.
- Steam point: The temperature of steam above pure water boiling at standard atmospheric pressure, taken as 100 °C.
Note: Water must be pure, and pressure must be standard atmospheric pressure (1.01 × 10⁵ Pa).`,
    equations: `T_{\\text{ice}} = 0^\\circ\\text{C}, \\quad T_{\\text{steam}} = 100^\\circ\\text{C} \\quad (p = 101.3 \\text{ kPa})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Define Ice Point",
        body: "The temperature of pure melting ice (at standard atmospheric pressure) / 0 °C."
      },
      {
        step: 2,
        title: "Define Steam Point",
        body: "The temperature of steam above water boiling at standard atmospheric pressure / 100 °C."
      }
    ],
    finalAnswer: "ice point: temperature of pure melting ice (at standard atmospheric pressure) / 0 °C;\nsteam point: temperature of steam above water boiling at standard atmospheric pressure / 100 °C.",
    reasonablenessCheck: "Pure ice melts at 0 °C; steam temperature is less sensitive to impurities than boiling liquid water.",
    commonMistakes: [
      "Omitting 'steam' and saying 'boiling water' (dissolved impurities can shift boiling liquid temperature above 100 °C).",
      "Omitting atmospheric pressure."
    ],
    takeaway: "Ice point = pure melting ice (0 °C). Steam point = steam above water boiling at standard atmospheric pressure (100 °C).",
    simulation: {
      type: "thermometer_design",
      defaultParams: { fixedPoint: "steam" },
      controls: [],
      readouts: [
        { label: "Lower Fixed Point", expr: () => "0 °C (Pure Melting Ice)" },
        { label: "Upper Fixed Point", expr: () => "100 °C (Standard Steam)" }
      ],
      explanation: "Standard fixed points define 0 °C and 100 °C on the Celsius scale."
    }
  },
  {
    globalId: "Q111",
    examId: "Q02056",
    paperRef: "5054/21/O/N/21 Q9(b)(ii)",
    pdfPage: 54,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Calibrating a Thermometer Scale",
    paperType: "theory",
    marks: 2,
    questionText: `Describe how the ice point and the steam point are used on the thermometer. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how reference marks are used to graduate an uncalibrated thermometer stem.",
    givenInfo: [
      "Ungraduated liquid-in-glass thermometer.",
      "Availability of melting ice and boiling water steam."
    ],
    toFind: "Calibration method using fixed points.",
    physicsConcepts: `To graduate a linear thermometer:
1. Immerse bulb in melting ice and mark meniscus level as 0 °C.
2. Immerse bulb in steam at 1 atm and mark meniscus level as 100 °C.
3. Divide distance between these marks into 100 equal intervals (degrees).`,
    equations: `\\text{Degree interval} = \\frac{L_{100} - L_0}{100}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Place in Fixed Points and Mark Levels (Mark 1)",
        body: "Place thermometer in melting ice and mark the liquid level (as 0 °C), then place in steam and mark the liquid level (as 100 °C)."
      },
      {
        step: 2,
        title: "Divide Interval (Mark 2)",
        body: "Divide the distance between the two marks into 100 equal divisions (each division representing 1 °C)."
      }
    ],
    finalAnswer: "Mark the liquid level at the ice point (0 °C) and at the steam point (100 °C); divide the distance between the marks into 100 equal divisions.",
    reasonablenessCheck: "Equal division spacing assumes a uniform capillary bore diameter.",
    commonMistakes: [
      "Stating marks are made without mentioning dividing the distance into equal intervals.",
      "Putting thermometer into boiling water instead of steam."
    ],
    takeaway: "Calibrate by marking the meniscus at 0 °C and 100 °C, then dividing the distance into 100 equal divisions.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { marksAdded: true },
      controls: [],
      readouts: [
        { label: "Step 1", expr: () => "Mark meniscus at 0 °C and 100 °C" },
        { label: "Step 2", expr: () => "Divide interval into 100 equal parts" }
      ],
      explanation: "Dividing the distance between 0 °C and 100 °C into 100 equal parts graduates the stem."
    }
  },
  {
    globalId: "Q112",
    examId: "Q02057",
    paperRef: "5054/21/O/N/21 Q9(c)",
    pdfPage: 54,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Effects of Bulb Mass and Tube Diameter on Thermometer Range",
    paperType: "theory",
    marks: 5,
    questionText: `Explain how the range of a liquid-in-glass thermometer is affected by:
(i) increasing the mass of liquid in the bulb [2]
(ii) increasing the diameter of the narrow tube. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how increasing bulb liquid mass and increasing capillary bore diameter alter the measurable temperature range.",
    givenInfo: [
      "Design modification 1: Larger mass of liquid in bulb.",
      "Design modification 2: Larger bore diameter.",
      "Length of stem remains constant."
    ],
    toFind: "Effect on range with detailed physical reasoning for each change.",
    physicsConcepts: `Range = total temperature difference accommodated on the fixed tube length L:
Range = (A * L) / (V_0 * gamma).
1. Increasing liquid mass in bulb increases initial volume V_0. A larger volume produces a greater volume expansion per degree, meaning the thread moves further per degree (greater sensitivity), filling the fixed tube over a smaller temperature interval. Range decreases.
2. Increasing bore diameter increases cross-sectional area A. A larger area means the thread moves less distance per degree (lower sensitivity), so more degrees fit along the stem length. Range increases.`,
    equations: `\\text{Range} \\propto \\frac{d^2}{m_{\\text{bulb}}} \\implies \\text{Larger } m_{\\text{bulb}} \\implies \\text{Range } \\downarrow; \\quad \\text{Larger } d \\implies \\text{Range } \\uparrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Increasing Mass of Liquid in Bulb",
        body: "Range decreases / is smaller. A larger mass (volume) of liquid produces a greater volume expansion for each 1 °C rise. The liquid thread moves further per degree, reaching the end of the stem after fewer total degrees."
      },
      {
        step: 2,
        title: "Part (ii) Increasing Diameter of Narrow Tube",
        body: "Range increases / is larger. A wider capillary tube has a larger cross-sectional area. The expanding liquid produces a smaller movement along the stem per 1 °C (lower sensitivity). As a result, more degrees fit along the fixed length of the tube."
      }
    ],
    finalAnswer: "(i) Range decreases: more liquid expands so the thread moves further per degree (greater sensitivity), reaching the top at a lower temperature.\n(ii) Range increases: cross-sectional area is larger, so the thread moves a smaller distance per degree (lower sensitivity), fitting more degrees along the stem.",
    reasonablenessCheck: "Sensitivity and range trade off against one another for a stem of fixed length.",
    commonMistakes: [
      "Stating range increases when bulb volume increases.",
      "Failing to explain the role of cross-sectional area in tube diameter."
    ],
    takeaway: "Range decreases with a larger bulb; range increases with a wider capillary tube.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { bulbMassFactor: 1.5, boreDiamFactor: 1.5 },
      controls: [
        { id: "bulbMassFactor", name: "Bulb Mass Factor", min: 0.5, max: 2.0, step: 0.25, default: 1.0, unit: "x" },
        { id: "boreDiamFactor", name: "Bore Diam Factor", min: 0.5, max: 2.0, step: 0.25, default: 1.0, unit: "x" }
      ],
      readouts: [
        { label: "Bulb Effect", expr: (p) => p.bulbMassFactor > 1.0 ? "Decreases Range" : "Increases Range" },
        { label: "Bore Effect", expr: (p) => p.boreDiamFactor > 1.0 ? "Increases Range" : "Decreases Range" }
      ],
      explanation: "Larger bulb reduces range; wider bore increases range."
    }
  },
  {
    globalId: "Q113",
    examId: "Q02215",
    paperRef: "5054/21/M/J/22 Q3(a)",
    pdfPage: 55,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Definition of Latent Heat of Fusion",
    paperType: "theory",
    marks: 2,
    questionText: `Define latent heat of fusion. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State the standard physics definition of latent heat of fusion.",
    givenInfo: ["Physical property: Latent heat of fusion."],
    toFind: "Definition including phase change and temperature condition.",
    physicsConcepts: `Latent heat of fusion is the thermal energy required to change a substance from solid to liquid without any change in temperature.
Specific latent heat of fusion refers to 1.0 kg of the substance: L_f = E / m.`,
    equations: `E = m L_f \\quad (\\Delta T = 0)`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify State Change (Mark 1)",
        body: "Thermal energy / heat needed to change a substance (or 1 kg of a substance) from solid to liquid (or melt it)."
      },
      {
        step: 2,
        title: "State Temperature Condition (Mark 2)",
        body: "Without any change in temperature / at its melting point."
      }
    ],
    finalAnswer: "The thermal energy required to change a substance from solid to liquid without any change of temperature (or at its melting point).",
    reasonablenessCheck: "Latent heat involves phase change at constant temperature; fusion refers to melting or freezing.",
    commonMistakes: [
      "Omitting 'without a change in temperature'.",
      "Confusing fusion (melting) with vaporisation (boiling)."
    ],
    takeaway: "Latent heat of fusion is energy required to change state from solid to liquid without changing temperature.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { energySupplied: 50 },
      controls: [],
      readouts: [
        { label: "Phase Change", expr: () => "Solid ➔ Liquid (Melting)" },
        { label: "Temperature Condition", expr: () => "CONSTANT (No ΔT)" }
      ],
      explanation: "Energy breaks intermolecular bonds at constant temperature during melting."
    }
  },
  {
    globalId: "Q114",
    examId: "Q02217",
    paperRef: "5054/21/M/J/22 Q3(b)(i)",
    pdfPage: 55,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Heating Curve Sketch for Metal Melting",
    paperType: "theory",
    marks: 2,
    questionText: `A sample of metal P at 100 °C is heated steadily until its temperature reaches 400 °C. The melting point of the metal is 250 °C.
On Fig. 3.1, sketch a graph to show how the temperature of the metal changes with time. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Sketch the temperature-time graph for metal P heated steadily from 100 °C to 400 °C with melting point 250 °C.",
    givenInfo: [
      "Initial temperature = 100 °C at t = 0",
      "Melting point = 250 °C",
      "Final temperature = 400 °C",
      "Energy supplied at a constant rate"
    ],
    toFind: "Sketch of temperature vs time.",
    physicsConcepts: `For a pure substance heated at a constant rate:
1. Temperature rises from 100 °C to 250 °C with a positive gradient (solid warming).
2. Temperature remains constant at 250 °C, producing a horizontal plateau (melting while absorbing latent heat of fusion).
3. Temperature rises from 250 °C to 400 °C with a positive gradient (liquid warming).`,
    equations: `\\text{Slope } > 0 \\text{ for } T < 250; \\quad \\text{Slope } = 0 \\text{ at } T = 250; \\quad \\text{Slope } > 0 \\text{ for } T > 250`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Draw Solid Heating Stage",
        body: "Start a line with a positive slope at (0, 100 °C) and rise to 250 °C."
      },
      {
        step: 2,
        title: "Draw Melting Plateau",
        body: "Draw a horizontal line (zero gradient) at 250 °C representing melting."
      },
      {
        step: 3,
        title: "Draw Liquid Heating Stage",
        body: "From the end of the horizontal section, continue with a line of positive slope rising to 400 °C."
      }
    ],
    finalAnswer: "Graph starts at 100 °C with a positive slope up to 250 °C; horizontal plateau at 250 °C; positive slope continuing from 250 °C up to 400 °C.",
    reasonablenessCheck: "A pure metal melts at a single temperature, producing a distinct horizontal plateau on the heating curve.",
    commonMistakes: [
      "Drawing a continuous straight line without a horizontal plateau at 250 °C.",
      "Starting at 0 °C instead of 100 °C."
    ],
    takeaway: "Heating curves show sloping sections for single phases and horizontal plateaus for phase changes.",
    simulation: {
      type: "heating_curve",
      defaultParams: { tempC: 250 },
      controls: [
        { id: "tempC", name: "Heating Progress", min: 100, max: 400, step: 25, default: 250, unit: "°C" }
      ],
      readouts: [
        { label: "Melting Plateau", expr: () => "250 °C" },
        { label: "Final Temperature", expr: () => "400 °C" }
      ],
      explanation: "Heating curve shows steady warming of the solid, a flat melting plateau at 250 °C, and warming of the liquid."
    }
  },
  {
    globalId: "Q115",
    examId: "Q02218",
    paperRef: "5054/21/M/J/22 Q3(b)(ii)",
    pdfPage: 55,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Heating Curve Comparison for Higher Latent Heat Substance",
    paperType: "theory",
    marks: 2,
    questionText: `A sample of a different metal Q has a greater latent heat of fusion than the sample of P.
P and Q are metals with the same melting points and the samples have the same heat capacity.
The experiment is repeated with the sample of Q. This sample is supplied with the same amount of energy per second as is supplied to the sample of P.
Explain how the graph of temperature against time for Q differs from the graph in (b)(i). [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how a higher latent heat of fusion modifies the heating curve when melting point, heat capacity, and power input are identical.",
    givenInfo: [
      "Metal Q has greater latent heat of fusion L_f than metal P.",
      "Melting point = 250 °C (identical).",
      "Heat capacity is identical.",
      "Power input P is identical."
    ],
    toFind: "Differences in temperature-time graph for sample Q.",
    physicsConcepts: `1. Plateau duration: Δt = (m * L_f) / P. Because Q has a greater latent heat of fusion, more energy is required to melt it. At constant power input, melting takes more time, so the horizontal line at 250 °C is longer.
2. Slopes: Gradient dT/dt = P / C. Because power P and heat capacity C are identical, the sloping sections before and after melting have the same gradient as for P.`,
    equations: `\\Delta t_{\\text{plateau}} = \\frac{m L_f}{P} \\propto L_f \\implies \\text{Higher } L_f \\implies \\text{Longer horizontal plateau}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Effect on Plateau (Mark 1)",
        body: "The horizontal section (plateau at 250 °C) is longer / takes more time."
      },
      {
        step: 2,
        title: "Provide Physical Reasoning (Mark 2)",
        body: "Because metal Q has a greater latent heat of fusion, more energy is required to melt it. Since energy is supplied at the same rate, melting takes longer."
      }
    ],
    finalAnswer: "The horizontal line (plateau) at 250 °C is longer / takes more time, because more energy is required to melt Q at the same rate of heating (sloping sections have the same gradient).",
    reasonablenessCheck: "Greater latent heat means more energy is needed to break bonds, so at constant heating power the plateau must extend longer in time.",
    commonMistakes: [
      "Changing the melting point (the question states both have the same melting point).",
      "Changing the gradients of the sloping sections (heat capacities are equal)."
    ],
    takeaway: "Higher latent heat lengthens the horizontal plateau; equal heat capacity keeps the gradients identical.",
    simulation: {
      type: "comparative_heating_curves",
      defaultParams: { latentHeatQMultiplier: 2.0 },
      controls: [
        { id: "latentHeatQMultiplier", name: "Latent Heat Ratio (Q / P)", min: 1.0, max: 3.0, step: 0.2, default: 2.0, unit: "x" }
      ],
      readouts: [
        { label: "Melting Point", expr: () => "250 °C (Same)" },
        { label: "Plateau Length Q", expr: (p) => p.latentHeatQMultiplier.toFixed(1) + "x longer" }
      ],
      explanation: "Comparing curves for P and Q shows identical slopes, but Q's melting plateau is twice as long."
    }
  }
];