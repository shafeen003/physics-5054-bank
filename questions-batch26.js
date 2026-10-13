/**
 * Master Question Store: Batch 26 (Q371 to Q388)
 * Section 2.3: Practical & Alternative to Practical (Final Batch — Chapter 2 Complete!)
 */

const QUESTIONS_BATCH_26 = [
  {
    globalId: "Q371",
    examId: "Q00705",
    paperRef: "5054/32/O/N/22 Q3",
    pdfPage: 190,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Conduction Gradient along a Metal Bar",
    paperType: "practical",
    marks: 6,
    questionText: `In this experiment, you will investigate the temperature gradient along a solid metal bar heated at one end.
A copper bar of length 30 cm is clamped horizontally with one end heated steadily by a small electrical heating element.
Thermometers T_1, T_2, and T_3 are placed in small oil-filled holes drilled into the bar at distances d = 5.0 cm, 15.0 cm, and 25.0 cm from the heated end.

(a) State the purpose of the oil placed in the thermometer holes. [1]
(b) When the temperature readings become steady, the temperatures recorded are:
T_1 (at 5.0 cm) = 78.5 °C
T_2 (at 15.0 cm) = 54.0 °C
T_3 (at 25.0 cm) = 38.0 °C
Ambient room temperature θ_R is 21.0 °C.
(i) Describe the pattern of temperature along the bar. [1]
(ii) Explain why the temperature decreases along the bar even after the readings become steady. [2]
(c) Suggest one modification to the bar to reduce heat loss to the surrounding air between the thermometers. [1]
(d) State one precaution taken to avoid parallax error when reading the thermometers. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Analyze steady-state thermal conduction along an unlagged metal bar, explain thermal contact fluid, evaluate temperature gradients and lateral losses, and identify measurement precautions.",
    givenInfo: [
      "Copper bar of length 30 cm heated at one end.",
      "Thermometer positions: d = 5.0 cm (78.5 °C), 15.0 cm (54.0 °C), 25.0 cm (38.0 °C).",
      "Room temperature θ_R = 21.0 °C."
    ],
    toFind: "Function of contact oil, temperature distribution pattern, steady-state heat loss mechanism, lagging suggestion, and parallax precaution.",
    physicsConcepts: `Steady-state conduction and lateral convective losses:
1. Contact thermal resistance: Air in an unfilled hole acts as an insulator due to low thermal conductivity. Adding a drop of oil eliminates air gaps, providing continuous thermal conduction between the copper bar and the thermometer glass bulb.
2. Steady-state temperature profile: At steady state, temperature at each point is constant in time, but varies with distance. Thermal energy conducts down the bar while simultaneously escaping to surrounding air via convection and radiation from the exposed surface.
3. Gradient: Because heat escapes laterally as it travels along the bar, the heat flow rate $dQ/dt$ decreases with distance, meaning the temperature falls continuously from the heated end to the cold end.
4. Insulation: Wrapping the bar in insulating lagging reduces lateral convection and radiation losses, making the temperature gradient along the bar more uniform.`,
    equations: `\\frac{d^2 T}{dx^2} - \\frac{h P}{k A} (T - T_{\\text{env}}) = 0 \\implies T(x) = T_{\\text{env}} + (T_0 - T_{\\text{env}}) e^{-m x}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Purpose of Contact Oil",
        body: "To improve thermal contact between the metal bar and the thermometer bulb (eliminating air gaps so heat conducts effectively into the thermometer)."
      },
      {
        step: 2,
        title: "Part (b)(i) Pattern of Temperature",
        body: "The temperature decreases continuously as distance from the heated end increases."
      },
      {
        step: 3,
        title: "Part (b)(ii) Explanation of Steady-State Decrease",
        body: "Thermal energy is lost from the sides / surface of the bar to the surrounding air by convection and radiation as it travels along the bar, so less heat conducts to further sections."
      },
      {
        step: 4,
        title: "Part (c) Modification to Reduce Heat Loss",
        body: "Wrap the bar in insulating lagging (e.g., mineral wool, cotton wool, or foam)."
      },
      {
        step: 5,
        title: "Part (d) Parallax Precaution",
        body: "View the thermometer scale with line of sight perpendicular to the stem at eye level with the liquid meniscus."
      }
    ],
    finalAnswer: "(a) To ensure good thermal contact between the bar and the thermometer bulb (eliminates insulating air gaps);\n(b)(i) Temperature decreases with increasing distance from the heated end;\n(b)(ii) Heat is lost to the surrounding air by convection and radiation from the exposed surface of the bar;\n(c) Wrap the bar in thermal insulation / lagging;\n(d) View the thermometer scale at eye level perpendicular to the meniscus.",
    reasonablenessCheck: "78.5 °C -> 54.0 °C -> 38.0 °C demonstrates an exponential decay curve characteristic of an unlagged fin in ambient air.",
    commonMistakes: [
      "Stating oil is used as a lubricant.",
      "Saying temperature decreases because the heater is cooling down (the question specifies steady-state conditions)."
    ],
    takeaway: "Contact oil eliminates air gaps in sensor wells; unlagged conductors lose heat laterally to air, creating a declining temperature gradient.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { barLagged: false },
      controls: [],
      readouts: [
        { label: "T at 5 cm", expr: () => "78.5 °C" },
        { label: "T at 15 cm", expr: () => "54.0 °C" },
        { label: "T at 25 cm", expr: () => "38.0 °C" }
      ],
      explanation: "Heat conducts along the bar while escaping laterally from the unlagged surface, producing a falling temperature curve."
    }
  },
  {
    globalId: "Q372",
    examId: "Q00706",
    paperRef: "5054/32/O/N/22 Q3(a)&(b)",
    pdfPage: 190,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Contact Fluid and Steady-State Conduction",
    paperType: "practical",
    marks: 2,
    questionText: `(a) State why a drop of oil is placed in each hole before inserting the thermometer. [1]
(b) Explain why the temperature at 25.0 cm remains lower than the temperature at 5.0 cm even when the heater has been running for a long time. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the role of contact oil and state why distant positions remain cooler at steady state.",
    givenInfo: [
      "Thermometers seated in oil-filled holes along a heated bar.",
      "Steady state reached."
    ],
    toFind: "Oil function and physical explanation for persistent temperature gradient.",
    physicsConcepts: `Thermal contact resistance and steady-state energy balance:
Air has low thermal conductivity ($k \\approx 0.026\\text{ W/(m K)}$). A drop of liquid oil fills microscopic air voids, matching acoustic impedance and conduction path between glass and copper.
At steady state, input power at the hot end balances continuous convective and radiative dissipation along the length of the bar. Because heat constantly leaves the bar's surface, the heat flux at 25 cm is lower than at 5 cm, maintaining a lower temperature.`,
    equations: `\\dot{Q}_{\\text{in}} = \\int_0^L h P (T(x) - T_{\\infty}) \\, dx; \\quad T(25\\text{ cm}) < T(5\\text{ cm})`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Function of Contact Oil",
        body: "To provide good thermal contact between the metal bar and the thermometer bulb (replaces insulating air gaps)."
      },
      {
        step: 2,
        title: "Part (b) Reason for Persistent Temperature Drop",
        body: "Thermal energy is continuously lost from the surface of the bar to the surrounding air, so the net energy reaching 25.0 cm is lower."
      }
    ],
    finalAnswer: "(a) To improve thermal contact / transfer heat efficiently between the bar and thermometer bulb;\n(b) Thermal energy is continuously transferred from the surface of the bar to the surroundings by convection and radiation.",
    reasonablenessCheck: "Without surface heat loss, the entire insulated bar would eventually reach uniform temperature; heat loss sustains the gradient.",
    commonMistakes: [
      "Saying oil prevents the thermometer from breaking.",
      "Claiming steady state means all points reach the same temperature."
    ],
    takeaway: "Contact fluids replace insulating air gaps; surface heat loss sustains the temperature gradient at steady state.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Oil Function", expr: () => "Eliminates air contact resistance" },
        { label: "Gradient Cause", expr: () => "Continuous lateral heat loss" }
      ],
      explanation: "Oil provides direct thermal contact, while lateral heat loss maintains the temperature gradient."
    }
  },
  {
    globalId: "Q373",
    examId: "Q00707",
    paperRef: "5054/32/O/N/22 Q3(c)&(d)",
    pdfPage: 190,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Thermal Lagging and Reading Precautions",
    paperType: "practical",
    marks: 2,
    questionText: `(c) Suggest how the apparatus can be modified so that the temperature of the bar at 25.0 cm becomes closer to the temperature at 5.0 cm. [1]
(d) State one precaution taken when reading the thermometer scales to ensure values are as accurate as possible. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Suggest a physical modification to flatten the bar's temperature gradient and state an accurate reading precaution.",
    givenInfo: [
      "Heated metal bar with temperature gradient.",
      "Thermometer scale readings required."
    ],
    toFind: "Apparatus modification and reading precaution.",
    physicsConcepts: `Thermal insulation of conductors:
If the exposed surface of the bar is covered with insulating lagging (such as felt, glass wool, or foam), heat loss to the ambient air by convection and radiation is suppressed. With minimal lateral heat loss, almost all thermal energy conducts through the full length of the bar, flattening the temperature gradient.
Reading accuracy requires viewing the scale perpendicular to the stem at eye level with the meniscus to eliminate parallax error.`,
    equations: `\\text{Lagging} \\implies h \\to 0 \\implies \\frac{dT}{dx} \\to \\text{constant and small}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (c) Modification to Flatten Gradient",
        body: "Wrap the bar in thermal insulation / lagging (e.g., mineral wool, cotton wool, or foam) to reduce heat loss to the air."
      },
      {
        step: 2,
        title: "Part (d) Reading Precaution",
        body: "Read the scale with line of sight perpendicular to the thermometer / at eye level with the meniscus to avoid parallax error."
      }
    ],
    finalAnswer: "(c) Wrap the metal bar in thermal insulation / lagging (or insulate the sides of the bar);\n(d) View the thermometer scale at eye level perpendicular to the meniscus to avoid parallax error.",
    reasonablenessCheck: "Insulating the sides forces heat to flow along the rod rather than leaking into the room, raising the far-end temperature.",
    commonMistakes: [
      "Suggesting using a stronger heater (this raises both temperatures without flattening the gradient).",
      "Stating 'repeat and average' when asked about taking an accurate single reading."
    ],
    takeaway: "Thermal lagging prevents lateral heat loss, flattening the temperature gradient; eye-level viewing eliminates parallax error.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { lagged: true },
      controls: [],
      readouts: [
        { label: "Lagged T at 5 cm", expr: () => "82.0 °C" },
        { label: "Lagged T at 25 cm", expr: () => "74.0 °C (Much closer)" }
      ],
      explanation: "Adding lagging suppresses lateral heat loss, bringing the far-end temperature closer to the heated end."
    }
  },
  {
    globalId: "Q374",
    examId: "Q02998",
    paperRef: "5054/41/M/J/23 Q3",
    pdfPage: 192,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Forced Convection Cooling Investigation Master Suite",
    paperType: "atp",
    marks: 7,
    questionText: `A student investigates how air speed affects the rate of cooling of hot water in a beaker using an electric fan (Fig. 3.1).
The fan is placed at distance d from the beaker and set to three different speeds:
- Speed 0 (fan off / still air)
- Speed 1 (low speed)
- Speed 2 (high speed)
In each test, 150 cm³ of water at 80 °C cools for 3.0 minutes.

(a) Table 3.1 shows results:
Speed 0: cools from 80.0 °C to 68.0 °C in 180 s (drop = 12.0 °C).
Speed 1: cools from 80.0 °C to 59.0 °C in 180 s (drop = 21.0 °C).
Speed 2: cools from 80.0 °C to 51.5 °C in 180 s (drop = 28.5 °C).
Calculate the cooling rate for Speed 0 and Speed 2 in °C/s. [2]
(b) State the relationship between air speed and rate of cooling. [1]
(c) State two variables that must be kept constant to ensure a fair comparison. [2]
(d) Explain, in terms of molecules, why blowing air across the surface of the water increases the rate of cooling. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate cooling rates under still and forced air conditions, deduce the relationship, state fair-testing controls, and explain enhanced evaporation in terms of molecules.",
    givenInfo: [
      "Water volume = 150 cm³, initial temperature = 80.0 °C.",
      "Cooling time = 180 s (3.0 minutes).",
      "Speed 0 drop = 12.0 °C; Speed 1 drop = 21.0 °C; Speed 2 drop = 28.5 °C."
    ],
    toFind: "Cooling rates, trend relationship, two controlled variables, and molecular explanation of forced evaporation.",
    physicsConcepts: `Forced convection and enhanced surface evaporation:
1. Cooling rate formula:
   $$R = \\frac{\\Delta \\theta}{t}$$
2. Forced air effect: Higher air speed increases the rate of cooling.
3. Molecular evaporation mechanism:
   - Faster-moving water molecules escape from the liquid surface into the air above.
   - In still air, an accumulation of water vapor forms above the surface, increasing the rate at which vapor molecules condense back into the liquid.
   - Moving air from the fan carries escaped vapor molecules away, preventing local saturation and allowing more energetic molecules to escape continuously.
   - Because the escaping molecules have higher-than-average kinetic energy, the average kinetic energy of the remaining liquid drops, lowering its temperature faster.`,
    equations: `R_0 = \\frac{12.0}{180} = 0.0667^\\circ\\text{C/s}; \\quad R_2 = \\frac{28.5}{180} = 0.1583^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This master entry coordinates subparts Q375 and Q376 for the forced convection fan experiment on PDF pages 192–193."
      }
    ],
    finalAnswer: "Full analytical calculations, trend deductions, control factors, and molecular evaporation explanations are detailed in Q375 and Q376 below.",
    reasonablenessCheck: "High fan speed increases cooling rate by a factor of 2.4 (from 0.067 to 0.158 °C/s) by accelerating surface evaporation.",
    commonMistakes: [
      "Saying the fan 'cools the molecules directly'.",
      "Omitting the removal of vapor molecules when explaining enhanced evaporation."
    ],
    takeaway: "Moving air removes escaped vapor molecules above the surface, maintaining a steep concentration gradient and accelerating evaporative cooling.",
    simulation: {
      type: "evaporation",
      defaultParams: { fanSpeed: 2 },
      controls: [
        { id: "fanSpeed", name: "Fan Speed Setting (0, 1, 2)", min: 0, max: 2, step: 1, default: 2, unit: "speed" }
      ],
      readouts: [
        { label: "Cooling Rate", expr: (p) => p.fanSpeed === 0 ? "0.067 °C/s" : (p.fanSpeed === 1 ? "0.117 °C/s" : "0.158 °C/s") },
        { label: "Evaporation Rate", expr: (p) => p.fanSpeed === 0 ? "Standard" : (p.fanSpeed === 1 ? "Elevated" : "Rapid") }
      ],
      explanation: "Airflow blows away the saturated vapor layer, allowing energetic surface molecules to escape continuously."
    }
  },
  {
    globalId: "Q375",
    examId: "Q02999",
    paperRef: "5054/41/M/J/23 Q3(a)&(b)",
    pdfPage: 192,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Air Speed Cooling Rate Calculations",
    paperType: "atp",
    marks: 3,
    questionText: `(a) Calculate the average rate of cooling for Speed 0 and Speed 2 in °C/s.
Speed 0 (fan off): temperature drops by 12.0 °C in 180 s.
Speed 2 (high speed): temperature drops by 28.5 °C in 180 s.
rate for Speed 0 = .................... °C/s
rate for Speed 2 = .................... °C/s [2]

(b) State the relationship between air speed and the rate of cooling of the water. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate cooling rates in °C/s for still air and high-speed forced air, and state the observed relationship.",
    givenInfo: [
      "Speed 0: Δθ = 12.0 °C in 180 s.",
      "Speed 2: Δθ = 28.5 °C in 180 s."
    ],
    toFind: "Cooling rates R_0 and R_2 in °C/s, and trend statement.",
    physicsConcepts: `Rate of cooling calculation:
$$R = \\frac{\\Delta \\theta}{t}$$
For Speed 0:
$$R_0 = \\frac{12.0}{180} = 0.0667\\text{ }^\\circ\\text{C/s}$$
For Speed 2:
$$R_2 = \\frac{28.5}{180} = 0.1583\\text{ }^\\circ\\text{C/s}$$
Relationship: As air speed increases, the rate of cooling increases.`,
    equations: `R_0 = \\frac{12.0}{180} = 0.0667 \\text{ }^\\circ\\text{C/s}; \\quad R_2 = \\frac{28.5}{180} = 0.1583 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Rate for Speed 0",
        body: "R_0 = 12.0 °C / 180 s = 0.0667 °C/s ≈ 0.067 °C/s."
      },
      {
        step: 2,
        title: "Compute Rate for Speed 2",
        body: "R_2 = 28.5 °C / 180 s = 0.1583 °C/s ≈ 0.16 °C/s (or 0.158 °C/s)."
      },
      {
        step: 3,
        title: "State Relationship (Part b)",
        body: "As air speed increases, the rate of cooling increases (or water cools faster at higher air speed)."
      }
    ],
    finalAnswer: "(a) rate for Speed 0 = 0.067 °C/s (or 0.0667 °C/s); rate for Speed 2 = 0.16 °C/s (or 0.158 °C/s);\n(b) As air speed increases, the rate of cooling increases.",
    reasonablenessCheck: "High air speed roughly doubles the cooling rate, consistent with forced convection and accelerated evaporation.",
    commonMistakes: [
      "Stating inversely proportional (the relationship is positive).",
      "Using minutes instead of seconds without stating units as °C/min."
    ],
    takeaway: "Cooling rate increases with air speed: rate = Δθ / t.",
    simulation: {
      type: "evaporation",
      defaultParams: { rate0: 0.067, rate2: 0.158 },
      controls: [],
      readouts: [
        { label: "Rate Speed 0", expr: () => "0.067 °C/s" },
        { label: "Rate Speed 2", expr: () => "0.158 °C/s" }
      ],
      explanation: "Dividing temperature drops by 180 s yields 0.067 °C/s for still air vs 0.158 °C/s for high-speed airflow."
    }
  },
  {
    globalId: "Q376",
    examId: "Q03000",
    paperRef: "5054/41/M/J/23 Q3(c)&(d)",
    pdfPage: 193,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Molecular Evaporation and Fair Testing",
    paperType: "atp",
    marks: 4,
    questionText: `(c) State two variables that must be kept constant to ensure a fair comparison between the three fan speeds.
1 ........................................................................................................................
2 ........................................................................................................................ [2]

(d) Explain, in terms of molecules, why blowing air across the surface of the water increases the rate of cooling. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "List two controlled variables for the fan experiment and explain the molecular mechanism of enhanced evaporative cooling under forced airflow.",
    givenInfo: [
      "Fan blowing air at different speeds across hot water in a beaker."
    ],
    toFind: "Two controlled variables and molecular explanation of evaporative cooling.",
    physicsConcepts: `1. Fair testing variables:
   - Volume / mass of water (150 cm³).
   - Starting / initial temperature of the water (80.0 °C).
   - Distance between fan and beaker.
   - Same beaker (same shape and surface area).
   - Ambient room temperature.
2. Molecular evaporation mechanics:
   - Energetic molecules at the surface overcome intermolecular forces and escape into the air as vapor.
   - Moving air blows away the layer of water vapor above the surface, preventing vapor molecules from condensing back into the liquid.
   - Because escaping molecules have higher-than-average kinetic energy, the mean kinetic energy of the remaining molecules decreases, lowering the liquid's temperature.`,
    equations: `\\bar{E}_{k,\\text{escaped}} > \\bar{E}_{k,\\text{liquid}} \\implies \\bar{E}_{k,\\text{remaining}} \\downarrow \\implies T \\downarrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Controlled Variables (Part c)",
        body: "1. Volume / mass of water (150 cm³).\n2. Distance between the fan and the beaker (or initial starting temperature / room temperature / same beaker)."
      },
      {
        step: 2,
        title: "Explain Molecular Mechanism (Part d)",
        body: "The moving air blows away water vapor molecules that have escaped from the surface. This prevents them from returning/condensing, allowing more energetic molecules to escape continuously, which reduces the average kinetic energy of the remaining liquid."
      }
    ],
    finalAnswer: "(c) 1. Volume / mass of water (150 cm³); 2. Distance between the fan and the beaker (or initial temperature / room temperature);\n(d) Moving air removes / blows away water vapor molecules above the surface, preventing them from re-entering; more energetic molecules continue to escape, reducing the average kinetic energy of the remaining liquid.",
    reasonablenessCheck: "Blowing on hot tea cools it faster by sweeping away saturated vapor so evaporation continues unimpeded.",
    commonMistakes: [
      "Saying the fan blows cold molecules into the water.",
      "Naming fan speed as a controlled variable (fan speed is the independent variable)."
    ],
    takeaway: "Airflow sweeps away escaped vapor molecules, accelerating the loss of energetic surface particles and lowering liquid temperature.",
    simulation: {
      type: "evaporation",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Control Factor", expr: () => "Fan Distance & Water Volume" },
        { label: "Molecular Mechanism", expr: () => "Sweeps away vapor; drops mean KE" }
      ],
      explanation: "Airflow removes vapor molecules above the liquid, allowing high-energy particles to escape continuously and lowering temperature."
    }
  },
  {
    globalId: "Q377",
    examId: "Q02133",
    paperRef: "5054/42/M/J/23 Q3",
    pdfPage: 194,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Surface Texture and Thermal Radiation Master Suite",
    paperType: "atp",
    marks: 6,
    questionText: `A student investigates the emission of thermal radiation from two metal plates heated to 90 °C:
Plate A: smooth shiny silver surface
Plate B: rough dull black surface
An infra-red radiation detector is positioned at distance d = 10 cm from each plate in turn.

(a) State which plate produces the greater reading on the radiation detector and explain why. [2]
(b) Describe one precaution taken when positioning the detector to ensure a fair comparison. [1]
(c) The detector is moved to a distance of 20 cm from Plate B.
Predict how the reading on the detector changes, and explain your prediction. [2]
(d) State why conduction and convection do not transfer thermal energy from the plate to the detector across the air gap as effectively as radiation. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Compare infrared emission between shiny silver and rough black plates, identify detector positioning precautions, predict distance effects, and evaluate the relative role of air conduction/convection.",
    givenInfo: [
      "Plate A: smooth shiny silver at 90 °C.",
      "Plate B: rough dull black at 90 °C.",
      "Detector distance d = 10 cm."
    ],
    toFind: "Emission comparison with reasoning, alignment precaution, distance prediction, and air medium conductivity explanation.",
    physicsConcepts: `Thermal radiation emission and detector geometry:
1. Emissivity: Rough, dull black surfaces have high emissivity ($\varepsilon \approx 0.95–0.98$), radiating infrared waves rapidly. Smooth shiny surfaces reflect radiation internally and emit very little ($\varepsilon \approx 0.05$).
2. Positioning: The detector must be placed at the same distance, centered, and perpendicular to each plate so it receives equivalent geometric flux.
3. Distance attenuation: Radiant intensity follows the inverse-square law ($I \propto 1/d^2$). Doubling distance from 10 cm to 20 cm reduces intensity to roughly one-quarter.
4. Air as an insulator: Air has very low thermal conductivity ($k \approx 0.026\text{ W/(m K)}$). Convection carries warm air upwards, not horizontally toward a sideways detector. Thus, horizontal heat transfer through air is dominated by radiation.`,
    equations: `P = \\varepsilon \\sigma A T^4; \\quad I \\propto \\frac{1}{d^2}; \\quad k_{\\text{air}} \\approx 0.026\\text{ W/(m K)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This master entry coordinates subparts Q378 and Q379 for the Paper 4 surface radiation experiment on PDF pages 194–195."
      }
    ],
    finalAnswer: "Full analytical calculations, alignment precautions, distance predictions, and air insulation explanations are detailed in Q378 and Q379 below.",
    reasonablenessCheck: "Plate B produces a detector reading several times higher than Plate A; moving from 10 to 20 cm drops the reading significantly.",
    commonMistakes: [
      "Saying Plate A emits more radiation because it is shiny.",
      "Stating air conducts heat rapidly to the detector."
    ],
    takeaway: "Rough dull black surfaces emit thermal radiation most effectively; horizontal heat transfer through air is dominated by radiation because air is a poor conductor and convection rises.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { distanceCm: 10 },
      controls: [
        { id: "distanceCm", name: "Detector Distance d", min: 5, max: 25, step: 5, default: 10, unit: "cm" }
      ],
      readouts: [
        { label: "Plate B (Black)", expr: () => "High Reading (Best Emitter)" },
        { label: "Plate A (Silver)", expr: () => "Low Reading (Poor Emitter)" }
      ],
      explanation: "Plate B emits thermal radiation at a much higher rate, while air's low conductivity leaves radiation as the dominant horizontal transfer mode."
    }
  },
  {
    globalId: "Q378",
    examId: "Q02134",
    paperRef: "5054/42/M/J/23 Q3(a)&(b)",
    pdfPage: 194,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Emissivity Comparison and Detector Alignment",
    paperType: "atp",
    marks: 3,
    questionText: `(a) State which plate (Plate A: smooth shiny silver, or Plate B: rough dull black) produces the greater reading on the radiation detector, and explain why. [2]
(b) Describe one precaution taken when positioning the detector to ensure a fair comparison. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify the plate producing the higher detector reading with physical reasoning, and state an alignment precaution.",
    givenInfo: [
      "Both plates at 90 °C.",
      "Plate A: shiny silver; Plate B: dull black."
    ],
    toFind: "Selected plate, emissivity explanation, and detector placement precaution.",
    physicsConcepts: `Thermal radiation emission:
1. Emissivity comparison: Rough, dull black surfaces have high emissivity ($\varepsilon \approx 0.95$), radiating infrared waves rapidly. Smooth shiny surfaces have low emissivity ($\varepsilon \approx 0.05$), emitting very little. Plate B produces the greater reading.
2. Fair alignment: The detector must be placed at the exact same perpendicular distance and centered on each plate so that differences in reading depend solely on surface emissivity.`,
    equations: `\\varepsilon_{\\text{rough black}} \\gg \\varepsilon_{\\text{shiny silver}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Select Plate and Explain",
        body: "Plate B (rough dull black). Explanation: Dull black surfaces are good / the best emitters of thermal radiation (or emit radiation at a much higher rate than shiny silver surfaces)."
      },
      {
        step: 2,
        title: "Part (b) Positioning Precaution",
        body: "Place the detector at the exact same distance from both plates / align the detector perpendicular to the center of each plate."
      }
    ],
    finalAnswer: "(a) Plate B; dull black surfaces are the best / most effective emitters of thermal radiation;\n(b) Place the detector at the same distance from each plate (or align perpendicular to the center of each plate).",
    reasonablenessCheck: "Dull black surfaces emit up to 20 times more infrared radiation than polished silver surfaces at 90 °C.",
    commonMistakes: [
      "Selecting Plate A, assuming shiny surfaces emit brightly.",
      "Stating 'black is a good absorber' when the plate is emitting heat."
    ],
    takeaway: "Rough dull black surfaces emit thermal radiation fastest; detector distance and alignment must be kept identical.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Greater Reading", expr: () => "Plate B (Rough Dull Black)" },
        { label: "Precaution", expr: () => "Identical Distance & Perpendicular Alignment" }
      ],
      explanation: "Plate B produces the higher reading because dull black surfaces have higher emissivity."
    }
  },
  {
    globalId: "Q379",
    examId: "Q02135",
    paperRef: "5054/42/M/J/23 Q3(c)&(d)",
    pdfPage: 195,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Distance Attenuation and Air Insulation",
    paperType: "atp",
    marks: 3,
    questionText: `(c) The detector is moved from 10 cm to 20 cm from Plate B.
Predict how the reading on the detector changes, and explain your prediction. [2]

(d) Explain why conduction and convection do not transfer thermal energy horizontally from the plate to the detector as effectively as radiation. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Predict and explain the effect of doubling detector distance, and explain why air conduction and convection are ineffective horizontally.",
    givenInfo: [
      "Detector moved from 10 cm to 20 cm from Plate B.",
      "Detector oriented horizontally across an air gap."
    ],
    toFind: "Detector reading change with explanation, and reason why conduction/convection are ineffective horizontally.",
    physicsConcepts: `1. Distance spreading: Thermal radiation spreads out as it travels away from the plate. Doubling distance disperses radiant energy over a larger area ($I \propto 1/d^2$), decreasing the detector reading.
2. Ineffective horizontal transfer:
   - Conduction: Air has very low thermal conductivity ($k \approx 0.026\text{ W/(m K)}$) because gas molecules are widely spaced, making air a poor conductor.
   - Convection: Convection currents carry warm, less dense air vertically upward, not horizontally across to the detector.
   - Therefore, horizontal heat transfer through air is dominated by radiation.`,
    equations: `I \\propto \\frac{1}{d^2}; \\quad k_{\\text{air}} \\ll k_{\\text{solid}}; \\quad \\text{Convection flow is vertical}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (c) Predict and Explain Distance Effect",
        body: "The reading decreases / falls because the thermal radiation spreads out over a larger area as distance increases (intensity follows an inverse-square relationship)."
      },
      {
        step: 2,
        title: "Part (d) Explain Why Conduction/Convection are Ineffective",
        body: "Air is a poor thermal conductor / good insulator, and convection currents rise vertically rather than moving horizontally across to the detector."
      }
    ],
    finalAnswer: "(c) The reading decreases because radiation spreads out over a larger area as distance increases;\n(d) Air is a poor thermal conductor and convection currents move warm air vertically upwards (not horizontally).",
    reasonablenessCheck: "Doubling distance cuts detected radiant flux significantly; warm air rising vertically prevents horizontal convective transfer.",
    commonMistakes: [
      "Saying the reading remains constant because plate temperature is unchanged.",
      "Claiming air conducts heat rapidly across the gap."
    ],
    takeaway: "Radiation intensity decreases with distance; horizontal heat transfer through air is dominated by radiation because air is an insulator and convection rises.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { distanceCm: 20 },
      controls: [],
      readouts: [
        { label: "At 20 cm", expr: () => "Reading Drops to ~25%" },
        { label: "Horizontal Convection", expr: () => "Negligible (Rises vertically)" }
      ],
      explanation: "Radiation intensity drops as rays diverge; air's low conductivity and vertical convection leave radiation as the primary horizontal transfer mode."
    }
  },
  {
    globalId: "Q380",
    examId: "Q01990",
    paperRef: "5054/31/M/J/24 Q3",
    pdfPage: 196,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Beaker Lid Materials Cooling Comparison Master Suite",
    paperType: "practical",
    marks: 6,
    questionText: `In this experiment, you will investigate how different lid materials affect the rate of cooling of hot water in a glass beaker.
You are provided with:
- a 250 cm³ glass beaker
- three circular lids of equal diameter made of cardboard, wood, and aluminium, each with a central hole for a thermometer
- hot water (~85 °C)
- thermometer and stopwatch.

(a) For each lid, 150 cm³ of hot water cools for 180 s:
Cardboard lid: cools from 82.0 °C to 74.0 °C (drop = 8.0 °C).
Wooden lid: cools from 82.0 °C to 73.0 °C (drop = 9.0 °C).
Aluminium lid: cools from 82.0 °C to 68.5 °C (drop = 13.5 °C).
Calculate the cooling rate for the cardboard lid and the aluminium lid in °C/s. [2]
(b) State and explain which lid is the most effective thermal insulator. [2]
(c) State two variables that were controlled to ensure a fair test. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate cooling rates for beakers covered with different lid materials, explain thermal conductivity differences, and state controlled variables.",
    givenInfo: [
      "Water volume = 150 cm³, cooling duration = 180 s.",
      "Cardboard lid drop = 8.0 °C; Wooden lid drop = 9.0 °C; Aluminium lid drop = 13.5 °C."
    ],
    toFind: "Cooling rates, most effective insulator with explanation, and two controlled variables.",
    physicsConcepts: `Thermal conduction through container lids:
1. All three lids suppress evaporative heat loss and upward air convection because they cover the water surface.
2. The remaining heat loss through the top occurs by thermal conduction through the lid material:
   $$\\frac{dQ}{dt} = \\frac{k A \\Delta T}{d}$$
3. Aluminium is a metal with high thermal conductivity ($k \\approx 205\\text{ W/(m K)}$), conducting heat through the lid rapidly.
4. Cardboard and wood are non-metallic insulators with low thermal conductivities ($k \\approx 0.05\\text{--}0.15\\text{ W/(m K)}$), conducting heat slowly.
5. The cardboard lid produces the smallest temperature drop (8.0 °C) and lowest cooling rate, making it the most effective thermal insulator.`,
    equations: `R_{\\text{cardboard}} = \\frac{8.0}{180} = 0.0444^\\circ\\text{C/s}; \\quad R_{\\text{aluminium}} = \\frac{13.5}{180} = 0.0750^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Practical Suite",
        body: "This master entry coordinates subparts Q381 and Q382 for the Paper 3 lid material investigation on PDF pages 196–197."
      }
    ],
    finalAnswer: "Full cooling rate calculations, conductivity explanations, and control factors are detailed in Q381 and Q382 below.",
    reasonablenessCheck: "The aluminium lid allows a 13.5 °C drop compared to 8.0 °C for cardboard because aluminium conducts heat away rapidly.",
    commonMistakes: [
      "Selecting aluminium as the best insulator.",
      "Omitting units from the calculated cooling rates."
    ],
    takeaway: "All lids stop evaporation, but insulating lids (cardboard/wood) minimize conductive loss through the cover far better than metal lids.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { lidType: "cardboard" },
      controls: [],
      readouts: [
        { label: "Cardboard Lid Rate", expr: () => "0.044 °C/s (Best Insulator)" },
        { label: "Aluminium Lid Rate", expr: () => "0.075 °C/s (Conducts heat)" }
      ],
      explanation: "Cardboard has low thermal conductivity, minimizing conduction through the lid and producing the lowest cooling rate."
    }
  },
  {
    globalId: "Q381",
    examId: "Q01991",
    paperRef: "5054/31/M/J/24 Q3(a)&(b)",
    pdfPage: 196,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Lid Material Cooling Rates and Insulation Ranking",
    paperType: "practical",
    marks: 4,
    questionText: `(a) Calculate the average rate of cooling for the beaker with the cardboard lid and the aluminium lid in °C/s:
Cardboard lid: temperature drops by 8.0 °C in 180 s.
Aluminium lid: temperature drops by 13.5 °C in 180 s.
rate for cardboard lid = .................... °C/s
rate for aluminium lid = .................... °C/s [2]

(b) State and explain which lid material is the most effective thermal insulator. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate cooling rates in °C/s for cardboard and aluminium lids, and state which material is the best insulator with physical reasoning.",
    givenInfo: [
      "Cardboard lid: Δθ = 8.0 °C in 180 s.",
      "Aluminium lid: Δθ = 13.5 °C in 180 s."
    ],
    toFind: "Cooling rates and best insulator identification with explanation.",
    physicsConcepts: `Thermal conductivity and cooling rates:
$$R = \\frac{\\Delta \\theta}{t}$$
For cardboard:
$$R_{\\text{cardboard}} = \\frac{8.0}{180} = 0.0444\\text{ }^\\circ\\text{C/s}$$
For aluminium:
$$R_{\\text{aluminium}} = \\frac{13.5}{180} = 0.0750\\text{ }^\\circ\\text{C/s}$$
Cardboard is the most effective insulator because it has the lowest rate of cooling and smallest temperature drop, resulting from its very low thermal conductivity compared to metal.`,
    equations: `R_{\\text{cardboard}} = \\frac{8.0}{180} = 0.0444 \\text{ }^\\circ\\text{C/s}; \\quad R_{\\text{aluminium}} = \\frac{13.5}{180} = 0.0750 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Rate for Cardboard Lid",
        body: "R_cardboard = 8.0 °C / 180 s = 0.0444 °C/s ≈ 0.044 °C/s."
      },
      {
        step: 2,
        title: "Compute Rate for Aluminium Lid",
        body: "R_aluminium = 13.5 °C / 180 s = 0.0750 °C/s ≈ 0.075 °C/s."
      },
      {
        step: 3,
        title: "State and Explain Most Effective Insulator (Part b)",
        body: "The cardboard lid is the most effective insulator. Explanation: It produces the smallest temperature decrease / lowest cooling rate because cardboard has a low thermal conductivity / is a poor thermal conductor."
      }
    ],
    finalAnswer: "(a) cardboard lid rate = 0.044 °C/s; aluminium lid rate = 0.075 °C/s;\n(b) Cardboard lid; it produces the lowest cooling rate because cardboard is a poor conductor of thermal energy / has low thermal conductivity.",
    reasonablenessCheck: "Cardboard conducts heat ~2000 times slower than aluminium, keeping the cooling rate through the lid low.",
    commonMistakes: [
      "Selecting aluminium because it cooled more (more cooling means a poorer insulator).",
      "Omitting units."
    ],
    takeaway: "The material with the lowest cooling rate is the best insulator; cardboard conducts heat far slower than aluminium.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { rateCard: 0.044, rateAlum: 0.075 },
      controls: [],
      readouts: [
        { label: "Cardboard Rate", expr: () => "0.044 °C/s" },
        { label: "Aluminium Rate", expr: () => "0.075 °C/s" },
        { label: "Best Insulator", expr: () => "Cardboard (Lowest rate)" }
      ],
      explanation: "Cardboard's low thermal conductivity yields the lowest cooling rate, making it the most effective insulator."
    }
  },
  {
    globalId: "Q382",
    examId: "Q01992",
    paperRef: "5054/31/M/J/24 Q3(c)",
    pdfPage: 196,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Control Variables in Lid Material Testing",
    paperType: "practical",
    marks: 2,
    questionText: `State two variables that were controlled in this experiment to ensure a fair comparison between the different lid materials.
1 ........................................................................................................................
2 ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "List two physical variables that must be controlled when comparing cooling rates between different lid materials.",
    givenInfo: [
      "Testing different lid materials on identical glass beakers."
    ],
    toFind: "Two independent controlled variables.",
    physicsConcepts: `Fair testing parameters in lid comparisons:
To isolate lid thermal conductivity as the only independent variable, all factors affecting thermal capacity, surface area, and cooling duration must remain constant:
1. Volume / mass of water (150 cm³).
2. Initial starting temperature of the water (82.0 °C).
3. Thickness and surface area / diameter of the lids.
4. Same beaker (same size, shape, and glass material).
5. Ambient room temperature / absence of air draughts.`,
    equations: `\\text{Keep constant: } V_{\\text{water}}, \\theta_{\\text{initial}}, A_{\\text{lid}}, d_{\\text{lid}}, \\theta_{\\text{room}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Water and Temperature Controls",
        body: "Volume / mass of water (150 cm³) and initial starting temperature of the water (82.0 °C)."
      },
      {
        step: 2,
        title: "Identify Lid Geometry Controls",
        body: "Thickness of the lids / diameter (surface area) of the lids (or same beaker / same room temperature)."
      }
    ],
    finalAnswer: "1. Volume / mass of water (150 cm³);\n2. Initial starting temperature of the water (82.0 °C) (or thickness of the lids / same beaker / room temperature).",
    reasonablenessCheck: "Varying lid thickness or water volume would alter heat flow independently of the material's thermal conductivity.",
    commonMistakes: [
      "Naming lid material (that is the independent variable).",
      "Naming final temperature."
    ],
    takeaway: "Water volume, initial temperature, and lid dimensions must be kept constant to isolate material conductivity.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Water Volume", expr: () => "150 cm³ (Constant)" },
        { label: "Starting Temp", expr: () => "82.0 °C (Constant)" },
        { label: "Lid Thickness", expr: () => "Identical for all materials" }
      ],
      explanation: "Controlling water volume, initial temperature, and lid thickness ensures a fair test of material conductivity."
    }
  },
  {
    globalId: "Q383",
    examId: "Q00775",
    paperRef: "5054/42/O/N/24 Q3",
    pdfPage: 198,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Fabric Insulation Investigation Master Suite",
    paperType: "atp",
    marks: 6,
    questionText: `A student investigates the thermal insulating properties of different clothing fabrics (cotton, wool, and polyester fleece).
Identical boiling tubes containing 30 cm³ of hot water at 80 °C are wrapped with equal thicknesses of each fabric.
A fourth uninsulated tube acts as a control.

(a) State the purpose of the uninsulated tube. [1]
(b) Data shows:
Control (no fabric): cools from 80 °C to 56 °C in 240 s (drop = 24 °C).
Cotton: cools from 80 °C to 66 °C in 240 s (drop = 14 °C).
Polyester fleece: cools from 80 °C to 70 °C in 240 s (drop = 10 °C).
Wool: cools from 80 °C to 72 °C in 240 s (drop = 8 °C).
Calculate the cooling rate for the control tube and the wool-wrapped tube in °C/s. [2]
(c) State and explain which fabric is the best thermal insulator. [2]
(d) State one factor about the fabric wrapping that must be controlled to ensure a fair test. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the purpose of an experimental control, calculate cooling rates in °C/s, identify the best fabric insulator with physical reasoning, and state a fabric control factor.",
    givenInfo: [
      "Boiling tubes with 30 cm³ of water at 80 °C cooling for 240 s.",
      "Control drop = 24 °C; Cotton drop = 14 °C; Polyester drop = 10 °C; Wool drop = 8 °C."
    ],
    toFind: "Control tube function, cooling rate calculations, best insulator deduction, and wrapping control factor.",
    physicsConcepts: `Fabric thermal insulation and trapped air:
1. Experimental control: An uninsulated tube provides a baseline showing the rate of heat loss without any fabric, allowing comparison to determine how much each fabric reduces heat loss.
2. Cooling rate:
   $$R = \\frac{\\Delta \\theta}{t}$$
3. Trapped air pockets: Wool fibres have a natural crimp and irregular structure that traps a high volume of stagnant air pockets. Air has very low thermal conductivity ($k \\approx 0.026\\text{ W/(m K)}$), and trapping it suppresses convection currents.
4. Wool produces the smallest temperature decrease (8 °C in 240 s), making it the most effective thermal insulator.
5. Control factor: Thickness of the fabric layer, number of wraps, or tightness of the wrapping around the tube.`,
    equations: `R_{\\text{control}} = \\frac{24}{240} = 0.100^\\circ\\text{C/s}; \\quad R_{\\text{wool}} = \\frac{8}{240} = 0.0333^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This master entry coordinates subparts Q384 and Q385 for the Paper 4 fabric insulation experiment on PDF pages 198–199."
      }
    ],
    finalAnswer: "Full subpart solutions covering control tube purpose, cooling rates, trapped air insulation mechanisms, and wrapping control factors are given in Q384 and Q385 below.",
    reasonablenessCheck: "Wool reduces the cooling rate to one-third of the uninsulated control (0.033 vs 0.100 °C/s) due to trapped air in its crimped fibres.",
    commonMistakes: [
      "Stating wool 'keeps things warm by generating heat'.",
      "Omitting units from the calculated rates."
    ],
    takeaway: "An uninsulated control provides a baseline; fabrics insulate by trapping air pockets, with crimped wool providing the lowest cooling rate.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { fabric: "wool" },
      controls: [],
      readouts: [
        { label: "Control Rate", expr: () => "0.100 °C/s (Fastest drop)" },
        { label: "Wool Rate", expr: () => "0.033 °C/s (Best Insulator)" }
      ],
      explanation: "Wool traps more stagnant air than cotton or polyester, providing the lowest cooling rate."
    }
  },
  {
    globalId: "Q384",
    examId: "Q00776",
    paperRef: "5054/42/O/N/24 Q3(a)&(b)",
    pdfPage: 198,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Purpose of Experimental Control and Rate Calculations",
    paperType: "atp",
    marks: 3,
    questionText: `(a) State the purpose of including the uninsulated tube in the experiment. [1]
(b) Calculate the average rate of cooling in °C/s for:
(i) the uninsulated control tube (drops by 24 °C in 240 s)
(ii) the wool-wrapped tube (drops by 8 °C in 240 s).
rate for control tube = .................... °C/s
rate for wool-wrapped tube = .................... °C/s [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State the role of an experimental control tube and calculate cooling rates for the control and wool-wrapped tubes in °C/s.",
    givenInfo: [
      "Control: Δθ = 24 °C in 240 s.",
      "Wool: Δθ = 8 °C in 240 s."
    ],
    toFind: "Purpose of control and two calculated rates in °C/s.",
    physicsConcepts: `1. Role of control: Provides a baseline reference to verify that the fabrics reduce heat loss and allows comparison of each fabric's performance against bare glass.
2. Cooling rates:
   $$R_{\\text{control}} = \\frac{24}{240} = 0.100\\text{ }^\\circ\\text{C/s}$$
   $$R_{\\text{wool}} = \\frac{8}{240} = 0.0333\\text{ }^\\circ\\text{C/s}$$`,
    equations: `R_{\\text{control}} = \\frac{24}{240} = 0.100 \\text{ }^\\circ\\text{C/s}; \\quad R_{\\text{wool}} = \\frac{8}{240} = 0.0333 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Purpose of Control (Part a)",
        body: "To act as a control / baseline comparison (to confirm that the fabrics reduce heat loss and compare their insulating effect against an uninsulated tube)."
      },
      {
        step: 2,
        title: "Compute Rate for Control Tube (Part b)",
        body: "R_control = 24 °C / 240 s = 0.100 °C/s."
      },
      {
        step: 3,
        title: "Compute Rate for Wool-Wrapped Tube (Part b)",
        body: "R_wool = 8 °C / 240 s = 0.0333 °C/s ≈ 0.033 °C/s."
      }
    ],
    finalAnswer: "(a) To act as a control / baseline for comparison (to show the effect of adding fabric);\n(b) rate for control = 0.10 °C/s (or 0.100 °C/s); rate for wool = 0.033 °C/s (or 0.0333 °C/s).",
    reasonablenessCheck: "The control drops 24 °C vs 8 °C for wool, confirming that wool reduces the cooling rate by two-thirds.",
    commonMistakes: [
      "Saying the control is 'to check if the thermometer works'.",
      "Dividing 240 by 24 instead of 24 by 240."
    ],
    takeaway: "An experimental control provides a baseline; rate = Δθ / t.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { rateCtrl: 0.100, rateWool: 0.033 },
      controls: [],
      readouts: [
        { label: "Control Rate", expr: () => "0.100 °C/s" },
        { label: "Wool Rate", expr: () => "0.033 °C/s" }
      ],
      explanation: "Dividing temperature drops by 240 s yields 0.100 °C/s for bare glass vs 0.033 °C/s for wool."
    }
  },
  {
    globalId: "Q385",
    examId: "Q00777",
    paperRef: "5054/42/O/N/24 Q3(c)&(d)",
    pdfPage: 199,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Trapped Air Insulation Mechanism and Wrapping Controls",
    paperType: "atp",
    marks: 3,
    questionText: `(c) State and explain which fabric (cotton, polyester fleece, or wool) is the best thermal insulator. [2]
(d) State one factor about the fabric wrapping that must be controlled to ensure a fair test. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify the most effective fabric insulator with physical reasoning and state a controlled variable related to the fabric wrapping.",
    givenInfo: [
      "Cotton drops 14 °C; Polyester drops 10 °C; Wool drops 8 °C in 240 s."
    ],
    toFind: "Best fabric insulator, trapped air explanation, and wrapping control factor.",
    physicsConcepts: `Fabric insulation mechanisms:
1. Best insulator: Wool produces the smallest temperature decrease (8 °C) and lowest cooling rate (0.033 °C/s).
2. Trapped air: Wool fibres trap more pockets of stationary air than cotton or polyester. Because air is a poor conductor of heat and trapping it suppresses convection currents, wool slows conduction and convection through the tube wall most effectively.
3. Wrapping control: Thickness of the fabric layer, number of layers/turns wrapped around the tube, or tightness of the wrapping.`,
    equations: `\\Delta \\theta_{\\text{wool}} = 8^\\circ\\text{C} \\implies \\text{Lowest heat loss rate}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (c) Identify Best Insulator and Explain",
        body: "Wool is the best insulator. Explanation: It produces the smallest temperature decrease / lowest cooling rate because its crimped fibres trap more air, and trapped air is a poor conductor of heat and stops convection."
      },
      {
        step: 2,
        title: "Part (d) State Wrapping Control Factor",
        body: "Thickness of the fabric layer / number of layers / tightness of wrapping around the tube."
      }
    ],
    finalAnswer: "(c) Wool; it has the smallest temperature decrease / lowest cooling rate because it traps more air pockets, reducing conduction and convection;\n(d) Thickness of the fabric (or number of layers / tightness of wrapping).",
    reasonablenessCheck: "Wool traps abundant stagnant air, making it the most effective insulator.",
    commonMistakes: [
      "Selecting cotton.",
      "Saying wool generates heat."
    ],
    takeaway: "Wool insulates best by trapping stagnant air pockets; fabric thickness and wrapping tightness must be kept constant.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Best Fabric", expr: () => "Wool (8 °C drop in 240 s)" },
        { label: "Wrapping Control", expr: () => "Same thickness / layer count" }
      ],
      explanation: "Wool traps more air than cotton or polyester, providing the highest thermal resistance."
    }
  },
  {
    globalId: "Q386",
    examId: "Q01414",
    paperRef: "5054/41/M/J/25 Q3",
    pdfPage: 201,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Greenhouse Effect Investigation Master Suite",
    paperType: "atp",
    marks: 6,
    questionText: `A student investigates the greenhouse effect using two identical wooden trays containing equal depths of dry soil.
Tray A is open to the air.
Tray B is covered with a clear glass sheet (Fig. 3.1).
An incandescent lamp is positioned at equal distance above the center of each tray.

(a) When the lamp is switched on, temperatures are recorded every 2 minutes for 10 minutes.
Table 3.1 shows:
Tray A (open): soil temperature rises from 20 °C to 28 °C (rise = 8 °C).
Tray B (glass cover): soil temperature rises from 20 °C to 38 °C (rise = 18 °C).
Explain why the temperature rises more in Tray B than in Tray A. [3]
(b) State two variables that were controlled to ensure a fair comparison. [2]
(c) Suggest why the experiment should be carried out in a room without draughts. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the enhanced heating in a glass-covered tray using greenhouse effect and convection principles, state controlled variables, and explain the need to avoid draughts.",
    givenInfo: [
      "Two identical trays of dry soil exposed to an incandescent lamp.",
      "Tray A: open.",
      "Tray B: covered with a clear glass sheet.",
      "Tray A rises by 8 °C; Tray B rises by 18 °C over 10 minutes."
    ],
    toFind: "Greenhouse effect and convection explanation, two control variables, and draught precaution.",
    physicsConcepts: `Greenhouse effect and convection trapping:
1. Tray A (open): Warms under the lamp, but warm air directly above the soil expands, decreases in density, and rises away by convection. It also loses heat by evaporation of residual moisture and emits infrared radiation.
2. Tray B (glass cover):
   - Convection trapping: The glass sheet acts as a physical barrier, trapping warm air inside and preventing convective heat loss to the room.
   - Greenhouse effect: Glass is transparent to short-wavelength visible and near-infrared light from the lamp. The soil absorbs this radiation and re-emits longer-wavelength infrared radiation. Glass absorbs and reflects this long-wavelength infrared, trapping heat inside.
3. Draught precaution: Draughts increase convective heat loss from the open tray A, causing uncontrolled temperature variations.`,
    equations: `\\text{Glass cover} \\implies \\text{Traps convection} + \\text{Traps long-wave IR (Greenhouse Effect)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master ATP Suite",
        body: "This master entry coordinates subparts Q387 and Q388 for the Paper 4 greenhouse effect investigation on PDF pages 201–202."
      }
    ],
    finalAnswer: "Full subpart solutions detailing greenhouse radiation trapping, convection suppression, fair testing controls, and draught elimination are given in Q387 and Q388 below.",
    reasonablenessCheck: "The covered tray reaches 38 °C vs 28 °C for the open tray, consistent with greenhouse heat trapping.",
    commonMistakes: [
      "Saying the glass magnifies the light.",
      "Omitting convection suppression by the glass lid."
    ],
    takeaway: "Glass covers trap heat by blocking upward convection and reflecting re-radiated long-wavelength infrared (the greenhouse effect).",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { greenhouseCover: true },
      controls: [],
      readouts: [
        { label: "Tray A (Open) Rise", expr: () => "8.0 °C (Convective loss active)" },
        { label: "Tray B (Glass) Rise", expr: () => "18.0 °C (Greenhouse trapped)" }
      ],
      explanation: "The glass cover blocks upward convection and traps re-radiated infrared, raising soil temperature by 18 °C."
    }
  },
  {
    globalId: "Q387",
    examId: "Q01415",
    paperRef: "5054/41/M/J/25 Q3(a)",
    pdfPage: 201,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Greenhouse Effect and Convection Trapping Mechanism",
    paperType: "atp",
    marks: 3,
    questionText: `Explain why the soil in Tray B (covered with glass) reaches a much higher temperature than the soil in Tray A (open to the air). [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the physical reasons why a glass cover causes soil to reach a higher temperature under a lamp.",
    givenInfo: [
      "Tray A is open.",
      "Tray B is covered with a clear glass sheet.",
      "Both exposed to an incandescent lamp for 10 minutes."
    ],
    toFind: "Three-mark physical explanation covering convection suppression and infrared trapping.",
    physicsConcepts: `Greenhouse physics:
1. Convection suppression: The glass sheet physically traps warm air above the soil, preventing warm air from rising and escaping by convection.
2. Short-wave transmission: Glass is transparent to incoming short-wavelength radiation from the lamp, which passes through and heats the soil.
3. Long-wave absorption/reflection: The warm soil re-radiates longer-wavelength infrared radiation. Glass does not transmit this longer-wavelength infrared easily; it absorbs and reflects it back toward the soil, trapping thermal energy.`,
    equations: `\\lambda_{\\text{lamp}} < \\lambda_{\\text{soil}}; \\quad \\text{Glass transmits short } \\lambda, \\, \\text{absorbs/reflects long } \\lambda`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Explain Convection Suppression (Marks 1 & 2)",
        body: "The glass sheet traps warm air / prevents warm air from rising and escaping, stopping heat loss by convection."
      },
      {
        step: 2,
        title: "Explain Radiation Trapping / Greenhouse Effect (Mark 3)",
        body: "Glass allows short-wavelength radiation from the lamp to enter, but traps / reflects the longer-wavelength infra-red radiation emitted by the warm soil (greenhouse effect)."
      }
    ],
    finalAnswer: "The glass sheet traps warm air and prevents it from escaping by convection; glass allows short-wavelength radiation from the lamp to pass through, but absorbs / reflects the longer-wavelength infra-red radiation emitted by the warm soil (greenhouse effect).",
    reasonablenessCheck: "Trapping convection and reflecting re-radiated infrared together account for the 10 °C higher temperature in Tray B.",
    commonMistakes: [
      "Claiming glass magnifies the sunlight/lamp light.",
      "Omitting convection suppression."
    ],
    takeaway: "Glass traps heat by stopping upward convection and reflecting re-radiated long-wavelength infrared radiation.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Convection Loss", expr: () => "Blocked by Glass Sheet" },
        { label: "Radiation Trap", expr: () => "Re-radiated IR Reflected Back" }
      ],
      explanation: "Glass suppresses convection and reflects re-radiated infrared, driving the higher temperature in Tray B."
    }
  },
  {
    globalId: "Q388",
    examId: "Q00430",
    paperRef: "5054/42/M/J/26 Q4",
    pdfPage: 204,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 4 ATP: Comprehensive Investigation Planning for Solar Water Heaters",
    paperType: "atp",
    marks: 6,
    questionText: `A student wants to investigate how the surface color of a solar water heater panel affects the temperature increase of water flowing through it.
Plan an experiment to investigate this relationship.
You are provided with:
- model solar heater panels with different surface colors (dull black, shiny black, white, shiny silver)
- water containers, tubing, and a pump to circulate water at a steady rate
- a radiant heat lamp
- thermometers.

In your plan, you should:
- describe how the apparatus is set up and used
- state the measurements to be taken
- state the variables that must be kept constant
- explain how the results are evaluated to reach a conclusion. [6]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Design a complete experimental investigation to evaluate how panel surface color affects water heating, including setup, measurements, controlled variables, and data analysis.",
    givenInfo: [
      "Model solar panels of different colors: dull black, shiny black, white, shiny silver.",
      "Water circulation tubing, pump, radiant lamp, thermometers."
    ],
    toFind: "Full experimental procedure, measurement plan, control variables, and evaluation method.",
    physicsConcepts: `Experimental design for solar thermal absorption:
1. Independent variable: Surface color/finish of the panel (dull black, shiny black, white, shiny silver).
2. Dependent variable: Temperature rise of the water:
   $$\\Delta \\theta = \\theta_{\\text{out}} - \\theta_{\\text{in}}$$
3. Controlled variables:
   - Water flow rate (constant volume flow rate from pump).
   - Distance from radiant lamp to panel.
   - Power/brightness of the radiant lamp.
   - Panel surface area and tubing dimensions.
   - Initial water temperature $\\theta_{\\text{in}}$.
4. Procedure: Set up the panel at distance d from the lamp. Pump water through at a steady rate. Record $\\theta_{\\text{in}}$ and $\\theta_{\\text{out}}$ once steady-state flow is established. Repeat under identical conditions for each surface color.
5. Evaluation: Calculate $\\Delta \\theta$ for each panel. The panel producing the largest $\\Delta \\theta$ is the most effective absorber of thermal radiation.`,
    equations: `\\Delta \\theta = \\theta_{\\text{out}} - \\theta_{\\text{in}}; \\quad P_{\\text{absorbed}} = \\dot{m} c \\Delta \\theta`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Setup and Procedure (Marks 1 & 2)",
        body: "Position the radiant lamp at a fixed distance d facing the first model panel. Connect the pump and tubing to circulate water through the panel at a constant flow rate. Switch on the lamp and pump."
      },
      {
        step: 2,
        title: "Measurements to be Taken (Mark 3)",
        body: "Measure the temperature of the water entering the panel (θ_in) and the temperature of the water exiting the panel (θ_out) using thermometers once steady flow is reached. Measure time or flow rate."
      },
      {
        step: 3,
        title: "Key Controlled Variables (Marks 4 & 5)",
        body: "Keep constant: distance between the lamp and panel; power / brightness of the lamp; water flow rate; surface area of panel; initial water temperature."
      },
      {
        step: 4,
        title: "Evaluation and Conclusion (Mark 6)",
        body: "Calculate the temperature rise Δθ = θ_out - θ_in for each panel color. Compare the values of Δθ; the panel with the largest temperature rise (expected to be dull black) is the best absorber of thermal radiation."
      }
    ],
    finalAnswer: "1. Setup: Position radiant lamp at a fixed distance from the panel; pump water through at a steady rate;\n2. Measurements: Measure inlet temperature θ_in and outlet temperature θ_out (and calculate Δθ = θ_out - θ_in);\n3. Controlled variables: Distance between lamp and panel, lamp power/voltage, water flow rate, panel surface area, starting temperature;\n4. Evaluation: Compare values of Δθ for each color; the panel producing the largest temperature increase is the most effective absorber (dull black > shiny black > white > shiny silver).",
    reasonablenessCheck: "A controlled flow rate and fixed lamp distance ensure differences in temperature rise reflect surface absorption alone, with dull black expected to yield the highest Δθ.",
    commonMistakes: [
      "Failing to control water flow rate.",
      "Measuring temperature only inside the container rather than across the panel (inlet vs outlet).",
      "Varying the lamp distance between trials."
    ],
    takeaway: "A complete investigation plan requires: setup, clear measurements (Δθ), key controlled variables (flow rate, distance, power), and an analytical conclusion linking Δθ to surface absorptivity.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { panelInvestigation: true },
      controls: [],
      readouts: [
        { label: "Dull Black Δθ", expr: () => "8.5 °C (Maximum absorption)" },
        { label: "Shiny Black Δθ", expr: () => "6.0 °C" },
        { label: "White Δθ", expr: () => "3.2 °C" },
        { label: "Shiny Silver Δθ", expr: () => "1.8 °C (Minimum absorption)" }
      ],
      explanation: "Testing panels under identical flow and irradiance reveals that dull black yields the largest temperature rise."
    }
  }
];