/**
 * Master Question Store: Batch 22 (Q311 to Q325)
 * Section 2.3: Completes Multiple-Choice Questions (33/33) & Begins Theory (Q323 to Q325)
 */

const QUESTIONS_BATCH_22 = [
  {
    globalId: "Q311",
    examId: "Q01506",
    paperRef: "5054/12/M/J/24 Q22",
    pdfPage: 159,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Emitters and Absorbers of Thermal Radiation",
    paperType: "mcq",
    marks: 1,
    questionText: `Which surface is the best emitter and which surface is the best absorber of thermal radiation?

| | best emitter | best absorber |
|---|---|---|
| A | dull black | dull black |
| B | dull black | shiny white |
| C | shiny white | dull black |
| D | shiny white | shiny white |`,
    options: [
      { key: "A", text: "best emitter: dull black | best absorber: dull black" },
      { key: "B", text: "best emitter: dull black | best absorber: shiny white" },
      { key: "C", text: "best emitter: shiny white | best absorber: dull black" },
      { key: "D", text: "best emitter: shiny white | best absorber: shiny white" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify which surface finish is both the most effective emitter and the most effective absorber of thermal radiation.",
    givenInfo: [
      "Comparison between dull black and shiny white/silver surfaces[cite: 152]."
    ],
    toFind: "Best emitter and best absorber combination[cite: 152].",
    physicsConcepts: `Thermal radiation properties of surfaces:
1. Emissivity and absorptivity are directly linked by Kirchhoff's law of thermal radiation: a surface that absorbs thermal radiation readily is also an effective emitter of radiation at the same wavelength[cite: 152].
2. Dull, dark, matte black surfaces absorb almost all incident infrared radiation without reflection (absorptivity α ≈ 0.95–0.98), making them the best absorbers[cite: 152].
3. For the same reason, when hot, dull black surfaces emit thermal radiation at the maximum rate (emissivity ε ≈ 0.95–0.98), making them the best emitters[cite: 152].
4. Shiny, polished white or silvered surfaces reflect incident radiation and emit very poorly[cite: 152].`,
    equations: `\\varepsilon_{\\text{dull black}} \\approx \\alpha_{\\text{dull black}} \\approx 1.0; \\quad \\varepsilon_{\\text{shiny white}} \\approx \\alpha_{\\text{shiny white}} \\ll 1.0`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Best Emitter",
        body: "Dull black surfaces radiate thermal energy faster than any other surface finish at the same temperature, making dull black the best emitter[cite: 152]."
      },
      {
        step: 2,
        title: "Identify Best Absorber",
        body: "Dull black surfaces take in infrared radiation readily with minimal reflection, making dull black also the best absorber[cite: 152]."
      },
      {
        step: 3,
        title: "Match Option",
        body: "Row A correctly pairs dull black as the best emitter and dull black as the best absorber."
      }
    ],
    finalAnswer: "A (best emitter: dull black | best absorber: dull black)",
    reasonablenessCheck: "Good absorbers are always good emitters; dark solar thermal panels and engine cooling fins both use matte black finishes for this reason.",
    commonMistakes: [
      "Selecting B by assuming a surface can absorb well while refusing to emit[cite: 153].",
      "Treating shiny white surfaces as good emitters[cite: 153]."
    ],
    takeaway: "Dull black surfaces are both the best emitters and the best absorbers of thermal radiation[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { surfaceA: "dull_black", surfaceB: "shiny_white" },
      controls: [],
      readouts: [
        { label: "Best Emitter", expr: () => "Dull Black Surface[cite: 152]" },
        { label: "Best Absorber", expr: () => "Dull Black Surface[cite: 152]" }
      ],
      explanation: "Dull black surfaces exhibit the highest emission rate when hot and the highest absorption rate when irradiated[cite: 152]."
    }
  },
  {
    globalId: "Q312",
    examId: "Q01283",
    paperRef: "5054/11/O/N/24 Q24",
    pdfPage: 159,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Particle Collision Mechanism in Thermal Conduction",
    paperType: "mcq",
    marks: 1,
    questionText: `Thermal energy is transferred through the metal base of a saucepan by conduction.
Which statement describes how this energy is transferred through the metal?

A Free electrons and vibrating lattice ions transfer kinetic energy through collisions.
B Hot liquid circulates through microscopic pores in the metal base.
C Infra-red radiation travels through the spaces between the atoms.
D Heated metal atoms expand and push each other toward the cool side.`,
    options: [
      { key: "A", text: "Free electrons and vibrating lattice ions transfer kinetic energy through collisions." },
      { key: "B", text: "Hot liquid circulates through microscopic pores in the metal base." },
      { key: "C", text: "Infra-red radiation travels through the spaces between the atoms." },
      { key: "D", text: "Heated metal atoms expand and push each other toward the cool side." }
    ],
    correctOption: "A",
    whatIsAsking: "Identify the microscopic process of thermal conduction through a solid metal saucepan base[cite: 152].",
    givenInfo: [
      "Thermal conduction through a solid metal base[cite: 152]."
    ],
    toFind: "The particle-level conduction mechanism[cite: 152].",
    physicsConcepts: `Thermal conduction in metals:
1. Lattice ions at the heated face vibrate with larger amplitude and collide with neighboring ions, transferring kinetic energy along the lattice[cite: 152].
2. Free (delocalised) electrons gain kinetic energy at the hot face, drift rapidly through the lattice, and collide with distant metal ions throughout the thickness of the base, speeding up heat transfer[cite: 152].
3. Convection cannot occur in a solid metal, and atoms do not swell or circulate[cite: 152, 153].`,
    equations: `\\text{Rate of conduction} \\propto \\text{Lattice collisions} + \\text{Free electron diffusion}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Metallic Charge and Energy Carriers",
        body: "Metals contain positive ions arranged in a fixed lattice and a sea of free delocalised electrons[cite: 152]."
      },
      {
        step: 2,
        title: "Describe Collision Transfer",
        body: "Thermal energy is transferred by vibrating lattice ions colliding with neighbors and by mobile free electrons colliding with ions and other electrons[cite: 152]."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option A correctly identifies both free electrons and vibrating lattice ions transferring kinetic energy through collisions[cite: 152]."
      }
    ],
    finalAnswer: "A (Free electrons and vibrating lattice ions transfer kinetic energy through collisions.)",
    reasonablenessCheck: "Metals conduct heat orders of magnitude faster than insulators because free electrons provide a rapid collision pathway[cite: 152].",
    commonMistakes: [
      "Omitting free electrons from metallic conduction[cite: 153, 160].",
      "Stating that metal atoms expand in size."
    ],
    takeaway: "Conduction in metals occurs through vibrating lattice ions colliding with neighbors and free electrons diffusing rapidly through the structure[cite: 152].",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 100 },
      controls: [],
      readouts: [
        { label: "Lattice Ions", expr: () => "Vibrate & collide with neighbors[cite: 152]" },
        { label: "Free Electrons", expr: () => "Move rapidly transferring KE[cite: 152]" }
      ],
      explanation: "Vibrating lattice ions and fast-moving delocalised electrons collide to conduct heat through the metal[cite: 152]."
    }
  },
  {
    globalId: "Q313",
    examId: "Q00774",
    paperRef: "5054/12/O/N/24 Q18",
    pdfPage: 160,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Reflective Thermal Insulation Foil",
    paperType: "mcq",
    marks: 1,
    questionText: `A sheet of shiny aluminium foil is placed behind a wall-mounted hot water radiator.
How does the aluminium foil reduce the loss of thermal energy through the outside wall?

A It conducts thermal energy away from the wall to the floor.
B It reflects infra-red radiation emitted by the radiator back into the room.
C It traps air and creates a convection current inside the wall.
D It absorbs thermal radiation and radiates it outwards through the wall.`,
    options: [
      { key: "A", text: "It conducts thermal energy away from the wall to the floor." },
      { key: "B", text: "It reflects infra-red radiation emitted by the radiator back into the room." },
      { key: "C", text: "It traps air and creates a convection current inside the wall." },
      { key: "D", text: "It absorbs thermal radiation and radiates it outwards through the wall." }
    ],
    correctOption: "B",
    whatIsAsking: "Explain how shiny aluminium foil behind a radiator reduces heat loss through an exterior wall.",
    givenInfo: [
      "Shiny aluminium foil placed behind a hot radiator.",
      "Radiator radiates thermal energy toward the exterior wall[cite: 152]."
    ],
    toFind: "The physical mechanism by which the foil saves energy.",
    physicsConcepts: `Thermal radiation reflection:
1. Hot radiators emit infrared electromagnetic radiation from their rear surfaces toward the external wall[cite: 152].
2. Masonry walls have dull surfaces that absorb infrared radiation and conduct it outside[cite: 152].
3. Shiny aluminium foil is a poor emitter and an effective reflector of thermal radiation[cite: 152].
4. Placing foil behind the radiator reflects the emitted infrared radiation back into the living space, preventing it from being absorbed by the cold wall[cite: 152].`,
    equations: `\\text{Reflectivity } R_{\\text{foil}} \\approx 0.95 \\implies \\text{Reflects radiation back into room}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Form of Radiation Emitted",
        body: "The hot radiator emits infrared electromagnetic waves from its rear surface[cite: 152]."
      },
      {
        step: 2,
        title: "Analyze Effect of Shiny Surface",
        body: "Shiny metallic surfaces act as reflectors of thermal radiation[cite: 152]. The foil reflects the infrared rays back into the room rather than allowing them to be absorbed by the wall[cite: 152]."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option B correctly describes reflection of infrared radiation back into the room[cite: 152]."
      }
    ],
    finalAnswer: "B (It reflects infra-red radiation emitted by the radiator back into the room.)",
    reasonablenessCheck: "Radiator reflector foils are widely installed in building insulation specifically to exploit the high infrared reflectivity of polished aluminium.",
    commonMistakes: [
      "Thinking the foil works by conduction (foil is a metal and conducts well, which would worsen conductive loss if in contact)[cite: 152].",
      "Saying the foil absorbs the radiation[cite: 152]."
    ],
    takeaway: "Shiny foil acts as a thermal radiation reflector, bouncing infrared rays back into the living space[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { foilInstalled: true },
      controls: [],
      readouts: [
        { label: "Radiator Heat Flow", expr: () => "Reflected into room[cite: 152]" },
        { label: "Wall Heat Leak", expr: () => "Significantly Reduced" }
      ],
      explanation: "Shiny aluminium foil behind a radiator reflects emitted infrared radiation away from the outer wall[cite: 152]."
    }
  },
  {
    globalId: "Q314",
    examId: "Q01412",
    paperRef: "5054/11/M/J/25 Q21",
    pdfPage: 160,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Solar Panel Surface Coating",
    paperType: "mcq",
    marks: 1,
    questionText: `A solar water heating panel on a roof is designed to absorb as much thermal energy from the Sun as possible.
What color and surface texture should the absorber panel have?

A dull black
B shiny black
C dull white
D shiny silver`,
    options: [
      { key: "A", text: "dull black" },
      { key: "B", text: "shiny black" },
      { key: "C", text: "dull white" },
      { key: "D", text: "shiny silver" }
    ],
    correctOption: "A",
    whatIsAsking: "Select the surface color and texture that maximizes thermal radiation absorption from solar rays[cite: 152].",
    givenInfo: [
      "Solar water heating panel exposed to solar radiation[cite: 152].",
      "Objective: Absorb maximum thermal energy[cite: 152]."
    ],
    toFind: "Optimal color and texture[cite: 152].",
    physicsConcepts: `Thermal radiation absorption criteria:
1. Color: Black surfaces absorb all visible and infrared wavelengths, whereas white or light surfaces reflect them[cite: 152].
2. Texture: Dull (matte / rough) textures trap light within microscopic surface indentations, preventing specular reflection[cite: 152].
3. Therefore, a dull black surface is the most effective absorber of thermal radiation[cite: 152].`,
    equations: `\\alpha_{\\text{dull black}} \\approx 0.95\\text{--}0.98 \\implies \\text{Maximum solar energy absorbed}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Evaluate Color",
        body: "Black surfaces absorb radiant energy across the spectrum, while white reflects visible and infrared radiation[cite: 152]."
      },
      {
        step: 2,
        title: "Evaluate Texture",
        body: "Dull (matte) textures minimize reflection compared to shiny finishes[cite: 152]."
      },
      {
        step: 3,
        title: "Select Optimal Combination",
        body: "Dull black (Option A) provides the highest absorptivity[cite: 152]."
      }
    ],
    finalAnswer: "A (dull black)",
    reasonablenessCheck: "Commercial solar collectors use matte black coatings to maximize solar radiation absorption[cite: 152].",
    commonMistakes: [
      "Selecting shiny black, not realizing shiny surfaces reflect a significant fraction of incident radiation[cite: 152].",
      "Selecting shiny silver[cite: 152]."
    ],
    takeaway: "Dull black surfaces are the best absorbers of thermal radiation[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { panelFinish: "dull_black" },
      controls: [],
      readouts: [
        { label: "Optimal Panel Finish", expr: () => "Dull Black[cite: 152]" },
        { label: "Solar Absorption", expr: () => "96% of Incident Sunlight" }
      ],
      explanation: "A dull black surface absorbs maximum solar thermal radiation with minimal reflection[cite: 152]."
    }
  },
  {
    globalId: "Q315",
    examId: "Q00925",
    paperRef: "5054/12/M/J/25 Q16",
    pdfPage: 160,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Thermal Conduction in Building Materials",
    paperType: "mcq",
    marks: 1,
    questionText: `A solid brick wall separates the inside of a warm room from cold air outside in winter.
How is thermal energy transferred through the brick wall?

A by convection currents moving through the solid brick
B by vibrating atoms passing energy to neighbouring atoms
C by free electrons flowing through the brick
D by radiation crossing empty spaces inside the brick atoms`,
    options: [
      { key: "A", text: "by convection currents moving through the solid brick" },
      { key: "B", text: "by vibrating atoms passing energy to neighbouring atoms" },
      { key: "C", text: "by free electrons flowing through the brick" },
      { key: "D", text: "by radiation crossing empty spaces inside the brick atoms" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the microscopic mechanism of heat conduction through an insulating building material (solid brick).",
    givenInfo: [
      "Solid brick wall separating warm room from cold outdoor air.",
      "Brick is a non-metallic solid."
    ],
    toFind: "The conduction mechanism through brick.",
    physicsConcepts: `Conduction in non-metallic solids:
Brick is a non-metallic ceramic insulator with no free (delocalised) electrons.
Thermal energy transfers purely through lattice vibrations: atoms on the warm indoor face vibrate more vigorously and pass energy to neighboring atoms via interatomic bonds, conducting heat slowly to the colder outside face[cite: 152].`,
    equations: `k_{\\text{brick}} \\approx 0.6\\text{ W/(m K)} \\implies \\text{Lattice vibration conduction only}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Material Class",
        body: "Brick is a solid insulator without free electrons, ruling out Option C."
      },
      {
        step: 2,
        title: "Rule Out Convection in Solids",
        body: "Atoms in a solid cannot circulate, ruling out Option A[cite: 152, 153]."
      },
      {
        step: 3,
        title: "Identify Lattice Conduction",
        body: "Heat transfers through the solid brick as vibrating atoms pass kinetic energy to neighboring atoms (Option B)[cite: 152]."
      }
    ],
    finalAnswer: "B (by vibrating atoms passing energy to neighbouring atoms)",
    reasonablenessCheck: "Because non-metals conduct heat solely via lattice vibrations without free electrons, brick conducts heat relatively slowly[cite: 152].",
    commonMistakes: [
      "Saying free electrons flow through brick.",
      "Claiming convection occurs through solid brick[cite: 152, 153]."
    ],
    takeaway: "In non-metallic solids like brick, thermal energy conducts via vibrating atoms passing energy to neighboring atoms[cite: 152].",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { material: "brick" },
      controls: [],
      readouts: [
        { label: "Carrier Type", expr: () => "Lattice Vibrations Only[cite: 152]" },
        { label: "Free Electrons", expr: () => "None (Insulator)" }
      ],
      explanation: "Lattice vibrations pass energy from atom to atom through the solid brick wall[cite: 152]."
    }
  },
  {
    globalId: "Q316",
    examId: "Q00940",
    paperRef: "5054/12/M/J/25 Q31",
    pdfPage: 160,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Energy Transfer in Coastal Sea Breezes",
    paperType: "mcq",
    marks: 1,
    questionText: `On a hot sunny day at the seaside, a sea breeze blows from the cool sea toward the warm land.
Which process is responsible for setting up this breeze?

A conduction of heat through the sand
B convection currents in the air
C evaporation of sea water cooling the clouds
D nuclear radiation from the Sun`,
    options: [
      { key: "A", text: "conduction of heat through the sand" },
      { key: "B", text: "convection currents in the air" },
      { key: "C", text: "evaporation of sea water cooling the clouds" },
      { key: "D", text: "nuclear radiation from the Sun" }
    ],
    correctOption: "B",
    whatIsAsking: "Identify the heat transfer mechanism responsible for daytime coastal sea breezes.",
    givenInfo: [
      "Hot sunny day at a coastline.",
      "Sea breeze blows from the cool sea toward the warmer land."
    ],
    toFind: "The responsible heat transfer process[cite: 152].",
    physicsConcepts: `Coastal sea breeze convection mechanism:
1. Land has a lower specific heat capacity than water and heats up faster in sunlight[cite: 34].
2. Air above the warm land heats up, expands, decreases in density, and rises[cite: 152].
3. Cooler, denser air over the sea moves in toward the land to take its place[cite: 152].
4. This density-driven atmospheric circulation is a natural convection current[cite: 152].`,
    equations: `\\rho_{\\text{warm land air}} < \\rho_{\\text{cool sea air}} \\implies \\text{Sea breeze convection cycle}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Differential Surface Heating",
        body: "Sunlight warms the land faster than the sea because water has a high specific heat capacity[cite: 34]."
      },
      {
        step: 2,
        title: "Identify Atmospheric Circulation",
        body: "Air above the land warms, expands, becomes less dense, and rises[cite: 152]. Cooler air from above the sea moves in to replace it, forming a convection current[cite: 152]."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option B: Convection currents in the air[cite: 152]."
      }
    ],
    finalAnswer: "B (convection currents in the air)",
    reasonablenessCheck: "Breezes and winds are atmospheric convection currents driven by uneven solar heating[cite: 152].",
    commonMistakes: [
      "Selecting conduction (air is a poor conductor)[cite: 152].",
      "Selecting evaporation."
    ],
    takeaway: "Sea breezes are large-scale atmospheric convection currents caused by uneven heating of land and water[cite: 152].",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: { breezeMode: "sea_breeze" },
      controls: [],
      readouts: [
        { label: "Circulation Type", expr: () => "Convection Current[cite: 152]" },
        { label: "Airflow Direction", expr: () => "Sea (Cool) ➔ Land (Warm)" }
      ],
      explanation: "Warm air rises over the land and cooler air flows in from the sea, completing a convection current loop[cite: 152]."
    }
  },
  {
    globalId: "Q317",
    examId: "Q00273",
    paperRef: "5054/11/O/N/25 Q17",
    pdfPage: 161,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Cooling Rates of Differently Colored Metal Cans",
    paperType: "mcq",
    marks: 1,
    questionText: `Four identical metal cans are filled with equal amounts of water at 80 °C and left in a room at 20 °C.
The outside surfaces of the cans are:
1 dull black
2 shiny black
3 dull white
4 shiny white

Which can cools down most rapidly?

A can 1
B can 2
C can 3
D can 4`,
    options: [
      { key: "A", text: "can 1 (dull black)" },
      { key: "B", text: "can 2 (shiny black)" },
      { key: "C", text: "can 3 (dull white)" },
      { key: "D", text: "can 4 (shiny white)" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify which of four surface finishes cools down most rapidly from 80 °C in room air[cite: 152].",
    givenInfo: [
      "Four identical cans containing water at 80 °C in a 20 °C room.",
      "Surfaces: dull black, shiny black, dull white, shiny white."
    ],
    toFind: "The can with the fastest cooling rate[cite: 152].",
    physicsConcepts: `Thermal radiation emission ranking:
Because the cans are at 80 °C in a 20 °C room, they are net emitters of infrared radiation[cite: 152].
Emission rate depends on emissivity:
- Dull black has the highest emissivity (ε ≈ 0.95–0.98), radiating heat fastest[cite: 152].
- Shiny black has lower emissivity than dull black due to surface reflection.
- Dull white has moderate emissivity.
- Shiny white has the lowest emissivity (ε ≈ 0.10–0.20).
Therefore, can 1 (dull black) emits thermal radiation fastest and cools down most rapidly[cite: 152].`,
    equations: `\\varepsilon_{\\text{dull black}} > \\varepsilon_{\\text{shiny black}} > \\varepsilon_{\\text{dull white}} > \\varepsilon_{\\text{shiny white}}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Primary Heat Loss Pathway",
        body: "All cans have identical shapes, volumes, and starting temperatures, so conduction and convection losses are nearly identical. The difference in cooling rate is governed by thermal radiation emission[cite: 152]."
      },
      {
        step: 2,
        title: "Evaluate Surface Finishes",
        body: "A dull black surface is the best emitter of thermal radiation[cite: 152]. It emits infrared waves faster than shiny black, dull white, or shiny white surfaces[cite: 152]."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Can 1 (dull black) cools down most rapidly (Option A)[cite: 152]."
      }
    ],
    finalAnswer: "A (can 1 (dull black))",
    reasonablenessCheck: "Dull black cooling fins are standard on motorcycle engine cylinders and heat sinks to maximize heat rejection[cite: 152].",
    commonMistakes: [
      "Selecting shiny white, thinking shiny surfaces lose heat faster[cite: 153].",
      "Selecting shiny black, neglecting the fact that matte textures emit better than glossy ones[cite: 152]."
    ],
    takeaway: "Dull black surfaces are the most effective emitters of thermal radiation, cooling fastest when hot[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { canSelection: "dull_black" },
      controls: [],
      readouts: [
        { label: "Fastest Cooling Can", expr: () => "Can 1: Dull Black[cite: 152]" },
        { label: "Emissivity ε", expr: () => "0.96 (Maximum Emission)[cite: 152]" }
      ],
      explanation: "Can 1 radiates heat faster than the other three finishes due to its high emissivity[cite: 152]."
    }
  },
  {
    globalId: "Q318",
    examId: "Q00632",
    paperRef: "5054/11/O/N/25 Q17",
    pdfPage: 161,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Cooling Rates of Differently Colored Metal Cans (Variant Pairing)",
    paperType: "mcq",
    marks: 1,
    questionText: `Four identical metal cans are filled with equal amounts of water at 80 °C and left in a room at 20 °C.
The outside surfaces of the cans are:
1 dull black
2 shiny black
3 dull white
4 shiny white

Which can cools down most rapidly?

A can 1
B can 2
C can 3
D can 4`,
    options: [
      { key: "A", text: "can 1 (dull black)" },
      { key: "B", text: "can 2 (shiny black)" },
      { key: "C", text: "can 3 (dull white)" },
      { key: "D", text: "can 4 (shiny white)" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify which can cools fastest among the four surface finishes (variant pairing of Q317)[cite: 161].",
    givenInfo: [
      "Identical cans containing water at 80 °C in room air at 20 °C.",
      "Surfaces: dull black, shiny black, dull white, shiny white."
    ],
    toFind: "The can with the fastest cooling rate[cite: 152].",
    physicsConcepts: `Thermal radiation emission characteristics:
A dull black surface is the best emitter of thermal radiation[cite: 152].
Because it radiates thermal energy to the room faster than shiny or white surfaces, Can 1 (dull black) cools down most rapidly[cite: 152].`,
    equations: `P_{\\text{net}} = \\varepsilon \\sigma A (T_{\\text{can}}^4 - T_{\\text{room}}^4); \\quad \\varepsilon_1 > \\varepsilon_2 > \\varepsilon_3 > \\varepsilon_4[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Recognize Cross-Paper Variant",
        body: "This question matches 5054/11/O/N/25 Q17, verified across duplicate syllabus past-paper printings[cite: 161]."
      },
      {
        step: 2,
        title: "Identify Best Emitter",
        body: "Dull black (Can 1) has the highest emissivity, radiating heat fastest and cooling most rapidly[cite: 152]."
      }
    ],
    finalAnswer: "A (can 1 (dull black))",
    reasonablenessCheck: "Consistent with Q317; dull black gives the fastest cooling rate[cite: 152].",
    commonMistakes: [
      "Confusing emission with absorption[cite: 153].",
      "Selecting shiny white[cite: 153]."
    ],
    takeaway: "Dull black surfaces emit thermal radiation fastest, cooling down more rapidly than other finishes[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { canSelection: "dull_black" },
      controls: [],
      readouts: [
        { label: "Fastest Can", expr: () => "Can 1: Dull Black[cite: 152]" },
        { label: "Cooling Rate", expr: () => "Highest (Fastest ΔT drop)" }
      ],
      explanation: "Can 1 radiates heat faster than the other finishes, producing the fastest temperature drop[cite: 152]."
    }
  },
  {
    globalId: "Q319",
    examId: "Q03100",
    paperRef: "5054/12/O/N/25 Q24",
    pdfPage: 161,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Leslie's Cube Radiation Emission Comparison",
    paperType: "mcq",
    marks: 1,
    questionText: `A hollow metal cube (Leslie's cube) has four vertical faces painted differently: dull black, shiny silver, white, and grey.
The cube is filled with boiling water at 100 °C.
An infra-red radiation detector is placed at an equal distance from each face in turn.
From which face does the detector record the greatest radiation?

A the dull black face
B the shiny silver face
C the white face
D the grey face`,
    options: [
      { key: "A", text: "the dull black face" },
      { key: "B", text: "the shiny silver face" },
      { key: "C", text: "the white face" },
      { key: "D", text: "the grey face" }
    ],
    correctOption: "A",
    whatIsAsking: "Identify which vertical face of a Leslie's cube filled with boiling water emits the greatest intensity of infrared radiation[cite: 152].",
    givenInfo: [
      "Leslie's cube filled with boiling water at 100 °C.",
      "Four faces: dull black, shiny silver, white, grey.",
      "Detector placed at an equal distance from each face[cite: 152]."
    ],
    toFind: "The face producing the highest detector reading[cite: 152].",
    physicsConcepts: `Leslie's cube experiment:
1. All four faces are at the same temperature (100 °C) because they are in contact with the same boiling water.
2. The infrared detector measures the rate of emission of thermal radiation per unit area[cite: 152].
3. Emission depends on surface finish:
   - Dull black: Highest emission (best emitter)[cite: 152].
   - Grey / White: Intermediate emission.
   - Shiny silver: Lowest emission (worst emitter / best reflector)[cite: 152].
Therefore, the detector records the greatest reading from the dull black face[cite: 152].`,
    equations: `I = \\varepsilon \\sigma T^4; \\quad \\varepsilon_{\\text{dull black}} \\approx 0.98 \\implies I_{\\text{max}}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Recognize Equal Temperatures",
        body: "Because all four faces share the same boiling water, surface temperature T is identical for each face."
      },
      {
        step: 2,
        title: "Compare Emission by Surface Type",
        body: "Dull black surfaces have the highest emissivity of all practical finishes, emitting the greatest intensity of infrared radiation[cite: 152]."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "The dull black face (Option A) produces the highest detector reading[cite: 152]."
      }
    ],
    finalAnswer: "A (the dull black face)",
    reasonablenessCheck: "Leslie's cube is the classic demonstration that dull black surfaces emit significantly more infrared radiation than polished silver surfaces at the same temperature[cite: 152].",
    commonMistakes: [
      "Selecting shiny silver, thinking shiny surfaces emit bright radiation[cite: 153].",
      "Thinking all four faces give equal readings because they are at the same temperature."
    ],
    takeaway: "At equal temperatures, a dull black surface emits more thermal radiation than shiny or light-colored surfaces[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { faceSelected: "dull_black" },
      controls: [],
      readouts: [
        { label: "Detector at Dull Black", expr: () => "MAXIMUM Reading (100% relative)[cite: 152]" },
        { label: "Detector at Shiny Silver", expr: () => "MINIMUM Reading (~10% relative)[cite: 152]" }
      ],
      explanation: "The infrared detector registers its highest reading facing the dull black side of the cube[cite: 152]."
    }
  },
  {
    globalId: "Q320",
    examId: "Q03101",
    paperRef: "5054/12/O/N/25 Q25",
    pdfPage: 161,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Thermal Radiation Absorption by Painted Metal Plates",
    paperType: "mcq",
    marks: 1,
    questionText: `Two identical metal plates are placed at equal distances from an electric radiant heater.
One plate is painted dull black and the other is polished silver.
A cork is attached to the back of each plate with a drop of wax.
The heater is switched on.
Which cork falls off first, and why?

A The cork on the black plate falls first because black surfaces are better absorbers of radiation.
B The cork on the black plate falls first because black surfaces are better emitters of radiation.
C The cork on the silver plate falls first because silver surfaces are better absorbers of radiation.
D The cork on the silver plate falls first because silver surfaces conduct heat faster.`,
    options: [
      { key: "A", text: "black plate falls first | black surfaces are better absorbers of radiation" },
      { key: "B", text: "black plate falls first | black surfaces are better emitters of radiation" },
      { key: "C", text: "silver plate falls first | silver surfaces are better absorbers of radiation" },
      { key: "D", text: "silver plate falls first | silver surfaces conduct heat faster" }
    ],
    correctOption: "A",
    whatIsAsking: "Determine which cork falls off first and identify the responsible radiation property.",
    givenInfo: [
      "Two identical metal plates: one dull black, one polished silver.",
      "Corks attached with wax to the back of each plate.",
      "Both plates placed equidistant from a radiant heater[cite: 152]."
    ],
    toFind: "The plate whose cork drops first and the correct physical explanation.",
    physicsConcepts: `Thermal radiation absorption demonstration:
1. The radiant heater emits infrared radiation toward both plates equally[cite: 152].
2. The dull black plate absorbs most of the incident radiation with minimal reflection[cite: 152].
3. The polished silver plate reflects most of the incident radiation, absorbing very little[cite: 152].
4. Heat conducts through the black plate to the wax faster, melting the wax sooner and causing its cork to fall first.
5. The relevant process is absorption, because the plates are taking in radiation from a hotter source[cite: 152].`,
    equations: `\\alpha_{\\text{black}} \\gg \\alpha_{\\text{silver}} \\implies \\left(\\frac{dQ}{dt}\\right)_{\\text{absorbed, black}} > \\left(\\frac{dQ}{dt}\\right)_{\\text{absorbed, silver}}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Heat Transfer Process",
        body: "The plates receive heat by absorbing thermal radiation from the heater[cite: 152]."
      },
      {
        step: 2,
        title: "Compare Surface Absorption",
        body: "Dull black surfaces are better absorbers of thermal radiation than shiny silver surfaces[cite: 152]. The black plate absorbs heat faster, reaching the melting temperature of wax sooner."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option A: The cork on the black plate falls first because black surfaces are better absorbers of radiation[cite: 152]."
      }
    ],
    finalAnswer: "A (The cork on the black plate falls first because black surfaces are better absorbers of radiation.)",
    reasonablenessCheck: "The wax behind the black plate melts in ~1–2 minutes, while the silver plate remains cool because it reflects the radiation[cite: 152].",
    commonMistakes: [
      "Selecting B: emission describes losing heat, but here the plate is gaining heat by absorption[cite: 152, 153].",
      "Selecting D, claiming silver conducts heat faster through the thin plate."
    ],
    takeaway: "A cork falls off the black plate first because dull black surfaces absorb thermal radiation faster than shiny surfaces[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { corkTest: true },
      controls: [],
      readouts: [
        { label: "Black Plate Wax", expr: () => "Melts first (~90 s)[cite: 152]" },
        { label: "Silver Plate Wax", expr: () => "Remains solid (Reflects heat)[cite: 152]" }
      ],
      explanation: "The black plate absorbs radiation faster, melting its wax and dropping its cork first[cite: 152]."
    }
  },
  {
    globalId: "Q321",
    examId: "Q00836",
    paperRef: "5054/11/M/J/26 Q20",
    pdfPage: 161,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Thermal Conduction in Double-Glazed Windows",
    paperType: "mcq",
    marks: 1,
    questionText: `A double-glazed window consists of two panes of glass separated by a narrow gap of trapped air.
How does the trapped air reduce thermal energy transfer from a warm room to the cold outdoors?

A Trapped air prevents thermal radiation from passing through the window.
B Air has a very low thermal conductivity and trapping it prevents convection currents.
C Air molecules in the gap absorb heat and expand, pushing heat back inside.
D The air molecules freeze and form an insulating crystal barrier.`,
    options: [
      { key: "A", text: "Trapped air prevents thermal radiation from passing through the window." },
      { key: "B", text: "Air has a very low thermal conductivity and trapping it prevents convection currents." },
      { key: "C", text: "Air molecules in the gap absorb heat and expand, pushing heat back inside." },
      { key: "D", text: "The air molecules freeze and form an insulating crystal barrier." }
    ],
    correctOption: "B",
    whatIsAsking: "Explain why the layer of trapped air in a double-glazed window reduces heat loss through the window[cite: 152].",
    givenInfo: [
      "Double-glazed window with two glass panes separated by a narrow gap of trapped air[cite: 152]."
    ],
    toFind: "The physical mechanism of trapped air insulation[cite: 152].",
    physicsConcepts: `Double glazing insulation mechanism:
1. Low thermal conductivity: Air is an exceptionally poor conductor of heat ($k \\approx 0.026\\text{ W/(m K)}$) compared to solid glass ($k \\approx 0.8\\text{ W/(m K)}$)[cite: 152].
2. Convection suppression: In a wide gap, warm air at the inner pane would rise while cool air at the outer pane sinks, establishing a convection current that carries heat across. In a narrow gap (~12–16 mm), viscous forces prevent convection currents from forming[cite: 152].
3. Conduction and convection are both minimized[cite: 152]. Radiation still passes through transparent air and glass unless a low-emissivity coating is added[cite: 152].`,
    equations: `k_{\\text{air}} \\approx 0.026 \\text{ W/(m K)} \\ll k_{\\text{glass}}; \\quad \\text{Narrow gap prevents convection circulation}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Air Conductivity",
        body: "Air is a poor conductor of thermal energy because gas particles are widely spaced[cite: 152]."
      },
      {
        step: 2,
        title: "Analyze Convection in Narrow Spaces",
        body: "Trapping the air in a narrow gap stops it from circulating, preventing convection currents[cite: 152]."
      },
      {
        step: 3,
        title: "Select Correct Option",
        body: "Option B: Air has very low thermal conductivity and trapping it prevents convection[cite: 152]."
      }
    ],
    finalAnswer: "B (Air has a very low thermal conductivity and trapping it prevents convection currents.)",
    reasonablenessCheck: "Double glazing cuts heat loss roughly in half compared to single glass by eliminating conduction and suppressing convection[cite: 152].",
    commonMistakes: [
      "Selecting A: air and glass are transparent, so radiation passes through[cite: 152].",
      "Thinking air molecules freeze in the gap."
    ],
    takeaway: "Trapped air reduces heat transfer because air is a poor conductor and the narrow space prevents convection currents[cite: 152].",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { windowType: "double_glazed" },
      controls: [],
      readouts: [
        { label: "Air Conductivity", expr: () => "0.026 W/(m K) (Poor conductor)[cite: 152]" },
        { label: "Convection in Gap", expr: () => "Suppressed in narrow gap[cite: 152]" }
      ],
      explanation: "The narrow air gap suppresses convection while the low conductivity of air slows conduction[cite: 152]."
    }
  },
  {
    globalId: "Q322",
    examId: "Q00429",
    paperRef: "5054/12/M/J/26 Q26",
    pdfPage: 162,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Infra-Red Radiation Frequency and Wavelength",
    paperType: "mcq",
    marks: 1,
    questionText: `Thermal radiation consists of electromagnetic waves transferred across space.
Which region of the electromagnetic spectrum is primarily responsible for thermal radiation from objects at normal room and domestic heating temperatures?

A gamma rays
B radio waves
C infra-red radiation
D ultraviolet radiation`,
    options: [
      { key: "A", text: "gamma rays" },
      { key: "B", text: "radio waves" },
      { key: "C", text: "infra-red radiation" },
      { key: "D", text: "ultraviolet radiation" }
    ],
    correctOption: "C",
    whatIsAsking: "Identify the region of the electromagnetic spectrum corresponding to thermal radiation from domestic objects[cite: 152].",
    givenInfo: [
      "Thermal radiation from objects at domestic heating and room temperatures[cite: 152]."
    ],
    toFind: "The corresponding electromagnetic spectrum region[cite: 152].",
    physicsConcepts: `Electromagnetic spectrum and thermal radiation:
Thermal radiation from objects between ~0 °C and 500 °C consists primarily of infrared electromagnetic waves (wavelengths between 700 nm and 1 mm)[cite: 152].
All objects emit infrared radiation, with emission intensity and frequency rising as temperature increases[cite: 152].`,
    equations: `\\lambda_{\\text{peak}} T = b \\approx 2.898 \\times 10^{-3} \\text{ m K} \\implies \\lambda \\in [8, 12] \\, \\mu\\text{m (Infra-red)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Radiation Type",
        body: "Thermal radiation from warm objects at room temperature and domestic heaters consists of infrared waves[cite: 152]."
      },
      {
        step: 2,
        title: "Select Correct Region",
        body: "Infra-red radiation (Option C)[cite: 152]."
      }
    ],
    finalAnswer: "C (infra-red radiation)",
    reasonablenessCheck: "Thermal imaging cameras detect infrared wavelengths emitted by warm bodies and household objects[cite: 152].",
    commonMistakes: [
      "Selecting ultraviolet radiation.",
      "Calling thermal radiation sound waves[cite: 153]."
    ],
    takeaway: "Thermal radiation at ordinary domestic temperatures consists of infrared electromagnetic waves[cite: 152].",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Spectrum Region", expr: () => "Infra-Red Radiation[cite: 152]" },
        { label: "Wavelength", expr: () => "~10 µm (Thermal Infrared)" }
      ],
      explanation: "Objects at everyday temperatures emit thermal radiation primarily in the infrared spectrum[cite: 152]."
    }
  },
  {
    globalId: "Q323",
    examId: "Q02076",
    paperRef: "5054/22/O/N/20 Q3",
    pdfPage: 162,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Hot Water Cylinder Convection and Insulation Master Suite",
    paperType: "theory",
    marks: 7,
    questionText: `Fig. 3.1 shows a hot water tank that contains two electric heaters X and Y[cite: 49].
hot water out (top), cold water in (bottom)[cite: 49].
Heater X is used during the daytime but heater Y is only used at night when electricity is cheaper[cite: 49].

(a) The tank is full of cold water and X is switched on[cite: 49].
The temperature of all the water above X increases very quickly but the temperature of the water below X increases much more slowly[cite: 49].
(i) Explain the process that causes the water above X to increase in temperature[cite: 49]. [3]
(ii) Heater Y remains switched off[cite: 49]. Explain why the temperature of the water below heater X increases much more slowly than the temperature of the water above heater X[cite: 49]. [2]

(b) The hot water tank is covered in a thick layer of insulating material[cite: 49]. The material is a plastic that contains a large number of small pockets of trapped air[cite: 49].
Explain why this material is a good insulator[cite: 49]. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain convection above heater X, explain why water below X stays cool, and explain why plastic foam with trapped air insulates the tank[cite: 49].",
    givenInfo: [
      "Heater X near top of tank; heater Y near bottom[cite: 49].",
      "Heater X on; heater Y off[cite: 49].",
      "Insulation: plastic foam containing small trapped air pockets[cite: 49]."
    ],
    toFind: "Full explanations for convection above X, slow warming below X, and insulation mechanism of trapped air[cite: 49].",
    physicsConcepts: `Convection and insulation in a hot water cylinder:
1. Convection above X: Water in contact with heater X is warmed by conduction, expands, decreases in density, and rises[cite: 49, 152]. Cooler, denser water above sinks to replace it, establishing a circulating convection current that warms all water above X quickly[cite: 49, 152].
2. Below X: Warm water is less dense than cold water and floats on top of it[cite: 152]. Convection currents cannot circulate downward[cite: 152]. Water is a poor thermal conductor, so heat transfers downward below X very slowly by conduction only[cite: 152].
3. Trapped air insulation: Air is an exceptionally poor conductor of heat[cite: 152]. Trapping air in small pockets prevents convective circulation, reducing both conduction and convection losses through the tank walls[cite: 49, 152].`,
    equations: `\\rho_{\\text{warm}} < \\rho_{\\text{cold}} \\implies \\text{Warm water rises buoyantly}; \\quad k_{\\text{air}} \\approx 0.026 \\text{ W/(m K)}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (a)(i) Convection Above X",
        body: "Water touching heater X is warmed, expands, and its density decreases[cite: 49, 152]. The warmer, less dense water rises[cite: 152]. Cooler, denser water sinks to replace it, establishing a convection current that distributes heat throughout the water above X[cite: 152]."
      },
      {
        step: 2,
        title: "Part (a)(ii) Slow Warming Below X",
        body: "Warm water is less dense than cold water and stays at the top (convection currents only circulate upward)[cite: 152]. Water is a poor thermal conductor, so heat transfers downward below heater X very slowly by conduction alone[cite: 49, 152]."
      },
      {
        step: 3,
        title: "Part (b) Trapped Air Insulation",
        body: "Air is a poor conductor of thermal energy / good insulator[cite: 152]. Trapping the air in small pockets prevents it from circulating, which stops convection currents[cite: 49, 152]."
      }
    ],
    finalAnswer: "(a)(i) Water near X is heated, expands, becomes less dense, and rises; cooler denser water sinks to replace it, setting up a convection current[cite: 152];\n(a)(ii) Warm water is less dense and stays at the top (convection does not occur downwards); water is a poor conductor[cite: 152];\n(b) Air is a poor conductor; trapping air in small pockets stops convection currents[cite: 152].",
    reasonablenessCheck: "Heaters in kettles and immersion tanks are placed at the bottom to circulate heat through the entire volume; placing one near the top leaves the lower water cold[cite: 49, 152].",
    commonMistakes: [
      "Saying warm water rises because it is 'lighter' without explaining expansion and density drop[cite: 153].",
      "Claiming convection occurs downward in liquids[cite: 152, 153]."
    ],
    takeaway: "Convection carries warm fluid upward; downward heat transfer in liquids is limited to slow conduction[cite: 152].",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: { heaterPosition: "top" },
      controls: [],
      readouts: [
        { label: "Above Heater X", expr: () => "Rapid Convection (Hot)[cite: 49]" },
        { label: "Below Heater X", expr: () => "Slow Conduction (Cold)[cite: 49]" },
        { label: "Tank Wall Loss", expr: () => "Suppressed by Trapped Air[cite: 49]" }
      ],
      explanation: "Heater X sets up an upward convection current that warms the top water, while the water below remains cold[cite: 49, 152]."
    }
  },
  {
    globalId: "Q324",
    examId: "Q02077",
    paperRef: "5054/22/O/N/20 Q3(a)",
    pdfPage: 162,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Hot Water Cylinder Upper Region Heating Mechanism",
    paperType: "theory",
    marks: 3,
    questionText: `The tank is full of cold water and X is switched on[cite: 49].
The temperature of all the water above X increases very quickly[cite: 49].
Explain the process that causes the water above X to increase in temperature[cite: 49]. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain in detail the convection process that rapidly warms all the water above heater X[cite: 49].",
    givenInfo: [
      "Tank full of cold water[cite: 49].",
      "Heater X switched on near the upper region of the tank[cite: 49]."
    ],
    toFind: "Step-by-step description of the convection mechanism[cite: 152].",
    physicsConcepts: `Convection current progression:
1. Conduction at element surface: Water in contact with heater X absorbs thermal energy and increases in temperature[cite: 49, 152].
2. Thermal expansion: The heated water expands, increasing its volume for a constant mass, so its density decreases[cite: 152].
3. Upward displacement: The less dense warm water rises[cite: 152].
4. Circulation cycle: Cooler, denser water above sinks to replace the rising warm water, setting up a continuous convection current that circulates through the entire volume above heater X[cite: 49, 152].`,
    equations: `\\Delta Q \\to V \\uparrow \\implies \\rho = \\frac{m}{V} \\downarrow \\implies \\text{Warm water rises}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Heating and Expansion (Mark 1)",
        body: "Water near heater X is heated, expands, and its density decreases[cite: 49, 152]."
      },
      {
        step: 2,
        title: "Upward Movement (Mark 2)",
        body: "The warm, less dense water rises to the top of the tank[cite: 152]."
      },
      {
        step: 3,
        title: "Convection Current Circulation (Mark 3)",
        body: "Cooler, denser water sinks to replace it, establishing a circulating convection current[cite: 152]."
      }
    ],
    finalAnswer: "Water near heater X is heated, expands, and its density decreases; the warmer, less dense water rises; cooler, denser water sinks to replace it, setting up a convection current[cite: 152].",
    reasonablenessCheck: "The three required marking criteria: expands -> density falls -> rises (forming a convection current)[cite: 152, 153].",
    commonMistakes: [
      "Saying warm water rises because it is 'lighter' without mentioning density or expansion[cite: 153].",
      "Omitting the sinking of cooler, denser water[cite: 152]."
    ],
    takeaway: "Any complete explanation of convection must state: heated fluid expands, density decreases, and it rises[cite: 152, 153].",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: { heaterPosition: "top" },
      controls: [],
      readouts: [
        { label: "Step 1", expr: () => "Water expands, density falls[cite: 152]" },
        { label: "Step 2", expr: () => "Warm water rises[cite: 152]" },
        { label: "Step 3", expr: () => "Cool water sinks (Circulation)[cite: 152]" }
      ],
      explanation: "Water expands and decreases in density near heater X, driving an upward convection current[cite: 49, 152]."
    }
  },
  {
    globalId: "Q325",
    examId: "Q02078",
    paperRef: "5054/22/O/N/20 Q3(a)(i)",
    pdfPage: 162,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Convection Flow Direction in Fluid Heating",
    paperType: "theory",
    marks: 2,
    questionText: `State the name of the process that transfers thermal energy through the water above heater X, and state why this process cannot transfer thermal energy downwards[cite: 49]. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Name the heat transfer process and explain why it cannot transfer thermal energy downward[cite: 49].",
    givenInfo: [
      "Thermal energy transfers through water above heater X[cite: 49]."
    ],
    toFind: "Name of the process and reason why it does not transfer heat downward[cite: 152].",
    physicsConcepts: `Convection directionality:
The process is convection[cite: 152].
Convection relies on buoyant forces caused by density differences: warmer fluid expands and becomes less dense than cooler fluid, so it rises[cite: 152].
Because warm fluid is less dense, it floats above cooler, denser fluid and cannot sink[cite: 152].
Therefore, convection currents can only transport heat upward[cite: 152].`,
    equations: `\\rho_{\\text{warm}} < \\rho_{\\text{cold}} \\implies \\text{Warm fluid floats; cannot sink}[cite: 152]`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Name the Process",
        body: "The process is convection[cite: 152]."
      },
      {
        step: 2,
        title: "Explain Why It Cannot Transfer Heat Downward",
        body: "Warm water is less dense than cooler water, so it rises and floats on top of cooler water; it cannot sink downward[cite: 152]."
      }
    ],
    finalAnswer: "Process: convection; Reason: warm water expands and becomes less dense, so it rises and floats on top of cooler water (it cannot sink)[cite: 152].",
    reasonablenessCheck: "Liquids must be heated from the bottom for convection to warm the entire volume; heating from the top leaves lower layers unmixed[cite: 49, 152].",
    commonMistakes: [
      "Naming conduction instead of convection[cite: 152].",
      "Stating that heat naturally rises without referencing fluid density[cite: 153]."
    ],
    takeaway: "Convection only transfers thermal energy upward because warm fluid is less dense and floats above cooler fluid[cite: 152].",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Process Name", expr: () => "Convection[cite: 152]" },
        { label: "Direction Constraint", expr: () => "Upward Only (Warm floats)[cite: 152]" }
      ],
      explanation: "Convection transports heat upward only, because warm water is less dense and cannot sink[cite: 152]."
    }
  }
];