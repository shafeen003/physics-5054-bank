/**
 * Master Question Store: Batch 21 (Q296 to Q310)
 * Section 2.3: Transfer of Thermal Energy (Multiple-Choice Questions Part 2)
 */

const QUESTIONS_BATCH_21 = [
  {
    globalId: "Q296",
    examId: "Q03169",
    paperRef: "5054/11/M/J/22 Q13",
    pdfPage: 154,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Thermal Conduction in Metals vs Non-Metals",
    paperType: "mcq",
    marks: 1,
    questionText: `A copper rod and a wooden rod of the same dimensions are placed in hot water.
After a short time, the top end of the copper rod becomes hot, but the top end of the wooden rod remains cool.
Which statement explains this difference?

A Copper contains free electrons that move rapidly through the structure and transfer energy.
B Copper has a smaller density than wood, so heat moves through it faster.
C Copper atoms expand when heated, allowing energy to travel between them.
D Heat travels through wood only by convection currents.`,
    options: [
      { key: "A", text: "Copper contains free electrons that move rapidly through the structure and transfer energy." },
      { key: "B", text: "Copper has a smaller density than wood, so heat moves through it faster." },
      { key: "C", text: "Copper atoms expand when heated, allowing energy to travel between them." },
      { key: "D", text: "Heat travels through wood only by convection currents." }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the microscopic mechanism explaining why copper conducts thermal energy much faster than wood.",
    givenInfo: [
      "Copper rod (metal) and wooden rod (insulator) placed in hot water.",
      "Top of copper rod gets hot rapidly; wood stays cool."
    ],
    toFind: "The scientific explanation for rapid conduction in copper.",
    physicsConcepts: `Thermal conduction in solids:
1. In non-metals like wood, thermal conduction occurs solely through atomic lattice vibrations passing energy slowly to neighboring atoms.
2. In metals like copper, thermal energy is transferred both by lattice vibrations and primarily by free (delocalised) electrons. These electrons gain kinetic energy at the hot end, drift rapidly through the lattice, and collide with distant ions, conducting heat far more rapidly.`,
    equations: `k_{\\text{metal}} = k_{\\text{lattice}} + k_{\\text{electrons}} \\gg k_{\\text{non-metal}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Thermal Conduction Mechanisms",
        body: "Metals are conductors because they contain a sea of free delocalised electrons that move throughout the solid."
      },
      {
        step: 2,
        title: "Evaluate Options",
        body: "Option A correctly identifies that free electrons move rapidly through copper to transfer energy. Options B and C are scientifically incorrect (copper is denser than wood; atoms do not expand). Option D is incorrect because convection cannot occur in solids."
      }
    ],
    finalAnswer: "A (Copper contains free electrons that move rapidly through the structure and transfer energy.)",
    reasonablenessCheck: "Free electrons account for both high electrical conductivity and high thermal conductivity in metals.",
    commonMistakes: [
      "Saying atoms move along the rod from the hot end to the cold end.",
      "Claiming convection occurs within solid wood."
    ],
    takeaway: "Metals conduct thermal energy rapidly because free (delocalised) electrons move quickly through the structure, carrying kinetic energy.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 85 },
      controls: [],
      readouts: [
        { label: "Conduction Mode", expr: () => "Free Electron Drift + Lattice Collisions" },
        { label: "Relative Speed", expr: () => "Much faster than non-metals" }
      ],
      explanation: "Free electrons gain kinetic energy at the hot base and diffuse rapidly through the copper lattice, quickly warming the top end."
    }
  },
  {
    globalId: "Q297",
    examId: "Q03184",
    paperRef: "5054/11/M/J/22 Q28",
    pdfPage: 155,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Particle Vibrations in Solid Conduction",
    paperType: "mcq",
    marks: 1,
    questionText: `Thermal energy is conducted through a solid metal bar.
What happens to the particles at the heated end of the bar?

A They expand in size and push against each other.
B They vibrate more vigorously and collide with neighbouring particles.
C They melt and circulate as a liquid convection current.
D They lose kinetic energy and become stationary.`,
    options: [
      { key: "A", text: "They expand in size and push against each other." },
      { key: "B", text: "They vibrate more vigorously and collide with neighbouring particles." },
      { key: "C", text: "They melt and circulate as a liquid convection current." },
      { key: "D", text: "They lose kinetic energy and become stationary." }
    ],
    correctOption: "B",
    whatIsAsking: "Describe the behavior of atoms/ions at the hot end of a solid metal bar during thermal conduction.",
    givenInfo: [
      "Solid metal bar heated at one end."
    ],
    toFind: "Microscopic motion of particles at the hot end.",
    physicsConcepts: `Atomic conduction in solids:
When a solid is heated, particles at the hot end absorb thermal energy. Their internal thermal kinetic energy increases, causing them to vibrate with greater frequency and amplitude about their fixed lattice positions. As they vibrate more vigorously, they collide with neighboring particles, passing kinetic energy along the bar.`,
    equations: `\\Delta Q \\to \\Delta E_k \\implies \\text{Vibrate with greater amplitude and collide with neighbours}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Heat to Particle Motion",
        body: "Heating increases the average kinetic energy of the particles at the hot end, causing them to vibrate more vigorously."
      },
      {
        step: 2,
        title: "Identify Conduction Transfer Mechanism",
        body: "These vigorous vibrations cause particles to collide with neighboring particles, transferring kinetic energy along the lattice."
      }
    ],
    finalAnswer: "B (They vibrate more vigorously and collide with neighbouring particles.)",
    reasonablenessCheck: "Particles in a solid remain in fixed positions while vibrating; particles themselves do not expand.",
    commonMistakes: [
      "Stating particles expand in volume (expansion is caused by increased separation, not particle swelling).",
      "Confusing solid conduction with melting or convection."
    ],
    takeaway: "In solid conduction, particles vibrate more vigorously about fixed positions and transfer energy by colliding with neighbors.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 95 },
      controls: [],
      readouts: [
        { label: "Hot End Ions", expr: () => "Vibrate vigorously with large amplitude" },
        { label: "Energy Transfer", expr: () => "Collisions with adjacent ions" }
      ],
      explanation: "Particles at the heated end vibrate with larger amplitude, bumping into adjacent ions to propagate heat along the lattice."
    }
  },
  {
    globalId: "Q298",
    examId: "Q02732",
    paperRef: "5054/12/M/J/22 Q16",
    pdfPage: 155,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Thermal Conductivity of Common Cutlery Materials",
    paperType: "mcq",
    marks: 1,
    questionText: `A metal spoon and a plastic spoon are placed into a bowl of hot soup at 80 °C.
After two minutes, the handle of the metal spoon feels much hotter than the handle of the plastic spoon.
Why does this happen?

A Metal is a better conductor of thermal energy than plastic.
B Metal absorbs more infra-red radiation from the soup than plastic.
C Plastic conducts thermal energy by emitting electrons.
D Plastic cools the soup by evaporation.`,
    options: [
      { key: "A", text: "Metal is a better conductor of thermal energy than plastic." },
      { key: "B", text: "Metal absorbs more infra-red radiation from the soup than plastic." },
      { key: "C", text: "Plastic conducts thermal energy by emitting electrons." },
      { key: "D", text: "Plastic cools the soup by evaporation." }
    ],
    correctOption: "A",
    whatIsAsking: "Explain why a metal spoon handle heats up faster than a plastic spoon handle when placed in hot soup.",
    givenInfo: [
      "Metal spoon and plastic spoon placed in hot soup at 80 °C.",
      "Metal spoon handle feels hotter after two minutes."
    ],
    toFind: "The reason for the temperature difference at the handles.",
    physicsConcepts: `Comparative thermal conduction:
Metals have delocalised free electrons that transfer kinetic energy rapidly along the handle, giving them high thermal conductivity ($k \\approx 50\\text{--}400\\text{ W/(m K)}$). Plastics have tightly bound electrons and conduct heat only through slow molecular vibrations ($k \\approx 0.1\\text{--}0.3\\text{ W/(m K)}$). Thus, metal is a far better thermal conductor than plastic.`,
    equations: `k_{\\text{metal}} \\gg k_{\\text{plastic}} \\implies \\left(\\frac{dQ}{dt}\\right)_{\\text{metal}} > \\left(\\frac{dQ}{dt}\\right)_{\\text{plastic}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify the Primary Mode of Heat Transfer",
        body: "Thermal energy travels up the handles of both spoons by conduction from the submerged ends."
      },
      {
        step: 2,
        title: "Compare Material Conductivities",
        body: "Metal is a good thermal conductor because of free electrons, whereas plastic is an insulator. Therefore, metal conducts thermal energy to the handle much faster."
      }
    ],
    finalAnswer: "A (Metal is a better conductor of thermal energy than plastic.)",
    reasonablenessCheck: "Metal cookware handles are often coated with plastic or wood precisely because plastic is a poor conductor of heat.",
    commonMistakes: [
      "Attributing the heat transfer along the handle to radiation.",
      "Claiming plastic emits electrons."
    ],
    takeaway: "Metal conducts thermal energy much faster than plastic because of its high thermal conductivity and mobile free electrons.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 80 },
      controls: [],
      readouts: [
        { label: "Metal Spoon Handle", expr: () => "Rapid Heat Flow (Hot)" },
        { label: "Plastic Spoon Handle", expr: () => "Slow Heat Flow (Cool)" }
      ],
      explanation: "Thermal energy conducts rapidly up the metal spoon via free electrons, while plastic conducts slowly."
    }
  },
  {
    globalId: "Q299",
    examId: "Q02733",
    paperRef: "5054/12/M/J/22 Q17",
    pdfPage: 155,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Thermometer Response Speed and Wall Thickness",
    paperType: "mcq",
    marks: 1,
    questionText: `A manufacturer designs a liquid-in-glass thermometer to respond as quickly as possible to changes in temperature.
Which design feature achieves a quick response?

A a thick glass bulb wall
B a thin glass bulb wall
C a wide capillary bore
D a very long capillary tube`,
    options: [
      { key: "A", text: "a thick glass bulb wall" },
      { key: "B", text: "a thin glass bulb wall" },
      { key: "C", text: "a wide capillary bore" },
      { key: "D", text: "a very long capillary tube" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the design feature that allows a liquid-in-glass thermometer to reach thermal equilibrium quickly.",
    givenInfo: [
      "Objective: Thermometer responds as quickly as possible to temperature changes."
    ],
    toFind: "Feature that minimizes response lag.",
    physicsConcepts: `Thermal response time in thermometers:
Glass is a poor thermal conductor. Thermal energy must conduct through the outer glass wall of the bulb before the thermometric liquid inside can expand.
Rate of conduction:
$$\\frac{dQ}{dt} = \\frac{k A \\Delta T}{d}$$
A thinner bulb wall (smaller $d$) reduces the distance thermal energy must travel, allowing heat to conduct into the liquid faster and giving a faster response time.`,
    equations: `\\tau = \\frac{m c d}{k A} \\implies \\text{Smaller thickness } d \\implies \\text{Shorter time constant } \\tau`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Cause of Thermal Delay",
        body: "The delay in thermometer response is caused by the time required for heat to conduct through the glass wall of the bulb into the liquid."
      },
      {
        step: 2,
        title: "Evaluate Wall Thickness",
        body: "A thin glass wall provides less thermal resistance, allowing heat to transfer into the liquid more rapidly and resulting in a quicker response."
      }
    ],
    finalAnswer: "B (a thin glass bulb wall)",
    reasonablenessCheck: "Thick glass acts as a thermal insulator, slowing heat transfer into the liquid.",
    commonMistakes: [
      "Selecting A, thinking thick glass makes it stronger without considering thermal lag.",
      "Selecting C or D, which affect sensitivity or range rather than response speed."
    ],
    takeaway: "A thin glass bulb wall reduces thermal resistance, allowing the thermometer to respond quickly to temperature changes.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { wallThickness: "thin" },
      controls: [],
      readouts: [
        { label: "Glass Wall", expr: () => "Thin Glass Wall" },
        { label: "Response Lag", expr: () => "Fast (~2 s vs ~15 s for thick glass)" }
      ],
      explanation: "A thin glass bulb wall facilitates fast heat conduction into the thermometric liquid."
    }
  },
  {
    globalId: "Q300",
    examId: "Q02747",
    paperRef: "5054/12/M/J/22 Q31",
    pdfPage: 156,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Role of Free Electrons in Metallic Heat Conduction",
    paperType: "mcq",
    marks: 1,
    questionText: `Thermal energy is transferred through a metal rod by conduction.
Which particles are responsible for transferring energy through the entire length of the rod at high speed?

A free (delocalised) electrons
B positive metal ions
C neutral metal atoms
D protons in the nucleus`,
    options: [
      { key: "A", text: "free (delocalised) electrons" },
      { key: "B", text: "positive metal ions" },
      { key: "C", text: "neutral metal atoms" },
      { key: "D", text: "protons in the nucleus" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the particles that diffuse rapidly through a metal lattice to conduct thermal energy.",
    givenInfo: [
      "Metal rod undergoing thermal conduction.",
      "High-speed transfer along the full length of the rod."
    ],
    toFind: "The particles responsible for rapid heat conduction.",
    physicsConcepts: `Particle carriers in metallic conduction:
Positive metal ions are fixed in lattice positions and can only vibrate; they cannot move through the metal.
In contrast, free (delocalised) electrons are not bound to individual atoms. They move rapidly through the interstitial spaces of the lattice, gaining kinetic energy at the hot end and transferring it to distant ions via collisions throughout the rod.`,
    equations: `v_{\\text{electron}} \\gg v_{\\text{lattice phonon}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Particle Mobility",
        body: "Positive ions and nuclei are locked in fixed positions in the solid lattice and cannot move through the rod."
      },
      {
        step: 2,
        title: "Identify Mobile Carriers",
        body: "Free (delocalised) electrons move freely between ions throughout the lattice, carrying kinetic energy rapidly along the rod."
      }
    ],
    finalAnswer: "A (free (delocalised) electrons)",
    reasonablenessCheck: "The mobility of free electrons explains why metals conduct both heat and electricity far better than insulators.",
    commonMistakes: [
      "Selecting positive metal ions, forgetting that ions are fixed in the solid lattice.",
      "Selecting protons."
    ],
    takeaway: "Free (delocalised) electrons move rapidly through the metal lattice, carrying thermal energy along the rod.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Mobile Carriers", expr: () => "Free Electrons (Fast drift)" },
        { label: "Fixed Lattice", expr: () => "Positive Ions (Vibrating in place)" }
      ],
      explanation: "Free electrons drift rapidly through the lattice, transferring kinetic energy to distant ions."
    }
  },
  {
    globalId: "Q301",
    examId: "Q02490",
    paperRef: "5054/11/O/N/22 Q17",
    pdfPage: 156,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Classification of Thermal Conductors and Insulators",
    paperType: "mcq",
    marks: 1,
    questionText: `Which row correctly classifies four materials into good thermal conductors and poor thermal conductors (insulators)?

| | good thermal conductors | poor thermal conductors |
|---|---|---|
| A | aluminium, copper | glass, plastic |
| B | aluminium, glass | copper, plastic |
| C | glass, plastic | aluminium, copper |
| D | copper, plastic | aluminium, glass |`,
    options: [
      { key: "A", text: "good: aluminium, copper | poor: glass, plastic" },
      { key: "B", text: "good: aluminium, glass | poor: copper, plastic" },
      { key: "C", text: "good: glass, plastic | poor: aluminium, copper" },
      { key: "D", text: "good: copper, plastic | poor: aluminium, glass" }
    ],
    correctOption: "A",
    whatIsAsking: "Classify aluminium, copper, glass, and plastic as good thermal conductors or thermal insulators.",
    givenInfo: [
      "Four common materials: aluminium, copper, glass, plastic."
    ],
    toFind: "The correctly classified row.",
    physicsConcepts: `Material classifications:
1. Good thermal conductors: Metals containing free electrons (e.g., aluminium, copper, iron, silver).
2. Poor thermal conductors (insulators): Non-metallic solids, liquids, and gases with no free electrons (e.g., glass, plastic, wood, rubber, air).`,
    equations: `k_{\\text{copper}} \\approx 385, \\quad k_{\\text{aluminium}} \\approx 205 \\gg k_{\\text{glass}} \\approx 0.8, \\quad k_{\\text{plastic}} \\approx 0.2 \\text{ W/(m K)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Metals (Good Conductors)",
        body: "Aluminium and copper are metals with delocalised electrons, making them good thermal conductors."
      },
      {
        step: 2,
        title: "Identify Non-Metals (Poor Conductors)",
        body: "Glass and plastic are non-metallic insulators with tightly bound electrons, making them poor thermal conductors."
      },
      {
        step: 3,
        title: "Select Matching Row",
        body: "Row A correctly places aluminium and copper under good conductors, and glass and plastic under poor conductors."
      }
    ],
    finalAnswer: "A (good: aluminium, copper | poor: glass, plastic)",
    reasonablenessCheck: "Cooking pots use aluminium or copper bases (conductors) with plastic handles (insulators).",
    commonMistakes: [
      "Thinking glass is a conductor because it feels cold to the touch.",
      "Swapping plastic and aluminium."
    ],
    takeaway: "Metals (aluminium, copper) are good thermal conductors; non-metals (glass, plastic) are poor thermal conductors.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Good Conductors", expr: () => "Aluminium, Copper (Metals)" },
        { label: "Poor Conductors", expr: () => "Glass, Plastic (Insulators)" }
      ],
      explanation: "Metals conduct heat rapidly via free electrons; non-metals insulate because they lack free electrons."
    }
  },
  {
    globalId: "Q302",
    examId: "Q02491",
    paperRef: "5054/11/O/N/22 Q18",
    pdfPage: 156,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Kinetic Energy Transfer by Free Electrons",
    paperType: "mcq",
    marks: 1,
    questionText: `Thermal energy travels through a solid copper pipe by conduction.
How do the free electrons in the copper assist in this process?

A They absorb energy and expand the copper pipe.
B They gain kinetic energy at the hot region and collide with distant atoms and other electrons.
C They emit electromagnetic radiation that heats the cold end.
D They create convection currents inside the metal lattice.`,
    options: [
      { key: "A", text: "They absorb energy and expand the copper pipe." },
      { key: "B", text: "They gain kinetic energy at the hot region and collide with distant atoms and other electrons." },
      { key: "C", text: "They emit electromagnetic radiation that heats the cold end." },
      { key: "D", text: "They create convection currents inside the metal lattice." }
    ],
    correctOption: "B",
    whatIsAsking: "Describe how free electrons assist thermal conduction in a copper pipe.",
    givenInfo: [
      "Thermal conduction through a solid copper pipe."
    ],
    toFind: "The role of free electrons in the conduction process.",
    physicsConcepts: `Free electron conduction mechanics:
1. Free electrons at the heated end gain thermal kinetic energy and move faster.
2. Because they are not bound to individual ions, they diffuse rapidly toward cooler regions of the copper pipe.
3. During their passage, they collide with cooler ions and other electrons, transferring kinetic energy directly upon impact.`,
    equations: `\\Delta E_k \\text{ (electrons)} \\xrightarrow{\\text{drift + collisions}} \\Delta E_k \\text{ (distant lattice ions)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Energy Absorption",
        body: "Free electrons near the heat source gain kinetic energy and move faster."
      },
      {
        step: 2,
        title: "Describe Collision Transfer",
        body: "They drift into cooler regions of the pipe and collide with distant metal ions, transferring kinetic energy to them."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option B correctly describes this collision-based transfer."
      }
    ],
    finalAnswer: "B (They gain kinetic energy at the hot region and collide with distant atoms and other electrons.)",
    reasonablenessCheck: "Electron-ion collisions distribute kinetic energy across the pipe far faster than ion-ion vibrations alone.",
    commonMistakes: [
      "Saying electrons produce convection inside a solid.",
      "Saying electrons emit radiation inside the metal pipe."
    ],
    takeaway: "Free electrons gain kinetic energy in hotter regions and transfer it through collisions with distant ions and electrons.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Electron Role", expr: () => "Gain KE and collide with distant ions" },
        { label: "Conduction Speed", expr: () => "High speed electronic diffusion" }
      ],
      explanation: "Energetic electrons diffuse through the pipe and collide with cooler ions, rapidly transferring heat."
    }
  },
  {
    globalId: "Q303",
    examId: "Q02588",
    paperRef: "5054/11/M/J/23 Q18",
    pdfPage: 157,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Medium Requirements for Heat Transfer Modes",
    paperType: "mcq",
    marks: 1,
    questionText: `Which methods of thermal energy transfer require a material medium (matter) to take place?

| | conduction | convection | radiation |
|---|---|---|---|
| A | yes | yes | no |
| B | yes | no | yes |
| C | no | yes | no |
| D | yes | yes | yes |`,
    options: [
      { key: "A", text: "conduction: yes | convection: yes | radiation: no" },
      { key: "B", text: "conduction: yes | convection: no | radiation: yes" },
      { key: "C", text: "conduction: no | convection: yes | radiation: no" },
      { key: "D", text: "conduction: yes | convection: yes | radiation: yes" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify which heat transfer methods require particles/matter and which can travel through a vacuum.",
    givenInfo: [
      "Three methods of thermal energy transfer: conduction, convection, radiation."
    ],
    toFind: "The row identifying whether a material medium is required for each method.",
    physicsConcepts: `Medium requirements for thermal energy transfer:
1. Conduction: Requires particles in contact (lattice vibrations and free electrons). Requires a material medium (Yes).
2. Convection: Requires fluid particles that can circulate (liquid or gas). Requires a material medium (Yes).
3. Radiation: Consists of infrared electromagnetic waves that travel through empty space (a vacuum) without needing matter. Does not require a material medium (No).`,
    equations: `\\text{Conduction} \\implies \\text{Matter}; \\quad \\text{Convection} \\implies \\text{Fluid Matter}; \\quad \\text{Radiation} \\implies \\text{No matter needed}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Conduction",
        body: "Conduction relies on collisions between particles or electron drift; it cannot occur without matter. Medium required = Yes."
      },
      {
        step: 2,
        title: "Analyze Convection",
        body: "Convection relies on the bulk movement of fluid matter; it cannot occur in empty space. Medium required = Yes."
      },
      {
        step: 3,
        title: "Analyze Radiation",
        body: "Radiation is an electromagnetic wave and propagates across a vacuum. Medium required = No."
      },
      {
        step: 4,
        title: "Match Row",
        body: "Row A: yes | yes | no."
      }
    ],
    finalAnswer: "A (conduction: yes | convection: yes | radiation: no)",
    reasonablenessCheck: "Solar energy crosses the vacuum of space by radiation, proving that radiation does not require matter.",
    commonMistakes: [
      "Selecting D, thinking radiation requires air to travel.",
      "Selecting C, assuming conduction can occur through empty space."
    ],
    takeaway: "Conduction and convection require a material medium; radiation does not require matter and can cross a vacuum.",
    simulation: {
      type: "vacuum_flask_heat_leak",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Conduction in Vacuum", expr: () => "BLOCKED (Needs matter)" },
        { label: "Convection in Vacuum", expr: () => "BLOCKED (Needs matter)" },
        { label: "Radiation in Vacuum", expr: () => "PASSES (Needs no medium)" }
      ],
      explanation: "A vacuum stops conduction and convection because no particles are present, but radiation passes through."
    }
  },
  {
    globalId: "Q304",
    examId: "Q02131",
    paperRef: "5054/12/M/J/23 Q18",
    pdfPage: 157,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Mechanism of Thermal Conduction in Non-Metals",
    paperType: "mcq",
    marks: 1,
    questionText: `Thermal energy is transferred through a glass rod by conduction.
Which process is primarily responsible for the transfer of thermal energy through the glass?

A free electrons moving through the glass lattice
B atomic vibrations being passed to neighbouring atoms
C convection currents circulating within the solid glass
D infra-red waves bouncing between the glass surfaces`,
    options: [
      { key: "A", text: "free electrons moving through the glass lattice" },
      { key: "B", text: "atomic vibrations being passed to neighbouring atoms" },
      { key: "C", text: "convection currents circulating within the solid glass" },
      { key: "D", text: "infra-red waves bouncing between the glass surfaces" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the microscopic conduction mechanism in an electrical insulator (glass).",
    givenInfo: [
      "Material: Glass rod (non-metal / insulator).",
      "Process: Thermal conduction."
    ],
    toFind: "The mechanism responsible for conduction in glass.",
    physicsConcepts: `Conduction in non-metallic insulators:
Glass contains no free (delocalised) electrons; all electrons are tightly bound in covalent and ionic bonds.
Therefore, thermal conduction in glass relies entirely on lattice vibrations: atoms at the heated end vibrate more vigorously and pass energy to neighboring atoms through interatomic bonds. This makes glass a much poorer thermal conductor than metals.`,
    equations: `k_{\\text{insulator}} = k_{\\text{lattice vibrations only}} \\ll k_{\\text{metal}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Absence of Free Electrons",
        body: "Glass is an electrical insulator and contains no free electrons, ruling out Option A."
      },
      {
        step: 2,
        title: "Identify Lattice Vibration Mechanism",
        body: "Heat transfer in insulators occurs by vibrating atoms passing energy to neighboring atoms via interatomic bonds (Option B)."
      },
      {
        step: 3,
        title: "Rule Out Convection in Solids",
        body: "Option C is impossible because atoms in solids cannot circulate in convection currents."
      }
    ],
    finalAnswer: "B (atomic vibrations being passed to neighbouring atoms)",
    reasonablenessCheck: "Without free electrons, conduction relies solely on lattice vibrations, explaining why non-metals conduct heat slowly.",
    commonMistakes: [
      "Selecting A, assuming all solids have free electrons.",
      "Saying convection occurs within solid glass."
    ],
    takeaway: "In non-metals like glass, thermal conduction occurs solely through atomic vibrations passed between neighboring atoms.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { hasFreeElectrons: false },
      controls: [],
      readouts: [
        { label: "Carrier Type", expr: () => "Lattice Vibrations Only" },
        { label: "Free Electrons", expr: () => "None (Insulator)" }
      ],
      explanation: "In glass, heat conducts slowly via atomic vibrations without free electron assistance."
    }
  },
  {
    globalId: "Q305",
    examId: "Q01879",
    paperRef: "5054/11/O/N/23 Q17",
    pdfPage: 157,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Emission and Absorption of Radiation by Cans",
    paperType: "mcq",
    marks: 1,
    questionText: `Two identical metal cans, one painted dull black and the other shiny silver, are filled with equal amounts of boiling water and allowed to cool.
Which can cools more rapidly, and why?

A The black can, because dull black surfaces are better emitters of radiation.
B The black can, because dull black surfaces are better absorbers of radiation.
C The silver can, because shiny surfaces reflect heat outward into the air.
D The silver can, because shiny surfaces emit radiation at a higher frequency.`,
    options: [
      { key: "A", text: "The black can, because dull black surfaces are better emitters of radiation." },
      { key: "B", text: "The black can, because dull black surfaces are better absorbers of radiation." },
      { key: "C", text: "The silver can, because shiny surfaces reflect heat outward into the air." },
      { key: "D", text: "The silver can, because shiny surfaces emit radiation at a higher frequency." }
    ],
    correctOption: "A",
    whatIsAsking: "Determine which can cools faster and identify the relevant thermal radiation property.",
    givenInfo: [
      "Two identical cans containing boiling water: one dull black, one shiny silver.",
      "Both cans are cooling in ambient surroundings."
    ],
    toFind: "The can that cools faster and the correct physical explanation.",
    physicsConcepts: `Thermal radiation emission from cooling objects:
1. Because the water inside the cans is at ~100 °C (much hotter than the ambient room at ~20 °C), the cans are net emitters of infrared radiation.
2. A dull black surface has high emissivity ($\\varepsilon \\approx 0.95$), radiating thermal energy much faster than a shiny silver surface ($\\varepsilon \\approx 0.05$).
3. Although black surfaces are also good absorbers, the dominant process here is emission because the can is hotter than its surroundings.`,
    equations: `P_{\\text{emit}} = \\varepsilon \\sigma A T^4; \\quad \\varepsilon_{\\text{black}} \\gg \\varepsilon_{\\text{silver}} \\implies \\text{Black can cools faster}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Determine Direction of Net Heat Flow",
        body: "The cans contain boiling water and are hotter than the room, so the primary heat loss mechanism is emission of thermal radiation."
      },
      {
        step: 2,
        title: "Compare Surface Emissivities",
        body: "A dull black surface is a much better emitter of thermal radiation than a shiny silver surface."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option A correctly identifies that the black can cools more rapidly because dull black surfaces are better emitters of radiation."
      }
    ],
    finalAnswer: "A (The black can, because dull black surfaces are better emitters of radiation.)",
    reasonablenessCheck: "Leslie's cube experiments consistently show dull black faces emit several times more infrared radiation than polished metal faces.",
    commonMistakes: [
      "Selecting B: absorption describes taking in radiation from hotter surroundings, whereas cooling involves emission.",
      "Thinking shiny surfaces emit heat faster."
    ],
    takeaway: "Hot objects cool primarily by emission; dull black surfaces cool faster because they are better emitters of thermal radiation.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { tempC: 95 },
      controls: [],
      readouts: [
        { label: "Black Can Emission", expr: () => "High Emission Rate (Cools fast)" },
        { label: "Silver Can Emission", expr: () => "Low Emission Rate (Cools slowly)" }
      ],
      explanation: "The dull black can radiates infrared energy rapidly, cooling faster than the reflective silver can."
    }
  },
  {
    globalId: "Q306",
    examId: "Q01373",
    paperRef: "5054/12/O/N/23 Q22",
    pdfPage: 157,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Vacuum Flask Thermal Insulation Features",
    paperType: "mcq",
    marks: 1,
    questionText: `A vacuum flask is designed to keep hot liquids hot and cold liquids cold.
Which feature of the vacuum flask reduces thermal energy transfer by radiation?

A the vacuum between the double glass walls
B the silvered inner surfaces of the glass walls
C the plastic stopper in the neck of the flask
D the sponge rubber support under the flask`,
    options: [
      { key: "A", text: "the vacuum between the double glass walls" },
      { key: "B", text: "the silvered inner surfaces of the glass walls" },
      { key: "C", text: "the plastic stopper in the neck of the flask" },
      { key: "D", text: "the sponge rubber support under the flask" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the specific component of a vacuum flask that reduces heat transfer by radiation.",
    givenInfo: [
      "Features of a vacuum flask: vacuum, silvered walls, plastic stopper, rubber support."
    ],
    toFind: "The feature that specifically targets radiation.",
    physicsConcepts: `Functions of vacuum flask components:
1. Vacuum: Eliminates particles between the walls, completely stopping conduction and convection. Radiation can still travel through a vacuum.
2. Silvered surfaces: Highly reflective shiny metal coatings that reflect infrared radiation back into the liquid and act as poor emitters of radiation, minimizing radiative heat transfer.
3. Plastic stopper: A poor conductor that reduces conduction and prevents evaporative loss and convection through the top.
4. Rubber support: A poor conductor that reduces conduction from the base.`,
    equations: `\\text{Silvered walls} \\iff \\text{High reflectivity, low emissivity} \\iff \\text{Blocks radiation}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Each Feature's Function",
        body: "A (vacuum) stops conduction and convection, but allows radiation to pass. C (stopper) and D (rubber support) reduce conduction."
      },
      {
        step: 2,
        title: "Identify Radiation Barrier",
        body: "The silvered surfaces reflect infrared radiation back and emit very little radiation, specifically reducing radiative transfer."
      }
    ],
    finalAnswer: "B (the silvered inner surfaces of the glass walls)",
    reasonablenessCheck: "Mirrored, silvered surfaces reflect electromagnetic waves, directly countering radiative heat transfer.",
    commonMistakes: [
      "Selecting A: assuming a vacuum blocks radiation (radiation travels freely through a vacuum).",
      "Confusing the stopper's function with radiation reduction."
    ],
    takeaway: "The silvered surfaces reduce thermal radiation by reflection and low emission; the vacuum stops conduction and convection.",
    simulation: {
      type: "vacuum_flask_heat_leak",
      defaultParams: { wallFinish: "silvered" },
      controls: [],
      readouts: [
        { label: "Silvered Surface", expr: () => "Reflects Radiation (Low Emissivity)" },
        { label: "Vacuum Gap", expr: () => "Stops Conduction & Convection" }
      ],
      explanation: "Silvered surfaces reflect radiant infrared energy, while the vacuum gap blocks conduction and convection."
    }
  },
  {
    globalId: "Q307",
    examId: "Q01374",
    paperRef: "5054/12/O/N/23 Q23",
    pdfPage: 158,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Heat Conduction along Metal Bars of Different Materials",
    paperType: "mcq",
    marks: 1,
    questionText: `Strips of copper, iron, and aluminium of identical dimensions are coated with a thin layer of wax.
One end of each strip is placed simultaneously in a bath of boiling water.
The wax melts furthest along the copper strip and least along the iron strip.
What is the correct conclusion from this experiment?

A Copper has the greatest thermal conductivity and iron has the least.
B Iron has the greatest thermal conductivity and copper has the least.
C Copper expands more than iron when heated.
D Iron contains more free electrons per unit volume than copper.`,
    options: [
      { key: "A", text: "Copper has the greatest thermal conductivity and iron has the least." },
      { key: "B", text: "Iron has the greatest thermal conductivity and copper has the least." },
      { key: "C", text: "Copper expands more than iron when heated." },
      { key: "D", text: "Iron contains more free electrons per unit volume than copper." }
    ],
    correctOption: "A",
    whatIsAsking: "Deduce the ranking of thermal conductivities from the distance wax melts along different metal strips.",
    givenInfo: [
      "Identical strips of copper, aluminium, and iron heated equally at one end.",
      "Wax melts furthest along copper and least along iron."
    ],
    toFind: "The valid conclusion regarding thermal conductivity.",
    physicsConcepts: `Wax melting comparison of thermal conductivity (Ingenhousz experiment):
1. Wax melts when the temperature of the metal strip reaches the melting point of the wax (~60 °C).
2. Heat conducts along each strip at a rate proportional to its thermal conductivity $k$:
$$\\frac{dQ}{dt} = -k A \\frac{dT}{dx}$$
3. The material that conducts thermal energy fastest transports heat furthest along the strip in a given time, melting wax to the greatest distance.
Because wax melts furthest on copper, copper conducts heat fastest and has the greatest thermal conductivity. Iron melts wax least, so it has the lowest thermal conductivity among the three.`,
    equations: `x_{\\text{melt}} \\propto \\sqrt{k} \\implies x_{\\text{copper}} > x_{\\text{aluminium}} > x_{\\text{iron}} \\implies k_{\\text{copper}} > k_{\\text{aluminium}} > k_{\\text{iron}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Relate Melt Distance to Conduction Rate",
        body: "The distance wax melts along a heated bar reflects how quickly heat conducts through that material."
      },
      {
        step: 2,
        title: "Deduce Relative Conductivities",
        body: "Wax melts furthest along copper -> copper conducts heat fastest -> highest thermal conductivity. Wax melts least along iron -> iron conducts heat slowest -> lowest thermal conductivity."
      },
      {
        step: 3,
        title: "Select Option",
        body: "Option A: Copper has the greatest thermal conductivity and iron has the least."
      }
    ],
    finalAnswer: "A (Copper has the greatest thermal conductivity and iron has the least.)",
    reasonablenessCheck: "Accepted values: $k_{\\text{copper}} \\approx 385\\text{ W/(m K)}$, $k_{\\text{aluminium}} \\approx 205\\text{ W/(m K)}$, $k_{\\text{iron}} \\approx 80\\text{ W/(m K)}$, confirming the order.",
    commonMistakes: [
      "Inverting the order and selecting B.",
      "Confusing thermal expansion with thermal conduction."
    ],
    takeaway: "Wax melts furthest along the metal with the highest thermal conductivity.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { metal: "copper" },
      controls: [],
      readouts: [
        { label: "Copper k", expr: () => "385 W/(m K) (Wax melts furthest)" },
        { label: "Iron k", expr: () => "80 W/(m K) (Wax melts least)" }
      ],
      explanation: "Higher thermal conductivity enables heat to travel further along the bar in a given time, melting more wax."
    }
  },
  {
    globalId: "Q308",
    examId: "Q01988",
    paperRef: "5054/11/M/J/24 Q20",
    pdfPage: 158,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Convection Current Density Changes",
    paperType: "mcq",
    marks: 1,
    questionText: `A liquid is heated at the bottom of a beaker.
Why does the liquid at the bottom rise to the top?

A Its particles expand and become lighter.
B Its particles move faster, the liquid expands, and its density decreases.
C Heat pushes the particles upward by radiation.
D Bubbles of steam form and carry the liquid upward.`,
    options: [
      { key: "A", text: "Its particles expand and become lighter." },
      { key: "B", text: "Its particles move faster, the liquid expands, and its density decreases." },
      { key: "C", text: "Heat pushes the particles upward by radiation." },
      { key: "D", text: "Bubbles of steam form and carry the liquid upward." }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the correct particle-level explanation for why heated liquid rises in a convection current.",
    givenInfo: [
      "Liquid heated at the bottom of a beaker.",
      "Upward movement of warm liquid observed."
    ],
    toFind: "The physical cause of the upward movement.",
    physicsConcepts: `Convection current mechanism:
1. Heating increases the kinetic energy of liquid molecules, so they move faster and push slightly further apart.
2. The liquid expands, increasing its volume for a constant mass.
3. Because density is mass divided by volume ($\\rho = m / V$), the density of the heated liquid decreases.
4. The less dense warm liquid is displaced by cooler, denser surrounding liquid and rises buoyantly.`,
    equations: `V \\uparrow \\implies \\rho = \\frac{m}{V} \\downarrow \\implies \\text{Buoyant upward force}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Microscopic Behavior",
        body: "Heating causes particles to move faster and increase their average separation. The liquid expands."
      },
      {
        step: 2,
        title: "Analyze Density and Upward Motion",
        body: "Because the liquid expands, its density decreases. The less dense warm liquid rises above the cooler, denser liquid."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option B correctly links faster particle motion, liquid expansion, and decreased density."
      }
    ],
    finalAnswer: "B (Its particles move faster, the liquid expands, and its density decreases.)",
    reasonablenessCheck: "Warm water floats above cold water because thermal expansion lowers its density.",
    commonMistakes: [
      "Saying particles themselves expand or become lighter (Option A).",
      "Stating bubbles of steam are required (convection occurs well below boiling point)."
    ],
    takeaway: "Convection occurs because heated liquid expands and its density decreases, causing it to rise above denser, cooler liquid.",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Density Change", expr: () => "Density Falls (Expands)" },
        { label: "Motion", expr: () => "Buoyant Upward Flow" }
      ],
      explanation: "Heated liquid expands and becomes less dense, rising to form a circulating convection current."
    }
  },
  {
    globalId: "Q309",
    examId: "Q01989",
    paperRef: "5054/11/M/J/24 Q21",
    pdfPage: 159,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Free Electrons Diffusion Direction",
    paperType: "mcq",
    marks: 1,
    questionText: `In a metal rod being heated at one end, which statement correctly describes the movement and effect of the free electrons?

A They move from the cold end to the hot end, carrying thermal energy.
B They vibrate about fixed positions in the lattice without moving along the rod.
C They move freely through the lattice from the hotter region to the cooler region, transferring energy by collisions.
D They are emitted into the air and transfer energy by convection.`,
    options: [
      { key: "A", text: "They move from the cold end to the hot end, carrying thermal energy." },
      { key: "B", text: "They vibrate about fixed positions in the lattice without moving along the rod." },
      { key: "C", text: "They move freely through the lattice from the hotter region to the cooler region, transferring energy by collisions." },
      { key: "D", text: "They are emitted into the air and transfer energy by convection." }
    ],
    correctOption: "C",
    whatIsAsking: "Describe the direction of movement and energy transfer mechanism of free electrons in a heated metal rod.",
    givenInfo: [
      "Metal rod heated at one end.",
      "Free electrons present in the metallic structure."
    ],
    toFind: "The accurate statement describing free electron motion and heat transfer.",
    physicsConcepts: `Free electron conduction dynamics:
Free electrons in a metal are delocalised and mobile. At the heated end, electrons gain thermal kinetic energy and move at higher speeds. They diffuse randomly through the lattice, with net movement from the hotter region of high kinetic energy toward cooler regions of lower kinetic energy, transferring thermal energy through collisions with lattice ions.`,
    equations: `\\vec{J}_q = -k \\nabla T \\implies \\text{Electrons transport thermal energy down the temperature gradient}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Direction of Net Heat Flow",
        body: "Thermal energy flows from hot to cold (down the temperature gradient), ruling out Option A."
      },
      {
        step: 2,
        title: "Identify Mobility of Electrons",
        body: "Free electrons are mobile throughout the lattice (ions vibrate in fixed positions, but electrons drift), ruling out Option B."
      },
      {
        step: 3,
        title: "Confirm Collision Mechanism",
        body: "Option C correctly describes free electrons moving from hotter to cooler regions, transferring energy through collisions with ions."
      }
    ],
    finalAnswer: "C (They move freely through the lattice from the hotter region to the cooler region, transferring energy by collisions.)",
    reasonablenessCheck: "Net kinetic energy transfer always proceeds from regions of higher temperature to regions of lower temperature.",
    commonMistakes: [
      "Stating electrons move from cold to hot.",
      "Confusing electron behavior with fixed lattice ions."
    ],
    takeaway: "Free electrons diffuse from hotter to cooler regions, transferring energy by colliding with lattice ions.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Drift Direction", expr: () => "Hot region ➔ Cool region" },
        { label: "Mechanism", expr: () => "Collisions with lattice ions" }
      ],
      explanation: "High-energy electrons diffuse from the heated end toward the cooler end, transferring kinetic energy via collisions."
    }
  },
  {
    globalId: "Q310",
    examId: "Q01504",
    paperRef: "5054/12/M/J/24 Q20",
    pdfPage: 159,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Phase Change Identification During Heat Extraction",
    paperType: "mcq",
    marks: 1,
    questionText: `Thermal energy is extracted from a substance as it cools.
During this process, the particles move closer together and their arrangement changes from random and far apart to random but closely packed and sliding past each other.
Which change of state has occurred?

A boiling
B condensation
C freezing
D melting`,
    options: [
      { key: "A", text: "boiling" },
      { key: "B", text: "condensation" },
      { key: "C", text: "freezing" },
      { key: "D", text: "melting" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the change of state from the description of particle arrangement before and after cooling.",
    givenInfo: [
      "Initial state: Particles random and far apart (gas).",
      "Thermal energy extracted (cooling process).",
      "Final state: Particles random, closely packed, and sliding past each other (liquid)."
    ],
    toFind: "The name of this change of state.",
    physicsConcepts: `Particle model of phase changes:
- Initial state: "random and far apart" defines a gas.
- Final state: "random but closely packed and sliding past each other" defines a liquid.
The transition from gas to liquid with removal of thermal energy is condensation.`,
    equations: `\\text{Gas (far apart)} \\xrightarrow{\\text{condensation}} \\text{Liquid (closely packed, sliding)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Initial and Final States",
        body: "Initial state: gas (widely separated, random particles). Final state: liquid (closely packed particles that slide past each other)."
      },
      {
        step: 2,
        title: "Identify the Transition",
        body: "The change of state from gas to liquid during cooling is condensation (Option B)."
      }
    ],
    finalAnswer: "B (condensation)",
    reasonablenessCheck: "Condensation turns steam (gas) into water droplets (liquid) by removing latent heat.",
    commonMistakes: [
      "Selecting freezing (which turns liquid into solid).",
      "Selecting boiling (the reverse transition, requiring energy input)."
    ],
    takeaway: "Gas (far apart) converting to liquid (closely packed, sliding) during cooling is condensation.",
    simulation: {
      type: "phase_change_diagram",
      defaultParams: { activeTransition: 3 },
      controls: [],
      readouts: [
        { label: "Initial State", expr: () => "Gas (Widely separated)" },
        { label: "Final State", expr: () => "Liquid (Closely packed, sliding)" },
        { label: "Process", expr: () => "Condensation" }
      ],
      explanation: "Removing thermal energy causes gas particles to coalesce into a liquid via condensation."
    }
  }
];