/* =====================================================
   PHYSIQUEST
   Complete JavaScript*/
/* 1. TOPIC DATA AND QUIZ QUESTIONS */

const TOPICS = {
    measurements: {
        title: "Measurements",
        notes: [
            {
                heading: "SI Units",
                text: "SI units are internationally agreed standard units. Examples include metres (m) for length, kilograms (kg) for mass, and seconds (s) for time."
            },
            {
                heading: "Scientific Notation",
                text: "Scientific notation writes a number as a value between 1 and 10 multiplied by a power of 10."
            },
            {
                heading: "Accuracy and Precision",
                text: "Accuracy describes closeness to an accepted value. Precision describes how close repeated measurements are to one another."
            },
            {
                heading: "Sizes in the Universe",
                text: "Scientific notation and suitable units help describe objects ranging from extremely small particles to stars and galaxies."
            },
            {
                heading: "Metric Prefixes",
                text: "Metric prefixes show multiples or fractions of a unit. Milli- means one thousandth (10⁻³), centi- means one hundredth (10⁻²), and kilo- means one thousand (10³)."
            },
            {
                heading: "Micrometer Screw Gauge",
                text: "A micrometer screw gauge measures very small thicknesses or diameters. Read the sleeve scale and thimble scale, then add the readings. Check for zero error where appropriate."
            },
            {
                heading: "Scalars and Vectors",
                text: "A scalar has magnitude only, such as distance, speed and mass. A vector has magnitude and direction, such as displacement, velocity and force."
            },
            {
                heading: "Repeated Measurements",
                text: "Repeat measurements to identify variation and improve reliability. Calculate the mean of suitable results and investigate any unusual reading rather than automatically including it."
            }
        ],
        questions: [
            {
                question: "Which is the SI unit of length?",
                options: ["Kilogram", "Metre", "Second", "Newton"],
                answer: 1,
                steps: [
                    "Identify the quantity being measured: length.",
                    "Recall that the SI base unit of length is the metre.",
                    "Choose Metre."
                ],
                keyIdea: "Length is measured in metres (m). Kilograms measure mass, seconds measure time, and newtons measure force."
            },
            {
                question: "Write 3,000 in scientific notation.",
                options: ["3 × 10²", "3 × 10³", "30 × 10³", "0.3 × 10³"],
                answer: 1,
                steps: [
                    "Move the decimal point in 3,000 until the number becomes 3.",
                    "The decimal point moves three places to the left.",
                    "Therefore, 3,000 = 3 × 10³."
                ],
                keyIdea: "The power of 10 shows how many places the decimal point moves."
            },
            {
                question: "Repeated measurements are almost identical. What does this suggest?",
                options: ["High precision", "High speed", "High mass", "High acceleration"],
                answer: 0,
                steps: [
                    "Look at the repeated measurements.",
                    "The results are very close to one another.",
                    "This indicates high precision."
                ],
                keyIdea: "Precision concerns consistency between repeated measurements."
            },
            {
                question: "What is the SI unit of mass?",
                options: ["Newton", "Kilogram", "Metre", "Joule"],
                answer: 1,
                steps: [
                    "Identify the quantity: mass.",
                    "Recall the SI base unit for mass.",
                    "The answer is kilogram."
                ],
                keyIdea: "Mass is measured in kilograms (kg)."
            },
            {
                question: "Which instrument is best for measuring the diameter of a thin wire?",
                options: ["Metre ruler", "Measuring cylinder", "Micrometer screw gauge", "Stopwatch"],
                answer: 2,
                steps: [
                    "A thin wire has a very small diameter.",
                    "A precise instrument is needed to measure it.",
                    "A micrometer screw gauge is designed for small diameters and thicknesses."
                ],
                keyIdea: "A micrometer screw gauge is useful for measuring very small dimensions."
            },
            {
                question: "How many metres are in 2.5 kilometres?",
                options: ["25 m", "250 m", "2,500 m", "25,000 m"],
                answer: 2,
                steps: [
                    "Remember that 1 kilometre = 1,000 metres.",
                    "Multiply 2.5 by 1,000.",
                    "The result is 2,500 m."
                ],
                keyIdea: "To convert kilometres to metres, multiply by 1,000."
            },
            {
                question: "Write 0.004 in scientific notation.",
                options: ["4 × 10⁻³", "4 × 10³", "4 × 10⁻²", "0.4 × 10⁻³"],
                answer: 0,
                steps: [
                    "Move the decimal point three places to the right to get 4.",
                    "Moving it to the right gives a negative power of 10.",
                    "Therefore, 0.004 = 4 × 10⁻³."
                ],
                keyIdea: "Numbers smaller than 1 have negative powers of 10 when written in standard scientific notation."
            },
            {
                question: "Which quantity is measured in seconds?",
                options: ["Length", "Time", "Mass", "Force"],
                answer: 1,
                steps: [
                    "Identify the quantity associated with seconds.",
                    "Seconds measure the duration of an event.",
                    "Choose Time."
                ],
                keyIdea: "The SI base unit of time is the second (s)."
            },
            {
                question: "What does accuracy describe?",
                options: [
                    "Closeness to an accepted value",
                    "Consistency between measurements",
                    "The mass of an object",
                    "The number of measurements"
                ],
                answer: 0,
                steps: [
                    "Accuracy compares a measured result with an accepted value.",
                    "A result closer to the accepted value is more accurate.",
                    "Choose the option about closeness to an accepted value."
                ],
                keyIdea: "Accuracy and precision are different: accuracy concerns the accepted value; precision concerns consistency."
            },
            {
                question: "What does the prefix milli- mean?",
                options: ["One thousand", "One hundred", "One thousandth", "One million"],
                answer: 2,
                steps: [
                    "Recall the meaning of the metric prefix milli-.",
                    "Milli- represents 0.001.",
                    "This is one thousandth, or 10⁻³."
                ],
                keyIdea: "Milli- = 10⁻³."
            },
            {
                question: "Express 5,600,000 in scientific notation.",
                options: ["5.6 × 10⁶", "56 × 10⁶", "5.6 × 10⁵", "0.56 × 10⁶"],
                answer: 0,
                steps: [
                    "Move the decimal point until the first number is between 1 and 10.",
                    "The number becomes 5.6.",
                    "The decimal point moved six places, giving 5.6 × 10⁶."
                ],
                keyIdea: "Scientific notation uses a coefficient of at least 1 but less than 10."
            },
            {
                question: "Which quantity is a vector?",
                options: ["Mass", "Distance", "Speed", "Displacement"],
                answer: 3,
                steps: [
                    "A vector has magnitude and direction.",
                    "Displacement describes a change in position in a specified direction.",
                    "Choose Displacement."
                ],
                keyIdea: "Displacement is a vector; distance is a scalar."
            },
            {
                question: "Why are measurements repeated?",
                options: [
                    "To guarantee identical results",
                    "To identify variation and improve reliability",
                    "To change the accepted value",
                    "To avoid recording results"
                ],
                answer: 1,
                steps: [
                    "A single measurement may be affected by random variation.",
                    "Repeating measurements lets you compare results.",
                    "A mean can help give a more reliable estimate."
                ],
                keyIdea: "Repeated measurements help identify unusual results and estimate a mean."
            },
            {
                question: "Which is the correct SI unit for temperature?",
                options: ["Celsius only", "Kelvin", "Joule", "Watt"],
                answer: 1,
                steps: [
                    "Identify the physical quantity: temperature.",
                    "The SI base unit for thermodynamic temperature is the kelvin.",
                    "Choose Kelvin."
                ],
                keyIdea: "The SI base unit of thermodynamic temperature is the kelvin (K)."
            },
            {
                question: "A measurement is 10.2 cm, while the accepted value is 10.0 cm. What is the absolute difference?",
                options: ["0.02 cm", "0.2 cm", "1.2 cm", "20.2 cm"],
                answer: 1,
                steps: [
                    "Subtract the accepted value from the measured value.",
                    "Calculate 10.2 − 10.0.",
                    "The absolute difference is 0.2 cm."
                ],
                keyIdea: "Absolute difference is the magnitude of the difference between two values."
            }
        ]
    },

    movement: {
        title: "Movement and Movers",
        notes: [
            {
                heading: "Distance and Displacement",
                text: "Distance is the total path travelled. Displacement is the change in position from the starting point to the finishing point, including direction."
            },
            {
                heading: "Speed",
                text: "Average speed = total distance ÷ total time."
            },
            {
                heading: "Velocity",
                text: "Velocity is speed in a specified direction."
            },
            {
                heading: "Acceleration",
                text: "Acceleration = change in velocity ÷ time taken. It describes how quickly velocity changes."
            },
            {
                heading: "Friction",
                text: "Friction is a force that opposes relative motion, or attempted motion, between surfaces in contact. It can slow moving objects and produce heat."
            },
            {
                heading: "Weight",
                text: "Weight is the gravitational force acting on an object. Calculate it using W = mg, where W is weight in newtons, m is mass in kilograms and g is gravitational field strength in N/kg."
            },
            {
                heading: "Resultant Force",
                text: "The resultant force is the overall force after all forces are combined. Forces in the same direction are added; opposite forces are subtracted. The resultant force determines an object's acceleration."
            },
            {
                heading: "Newton's Third Law",
                text: "When two objects interact, they exert forces on each other that are equal in magnitude and opposite in direction. These forces act on different objects."
            }
        ],
        questions: [
            {
                question: "A runner travels 100 m in 20 s. What is the average speed?",
                options: ["2 m/s", "5 m/s", "20 m/s", "2,000 m/s"],
                answer: 1,
                steps: [
                    "Use speed = distance ÷ time.",
                    "Substitute: 100 ÷ 20.",
                    "The average speed is 5 m/s."
                ],
                keyIdea: "Average speed = total distance ÷ total time."
            },
            {
                question: "Which quantity includes direction?",
                options: ["Distance", "Speed", "Mass", "Velocity"],
                answer: 3,
                steps: [
                    "A quantity with magnitude and direction is a vector.",
                    "Velocity describes speed in a particular direction.",
                    "Choose Velocity."
                ],
                keyIdea: "Velocity is a vector quantity."
            },
            {
                question: "Velocity increases from 4 m/s to 16 m/s in 3 s. What is the acceleration?",
                options: ["4 m/s²", "6 m/s²", "12 m/s²", "20 m/s²"],
                answer: 0,
                steps: [
                    "Use acceleration = (final velocity − initial velocity) ÷ time.",
                    "Calculate the change: 16 − 4 = 12 m/s.",
                    "Divide by 3 s: 12 ÷ 3 = 4 m/s²."
                ],
                keyIdea: "Acceleration = change in velocity ÷ time."
            },
            {
                question: "A cyclist travels 60 m in 12 s. What is the average speed?",
                options: ["5 m/s", "12 m/s", "48 m/s", "720 m/s"],
                answer: 0,
                steps: [
                    "Use speed = distance ÷ time.",
                    "Substitute 60 m and 12 s.",
                    "60 ÷ 12 = 5 m/s."
                ],
                keyIdea: "Always use consistent units when calculating speed."
            },
            {
                question: "What is the SI unit of acceleration?",
                options: ["m/s", "m/s²", "kg/m", "N/s"],
                answer: 1,
                steps: [
                    "Acceleration is change in velocity divided by time.",
                    "Velocity is measured in m/s.",
                    "Dividing by seconds gives m/s²."
                ],
                keyIdea: "Acceleration is measured in metres per second squared (m/s²)."
            },
            {
                question: "An object travels 20 m east and then 20 m west to its starting point. What is its displacement?",
                options: ["40 m east", "40 m west", "20 m", "0 m"],
                answer: 3,
                steps: [
                    "Displacement compares the starting and finishing positions.",
                    "The object finishes at the point where it started.",
                    "Its displacement is zero."
                ],
                keyIdea: "Displacement is zero if the final position equals the initial position."
            },
            {
                question: "A car increases its speed from 10 m/s to 18 m/s in 4 s. What is its acceleration?",
                options: ["2 m/s²", "4 m/s²", "7 m/s²", "8 m/s²"],
                answer: 0,
                steps: [
                    "Calculate the change in velocity: 18 − 10 = 8 m/s.",
                    "Divide the change by 4 s.",
                    "Acceleration = 8 ÷ 4 = 2 m/s²."
                ],
                keyIdea: "Acceleration = (final velocity − initial velocity) ÷ time."
            },
            {
                question: "What does a horizontal line on a distance-time graph indicate?",
                options: [
                    "Constant acceleration",
                    "The object is stationary",
                    "Increasing speed",
                    "The object is moving backwards"
                ],
                answer: 1,
                steps: [
                    "The vertical axis represents distance and the horizontal axis represents time.",
                    "A horizontal line means the distance does not change as time passes.",
                    "The object is stationary."
                ],
                keyIdea: "The gradient of a distance-time graph represents speed."
            },
            {
                question: "Which force opposes motion between surfaces in contact?",
                options: ["Gravity", "Magnetism", "Friction", "Upthrust"],
                answer: 2,
                steps: [
                    "Consider two surfaces sliding or attempting to slide against each other.",
                    "The force that resists their relative motion is friction.",
                    "Choose Friction."
                ],
                keyIdea: "Friction acts between surfaces in contact."
            },
            {
                question: "What is the weight of a 5 kg object if g = 10 N/kg?",
                options: ["0.5 N", "5 N", "15 N", "50 N"],
                answer: 3,
                steps: [
                    "Use weight = mass × gravitational field strength.",
                    "Substitute: 5 × 10.",
                    "Weight = 50 N."
                ],
                keyIdea: "Weight is a force and is measured in newtons."
            },
            {
                question: "An object speeds up in a straight line. What happens to its velocity?",
                options: [
                    "It remains constant",
                    "Its magnitude increases",
                    "It becomes mass",
                    "It must remain zero"
                ],
                answer: 1,
                steps: [
                    "Velocity describes speed and direction.",
                    "The object is moving in the same direction but getting faster.",
                    "The magnitude of its velocity increases."
                ],
                keyIdea: "A change in speed or direction means a change in velocity."
            },
            {
                question: "What is the resultant force when 10 N acts right and 4 N acts left?",
                options: ["14 N right", "6 N right", "6 N left", "40 N right"],
                answer: 1,
                steps: [
                    "The forces act in opposite directions.",
                    "Subtract the smaller force from the larger force: 10 − 4 = 6 N.",
                    "The resultant force acts to the right."
                ],
                keyIdea: "Opposite forces subtract; the resultant points toward the larger force."
            },
            {
                question: "Which equation calculates distance when speed and time are known?",
                options: [
                    "Distance = speed ÷ time",
                    "Distance = speed × time",
                    "Distance = time ÷ speed",
                    "Distance = mass × speed"
                ],
                answer: 1,
                steps: [
                    "Start with speed = distance ÷ time.",
                    "Multiply both sides by time.",
                    "Distance = speed × time."
                ],
                keyIdea: "Distance = speed × time."
            },
            {
                question: "A car moves at constant velocity in a straight line. What is its acceleration?",
                options: ["0 m/s²", "1 m/s²", "Its speed in m/s", "Its mass in kg"],
                answer: 0,
                steps: [
                    "Acceleration measures change in velocity over time.",
                    "Constant velocity means velocity does not change.",
                    "Therefore, acceleration is zero."
                ],
                keyIdea: "An object moving at constant velocity has zero resultant acceleration."
            },
            {
                question: "Which statement describes Newton's third law?",
                options: [
                    "Objects always stop moving",
                    "Force equals mass times speed",
                    "Interacting objects exert equal and opposite forces on each other",
                    "Heavier objects have no weight"
                ],
                answer: 2,
                steps: [
                    "Newton's third law concerns forces between interacting objects.",
                    "The forces are equal in magnitude and opposite in direction.",
                    "They act on different objects."
                ],
                keyIdea: "Action and reaction forces act on different objects, so they do not cancel on one object."
            }
        ]
    },

    waves: {
        title: "Waves and Sound",
        notes: [
            {
                heading: "Wave Properties",
                text: "Amplitude is the maximum displacement from equilibrium. Wavelength is the distance between corresponding points on consecutive waves."
            },
            {
                heading: "Frequency",
                text: "Frequency is the number of complete cycles passing a point per second. Its unit is hertz (Hz)."
            },
            {
                heading: "Wave Speed",
                text: "Wave speed = frequency × wavelength, written as v = fλ."
            },
            {
                heading: "Sound",
                text: "Sound is a longitudinal mechanical wave. It needs a medium, such as air, liquid or a solid, to travel."
            }
        ],
        questions: [
            {
                question: "What is the SI unit of frequency?",
                options: ["Metre", "Second", "Hertz", "Newton"],
                answer: 2,
                steps: [
                    "Frequency measures complete cycles per second.",
                    "The unit for frequency is named the hertz.",
                    "Choose Hertz."
                ],
                keyIdea: "One hertz is one cycle per second."
            },
            {
                question: "A wave has a frequency of 5 Hz and a wavelength of 2 m. What is its speed?",
                options: ["2.5 m/s", "7 m/s", "10 m/s", "25 m/s"],
                answer: 2,
                steps: [
                    "Use wave speed = frequency × wavelength.",
                    "Substitute: v = 5 × 2.",
                    "The speed is 10 m/s."
                ],
                keyIdea: "Wave speed v = fλ."
            },
            {
                question: "Which statement about sound is correct?",
                options: [
                    "Sound travels through a vacuum",
                    "Sound is a mechanical wave",
                    "Sound never transfers energy",
                    "Sound has the same speed in every material"
                ],
                answer: 1,
                steps: [
                    "Sound is produced by vibrations.",
                    "These vibrations travel through particles in a medium.",
                    "Therefore, sound is a mechanical wave."
                ],
                keyIdea: "Sound requires a medium and cannot travel through a vacuum."
            },
            {
                question: "What is the distance between two consecutive crests called?",
                options: ["Amplitude", "Frequency", "Wavelength", "Period"],
                answer: 2,
                steps: [
                    "Look at two neighbouring crests.",
                    "Measure the distance between them.",
                    "That distance is the wavelength."
                ],
                keyIdea: "Wavelength is the distance between corresponding points on consecutive waves."
            },
            {
                question: "A frequency of 10 Hz means how many complete cycles pass each second?",
                options: ["1", "5", "10", "100"],
                answer: 2,
                steps: [
                    "Hertz means cycles per second.",
                    "A frequency of 10 Hz means 10 cycles in one second.",
                    "Choose 10."
                ],
                keyIdea: "Frequency tells you how many cycles occur each second."
            },
            {
                question: "What is the SI unit of wavelength?",
                options: ["Metre", "Hertz", "Second", "Watt"],
                answer: 0,
                steps: [
                    "Wavelength measures a distance.",
                    "The SI unit of distance is the metre.",
                    "Choose Metre."
                ],
                keyIdea: "Wavelength is measured in metres (m)."
            },
            {
                question: "Which type of wave has vibrations perpendicular to its direction of travel?",
                options: ["Longitudinal", "Transverse", "Sound only", "Stationary only"],
                answer: 1,
                steps: [
                    "Compare the direction of vibration with the direction of travel.",
                    "Perpendicular means at right angles.",
                    "A transverse wave has perpendicular vibrations."
                ],
                keyIdea: "Transverse waves oscillate perpendicular to the direction of energy transfer."
            },
            {
                question: "Which type of wave has vibrations parallel to its direction of travel?",
                options: ["Transverse", "Electromagnetic only", "Longitudinal", "Light only"],
                answer: 2,
                steps: [
                    "Parallel means in the same direction or along the same line.",
                    "Longitudinal waves have vibrations parallel to the direction of travel.",
                    "Choose Longitudinal."
                ],
                keyIdea: "Sound in air is an example of a longitudinal wave."
            },
            {
                question: "A wave has a speed of 12 m/s and a frequency of 4 Hz. What is its wavelength?",
                options: ["3 m", "8 m", "16 m", "48 m"],
                answer: 0,
                steps: [
                    "Use wavelength = speed ÷ frequency.",
                    "Substitute: 12 ÷ 4.",
                    "Wavelength = 3 m."
                ],
                keyIdea: "Rearrange v = fλ to obtain λ = v ÷ f."
            },
            {
                question: "What does amplitude measure?",
                options: [
                    "The number of waves per second",
                    "The distance between crests",
                    "The maximum displacement from equilibrium",
                    "The time for one cycle"
                ],
                answer: 2,
                steps: [
                    "Identify the maximum displacement from the equilibrium position.",
                    "This is not the distance between crests or the number of cycles.",
                    "It is the amplitude."
                ],
                keyIdea: "Amplitude is the maximum displacement from equilibrium."
            },
            {
                question: "What happens to pitch when the frequency of a sound increases?",
                options: [
                    "Pitch decreases",
                    "Pitch increases",
                    "Pitch always stays the same",
                    "Sound becomes a vacuum"
                ],
                answer: 1,
                steps: [
                    "Pitch is related to the frequency of a sound.",
                    "Higher frequency corresponds to higher pitch.",
                    "Therefore, pitch increases."
                ],
                keyIdea: "Frequency affects pitch: higher frequency means higher pitch."
            },
            {
                question: "What generally happens when sound amplitude increases?",
                options: [
                    "The sound becomes louder",
                    "The sound always becomes quieter",
                    "Frequency becomes zero",
                    "Sound cannot travel"
                ],
                answer: 0,
                steps: [
                    "Amplitude describes the size of the sound vibration.",
                    "Greater amplitude is associated with greater sound intensity.",
                    "The sound is generally perceived as louder."
                ],
                keyIdea: "Greater sound-wave amplitude is associated with greater loudness."
            },
            {
                question: "Can sound travel through a vacuum?",
                options: [
                    "Yes, because it needs no particles",
                    "Yes, but only at night",
                    "No, because it needs a medium",
                    "Only if it is loud"
                ],
                answer: 2,
                steps: [
                    "Sound transfers energy through vibrations of particles.",
                    "A vacuum has no particles to carry these vibrations.",
                    "Therefore, sound cannot travel through a vacuum."
                ],
                keyIdea: "Sound is a mechanical wave that requires a medium to travel."
            }
        ]
    }
};


/* 1b. STUDY NOTES (converted from IB_MYP4_Physics_Comprehensive_Notes.docx) */

const NOTES_DATA = {"measurements": [{"heading": "1.1 Introduction to measurement", "blocks": [{"t": "p", "x": "Measurement is the process of determining the size or magnitude of a physical quantity by comparing it with an agreed standard unit. Measurements make observations quantitative, allowing scientists to compare results, identify patterns, test predictions and repeat investigations."}, {"t": "p", "x": "A measurement contains a numerical value (magnitude) and a unit. For example, in 5.0 m, 5.0 is the magnitude and metre (m) is the unit."}]}, {"heading": "1.2 Physical quantities", "blocks": [{"t": "p", "x": "A physical quantity is a property that can be measured and expressed using a number and a unit. Physical quantities are classified as fundamental or derived."}, {"t": "table", "head": ["Fundamental quantity", "SI unit", "Symbol"], "rows": [["Length", "metre", "m"], ["Mass", "kilogram", "kg"], ["Time", "second", "s"], ["Electric current", "ampere", "A"], ["Temperature", "kelvin", "K"], ["Amount of substance", "mole", "mol"], ["Luminous intensity", "candela", "cd"]]}, {"t": "p", "x": "Derived quantities are calculated by combining fundamental quantities."}, {"t": "table", "head": ["Derived quantity", "Relationship", "SI unit"], "rows": [["Area", "length × width", "m²"], ["Volume", "length × width × height", "m³"], ["Speed", "distance ÷ time", "m/s"], ["Acceleration", "change in velocity ÷ time", "m/s²"], ["Density", "mass ÷ volume", "kg/m³"], ["Force", "mass × acceleration", "newton (N)"], ["Pressure", "force ÷ area", "pascal (Pa)"]]}]}, {"heading": "1.3 SI units and metric conversions", "blocks": [{"t": "p", "x": "The International System of Units (SI) is the internationally recognised system used by scientists. Standard units allow measurements to be communicated and compared consistently."}, {"t": "table", "head": ["Prefix", "Symbol", "Multiplier"], "rows": [["kilo", "k", "1,000"], ["hecto", "h", "100"], ["deca", "da", "10"], ["deci", "d", "0.1"], ["centi", "c", "0.01"], ["milli", "m", "0.001"], ["micro", "µ", "0.000001"], ["nano", "n", "0.000000001"]]}, {"t": "p", "x": "Examples of length conversions:"}, {"t": "f", "x": "1 km = 1,000 m     |     1 m = 100 cm     |     1 cm = 10 mm"}, {"t": "p", "x": "Example: Convert 3.5 km to metres. Multiply by 1,000: 3.5 × 1,000 = 3,500 m."}, {"t": "p", "x": "Example: Convert 450 mm to metres. Divide by 1,000: 450 ÷ 1,000 = 0.45 m."}, {"t": "p", "x": "For area conversions, square the length conversion factor: 1 m² = 100² cm² = 10,000 cm². For volume conversions, cube it: 1 m³ = 100³ cm³ = 1,000,000 cm³."}]}, {"heading": "1.4 Scalars and vectors", "blocks": [{"t": "p", "x": "A scalar has magnitude only. Examples include distance, speed, mass, time, temperature, energy and volume."}, {"t": "p", "x": "A vector has both magnitude and direction. Examples include displacement, velocity, acceleration, force and momentum."}, {"t": "table", "head": ["Scalar", "Corresponding vector"], "rows": [["Distance", "Displacement"], ["Speed", "Velocity"], ["—", "Acceleration"], ["—", "Force"], ["—", "Momentum"]]}, {"t": "p", "x": "For vectors in the same direction, add magnitudes. For vectors in opposite directions, subtract the smaller magnitude from the larger and retain the direction of the larger vector."}, {"t": "p", "x": "Example: 10 m east followed by 4 m west gives a resultant displacement of 6 m east."}, {"t": "p", "x": "For perpendicular vectors, use Pythagoras: R = √(A² + B²). A displacement of 3 m north and 4 m east has a magnitude of √(3² + 4²) = 5 m, directed northeast."}]}, {"heading": "1.5 Measuring instruments", "blocks": [{"t": "table", "head": ["Instrument", "Typical use", "Good practice"], "rows": [["Metre rule", "Length of larger objects", "Align zero with the object; read at eye level."], ["Vernier calipers", "External/internal diameter and depth", "Read the main scale and Vernier scale; check for zero error."], ["Micrometer screw gauge", "Very small thicknesses or diameters", "Use the ratchet; combine sleeve and thimble readings."], ["Stopwatch", "Time intervals", "Repeat timing and average results to reduce random variation."], ["Measuring cylinder", "Liquid volume", "Read the bottom of the meniscus at eye level for water."], ["Electronic balance", "Mass", "Zero or tare the balance before measuring."]]}, {"t": "h", "x": "Vernier calipers"}, {"t": "p", "x": "Vernier calipers can measure external diameter, internal diameter, thickness and depth. The reading is the main-scale reading plus the Vernier contribution."}, {"t": "f", "x": "Vernier contribution = coinciding division × least count"}, {"t": "f", "x": "Total reading = main-scale reading + Vernier contribution"}, {"t": "p", "x": "Example: Main scale = 2.30 cm; coinciding division = 6; least count = 0.01 cm. Vernier contribution = 6 × 0.01 = 0.06 cm. Total = 2.36 cm."}, {"t": "h", "x": "Micrometer screw gauge"}, {"t": "p", "x": "A micrometer measures very small dimensions. Its reading is calculated by adding the sleeve reading to the thimble reading. The thimble contribution equals the thimble division multiplied by the instrument least count. The ratchet helps apply consistent pressure."}]}, {"heading": "1.6 Accuracy, precision and resolution", "blocks": [{"t": "p", "x": "Accuracy describes how close a measurement is to the true or accepted value. Precision describes how close repeated measurements are to one another. Resolution is the smallest change an instrument can detect or display."}, {"t": "p", "x": "Accurate and precise: measurements are close to the accepted value and close to one another."}, {"t": "p", "x": "Accurate but not precise: measurements are spread out, but their average is close to the accepted value."}, {"t": "p", "x": "Precise but inaccurate: measurements are close together but consistently far from the accepted value."}, {"t": "p", "x": "Neither accurate nor precise: measurements are spread out and far from the accepted value."}, {"t": "p", "x": "Improve accuracy by calibrating equipment, correcting zero errors, avoiding parallax and selecting appropriate instruments. Improve precision by using instruments with finer resolution, repeating measurements and keeping the method consistent."}]}, {"heading": "1.7 Measurement errors", "blocks": [{"t": "p", "x": "A measurement error is the difference between a measured value and the true or accepted value."}, {"t": "h", "x": "Systematic errors"}, {"t": "p", "x": "Systematic errors shift measurements consistently in one direction. Examples include a balance that always reads too high, a damaged ruler zero mark or an incorrectly calibrated thermometer. Repeating measurements does not remove a systematic error; calibration or correcting the method is required."}, {"t": "h", "x": "Random errors"}, {"t": "p", "x": "Random errors cause unpredictable variation between readings. Examples include reaction-time differences when using a stopwatch and small changes in experimental conditions. Repeated measurements and calculating a mean can reduce their effect."}, {"t": "h", "x": "Zero error and parallax"}, {"t": "p", "x": "Zero error occurs when an instrument does not read zero when it should. Parallax error occurs when a scale is read from an angle rather than at eye level. Both can affect the reliability of measurements."}]}, {"heading": "1.8 Mean, range and uncertainty", "blocks": [{"t": "f", "x": "Mean = sum of measurements ÷ number of measurements"}, {"t": "f", "x": "Range = highest measurement − lowest measurement"}, {"t": "f", "x": "Estimated uncertainty from repeats = range ÷ 2"}, {"t": "p", "x": "Example: Five times for 10 pendulum oscillations are 12.4 s, 12.6 s, 12.5 s, 12.3 s and 12.7 s."}, {"t": "p", "x": "Mean = 62.5 ÷ 5 = 12.5 s. Range = 12.7 − 12.3 = 0.4 s. Half-range estimate = 0.2 s. The result may be written as 12.5 ± 0.2 s. This estimates the spread of repeated readings; instrument uncertainty may also need to be considered."}, {"t": "p", "x": "**Absolute difference** = the size of (measured value − accepted value), ignoring the sign. Example: measured 10.2 cm, accepted 10.0 cm, so 10.2 − 10.0 = 0.2 cm."}]}, {"heading": "1.9 Significant figures and standard form (scientific notation)", "blocks": [{"t": "p", "x": "Significant figures are the meaningful digits in a measured or calculated value. They communicate the precision of a value."}, {"t": "p", "x": "All non-zero digits are significant."}, {"t": "p", "x": "Zeros between non-zero digits are significant."}, {"t": "p", "x": "Leading zeros are not significant."}, {"t": "p", "x": "Trailing zeros after a decimal point are significant."}, {"t": "p", "x": "Trailing zeros in whole numbers can be ambiguous; use standard form to make precision clear."}, {"t": "table", "head": ["Number", "Significant figures"], "rows": [["45", "2"], ["4.56", "3"], ["0.0045", "2"], ["2005", "4"], ["3.500", "4"], ["0.0700", "3"]]}, {"t": "p", "x": "When rounding, if the next digit is 5 or greater, increase the last retained digit by one. If it is less than 5, leave the last retained digit unchanged. Example: 7.846 to 3 significant figures is 7.85."}, {"t": "p", "x": "**Standard form: a × 10ⁿ, where 1 ≤ a ****<**** 10**"}, {"t": "p", "x": "Examples: 450,000 = 4.5 × 10⁵; 0.00032 = 3.2 × 10⁻⁴."}]}, {"heading": "1.10 Density", "blocks": [{"t": "p", "x": "Density is mass per unit volume. It describes how much mass is contained in a given volume."}, {"t": "f", "x": "Density (ρ) = mass (m) ÷ volume (V)"}, {"t": "f", "x": "ρ = m/V     |     m = ρV     |     V = m/ρ"}, {"t": "p", "x": "Common units include kg/m³ and g/cm³. Example: an object has mass 200 g and volume 50 cm³. Density = 200 ÷ 50 = 4 g/cm³."}, {"t": "p", "x": "An object generally floats in a fluid if its average density is lower than the fluid’s density and sinks if its average density is higher. A hollow steel ship can float because its overall average density, including the air-filled space, is lower than water."}]}, {"heading": "1.11 Criterion B: Planning a measurement investigation", "blocks": [{"t": "p", "x": "Example research question: How does the length of a pendulum affect the time taken for one complete oscillation?"}, {"t": "p", "x": "Independent variable: pendulum length."}, {"t": "p", "x": "Dependent variable: time period of the pendulum."}, {"t": "p", "x": "Control variables: bob mass, initial angle, release method and experimental location."}, {"t": "p", "x": "Equipment: string, pendulum bob, clamp stand, metre rule and stopwatch."}, {"t": "p", "x": "Method: Set up a pendulum at a measured length. Pull the bob through a small angle and release it without pushing. Time 10 complete oscillations. Repeat at least three times, calculate the mean time and divide by 10 to find the period. Repeat for several lengths."}, {"t": "f", "x": "Period T = mean time for 10 oscillations ÷ 10"}, {"t": "p", "x": "For a simple pendulum at small angles, the relationship is T = 2π√(L/g), where T is period, L is length and g is gravitational field strength."}]}, {"heading": "1.12 Criterion C: Processing and evaluating measurement data", "blocks": [{"t": "p", "x": "Present results in a clearly labelled table with units. Repeat measurements, calculate means, identify anomalies, select suitable graphs, describe trends and discuss uncertainty. Evaluate whether the method measures the intended variable and suggest specific improvements."}]}, {"heading": "1.13 Topic 1 checklist", "blocks": [{"t": "p", "x": "Distinguish fundamental and derived quantities."}, {"t": "p", "x": "Identify SI units and convert metric units."}, {"t": "p", "x": "Explain scalars and vectors and combine simple vectors."}, {"t": "p", "x": "Select and read suitable measuring instruments."}, {"t": "p", "x": "Explain accuracy, precision and resolution."}, {"t": "p", "x": "Identify systematic, random, zero and parallax errors."}, {"t": "p", "x": "Calculate means, ranges and uncertainty estimates."}, {"t": "p", "x": "Apply significant figures and standard form."}, {"t": "p", "x": "Calculate density and rearrange its equation."}, {"t": "p", "x": "Design, process and evaluate a measurement investigation."}]}, {"heading": "Formula bank", "blocks": [{"t": "table", "head": ["Quantity", "Formula"], "rows": [["Mean", "sum of measurements ÷ number of measurements"], ["Range", "highest value − lowest value"], ["Half-range uncertainty estimate", "range ÷ 2"], ["Density", "ρ = m/V"], ["Mass from density", "m = ρV"], ["Volume from density", "V = m/ρ"], ["Area of rectangle", "A = length × width"], ["Volume of cuboid", "V = length × width × height"]]}]}], "waves": [{"heading": "2.1 Introduction to waves", "blocks": [{"t": "p", "x": "A wave is a disturbance that transfers energy from one place to another without an overall transfer of matter. Examples include sound travelling through air, light travelling from the Sun, ripples spreading across water and vibrations travelling along a string."}, {"t": "p", "x": "In a mechanical wave, particles in the medium vibrate around equilibrium positions and pass energy to neighbouring particles. The particles do not travel along with the wave as a whole."}]}, {"heading": "2.2 Transverse and longitudinal waves", "blocks": [{"t": "h", "x": "Transverse waves"}, {"t": "p", "x": "In a transverse wave, particles vibrate perpendicular (at right angles) to the direction of energy transfer. Examples include waves on a stretched rope and electromagnetic waves. Surface water waves involve a combination of particle motions."}, {"t": "p", "x": "Crest: highest point of a transverse wave."}, {"t": "p", "x": "Trough: lowest point of a transverse wave."}, {"t": "p", "x": "Amplitude: maximum displacement from equilibrium."}, {"t": "p", "x": "Wavelength: distance between consecutive points in phase, such as crest to crest."}, {"t": "p", "x": "Equilibrium position: undisturbed position of the medium."}, {"t": "h", "x": "Longitudinal waves"}, {"t": "p", "x": "In a longitudinal wave, particles vibrate parallel to the direction of energy transfer. Sound travelling through air is a longitudinal wave."}, {"t": "p", "x": "Compression: region where particles are closer together, with higher pressure and density."}, {"t": "p", "x": "Rarefaction: region where particles are further apart, with lower pressure and density."}, {"t": "p", "x": "Wavelength: distance between consecutive compressions or consecutive rarefactions."}, {"t": "table", "head": ["Transverse wave", "Longitudinal wave"], "rows": [["Particles vibrate perpendicular to energy transfer.", "Particles vibrate parallel to energy transfer."], ["Has crests and troughs.", "Has compressions and rarefactions."], ["Example: electromagnetic wave.", "Example: sound in air."]]}]}, {"heading": "2.3 Mechanical and electromagnetic waves", "blocks": [{"t": "p", "x": "Mechanical waves require a medium, such as a solid, liquid or gas. They cannot travel through a vacuum because there are no particles to transmit the disturbance. Examples include sound, water waves and seismic waves."}, {"t": "p", "x": "Electromagnetic waves consist of oscillating electric and magnetic fields. They do not require a medium and can travel through a vacuum. In a vacuum, all electromagnetic waves travel at approximately 3.0 × 10⁸ m/s."}]}, {"heading": "2.4 Wave characteristics and equations", "blocks": [{"t": "table", "head": ["Quantity", "Meaning", "Symbol and unit"], "rows": [["Amplitude", "Maximum displacement from equilibrium.", "A; metres (m) for displacement"], ["Wavelength", "Distance between consecutive points in phase.", "λ; metres (m)"], ["Frequency", "Number of complete cycles per second.", "f; hertz (Hz)"], ["Period", "Time for one complete cycle.", "T; seconds (s)"], ["Wave speed", "Distance travelled by the wave per second.", "v; metres per second (m/s)"]]}, {"t": "f", "x": "Frequency: f = number of waves ÷ time"}, {"t": "f", "x": "Period: T = 1/f     and     f = 1/T"}, {"t": "f", "x": "Wave speed: v = fλ"}, {"t": "p", "x": "Example 1: A wave has frequency 10 Hz and wavelength 2 m. Speed = 10 × 2 = 20 m/s."}, {"t": "p", "x": "Example 2: A wave travels at 300 m/s and has frequency 150 Hz. Wavelength = 300 ÷ 150 = 2 m."}, {"t": "p", "x": "If wave speed remains constant, increasing frequency decreases wavelength. Frequency and wavelength are inversely proportional when speed is fixed."}, {"t": "p", "x": "A larger amplitude generally means more energy is carried. For many waves under otherwise identical conditions, transported energy is proportional to amplitude squared: E ∝ A²."}]}, {"heading": "2.5 Wave behaviour", "blocks": [{"t": "h", "x": "Reflection"}, {"t": "p", "x": "Reflection occurs when a wave reaches a boundary and bounces back into its original medium. Examples include light reflecting from a mirror and sound reflecting from a wall."}, {"t": "f", "x": "Law of reflection: angle of incidence = angle of reflection (i = r)"}, {"t": "p", "x": "Angles are measured from the normal, an imaginary line perpendicular to the surface at the point where the wave meets it."}, {"t": "h", "x": "Refraction"}, {"t": "p", "x": "Refraction is the change in direction of a wave when it enters a different medium at an angle because its speed changes. When a wave slows down, its wavelength decreases; when it speeds up, its wavelength increases. Frequency remains constant because it is set by the source."}, {"t": "p", "x": "A wave entering a slower medium at an angle bends towards the normal. A wave entering a faster medium at an angle bends away from the normal."}, {"t": "h", "x": "Diffraction"}, {"t": "p", "x": "Diffraction is the spreading of waves as they pass through a gap or around an obstacle. It is most noticeable when the gap or obstacle size is similar to the wavelength. Longer wavelengths generally diffract more around obstacles of the same size."}, {"t": "h", "x": "Absorption"}, {"t": "p", "x": "Absorption occurs when a material takes in wave energy. The energy may be transferred to internal energy, often warming the material. Examples include dark surfaces absorbing light and acoustic materials absorbing some sound energy."}]}, {"heading": "2.6 Sound waves", "blocks": [{"t": "p", "x": "Sound is a mechanical wave produced by vibrating objects. In air, sound travels as a longitudinal wave through compressions and rarefactions. Vibrations cause nearby particles to move; these particles interact with neighbouring particles, passing the disturbance through the medium."}, {"t": "p", "x": "Sound can travel through solids, liquids and gases, but not through a vacuum. It generally travels faster in solids than in liquids and gases, although the exact speed depends on the medium’s elasticity, density and temperature."}, {"t": "table", "head": ["Medium", "Approximate speed of sound"], "rows": [["Air at 20°C", "343 m/s"], ["Water", "1,480 m/s"], ["Steel", "5,000 m/s"]]}, {"t": "p", "x": "These are approximate values; actual speeds depend on conditions and material properties."}]}, {"heading": "2.7 Properties of sound", "blocks": [{"t": "p", "x": "Pitch: how high or low a sound is perceived. It is mainly determined by frequency. Higher frequency means higher pitch."}, {"t": "p", "x": "Loudness: perceived strength of a sound. It is related to sound intensity; greater amplitude generally produces greater intensity. Sound level is commonly measured in decibels (dB)."}, {"t": "p", "x": "Timbre (quality): the characteristic that allows listeners to distinguish sounds from different sources, even when pitch and loudness are similar. It depends on waveform and harmonic content."}, {"t": "p", "x": "Sound intensity is measured in watts per square metre (W/m²)."}]}, {"heading": "2.8 Hearing range, ultrasound and echoes", "blocks": [{"t": "p", "x": "The typical hearing range of a healthy young person is approximately 20 Hz to 20,000 Hz, although it varies between individuals and generally changes with age."}, {"t": "table", "head": ["Category", "Frequency range"], "rows": [["Infrasound", "Below 20 Hz"], ["Audible sound", "Approximately 20 Hz to 20,000 Hz"], ["Ultrasound", "Above 20,000 Hz"]]}, {"t": "p", "x": "Ultrasound is used in medical imaging, industrial testing and distance sensors. In medical imaging, pulses of high-frequency sound reflect from boundaries between tissues. The returning echoes are processed to produce an image. In industrial testing, ultrasound can help detect internal defects without cutting a material open."}, {"t": "p", "x": "An echo is reflected sound heard again after bouncing off a surface. The sound travels to the surface and back, so the total path is twice the one-way distance."}, {"t": "f", "x": "Distance to reflecting surface: d = vt/2"}, {"t": "p", "x": "Example: An echo returns after 2 s. If sound travels at 340 m/s, distance = (340 × 2) ÷ 2 = 340 m."}]}, {"heading": "2.9 Electromagnetic spectrum", "blocks": [{"t": "p", "x": "The electromagnetic spectrum contains all electromagnetic waves arranged by frequency or wavelength. In order of increasing frequency:"}, {"t": "p", "x": "Radio waves"}, {"t": "p", "x": "Microwaves"}, {"t": "p", "x": "Infrared radiation"}, {"t": "p", "x": "Visible light"}, {"t": "p", "x": "Ultraviolet radiation"}, {"t": "p", "x": "X-rays"}, {"t": "p", "x": "Gamma rays"}, {"t": "p", "x": "All electromagnetic waves are transverse, transfer energy, can travel through a vacuum and travel at approximately 3.0 × 10⁸ m/s in a vacuum."}, {"t": "f", "x": "Electromagnetic wave equation: c = fλ"}, {"t": "table", "head": ["Type", "Common uses", "Safety considerations"], "rows": [["Radio waves", "Broadcasting and communications", "Non-ionising; exposure standards still apply."], ["Microwaves", "Ovens, radar and satellite communications", "Can heat body tissue at sufficient intensity."], ["Infrared", "Thermal imaging, remote controls and heat sensors", "Intense exposure can cause heating and burns."], ["Visible light", "Vision, photography and lighting", "Very intense light can damage eyes."], ["Ultraviolet", "Some sterilisation systems and forensic investigations", "Can damage skin and eyes; some UV is ionising."], ["X-rays", "Medical imaging and security scanning", "Ionising; unnecessary exposure should be minimised."], ["Gamma rays", "Some medical treatments and sterilisation", "Highly penetrating ionising radiation."]]}, {"t": "p", "x": "Radio waves, microwaves, infrared and visible light are generally non-ionising. High-frequency ultraviolet can be ionising; X-rays and gamma rays are ionising. Ionising radiation can damage cells and DNA."}]}, {"heading": "2.10 Wave investigations", "blocks": [{"t": "p", "x": "Example research question: How does frequency affect wavelength when waves travel through the same medium?"}, {"t": "p", "x": "Independent variable: frequency."}, {"t": "p", "x": "Dependent variable: wavelength."}, {"t": "p", "x": "Control variables: medium and conditions of the wave source."}, {"t": "p", "x": "If wave speed is constant, v = fλ predicts an inverse relationship between frequency and wavelength. Doubling frequency halves wavelength."}, {"t": "p", "x": "Another possible investigation asks how air temperature affects the speed of sound. Keep source-detector distance constant, measure temperature, repeat timing measurements and control background noise. The speed of sound in air increases as temperature increases."}]}, {"heading": "2.11 Criterion C: Analysing wave data", "blocks": [{"t": "p", "x": "Students should label wave diagrams, calculate frequency, period and wave speed, compare results, identify trends, explain relationships using equations and evaluate uncertainties. When interpreting data, distinguish what was measured from what is inferred."}]}, {"heading": "2.12 Criterion D: Science and society", "blocks": [{"t": "table", "head": ["Technology", "Benefit", "Possible concern"], "rows": [["Medical ultrasound", "Non-invasive imaging", "Images require appropriate interpretation."], ["X-ray imaging", "Helps diagnose injuries and illness", "Ionising radiation exposure should be justified and controlled."], ["Mobile communication", "Fast information exchange", "Infrastructure uses energy and resources."], ["Radar", "Detects objects and monitors weather", "Equipment and infrastructure can be costly."], ["Infrared imaging", "Shows heat patterns", "Some surveillance uses raise privacy concerns."]]}]}, {"heading": "2.13 Topic 2 checklist", "blocks": [{"t": "p", "x": "Define waves and explain energy transfer."}, {"t": "p", "x": "Distinguish mechanical and electromagnetic waves."}, {"t": "p", "x": "Compare transverse and longitudinal waves."}, {"t": "p", "x": "Label amplitude, wavelength, crest, trough, compression and rarefaction."}, {"t": "p", "x": "Calculate wave speed, frequency and period."}, {"t": "p", "x": "Explain reflection, refraction, diffraction and absorption."}, {"t": "p", "x": "Explain how sound is produced and transmitted."}, {"t": "p", "x": "Compare pitch, loudness and timbre."}, {"t": "p", "x": "Calculate distance using echo time."}, {"t": "p", "x": "Describe ultrasound applications."}, {"t": "p", "x": "List the electromagnetic spectrum in order."}, {"t": "p", "x": "Explain uses and hazards of electromagnetic radiation."}, {"t": "p", "x": "Plan and evaluate a wave investigation."}]}, {"heading": "Formula bank", "blocks": [{"t": "table", "head": ["Quantity", "Formula"], "rows": [["Wave speed", "v = fλ"], ["Frequency", "f = 1/T"], ["Period", "T = 1/f"], ["Echo distance", "d = vt/2"], ["Electromagnetic wave speed", "c = fλ"]]}]}], "movement": [{"heading": "3.1 Introduction to movement and forces", "blocks": [{"t": "p", "x": "Motion is a change in an object’s position over time relative to a reference point. Forces are pushes or pulls that can change an object’s motion or shape."}, {"t": "p", "x": "Kinematics is the study of motion without considering the forces causing it. Dynamics studies motion and the forces responsible for it."}]}, {"heading": "3.2 Distance and displacement", "blocks": [{"t": "p", "x": "Distance is the total length of the path travelled. It is a scalar and has no direction. Displacement is the straight-line change in position from the starting point to the finishing point, including direction. It is a vector."}, {"t": "p", "x": "Example: A student walks 5 m east and then 3 m west. Total distance = 8 m. Displacement = 2 m east."}, {"t": "p", "x": "A runner completing one 400 m lap and returning to the start has travelled 400 m but has zero displacement."}]}, {"heading": "3.3 Speed and velocity", "blocks": [{"t": "f", "x": "Average speed = total distance ÷ total time"}, {"t": "f", "x": "Average velocity = displacement ÷ time"}, {"t": "p", "x": "Speed is a scalar; velocity is a vector and includes direction. A car moving around a circular track at constant speed has changing velocity because its direction changes."}, {"t": "p", "x": "Example: A car travels 150 m in 10 s. Average speed = 150 ÷ 10 = 15 m/s."}, {"t": "p", "x": "Example: A cyclist travels 12 km in 30 minutes. Convert 30 minutes to 0.5 h. Average speed = 12 ÷ 0.5 = 24 km/h."}, {"t": "f", "x": "Convert m/s to km/h: multiply by 3.6"}, {"t": "f", "x": "Convert km/h to m/s: divide by 3.6"}, {"t": "p", "x": "**Rearranging speed = distance ÷ time:** distance = speed × time, and time = distance ÷ speed. Example: a cyclist travelling at 5 m/s for 12 s covers 5 × 12 = 60 m."}]}, {"heading": "3.4 Acceleration", "blocks": [{"t": "p", "x": "Acceleration is the rate of change of velocity. An object accelerates if its speed changes or its direction changes."}, {"t": "f", "x": "a = (v − u) ÷ t"}, {"t": "p", "x": "Here, a is acceleration in m/s², v is final velocity in m/s, u is initial velocity in m/s and t is time in seconds."}, {"t": "p", "x": "Example: A car changes velocity from 5 m/s to 25 m/s in 4 s. a = (25 − 5) ÷ 4 = 5 m/s²."}, {"t": "p", "x": "Example: A vehicle slows from 30 m/s to 10 m/s in 5 s. a = (10 − 30) ÷ 5 = −4 m/s². The negative sign indicates acceleration in the direction opposite to the chosen positive direction."}, {"t": "p", "x": "Positive acceleration does not always mean speeding up. Whether an object speeds up or slows down depends on the directions of its velocity and acceleration."}]}, {"heading": "3.5 Uniformly accelerated motion: SUVAT", "blocks": [{"t": "p", "x": "The SUVAT equations apply to straight-line motion with constant acceleration."}, {"t": "table", "head": ["Symbol", "Meaning", "Unit"], "rows": [["s", "Displacement", "m"], ["u", "Initial velocity", "m/s"], ["v", "Final velocity", "m/s"], ["a", "Acceleration", "m/s²"], ["t", "Time", "s"]]}, {"t": "f", "x": "v = u + at"}, {"t": "f", "x": "s = ut + ½at²"}, {"t": "f", "x": "v² = u² + 2as"}, {"t": "f", "x": "s = ½(u + v)t"}, {"t": "f", "x": "s = vt − ½at²"}, {"t": "p", "x": "Worked example: A car starts from rest and accelerates at 3 m/s² for 6 s. Final velocity: v = 0 + (3 × 6) = 18 m/s. Displacement: s = (0 × 6) + ½(3)(6²) = 54 m."}]}, {"heading": "3.6 Distance-time graphs", "blocks": [{"t": "p", "x": "A distance-time graph shows how distance changes with time. Time is on the horizontal axis and distance on the vertical axis."}, {"t": "p", "x": "Horizontal line: distance is constant; the object is stationary."}, {"t": "p", "x": "Straight upward-sloping line: constant speed."}, {"t": "p", "x": "Steeper straight line: greater speed."}, {"t": "p", "x": "Curve becoming steeper: speed is increasing."}, {"t": "p", "x": "Curve becoming less steep: speed is decreasing."}, {"t": "f", "x": "Gradient of distance-time graph = change in distance ÷ change in time = speed"}, {"t": "p", "x": "Example: If an object travels 60 m in 10 s, the gradient and speed are 6 m/s."}]}, {"heading": "3.7 Velocity-time graphs", "blocks": [{"t": "p", "x": "A velocity-time graph shows how velocity changes with time. Time is on the horizontal axis and velocity on the vertical axis."}, {"t": "p", "x": "Horizontal line above the time axis: constant positive velocity; acceleration is zero."}, {"t": "p", "x": "Straight line sloping upwards: constant positive acceleration."}, {"t": "p", "x": "Straight line sloping downwards: constant negative acceleration."}, {"t": "p", "x": "Line on the time axis: zero velocity."}, {"t": "p", "x": "Curved line: changing acceleration."}, {"t": "f", "x": "Gradient of velocity-time graph = change in velocity ÷ change in time = acceleration"}, {"t": "f", "x": "Area under velocity-time graph = displacement"}, {"t": "p", "x": "For a rectangle, area = base × height. For a triangle, area = ½ × base × height. For a trapezium, area = ½ × (sum of parallel sides) × height."}, {"t": "p", "x": "Example: A vehicle accelerates uniformly from 0 to 20 m/s in 5 s. The area under the velocity-time graph is a triangle: displacement = ½ × 5 × 20 = 50 m."}, {"t": "p", "x": "Remember: distance-time gradient gives speed; velocity-time gradient gives acceleration; velocity-time area gives displacement. If a velocity-time graph goes below the time axis, signed area is negative and represents displacement in the opposite direction."}]}, {"heading": "3.8 Introduction to forces", "blocks": [{"t": "p", "x": "A force is a push or pull. It can change speed, direction or shape. Force is a vector measured in newtons (N). Force arrows represent direction and magnitude; a longer arrow represents a larger force when the diagram uses a consistent scale."}]}, {"heading": "3.9 Types of forces", "blocks": [{"t": "h", "x": "Contact forces"}, {"t": "p", "x": "Friction: opposes relative motion or attempted motion between surfaces in contact. It helps with walking and braking but can dissipate energy as thermal energy."}, {"t": "p", "x": "Air resistance (drag): opposes motion through air. It generally increases with speed and depends on shape, area and flow conditions."}, {"t": "p", "x": "Normal contact force: support force exerted by a surface, acting perpendicular to that surface."}, {"t": "p", "x": "Tension: pulling force transmitted through a stretched rope, cable or string."}, {"t": "p", "x": "Applied force: a push or pull exerted directly by a person or another object."}, {"t": "h", "x": "Non-contact forces"}, {"t": "p", "x": "Gravitational force: attraction between objects with mass."}, {"t": "p", "x": "Magnetic force: attraction or repulsion involving magnets and magnetic materials."}, {"t": "p", "x": "Electrostatic force: force between electric charges; opposite charges attract and like charges repel."}]}, {"heading": "3.10 Resultant forces and equilibrium", "blocks": [{"t": "p", "x": "The resultant force (net force) is the single force that has the same overall effect as all forces acting on an object. For forces in the same direction, add them. For forces in opposite directions, subtract the smaller from the larger and use the direction of the larger force."}, {"t": "p", "x": "Example: 20 N east and 15 N east give 35 N east. A 30 N force right and 10 N left give 20 N right."}, {"t": "p", "x": "Balanced forces have a resultant of zero. An object at rest remains at rest; an object already moving continues at constant velocity. Balanced forces do not necessarily mean the object is stationary."}, {"t": "p", "x": "Unbalanced forces have a non-zero resultant and cause acceleration: a change in speed, direction or both."}]}, {"heading": "3.11 Newton’s First Law", "blocks": [{"t": "p", "x": "Newton’s First Law states that an object remains at rest or continues moving at constant velocity unless acted on by a resultant external force. It is also called the law of inertia."}, {"t": "p", "x": "Inertia is an object’s tendency to resist a change in its state of motion. Greater mass means greater inertia."}, {"t": "p", "x": "Examples: a stationary football remains still until kicked; passengers tend to continue moving forward when a car brakes suddenly; a table remains at rest when forces on it are balanced. Seat belts provide a force that changes passengers’ motion with the vehicle."}]}, {"heading": "3.12 Newton’s Second Law", "blocks": [{"t": "p", "x": "Newton’s Second Law states that an object’s acceleration is directly proportional to the resultant force and inversely proportional to its mass."}, {"t": "f", "x": "F = ma"}, {"t": "p", "x": "F is resultant force in newtons, m is mass in kilograms and a is acceleration in m/s²."}, {"t": "p", "x": "For constant mass, increasing resultant force increases acceleration. For constant resultant force, increasing mass decreases acceleration."}, {"t": "p", "x": "Example: A 5 kg object experiences a resultant force of 20 N. a = F/m = 20/5 = 4 m/s²."}, {"t": "p", "x": "Example: A 1,200 kg car accelerates at 2 m/s². F = ma = 1,200 × 2 = 2,400 N."}, {"t": "p", "x": "Example: An object experiences 60 N and accelerates at 5 m/s². m = F/a = 60/5 = 12 kg."}]}, {"heading": "3.13 Newton’s Third Law", "blocks": [{"t": "p", "x": "Newton’s Third Law states that when one object exerts a force on a second object, the second object exerts an equal and opposite force on the first."}, {"t": "p", "x": "Action-reaction pairs are equal in magnitude, opposite in direction, simultaneous and act on different objects. They do not cancel each other on a single object because they act on separate objects."}, {"t": "p", "x": "Rocket propulsion: the rocket pushes exhaust gases backwards; the gases push the rocket forwards."}, {"t": "p", "x": "Walking: a foot pushes the ground backwards; the ground exerts a forward frictional force on the person."}, {"t": "p", "x": "Swimming: a swimmer pushes water backwards; the water pushes the swimmer forwards."}]}, {"heading": "3.14 Mass and weight", "blocks": [{"t": "p", "x": "Mass is the amount of matter in an object. It is a scalar measured in kilograms and does not change simply because the object moves to another planet. Weight is the gravitational force acting on an object. It is a vector measured in newtons and depends on gravitational field strength."}, {"t": "f", "x": "Weight: W = mg"}, {"t": "p", "x": "W is weight in newtons, m is mass in kilograms and g is gravitational field strength in N/kg. Near Earth’s surface, g is approximately 9.8 N/kg; some school questions use 10 N/kg."}, {"t": "p", "x": "Example: A person has mass 60 kg. Using g = 10 N/kg, weight = 60 × 10 = 600 N. On the Moon, the person’s mass is unchanged but their weight is lower because the Moon’s gravitational field is weaker."}]}, {"heading": "3.15 Free fall and terminal velocity", "blocks": [{"t": "p", "x": "A freely falling object is acted on by gravity alone. Near Earth’s surface, its acceleration is approximately 9.8 m/s² when air resistance is negligible. In a vacuum, objects of different masses fall with the same gravitational acceleration."}, {"t": "p", "x": "A feather falls more slowly than a stone in air because air resistance is large compared with the feather’s weight. In a vacuum, both fall at the same rate."}, {"t": "p", "x": "Terminal velocity is the constant speed reached when air resistance balances weight. Initially, weight is greater than drag, so the object accelerates downwards. As speed increases, drag increases and the resultant downward force decreases. At terminal velocity, drag equals weight, resultant force is zero and acceleration is zero; the object continues moving at constant velocity."}, {"t": "f", "x": "At terminal velocity: weight = air resistance; resultant force = 0"}]}, {"heading": "3.16 Momentum and conservation of momentum", "blocks": [{"t": "p", "x": "Momentum is the product of mass and velocity. It is a vector quantity."}, {"t": "f", "x": "Momentum: p = mv"}, {"t": "p", "x": "The SI unit is kg m/s. Example: a 2 kg ball moving at 6 m/s east has momentum 12 kg m/s east."}, {"t": "p", "x": "The law of conservation of momentum states that the total momentum of a system remains constant if no resultant external force acts on the system."}, {"t": "f", "x": "Total momentum before interaction = total momentum after interaction"}, {"t": "p", "x": "Example: Object A has mass 2 kg and velocity 4 m/s east. Object B has mass 2 kg and is stationary. They collide and move together. Initial momentum = (2 × 4) + (2 × 0) = 8 kg m/s east. Combined mass = 4 kg. Final velocity = 8 ÷ 4 = 2 m/s east."}]}, {"heading": "3.17 Impulse and change in momentum", "blocks": [{"t": "p", "x": "Impulse is the change in momentum of an object. It is equal to the average resultant force multiplied by the time interval."}, {"t": "f", "x": "Impulse: J = FΔt = Δp"}, {"t": "p", "x": "Impulse is measured in newton-seconds (Ns), equivalent to kg m/s. Example: an average force of 20 N acts for 0.5 s. Impulse = 20 × 0.5 = 10 Ns."}, {"t": "p", "x": "Airbags, seat belts and crumple zones increase the time over which momentum changes during a collision. For the same change in momentum, a longer collision time reduces the average force."}]}, {"heading": "3.18 Work, energy and power", "blocks": [{"t": "p", "x": "Work is done when a force causes displacement in the direction of the force."}, {"t": "f", "x": "Work done: W = Fs"}, {"t": "p", "x": "W is work in joules, F is force in newtons and s is displacement in metres in the direction of the force. A force perpendicular to displacement does no work in this basic calculation."}, {"t": "p", "x": "Example: A 30 N force moves a box 4 m in the direction of the force. Work done = 30 × 4 = 120 J."}, {"t": "h", "x": "Kinetic energy"}, {"t": "p", "x": "Kinetic energy is energy an object has because of its motion."}, {"t": "f", "x": "Kinetic energy: Ek = ½mv²"}, {"t": "p", "x": "Example: A 4 kg object moves at 5 m/s. Ek = ½ × 4 × 5² = 50 J. Because velocity is squared, doubling speed gives four times the kinetic energy if mass remains constant."}, {"t": "h", "x": "Gravitational potential energy"}, {"t": "p", "x": "Gravitational potential energy is energy stored because of an object’s position in a gravitational field, relative to a chosen reference level."}, {"t": "f", "x": "Gravitational potential energy: Ep = mgh"}, {"t": "p", "x": "m is mass, g is gravitational field strength and h is vertical height above the chosen reference level."}, {"t": "h", "x": "Power"}, {"t": "p", "x": "Power is the rate at which work is done or energy is transferred."}, {"t": "f", "x": "Power: P = W/t = E/t"}, {"t": "p", "x": "Power is measured in watts (W), where 1 W = 1 J/s."}]}, {"heading": "3.19 Criterion B: Investigating force and acceleration", "blocks": [{"t": "p", "x": "Example research question: How does the resultant force applied to a trolley affect its acceleration when the total mass remains constant?"}, {"t": "p", "x": "Independent variable: resultant force."}, {"t": "p", "x": "Dependent variable: acceleration."}, {"t": "p", "x": "Control variables: total mass of the trolley system, track surface, starting position, release method and measuring equipment."}, {"t": "p", "x": "Equipment may include a dynamics trolley, track, pulley, string, slotted masses, motion sensor or light gates, and a balance."}, {"t": "p", "x": "Method: Set up the trolley on a horizontal track and connect it to a hanging mass using a string over a pulley. Measure the total system mass. Apply a known pulling force and record acceleration. Repeat measurements, increase the pulling force while keeping total mass constant, calculate mean acceleration and plot force against acceleration."}, {"t": "p", "x": "Newton’s Second Law predicts F = ma. If mass is constant, force is directly proportional to acceleration."}]}, {"heading": "3.20 Criterion C: Processing and evaluating", "blocks": [{"t": "p", "x": "Present results in a labelled table with units. Repeat trials and calculate mean acceleration. Plot resultant force against acceleration, describe the trend, identify anomalies and discuss uncertainty. Possible limitations include friction between trolley and track, pulley friction, string stretch, limited sensor resolution and a track that is not level."}, {"t": "p", "x": "Improvements include using low-friction equipment, checking that the track is level, using electronic motion sensors, repeating measurements and maintaining consistent conditions."}]}, {"heading": "3.21 Criterion D: Science and society", "blocks": [{"t": "table", "head": ["Application", "Scientific principle", "Impact"], "rows": [["Seat belts", "Newton’s laws and impulse", "Help reduce passenger injury risk."], ["Airbags", "Impulse and momentum", "Increase collision time and reduce average force."], ["Parachutes", "Air resistance", "Increase drag and reduce falling speed."], ["Sports protection", "Momentum and energy transfer", "Can reduce injury risk."], ["Vehicle brakes", "Friction", "Allow vehicles to slow down."], ["Rocket propulsion", "Newton’s Third Law", "Enables space exploration."]]}, {"t": "p", "x": "High-level MYP responses evaluate both benefits and limitations. For example, vehicle safety systems can reduce injury risk but add manufacturing costs and may require replacement after certain collisions."}]}, {"heading": "3.22 Topic 3 checklist", "blocks": [{"t": "p", "x": "Distinguish distance and displacement."}, {"t": "p", "x": "Differentiate speed and velocity."}, {"t": "p", "x": "Calculate average speed, velocity and acceleration."}, {"t": "p", "x": "Convert between km/h and m/s."}, {"t": "p", "x": "Apply SUVAT equations when acceleration is constant."}, {"t": "p", "x": "Interpret distance-time and velocity-time graphs."}, {"t": "p", "x": "Calculate gradients and areas on motion graphs."}, {"t": "p", "x": "Identify contact and non-contact forces."}, {"t": "p", "x": "Calculate resultant forces and explain equilibrium."}, {"t": "p", "x": "State and apply Newton’s three laws."}, {"t": "p", "x": "Distinguish mass and weight and calculate W = mg."}, {"t": "p", "x": "Explain free fall and terminal velocity."}, {"t": "p", "x": "Calculate momentum and apply conservation of momentum."}, {"t": "p", "x": "Calculate impulse and explain safety applications."}, {"t": "p", "x": "Calculate work, kinetic energy, gravitational potential energy and power."}, {"t": "p", "x": "Design, process and evaluate a force investigation."}]}, {"heading": "Formula bank", "blocks": [{"t": "table", "head": ["Quantity", "Formula"], "rows": [["Average speed", "v = total distance ÷ total time"], ["Average velocity", "v = displacement ÷ time"], ["Acceleration", "a = (v − u)/t"], ["Resultant force", "F = ma"], ["Weight", "W = mg"], ["Momentum", "p = mv"], ["Impulse", "J = FΔt = Δp"], ["Work done", "W = Fs"], ["Kinetic energy", "Ek = ½mv²"], ["Gravitational potential energy", "Ep = mgh"], ["Power", "P = W/t = E/t"]]}, {"t": "h", "x": "SUVAT equations"}, {"t": "f", "x": "v = u + at"}, {"t": "f", "x": "s = ut + ½at²"}, {"t": "f", "x": "v² = u² + 2as"}, {"t": "f", "x": "s = ½(u + v)t"}, {"t": "f", "x": "s = vt − ½at²"}, {"t": "p", "x": "SUVAT equations apply to straight-line motion with constant acceleration. Check that all quantities are expressed in compatible SI units before substituting values."}]}]};

TOPICS.measurements.notes = NOTES_DATA.measurements;
TOPICS.movement.notes = NOTES_DATA.movement;
TOPICS.waves.notes = NOTES_DATA.waves;


/* 2. PROGRESS STORAGE */

function getProgress() {
    const defaultProgress = {
        done: {},
        points: 0,
        answered: 0,
        correct: 0,
        topics: {
            measurements: { answered: 0, correct: 0 },
            movement: { answered: 0, correct: 0 },
            waves: { answered: 0, correct: 0 }
        }
    };

    try {
        const saved = safeGet("physiquestProgress");

        if (!saved) {
            return defaultProgress;
        }

        const parsed = JSON.parse(saved);

        return {
            done: (parsed.done && typeof parsed.done === "object") ? parsed.done : {},
            points: Number(parsed.points) || 0,
            answered: Number(parsed.answered) || 0,
            correct: Number(parsed.correct) || 0,
            topics: {
                measurements: {
                    answered: Number(parsed.topics?.measurements?.answered) || 0,
                    correct: Number(parsed.topics?.measurements?.correct) || 0
                },
                movement: {
                    answered: Number(parsed.topics?.movement?.answered) || 0,
                    correct: Number(parsed.topics?.movement?.correct) || 0
                },
                waves: {
                    answered: Number(parsed.topics?.waves?.answered) || 0,
                    correct: Number(parsed.topics?.waves?.correct) || 0
                }
            }
        };
    } catch (error) {
        console.error("Could not read PhysiQuest progress.", error);
        return defaultProgress;
    }
}

function saveProgress(progress) {
    try {
        safeSet("physiquestProgress", JSON.stringify(progress));
    } catch (error) {
        console.error("Could not save PhysiQuest progress.", error);
    }
}

function updateHeaderPoints() {
    const progress = getProgress();
    const headerPoints = document.getElementById("headerPoints");
    const homePoints = document.getElementById("homePoints");

    if (headerPoints) {
        headerPoints.textContent = progress.points;
    }

    if (homePoints) {
        homePoints.textContent = progress.points;
    }
}


/* 3. MOBILE NAVIGATION */

function toggleMenu() {
    const navigation = document.getElementById("navigation");

    if (navigation) {
        const open = navigation.classList.toggle("open");
        const button = document.querySelector(".menu-toggle");
        if (button) button.setAttribute("aria-expanded", open);
    }
}


/* 3b. HIGHLIGHT THE CURRENT PAGE IN THE MENU */

function markActiveLink() {
    const file = location.pathname.split("/").pop() || "physihome.html";
    const group = ["physimeasurements.html", "physimovements.html", "physiwaves.html", "physiquiz.html", "physiwalkthrough.html"];
    const current = group.includes(file) ? "physitopics.html" : file;

    document.querySelectorAll(".navigation a").forEach(link => {
        if (link.getAttribute("href") === current) link.classList.add("active");
    });
}


/* 4. TOPIC PAGE */

function addRichText(parent, text) {
    text.split(/\*\*(.+?)\*\*/g).forEach((part, i) => {
        if (!part) return;
        if (i % 2) {
            const strong = document.createElement("strong");
            strong.textContent = part;
            parent.appendChild(strong);
        } else {
            parent.appendChild(document.createTextNode(part));
        }
    });
}

function renderBlocks(card, blocks) {
    blocks.forEach(block => {
        let el;

        if (block.t === "p") {
            el = document.createElement("p");
            addRichText(el, block.x);
            if (/^Example/i.test(block.x)) el.className = "example";
        } else if (block.t === "f") {
            el = document.createElement("p");
            el.className = "formula";
            el.textContent = block.x;
        } else if (block.t === "h") {
            el = document.createElement("h3");
            el.textContent = block.x;
        } else if (block.t === "ul" || block.t === "ol") {
            el = document.createElement(block.t);
            block.x.forEach(item => {
                const li = document.createElement("li");
                addRichText(li, item);
                el.appendChild(li);
            });
        } else if (block.t === "table") {
            el = document.createElement("div");
            el.className = "table-wrap";
            const table = document.createElement("table");
            const head = table.createTHead().insertRow();
            block.head.forEach(h => {
                const th = document.createElement("th");
                th.textContent = h;
                head.appendChild(th);
            });
            const body = table.createTBody();
            block.rows.forEach(r => {
                const row = body.insertRow();
                r.forEach(cell => { row.insertCell().textContent = cell; });
            });
            el.appendChild(table);
        }

        if (el) card.appendChild(el);
    });
}

function displayStudyPage() {
    const box = document.getElementById("studyContent");
    if (!box) return;

    const key = document.body.dataset.topic;
    const topic = TOPICS[key];

    if (!topic) {
        box.textContent = "Topic not found. Please return to Topics.";
        return;
    }

    safeSet("physiquestCurrentTopic", key);

    const contents = document.createElement("nav");
    contents.className = "study-section contents";
    contents.setAttribute("aria-label", "In this topic");
    const contentsTitle = document.createElement("h2");
    contentsTitle.textContent = "In this topic";
    const contentsList = document.createElement("ol");
    contents.append(contentsTitle, contentsList);
    box.appendChild(contents);

    topic.notes.forEach((note, i) => {
        const card = document.createElement("article");
        card.className = "study-section";
        card.id = "section-" + (i + 1);

        const heading = document.createElement("h2");
        heading.textContent = /^\d/.test(note.heading) ? note.heading : (i + 1) + ". " + note.heading;
        card.appendChild(heading);

        renderBlocks(card, note.blocks || [{ t: "p", x: note.text }]);
        box.appendChild(card);

        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#section-" + (i + 1);
        link.textContent = heading.textContent.replace(/^[\d.]+\s*/, "");
        item.appendChild(link);
        contentsList.appendChild(item);
    });

    const start = document.getElementById("startStudyQuiz");
    if (start) start.addEventListener("click", () => startTopicQuiz(key));
}

function getTopicFromURL() {
    const parameters = new URLSearchParams(window.location.search);
    const requested = parameters.get("topic");

    if (requested && TOPICS[requested]) {
        return requested;
    }

    const saved = safeGet("physiquestCurrentTopic");

    return saved && TOPICS[saved] ? saved : "measurements";
}

function displayTopicDetails() {
    const details = document.getElementById("topicDetails");

    if (!details) return;

    const parameters = new URLSearchParams(window.location.search);
    const topicKey = parameters.get("topic");

    if (!topicKey || !TOPICS[topicKey]) {
        details.hidden = true;
        return;
    }

    const topic = TOPICS[topicKey];

    safeSet("physiquestCurrentTopic", topicKey);

    document.getElementById("detailTitle").textContent = topic.title;

    const content = document.getElementById("detailContent");
    content.replaceChildren();

    topic.notes.forEach(note => {
        const article = document.createElement("article");
        article.className = "note-item";

        const heading = document.createElement("h3");
        heading.textContent = note.heading;

        const paragraph = document.createElement("p");
        paragraph.textContent = note.text;

        article.append(heading, paragraph);
        content.appendChild(article);
    });

    details.hidden = false;
}

function startTopicQuiz(topicKey) {
    const topic = topicKey || getTopicFromURL();

    if (!TOPICS[topic]) {
        console.error("Invalid PhysiQuest topic:", topic);
        window.location.href = "physitopics.html";
        return;
    }

    try {
        safeSet("physiquestCurrentTopic", topic);
    } catch (error) {
        console.error("Could not save the current topic.", error);
    }

    window.location.href =
        "physiquiz.html?topic=" + encodeURIComponent(topic);
}


/* 5. QUIZ LOGIC */

let currentQuestionIndex = 0;
let selectedAnswer = null;
let answerSubmitted = false;
let currentQuizTopic = "measurements";
let currentQuizQuestions = [];
let retryMode = false;

function loadQuiz() {
    if (!document.getElementById("questionText")) return;

    const parameters = new URLSearchParams(window.location.search);
    const requestedTopic = parameters.get("topic");

    currentQuizTopic =
        requestedTopic && TOPICS[requestedTopic]
            ? requestedTopic
            : getTopicFromURL();

    safeSet("physiquestCurrentTopic", currentQuizTopic);

    currentQuizQuestions = TOPICS[currentQuizTopic].questions;

    const requestedQuestion = Number(parameters.get("question"));

    retryMode = parameters.get("retry") === "1";

    currentQuestionIndex =
        Number.isInteger(requestedQuestion) &&
        requestedQuestion >= 0 &&
        requestedQuestion < currentQuizQuestions.length
            ? requestedQuestion
            : 0;

    document.getElementById("quizTitle").textContent =
        TOPICS[currentQuizTopic].title + " Quiz";

    displayQuestion();
}

function displayQuestion() {
    const question = currentQuizQuestions[currentQuestionIndex];

    if (!question) return;

    selectedAnswer = null;
    answerSubmitted = false;

    // Keep the place in the quiz if the page is reloaded or Back is used.
    try {
        history.replaceState(null, "", "?topic=" + currentQuizTopic +
            "&question=" + currentQuestionIndex + (retryMode ? "&retry=1" : ""));
    } catch (error) { /* not essential */ }

    const quizSubtitle = document.getElementById("quizSubtitle");

    if (quizSubtitle) {
        quizSubtitle.textContent = retryMode
            ? "Try the question again using what you learned."
            : "Choose the best answer for each question.";
    }

    document.getElementById("questionCounter").textContent =
        "Question " + (currentQuestionIndex + 1) +
        " of " + currentQuizQuestions.length;

    document.getElementById("questionText").textContent =
        question.question;

    document.getElementById("quizProgressBar").style.width =
        ((currentQuestionIndex + 1) /
            currentQuizQuestions.length * 100) + "%";

    const optionsContainer = document.getElementById("answerOptions");
    optionsContainer.replaceChildren();

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-option";
        button.textContent =
            String.fromCharCode(65 + index) + ". " + option;

        button.addEventListener("click", () => {
            if (answerSubmitted) return;

            selectedAnswer = index;

            optionsContainer.querySelectorAll(".answer-option")
                .forEach(item => item.classList.remove("selected"));

            button.classList.add("selected");
        });

        optionsContainer.appendChild(button);
    });

    const feedback = document.getElementById("answerFeedback");

    feedback.textContent = "";
    feedback.className = "feedback";

    document.getElementById("submitAnswer").hidden = false;
    document.getElementById("submitAnswer").disabled = false;
    document.getElementById("nextQuestion").hidden = true;

    updateHeaderPoints();
}

function submitQuizAnswer() {
    if (answerSubmitted) return;

    if (selectedAnswer === null) {
        const feedback = document.getElementById("answerFeedback");

        feedback.textContent = "Please select an answer first.";
        feedback.className = "feedback error";
        return;
    }

    const question = currentQuizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.answer;

    answerSubmitted = true;

    const progress = getProgress();

    // Each question scores once, on its first attempt ever.
    // Retries and repeat runs do not add points or statistics.
    const questionId = currentQuizTopic + ":" + currentQuestionIndex;
    const counts = !retryMode && !progress.done[questionId];

    if (counts) {
        progress.done[questionId] = true;
        progress.answered += 1;
        progress.topics[currentQuizTopic].answered += 1;

        if (isCorrect) {
            progress.correct += 1;
            progress.topics[currentQuizTopic].correct += 1;
            progress.points += 10;
        }

        saveProgress(progress);
    }

    updateHeaderPoints();

    if (isCorrect) {
        const feedback = document.getElementById("answerFeedback");

        feedback.textContent = counts
            ? "Correct! You earned 10 points."
            : retryMode
                ? "Correct! You have understood the method."
                : "Correct! No extra points, as you have answered this question before.";

        feedback.className = "feedback success";

        document.querySelectorAll(".answer-option")
            .forEach((button, i) => {
                button.disabled = true;
                if (i === question.answer) button.classList.add("correct");
            });

        document.getElementById("submitAnswer").hidden = true;
        document.getElementById("nextQuestion").hidden = false;

        return;
    }

    try {
        safeSet(
            "physiquestLastAttempt",
            JSON.stringify({
                topic: currentQuizTopic,
                questionIndex: currentQuestionIndex,
                selectedAnswer: selectedAnswer
            })
        );
    } catch (error) {
        console.error("Could not save the last answer.", error);
    }

    // Incorrect answers immediately open their walkthrough.
    window.location.href =
        "physiwalkthrough.html?topic=" +
        encodeURIComponent(currentQuizTopic) +
        "&question=" + currentQuestionIndex;
}

function nextQuizQuestion() {
    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        currentQuestionIndex += 1;
        retryMode = false;
        displayQuestion();
        return;
    }

    displayQuizCompletion();
}

function displayQuizCompletion() {
    const card = document.querySelector(".quiz-card");

    if (!card) return;

    card.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = "Quiz Complete";

    const message = document.createElement("p");
    message.textContent =
        "You have completed this quiz. Review your progress or practise again.";

    const progress = getProgress();

    const result = document.createElement("p");
    result.textContent = "Total PhysiQuest points: " + progress.points;

    const topicsLink = document.createElement("a");
    topicsLink.className = "button";
    topicsLink.href = "physitopics.html";
    topicsLink.textContent = "Back to Topics";

    const progressLink = document.createElement("a");
    progressLink.className = "button secondary";
    progressLink.href = "physiprogress.html";
    progressLink.textContent = "View Progress";

    const row = document.createElement("div");
    row.className = "button-row";
    row.append(topicsLink, progressLink);

    card.append(heading, message, result, row);
}


/* 6. WALKTHROUGH PAGE */

function displayWalkthrough() {
    const questionElement =
        document.getElementById("walkthroughQuestion");

    if (!questionElement) return;

    const parameters = new URLSearchParams(window.location.search);
    const topicKey = parameters.get("topic");
    const questionIndex = parameters.has("question")
        ? Number(parameters.get("question"))
        : -1;

    const topic = TOPICS[topicKey];

    if (
        !topic ||
        !Number.isInteger(questionIndex) ||
        !topic.questions[questionIndex]
    ) {
        questionElement.textContent = "No question selected";

        document.getElementById("keyIdea").textContent =
            "Return to Topics and start a quiz to view a walkthrough.";

        return;
    }

    const question = topic.questions[questionIndex];

    let lastAttempt = null;

    try {
        lastAttempt = JSON.parse(
            safeGet("physiquestLastAttempt")
        );
    } catch (error) {
        lastAttempt = null;
    }

    const hasMatchingAttempt =
        lastAttempt &&
        lastAttempt.topic === topicKey &&
        lastAttempt.questionIndex === questionIndex;

    const chosenIndex = hasMatchingAttempt
        ? lastAttempt.selectedAnswer
        : null;

    questionElement.textContent = question.question;

    document.getElementById("yourAnswer").textContent =
        chosenIndex !== null &&
        question.options[chosenIndex] !== undefined
            ? question.options[chosenIndex]
            : "Not available";

    document.getElementById("correctAnswer").textContent =
        question.options[question.answer];

    const stepsContainer =
        document.getElementById("walkthroughSteps");

    stepsContainer.replaceChildren();

    question.steps.forEach(step => {
        const item = document.createElement("li");
        item.textContent = step;
        stepsContainer.appendChild(item);
    });

    document.getElementById("keyIdea").textContent =
        question.keyIdea;

    safeSet("physiquestCurrentTopic", topicKey);
}

function retryQuizQuestion() {
    const parameters = new URLSearchParams(window.location.search);

    const topic = parameters.get("topic");
    const question = parameters.get("question");

    if (!TOPICS[topic] || !TOPICS[topic].questions[Number(question)]) {
        window.location.href = "physitopics.html";
        return;
    }

    window.location.href =
        "physiquiz.html?topic=" + encodeURIComponent(topic) +
        "&question=" + encodeURIComponent(question) +
        "&retry=1";
}


/* 7. PROGRESS PAGE */

function displayProgress() {
    if (!document.getElementById("totalPoints")) return;

    const progress = getProgress();

    document.getElementById("totalPoints").textContent =
        progress.points;

    document.getElementById("totalAnswered").textContent =
        progress.answered;

    document.getElementById("totalCorrect").textContent =
        progress.correct;

    const overallAccuracy = progress.answered > 0
        ? Math.round(progress.correct / progress.answered * 100)
        : 0;

    document.getElementById("overallAccuracy").textContent =
        overallAccuracy + "%";

    const displayItems = [
        {
            key: "measurements",
            accuracy: "measurementsAccuracy",
            bar: "measurementsBar",
            stats: "measurementsStats"
        },
        {
            key: "movement",
            accuracy: "movementAccuracy",
            bar: "movementBar",
            stats: "movementStats"
        },
        {
            key: "waves",
            accuracy: "wavesAccuracy",
            bar: "wavesBar",
            stats: "wavesStats"
        }
    ];

    displayItems.forEach(item => {
        const stats = progress.topics[item.key];

        const accuracy = stats.answered > 0
            ? Math.round(stats.correct / stats.answered * 100)
            : 0;

        document.getElementById(item.accuracy).textContent =
            accuracy + "%";

        document.getElementById(item.bar).style.width =
            accuracy + "%";

        document.getElementById(item.stats).textContent =
            stats.answered + " questions answered; " +
            stats.correct + " correct.";
    });
}

function resetProgress() {
    const confirmed = window.confirm(
        "Are you sure you want to reset all PhysiQuest points and progress?"
    );

    if (!confirmed) return;

    safeRemove("physiquestProgress");
    safeRemove("physiquestLastAttempt");

    updateHeaderPoints();
    displayProgress();

    const message = document.getElementById("resetMessage");

    if (message) {
        message.textContent = "Your progress has been reset.";
        message.className = "feedback success";
    }
}


/* 8. INITIALISE THE CURRENT PAGE */

document.addEventListener("DOMContentLoaded", () => {
    markActiveLink();
    displayStudyPage();
    updateHeaderPoints();
    displayTopicDetails();
    loadQuiz();
    displayWalkthrough();
    displayProgress();
});



/* 9. SAFE STORAGE (never crashes if storage is blocked) */

function safeGet(key) {
    try { return localStorage.getItem(key); } catch (error) { return null; }
}

function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (error) { /* ignore */ }
}

function safeRemove(key) {
    try { localStorage.removeItem(key); } catch (error) { /* ignore */ }
}
/* 10. LOCAL DEMO AUTHENTICATION */

function getPhysiQuestAccounts() {
    try {
        return JSON.parse(safeGet("physiquestAccounts") || "{}");
    } catch (error) {
        return {};
    }
}

async function hashPhysiQuestPassword(password) {
    if (!window.crypto || !window.crypto.subtle) {
        throw new Error("Secure password hashing is unavailable. Open the site using HTTPS or a local development server.");
    }

    const data = new TextEncoder().encode(password);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);

    return Array.from(new Uint8Array(hashBuffer))
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}

function initialiseAuthentication() {
    const form = document.getElementById("authForm");

    // Do nothing on pages that do not contain the sign-in form.
    if (!form) return;

    const usernameInput = document.getElementById("authName");
    const passwordInput = document.getElementById("authPass");
    const confirmInput = document.getElementById("authPass2");
    const confirmRow = document.getElementById("confirmRow");
    const message = document.getElementById("authMsg");
    const submitButton = document.getElementById("authSubmit");
    const signInTab = document.getElementById("tabIn");
    const signUpTab = document.getElementById("tabUp");

    if (
        !usernameInput || !passwordInput || !confirmInput ||
        !confirmRow || !message || !submitButton ||
        !signInTab || !signUpTab
    ) {
        console.error("The PhysiQuest sign-in page is missing one or more required elements.");
        return;
    }

    let creatingAccount = false;

    function showMessage(text, type) {
        message.textContent = text;
        message.className = type === "success"
            ? "feedback success"
            : "feedback error";
    }

    function setMode(createMode) {
        creatingAccount = createMode;

        signInTab.classList.toggle("on", !creatingAccount);
        signUpTab.classList.toggle("on", creatingAccount);

        signInTab.setAttribute("aria-pressed", String(!creatingAccount));
        signUpTab.setAttribute("aria-pressed", String(creatingAccount));

        confirmRow.hidden = !creatingAccount;
        confirmInput.required = creatingAccount;

        passwordInput.autocomplete = creatingAccount
            ? "new-password"
            : "current-password";

        submitButton.textContent = creatingAccount
            ? "Create account"
            : "Sign in";

        showMessage("", "error");
    }

    signInTab.addEventListener("click", () => setMode(false));
    signUpTab.addEventListener("click", () => setMode(true));

    form.addEventListener("submit", async event => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmInput.value;

        if (!/^[A-Za-z0-9_-]{3,20}$/.test(username)) {
            showMessage(
                "Use a username with 3–20 letters, numbers, underscores or hyphens.",
                "error"
            );
            usernameInput.focus();
            return;
        }

        if (password.length < 6) {
            showMessage("Your password must contain at least 6 characters.", "error");
            passwordInput.focus();
            return;
        }

        if (creatingAccount && password !== confirmPassword) {
            showMessage("The passwords do not match.", "error");
            confirmInput.focus();
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = creatingAccount
            ? "Creating account..."
            : "Signing in...";

        try {
            const accounts = getPhysiQuestAccounts();
            const accountKey = username.toLowerCase();

            if (creatingAccount) {
                if (accounts[accountKey]) {
                    showMessage("That username already exists. Choose another one.", "error");
                    return;
                }

                const passwordHash = await hashPhysiQuestPassword(password);

                accounts[accountKey] = {
                    username: username,
                    passwordHash: passwordHash
                };

                safeSet("physiquestAccounts", JSON.stringify(accounts));

                // Check that the account was actually saved.
                const savedAccounts = getPhysiQuestAccounts();

                if (!savedAccounts[accountKey]) {
                    throw new Error("The account could not be saved in this browser.");
                }

            } else {
                const account = accounts[accountKey];

                if (!account) {
                    showMessage("No account was found with that username.", "error");
                    return;
                }

                const passwordHash = await hashPhysiQuestPassword(password);

                if (account.passwordHash !== passwordHash) {
                    showMessage("Incorrect password. Check your details and try again.", "error");
                    return;
                }
            }

            safeSet("physiquestCurrentUser", username);
            window.location.href = "physihome.html";

        } catch (error) {
            console.error("PhysiQuest authentication error:", error);

            showMessage(
                error.message || "Something went wrong. Please try again.",
                "error"
            );

        } finally {
            submitButton.disabled = false;
            submitButton.textContent = creatingAccount
                ? "Create account"
                : "Sign in";
        }
    });

    setMode(false);
}

document.addEventListener("DOMContentLoaded", initialiseAuthentication);
/* USER ACCOUNT DISPLAY AND LOGOUT */

function displayUserAccount() {
    const username = safeGet("physiquestCurrentUser");

    const nameDisplay = document.getElementById("loggedInName");
    const logoutButton = document.getElementById("logoutButton");

    if (!nameDisplay || !logoutButton) return;

    if (username) {
        nameDisplay.textContent = "Welcome, " + username + "!";
    } else {
        nameDisplay.textContent = "Not signed in";
    }

    logoutButton.addEventListener("click", function () {
        const confirmLogout = confirm("Are you sure you want to log out?");

        if (confirmLogout) {
            safeRemove("physiquestCurrentUser");

            // Replace this with the actual filename of your login page.
            window.location.href = "index.html";
        }
    });
}

document.addEventListener("DOMContentLoaded", displayUserAccount);