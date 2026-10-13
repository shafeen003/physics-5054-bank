/**
 * Master Question Store: Batch 24 (Q341 to Q355)
 * Section 2.3: Transfer of Thermal Energy (Theory Paper 2 Part 2)
 */

const QUESTIONS_BATCH_24 = [
  {
    globalId: "Q341",
    examId: "Q00965",
    paperRef: "5054/22/O/N/22 Q3(c)",
    pdfPage: 169,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Thermal Radiation Intensity and Detector Distance",
    paperType: "theory",
    marks: 1,
    questionText: `In the Leslie's cube experiment, the infra-red detector is moved to a position that is twice as far from the dull black face.
State and explain what happens to the reading on the detector. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why and how the infrared detector reading changes when its distance from the radiating surface is doubled.",
    givenInfo: [
      "Detector moved to twice the original distance (2d) from the dull black face of Leslie's cube."
    ],
    toFind: "Effect on detector reading with physical explanation.",
    physicsConcepts: `Inverse-square law and radiative flux spreading:
Thermal radiation emitted from a localized source spreads out in all directions over a spherical wavefront.
The radiant power received per unit area (intensity $I$) is inversely proportional to the square of the distance from the source:
$$I \\propto \\frac{1}{d^2}$$
When distance is doubled ($d \\to 2d$), the intensity of radiation striking the detector aperture decreases to approximately one-quarter of its initial value, causing the meter reading to decrease.`,
    equations: `I = \\frac{P}{4 \\pi d^2} \\implies I_{2d} = \\frac{1}{4} I_d`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Geometric Radiation Spreading",
        body: "Infrared electromagnetic waves diverge outward from the cube face into the surrounding space."
      },
      {
        step: 2,
        title: "State Effect on Detector Reading",
        body: "The reading on the detector decreases / falls (because the radiation spreads out over a larger area as distance increases)."
      }
    ],
    finalAnswer: "The reading decreases / falls because the thermal radiation spreads out over a larger area as distance increases (intensity follows an inverse square relationship).",
    reasonablenessCheck: "Doubling the distance from a radiant source noticeably decreases radiant intensity, consistent with inverse-square divergence.",
    commonMistakes: [
      "Saying the reading remains unchanged because the temperature of the cube is constant.",
      "Stating the reading drops to zero."
    ],
    takeaway: "Radiation intensity decreases with distance because emitted radiant energy spreads over an increasingly large surface area.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { distanceFactor: 2.0 },
      controls: [
        { id: "distanceFactor", name: "Distance Multiplier", min: 1.0, max: 4.0, step: 0.5, default: 2.0, unit: "x" }
      ],
      readouts: [
        { label: "Detector Intensity", expr: (p) => (100 / (p.distanceFactor * p.distanceFactor)).toFixed(1) + "% of initial" }
      ],
      explanation: "Doubling distance cuts detected radiant intensity to 25% due to inverse-square geometric spreading."
    }
  },
  {
    globalId: "Q342",
    examId: "Q01550",
    paperRef: "5054/21/M/J/23 Q3",
    pdfPage: 169,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Saucepan Thermal Design Master Suite",
    paperType: "theory",
    marks: 6,
    questionText: `A metal saucepan containing soup is placed on a hotplate.
The saucepan has a thick copper base and a plastic handle.

(a) Explain why the base is made of copper but the handle is made of plastic. [2]
(b) Describe, in terms of particles and electrons, how thermal energy is conducted through the copper base. [2]
(c) Explain how thermal energy is transferred throughout the soup inside the saucepan. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Evaluate materials selection for cookware, describe microscopic conduction through a metal base, and explain convective heat circulation in the liquid soup.",
    givenInfo: [
      "Saucepan on hotplate.",
      "Base: thick copper.",
      "Handle: plastic.",
      "Contents: soup."
    ],
    toFind: "Material justifications, metallic conduction mechanism, and fluid convection explanation.",
    physicsConcepts: `Thermal design of cooking utensils:
1. Material selection:
   - Copper base: Copper is a metal with high thermal conductivity, allowing heat to conduct rapidly from the hotplate into the food.
   - Plastic handle: Plastic is a poor thermal conductor (thermal insulator), slowing heat flow to prevent burning the cook's hand.
2. Conduction in copper:
   - Positive copper ions vibrate more vigorously at the heated bottom and collide with adjacent ions.
   - Delocalised free electrons gain kinetic energy, drift rapidly through the metal lattice, and collide with distant ions, conducting heat quickly.
3. Convection in soup:
   - Soup touching the hot base warms, expands, decreases in density, and rises.
   - Cooler, denser soup at the top sinks to replace it, establishing a circulating convection current.`,
    equations: `k_{\\text{copper}} \\gg k_{\\text{plastic}}; \\quad \\rho_{\\text{warm}} < \\rho_{\\text{cold}} \\implies \\text{Convection current loop}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Suite",
        body: "This master entry coordinates subparts Q343, Q344, and Q345 for the saucepan thermal design problem on PDF pages 169–170."
      }
    ],
    finalAnswer: "Full subpart solutions detailing material choice, electron-lattice conduction, and fluid convection are given in Q343 to Q345 below.",
    reasonablenessCheck: "Cookware combines high-conductivity metals for cooking efficiency with low-conductivity insulators for user safety.",
    commonMistakes: [
      "Omitting free electrons when explaining conduction in copper.",
      "Stating convection occurs through the solid metal base."
    ],
    takeaway: "Cookware pairs high-conductivity metals for heating with low-conductivity polymers for handle safety, using convection to circulate heat through the liquid.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 100 },
      controls: [],
      readouts: [
        { label: "Copper Base", expr: () => "Rapid Conduction (k = 385 W/m K)" },
        { label: "Plastic Handle", expr: () => "Insulator (Safe to touch)" },
        { label: "Soup Contents", expr: () => "Convection currents active" }
      ],
      explanation: "Heat conducts rapidly through the copper base and circulates throughout the soup via convection."
    }
  },
  {
    globalId: "Q343",
    examId: "Q01551",
    paperRef: "5054/21/M/J/23 Q3(a)",
    pdfPage: 170,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Saucepan Base vs Handle Materials Selection",
    paperType: "theory",
    marks: 2,
    questionText: `A saucepan has a thick copper base and a plastic handle.
Explain why the base is made of copper but the handle is made of plastic. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the functional reasons for selecting copper for the saucepan base and plastic for the handle.",
    givenInfo: [
      "Base: copper.",
      "Handle: plastic."
    ],
    toFind: "Two independent physical justifications.",
    physicsConcepts: `Thermal conductivities in cookware design:
1. Copper base: Copper has a very high thermal conductivity ($k \\approx 385\\text{ W/(m K)}$), conducting heat quickly and evenly from the hotplate to the food.
2. Plastic handle: Plastic is a poor thermal conductor / thermal insulator ($k \\approx 0.2\\text{ W/(m K)}$), conducting heat slowly so the handle stays cool and can be safely held.`,
    equations: `k_{\\text{copper}} \\gg k_{\\text{plastic}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Justify Copper Base (Mark 1)",
        body: "Copper is a good thermal conductor (conducts heat quickly/well), allowing rapid heat transfer from the stove to the food."
      },
      {
        step: 2,
        title: "Justify Plastic Handle (Mark 2)",
        body: "Plastic is a poor thermal conductor / insulator, keeping the handle cool so it can be held safely without burning the user."
      }
    ],
    finalAnswer: "Copper is a good conductor of thermal energy to transfer heat quickly to the food; plastic is a poor conductor / thermal insulator so the handle does not become too hot to hold.",
    reasonablenessCheck: "Copper conducts heat ~2000 times faster than plastic, making it ideal for the cooking surface while plastic protects the user.",
    commonMistakes: [
      "Saying plastic 'attracts less heat'.",
      "Stating plastic cannot conduct heat at all."
    ],
    takeaway: "Copper conducts heat rapidly into the food; plastic acts as an insulator to prevent burns.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Copper Base", expr: () => "Good Conductor (Heats food fast)" },
        { label: "Plastic Handle", expr: () => "Insulator (Safe to touch)" }
      ],
      explanation: "High thermal conductivity in the base speeds cooking; low conductivity in the handle protects the user."
    }
  },
  {
    globalId: "Q344",
    examId: "Q01552_A",
    paperRef: "5054/21/M/J/23 Q3(b)",
    pdfPage: 170,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Particle and Electron Conduction in Copper Base",
    paperType: "theory",
    marks: 2,
    questionText: `Describe, in terms of particles and electrons, how thermal energy is conducted through the copper base. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the microscopic conduction mechanisms in copper involving both lattice particles and free electrons.",
    givenInfo: [
      "Thermal conduction occurring across a copper metal base."
    ],
    toFind: "Two-mark description referencing ions and delocalised electrons.",
    physicsConcepts: `Microscopic conduction in metals:
1. Lattice ion vibrations: Copper ions at the heated bottom vibrate with greater amplitude and collide with neighboring ions, passing kinetic energy along the lattice.
2. Free electron transport: Mobile delocalised electrons gain kinetic energy, drift rapidly through the lattice, and collide with distant ions, conducting heat quickly through the thickness of the base.`,
    equations: `\\text{Total conduction} = \\text{Lattice ion collisions} + \\text{Free electron diffusion}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Describe Lattice Ion Vibrations (Mark 1)",
        body: "Copper ions at the bottom vibrate more vigorously and pass energy to neighboring ions through collisions."
      },
      {
        step: 2,
        title: "Describe Free Electron Diffusion (Mark 2)",
        body: "Free (delocalised) electrons gain kinetic energy and move rapidly throughout the metal, transferring energy by colliding with distant ions."
      }
    ],
    finalAnswer: "Vibrating lattice ions pass kinetic energy to neighboring ions through collisions; free (delocalised) electrons move rapidly through the metal and transfer energy to distant ions.",
    reasonablenessCheck: "Both mechanisms operate simultaneously in metals, with free electrons providing the faster transfer route.",
    commonMistakes: [
      "Omitting free electrons entirely.",
      "Saying copper atoms move through the metal base."
    ],
    takeaway: "In metals, thermal conduction occurs through vibrating lattice ions colliding with neighbors and free electrons diffusing rapidly through the lattice.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { tempC: 100 },
      controls: [],
      readouts: [
        { label: "Mechanism 1", expr: () => "Lattice ion collisions" },
        { label: "Mechanism 2", expr: () => "Free electron drift" }
      ],
      explanation: "Lattice ions and free electrons collide to transfer thermal kinetic energy through the copper base."
    }
  },
  {
    globalId: "Q345",
    examId: "Q01553",
    paperRef: "5054/21/M/J/23 Q3(c)",
    pdfPage: 170,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Fluid Convection in Liquid Food Heating",
    paperType: "theory",
    marks: 2,
    questionText: `Explain how thermal energy is transferred throughout the soup inside the saucepan. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how convection circulates thermal energy throughout the soup inside the saucepan.",
    givenInfo: [
      "Liquid soup heated from below by the copper base."
    ],
    toFind: "Two-mark explanation of the convection mechanism in the soup.",
    physicsConcepts: `Convection in heated liquids:
1. Heating at the bottom: Soup at the base warms, expands, and decreases in density.
2. Upward buoyant motion: The less dense warm soup rises to the top.
3. Downward circulation: Cooler, denser soup at the surface sinks to replace it, forming a continuous convection current that distributes heat throughout the liquid.`,
    equations: `\\rho_{\\text{warm}} < \\rho_{\\text{cold}} \\implies \\text{Warm liquid rises, setting up a convection current}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Expansion and Density Change (Mark 1)",
        body: "Soup at the bottom heats up, expands, and becomes less dense."
      },
      {
        step: 2,
        title: "Describe Convection Circulation (Mark 2)",
        body: "The warm, less dense soup rises and cooler, denser soup sinks, setting up a circulating convection current."
      }
    ],
    finalAnswer: "Soup at the bottom is heated, expands, and becomes less dense; it rises and cooler, denser soup sinks to replace it, setting up a convection current.",
    reasonablenessCheck: "Liquids heated from below form natural convection loops that distribute heat evenly.",
    commonMistakes: [
      "Saying 'heat rises' without mentioning liquid expansion or density changes.",
      "Stating soup conducts heat throughout (liquids are poor conductors)."
    ],
    takeaway: "Heated liquid expands, becomes less dense, and rises while cooler, denser liquid sinks, forming a convection current.",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Base Liquid", expr: () => "Warms, expands, density falls" },
        { label: "Circulation", expr: () => "Convection current active" }
      ],
      explanation: "Warm soup rises and cool soup sinks, circulating thermal energy throughout the saucepan."
    }
  },
  {
    globalId: "Q346",
    examId: "Q01152",
    paperRef: "5054/22/M/J/23 Q5",
    pdfPage: 172,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Domestic Refrigerator Thermal Design Master Suite",
    paperType: "theory",
    marks: 6,
    questionText: `Fig. 5.1 shows the design of a domestic refrigerator.
The freezing compartment is located at the top inside the refrigerator cabinet.
On the outside at the back of the refrigerator, there is a grid of black metal cooling fins.
The space between the inner and outer walls of the cabinet is filled with plastic foam.

(a) Explain why the freezing compartment is placed at the top of the refrigerator. [2]
(b) Explain why the cooling fins on the back are painted dull black. [2]
(c) Explain how the plastic foam between the walls reduces heat transfer into the refrigerator. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Evaluate thermal design features of a domestic refrigerator: top freezer placement for internal convection, black cooling fins for external radiation, and foam insulation for wall conduction.",
    givenInfo: [
      "Freezer unit at top inside cabinet.",
      "Black cooling fins on the rear exterior.",
      "Plastic foam between double cabinet walls."
    ],
    toFind: "Full physical justifications for all three design features.",
    physicsConcepts: `Thermal engineering of refrigeration:
1. Internal cooling (freezer at top):
   - Air touching the cold freezer cools, contracts, increases in density, and sinks to the bottom.
   - Warmer, less dense air at the bottom is pushed upward to the top, where it is cooled by the freezer.
   - This sets up a convection current that cools the entire refrigerator compartment.
2. External heat rejection (black fins):
   - Heat extracted from food is carried to the exterior fins.
   - Dull black surfaces have high emissivity ($\varepsilon \approx 0.95$), radiating infrared heat to the room rapidly.
3. Cabinet insulation (plastic foam):
   - Plastic is a poor conductor of heat.
   - Foam traps small pockets of stagnant air, which has very low thermal conductivity and cannot circulate, suppressing both conduction and convection into the cabinet.`,
    equations: `\\rho_{\\text{cold air}} > \\rho_{\\text{warm air}}; \\quad P_{\\text{rad}} = \\varepsilon \\sigma A T^4; \\quad k_{\\text{trapped air}} \\approx 0.026\\text{ W/(m K)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Suite",
        body: "This master entry coordinates subparts Q347, Q348, and Q349 for the refrigerator thermal design problem on PDF pages 172–173."
      }
    ],
    finalAnswer: "Full explanations covering internal convection currents, black fin radiation emission, and trapped-air foam insulation are detailed in Q347 to Q349 below.",
    reasonablenessCheck: "Placing the freezer at the bottom would trap cold air at the base, leaving the top warm; top placement naturally circulates cold air throughout.",
    commonMistakes: [
      "Saying the freezer is at the top because 'cold air rises'.",
      "Confusing black fin radiation emission with absorption."
    ],
    takeaway: "Top freezer placement drives cooling convection currents, black fins maximize radiative heat rejection, and foam insulation blocks conduction.",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: { freezerTop: true },
      controls: [],
      readouts: [
        { label: "Freezer at Top", expr: () => "Cold air contracts, sinks" },
        { label: "Black Fins", expr: () => "High emissivity IR radiation" },
        { label: "Wall Foam", expr: () => "Blocks conduction & convection" }
      ],
      explanation: "Cold air sinks from the top freezer to cool the cabinet, while external black fins radiate extracted heat into the room."
    }
  },
  {
    globalId: "Q347",
    examId: "Q01153",
    paperRef: "5054/22/M/J/23 Q5(a)",
    pdfPage: 172,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Top Freezer Placement and Air Convection",
    paperType: "theory",
    marks: 2,
    questionText: `Explain why the freezing compartment is placed at the top of the refrigerator. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how placing the freezer at the top creates internal convection currents that cool the entire refrigerator.",
    givenInfo: [
      "Freezing compartment placed at the top of the refrigerator cabinet."
    ],
    toFind: "Two-mark physical explanation referencing air density and convection.",
    physicsConcepts: `Air convection in refrigeration:
1. Air near the freezing compartment at the top loses thermal energy, cools, contracts, and increases in density.
2. The cold, denser air sinks to the bottom of the refrigerator.
3. Warmer, less dense air at the bottom is displaced upward toward the freezer, where it is cooled in turn.
4. This circulation sets up a convection current that cools the entire refrigerator cabinet.`,
    equations: `\\Delta Q < 0 \\implies V \\downarrow \\implies \\rho = \\frac{m}{V} \\uparrow \\implies \\text{Cold air sinks}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Explain Density Increase of Cooled Air (Mark 1)",
        body: "Air near the freezer compartment at the top is cooled, contracts, and becomes more dense / its density increases."
      },
      {
        step: 2,
        title: "Describe Sinking and Convection Current (Mark 2)",
        body: "The cold, denser air sinks to the bottom of the refrigerator, displacing warmer air upwards and setting up a circulating convection current."
      }
    ],
    finalAnswer: "Air near the freezer cools, contracts, and becomes denser; the cold, denser air sinks to the bottom, setting up a convection current that cools the entire refrigerator.",
    reasonablenessCheck: "Cold fluid sinks; top placement allows natural gravity-driven circulation without needing a fan.",
    commonMistakes: [
      "Stating 'cold air rises'.",
      "Omitting the reason why cold air sinks (increased density due to contraction)."
    ],
    takeaway: "Air cooled by the top freezer contracts and becomes denser, sinking to establish a circulating convection current.",
    simulation: {
      type: "convection_current_chamber",
      defaultParams: { coolingAtTop: true },
      controls: [],
      readouts: [
        { label: "Top Air State", expr: () => "Cooled ➔ Density rises" },
        { label: "Circulation", expr: () => "Cold air sinks to bottom" }
      ],
      explanation: "Air cooled at the top becomes denser and sinks, establishing a convection current that cools the cabinet."
    }
  },
  {
    globalId: "Q348",
    examId: "Q01154",
    paperRef: "5054/22/M/J/23 Q5(b)",
    pdfPage: 173,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Black Cooling Fins for Thermal Radiation Emission",
    paperType: "theory",
    marks: 2,
    questionText: `Explain why the cooling fins on the back of the refrigerator are painted dull black. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why refrigerator exterior cooling fins are finished in dull black.",
    givenInfo: [
      "Hot refrigerant fluid circulates through fins at the back exterior of the refrigerator.",
      "Fins are painted dull black."
    ],
    toFind: "Two-mark justification for dull black surface finish.",
    physicsConcepts: `Thermal radiation emission from cooling surfaces:
1. The cooling fins are hotter than the surrounding room air, so their function is to reject thermal energy to the room.
2. Dull, matte black surfaces have high emissivity ($\varepsilon \approx 0.95–0.98$), radiating infrared electromagnetic waves much faster than shiny or light-colored surfaces.
3. Painting the fins dull black maximizes the rate of thermal radiation emission to the surroundings.`,
    equations: `P_{\\text{emit}} = \\varepsilon \\sigma A T^4; \\quad \\varepsilon_{\\text{dull black}} \\approx 0.96 \\gg \\varepsilon_{\\text{shiny}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Direction of Heat Flow (Mark 1)",
        body: "The cooling fins are hot and need to lose / transfer thermal energy to the room."
      },
      {
        step: 2,
        title: "State Radiative Property of Dull Black (Mark 2)",
        body: "Dull black surfaces are good / the best emitters of thermal radiation (or emit infrared radiation at the fastest rate)."
      }
    ],
    finalAnswer: "The fins need to lose thermal energy to the surroundings; dull black surfaces are good / the best emitters of thermal radiation.",
    reasonablenessCheck: "Dull black radiates heat roughly 10–20 times faster than polished metal fins at the same temperature.",
    commonMistakes: [
      "Stating 'dull black is a good absorber' (the fins are emitting heat, not absorbing it).",
      "Saying black attracts heat."
    ],
    takeaway: "Cooling fins are painted dull black because dull black surfaces are the most effective emitters of thermal radiation.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { finFinish: "dull_black" },
      controls: [],
      readouts: [
        { label: "Fin Function", expr: () => "Rejects heat to room" },
        { label: "Dull Black Role", expr: () => "Best emitter of thermal radiation" }
      ],
      explanation: "Dull black cooling fins maximize infrared radiation emission into the room."
    }
  },
  {
    globalId: "Q349",
    examId: "Q01155",
    paperRef: "5054/22/M/J/23 Q5(c)",
    pdfPage: 173,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Plastic Foam Insulation in Refrigerator Walls",
    paperType: "theory",
    marks: 2,
    questionText: `Explain how the plastic foam between the inner and outer walls of the refrigerator cabinet reduces thermal energy transfer into the refrigerator. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain how plastic foam containing trapped air pockets minimizes heat leak into a cold refrigerator.",
    givenInfo: [
      "Double walls filled with plastic foam containing trapped air bubbles."
    ],
    toFind: "Two-mark physical explanation covering conduction and convection reduction.",
    physicsConcepts: `Thermal insulation in cellular foams:
1. Conduction reduction: Plastic is a poor conductor of thermal energy. The foam contains tiny pockets of air, and air has very low thermal conductivity ($k \approx 0.026\text{ W/(m K)}$), severely restricting conductive heat flow through the walls.
2. Convection reduction: The tiny closed pores keep the air stationary / trapped, preventing convection currents from forming inside the wall cavity.`,
    equations: `k_{\\text{air}} \\approx 0.026 \\text{ W/(m K)} \\ll k_{\\text{solid}}; \\quad \\text{Closed cells stop convection}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Low Conductivity of Plastic and Air (Mark 1)",
        body: "Plastic and air are poor conductors of thermal energy / good thermal insulators."
      },
      {
        step: 2,
        title: "Explain Convection Suppression by Trapped Air (Mark 2)",
        body: "The air is trapped in small pockets, which prevents air from circulating and stops convection currents."
      }
    ],
    finalAnswer: "Plastic and air are poor conductors of thermal energy (insulators); the air is trapped in small pockets, preventing convection currents.",
    reasonablenessCheck: "Rigid polyurethane foam is standard in refrigeration because trapped air suppresses both conduction and convection.",
    commonMistakes: [
      "Saying plastic foam stops thermal radiation.",
      "Stating the foam generates cold air."
    ],
    takeaway: "Plastic foam insulates because air and plastic are poor conductors, and trapping air in tiny pockets stops convection currents.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { wallInsulation: "foam" },
      controls: [],
      readouts: [
        { label: "Conduction Mode", expr: () => "Minimized (Air is poor conductor)" },
        { label: "Convection Mode", expr: () => "Blocked (Air is trapped in pores)" }
      ],
      explanation: "Trapped air in the foam suppresses convection while its low thermal conductivity blocks conduction."
    }
  },
  {
    globalId: "Q350",
    examId: "Q00874",
    paperRef: "5054/21/O/N/23 Q4",
    pdfPage: 174,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Hotplate to Beaker Thermal Conduction Master Suite",
    paperType: "theory",
    marks: 5,
    questionText: `An electric hotplate is used to heat water in a glass beaker.
Both the hotplate surface and the base of the beaker are flat.

(a) Explain why having flat surfaces on both the hotplate and the base of the beaker increases the rate of thermal energy transfer. [2]
(b) Describe how thermal energy is transferred through the glass base of the beaker. [1]
(c) The water in the beaker begins to boil.
State what happens to the temperature of the water as it boils and explain your answer in terms of energy. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain the importance of flat contact surfaces for conduction, describe conduction through glass, and explain constant temperature during boiling.",
    givenInfo: [
      "Flat electric hotplate.",
      "Flat-bottomed glass beaker containing water.",
      "Water heated until boiling."
    ],
    toFind: "Contact area explanation, glass conduction description, and boiling energy explanation.",
    physicsConcepts: `Thermal conduction and contact area:
1. Contact area:
   - Rate of thermal conduction: $dQ/dt = (k A \Delta T) / d$.
   - Rough or curved surfaces touch only at microscopic high points, leaving air gaps between them. Air is a poor thermal conductor, slowing heat flow.
   - Flat surfaces maximize direct solid-to-solid contact area $A$ and eliminate insulating air gaps, increasing the rate of heat transfer.
2. Conduction through glass:
   - Glass has no free electrons. Thermal energy conducts solely through vibrating atoms passing energy to neighboring atoms via interatomic bonds.
3. Boiling at constant temperature:
   - Temperature remains constant at 100 °C because supplied thermal energy is absorbed as latent heat of vaporisation to break intermolecular bonds and separate molecules, increasing potential energy rather than kinetic energy.`,
    equations: `\\frac{dQ}{dt} \\propto A_{\\text{contact}}; \\quad Q = m L_v \\quad (\\Delta T = 0)`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Suite",
        body: "This master entry coordinates subparts Q351 and Q352 for the hotplate beaker heating problem on PDF pages 174–175."
      }
    ],
    finalAnswer: "Full subpart solutions detailing contact area conduction, glass atomic vibrations, and boiling latent heat are given in Q351 and Q352 below.",
    reasonablenessCheck: "Air gaps in non-flat cookware reduce heat transfer; flat surfaces maximize direct conduction.",
    commonMistakes: [
      "Saying free electrons conduct heat through glass.",
      "Saying water temperature increases during boiling."
    ],
    takeaway: "Flat surfaces maximize contact area and eliminate insulating air gaps; glass conducts via atomic vibrations.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { contactArea: "maximum" },
      controls: [],
      readouts: [
        { label: "Contact Area", expr: () => "Maximum (No air gaps)" },
        { label: "Glass Conduction", expr: () => "Lattice vibrations only" },
        { label: "Boiling Temp", expr: () => "Constant at 100 °C" }
      ],
      explanation: "Flat contact surfaces eliminate insulating air gaps, transferring heat directly into the glass base."
    }
  },
  {
    globalId: "Q351",
    examId: "Q00875",
    paperRef: "5054/21/O/N/23 Q4(a)",
    pdfPage: 175,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Importance of Flat Surfaces in Conduction",
    paperType: "theory",
    marks: 2,
    questionText: `Both the top surface of the hotplate and the base of the beaker are flat.
Explain why having flat surfaces increases the rate of thermal energy transfer by conduction to the beaker. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why flat contact surfaces maximize conduction compared to uneven surfaces.",
    givenInfo: [
      "Electric hotplate and beaker base are both flat."
    ],
    toFind: "Two-mark physical explanation referencing contact area and elimination of air gaps.",
    physicsConcepts: `Contact resistance in thermal conduction:
1. If surfaces are uneven or curved, they only touch at isolated points, leaving air trapped between them. Because air is a poor conductor of thermal energy, these air gaps act as thermal insulators.
2. Flat surfaces maximize the area of direct physical contact between the hotplate and the beaker base, eliminating insulating air gaps and allowing thermal energy to conduct directly through the contact interface at a higher rate.`,
    equations: `\\frac{dQ}{dt} = \\frac{k A \\Delta T}{d}; \\quad A_{\\text{contact}} \\uparrow, \\quad d_{\\text{air gaps}} \\to 0 \\implies \\frac{dQ}{dt} \\uparrow`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Contact Area Maximization (Mark 1)",
        body: "Flat surfaces maximize the area of direct contact between the hotplate and the beaker base."
      },
      {
        step: 2,
        title: "Explain Elimination of Insulating Air (Mark 2)",
        body: "This eliminates air gaps between the surfaces; since air is a poor thermal conductor, eliminating it allows heat to conduct directly and more rapidly."
      }
    ],
    finalAnswer: "Flat surfaces provide a larger area of direct contact and eliminate air gaps between the surfaces; because air is a poor conductor, this increases the rate of conduction.",
    reasonablenessCheck: "Cookware designed for electric stovetops has machined flat bases specifically to avoid insulating air pockets.",
    commonMistakes: [
      "Failing to mention air gaps.",
      "Stating that flat surfaces increase pressure."
    ],
    takeaway: "Flat contact surfaces maximize direct contact area and eliminate insulating air gaps, increasing the rate of conduction.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { airGapMm: 0 },
      controls: [
        { id: "airGapMm", name: "Air Gap Thickness", min: 0, max: 2.0, step: 0.5, default: 0, unit: "mm" }
      ],
      readouts: [
        { label: "Heat Flow Rate", expr: (p) => p.airGapMm === 0 ? "100% (Direct Conduction)" : "15% (Blocked by Air Gap)" }
      ],
      explanation: "Eliminating the air gap with flat surfaces allows direct conduction, increasing heat transfer rate."
    }
  },
  {
    globalId: "Q352",
    examId: "Q00876",
    paperRef: "5054/21/O/N/23 Q4(b)",
    pdfPage: 175,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Conduction Mechanism in Solid Glass Base",
    paperType: "theory",
    marks: 1,
    questionText: `Describe how thermal energy is conducted through the glass base of the beaker. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Describe the microscopic mechanism of thermal conduction through an insulating solid (glass).",
    givenInfo: [
      "Glass base of the beaker conducting heat from the hotplate to the water."
    ],
    toFind: "Particle-level conduction description in glass.",
    physicsConcepts: `Thermal conduction in non-metallic insulators:
Glass contains no free (delocalised) electrons. Thermal conduction occurs solely via lattice vibrations: atoms on the heated lower surface vibrate more vigorously and pass kinetic energy to neighboring atoms through interatomic bonds.`,
    equations: `\\text{Conduction in glass} = \\text{Vibrating atoms passing energy to neighbours via bonds}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Microscopic Mechanism",
        body: "Atoms / particles at the bottom vibrate more vigorously and pass kinetic energy to neighboring atoms through collisions / interatomic bonds."
      }
    ],
    finalAnswer: "Vibrating atoms / particles pass energy to neighboring atoms through collisions / bonds.",
    reasonablenessCheck: "Glass is an electrical insulator, so free electron transport is absent.",
    commonMistakes: [
      "Mentioning free electrons in glass.",
      "Saying glass atoms move from the bottom to the top."
    ],
    takeaway: "In non-metals like glass, thermal energy conducts via vibrating atoms passing energy to neighboring atoms.",
    simulation: {
      type: "thermal_conduction_lattice",
      defaultParams: { hasFreeElectrons: false },
      controls: [],
      readouts: [
        { label: "Glass Conduction", expr: () => "Atomic vibrations only" },
        { label: "Free Electrons", expr: () => "None (Insulating Solid)" }
      ],
      explanation: "Thermal energy conducts through glass via atomic vibrations passing along the network."
    }
  },
  {
    globalId: "Q353",
    examId: "Q02888",
    paperRef: "5054/22/O/N/23 Q3",
    pdfPage: 176,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Cooling Cylinders and Surface Area to Volume Ratio Master Suite",
    paperType: "theory",
    marks: 6,
    questionText: `Two solid metal cylinders A and B are made of the same metal.
Cylinder A has a smaller diameter than cylinder B, but both have the same height.
Both cylinders are heated to 90 °C and placed on an insulating mat in a room at 20 °C.

(a) State and explain which cylinder cools down more rapidly. [3]
(b) State the two methods by which thermal energy is transferred from the vertical curved surfaces of the cylinders to the room. [2]
(c) Suggest how the surfaces of the cylinders can be treated to reduce the rate of heat loss. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Compare cooling rates of thin versus thick cylinders using surface area to volume ratio, identify heat transfer methods from curved surfaces, and suggest a surface treatment to minimize heat loss.",
    givenInfo: [
      "Two solid metal cylinders of same height and material at 90 °C in a 20 °C room.",
      "Cylinder A has a smaller diameter than Cylinder B.",
      "Resting on an insulating mat."
    ],
    toFind: "Cooling rate comparison with reasoning, heat transfer methods, and surface modification.",
    physicsConcepts: `Surface area to volume ratio and cooling rates:
1. Geometric scaling:
   - Volume (mass and thermal capacity): $V = \pi r^2 h \propto r^2$.
   - Surface area: $A = 2\pi r h + 2\pi r^2 \propto r$.
   - Ratio: $\text{Surface Area} / \text{Volume} \propto 1/r$.
   - The thinner cylinder A has a larger surface area to volume (and mass) ratio. Because heat loss is proportional to surface area while thermal energy stored is proportional to mass, cylinder A loses its stored thermal energy faster per degree and cools down more rapidly.
2. Heat transfer methods from curved sides:
   - Convection: Air touching the warm curved sides is heated, expands, decreases in density, and rises, setting up convection currents.
   - Radiation: The hot metal surfaces emit infrared electromagnetic radiation directly into the room.
3. Surface treatment to reduce heat loss:
   - Polish the surface to a shiny silver / reflective finish. Shiny surfaces have low emissivity, reducing radiative heat loss.`,
    equations: `\\frac{A}{V} = \\frac{2\\pi r h + 2\\pi r^2}{\\pi r^2 h} = \\frac{2}{r} + \\frac{2}{h} \\implies r_A < r_B \\implies \\left(\\frac{A}{V}\\right)_A > \\left(\\frac{A}{V}\\right)_B`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Master Suite",
        body: "This master entry coordinates subparts Q354 and Q355 for the cooling metal cylinder problem on PDF pages 176–177."
      }
    ],
    finalAnswer: "Full subpart solutions comparing surface area to volume ratios, identifying convection and radiation, and recommending polished finishes are given in Q354 and Q355 below.",
    reasonablenessCheck: "Smaller objects cool faster because they have more surface area per unit of heat-storing mass.",
    commonMistakes: [
      "Saying the thicker cylinder cools faster because it has a larger total surface area, forgetting it has far more mass/thermal capacity.",
      "Naming conduction as a primary mode into air."
    ],
    takeaway: "Smaller objects cool faster because they have a larger surface area to volume ratio; polished surfaces reduce radiative heat loss.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { diamA: 2.0, diamB: 5.0 },
      controls: [
        { id: "diamA", name: "Cylinder A Diameter", min: 1.0, max: 3.0, step: 0.5, default: 2.0, unit: "cm" }
      ],
      readouts: [
        { label: "Cylinder A (Thin)", expr: () => "Cools more rapidly (High SA/V)" },
        { label: "Cylinder B (Thick)", expr: () => "Cools more slowly (Low SA/V)" }
      ],
      explanation: "A higher surface area to volume ratio causes the thinner cylinder A to cool more rapidly."
    }
  },
  {
    globalId: "Q354",
    examId: "Q02889",
    paperRef: "5054/22/O/N/23 Q3(a)",
    pdfPage: 177,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Cooling Rate and Surface Area to Volume Ratio",
    paperType: "theory",
    marks: 3,
    questionText: `State and explain which cylinder (thinner cylinder A or thicker cylinder B) cools down more rapidly. [3]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State which cylinder cools faster and explain why using surface area, mass, and thermal capacity.",
    givenInfo: [
      "Cylinder A: smaller diameter (thinner).",
      "Cylinder B: larger diameter (thicker).",
      "Same height and material, both at 90 °C."
    ],
    toFind: "Selection of cylinder and two supporting physical reasons.",
    physicsConcepts: `Cooling rate and geometric scaling:
1. Rate of heat loss: $dQ/dt \propto \text{Surface Area } A$.
2. Heat energy stored: $Q = m c \Delta T \propto \text{Volume } V$.
3. Rate of temperature drop:
$$\\frac{d\\theta}{dt} = \\frac{dQ/dt}{m c} \\propto \\frac{\\text{Surface Area}}{\\text{Volume}} \\propto \\frac{1}{r}$$
Cylinder A has a smaller diameter, so it has a larger surface area to volume (or surface area to mass) ratio. Because it has more surface area per unit of heat-storing mass, its temperature drops faster.`,
    equations: `\\frac{d\\theta}{dt} \\propto \\frac{A}{m} \\propto \\frac{1}{r} \\implies \\text{Cylinder A cools faster}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "State Which Cylinder Cools More Rapidly (Mark 1)",
        body: "Cylinder A cools down more rapidly."
      },
      {
        step: 2,
        title: "Relate Surface Area to Volume / Mass (Mark 2 & 3)",
        body: "Cylinder A has a larger surface area to volume ratio (or larger surface area per unit mass / smaller mass and heat capacity for its surface area), so it loses thermal energy faster relative to its stored heat."
      }
    ],
    finalAnswer: "Cylinder A; it has a larger surface area to volume ratio (or larger surface area per unit mass / smaller mass and thermal capacity relative to its surface area).",
    reasonablenessCheck: "Thin wires cool in seconds, while thick ingots take hours; smaller dimensions yield higher surface area to volume ratios.",
    commonMistakes: [
      "Choosing Cylinder B because its total surface area is larger, overlooking its much greater mass.",
      "Failing to mention volume, mass, or thermal capacity."
    ],
    takeaway: "The thinner cylinder cools faster because it has a larger surface area to volume ratio.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Faster Cooling Cylinder", expr: () => "Cylinder A (Thinner)" },
        { label: "Governing Property", expr: () => "Larger Surface Area to Volume Ratio" }
      ],
      explanation: "Cylinder A cools faster because its higher surface area to volume ratio sheds heat more quickly per unit mass."
    }
  },
  {
    globalId: "Q355",
    examId: "Q02890",
    paperRef: "5054/22/O/N/23 Q3(b)&(c)",
    pdfPage: 177,
    topic: "2.3 Transfer of thermal energy",
    subtopic: "Curved Surface Heat Loss Modes and Reflective Polish",
    paperType: "theory",
    marks: 3,
    questionText: `(b) State the two methods by which thermal energy is transferred from the vertical curved surfaces of the cylinders to the room. [2]
(c) Suggest how the surfaces of the cylinders can be treated to reduce the rate of heat loss. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify the two heat transfer mechanisms operating at the curved surfaces and suggest a surface treatment to minimize heat loss.",
    givenInfo: [
      "Hot metal cylinders in air on an insulating mat."
    ],
    toFind: "Two heat transfer modes and one surface modification.",
    physicsConcepts: `Heat transfer from exposed surfaces in air:
1. Convection: Air touching the warm vertical sides heats up, expands, decreases in density, and rises, creating upward convection currents.
2. Thermal radiation: The hot metal surfaces emit infrared electromagnetic radiation directly into the room air and surroundings.
3. Reducing heat loss:
   - Polishing the metal to a shiny, reflective silver finish reduces emissivity ($\varepsilon \approx 0.05$). Shiny surfaces are poor emitters of thermal radiation, slowing radiant heat loss.`,
    equations: `\\frac{dQ}{dt} = \\left(\\frac{dQ}{dt}\\right)_{\\text{conv}} + \\left(\\frac{dQ}{dt}\\right)_{\\text{rad}}; \\quad \\varepsilon_{\\text{polished}} \\ll \\varepsilon_{\\text{dull}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Part (b) State Two Heat Transfer Methods",
        body: "1. Convection (warm air expands, becomes less dense, and rises);\n2. Radiation (emission of infrared electromagnetic waves)."
      },
      {
        step: 2,
        title: "Part (c) Suggest Surface Treatment",
        body: "Polish the surfaces / make them shiny silver / paint them shiny white (shiny surfaces are poor emitters of thermal radiation)."
      }
    ],
    finalAnswer: "(b) 1. Convection; 2. Radiation (or infra-red radiation);\n(c) Polish the surfaces / make them shiny silver (or coat with a reflective material).",
    reasonablenessCheck: "Hot vertical metal surfaces in air lose heat through convection currents and infrared radiation; polishing minimizes radiative losses.",
    commonMistakes: [
      "Naming conduction into the air as a major method (air is an insulator; air transfers heat via convection).",
      "Suggesting painting them black (black increases heat loss)."
    ],
    takeaway: "Exposed vertical surfaces lose heat by convection and radiation; polishing surfaces to a shiny finish reduces radiation loss.",
    simulation: {
      type: "radiation_surfaces",
      defaultParams: { polished: true },
      controls: [],
      readouts: [
        { label: "Active Modes", expr: () => "Convection + Radiation" },
        { label: "Surface Treatment", expr: () => "Polished Shiny Silver (Low Emissivity)" }
      ],
      explanation: "Heat transfers via convection and radiation; polishing the metal to a shiny finish minimizes radiative losses."
    }
  }
];