/**
 * Master Question Store: Batch 23 (Q326 to Q340)
 * Section 2.3: Transfer of Thermal Energy (Theory Paper 2 Part 1)
 */

const QUESTIONS_BATCH_23 = [
  {
    globalId: "Q326",
    examId: "Q02827",
    paperRef: "5054/21/M/J/21 Q2",
    pdfPage: 163,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Convection Currents in Domestic Water Heating",
    paperType: "theory",
    marks: 5,
    questionText: `A student investigates how thermal energy is transferred through water in a glass flask when heated at the base.
A crystal of potassium permanganate is placed at the bottom of the flask to color the water.
When the flame is applied directly beneath the crystal, purple water is seen to rise upwards, move across the top, and sink down the opposite side.

(a) Explain, in terms of the density of water, why the purple water rises. [2]
(b) Describe what happens to the cooler water at the top of the flask and explain why this completes a circulating current. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the upward movement of heated colored water in terms of density, and describe how sinking cooler liquid forms a continuous convection current.",
    givenInfo: [
      "Flask of water with potassium permanganate crystal at the bottom.",
      "Heat applied directly under the crystal at the base.",
      "Colored water rises, flows across the top, and sinks on the cooler side."
    ],
    toFind: "Density explanation for rising liquid, and explanation of the full circulation loop.",
    physicsConcepts: `Thermal convection in liquids:
1. Heating at the base transfers thermal energy by conduction through the glass to the water touching the crystal[cite: 152].
2. The water molecules gain kinetic energy, move faster, and push slightly further apart[cite: 152].
3. The heated water expands, increasing in volume while its mass remains constant, so its density falls[cite: 152].
4. Because its density is lower than the surrounding colder water, a net buoyant upward force pushes it toward the surface[cite: 152].
5. At the surface, the warm water cools by transferring heat to the air, contracts, becomes denser, and sinks, completing a convection current loop[cite: 152].`,
    equations: `\\rho = \\frac{m}{V}; \\quad V \\uparrow \\implies \\rho \\downarrow; \\quad F_{\\text{buoyant}} = (\\rho_{\\text{cold}} - \\rho_{\\text{warm}}) g V > 0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Explain Why Purple Water Rises",
        body: "The water near the flame is heated and expands[cite: 152]. Its density decreases / becomes less dense than the cooler water around it, so it floats / rises to the top[cite: 152]."
      },
      {
        step: 2,
        title: "Part (b) Describe Downward Flow and Circulation",
        body: "Water at the top cools as it loses thermal energy to the air, contracts, and its density increases[cite: 152]. This denser, cooler water sinks to the bottom to replace the rising warm water, setting up a continuous circulating convection current[cite: 152]."
      }
    ],
    finalAnswer: "(a) Water is heated, expands, and its density decreases; being less dense, it rises[cite: 152];\n(b) Cooler water at the top is denser and sinks to replace the rising warm water, setting up a continuous circulating convection current[cite: 152].",
    reasonablenessCheck: "The three standard criteria for Cambridge convection marks are fulfilled: expands, density falls, rises (and cooler denser fluid sinks)[cite: 152, 153].",
    commonMistakes: [
      "Saying water rises because it is 'lighter' without stating that it expands and its density falls[cite: 153].",
      "Stating particles themselves become less dense."
    ],
    takeaway: "Convection is driven by density differences: heated fluid expands, its density falls, and it rises while denser cold fluid sinks to replace it[cite: 152].",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: { heatBase: true },
      controls: [],
      readouts: [
        { label: "Base Water", expr: () => "Expands ➔ Density falls ➔ Rises[cite: 152]" },
        { label: "Top Water", expr: () => "Cools ➔ Density rises ➔ Sinks[cite: 152]" }
      ],
      explanation: "Colored tracer shows heated water expanding, floating upwards, and circulating as cooler water sinks[cite: 152]."
    }
  },
  {
    globalId: "Q327",
    examId: "Q02828",
    paperRef: "5054/21/M/J/21 Q2(a)",
    pdfPage: 163,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Density Reduction in Heated Liquids",
    paperType: "theory",
    marks: 2,
    questionText: `When water is heated at the bottom of a container, it expands.
Explain, in terms of the density of the water, why the heated water moves upwards. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Link thermal expansion, density decrease, and upward buoyant motion of water heated at the base[cite: 152].",
    givenInfo: [
      "Water is heated at the base of a container[cite: 152].",
      "Water expands upon heating[cite: 152]."
    ],
    toFind: "Two-mark explanation of upward motion using density concepts[cite: 152].",
    physicsConcepts: `Thermal expansion and fluid density:
$$\\rho = \\frac{m}{V}$$
Heating a fixed mass of water increases the mean separation of its molecules, increasing volume $V$[cite: 152]. Because density is mass per unit volume, density $\\rho$ decreases[cite: 152]. The warmer, less dense liquid experiences an upward buoyant force from the surrounding denser liquid[cite: 152].`,
    equations: `\\rho_{\\text{warm}} < \\rho_{\\text{cold}} \\implies \\text{Upward buoyant displacement}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Expansion to Density (Mark 1)",
        body: "Because the heated water expands, its density decreases / it becomes less dense than the cooler water[cite: 152]."
      },
      {
        step: 2,
        title: "Relate Density to Buoyancy (Mark 2)",
        body: "The less dense warm water rises above the denser, cooler surrounding water[cite: 152]."
      }
    ],
    finalAnswer: "The heated water expands so its density decreases; the less dense warm water rises above the cooler, denser water[cite: 152].",
    reasonablenessCheck: "Fluids of lower density naturally float on top of fluids of higher density[cite: 152].",
    commonMistakes: [
      "Stating 'heat rises' without explaining density[cite: 153].",
      "Saying molecules expand in volume."
    ],
    takeaway: "Heating causes expansion, lowering fluid density and causing the warmer liquid to float upward[cite: 152].",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Density Change", expr: () => "Density decreases upon expansion[cite: 152]" },
        { label: "Motion", expr: () => "Floats upward buoyantly[cite: 152]" }
      ],
      explanation: "Thermal expansion decreases fluid density, causing heated water to rise[cite: 152]."
    }
  },
  {
    globalId: "Q328",
    examId: "Q02829",
    paperRef: "5054/21/M/J/21 Q2(b)",
    pdfPage: 163,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Circulating Convection Current Completion",
    paperType: "theory",
    marks: 3,
    questionText: `Describe what happens to the cooler water at the top of the flask and explain how this completes a circulating convection current. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the downward displacement of cooler surface water and the formation of a continuous convection loop[cite: 152].",
    givenInfo: [
      "Warm water has reached the surface of the flask[cite: 152].",
      "Cooler liquid exists at the top edges[cite: 152]."
    ],
    toFind: "Three-mark description of downward flow and circulating current[cite: 152].",
    physicsConcepts: `Convection loop completion:
1. At the surface, water transfers thermal energy to the air and the cooler glass walls[cite: 152].
2. As it cools, it contracts, and its density increases[cite: 152].
3. The cooler, denser water sinks down the sides of the flask toward the bottom[cite: 152].
4. It moves across the base to take the place of the rising warm water, setting up a continuous circulation cycle known as a convection current[cite: 152].`,
    equations: `\\text{Cooling at top} \\implies V \\downarrow \\implies \\rho \\uparrow \\implies \\text{Sinks to complete loop}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Describe Cooling at the Surface (Mark 1)",
        body: "Water at the top cools down, contracts, and becomes denser[cite: 152]."
      },
      {
        step: 2,
        title: "Describe Sinking Motion (Mark 2)",
        body: "The cooler, denser water sinks down to the bottom of the flask[cite: 152]."
      },
      {
        step: 3,
        title: "Explain Completion of Loop (Mark 3)",
        body: "It replaces the warm water that is rising, establishing a continuous circulating current[cite: 152]."
      }
    ],
    finalAnswer: "The cooler water at the top is denser and sinks; it flows to the bottom to replace the rising warm water, completing a continuous circulating convection current[cite: 152].",
    reasonablenessCheck: "A continuous flow loop requires mass conservation: rising liquid must be balanced by sinking liquid[cite: 152].",
    commonMistakes: [
      "Forgetting to mention that cooler water sinks because its density is higher[cite: 152].",
      "Calling the circulation conduction[cite: 152]."
    ],
    takeaway: "Cooler, denser liquid sinks to replace rising warm fluid, establishing a circulating convection current[cite: 152].",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Surface Flow", expr: () => "Cools and becomes denser[cite: 152]" },
        { label: "Circulation", expr: () => "Continuous convection loop[cite: 152]" }
      ],
      explanation: "Surface liquid cools and sinks, drawing new liquid across the bottom to complete the convection cycle[cite: 152]."
    }
  },
  {
    globalId: "Q329",
    examId: "Q02019",
    paperRef: "5054/21/O/N/21 Q3",
    pdfPage: 165,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Solar Water Heating Panel Master Suite",
    paperType: "theory",
    marks: 6,
    questionText: `Fig. 3.1 shows a solar water heating panel installed on a south-facing roof.
The panel consists of a black metal absorber plate, copper water pipes attached to the plate, a glass sheet covering the front, and insulation behind the plate.

(a) Explain why the absorber plate is painted dull black. [1]
(b) Explain two functions of the glass sheet on the front of the panel. [2]
(c) The Sun shines on the panel for 2.0 hours.
The mass of water heated is 45 kg and the temperature of the water rises by 24 °C.
The specific heat capacity of water is 4200 J/(kg °C).
Calculate the thermal energy transferred to the water and the average useful power output of the panel. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain black surface absorption, list two functions of the front glass cover, and calculate thermal energy gained and average power output[cite: 152].",
    givenInfo: [
      "Water mass m = 45 kg",
      "Temperature rise ΔT = 24 °C",
      "Specific heat capacity of water c = 4200 J/(kg °C)",
      "Time t = 2.0 hours = 2.0 × 3600 = 7200 s"
    ],
    toFind: "Absorption explanation, functions of glass sheet, thermal energy E, and power output P.",
    physicsConcepts: `Solar thermal collector physics:
1. Dull black absorber: Dull black surfaces have high absorptivity for infrared and visible light, maximizing solar energy absorption[cite: 152].
2. Glass cover functions:
   - Traps a layer of stagnant air, preventing convective heat loss to outdoor wind[cite: 152].
   - Transmits incoming short-wavelength solar radiation, but absorbs and reflects re-radiated longer-wavelength infrared emitted by the warm black plate (the greenhouse effect)[cite: 152].
3. Thermal energy gained: $E = m c \\Delta T$.
4. Average useful power: $P = E / t$ (with time in seconds)[cite: 152].`,
    equations: `E = m c \\Delta T; \\quad P = \\frac{E}{t}; \\quad t = 2.0 \\times 3600 = 7200 \\text{ s}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Dull Black Surface",
        body: "Dull black surfaces are good absorbers of thermal radiation (or absorb maximum radiation from the Sun)[cite: 152]."
      },
      {
        step: 2,
        title: "Part (b) Functions of the Glass Cover",
        body: "1. Traps air / stops warm air from blowing away, reducing heat loss by convection[cite: 152].\n2. Traps long-wavelength infrared radiation emitted by the black plate (greenhouse effect)[cite: 152]."
      },
      {
        step: 3,
        title: "Part (c) Calculate Energy Gained",
        body: "E = m * c * ΔT = 45 kg * 4200 J/(kg °C) * 24 °C = 4 536 000 J ≈ 4.5 × 10⁶ J (4.54 MJ)."
      },
      {
        step: 4,
        title: "Part (c) Calculate Average Power Output",
        body: "t = 2.0 h * 3600 s/h = 7200 s[cite: 152].\nP = E / t = 4 536 000 J / 7200 s = 630 W."
      }
    ],
    finalAnswer: "(a) Dull black is a good / the best absorber of thermal radiation[cite: 152];\n(b) 1. Reduces convection losses by trapping air; 2. Traps re-radiated infrared radiation (greenhouse effect)[cite: 152];\n(c) Energy = 4.5 × 10⁶ J (or 4536 kJ); Power = 630 W.",
    reasonablenessCheck: "4.54 MJ delivered over 2 hours gives 630 W, consistent with a ~1–2 m² domestic solar thermal panel operating at ~50% efficiency.",
    commonMistakes: [
      "Using hours instead of seconds when calculating power[cite: 152].",
      "Stating the glass sheet conducts heat to the water."
    ],
    takeaway: "Solar collectors combine black absorbers for maximum absorption with glass covers to suppress convective and radiative heat loss[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { massWaterKg: 45, tempRise: 24, timeHours: 2.0 },
      controls: [
        { id: "tempRise", name: "Water Temp Rise", min: 10, max: 40, step: 2, default: 24, unit: "°C" }
      ],
      readouts: [
        { label: "Energy Transferred E", expr: (p) => (45 * 4200 * p.tempRise / 1e6).toFixed(2) + " MJ" },
        { label: "Average Power Output", expr: (p) => (45 * 4200 * p.tempRise / 7200).toFixed(0) + " W" }
      ],
      explanation: "The solar panel delivers 4.54 MJ over 2 hours, generating 630 W of useful thermal power."
    }
  },
  {
    globalId: "Q330",
    examId: "Q02020",
    paperRef: "5054/21/O/N/21 Q3(a)",
    pdfPage: 165,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Solar Collector Black Absorber Coating",
    paperType: "theory",
    marks: 1,
    questionText: `Explain why the absorber plate of the solar collector is painted dull black. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State the physical reason for coating a solar panel absorber plate with dull black paint[cite: 152].",
    givenInfo: [
      "Absorber plate exposed to sunlight on a roof[cite: 152]."
    ],
    toFind: "Physical justification for dull black finish[cite: 152].",
    physicsConcepts: `Thermal radiation surface properties:
Black surfaces have high absorptivity for electromagnetic radiation across both visible and infrared wavelengths, reflecting minimal light[cite: 152]. A dull, matte finish prevents specular reflection, maximizing solar energy absorption[cite: 152].`,
    equations: `\\alpha_{\\text{dull black}} \\approx 0.95\\text{--}0.98 \\implies \\text{Maximum absorption}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Absorption Characteristic",
        body: "Dull black surfaces are good / the best absorbers of thermal radiation (or absorb more radiation than light/shiny surfaces)[cite: 152]."
      }
    ],
    finalAnswer: "Dull black surfaces are good / the best absorbers of thermal radiation (or absorb maximum radiation from the Sun)[cite: 152].",
    reasonablenessCheck: "Matte black reflects less than 5% of incident light, converting nearly all solar irradiance into thermal energy[cite: 152].",
    commonMistakes: [
      "Stating 'black attracts heat' (radiation is absorbed, not attracted).",
      "Stating black is a good emitter (true, but irrelevant here since the panel's purpose is to absorb heat)[cite: 152]."
    ],
    takeaway: "Dull black is chosen because it is the most effective absorber of thermal radiation[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Surface Finish", expr: () => "Dull Black[cite: 152]" },
        { label: "Absorptivity α", expr: () => "0.96 (Maximum Absorption)[cite: 152]" }
      ],
      explanation: "A dull black surface absorbs maximum solar thermal radiation with minimal reflection[cite: 152]."
    }
  },
  {
    globalId: "Q331",
    examId: "Q02021",
    paperRef: "5054/21/O/N/21 Q3(b)",
    pdfPage: 165,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Functions of Glass Cover on Solar Collectors",
    paperType: "theory",
    marks: 2,
    questionText: `Explain two functions of the glass sheet placed on the front of the solar collector.
1 ........................................................................................................................
2 ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State two physical functions of the front glass pane on a solar collector panel.",
    givenInfo: [
      "Transparent glass pane positioned over the black absorber plate[cite: 152]."
    ],
    toFind: "Two independent functions of the glass sheet.",
    physicsConcepts: `Functions of the glazing cover:
1. Convection suppression: Traps a layer of stagnant air between the glass and the plate, preventing wind and air currents from carrying away heat by convection[cite: 152].
2. Greenhouse effect: Glass is transparent to short-wavelength solar radiation, which passes through to heat the absorber plate[cite: 152]. As the plate warms, it emits longer-wavelength infrared radiation, which glass absorbs and reflects back, trapping heat inside[cite: 152].
3. Weather protection: Protects the absorber plate from rain and dirt.`,
    equations: `\\text{Transmits short-wave solar radiation; blocks/reflects long-wave emitted IR}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Convective Protection (Function 1)",
        body: "Traps air / prevents warm air being blown away, reducing thermal energy loss by convection[cite: 152]."
      },
      {
        step: 2,
        title: "Identify Radiative Trapping (Function 2)",
        body: "Allows short-wavelength solar radiation in, but absorbs or reflects the longer-wavelength infrared radiation emitted by the hot absorber plate (greenhouse effect)[cite: 152]."
      }
    ],
    finalAnswer: "1. Reduces heat loss by convection (traps warm air / stops wind blowing heat away)[cite: 152];\n2. Traps re-radiated infra-red radiation (greenhouse effect / lets short-wave radiation in but blocks long-wave radiation out)[cite: 152].",
    reasonablenessCheck: "An unglazed absorber plate loses heat to wind as fast as it collects it; glazing provides a greenhouse barrier[cite: 152].",
    commonMistakes: [
      "Saying the glass attracts heat.",
      "Saying the glass conducts heat into the pipes."
    ],
    takeaway: "The front glass sheet reduces convective losses and traps re-radiated infrared via the greenhouse effect[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { glazed: true },
      controls: [],
      readouts: [
        { label: "Function 1", expr: () => "Stops Convection Loss (Traps Air)[cite: 152]" },
        { label: "Function 2", expr: () => "Traps Re-radiated IR (Greenhouse Effect)[cite: 152]" }
      ],
      explanation: "The glass cover allows sunlight to enter while blocking convective heat loss and trapping re-radiated infrared[cite: 152]."
    }
  },
  {
    globalId: "Q332",
    examId: "Q02022",
    paperRef: "5054/21/O/N/21 Q3(i)",
    pdfPage: 165,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Solar Water Heating Energy Calculation",
    paperType: "theory",
    marks: 2,
    questionText: `The Sun shines on the panel for 2.0 hours.
The mass of water heated is 45 kg and the temperature of the water rises by 24 °C.
The specific heat capacity of water is 4200 J/(kg °C).
Calculate the thermal energy transferred to the water.
thermal energy = .................... J [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate thermal energy gained by 45 kg of water when its temperature rises by 24 °C.",
    givenInfo: [
      "Water mass m = 45 kg",
      "Temperature rise ΔT = 24 °C",
      "Specific heat capacity of water c = 4200 J/(kg °C)"
    ],
    toFind: "Thermal energy E in Joules.",
    physicsConcepts: `Sensible thermal energy calculation:
$$E = m \\cdot c \\cdot \\Delta T$$`,
    equations: `E = m c \\Delta T = 45 \\times 4200 \\times 24`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Known Values",
        body: "m = 45 kg, c = 4200 J/(kg °C), ΔT = 24 °C."
      },
      {
        step: 2,
        title: "Compute Energy",
        body: "E = 45 * 4200 * 24 = 189 000 * 24 = 4 536 000 J."
      },
      {
        step: 3,
        title: "State with Significant Figures",
        body: "E ≈ 4.5 × 10⁶ J (or 4.54 × 10⁶ J / 4540 kJ)."
      }
    ],
    finalAnswer: "4.5 × 10⁶ J (or 4 536 000 J / 4.54 × 10⁶ J / 4540 kJ)",
    reasonablenessCheck: "45 kg of water warming by 24 °C absorbs ~4.5 MJ of energy, a typical domestic heating gain.",
    commonMistakes: [
      "Multiplying by the time of 2.0 hours when only E = mcΔT is requested.",
      "Arithmetic errors."
    ],
    takeaway: "E = mcΔT calculates thermal energy gained directly from mass, specific heat capacity, and temperature rise.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { massKg: 45, tempC: 24 },
      controls: [],
      readouts: [
        { label: "Water Mass", expr: () => "45 kg" },
        { label: "Temp Rise", expr: () => "24.0 °C" },
        { label: "Thermal Energy Gained", expr: () => "4.54 MJ" }
      ],
      explanation: "Heating 45 kg of water by 24 °C requires 4.54 MJ of thermal energy."
    }
  },
  {
    globalId: "Q333",
    examId: "Q02024",
    paperRef: "5054/21/O/N/21 Q3(i)(iii)",
    pdfPage: 165,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Solar Panel Average Useful Power Output",
    paperType: "theory",
    marks: 2,
    questionText: `Calculate the average useful power output of the panel during the 2.0 hours.
power = .................... W [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate average power output in Watts using the energy gained (4 536 000 J) over 2.0 hours[cite: 152].",
    givenInfo: [
      "Energy transferred E = 4 536 000 J (from Q332)",
      "Time t = 2.0 hours"
    ],
    toFind: "Average power P in Watts[cite: 152].",
    physicsConcepts: `Power is the rate of energy transfer[cite: 152]:
$$P = \\frac{E}{t}$$
Time must be converted from hours to seconds:
$$t = 2.0\\text{ h} \\times 3600\\text{ s/h} = 7200\\text{ s}$$[cite: 152]`,
    equations: `t = 2.0 \\times 3600 = 7200 \\text{ s}; \\quad P = \\frac{E}{t} = \\frac{4\\,536\\,000}{7200}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Convert Time to Seconds",
        body: "t = 2.0 hours * 3600 s/hour = 7200 s[cite: 152]."
      },
      {
        step: 2,
        title: "Calculate Power",
        body: "P = 4 536 000 J / 7200 s = 630 W."
      }
    ],
    finalAnswer: "630 W",
    reasonablenessCheck: "A domestic roof panel delivering 630 W is consistent with solar irradiance on ~1 m² at 50% efficiency.",
    commonMistakes: [
      "Dividing by 2.0 hours directly without converting to seconds (P = 4 536 000 / 2 = 2 268 000 W)[cite: 152].",
      "Dividing by 120 minutes instead of 7200 seconds[cite: 152]."
    ],
    takeaway: "Power P = Energy / time in seconds[cite: 152]. Always convert hours to seconds before dividing.",
    simulation: {
      type: "specific_heat_calorimetry",
      defaultParams: { energyJ: 4536000, timeSec: 7200 },
      controls: [],
      readouts: [
        { label: "Energy Transferred", expr: () => "4.54 MJ" },
        { label: "Time in Seconds", expr: () => "7200 s (2.0 h)[cite: 152]" },
        { label: "Average Power Output", expr: () => "630 W" }
      ],
      explanation: "Transferring 4.54 MJ over 7200 seconds corresponds to an average useful power output of 630 W."
    }
  },
  {
    globalId: "Q334",
    examId: "Q02035",
    paperRef: "5054/21/O/N/21 Q5(b)",
    pdfPage: 166,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Particle Mechanisms of Conduction in Metals",
    paperType: "theory",
    marks: 3,
    questionText: `Thermal conduction occurs in metals by two processes.
Describe both processes, referring to particles in your answer. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe the two simultaneous microscopic processes responsible for thermal conduction in metals[cite: 152].",
    givenInfo: [
      "Thermal conduction occurring in a solid metal[cite: 152]."
    ],
    toFind: "Three-mark description covering lattice vibrations and free electron diffusion[cite: 152].",
    physicsConcepts: `Two microscopic conduction mechanisms in metals:
1. Lattice ion vibrations: Metal ions at the hot end vibrate with greater amplitude and collide with neighboring ions, transferring kinetic energy along the lattice[cite: 152].
2. Free electron diffusion: Delocalised free electrons absorb kinetic energy at the hot end, drift rapidly through the lattice, and collide with distant ions, transferring energy throughout the metal[cite: 152].`,
    equations: `\\text{Total conduction} = \\text{Lattice ion collisions} + \\text{Free electron diffusion}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Process 1: Lattice Ion Vibrations (Mark 1)",
        body: "Ions / atoms at the hot end vibrate with greater amplitude and pass kinetic energy to neighboring ions through collisions[cite: 152]."
      },
      {
        step: 2,
        title: "Process 2: Free Electron Movement (Mark 2 & 3)",
        body: "Free (delocalised) electrons gain kinetic energy at the hot region and move rapidly throughout the metal structure[cite: 152], colliding with distant ions and transferring energy quickly[cite: 152]."
      }
    ],
    finalAnswer: "1. Ions at the hot end vibrate more vigorously and pass energy to neighboring ions by collisions[cite: 152];\n2. Free (delocalised) electrons gain kinetic energy and move rapidly through the metal lattice, colliding with distant ions to transfer energy throughout the material[cite: 152].",
    reasonablenessCheck: "Non-metals possess only lattice vibrations; metals add free electron drift, explaining why they conduct heat hundreds of times faster[cite: 152].",
    commonMistakes: [
      "Omitting free electrons (which accounts for two of the three marks)[cite: 153, 160].",
      "Stating metal ions move from the hot end to the cold end."
    ],
    takeaway: "Conduction in metals occurs by vibrating lattice ions colliding with neighbors and free electrons diffusing rapidly through the lattice[cite: 152].",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 80 },
      controls: [],
      readouts: [
        { label: "Mechanism 1", expr: () => "Lattice Ion Collisions[cite: 152]" },
        { label: "Mechanism 2", expr: () => "Free Electron Drift[cite: 152]" }
      ],
      explanation: "Fixed ions vibrate and pass energy to neighbors while free electrons drift rapidly along the structure[cite: 152]."
    }
  },
  {
    globalId: "Q335",
    examId: "Q01721",
    paperRef: "5054/22/M/J/22 Q4(d)",
    pdfPage: 166,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Radiative Heat Emission from Warm Equipment",
    paperType: "theory",
    marks: 2,
    questionText: `A piece of electrical equipment has an outer metal casing.
During use, the casing becomes warm.
(i) State the method of thermal energy transfer by which energy is emitted from the casing into space without requiring a medium. [1]
(ii) Suggest how the casing can be designed so that it emits thermal energy as rapidly as possible. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify the mode of heat transfer that requires no medium, and suggest an exterior casing design to maximize radiative cooling[cite: 152].",
    givenInfo: [
      "Warm metal casing of electrical equipment emitting heat into room air[cite: 152]."
    ],
    toFind: "Heat transfer mode and casing design recommendation[cite: 152].",
    physicsConcepts: `Thermal radiation and casing design:
1. Radiation consists of infrared electromagnetic waves that travel across space without requiring particles or a material medium[cite: 152].
2. Rate of radiation emission:
$$P = \\varepsilon \\sigma A T^4$$
To maximize emission rate:
- Surface finish: Paint dull black or matte dark color to maximize emissivity $\\varepsilon$[cite: 152].
- Geometry: Add cooling fins to maximize exposed surface area $A$[cite: 152].`,
    equations: `P_{\\text{rad}} = \\varepsilon \\sigma A (T^4 - T_{\\text{env}}^4); \\quad \\text{Maximize } \\varepsilon \\text{ and } A[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (i) Identify Transfer Mode",
        body: "Radiation (or infra-red radiation)[cite: 152]."
      },
      {
        step: 2,
        title: "Part (ii) Design Modification",
        body: "Paint the casing dull black (or matte dark color) / add cooling fins to increase surface area[cite: 152]."
      }
    ],
    finalAnswer: "(i) Radiation (or infra-red radiation)[cite: 152];\n(ii) Paint the casing dull black (or give it a large surface area / add cooling fins)[cite: 152].",
    reasonablenessCheck: "Audio amplifiers and computer heat sinks are finished with black anodized fins for this reason[cite: 152].",
    commonMistakes: [
      "Stating conduction or convection for part (i) (both require a material medium)[cite: 152].",
      "Recommending shiny silver paint for the casing[cite: 152]."
    ],
    takeaway: "Radiation requires no medium; maximize emission by using a dull black finish and increasing surface area with fins[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { finish: "black_fins" },
      controls: [],
      readouts: [
        { label: "Transfer Method", expr: () => "Infra-Red Radiation[cite: 152]" },
        { label: "Optimal Design", expr: () => "Dull Black Fins (High ε & Area)[cite: 152]" }
      ],
      explanation: "Dull black cooling fins maximize emissivity and surface area to emit thermal radiation rapidly[cite: 152]."
    }
  },
  {
    globalId: "Q336",
    examId: "Q00960",
    paperRef: "5054/22/O/N/22 Q3",
    pdfPage: 168,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Leslie's Cube Radiation Experiment Master Suite",
    paperType: "theory",
    marks: 8,
    questionText: `A hollow metal cube (Leslie's cube) has vertical faces painted dull black, shiny silver, white, and dull grey.
Boiling water at 100 °C is poured into the cube.
An infra-red detector connected to a meter is placed at an equal distance from each face in turn.

(a) State which face produces the greatest meter reading and explain why. [2]
(b) State which face produces the smallest meter reading. [1]
(c) State two variables that must be kept constant when comparing the radiation from the different faces. [2]
(d) The cube is emptied, allowed to cool to room temperature, and placed outdoors in bright sunlight.
State which face warms up most rapidly and explain why. [2]
(e) State what would happen to the detector readings if the detector were moved further away from the cube. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Evaluate emission from the four faces of Leslie's cube, state fair-testing controls, predict heating order when irradiated, and state the effect of detector distance[cite: 152].",
    givenInfo: [
      "Leslie's cube with four faces: dull black, shiny silver, white, dull grey.",
      "Filled with boiling water at 100 °C.",
      "Infra-red detector placed at equal distances from each face[cite: 152]."
    ],
    toFind: "Face with greatest reading, face with smallest reading, two control variables, fastest-warming face in sunlight, and effect of distance[cite: 152].",
    physicsConcepts: `Leslie's cube thermal radiation principles:
1. Emission: All faces are at the same temperature (100 °C). Dull black has the highest emissivity (ε ≈ 0.98), emitting the most radiation; shiny silver has the lowest emissivity (ε ≈ 0.05)[cite: 152].
2. Absorption in sunlight: When cold in sunlight, the cube absorbs incoming radiation. Dull black is the best absorber, taking in solar radiation fastest and warming up most rapidly[cite: 152].
3. Controlled variables: Distance from face to detector, vertical height/alignment of detector, and identical initial water temperature[cite: 152].
4. Distance effect: Radiation intensity falls inversely with the square of distance ($I \\propto 1/d^2$); moving the detector further away decreases the reading[cite: 152].`,
    equations: `P_{\\text{rad}} = \\varepsilon \\sigma A T^4; \\quad I \\propto \\frac{1}{d^2}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Face with Greatest Reading",
        body: "Dull black face. Explanation: Dull black surfaces have the highest emissivity / are the best emitters of thermal radiation[cite: 152]."
      },
      {
        step: 2,
        title: "Part (b) Face with Smallest Reading",
        body: "Shiny silver face (poor emitter / good reflector)[cite: 152]."
      },
      {
        step: 3,
        title: "Part (c) Two Controlled Variables",
        body: "1. Distance between the face and the detector;\n2. Orientation / angle of detector relative to face (or vertical alignment / same surface area of each face)[cite: 152]."
      },
      {
        step: 4,
        title: "Part (d) Warming in Sunlight",
        body: "Dull black face. Explanation: Dull black surfaces are the best absorbers of thermal radiation[cite: 152]."
      },
      {
        step: 5,
        title: "Part (e) Effect of Greater Distance",
        body: "The meter reading decreases / falls (radiation intensity spreads out over a larger area)[cite: 152]."
      }
    ],
    finalAnswer: "(a) Dull black face: dull black surfaces are the best emitters of thermal radiation[cite: 152];\n(b) Shiny silver face[cite: 152];\n(c) 1. Distance between detector and face; 2. Height/angle of detector[cite: 152];\n(d) Dull black face: dull black is the best absorber of thermal radiation[cite: 152];\n(e) The detector reading decreases.",
    reasonablenessCheck: "Dull black is both the best emitter when hot and the best absorber when irradiated; detector readings diminish with distance[cite: 152].",
    commonMistakes: [
      "Saying shiny silver emits the most radiation[cite: 153].",
      "Confusing emission in part (a) with absorption in part (d)[cite: 152]."
    ],
    takeaway: "Dull black surfaces emit the most radiation when hot and absorb the most when irradiated; radiation intensity drops with distance[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { cubeEmission: true },
      controls: [],
      readouts: [
        { label: "Dull Black Face", expr: () => "Maximum Emission Reading[cite: 152]" },
        { label: "Shiny Silver Face", expr: () => "Minimum Emission Reading[cite: 152]" },
        { label: "In Sunlight", expr: () => "Dull Black Warms Fastest[cite: 152]" }
      ],
      explanation: "Leslie's cube demonstrates that dull black is both the strongest emitter and the strongest absorber of thermal radiation[cite: 152]."
    }
  },
  {
    globalId: "Q337",
    examId: "Q00961",
    paperRef: "5054/22/O/N/22 Q3(a)",
    pdfPage: 168,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Leslie's Cube Highest Emission Identification",
    paperType: "theory",
    marks: 2,
    questionText: `State which face of Leslie's cube produces the greatest reading on the radiation detector, and explain why. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify the face of Leslie's cube emitting the most radiation and state the physical reason[cite: 152].",
    givenInfo: [
      "Leslie's cube filled with boiling water at 100 °C.",
      "Faces: dull black, shiny silver, white, dull grey[cite: 152]."
    ],
    toFind: "Selected face and explanation referencing surface emissivity[cite: 152].",
    physicsConcepts: `Thermal radiation emission from surfaces:
At a given temperature, the rate of emission of thermal radiation per unit area is proportional to the emissivity $\\varepsilon$ of the surface[cite: 152].
Dull black surfaces have the highest emissivity (close to 1.0), meaning they emit thermal radiation at the greatest rate[cite: 152].`,
    equations: `P = \\varepsilon \\sigma A T^4; \\quad \\varepsilon_{\\text{dull black}} \\approx 0.98 \\implies \\text{Max emission rate}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Face (Mark 1)",
        body: "The dull black face[cite: 152]."
      },
      {
        step: 2,
        title: "Provide Physical Reason (Mark 2)",
        body: "Dull black surfaces are the best / most effective emitters of thermal radiation[cite: 152]."
      }
    ],
    finalAnswer: "Dull black face; dull black surfaces are the best / most effective emitters of thermal radiation[cite: 152].",
    reasonablenessCheck: "Dull black surfaces emit nearly 10 times more infrared radiation than polished silver surfaces at 100 °C[cite: 152].",
    commonMistakes: [
      "Selecting shiny silver[cite: 153].",
      "Stating black absorbs heat (the cube is emitting heat to the detector, not absorbing)[cite: 152]."
    ],
    takeaway: "Dull black is the best emitter of thermal radiation, producing the highest reading on a radiation detector[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Greatest Reading", expr: () => "Dull Black Face[cite: 152]" },
        { label: "Reason", expr: () => "Best emitter of thermal radiation[cite: 152]" }
      ],
      explanation: "Dull black surfaces emit thermal radiation at the highest rate[cite: 152]."
    }
  },
  {
    globalId: "Q338",
    examId: "Q00962",
    paperRef: "5054/22/O/N/22 Q3(b)",
    pdfPage: 168,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Leslie's Cube Lowest Emission Identification",
    paperType: "theory",
    marks: 1,
    questionText: `State which face of Leslie's cube produces the smallest reading on the radiation detector. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify the face of Leslie's cube emitting the least thermal radiation[cite: 152].",
    givenInfo: [
      "Faces: dull black, shiny silver, white, dull grey[cite: 152].",
      "Cube at 100 °C."
    ],
    toFind: "The face producing the lowest detector reading[cite: 152].",
    physicsConcepts: `Thermal radiation emission from reflective surfaces:
Polished shiny silver surfaces have very low emissivity ($\\varepsilon \\approx 0.05$)[cite: 152]. Because they reflect radiation instead of emitting it, they emit thermal radiation at the lowest rate, producing the smallest reading on the detector[cite: 152].`,
    equations: `\\varepsilon_{\\text{shiny silver}} \\approx 0.05 \\implies \\text{Minimum emission rate}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Worst Emitter",
        body: "Shiny silver surfaces have the lowest emissivity and emit the least thermal radiation[cite: 152]."
      }
    ],
    finalAnswer: "The shiny silver face (or polished metal face)[cite: 152].",
    reasonablenessCheck: "Shiny silver reflects infrared radiation and acts as a poor emitter, producing minimal detector deflection[cite: 152].",
    commonMistakes: [
      "Selecting the white face (white is an intermediate emitter in infrared; shiny silver is the lowest)[cite: 152].",
      "Selecting dull grey."
    ],
    takeaway: "Shiny silver surfaces are poor emitters of thermal radiation, producing the smallest detector reading[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Smallest Reading", expr: () => "Shiny Silver Face[cite: 152]" },
        { label: "Emissivity ε", expr: () => "0.05 (Poor Emitter)[cite: 152]" }
      ],
      explanation: "Polished silver surfaces emit the least thermal radiation among common surface finishes[cite: 152]."
    }
  },
  {
    globalId: "Q339",
    examId: "Q00963",
    paperRef: "5054/22/O/N/22 Q3(i)",
    pdfPage: 168,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Controlled Variables in Radiation Emission Comparisons",
    paperType: "theory",
    marks: 2,
    questionText: `State two variables that must be kept constant when comparing the radiation emitted from the different faces of Leslie's cube.
1 ........................................................................................................................
2 ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "List two variables that must be held constant to fairly compare thermal radiation emitted from the faces of Leslie's cube[cite: 152].",
    givenInfo: [
      "Comparing radiation emitted from four differently painted faces of a heated cube[cite: 152]."
    ],
    toFind: "Two independent controlled variables.",
    physicsConcepts: `Fair testing in radiation emission experiments:
To isolate surface finish as the sole variable affecting detector reading, all factors affecting incident radiation intensity and temperature must remain constant:
1. Distance: The distance from the face of the cube to the detector must be identical for each reading ($I \\propto 1/d^2$).
2. Alignment / Angle: The detector must be centered and perpendicular (at 90°) to each face.
3. Surface temperature: Water inside must be stirred or readings taken quickly so temperature is identical for all faces.
4. Exposed area: Each face must have the same surface area.`,
    equations: `\\text{Keep constant: } d_{\\text{detector}}, \\theta_{\\text{cube}}, \\text{Orientation}, A_{\\text{face}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Geometric Variable (Variable 1)",
        body: "Distance from the face of the cube to the detector (must be identical for every face)."
      },
      {
        step: 2,
        title: "Identify Alignment / Operational Variable (Variable 2)",
        body: "Height / vertical alignment of detector relative to face (or orientation / angle of detector / temperature of water in the cube)."
      }
    ],
    finalAnswer: "1. Distance between the detector and the face of the cube;\n2. Height / angle / alignment of the detector (or temperature of the water / same area of each face).",
    reasonablenessCheck: "Because radiation intensity drops with the square of distance, varying distance would alter readings more than surface finish.",
    commonMistakes: [
      "Naming color or surface finish (that is the independent variable being tested).",
      "Naming the detector reading."
    ],
    takeaway: "Distance between detector and face must be kept constant, along with alignment and surface temperature.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { distanceCm: 10 },
      controls: [
        { id: "distanceCm", name: "Detector Distance", min: 5, max: 25, step: 5, default: 10, unit: "cm" }
      ],
      readouts: [
        { label: "Detector Distance", expr: (p) => p.distanceCm + " cm (Constant for all faces)" },
        { label: "Cube Temperature", expr: () => "100.0 °C (Constant)" }
      ],
      explanation: "Keeping distance and temperature identical isolates surface emissivity as the sole variable."
    }
  },
  {
    globalId: "Q340",
    examId: "Q00964",
    paperRef: "5054/22/O/N/22 Q3(i)(ii)",
    pdfPage: 168,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Solar Radiation Absorption Comparison on Cooled Cube",
    paperType: "theory",
    marks: 2,
    questionText: `The cube is emptied of boiling water, allowed to cool to room temperature, and placed outdoors in bright sunlight.
State which face warms up most rapidly and explain why. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify which face warms up fastest when cold and exposed to sunlight, and explain the physical reason[cite: 152].",
    givenInfo: [
      "Leslie's cube at room temperature exposed outdoors to bright sunlight.",
      "Faces: dull black, shiny silver, white, dull grey[cite: 152]."
    ],
    toFind: "Fastest-warming face and physical explanation[cite: 152].",
    physicsConcepts: `Solar thermal absorption:
1. When exposed to sunlight, the cube is absorbing incoming radiant energy[cite: 152].
2. A dull black surface absorbs visible and infrared radiation with minimal reflection (absorptivity $\\alpha \\approx 0.98$)[cite: 152].
3. Shiny silver and white surfaces reflect most of the incident solar radiation[cite: 152].
4. Because the dull black face absorbs thermal energy at the highest rate, it warms up most rapidly[cite: 152].`,
    equations: `\\alpha_{\\text{dull black}} \\approx 0.98 \\gg \\alpha_{\\text{silver}} \\approx 0.05 \\implies \\left(\\frac{dQ}{dt}\\right)_{\\text{absorbed}} \\text{ is highest for black}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Fastest-Warming Face (Mark 1)",
        body: "The dull black face[cite: 152]."
      },
      {
        step: 2,
        title: "Provide Physical Reason (Mark 2)",
        body: "Dull black surfaces are the best / most effective absorbers of thermal radiation (or absorb radiation at the highest rate)[cite: 152]."
      }
    ],
    finalAnswer: "Dull black face; dull black surfaces are the best / most effective absorbers of thermal radiation (absorb solar radiation fastest)[cite: 152].",
    reasonablenessCheck: "Black asphalt gets hotter than white concrete in sunlight because black absorbs more radiant energy[cite: 152].",
    commonMistakes: [
      "Stating dull black is a good emitter (true, but warming in sunlight is driven by *absorption*, not emission)[cite: 152, 153].",
      "Selecting shiny silver[cite: 152]."
    ],
    takeaway: "The dull black face warms fastest in sunlight because dull black surfaces are the best absorbers of thermal radiation[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Warming in Sun", expr: () => "Dull Black Warms Fastest[cite: 152]" },
        { label: "Reason", expr: () => "Best absorber of thermal radiation[cite: 152]" }
      ],
      explanation: "Dull black surfaces absorb incoming solar radiation most rapidly, warming faster than reflective surfaces[cite: 152]."
    }
  }
];