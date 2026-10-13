/**
 * Master Question Store: Batch 12 (Q161 to Q175)
 * Section 2.2: Thermal Properties and Temperature (Paper 3 Practical)
 */

const QUESTIONS_BATCH_12 = [
  {
    globalId: "Q161",
    examId: "Q01187",
    paperRef: "5054/31/M/J/22 Q1(c)(i)",
    pdfPage: 77,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Thermometer Volume Estimation Uncertainties",
    paperType: "practical",
    marks: 1,
    questionText: `In an experiment to estimate the volume of a thermometer using V = (π / 4) * l * w², explain why the volume calculation is only an estimate. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify non-cylindrical geometric features of a laboratory thermometer that make a simple cylinder volume formula an approximation.",
    givenInfo: [
      "Formula assumes a uniform cylinder: V = (π / 4) * l * w².",
      "Physical object: Laboratory liquid-in-glass thermometer."
    ],
    toFind: "One valid reason why the calculated volume is only an approximation.",
    physicsConcepts: `The equation V = (π / 4) * l * w² assumes a uniform cylinder of constant diameter w over its entire length l. In reality, a liquid-in-glass thermometer deviates from a cylinder:
1. The bulb at the base has a different shape and diameter than the stem.
2. The stem ends and bulb tip are rounded (hemispherical).
3. The top often features an expansion chamber, neck, or glass suspension ring.
4. The cross-sectional width fluctuates slightly along the glass tube.`,
    equations: `V_{\\text{actual}} = V_{\\text{stem}} + V_{\\text{bulb}} + V_{\\text{top}} \\neq \\frac{\\pi}{4} l w^2`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Geometric Approximations",
        body: "Observe that the formula V = (π / 4) * l * w² models the thermometer as an idealized flat-ended cylinder of constant width w."
      },
      {
        step: 2,
        title: "State Physical Deviations",
        body: "The bulb has a different diameter or shape from the stem / the ends are rounded / the thermometer is not a uniform cylinder (or has a suspension ring/expansion chamber at the top)."
      }
    ],
    finalAnswer: "The bulb has a different diameter / shape from the stem (or the ends are rounded / it is not a uniform cylinder / has a suspension ring at the top).",
    reasonablenessCheck: "Laboratory glass thermometers have spherical or cylindrical bulbs with different wall thicknesses, making a single-width formula an approximation.",
    commonMistakes: [
      "Blaming human reaction time or parallax error when the question specifically asks why the *geometric calculation* is an estimate.",
      "Stating the ruler was inaccurate."
    ],
    takeaway: "Geometric modeling formulas yield estimates when real apparatus has non-uniform sections, rounded ends, or irregular bulbs.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { lengthMm: 300, widthMm: 6.0 },
      controls: [
        { id: "widthMm", name: "Stem Width w", min: 4.0, max: 8.0, step: 0.5, default: 6.0, unit: "mm" }
      ],
      readouts: [
        { label: "Calculated Cylinder V", expr: (p) => (0.785 * 300 * p.widthMm * p.widthMm).toFixed(0) + " mm³" },
        { label: "Bulb Deviation", expr: () => "Non-uniform bulb shape" }
      ],
      explanation: "The calculation treats the entire instrument as a uniform cylinder, neglecting bulb shape variations and rounded ends."
    }
  },
  {
    globalId: "Q162",
    examId: "Q01188",
    paperRef: "5054/31/M/J/22 Q1(c)(ii)",
    pdfPage: 77,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Validity of Cylindrical Approximation",
    paperType: "practical",
    marks: 1,
    questionText: `Explain why the volume calculation V = (π / 4) * l * w² is close to the actual volume of the thermometer. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why the cylindrical model produces a close estimate despite minor non-uniformities.",
    givenInfo: [
      "Thermometer length l ≈ 300 mm, width w ≈ 6 mm.",
      "Most of the length consists of the glass stem."
    ],
    toFind: "Physical justification for why the cylindrical estimate is accurate.",
    physicsConcepts: `In a 300 mm laboratory thermometer, the stem accounts for over 90–95% of the total length. The stem has an approximately circular cross-section of nearly constant diameter w throughout. Because the irregular bulb and top tip occupy only a small fraction of the total volume, the cylindrical approximation is close to the true volume.`,
    equations: `\\frac{L_{\\text{stem}}}{L_{\\text{total}}} > 0.90 \\implies V_{\\text{stem}} \\approx V_{\\text{actual}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Analyze Relative Dimensions",
        body: "The glass stem makes up the vast majority of the length and volume of the thermometer."
      },
      {
        step: 2,
        title: "Relate Stem Shape to Formula",
        body: "The stem is approximately cylindrical with an almost uniform cross-sectional width along its length."
      }
    ],
    finalAnswer: "Most of the thermometer is the cylindrical stem of approximately constant width / diameter.",
    reasonablenessCheck: "A 28 cm uniform stem dominates the overall volume compared to a 1.5 cm bulb.",
    commonMistakes: [
      "Stating the ruler was very accurate (accuracy of the ruler does not validate the geometric model).",
      "Stating the liquid expands uniformly."
    ],
    takeaway: "An approximation formula is accurate when the dominant feature of the object closely matches the assumed geometry.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { stemPct: 92 },
      controls: [],
      readouts: [
        { label: "Stem Volume Proportion", expr: () => "92% of Total" },
        { label: "Model Closeness", expr: () => "Accurate within ~5%" }
      ],
      explanation: "Because the stem represents over 90% of the thermometer's mass and volume, the cylindrical model gives a close approximation."
    }
  },
  {
    globalId: "Q163",
    examId: "Q01189",
    paperRef: "5054/31/M/J/22 Q1(d)",
    pdfPage: 77,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Internal Liquid Volume Measurement Limitations",
    paperType: "practical",
    marks: 1,
    questionText: `The thermometer contains a liquid.
Suggest one reason why it is difficult to determine the volume of this liquid. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Identify practical experimental obstacles preventing direct measurement of the volume of the thermometric liquid inside a sealed thermometer.",
    givenInfo: [
      "Thermometer sealed with internal liquid (mercury or alcohol).",
      "Liquid is inside a bulb and fine capillary bore."
    ],
    toFind: "One valid reason why measuring the liquid volume is difficult.",
    physicsConcepts: `Practical measurement challenges:
1. Capillary bore diameter is microscopic (< 0.2 mm) and cannot be directly measured with an external ruler.
2. The liquid inside the bulb is enclosed by thick glass of unknown wall thickness.
3. The total volume of liquid is very small (< 0.1 cm³), making measurement without breaking the thermometer impractical.
4. Refraction through the curved glass distorts the apparent width of the liquid column.`,
    equations: `r_{\\text{bore}} \\approx 0.05 \\text{ mm} \\implies V_{\\text{liquid}} \\ll V_{\\text{glass}}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Internal Geometry Obstacles",
        body: "The internal bore has an extremely small diameter that cannot be measured with standard laboratory tools."
      },
      {
        step: 2,
        title: "Identify Enclosure Obstacles",
        body: "The glass walls of the bulb have an unknown thickness, so internal bulb volume cannot be determined from external measurements."
      }
    ],
    finalAnswer: "The diameter of the capillary bore is very small / unknown (or the volume of liquid is very small / wall thickness of glass bulb is unknown / glass distorts the image of the bore).",
    reasonablenessCheck: "A laboratory thermometer contains less than 0.05 mL of liquid inside thick glass, making direct non-destructive measurement impractical.",
    commonMistakes: [
      "Saying the liquid evaporates (the tube is hermetically sealed).",
      "Saying the liquid is too hot."
    ],
    takeaway: "Internal liquid volumes in sealed capillary glassware cannot be measured directly because the bore is microscopic and wall thickness is unknown.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { boreDiameterMm: 0.1 },
      controls: [],
      readouts: [
        { label: "Capillary Diameter", expr: () => "~0.1 mm (Microscopic)" },
        { label: "Liquid Volume", expr: () => "< 0.05 cm³" }
      ],
      explanation: "The capillary bore diameter is far too narrow to measure with a standard ruler, and the glass bulb's wall thickness is unknown."
    }
  },
  {
    globalId: "Q164",
    examId: "Q00591",
    paperRef: "5054/32/M/J/22 Q1",
    pdfPage: 78,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Thermometer Volume Estimation Suite (Variant)",
    paperType: "practical",
    marks: 5,
    questionText: `In this experiment you will estimate the volume of a thermometer.
You are provided with:
- a thermometer
- a ruler.

(a) Measure and record to the nearest millimetre the length l of the thermometer, and the width w of the thermometer at the 50 °C mark. [1]
(b) Calculate the volume V of the thermometer using the equation:
V = (π / 4) * l * w²
where π = 3.14. [1]
(c) The volume calculated in (b) is an estimate of the volume of the thermometer.
Explain why:
(i) the volume calculation is only an estimate [1]
(ii) the volume calculation is close to the actual volume of the thermometer. [1]
(d) The thermometer contains a liquid.
Suggest one reason why it is difficult to determine the volume of this liquid. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Carry out the full variant experimental procedure to measure dimensions, calculate estimated cylinder volume, and evaluate systematic structural assumptions.",
    givenInfo: [
      "Laboratory thermometer and metric ruler.",
      "Formula: V = (π / 4) * l * w², with π = 3.14."
    ],
    toFind: "Complete set of practical measurements, calculations, and critical evaluations for Paper 3 variant 32.",
    physicsConcepts: `Apparatus modeling and practical measurement:
- Length l: measured to nearest mm (typically 280–320 mm).
- Width w: measured to nearest mm (typically 5–8 mm).
- Volume calculation: V = 0.785 * l * w².
- Systematic errors: Non-uniform cross section at bulb and suspension loop; rounded ends.
- Validating assumptions: Predominance of uniform cylindrical stem.
- Microscopic capillary constraints.`,
    equations: `V = \\frac{\\pi}{4} l w^2`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Variant Suite",
        body: "This master entry coordinates subparts Q165 through Q169 for Paper 3 variant 32, following the experimental procedure on PDF page 79."
      }
    ],
    finalAnswer: "Detailed solutions for subparts (a) to (d) are provided in records Q165 through Q169 below.",
    reasonablenessCheck: "Calculated values across variants fall in the 7000–9500 mm³ (7–9.5 cm³) range.",
    commonMistakes: [
      "Confusing units between millimeters and centimeters.",
      "Misidentifying geometric errors as reading errors."
    ],
    takeaway: "Laboratory measurement tasks evaluate both practical execution precision and understanding of physical modeling assumptions.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { lengthMm: 305, widthMm: 6.5 },
      controls: [
        { id: "lengthMm", name: "Length l", min: 260, max: 330, step: 5, default: 305, unit: "mm" },
        { id: "widthMm", name: "Width w", min: 4.5, max: 7.5, step: 0.5, default: 6.5, unit: "mm" }
      ],
      readouts: [
        { label: "Calculated V", expr: (p) => (0.785 * p.lengthMm * p.widthMm * p.widthMm).toFixed(0) + " mm³" }
      ],
      explanation: "Adjust dimensions to see how variation in length and width affects the estimated volume."
    }
  },
  {
    globalId: "Q165",
    examId: "Q00592",
    paperRef: "5054/32/M/J/22 Q1(a)",
    pdfPage: 79,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Dimension Measurement (Variant 32)",
    paperType: "practical",
    marks: 1,
    questionText: `Measure and record to the nearest millimetre the length l of the thermometer, and the width w of the thermometer at the 50 °C mark.
l = .................... mm
w = .................... mm [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record the length and width of the thermometer to the nearest millimeter for variant 32.",
    givenInfo: [
      "Standard laboratory thermometer and 30 cm ruler."
    ],
    toFind: "Measured length l and width w in mm.",
    physicsConcepts: `Measurements must be recorded in millimeters to the nearest 1 mm.
Ruler should be aligned flush with the tip of the bulb, viewing perpendicularly to avoid parallax error.`,
    equations: `l \\in [270, 320] \\text{ mm}, \\quad w \\in [5, 8] \\text{ mm}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Length",
        body: "Measure total length from bulb base to top: typically l = 305 mm (acceptable: 270 mm to 320 mm)."
      },
      {
        step: 2,
        title: "Record Width",
        body: "Measure stem width at 50 °C mark: typically w = 6.0 mm (acceptable: 5 mm to 8 mm)."
      }
    ],
    finalAnswer: "l = 305 mm; w = 6 mm (acceptable ranges: l = 270–320 mm, w = 5–8 mm)",
    reasonablenessCheck: "Values reflect the physical dimensions of standard Cambridge Paper 3 laboratory thermometers.",
    commonMistakes: [
      "Writing measurements in centimeters without indicating units.",
      "Omitting the width at the specified 50 °C mark."
    ],
    takeaway: "Record laboratory measurements to the resolution of the instrument (1 mm for a standard ruler).",
    simulation: {
      type: "thermometer_design",
      defaultParams: { lengthMm: 305, widthMm: 6.0 },
      controls: [],
      readouts: [
        { label: "Measured Length", expr: () => "305 mm" },
        { label: "Measured Width", expr: () => "6.0 mm" }
      ],
      explanation: "Values recorded to the nearest millimeter."
    }
  },
  {
    globalId: "Q166",
    examId: "Q00593",
    paperRef: "5054/32/M/J/22 Q1(b)",
    pdfPage: 79,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Cylinder Volume Calculation (Variant 32)",
    paperType: "practical",
    marks: 1,
    questionText: `Calculate the volume V of the thermometer using the equation:
V = (π / 4) * l * w²
where π = 3.14.
V = .................... mm³ [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the volume of the thermometer using candidate values for length l and width w.",
    givenInfo: [
      "l = 305 mm, w = 6.0 mm (from Q165)",
      "π = 3.14",
      "Formula: V = (π / 4) * l * w²"
    ],
    toFind: "Calculated volume V in mm³.",
    physicsConcepts: `Cylinder volume calculation using diameter w:
V = (π / 4) * l * w² = 0.785 * l * w².`,
    equations: `V = \\frac{3.14}{4} \\times 305 \\times (6.0)^2 = 0.785 \\times 305 \\times 36 = 8619 \\text{ mm}^3`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Square the Width",
        body: "w² = (6.0 mm)² = 36 mm²."
      },
      {
        step: 2,
        title: "Compute Volume",
        body: "V = (3.14 / 4) * 305 mm * 36 mm² = 0.785 * 10 980 = 8619.3 mm³."
      },
      {
        step: 3,
        title: "Apply Significant Figures",
        body: "Round to 2 or 3 significant figures: V ≈ 8600 mm³ (or 8620 mm³)."
      }
    ],
    finalAnswer: "8600 mm³ (or 8619 mm³, consistent with candidate measurements)",
    reasonablenessCheck: "8600 mm³ = 8.6 cm³, which matches the water displacement of a laboratory thermometer.",
    commonMistakes: [
      "Forgetting to square the width.",
      "Dividing by 2 instead of 4."
    ],
    takeaway: "Substitute measured values carefully, ensuring width is squared and units remain consistent.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { lengthMm: 305, widthMm: 6.0 },
      controls: [],
      readouts: [
        { label: "Formula Used", expr: () => "V = (π/4) * l * w²" },
        { label: "Calculated Volume", expr: () => "8619 mm³ (8.6 cm³)" }
      ],
      explanation: "Evaluating (3.14/4) * 305 * 6² gives 8619 mm³."
    }
  },
  {
    globalId: "Q167",
    examId: "Q00594",
    paperRef: "5054/32/M/J/22 Q1(c)(i)",
    pdfPage: 79,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Reasons Why Volume is an Estimate (Variant 32)",
    paperType: "practical",
    marks: 1,
    questionText: `The volume calculated in (b) is an estimate of the volume of the thermometer.
Explain why the volume calculation is only an estimate. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State a physical feature of the thermometer that causes the cylindrical calculation to be an estimate.",
    givenInfo: [
      "Formula assumes an ideal cylinder.",
      "Laboratory thermometer with bulb, stem, and rounded ends."
    ],
    toFind: "Explanation for why the volume is an estimate.",
    physicsConcepts: `The thermometer deviates from a uniform cylinder:
1. The bulb at the bottom differs in diameter and shape from the stem.
2. The ends are rounded.
3. The top may have an expansion chamber or suspension eyelet.
4. The stem cross-section may not be circular or strictly uniform.`,
    equations: `\\text{Real geometry} \\neq \\text{Ideal flat cylinder}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Shape Deviations",
        body: "The bulb has a different diameter / shape from the stem, or the ends are rounded, so the thermometer is not a uniform cylinder."
      }
    ],
    finalAnswer: "The bulb has a different diameter / shape from the stem (or the ends are rounded / it is not a uniform cylinder / has a suspension ring at the top).",
    reasonablenessCheck: "A real thermometer consists of several distinct sections rather than a single cylinder.",
    commonMistakes: [
      "Citing reading or instrument errors instead of geometric modeling limitations.",
      "Saying glass expands."
    ],
    takeaway: "Modeling approximations introduce systematic differences when the real object has non-uniform sections.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Geometric Reason", expr: () => "Bulb differs in shape/diameter from stem" },
        { label: "End Features", expr: () => "Rounded tips & suspension ring" }
      ],
      explanation: "Bulb shape variations and rounded ends mean the thermometer deviates from a pure cylinder."
    }
  },
  {
    globalId: "Q168",
    examId: "Q00595",
    paperRef: "5054/32/M/J/22 Q1(c)(ii)",
    pdfPage: 79,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Why Volume Estimate is Close (Variant 32)",
    paperType: "practical",
    marks: 1,
    questionText: `Explain why the volume calculation is close to the actual volume of the thermometer. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Explain why the cylindrical calculation is a close approximation of the actual volume.",
    givenInfo: [
      "Laboratory thermometer geometry."
    ],
    toFind: "Justification for the accuracy of the cylindrical model.",
    physicsConcepts: `The cylindrical stem constitutes the vast majority of the instrument's total length and volume (>90%), and its cross-section is approximately uniform. Consequently, the volume of the stem closely matches the total volume of the thermometer.`,
    equations: `V_{\\text{actual}} \\approx V_{\\text{stem}} \\approx \\frac{\\pi}{4} l w^2`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Dominant Component",
        body: "Most of the length and volume of the thermometer is the long stem, which is approximately cylindrical with nearly constant width."
      }
    ],
    finalAnswer: "Most of the thermometer is the cylindrical stem of approximately constant width / diameter.",
    reasonablenessCheck: "Because the stem makes up over 90% of the volume, approximations in the bulb shape have a minor overall effect.",
    commonMistakes: [
      "Stating that the ruler was used carefully.",
      "Stating that mercury has constant density."
    ],
    takeaway: "The cylindrical formula gives a close estimate because the uniform stem accounts for most of the instrument's volume.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Dominant Component", expr: () => "Stem (>90% of total volume)" },
        { label: "Stem Geometry", expr: () => "Approximately uniform cylinder" }
      ],
      explanation: "The uniform stem dominates the total volume, making the cylinder formula a close approximation."
    }
  },
  {
    globalId: "Q169",
    examId: "Q00596",
    paperRef: "5054/32/M/J/22 Q1(d)",
    pdfPage: 79,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Difficulties in Measuring Liquid Volume (Variant 32)",
    paperType: "practical",
    marks: 1,
    questionText: `The thermometer contains a liquid.
Suggest one reason why it is difficult to determine the volume of this liquid. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "State why the volume of the thermometric liquid inside the thermometer cannot be easily determined.",
    givenInfo: [
      "Sealed glass thermometer containing thermometric liquid."
    ],
    toFind: "One practical reason for measurement difficulty.",
    physicsConcepts: `1. The capillary bore is microscopic (< 0.1 mm in diameter) and cannot be directly measured with a school ruler.
2. The thickness of the glass bulb wall is unknown, so internal bulb volume cannot be calculated from external dimensions.
3. The total volume of liquid is very small (< 0.05 cm³).`,
    equations: `r_{\\text{internal}} \\text{ is unknown and inaccessible}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Practical Measurement Barriers",
        body: "The capillary tube is extremely narrow / its diameter cannot be measured, or the internal volume of the bulb cannot be found because the glass wall thickness is unknown."
      }
    ],
    finalAnswer: "The capillary bore diameter is very small / unknown (or the glass wall thickness of the bulb is unknown / the volume of liquid is very small).",
    reasonablenessCheck: "External measurements cannot determine the internal dimensions of thick-walled capillary glass.",
    commonMistakes: [
      "Saying the liquid is dangerous (mercury) when the question asks about measurement difficulty.",
      "Saying the liquid moves around too fast."
    ],
    takeaway: "The liquid's volume cannot be determined directly because the capillary bore is microscopic and the bulb's internal volume is inaccessible.",
    simulation: {
      type: "thermometer_design",
      defaultParams: {},
      controls: [],
      readouts: [
        { label: "Measurement Barrier", expr: () => "Capillary bore is microscopic (<0.1 mm)" },
        { label: "Wall Thickness", expr: () => "Unknown bulb glass thickness" }
      ],
      explanation: "Microscopic capillary dimensions and unknown wall thickness prevent direct liquid volume measurement."
    }
  },
  {
    globalId: "Q170",
    examId: "Q00697",
    paperRef: "5054/31/O/N/22 Q2",
    pdfPage: 80,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Boiling Tube Cooling Investigation Master Suite",
    paperType: "practical",
    marks: 5,
    questionText: `In this experiment you will investigate the temperature of water.
You are provided with:
- two boiling tubes in a rack
- two thermometers
- a stand, weight, boss and clamp
- a beaker of hot water
- a stop-watch.

(a) Set up the apparatus as shown in Fig. 2.1:
Thermometer A is clamped with its bulb about 1 cm below the water-level mark.
Thermometer B rests gently on the bottom of boiling tube B.
Measure and record initial temperatures T_A and T_B. [2]

(b) Carefully pour hot water into both boiling tubes up to the mark.
Record maximum temperatures T_A(MAX) and T_B(MAX).
Start the stop-watch and wait for 4 minutes.
Record temperatures after 4 minutes and state which thermometer showed the smaller temperature decrease. [1]

(c) Suggest two reasons why one thermometer shows a smaller temperature decrease after 4 minutes. [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Carry out the boiling tube cooling investigation comparing temperature drops at the surface versus the bottom over 4 minutes, and explain the difference physically.",
    givenInfo: [
      "Thermometer A: bulb 1 cm below water surface.",
      "Thermometer B: bulb resting at the bottom of the tube.",
      "Hot water poured up to the mark.",
      "Cooling observed for 4 minutes."
    ],
    toFind: "Initial and 4-minute temperature readings, identification of smaller drop, and two physical explanations.",
    physicsConcepts: `Thermal behavior in a cooling column of hot water:
1. Top layer (Thermometer A): Water evaporates directly from the open surface, and thermal radiation and convection escape into the room air above.
2. Bottom layer (Thermometer B): Cooler, denser water from the surface sinks to the bottom by convection, while the glass base rests in a test-tube rack.
3. Differences in temperature drop arise from convection currents circulating cooler water downward, surface evaporation losses at the top, and differing thermal contact with the rack.`,
    equations: `\\Delta T_A = T_{A(\\text{MAX})} - T_{A(4\\text{ min})}; \\quad \\Delta T_B = T_{B(\\text{MAX})} - T_{B(4\\text{ min})}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Integrate Practical Suite",
        body: "This master entry coordinates subparts Q171 through Q173 for the boiling tube cooling experiment on PDF pages 80–81."
      }
    ],
    finalAnswer: "Detailed solutions for subparts (a), (b), and (c) are provided in records Q171, Q172, and Q173 below.",
    reasonablenessCheck: "Hot water in open test tubes typically cools by 15–25 °C over 4 minutes, with differences between surface and base driven by evaporation and convection.",
    commonMistakes: [
      "Swapping the positions of thermometer A and thermometer B.",
      "Failing to wait for the thermometer reading to reach its initial maximum before starting the stopwatch."
    ],
    takeaway: "Water cooling in tall containers is non-uniform due to surface evaporation, density-driven convection currents, and contact with the rack.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { tempTop: 78, tempBottom: 72 },
      controls: [],
      readouts: [
        { label: "Top Temp (Thermometer A)", expr: () => "78 °C -> 58 °C (ΔT = 20 °C)" },
        { label: "Bottom Temp (Thermometer B)", expr: () => "76 °C -> 59 °C (ΔT = 17 °C)" }
      ],
      explanation: "Surface evaporation and convection currents produce different cooling rates at the top and bottom of the boiling tube."
    }
  },
  {
    globalId: "Q171",
    examId: "Q00698",
    paperRef: "5054/31/O/N/22 Q2(a)",
    pdfPage: 81,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Initial Ambient Temperature Readings",
    paperType: "practical",
    marks: 2,
    questionText: `Thermometer A is held by the clamp with its bulb about 1 cm below the water-level mark.
Thermometer B rests gently on the bottom of boiling tube B.
Measure and record the temperature:
T_A on thermometer A: ....................
T_B on thermometer B: .................... [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Read and record room temperatures on both thermometers before pouring hot water.",
    givenInfo: [
      "Both thermometers are resting in empty boiling tubes at ambient room temperature."
    ],
    toFind: "Initial room temperature readings T_A and T_B with units.",
    physicsConcepts: `Before hot water is added, both thermometers measure ambient room temperature. Readings should be identical (or within 0.5 °C of each other) and recorded with the unit °C to the nearest 0.5 °C or 1 °C.`,
    equations: `T_A \\approx T_B \\approx T_{\\text{room}} \\in [18, 25]^\\circ\\text{C}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Read Thermometers",
        body: "Check scales with line of sight perpendicular to the meniscus to avoid parallax error."
      },
      {
        step: 2,
        title: "Record Typical Laboratory Readings",
        body: "T_A = 21.0 °C (or candidate room temp, typically 18–24 °C).\nT_B = 21.0 °C."
      }
    ],
    finalAnswer: "T_A = 21.0 °C; T_B = 21.0 °C (typical room temperature values with correct unit)",
    reasonablenessCheck: "Both thermometers are in the same room, so their initial readings should agree within instrument resolution.",
    commonMistakes: [
      "Omitting the unit (°C).",
      "Recording wildly different values for two thermometers in the same room."
    ],
    takeaway: "Record baseline room temperatures on both thermometers with units before beginning the heating phase.",
    simulation: {
      type: "thermometer_design",
      defaultParams: { tempC: 21 },
      controls: [],
      readouts: [
        { label: "Thermometer A (Room)", expr: () => "21.0 °C" },
        { label: "Thermometer B (Room)", expr: () => "21.0 °C" }
      ],
      explanation: "Both thermometers read ambient room temperature (21.0 °C) before hot water is added."
    }
  },
  {
    globalId: "Q172",
    examId: "Q00699",
    paperRef: "5054/31/O/N/22 Q2(b)",
    pdfPage: 81,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Hot Water Maximum and 4-Minute Readings",
    paperType: "practical",
    marks: 1,
    questionText: `Pour hot water into both boiling tubes up to the mark.
Observe the temperature on the thermometers.
Measure and record the maximum temperature reached:
T_A(MAX) on thermometer A: ....................
T_B(MAX) on thermometer B: ....................
Start the stop-watch and wait for 4 minutes.
Read and record the temperature on the thermometers after 4 minutes:
temperature on thermometer A after 4 minutes = ....................
temperature on thermometer B after 4 minutes = ....................
State which thermometer has shown the smaller temperature decrease from the maximum temperature. [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record maximum temperatures, 4-minute cooled temperatures, and identify which thermometer showed the smaller temperature drop.",
    givenInfo: [
      "Hot water added to both tubes.",
      "Thermometer A near top surface; Thermometer B resting at bottom.",
      "Stopwatch timed for 4 minutes (240 s)."
    ],
    toFind: "Maximum and final temperatures for A and B, and identification of smaller temperature decrease.",
    physicsConcepts: `When hot water is poured, thermometers take 15–30 seconds to reach a maximum reading.
During cooling:
- Tube A (top bulb): Evaporative cooling at the open surface cools the top layer rapidly.
- Tube B (bottom bulb): While cooler dense water sinks, the base rests on glass in the wooden/plastic rack, which can slow heat loss depending on rack insulation.
Calculate temperature decrease: ΔT = T_MAX - T_4min.`,
    equations: `\\Delta T_A = T_{A(\\text{MAX})} - T_{A(4)}; \\quad \\Delta T_B = T_{B(\\text{MAX})} - T_{B(4)}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Record Typical Laboratory Maximums",
        body: "T_A(MAX) = 82.0 °C; T_B(MAX) = 81.0 °C."
      },
      {
        step: 2,
        title: "Record Typical 4-Minute Readings",
        body: "After 4 minutes: T_A(4 min) = 59.0 °C; T_B(4 min) = 61.0 °C."
      },
      {
        step: 3,
        title: "Calculate Temperature Decreases",
        body: "ΔT_A = 82.0 - 59.0 = 23.0 °C.\nΔT_B = 81.0 - 61.0 = 20.0 °C."
      },
      {
        step: 4,
        title: "Identify Smaller Decrease",
        body: "Thermometer B shows the smaller temperature decrease (20.0 °C < 23.0 °C)."
      }
    ],
    finalAnswer: "T_A(MAX) ≈ 82.0 °C, T_B(MAX) ≈ 81.0 °C; T_A(4 min) ≈ 59.0 °C, T_B(4 min) ≈ 61.0 °C; thermometer with smaller temperature decrease: Thermometer B (or consistent with candidate results).",
    reasonablenessCheck: "Temperature drops of ~20 °C over 4 minutes in uninsulated boiling tubes match expected laboratory values.",
    commonMistakes: [
      "Starting the stopwatch before thermometers reach their maximum temperature.",
      "Subtracting in the wrong order."
    ],
    takeaway: "Allow thermometers to reach their peak reading before starting the timer, then calculate ΔT = T_MAX - T_final.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { dropA: 23, dropB: 20 },
      controls: [],
      readouts: [
        { label: "Drop in A (Surface)", expr: () => "23.0 °C" },
        { label: "Drop in B (Bottom)", expr: () => "20.0 °C (Smaller Drop)" }
      ],
      explanation: "Thermometer A experiences larger heat loss from surface evaporation; Thermometer B shows the smaller temperature drop."
    }
  },
  {
    globalId: "Q173",
    examId: "Q00700",
    paperRef: "5054/31/O/N/22 Q2(c)",
    pdfPage: 81,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Physical Reasons for Cooling Disparity",
    paperType: "practical",
    marks: 2,
    questionText: `Suggest two reasons why one thermometer shows a smaller temperature decrease after 4 minutes.
1. ........................................................................................................................
2. ........................................................................................................................ [2]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Provide two physical explanations for why the temperature decrease differed between the top and bottom of the boiling tube.",
    givenInfo: [
      "Thermometer A near water surface.",
      "Thermometer B at the bottom of the tube in a rack."
    ],
    toFind: "Two physical reasons explaining the difference in cooling rates.",
    physicsConcepts: `Physical mechanisms producing the temperature difference:
1. Surface Evaporation: Water at the top evaporates directly into the room, absorbing latent heat of vaporisation and cooling the surface layer faster.
2. Heat Loss Location: The open top allows convection currents of warm air to escape, whereas the bottom is enclosed.
3. Convection in Water: Warmer, less dense water rises to the top, while cooler water sinks, continuously redistributing heat.
4. Rack Insulation: The tube rack insulates the bottom of the tube / the glass base has significant heat capacity.`,
    equations: `\\text{Top: Surface Evaporation + Open Air Convection}; \\quad \\text{Bottom: Trapped Fluid + Rack Insulation}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Identify Surface Mechanism",
        body: "Evaporation occurs from the open surface of the water, which removes thermal energy and increases the cooling rate near the top (thermometer A)."
      },
      {
        step: 2,
        title: "Identify Convection / Enclosure Mechanism",
        body: "Convection currents circulate warm water upward, or the bottom of the tube is insulated by the rack / surrounded by glass with high heat capacity, reducing heat loss from the base."
      }
    ],
    finalAnswer: "1. Evaporation occurs from the surface of the water (cooling the top faster);\n2. Convection currents circulate in the water (or the bottom of the boiling tube is insulated by the test-tube rack).",
    reasonablenessCheck: "Surface evaporation carries away large amounts of latent heat (~2.3 MJ/kg), making the surface layer cool faster unless counteracted by strong convection.",
    commonMistakes: [
      "Stating that the thermometers are broken.",
      "Giving vague answers like 'heat rises' without explaining convection or evaporation."
    ],
    takeaway: "Cooling differences in tall liquid columns are driven by surface evaporation, convection currents, and contact with the supporting rack.",
    simulation: {
      type: "evaporation",
      defaultParams: { surfaceLoss: true },
      controls: [],
      readouts: [
        { label: "Surface Effect", expr: () => "Rapid Evaporation Loss" },
        { label: "Base Effect", expr: () => "Rack Insulation" }
      ],
      explanation: "Surface evaporation cools the top layer, while the rack insulates the bottom of the tube."
    }
  },
  {
    globalId: "Q174",
    examId: "Q00005",
    paperRef: "5054/32/O/N/22 Q2(a)",
    pdfPage: 83,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Beaker Cooling Time Measurement",
    paperType: "practical",
    marks: 1,
    questionText: `You are going to measure the time taken for the temperature of the water to decrease by 10 °C.
Pour hot water into the beaker underneath the thermometer up to the 100 cm³ mark.
Observe the temperature rise to a maximum on the thermometer.
Start the stop-watch when the temperature just begins to fall.
Stop the stop-watch when the temperature is 10 °C lower than at the start maximum.
Record the reading t on the stop-watch in seconds.
t = .................... s [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Record the time in seconds for 100 cm³ of hot water in an uninsulated beaker to cool by 10 °C.",
    givenInfo: [
      "Volume of hot water = 100 cm³.",
      "Timer started at maximum temperature.",
      "Timer stopped after a 10 °C drop."
    ],
    toFind: "Time t in seconds.",
    physicsConcepts: `Timing procedure:
1. Wait for thermal equilibrium between the thermometer bulb and hot water so the reading reaches its true maximum.
2. Start timing the moment the mercury thread begins to drop.
3. Stop timing when ΔT = 10 °C.
For 100 cm³ of water in a 250 cm³ glass beaker, cooling through 10 °C typically takes between 150 s and 300 s.`,
    equations: `\\Delta T = 10^\\circ\\text{C}; \\quad t \\in [150, 300] \\text{ s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Observe Thermal Equilibrium",
        body: "Watch the thermometer rise to its peak (e.g., 80 °C)."
      },
      {
        step: 2,
        title: "Time the 10 °C Drop",
        body: "Start stopwatch as cooling begins. Stop when temperature reaches 70 °C (a 10 °C decrease). Typical time t = 210 s (acceptable range: 150 s to 300 s)."
      }
    ],
    finalAnswer: "t = 210 s (typical value recorded in seconds within acceptable laboratory range of 150–300 s)",
    reasonablenessCheck: "210 seconds (~3.5 minutes) is a realistic cooling time for 100 mL of hot water losing 10 °C in an open glass beaker.",
    commonMistakes: [
      "Recording the time in minutes instead of seconds (e.g. writing 3.5 instead of 210).",
      "Starting the stopwatch before the thermometer reaches its maximum."
    ],
    takeaway: "Always record stopwatch readings in seconds and verify the thermometer has reached its maximum before timing.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { timeSec: 210 },
      controls: [
        { id: "timeSec", name: "Cooling Time t", min: 120, max: 360, step: 15, default: 210, unit: "s" }
      ],
      readouts: [
        { label: "Temperature Drop", expr: () => "10.0 °C" },
        { label: "Cooling Time t", expr: (p) => p.timeSec + " s" }
      ],
      explanation: "Water cools through 10 °C over 210 seconds in an open glass beaker."
    }
  },
  {
    globalId: "Q175",
    examId: "Q00006",
    paperRef: "5054/32/O/N/22 Q2(b)",
    pdfPage: 83,
    topic: "2.2 Thermal properties and temperature",
    subtopic: "Paper 3 Practical: Rate of Temperature Change Calculation",
    paperType: "practical",
    marks: 1,
    questionText: `Calculate the rate of temperature change R using the equation:
R = 10 / t
R = .................... °C/s [1]`,
    options: [],
    correctOption: null,
    whatIsAsking: "Calculate the rate of temperature change R in °C/s using R = 10 / t.",
    givenInfo: [
      "Temperature change = 10 °C",
      "Time taken t = 210 s (from Q174)",
      "Formula: R = 10 / t"
    ],
    toFind: "Rate of temperature change R in °C/s.",
    physicsConcepts: `The average rate of cooling is the temperature drop divided by the time taken:
R = ΔT / t = 10 / t.
With t in seconds, the unit is °C/s.`,
    equations: `R = \\frac{10}{t} = \\frac{10}{210} = 0.0476^\\circ\\text{C/s}`,
    stepByStepSolution: [
      {
        step: 1,
        title: "Substitute Time into Equation",
        body: "R = 10 / t = 10 / 210 s."
      },
      {
        step: 2,
        title: "Compute Numerical Value",
        body: "R = 0.0476 °C/s."
      },
      {
        step: 3,
        title: "Round Appropriately",
        body: "R ≈ 0.048 °C/s (or to 2 significant figures matching candidate time t)."
      }
    ],
    finalAnswer: "0.048 °C/s (or 0.0476 °C/s, consistent with candidate value of t)",
    reasonablenessCheck: "0.048 °C/s corresponds to roughly 2.9 °C per minute, consistent with cooling rates in open laboratory glassware.",
    commonMistakes: [
      "Inverting the calculation to t / 10.",
      "Using time in minutes, which changes the unit to °C/min without converting."
    ],
    takeaway: "R = 10 / t calculates the average rate of temperature change in °C/s.",
    simulation: {
      type: "cooling_curve_plateau",
      defaultParams: { timeSec: 210 },
      controls: [],
      readouts: [
        { label: "Formula", expr: () => "R = 10 / t" },
        { label: "Calculated Rate R", expr: () => "0.048 °C/s" }
      ],
      explanation: "Dividing a 10 °C decrease by 210 seconds gives a cooling rate of 0.048 °C/s."
    }
  }
];