/**
 * Master Question Store: Batch 25 (Q356 to Q370)
 * Section 2.3: Completes Theory (41/41) & Launches Practical / ATP (Q364 to Q370)
 */

const QUESTIONS_BATCH_25 = [
  {
    globalId: "Q356",
    examId: "Q00499",
    paperRef: "5054/21/M/J/24 Q4",
    pdfPage: 178,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Domestic Thermal Insulation Master Suite",
    paperType: "theory",
    marks: 7,
    questionText: `A modern energy-efficient house has several features designed to reduce the rate of thermal energy transfer from the inside to the outside during winter.
These features include:
1. Fibreglass wool placed on the floor of the loft (roof space).
2. Cavity walls where the gap between inner and outer brick walls is filled with foam and lined with reflective foil.
3. Double-glazed windows with a narrow gap of trapped air between the glass panes.

(a) Explain how the fibreglass wool in the loft reduces thermal energy loss by both conduction and convection. [3]
(b) Explain how the reflective foil in the cavity walls reduces thermal energy loss. [2]
(c) Explain why the air gap in a double-glazed window must be narrow rather than wide. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how loft insulation, cavity wall reflective foil, and double glazing narrow air gaps reduce thermal energy loss through conduction, convection, and radiation.",
    givenInfo: [
      "House insulation features: loft fibreglass wool, cavity wall foam and reflective foil, double-glazed windows."
    ],
    toFind: "Physical explanations for each insulation feature referencing conduction, convection, and radiation.",
    physicsConcepts: `Principles of building insulation:
1. Loft fibreglass wool:
   - Fibreglass is made of glass fibres, which are poor thermal conductors.
   - The wool traps a large volume of stationary air in small pockets. Because air has very low thermal conductivity ($k \\approx 0.026\\text{ W/(m K)}$), conduction is minimized.
   - The small pockets prevent the air from circulating, stopping convection currents from rising into the loft.
2. Cavity wall reflective foil:
   - Emits very little infrared radiation (low emissivity $\\varepsilon \\approx 0.05$).
   - Reflects thermal radiation emitted by the warm inner wall back into the building, preventing it from crossing the wall cavity.
3. Double glazing narrow gap:
   - Air has low thermal conductivity, reducing conduction.
   - If the gap is too wide ($> 20\\text{ mm}$), temperature differences between the inner and outer glass panes set up circulating convection currents that transfer heat across the gap. A narrow gap ($12\\text{--}16\\text{ mm}$) suppresses convective fluid circulation.`,
    equations: `\\frac{dQ}{dt} = \\frac{k A \\Delta T}{d}; \\quad P_{\\text{rad}} = \\varepsilon \\sigma A T^4; \\quad \\text{Convection suppressed when Rayleigh number } Ra < Ra_{\\text{critical}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Explain Loft Fibreglass Insulation",
        body: "Fibreglass and air are poor conductors of thermal energy / good insulators, reducing conduction. The fibres trap air in tiny pockets, which prevents the air from circulating and stops convection currents."
      },
      {
        step: 2,
        title: "Part (b) Explain Cavity Wall Reflective Foil",
        body: "The reflective foil has a shiny surface that reflects thermal (infra-red) radiation back towards the inside of the house and is a poor emitter of radiation across the cavity."
      },
      {
        step: 3,
        title: "Part (c) Explain Narrow Gap in Double Glazing",
        body: "A narrow gap prevents convection currents from forming in the trapped air. If the gap were wide, warm air at the inner pane would rise and cool air at the outer pane would sink, transferring heat by convection."
      }
    ],
    finalAnswer: "(a) Fibreglass and air are poor conductors (reduces conduction); trapped air pockets prevent air from circulating, stopping convection currents;\n(b) Reflects infra-red radiation back towards the warm room and is a poor emitter of radiation;\n(c) A narrow gap prevents convection currents from forming in the air (a wide gap allows air to circulate by convection).",
    reasonablenessCheck: "Each building feature targets a specific heat loss mechanism: loft wool stops conduction/convection, cavity foil stops radiation, and narrow glazing suppresses convective looping.",
    commonMistakes: [
      "Saying fibreglass wool generates heat.",
      "Stating double glazing stops radiation (radiation passes through transparent glass and air).",
      "Confusing foil reflection with conduction."
    ],
    takeaway: "Loft wool suppresses conduction and convection via trapped air; cavity foil reflects thermal radiation; narrow window gaps prevent convective looping.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { insulationType: "building_envelope" },
      controls: [],
      readouts: [
        { label: "Loft Conduction/Convection", expr: () => "Blocked by trapped air" },
        { label: "Cavity Radiation", expr: () => "Reflected by shiny foil" },
        { label: "Glazing Convection", expr: () => "Suppressed by narrow gap" }
      ],
      explanation: "Loft wool traps air pockets, cavity foil reflects infrared radiation, and narrow window gaps eliminate convective circulation."
    }
  },
  {
    globalId: "Q357",
    examId: "Q00500",
    paperRef: "5054/21/M/J/24 Q4(a)",
    pdfPage: 178,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Loft Fibreglass Wool Mechanism",
    paperType: "theory",
    marks: 3,
    questionText: `Explain how the fibreglass wool laid on the floor of the loft reduces thermal energy loss by both conduction and convection. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how fibreglass wool simultaneously reduces conductive and convective heat losses through a ceiling.",
    givenInfo: [
      "Fibreglass wool laid on the loft floor above warm rooms."
    ],
    toFind: "Three-mark explanation addressing conduction and convection.",
    physicsConcepts: `Loft insulation mechanisms:
1. Conduction: Glass fibres and air have very low thermal conductivities ($k \\approx 0.026\\text{ W/(m K)}$). Solid contact between fibres is minimal, severely restricting conduction through the ceiling.
2. Convection: Warm air naturally rises. If the loft were open air, warm air would circulate freely. The dense mat of fibres divides the air into tiny pockets, immobilizing it. Because the air cannot circulate, convection currents cannot form.`,
    equations: `k_{\\text{air}} \\ll k_{\\text{solid}}; \\quad \\text{Trapped pockets} \\implies \\text{Fluid velocity } v = 0 \\implies \\text{Convection} = 0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Address Conduction (Mark 1)",
        body: "Air and glass fibres are poor conductors of thermal energy / good insulators, reducing heat loss by conduction."
      },
      {
        step: 2,
        title: "Address Convection and Trapped Air (Marks 2 & 3)",
        body: "The fibres trap air in many small pockets, preventing the air from moving or circulating, which stops convection currents from forming."
      }
    ],
    finalAnswer: "Air and glass are poor conductors of thermal energy (reduces conduction); the wool traps air in small pockets, preventing the air from circulating and stopping convection currents.",
    reasonablenessCheck: "Uninsulated ceilings account for ~25% of house heat loss because warm air rises directly to the roof; trapped air stops both conduction and upward convection.",
    commonMistakes: [
      "Stating 'the wool absorbs all the heat'.",
      "Mentioning only conduction and omitting convection."
    ],
    takeaway: "Trapped air in fibreglass wool reduces conduction because air has low conductivity, and prevents convection because the air cannot circulate.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Conduction Rate", expr: () => "Very Low (Air k = 0.026 W/m K)" },
        { label: "Convection State", expr: () => "Stopped (Trapped in pockets)" }
      ],
      explanation: "Air trapped within the fibreglass matrix cannot circulate, preventing convection while offering high resistance to conduction."
    }
  },
  {
    globalId: "Q358",
    examId: "Q00501",
    paperRef: "5054/21/M/J/24 Q4(b)",
    pdfPage: 178,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Cavity Wall Reflective Foil Function",
    paperType: "theory",
    marks: 2,
    questionText: `Explain how the reflective foil lining the cavity walls reduces the transfer of thermal energy. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how shiny reflective foil reduces radiative heat loss across a wall cavity.",
    givenInfo: [
      "Reflective metallic foil lining the cavity between inner and outer walls."
    ],
    toFind: "Two-mark physical explanation covering reflection and low emission of thermal radiation.",
    physicsConcepts: `Radiation across wall cavities:
1. Warm inner walls emit thermal radiation (infrared electromagnetic waves) across the air gap.
2. A shiny, polished metal foil has very high reflectivity ($R \\approx 0.95$) and low emissivity ($\\varepsilon \\approx 0.05$).
3. The foil reflects incoming infrared radiation back toward the warm inner wall and emits very little radiation toward the cold outer brick wall.`,
    equations: `\\text{Reflectivity } R + \\text{Absorptivity } \\alpha = 1; \\quad \\varepsilon = \\alpha \\approx 0.05 \\implies \\text{Reflects } 95\\% \\text{ of IR}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Reflection Property (Mark 1)",
        body: "The shiny surface reflects thermal / infra-red radiation back towards the inside of the house."
      },
      {
        step: 2,
        title: "Identify Low Emission Property (Mark 2)",
        body: "The shiny surface is a poor emitter of thermal / infra-red radiation across the cavity."
      }
    ],
    finalAnswer: "The shiny foil reflects thermal / infra-red radiation back into the house and is a poor emitter of thermal radiation across the cavity.",
    reasonablenessCheck: "Radiation accounts for ~50% of heat transfer across an unlined wall cavity; reflective foil cuts this component by over 90%.",
    commonMistakes: [
      "Saying the foil conducts heat back inside.",
      "Saying the foil absorbs the radiation."
    ],
    takeaway: "Reflective foil reduces heat loss by reflecting infrared radiation back into the room and by acting as a poor emitter of radiation.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { foilInstalled: true },
      controls: [],
      readouts: [
        { label: "Foil Reflection", expr: () => "95% of IR reflected back" },
        { label: "Foil Emission", expr: () => "Low Emissivity (ε = 0.05)" }
      ],
      explanation: "Shiny foil acts as a thermal mirror, reflecting infrared waves across the cavity back toward the inner wall."
    }
  },
  {
    globalId: "Q359",
    examId: "Q00502",
    paperRef: "5054/21/M/J/24 Q4(c)",
    pdfPage: 178,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Air Gap Width Optimization in Double Glazing",
    paperType: "theory",
    marks: 2,
    questionText: `Explain why the air gap between the two glass panes in a double-glazed window must be narrow rather than wide. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why a wide gap allows convection currents to form while a narrow gap suppresses them.",
    givenInfo: [
      "Double-glazed window with trapped air gap."
    ],
    toFind: "Two-mark physical explanation comparing wide vs narrow gap fluid behavior.",
    physicsConcepts: `Fluid dynamics of narrow vertical cavities:
1. In a vertical air gap, air touching the warm inner pane is heated, expands, decreases in density, and rises. Air touching the cold outer pane cools, contracts, increases in density, and sinks.
2. In a wide gap ($> 20\\text{ mm}$), the upward and downward flows do not interfere, forming a circulating convection loop that transfers thermal energy rapidly between the panes.
3. In a narrow gap ($12\\text{--}16\\text{ mm}$), viscous drag between the opposing air flows suppresses bulk circulation, preventing convection currents and leaving only slow conduction through the air.`,
    equations: `\\text{Gap width } d < d_{\\text{critical}} \\implies \\text{Viscous drag suppresses convection circulation}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Air Behavior in a Wide Gap (Mark 1)",
        body: "If the gap is wide, convection currents can form (warm air rises at the inner pane and cold air sinks at the outer pane, transferring heat)."
      },
      {
        step: 2,
        title: "Explain Narrow Gap Suppression (Mark 2)",
        body: "A narrow gap prevents the air from circulating, stopping convection currents from transferring energy between the panes."
      }
    ],
    finalAnswer: "A narrow gap prevents convection currents from forming in the trapped air; if the gap were wide, air would circulate and transfer thermal energy by convection.",
    reasonablenessCheck: "Commercial double glazing standardizes on a 16 mm gap because wider gaps increase convective heat loss more than they reduce conduction.",
    commonMistakes: [
      "Saying a wide gap makes the window too heavy (valid mechanically, but not a thermal physics explanation).",
      "Saying air freezes in a wide gap."
    ],
    takeaway: "The gap in double glazing must be narrow to prevent convection currents from circulating between the warm and cold panes.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { gapWidthMm: 16 },
      controls: [
        { id: "gapWidthMm", name: "Glazing Gap Width", min: 4, max: 40, step: 4, default: 16, unit: "mm" }
      ],
      readouts: [
        { label: "Convection State", expr: (p) => p.gapWidthMm <= 16 ? "Suppressed (No circulation)" : "Active Convection Loop" },
        { label: "Thermal Loss Rate", expr: (p) => p.gapWidthMm <= 16 ? "Low (Pure conduction)" : "High (Convective leak)" }
      ],
      explanation: "Gaps wider than 16 mm allow opposing vertical air flows to circulate freely, accelerating heat loss via convection."
    }
  },
  {
    globalId: "Q360",
    examId: "Q00505",
    paperRef: "5054/22/M/J/24 Q3",
    pdfPage: 180,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Solar Cooker Thermal Design Master Suite",
    paperType: "theory",
    marks: 6,
    questionText: `Fig. 3.1 shows a solar cooker used to boil water and cook food using sunlight.
The cooker consists of a curved shiny metal reflector that concentrates solar radiation onto a cooking pot placed at its focus.
The cooking pot is made of thin metal painted dull black and is covered with a clear glass lid.

(a) Explain why the curved reflector has a shiny polished surface. [1]
(b) Explain why the cooking pot is painted dull black. [1]
(c) State two ways in which the clear glass lid helps to cook the food more quickly. [2]
(d) On a sunny day, the solar cooker delivers 320 W of useful thermal power to the water in the pot.
The specific latent heat of vaporisation of water is 2.3 × 10⁶ J/kg.
Calculate the mass of water that boils away in 15 minutes once the water reaches 100 °C. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Evaluate the thermal optics and heat transfer features of a solar cooker, explain the role of surface finishes and the glass lid, and calculate the mass of water boiled away in 15 minutes.",
    givenInfo: [
      "Curved shiny reflector focusing sunlight onto a cooking pot.",
      "Cooking pot: thin metal painted dull black, fitted with a clear glass lid.",
      "Useful thermal power P = 320 W.",
      "Specific latent heat of vaporisation L_v = 2.3 × 10⁶ J/kg.",
      "Boiling time t = 15 minutes = 15 × 60 = 900 s."
    ],
    toFind: "Reflector explanation, pot color justification, glass lid functions, and boiled mass m in kg.",
    physicsConcepts: `Solar thermal concentration and phase change:
1. Shiny reflector: Reflects parallel solar radiation with high efficiency toward the focal point without absorbing it.
2. Dull black pot: Maximizes absorptivity of concentrated visible and infrared radiation, converting it efficiently into internal energy.
3. Glass lid functions:
   - Prevents steam and water vapor from escaping, reducing heat loss by evaporation.
   - Prevents wind from carrying away warm air, reducing convection.
   - Creates a greenhouse effect by trapping re-radiated long-wavelength infrared.
4. Latent heat calculation:
   $$E = P \\cdot t = 320\\text{ W} \\times 900\\text{ s} = 288\\,000\\text{ J}$$
   $$m = \\frac{E}{L_v} = \\frac{288\\,000}{2.3 \\times 10^6} = 0.125\\text{ kg}$$`,
    equations: `E = P t; \\quad m = \\frac{E}{L_v}; \\quad t = 15 \\times 60 = 900 \\text{ s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Shiny Reflector Function",
        body: "A shiny surface is a good reflector of radiation (reflects sunlight onto the pot without absorbing it)."
      },
      {
        step: 2,
        title: "Part (b) Dull Black Pot Function",
        body: "Dull black is a good / the best absorber of thermal radiation, absorbing maximum energy from the focused sunlight."
      },
      {
        step: 3,
        title: "Part (c) Two Functions of the Glass Lid",
        body: "1. Reduces heat loss by evaporation (traps steam/water vapor).\n2. Reduces heat loss by convection (stops wind from blowing warm air away) / traps re-radiated infrared radiation (greenhouse effect)."
      },
      {
        step: 4,
        title: "Part (d) Calculate Mass Boiled Away",
        body: "t = 15 min * 60 s/min = 900 s.\nE = P * t = 320 W * 900 s = 288 000 J.\nm = E / L_v = 288 000 J / (2.3 × 10⁶ J/kg) = 0.1252 kg ≈ 0.13 kg (or 125 g)."
      }
    ],
    finalAnswer: "(a) Shiny surfaces are good reflectors of thermal radiation;\n(b) Dull black is a good absorber of thermal radiation;\n(c) 1. Reduces heat loss by evaporation; 2. Reduces convection / traps re-radiated infrared radiation;\n(d) 0.13 kg (or 0.125 kg / 125 g).",
    reasonablenessCheck: "320 W over 15 minutes supplies 288 kJ. With water's high latent heat (2300 kJ/kg), boiling away ~125 g is realistic.",
    commonMistakes: [
      "Using minutes instead of seconds in E = Pt.",
      "Multiplying energy by latent heat instead of dividing.",
      "Saying the shiny reflector absorbs heat."
    ],
    takeaway: "Solar cookers combine shiny reflectors, black absorbers, and glass lids to concentrate sunlight and suppress evaporative/convective losses.",
    simulation: {
      type: "latent_heat_phase",
      defaultParams: { powerW: 320, timeMin: 15, latentHeatJkg: 2.3e6 },
      controls: [
        { id: "timeMin", name: "Boiling Duration", min: 5, max: 30, step: 5, default: 15, unit: "min" }
      ],
      readouts: [
        { label: "Energy Supplied", expr: (p) => (p.powerW * p.timeMin * 60 / 1000).toFixed(0) + " kJ" },
        { label: "Water Boiled Away", expr: (p) => ((p.powerW * p.timeMin * 60) / 2.3e6).toFixed(3) + " kg" }
      ],
      explanation: "320 W of concentrated solar power boiling water for 15 minutes vaporizes 0.125 kg of water."
    }
  },
  {
    globalId: "Q361",
    examId: "Q00506",
    paperRef: "5054/22/M/J/24 Q3(a)",
    pdfPage: 180,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Curved Specular Reflector Focusing",
    paperType: "theory",
    marks: 1,
    questionText: `Explain why the curved reflector of the solar cooker has a shiny polished surface. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the optical and thermal function of the shiny polished surface on a solar cooker's curved reflector.",
    givenInfo: [
      "Curved dish reflector focusing sunlight onto a cooking pot."
    ],
    toFind: "One-mark physical explanation referencing reflection of thermal radiation.",
    physicsConcepts: `Specular reflection of solar irradiance:
Polished shiny metals (e.g. polished aluminium) have very high reflectance ($R > 0.90$) across the electromagnetic spectrum. A shiny surface reflects almost all incident sunlight toward the focal point where the pot is located, while absorbing almost no thermal energy into the reflector body.`,
    equations: `R_{\\text{shiny}} \\approx 0.95 \\implies \\text{Directs radiation to focus without heating reflector}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Reflective Property",
        body: "Shiny / polished surfaces are good reflectors of thermal (solar) radiation / reflect sunlight onto the pot without absorbing it."
      }
    ],
    finalAnswer: "Shiny surfaces are good reflectors of radiation / reflect sunlight onto the pot (poor absorbers of radiation).",
    reasonablenessCheck: "A matte reflector would absorb solar energy and get hot itself rather than directing the light to the cooking pot.",
    commonMistakes: [
      "Saying the shiny surface emits radiation.",
      "Saying the reflector focuses heat by convection."
    ],
    takeaway: "The curved reflector is shiny to maximize reflection of sunlight onto the pot while minimizing energy absorbed by the reflector itself.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Reflector Finish", expr: () => "Polished Shiny Metal" },
        { label: "Reflectance", expr: () => "95% Directed to Focus" }
      ],
      explanation: "A polished surface reflects 95% of incoming solar rays onto the pot without absorbing heat."
    }
  },
  {
    globalId: "Q362",
    examId: "Q00507",
    paperRef: "5054/22/M/J/24 Q3(b)&(c)",
    pdfPage: 180,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Black Cooking Pot and Glass Lid Thermal Benefits",
    paperType: "theory",
    marks: 3,
    questionText: `(b) Explain why the cooking pot is painted dull black. [1]
(c) State two ways in which the clear glass lid helps to cook the food more quickly.
1 ........................................................................................................................
2 ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why the cooking pot is finished in dull black and list two ways the glass lid accelerates cooking.",
    givenInfo: [
      "Pot painted dull black.",
      "Covered by a transparent glass lid."
    ],
    toFind: "Absorption explanation and two thermal benefits of the glass lid.",
    physicsConcepts: `Cookware surface and cover thermal mechanisms:
1. Dull black pot: Dull black surfaces have high absorptivity, converting incoming concentrated visible and infrared radiation into internal energy at the maximum rate.
2. Clear glass lid:
   - Suppresses evaporative cooling by trapping steam inside the pot.
   - Prevents wind and cooler ambient air from setting up convection currents at the liquid surface.
   - Transmits incoming sunlight while absorbing and reflecting re-radiated longer-wavelength infrared emitted by the pot (greenhouse effect).`,
    equations: `\\alpha_{\\text{black}} \\approx 0.98; \\quad \\text{Lid eliminates evaporative latent heat loss}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (b) Dull Black Coating",
        body: "Dull black surfaces are good / the best absorbers of thermal radiation, absorbing maximum energy from the focused sunlight."
      },
      {
        step: 2,
        title: "Part (c) Glass Lid Benefit 1",
        body: "Reduces thermal energy loss by evaporation (traps steam / water vapor inside the pot)."
      },
      {
        step: 3,
        title: "Part (c) Glass Lid Benefit 2",
        body: "Reduces heat loss by convection (prevents wind from blowing warm air away) / traps re-radiated infrared radiation (greenhouse effect)."
      }
    ],
    finalAnswer: "(b) Dull black surfaces are good / the best absorbers of thermal radiation;\n(c) 1. Reduces heat loss by evaporation (traps steam); 2. Reduces heat loss by convection (traps warm air / greenhouse effect).",
    reasonablenessCheck: "Uncovered water boiling in wind loses heat as fast as a solar cooker can supply it; a lid and black coating ensure net heat accumulation.",
    commonMistakes: [
      "Saying the lid conducts heat into the pot.",
      "Saying the black paint generates heat."
    ],
    takeaway: "The black pot maximizes radiation absorption; the glass lid traps heat by stopping evaporation and convection.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Pot Absorptivity", expr: () => "Maximum (Dull Black)" },
        { label: "Lid Action 1", expr: () => "Stops evaporative cooling" },
        { label: "Lid Action 2", expr: () => "Suppresses convective wind loss" }
      ],
      explanation: "A dull black pot absorbs concentrated rays, while the glass lid prevents evaporative and convective heat loss."
    }
  },
  {
    globalId: "Q363",
    examId: "Q000218",
    paperRef: "5054/21/O/N/24 Q3",
    pdfPage: 182,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Microprocessor Heat Sink Thermal Dissipation Master Suite",
    paperType: "theory",
    marks: 6,
    questionText: `Fig. 3.1 shows a heat sink attached to a computer microprocessor.
The heat sink consists of a flat copper plate clamped firmly against the microprocessor, connected to an array of thin, black-painted aluminium cooling fins. A small fan blows air across the fins.

(a) Explain how thermal energy is transferred from the microprocessor to the aluminium fins. [2]
(b) Explain why the fins are made thin and numerous, and why a fan is used. [2]
(c) Explain why the aluminium fins are painted dull black. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain conduction from chip to fins via copper plate, convective dissipation using high surface area fins and forced airflow, and radiative emission from black surfaces.",
    givenInfo: [
      "Microprocessor heat sink with copper base, black aluminium fins, and cooling fan."
    ],
    toFind: "Explanations for conduction mechanism, fin geometry and fan forced convection, and black surface radiation.",
    physicsConcepts: `Thermal management in electronic systems:
1. Conduction through the copper plate:
   - Copper has very high thermal conductivity ($k \\approx 385\\text{ W/(m K)}$) due to lattice vibrations and rapid free electron drift. It conducts thermal energy away from the small chip surface to the base of the fins.
2. Fin geometry and fan (convection):
   - Making fins thin and numerous maximizes the exposed surface area $A$ in contact with air without adding excess mass.
   - The fan creates forced convection, continuously replacing warmed air with cooler room air to maintain a large temperature gradient ($T_{\\text{fin}} - T_{\\text{air}}$).
3. Dull black finish (radiation):
   - Dull black has high emissivity ($\varepsilon \approx 0.95$), maximizing the rate of thermal radiation emitted directly to the surrounding computer case.`,
    equations: `\\frac{dQ}{dt} = h A (T_{\\text{fin}} - T_{\\text{air}}) + \\varepsilon \\sigma A (T_{\\text{fin}}^4 - T_{\\text{env}}^4); \\quad A \\uparrow, \\, h \\uparrow, \\, \\varepsilon \\uparrow \\implies \\text{Maximum cooling}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a) Conduction Through Copper Base",
        body: "Thermal energy conducts through the copper plate by vibrating lattice ions colliding with neighbors and by mobile free electrons drifting rapidly through the metal and colliding with distant ions."
      },
      {
        step: 2,
        title: "Part (b) Fin Geometry and Fan Function",
        body: "Thin and numerous fins provide a large surface area for heat transfer to the air. The fan forces air across the fins, continuously replacing warm air with cooler air to maintain a high rate of convection."
      },
      {
        step: 3,
        title: "Part (c) Dull Black Coating",
        body: "Dull black surfaces are good / the best emitters of thermal (infra-red) radiation, maximizing the rate at which heat is radiated away from the fins."
      }
    ],
    finalAnswer: "(a) By conduction through the copper plate: vibrating lattice ions collide with neighbors and free electrons transfer kinetic energy rapidly;\n(b) Thin and numerous fins provide a large surface area; the fan blows cooler air across them to increase the rate of convection;\n(c) Dull black surfaces are good / the best emitters of thermal radiation.",
    reasonablenessCheck: "High-performance CPU coolers combine copper bases for conduction, large fin arrays with fans for forced convection, and black coatings for radiation.",
    commonMistakes: [
      "Saying the fan 'cools the chip by evaporation' (there is no liquid to evaporate on a CPU).",
      "Stating the black paint absorbs heat from the computer."
    ],
    takeaway: "Microprocessor coolers optimize heat dissipation using conduction through copper, forced convection across high-surface-area fins, and radiation from black surfaces.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { fanActive: true },
      controls: [],
      readouts: [
        { label: "Base Conduction", expr: () => "Rapid via Copper (Free Electrons)" },
        { label: "Fin Convection", expr: () => "Forced Convection (Fan + High Area)" },
        { label: "Fin Radiation", expr: () => "Maximized via Dull Black Coating" }
      ],
      explanation: "Copper conducts heat to the fin array, where the fan and high surface area drive forced convection and black paint maximizes radiative emission."
    }
  },
  {
    globalId: "Q364",
    examId: "Q01190",
    paperRef: "5054/31/M/J/22 Q2",
    pdfPage: 184,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Conduction along Metal Rods Master Suite",
    paperType: "practical",
    marks: 6,
    questionText: `In this experiment, you will investigate the conduction of thermal energy along rods of different metals.
You are provided with:
- identical rods of copper, iron, and brass clamped horizontally
- drawing pins attached to the underside of each rod with equal drops of wax at identical distances of 10 cm from the heated ends
- a Bunsen burner
- a stopwatch.

(a) Heat the junction of the three rods equally using the Bunsen burner flame and start the stopwatch.
Record the time t taken for the pin to drop from each rod.
(b) Explain why the pins fall off the rods. [1]
(c) State the order of thermal conductivity of the three metals from best to poorest conductor. [2]
(d) State two variables that were controlled to ensure a fair test. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Carry out the experimental investigation of thermal conduction along copper, iron, and brass rods, explain the wax-pin drop mechanism, rank the conductivities, and state control variables.",
    givenInfo: [
      "Identical rods of copper, iron, brass.",
      "Pins attached with equal wax drops at 10 cm from heated junction.",
      "Heated equally with a Bunsen burner."
    ],
    toFind: "Pin drop mechanism, ranking of thermal conductivity, and two controlled variables.",
    physicsConcepts: `Comparative thermal conduction along metal rods (Ingenhousz experiment):
1. Mechanism: Thermal energy conducts from the heated junction along each rod via lattice vibrations and mobile free electrons.
2. Pin drop: When heat reaches 10 cm, the rod temperature rises above the wax melting point (~60 °C). The wax melts, loses adhesion, and gravity pulls the pin off.
3. Ranking: Copper conducts heat fastest (pin falls first at $t \\approx 25\\text{ s}$), followed by brass ($t \\approx 55\\text{ s}$), and finally iron ($t \\approx 110\\text{ s}$).
   Order of thermal conductivity: Copper > Brass > Iron.
4. Controlled variables: Length and cross-sectional diameter of rods, distance of pin from flame (10 cm), mass/size of wax drop, and equal heating at the junction.`,
    equations: `\\frac{dQ}{dt} = -k A \\frac{dT}{dx}; \\quad k_{\\text{copper}} (385) > k_{\\text{brass}} (110) > k_{\\text{iron}} (80) \\text{ W/(m K)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Practical Suite",
        body: "This master entry coordinates subparts Q365 and Q366 for the Paper 3 metal rod conduction experiment on PDF pages 184–185."
      }
    ],
    finalAnswer: "Full timing data, physical wax-melting explanation, conductivity ranking (copper > brass > iron), and control factors are detailed in Q365 and Q366 below.",
    reasonablenessCheck: "Copper conducts heat roughly 4 times faster than iron, so the pin on the copper rod falls off earliest.",
    commonMistakes: [
      "Confusing brass with bronze.",
      "Stating pins fall because gravity increases."
    ],
    takeaway: "The faster heat conducts along a rod, the sooner wax reaches its melting point and releases its pin; copper conducts faster than brass and iron.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { rodsCompared: true },
      controls: [],
      readouts: [
        { label: "Copper Pin Fall", expr: () => "t = 24 s (First - Best conductor)" },
        { label: "Brass Pin Fall", expr: () => "t = 54 s (Second - Intermediate)" },
        { label: "Iron Pin Fall", expr: () => "t = 112 s (Third - Poorest conductor)" }
      ],
      explanation: "Heat conducts along copper fastest, melting the wax drop and releasing the pin first."
    }
  },
  {
    globalId: "Q365",
    examId: "Q01191",
    paperRef: "5054/31/M/J/22 Q2(a)&(b)",
    pdfPage: 184,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Wax Pin Release Mechanism",
    paperType: "practical",
    marks: 2,
    questionText: `(a) Record the time taken for the drawing pin to fall from the copper rod and the iron rod:
t_copper = .................... s
t_iron = .................... s [1]

(b) Explain why the drawing pins fall off the rods when the junction is heated. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record pin drop times for copper and iron, and explain the physical cause of pin release.",
    givenInfo: [
      "Copper and iron rods heated simultaneously at junction.",
      "Pins attached with wax drops 10 cm along rods."
    ],
    toFind: "Typical times t_copper and t_iron, and physical explanation of pin release.",
    physicsConcepts: `Conduction and phase change of wax:
Thermal energy conducts along the metal rods from the hot flame toward the pins. As heat arrives, the metal warms up. When the temperature of the metal beneath the wax drop reaches the melting point of wax, the wax absorbs latent heat of fusion and melts into liquid. The liquid wax cannot support the weight of the pin, and gravity pulls it down.`,
    equations: `\\theta_{\\text{rod}}(10\\text{ cm}) \\ge \\theta_{\\text{melt, wax}} \\approx 60^\\circ\\text{C} \\implies \\text{Wax melts}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Typical Laboratory Fall Times (Part a)",
        body: "t_copper ≈ 24 s (acceptable: 15 s to 35 s);\nt_iron ≈ 110 s (acceptable: 80 s to 150 s)."
      },
      {
        step: 2,
        title: "Explain Why Pins Fall Off (Part b)",
        body: "Thermal energy is conducted along the metal rod to the wax, which warms up and melts, so the pin is no longer held in place and falls."
      }
    ],
    finalAnswer: "(a) t_copper ≈ 24 s; t_iron ≈ 110 s;\n(b) Heat is conducted along the rod to the wax, causing the wax to melt so the pin falls off.",
    reasonablenessCheck: "Copper conducts heat much faster than iron, so its wax reaches the melting point in roughly one-quarter of the time.",
    commonMistakes: [
      "Stating the pin melts.",
      "Omitting conduction along the rod."
    ],
    takeaway: "Heat conducts along the metal rod to the wax, which melts and allows the pin to fall.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tCopper: 24, tIron: 110 },
      controls: [],
      readouts: [
        { label: "Copper Time", expr: () => "24 s" },
        { label: "Iron Time", expr: () => "110 s" },
        { label: "Release Cause", expr: () => "Wax melts due to conducted heat" }
      ],
      explanation: "Conducted heat raises the metal temperature above 60 °C, melting the wax and releasing the pin."
    }
  },
  {
    globalId: "Q366",
    examId: "Q01192",
    paperRef: "5054/31/M/J/22 Q2(c)&(d)",
    pdfPage: 185,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Thermal Conductivity Ranking and Fair Testing",
    paperType: "practical",
    marks: 4,
    questionText: `(c) State the order of thermal conductivity of the metals (copper, brass, iron) from best conductor to poorest conductor.
best conductor: ....................
....................
poorest conductor: .................... [2]

(d) State two variables that were controlled in this experiment to ensure a fair comparison.
1 ........................................................................................................................
2 ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Rank the metals in descending order of thermal conductivity and identify two experimental control variables.",
    givenInfo: [
      "Pin drop times: copper (fastest, ~24 s), brass (intermediate, ~55 s), iron (slowest, ~110 s)."
    ],
    toFind: "Ordered ranking of metals and two controlled variables.",
    physicsConcepts: `1. Ranking rule: The shorter the time taken for heat to conduct 10 cm and melt the wax, the higher the thermal conductivity of the metal:
   $$\\text{Rate} \\propto k \\implies t \\propto \\frac{1}{k}$$
   Order: Copper > Brass > Iron.
2. Fair testing variables:
   - Distance of wax/pin from heated end (10 cm).
   - Cross-sectional area / diameter / thickness of rods.
   - Length of rods.
   - Mass / size of wax drop.
   - Equal heating intensity at the junction (central flame position).`,
    equations: `k_{\\text{copper}} > k_{\\text{brass}} > k_{\\text{iron}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Rank Metals by Thermal Conductivity (Part c)",
        body: "Copper pin fell first -> best conductor: copper.\nBrass pin fell second -> brass.\nIron pin fell last -> poorest conductor: iron."
      },
      {
        step: 2,
        title: "Identify Two Controlled Variables (Part d)",
        body: "1. Distance of the wax / pin from the heated end (10 cm).\n2. Diameter / cross-sectional area / thickness of the rods (or size / mass of wax drop / flame position)."
      }
    ],
    finalAnswer: "(c) best: copper; intermediate: brass; poorest: iron;\n(d) 1. Distance of the pin / wax from the flame (10 cm); 2. Diameter / thickness of the rods (or amount of wax / flame position).",
    reasonablenessCheck: "Literature values ($k_{\\text{Cu}} \\approx 385$, $k_{\\text{brass}} \\approx 110$, $k_{\\text{Fe}} \\approx 80\\text{ W/(m K)}$) confirm this ranking.",
    commonMistakes: [
      "Inverting the order (listing iron first because its time was largest).",
      "Naming 'type of metal' as a controlled variable (that is the independent variable)."
    ],
    takeaway: "Shorted pin drop time indicates higher thermal conductivity: copper > brass > iron. Pin distance and rod diameter must be held constant.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Rank 1 (Best)", expr: () => "Copper (Fastest drop)" },
        { label: "Rank 2", expr: () => "Brass (Intermediate)" },
        { label: "Rank 3 (Poorest)", expr: () => "Iron (Slowest drop)" }
      ],
      explanation: "Pin drop order confirms the conductivity ranking: copper > brass > iron."
    }
  },
  {
    globalId: "Q367",
    examId: "Q00597",
    paperRef: "5054/32/M/J/22 Q2",
    pdfPage: 186,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Beaker Diameter and Cooling Rates",
    paperType: "practical",
    marks: 6,
    questionText: `In this experiment, you will investigate how the surface area of water affects the rate of cooling.
You are provided with:
- Beaker X: 100 cm³ narrow beaker
- Beaker Y: 250 cm³ wide beaker
- hot water (~85 °C)
- thermometer and stopwatch.

(a) Pour 80 cm³ of hot water into Beaker X. Record the temperature θ every 30 s for 180 s.
(b) Repeat with 80 cm³ of hot water in Beaker Y.
Table 2.1 shows:
Beaker X (narrow): cools from 84.0 °C to 71.0 °C (drop = 13.0 °C).
Beaker Y (wide): cools from 84.0 °C to 62.0 °C (drop = 22.0 °C).
(i) Calculate the average cooling rate for each beaker in °C/s. [2]
(ii) State which beaker cools more rapidly and explain why. [2]
(iii) State two variables that were controlled to ensure a fair test. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate cooling rates in °C/s for narrow and wide beakers holding equal water volumes, explain the surface area effect, and identify two controlled variables.",
    givenInfo: [
      "Water volume = 80 cm³ in both beakers.",
      "Beaker X (narrow): drops 13.0 °C in 180 s.",
      "Beaker Y (wide): drops 22.0 °C in 180 s."
    ],
    toFind: "Cooling rates, surface area explanation, and two control variables.",
    physicsConcepts: `Surface area effect on liquid cooling:
1. Cooling rate formula:
   $$R = \\frac{\\Delta \\theta}{t}$$
2. Physical mechanism: Beaker Y has a larger diameter, so the exposed top surface area of the water is greater. Heat loss by surface evaporation and air convection scales with surface area:
   $$\\frac{dQ}{dt} \\propto A_{\\text{surface}}$$
   Therefore, Beaker Y cools more rapidly.
3. Control variables: Volume/mass of water (80 cm³), initial starting temperature (84.0 °C), same room temperature, and identical glass material.`,
    equations: `R_X = \\frac{13.0}{180} = 0.0722^\\circ\\text{C/s}; \\quad R_Y = \\frac{22.0}{180} = 0.1222^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Calculate Cooling Rates (Part i)",
        body: "Beaker X (narrow): R_X = 13.0 °C / 180 s = 0.0722 °C/s ≈ 0.072 °C/s.\nBeaker Y (wide): R_Y = 22.0 °C / 180 s = 0.1222 °C/s ≈ 0.12 °C/s."
      },
      {
        step: 2,
        title: "Explain Why Beaker Y Cools Faster (Part ii)",
        body: "Beaker Y cools more rapidly because it has a larger diameter and greater exposed surface area, increasing the rate of heat loss by evaporation and convection."
      },
      {
        step: 3,
        title: "State Two Controlled Variables (Part iii)",
        body: "1. Volume / mass of water (80 cm³).\n2. Initial / starting temperature of the water (84.0 °C) (or room temperature / same beaker material)."
      }
    ],
    finalAnswer: "(i) Beaker X = 0.072 °C/s; Beaker Y = 0.12 °C/s;\n(ii) Beaker Y cools more rapidly because it has a larger surface area for evaporation and convection;\n(iii) 1. Volume / mass of water (80 cm³); 2. Initial starting temperature (84.0 °C).",
    reasonablenessCheck: "Beaker Y's rate (0.12 °C/s) is ~1.7 times higher than Beaker X (0.072 °C/s), matching the larger exposed area.",
    commonMistakes: [
      "Omitting units from the calculated rates.",
      "Saying Beaker X cools faster because it is deeper."
    ],
    takeaway: "Cooling rate increases with surface area due to faster evaporation and convection; volume and starting temperature must be kept equal.",
    simulation: {
      type: "evaporation",
      defaultParams: { rateX: 0.072, rateY: 0.122 },
      controls: [],
      readouts: [
        { label: "Beaker X Rate", expr: () => "0.072 °C/s (Narrow)" },
        { label: "Beaker Y Rate", expr: () => "0.122 °C/s (Wide - Faster)" }
      ],
      explanation: "The wider beaker Y exposes more surface area to ambient air, accelerating cooling."
    }
  },
  {
    globalId: "Q368",
    examId: "Q00701",
    paperRef: "5054/31/O/N/22 Q3",
    pdfPage: 188,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Radiative Cooling of Black vs Silver Cans Master Suite",
    paperType: "practical",
    marks: 6,
    questionText: `In this experiment, you will compare the rate of cooling of water in a dull black metal can and a shiny silver metal can.
You are provided with:
- Can A: painted dull black
- Can B: polished shiny silver
- hot water (~80 °C)
- two thermometers and a stopwatch.

(a) Pour 150 cm³ of hot water into both cans simultaneously.
Record the temperature θ in both cans every 60 s for 300 s in Table 3.1.
(b) Data shows:
Can A (black): cools from 82.0 °C to 63.0 °C in 300 s (drop = 19.0 °C).
Can B (silver): cools from 82.0 °C to 72.0 °C in 300 s (drop = 10.0 °C).
Calculate the cooling rate for each can in °C/s. [2]
(c) State which can cools down more rapidly and explain why. [2]
(d) State two variables that were controlled to ensure a fair test. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate cooling rates in °C/s for black and silver cans holding equal water volumes, explain the radiative emissivity difference, and state control variables.",
    givenInfo: [
      "Can A: dull black.",
      "Can B: shiny silver.",
      "Water volume = 150 cm³ in each can.",
      "Cooling time = 300 s (5.0 min)."
    ],
    toFind: "Cooling rates, emissivity explanation, and two control variables.",
    physicsConcepts: `Thermal radiation emission from containers:
1. Cooling rate formula:
   $$R = \\frac{\\Delta \\theta}{t}$$
2. Physical mechanism: Both cans have identical volumes, shapes, and starting temperatures, so conductive and convective losses to air are equal.
   The difference in cooling rate is governed by thermal radiation emission:
   - Dull black has high emissivity ($\\varepsilon \\approx 0.95$), radiating infrared heat to the room rapidly.
   - Shiny silver has low emissivity ($\\varepsilon \\approx 0.05$), radiating very little heat.
   Therefore, Can A (black) cools down more rapidly.
3. Control variables: Volume/mass of water (150 cm³), starting temperature (82.0 °C), can dimensions and metal material, and identical room surroundings.`,
    equations: `R_A = \\frac{19.0}{300} = 0.0633^\\circ\\text{C/s}; \\quad R_B = \\frac{10.0}{300} = 0.0333^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Practical Suite",
        body: "This master entry coordinates subparts Q369 and Q370 for the Paper 3 black vs silver can experiment on PDF pages 188–189."
      }
    ],
    finalAnswer: "Full subpart calculations, emissivity explanations, and control factors are detailed in Q369 and Q370 below.",
    reasonablenessCheck: "The black can drops 19 °C while the silver can drops only 10 °C, matching radiation emissivity differences.",
    commonMistakes: [
      "Stating black absorbs heat faster (the cans are hot and losing heat by emission).",
      "Omitting units from the calculated rates."
    ],
    takeaway: "Hot black containers cool faster than silver containers because dull black surfaces are better emitters of thermal radiation.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { rateBlack: 0.063, rateSilver: 0.033 },
      controls: [],
      readouts: [
        { label: "Black Can Rate", expr: () => "0.063 °C/s (Faster)" },
        { label: "Silver Can Rate", expr: () => "0.033 °C/s (Slower)" }
      ],
      explanation: "Can A emits infrared radiation at roughly twice the rate of the reflective silver can B."
    }
  },
  {
    globalId: "Q369",
    examId: "Q00702",
    paperRef: "5054/31/O/N/22 Q3(a)&(b)",
    pdfPage: 188,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Can Cooling Rate Calculations",
    paperType: "practical",
    marks: 2,
    questionText: `Can A (dull black) cools from 82.0 °C to 63.0 °C in 300 s.
Can B (shiny silver) cools from 82.0 °C to 72.0 °C in 300 s.

Calculate the average cooling rate for each can in °C/s.
rate for Can A = .................... °C/s
rate for Can B = .................... °C/s [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the average cooling rates for Can A and Can B over 300 s in °C/s.",
    givenInfo: [
      "Can A: Δθ_A = 82.0 °C - 63.0 °C = 19.0 °C over 300 s.",
      "Can B: Δθ_B = 82.0 °C - 72.0 °C = 10.0 °C over 300 s."
    ],
    toFind: "Cooling rates R_A and R_B in °C/s.",
    physicsConcepts: `Average cooling rate:
$$R = \\frac{\\Delta \\theta}{t}$$
For Can A:
$$R_A = \\frac{19.0}{300} = 0.0633\\text{ }^\\circ\\text{C/s}$$
For Can B:
$$R_B = \\frac{10.0}{300} = 0.0333\\text{ }^\\circ\\text{C/s}$$`,
    equations: `R_A = \\frac{19.0}{300} = 0.0633 \\text{ }^\\circ\\text{C/s}; \\quad R_B = \\frac{10.0}{300} = 0.0333 \\text{ }^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Compute Rate for Can A (Black)",
        body: "R_A = 19.0 °C / 300 s = 0.0633 °C/s ≈ 0.063 °C/s."
      },
      {
        step: 2,
        title: "Compute Rate for Can B (Silver)",
        body: "R_B = 10.0 °C / 300 s = 0.0333 °C/s ≈ 0.033 °C/s."
      }
    ],
    finalAnswer: "rate for Can A = 0.063 °C/s (or 0.0633 °C/s);\nrate for Can B = 0.033 °C/s (or 0.0333 °C/s)",
    reasonablenessCheck: "The black can's rate (0.063 °C/s) is nearly double that of the silver can (0.033 °C/s), matching radiation physics.",
    commonMistakes: [
      "Dividing 300 by Δθ.",
      "Using minutes instead of seconds without changing the unit to °C/min."
    ],
    takeaway: "Cooling rate = Δθ / t. The black can cools at nearly twice the rate of the silver can.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { rateA: 0.063, rateB: 0.033 },
      controls: [],
      readouts: [
        { label: "Can A Rate", expr: () => "0.063 °C/s" },
        { label: "Can B Rate", expr: () => "0.033 °C/s" }
      ],
      explanation: "Dividing temperature drops by 300 s gives 0.063 °C/s for black vs 0.033 °C/s for silver."
    }
  },
  {
    globalId: "Q370",
    examId: "Q00703",
    paperRef: "5054/31/O/N/22 Q3(c)&(d)",
    pdfPage: 188,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Paper 3 Practical: Radiative Deduction and Controlled Variables",
    paperType: "practical",
    marks: 4,
    questionText: `(c) State which can cools down more rapidly and explain why. [2]
(d) State two variables that were controlled in this experiment to ensure a fair test.
1 ........................................................................................................................
2 ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify which can cools faster with physical reasoning based on radiation emission, and list two controlled variables.",
    givenInfo: [
      "Can A (dull black): rate = 0.063 °C/s.",
      "Can B (shiny silver): rate = 0.033 °C/s."
    ],
    toFind: "Choice of can, emission explanation, and two controlled variables.",
    physicsConcepts: `1. Physical mechanism: Can A (dull black) cools down more rapidly because dull black surfaces are better / more effective emitters of thermal radiation than shiny silver surfaces.
2. Controlled variables:
   - Volume / mass of water (150 cm³): thermal capacity must be identical.
   - Initial starting temperature (82.0 °C): starting thermal gradient must be identical.
   - Same can dimensions, shape, and metal thickness.
   - Ambient room temperature and absence of draughts.`,
    equations: `\\varepsilon_{\\text{black}} \\gg \\varepsilon_{\\text{silver}} \\implies \\text{Can A emits thermal radiation faster}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (c) State and Explain Faster Cooling",
        body: "Can A (dull black) cools down more rapidly. Explanation: Dull black surfaces are better / the best emitters of thermal (infra-red) radiation (or emit radiation at a faster rate than shiny silver)."
      },
      {
        step: 2,
        title: "Part (d) State Two Controlled Variables",
        body: "1. Volume / mass of water (150 cm³).\n2. Initial / starting temperature of the water (82.0 °C) (or room temperature / same can size and material)."
      }
    ],
    finalAnswer: "(c) Can A (dull black) cools down more rapidly because dull black surfaces are better emitters of thermal radiation;\n(d) 1. Volume / mass of water (150 cm³); 2. Initial starting temperature (82.0 °C) (or room temperature).",
    reasonablenessCheck: "Because both cans are hotter than room air, emission dominates radiative heat transfer.",
    commonMistakes: [
      "Stating 'black is a better absorber' (the can is cooling by losing heat, which is emission).",
      "Naming can color as a controlled variable (color is the independent variable)."
    ],
    takeaway: "Hot dull black containers cool faster because they are better emitters of thermal radiation; water volume and starting temperature must be kept equal.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Faster Cooling Can", expr: () => "Can A (Dull Black)" },
        { label: "Mechanism", expr: () => "Better emitter of thermal radiation" }
      ],
      explanation: "Can A cools faster because dull black emits thermal radiation at a higher rate than shiny silver."
    }
  }
];