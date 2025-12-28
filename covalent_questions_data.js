// Covalent Bonding Questions Data Structure
// Topic 3B: Objectives 3.10 - 3.15
const questionsData = [
    // Section 1: Covalent Bonding - Definition & Evidence
    {
        section: "Section 1: Covalent Bonding - Definition & Evidence",
        sectionInfo: "Objectives 3.10: Strong electrostatic attraction between two nuclei and shared pair of electrons. Evidence from physical properties of giant atomic structures and electron density maps.",
        questions: [
            {
                id: 1,
                bloom: "Understanding",
                question: "Define covalent bonding.",
                answer: "The <strong>strong electrostatic attraction</strong> between two nuclei and the <strong>shared pair of electrons</strong> between them.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 2,
                bloom: "Understanding",
                question: "What does an electron density map of a simple covalent molecule (e.g., Cl₂) show?",
                answer: "<ul><li>Electron density is <strong>continuous</strong> between the two nuclei.</li><li>Shows electrons are <strong>shared</strong> (not transferred).</li><li>Proves covalent bonding exists.</li></ul>",
                maxScore: 5,
                diagram: "electronDensityCovalent"
            },
            {
                id: 3,
                bloom: "Analyzing",
                question: "Compare the electron density maps of NaCl (ionic) and Cl₂ (covalent). What do they prove?",
                answer: "<ul><li><strong>NaCl:</strong> Electron density falls to zero between nuclei → electrons transferred → ionic bonding.</li><li><strong>Cl₂:</strong> Electron density continuous between nuclei → electrons shared → covalent bonding.</li></ul>",
                maxScore: 5,
                diagram: "electronDensityComparison"
            },
            {
                id: 4,
                bloom: "Understanding",
                question: "Why do giant covalent structures (e.g., diamond, graphite) have very high melting points?",
                answer: "<ul><li>Strong covalent bonds extend throughout the entire structure.</li><li>Large amount of energy needed to break many strong bonds.</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 5,
                bloom: "Remembering",
                question: "<strong>(MCQ)</strong> Which observation provides evidence for covalent bonding?<br>A. High electrical conductivity in solid state<br>B. Electron density continuous between nuclei<br>C. Electron density zero between nuclei<br>D. Migration of colored ions in solution",
                answer: "<strong>Answer: B</strong><br>Continuous electron density between nuclei proves electrons are shared (covalent), not transferred (ionic).",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    
    // Section 2: Dot-and-Cross Diagrams - Single, Double, Triple Bonds
    {
        section: "Section 2: Dot-and-Cross Diagrams - Single, Double & Triple Bonds",
        sectionInfo: "Objective 3.11(I): Draw dot-and-cross diagrams for molecules with single, double, and triple bonds.",
        questions: [
            {
                id: 6,
                bloom: "Applying",
                question: "Draw a dot-and-cross diagram for hydrogen chloride (HCl).",
                answer: "<ul><li>H: 1 electron (dot)</li><li>Cl: 7 electrons (6 crosses, 1 dot shared with H)</li><li>Show single covalent bond (shared pair)</li></ul>",
                maxScore: 5,
                diagram: "dotCrossHCl"
            },
            {
                id: 7,
                bloom: "Applying",
                question: "Draw a dot-and-cross diagram for water (H₂O).",
                answer: "<ul><li>O: 6 outer electrons</li><li>Two H atoms each share 1 electron with O</li><li>O has 2 bonding pairs and 2 lone pairs</li><li>Show only outer shell electrons</li></ul>",
                maxScore: 5,
                diagram: "dotCrossH2O"
            },
            {
                id: 8,
                bloom: "Applying",
                question: "Draw a dot-and-cross diagram for oxygen molecule (O₂) showing the double bond.",
                answer: "<ul><li>Each O: 6 outer electrons</li><li>Two pairs of electrons shared (double bond)</li><li>Each O has 2 bonding pairs and 2 lone pairs</li></ul>",
                maxScore: 5,
                diagram: "dotCrossO2"
            },
            {
                id: 9,
                bloom: "Applying",
                question: "Draw a dot-and-cross diagram for nitrogen molecule (N₂) showing the triple bond.",
                answer: "<ul><li>Each N: 5 outer electrons</li><li>Three pairs of electrons shared (triple bond)</li><li>Each N has 3 bonding pairs and 1 lone pair</li></ul>",
                maxScore: 5,
                diagram: "dotCrossN2"
            },
            {
                id: 10,
                bloom: "Applying",
                question: "Draw a dot-and-cross diagram for carbon dioxide (CO₂).",
                answer: "<ul><li>C: 4 outer electrons</li><li>Each O: 6 outer electrons</li><li>Two double bonds: C=O=C (linear)</li><li>Each O has 2 bonding pairs and 2 lone pairs</li></ul>",
                maxScore: 5,
                diagram: "dotCrossCO2"
            },
            {
                id: 11,
                bloom: "Applying",
                question: "Draw a dot-and-cross diagram for methane (CH₄).",
                answer: "<ul><li>C: 4 outer electrons</li><li>Four H atoms each share 1 electron with C</li><li>Four single C-H bonds</li><li>Tetrahedral shape (show in 2D)</li></ul>",
                maxScore: 5,
                diagram: "dotCrossCH4"
            },
            {
                id: 12,
                bloom: "Remembering",
                question: "<strong>FAQ:</strong> Do we include inner shell electrons? <strong>No</strong> – only show outer (valence) shell electrons in dot-and-cross diagrams.<br><br><strong>(MCQ)</strong> How many bonding pairs are in N₂?<br>A. 1<br>B. 2<br>C. 3<br>D. 4",
                answer: "<strong>Answer: C</strong><br>N₂ has a triple bond = 3 bonding pairs (6 shared electrons).",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    
    // Section 3: Dative Covalent (Coordinate) Bonds
    {
        section: "Section 3: Dative Covalent (Coordinate) Bonds",
        sectionInfo: "Objective 3.11(II): Draw dot-and-cross diagrams for species with dative covalent bonds, including Al₂Cl₆ and NH₄⁺.",
        questions: [
            {
                id: 13,
                bloom: "Understanding",
                question: "Define dative covalent bonding (coordinate bonding).",
                answer: "A covalent bond where <strong>both electrons in the shared pair come from the same atom</strong> (the donor atom). Shown with an arrow (→) from donor to acceptor.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 14,
                bloom: "Applying",
                question: "Draw a dot-and-cross diagram for the ammonium ion (NH₄⁺).",
                answer: "<ul><li>NH₃: N has a lone pair</li><li>H⁺: No electrons (empty orbital)</li><li>N donates its lone pair to H⁺ → dative bond (N→H)</li><li>Show all four N-H bonds (3 normal + 1 dative)</li><li>Overall charge: +1</li></ul>",
                maxScore: 5,
                diagram: "dotCrossNH4"
            },
            {
                id: 15,
                bloom: "Applying",
                question: "Draw a dot-and-cross diagram for aluminium chloride dimer (Al₂Cl₆).",
                answer: "<ul><li>Two AlCl₃ molecules combine</li><li>Each Cl bridge donates a lone pair to the opposite Al</li><li>Two dative bonds: Cl→Al (shown with arrows)</li><li>Al originally has 6 electrons (incomplete octet), completes to 8 in dimer</li></ul>",
                maxScore: 5,
                diagram: "dotCrossAl2Cl6"
            },
            {
                id: 16,
                bloom: "Applying",
                question: "Draw a dot-and-cross diagram showing the formation of H₃O⁺ (hydronium ion).",
                answer: "<ul><li>H₂O: O has 2 lone pairs</li><li>H⁺: No electrons</li><li>O donates lone pair to H⁺ → dative bond (O→H)</li><li>Overall charge: +1</li></ul>",
                maxScore: 5,
                diagram: "dotCrossH3O"
            },
            {
                id: 17,
                bloom: "Understanding",
                question: "Once formed, how does a dative covalent bond differ from a normal covalent bond?",
                answer: "<strong>It doesn't differ.</strong> Once formed, a dative bond is identical to a normal covalent bond in strength and properties. The difference is only in <em>how</em> it forms.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 18,
                bloom: "Evaluating",
                question: "<strong>(Structured)</strong> Explain why AlCl₃ can act as a Lewis acid.",
                answer: "<ul><li>Al in AlCl₃ has only 6 electrons in outer shell (incomplete octet)</li><li>Can accept a lone pair from a donor (e.g., Cl⁻ or another molecule)</li><li>Lewis acid = electron pair acceptor</li></ul>",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    
    // Section 4: Giant Covalent Structures - Diamond, Graphite, Graphene
    {
        section: "Section 4: Giant Covalent Structures - Diamond, Graphite & Graphene",
        sectionInfo: "Objective 3.12: Describe structures of diamond, graphite, graphene and discuss their applications.",
        questions: [
            {
                id: 19,
                bloom: "Understanding",
                question: "Describe the structure of diamond.",
                answer: "<ul><li>Giant covalent lattice</li><li>Each carbon bonded to 4 others (tetrahedral arrangement)</li><li>Very strong C-C bonds extend throughout structure</li><li>No free electrons</li></ul>",
                maxScore: 5,
                diagram: "diamondStructure"
            },
            {
                id: 20,
                bloom: "Applying",
                question: "Explain the properties of diamond based on its structure.",
                answer: "<ul><li><strong>Very hard:</strong> Many strong covalent bonds in 3D network</li><li><strong>High melting point:</strong> Lots of energy to break strong bonds</li><li><strong>Does not conduct electricity:</strong> No free electrons/ions</li><li><strong>Transparent:</strong> Regular structure allows light to pass</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 21,
                bloom: "Understanding",
                question: "Describe the structure of graphite.",
                answer: "<ul><li>Giant covalent lattice in layers</li><li>Each C bonded to 3 others (trigonal planar)</li><li>Layers of hexagonal rings</li><li>Weak van der Waals forces between layers</li><li>Delocalized electrons (one per carbon) move freely between layers</li></ul>",
                maxScore: 5,
                diagram: "graphiteStructure"
            },
            {
                id: 22,
                bloom: "Applying",
                question: "Explain the properties of graphite based on its structure.",
                answer: "<ul><li><strong>Soft/slippery:</strong> Weak forces between layers allow them to slide</li><li><strong>Conducts electricity:</strong> Delocalized electrons free to move</li><li><strong>High melting point:</strong> Strong C-C bonds within layers</li><li><strong>Opaque/black:</strong> Electrons absorb visible light</li></ul>",
                maxScore: 5,
                diagram: null
            },
            ,
            {
                id: 23,
                bloom: "Evaluating",
                question: "Discuss applications of diamond.",
                answer: "<ul><li><strong>Cutting tools:</strong> Extremely hard</li><li><strong>Drill bits:</strong> Can cut through rock</li><li><strong>Jewelry:</strong> Beautiful, transparent, durable</li><li><strong>Heat sinks:</strong> High thermal conductivity</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 24,
                bloom: "Evaluating",
                question: "Discuss applications of graphite.",
                answer: "<ul><li><strong>Lubricant:</strong> Layers slide easily</li><li><strong>Pencils:</strong> Layers transfer to paper</li><li><strong>Electrodes:</strong> Conducts electricity, chemically inert</li><li><strong>Moderator in nuclear reactors:</strong> Slows neutrons</li></ul>",
                maxScore: 5,
                diagram: null
            },
            ,
            {
                id: 25,
                bloom: "Analyzing",
                question: "<strong>(Structured)</strong> Explain why graphite conducts electricity but diamond does not, even though both are pure carbon.",
                answer: "<ul><li>Both have strong C-C covalent bonds</li><li><strong>Diamond:</strong> Each C uses all 4 outer electrons in bonds → no free electrons</li><li><strong>Graphite:</strong> Each C uses only 3 electrons in bonds → 1 electron delocalized per carbon → free to move and carry charge</li></ul>",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    
    // Section 5: Electronegativity & Bond Polarity
    {
        section: "Section 5: Electronegativity & Bond Polarity",
        sectionInfo: "Objectives 3.13, 3.14: Electronegativity definition, continuum of bonding (ionic ↔ covalent), bond polarity based on electronegativity difference.",
        questions: [
            {
                id: 26,
                bloom: "Understanding",
                question: "Define electronegativity.",
                answer: "The <strong>ability of an atom</strong> to <strong>attract the bonding pair of electrons</strong> in a covalent bond.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 27,
                bloom: "Remembering",
                question: "Which element is the most electronegative?",
                answer: "<strong>Fluorine (F)</strong> – has the highest electronegativity value (4.0 on Pauling scale).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 28,
                bloom: "Understanding",
                question: "Describe the trend in electronegativity across a period.",
                answer: "Electronegativity <strong>increases</strong> across a period (left to right).<br><strong>Reason:</strong> Nuclear charge increases, atomic radius decreases → stronger attraction for bonding electrons.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 29,
                bloom: "Understanding",
                question: "Describe the trend in electronegativity down a group.",
                answer: "Electronegativity <strong>decreases</strong> down a group.<br><strong>Reason:</strong> Atomic radius increases, more shielding → weaker attraction for bonding electrons despite increased nuclear charge.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 30,
                bloom: "Understanding",
                question: "What is a polar covalent bond?",
                answer: "A covalent bond where electrons are <strong>shared unequally</strong> due to a difference in electronegativity, creating partial charges (δ+ and δ−).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 31,
                bloom: "Applying",
                question: "Explain the bonding continuum from ionic to covalent using electronegativity difference.",
                answer: "<ul><li><strong>Large difference (>1.8):</strong> Ionic bonding (electrons transferred)</li><li><strong>Moderate difference (0.5-1.8):</strong> Polar covalent (unequal sharing)</li><li><strong>Small/zero difference (<0.5):</strong> Pure covalent (equal sharing)</li><li>Bonding is a <strong>continuum</strong>, not discrete categories</li></ul>",
                maxScore: 5,
                diagram: "bondingContinuum"
            },
            {
                id: 32,
                bloom: "Applying",
                question: "Predict the bond polarity in HCl. (Electronegativity: H = 2.1, Cl = 3.0)",
                answer: "<ul><li>Difference = 3.0 − 2.1 = 0.9</li><li><strong>Polar covalent bond</strong></li><li>Cl is more electronegative → δ−</li><li>H is less electronegative → δ+</li><li>H<sup>δ+</sup>—Cl<sup>δ−</sup></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 33,
                bloom: "Applying",
                question: "Is the Cl-Cl bond in Cl₂ polar? Explain.",
                answer: "<strong>No.</strong> Both atoms are identical (same electronegativity), so electrons are shared equally. <strong>Non-polar covalent bond.</strong>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 34,
                bloom: "Remembering",
                question: "<strong>FAQ:</strong> Does a polar bond always mean a polar molecule? <strong>No</strong> – molecular shape matters (see next section).<br><br><strong>(MCQ)</strong> Which bond is most polar?<br>A. C-H<br>B. N-H<br>C. O-H<br>D. F-H",
                answer: "<strong>Answer: D</strong><br>F has the highest electronegativity, so F-H has the largest electronegativity difference and is most polar.",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    
    // Section 6: Polar Bonds vs Polar Molecules
    {
        section: "Section 6: Polar Bonds vs Polar Molecules",
        sectionInfo: "Objective 3.15: Distinguish between polar bonds and polar molecules. Predict molecular polarity based on shape and symmetry.",
        questions: [
            {
                id: 35,
                bloom: "Understanding",
                question: "Distinguish between a polar bond and a polar molecule.",
                answer: "<ul><li><strong>Polar bond:</strong> Individual bond with unequal electron sharing (δ+ and δ−)</li><li><strong>Polar molecule:</strong> Molecule with an overall dipole moment (asymmetric distribution of charge)</li><li>A molecule can have polar bonds but be non-polar overall if symmetry cancels dipoles</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 36,
                bloom: "Applying",
                question: "Is H₂O a polar molecule? Explain using its shape.",
                answer: "<ul><li>H₂O has two polar O-H bonds</li><li>Bent shape (due to 2 lone pairs on O)</li><li>Dipoles do NOT cancel → net dipole moment</li><li><strong>Polar molecule</strong></li><li>O<sup>δ−</sup>, H<sup>δ+</sup></li></ul>",
                maxScore: 5,
                diagram: "polarH2O"
            },
            ,
            {
                id: 37,
                bloom: "Applying",
                question: "Is CCl₄ (tetrachloromethane) a polar molecule? Explain.",
                answer: "<ul><li>CCl₄ has four polar C-Cl bonds</li><li>Tetrahedral shape (symmetric)</li><li>All dipoles cancel due to symmetry</li><li><strong>Non-polar molecule</strong></li></ul>",
                maxScore: 5,
                diagram: "nonpolarCCl4"
            },
            {
                id: 38,
                bloom: "Applying",
                question: "Is NH₃ (ammonia) a polar molecule? Explain.",
                answer: "<ul><li>NH₃ has three polar N-H bonds</li><li>Trigonal pyramidal shape (due to 1 lone pair on N)</li><li>Asymmetric → dipoles do NOT cancel</li><li><strong>Polar molecule</strong></li><li>N<sup>δ−</sup>, H<sup>δ+</sup></li></ul>",
                maxScore: 5,
                diagram: "polarNH3"
            },
            {
                id: 39,
                bloom: "Applying",
                question: "Is CH₄ (methane) a polar molecule? Explain.",
                answer: "<ul><li>CH₄ has four slightly polar C-H bonds (small electronegativity difference)</li><li>Tetrahedral shape (symmetric)</li><li>All dipoles cancel</li><li><strong>Non-polar molecule</strong></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 40,
                bloom: "Analyzing",
                question: "<strong>(Structured)</strong> Predict whether CHCl₃ (chloroform) is polar or non-polar.",
                answer: "<ul><li>One C-H bond (slightly polar)</li><li>Three C-Cl bonds (polar)</li><li>Tetrahedral shape but NOT symmetric (different atoms)</li><li>Dipoles do NOT cancel</li><li><strong>Polar molecule</strong></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 41,
                bloom: "Remembering",
                question: "<strong>FAQ:</strong> Why does symmetry matter? Dipoles are vectors – they have direction. Symmetric molecules have dipoles pointing in opposite directions that cancel out.<br><br><strong>(MCQ)</strong> Which molecule is polar?<br>A. CO₂<br>B. CCl₄<br>C. H₂O<br>D. BF₃",
                answer: "<strong>Answer: C</strong><br>H₂O is bent (asymmetric) → polar. CO₂ is linear, CCl₄ and BF₃ are symmetric → all non-polar.",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    
    // Section 7: Practical - Testing Polarity with Electrostatic Force
    {
        section: "Section 7: Practical - Testing Polarity with Electrostatic Force",
        sectionInfo: "Suggested Practical: Determine effect of electrostatic force on jets of liquids (water, ethanol, cyclohexane) to determine whether molecules are polar or non-polar.",
        questions: [
            {
                id: 42,
                bloom: "Applying",
                question: "Describe the practical method to test if a liquid contains polar molecules.",
                answer: "<ul><li>Create a thin stream/jet of the liquid from a burette</li><li>Bring a charged rod (e.g., rubbed plastic or glass) close to the stream</li><li><strong>Polar:</strong> Stream bends toward the rod</li><li><strong>Non-polar:</strong> Stream unaffected</li></ul>",
                maxScore: 5,
                diagram: "polarityTest"
            },
            {
                id: 43,
                bloom: "Understanding",
                question: "Explain why a stream of polar liquid bends when a charged rod is brought near.",
                answer: "<ul><li>Polar molecules have permanent dipoles (δ+ and δ−)</li><li>Charged rod attracts the opposite partial charge</li><li>Molecules align/rotate toward the rod</li><li>Bulk liquid stream bends toward the rod</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 44,
                bloom: "Applying",
                question: "Predict the result when a charged rod is brought near a stream of water.",
                answer: "<strong>Stream bends toward the rod.</strong><br>Water (H₂O) is a polar molecule with a strong dipole moment.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 45,
                bloom: "Applying",
                question: "Predict the result when a charged rod is brought near a stream of ethanol (C₂H₅OH).",
                answer: "<strong>Stream bends toward the rod.</strong><br>Ethanol is polar due to the O-H bond (similar to water).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 46,
                bloom: "Applying",
                question: "Predict the result when a charged rod is brought near a stream of cyclohexane (C₆H₁₂).",
                answer: "<strong>Stream is NOT affected (or bends very slightly).</strong><br>Cyclohexane is non-polar (only C-C and C-H bonds, symmetric molecule).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 47,
                bloom: "Evaluating",
                question: "<strong>(Structured)</strong> A student tests three unknown liquids A, B, and C. Liquid A's stream bends strongly, B bends slightly, C does not bend. What can you conclude about the polarity of each liquid?",
                answer: "<ul><li><strong>Liquid A:</strong> Highly polar (e.g., water, ethanol)</li><li><strong>Liquid B:</strong> Slightly polar or weakly polar (e.g., dichloromethane)</li><li><strong>Liquid C:</strong> Non-polar (e.g., hexane, cyclohexane, CCl₄)</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 48,
                bloom: "Analyzing",
                question: "Why is it important to use a thin stream rather than a thick stream in this practical?",
                answer: "<ul><li>Thin stream has less mass/inertia</li><li>Easier to deflect by weak electrostatic forces</li><li>Makes the effect more visible and measurable</li></ul>",
                maxScore: 5,
                diagram: null
            }
        ]
    },

    // Section 8: Shapes of Molecules (VSEPR / Electron Pair Repulsion)
    {
        section: "Section 8: Shapes of Molecules - VSEPR Theory",
        sectionInfo: "Objectives 3.16–3.19: Electron pair repulsion (VSEPR), bond length & bond angle definitions, explain shapes/angles for key molecules and ions, and predict shapes/angles for analogous species.",
        questions: [
            {
                id: 49,
                bloom: "Understanding",
                question: "State the key idea of electron pair repulsion theory (VSEPR).",
                answer: "Electron pairs (bonding pairs and lone pairs) around a central atom <strong>repel</strong> each other and arrange themselves as far apart as possible to <strong>minimise repulsion</strong>, giving the molecule/ion its shape.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 50,
                bloom: "Understanding",
                question: "In VSEPR, which repulsions are strongest?",
                answer: "<strong>Lone pair–lone pair</strong> > <strong>lone pair–bond pair</strong> > <strong>bond pair–bond pair</strong>. Lone pairs repel more because their electron density is closer to the central atom and not shared between two nuclei.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 51,
                bloom: "Understanding",
                question: "Define the term <strong>bond length</strong>.",
                answer: "The <strong>distance between the nuclei</strong> of two bonded atoms (usually measured in pm).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 52,
                bloom: "Understanding",
                question: "Define the term <strong>bond angle</strong>.",
                answer: "The <strong>angle between two bonds</strong> around a central atom (measured between the lines joining the nuclei).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 53,
                bloom: "Applying",
                question: "State the shape and bond angle of BeCl₂.",
                answer: "<ul><li>Central Be has 2 bonding pairs, 0 lone pairs</li><li><strong>Shape:</strong> linear</li><li><strong>Bond angle:</strong> 180°</li></ul>",
                maxScore: 5,
                diagram: "shapeBeCl2"
            },
            ,
            ,
            {
                id: 54,
                bloom: "Applying",
                question: "State the shape and bond angle of NH₃ and explain why it is not 109.5°.",
                answer: "<ul><li>N has 3 bonding pairs and 1 lone pair</li><li>Electron pair geometry: tetrahedral</li><li><strong>Molecular shape:</strong> trigonal pyramidal</li><li><strong>Bond angle:</strong> ~107°</li><li>Lone pair–bond pair repulsion is stronger than bond pair–bond pair, compressing the angle from 109.5°</li></ul>",
                maxScore: 5,
                diagram: "shapeNH3"
            },
            ,
            {
                id: 55,
                bloom: "Applying",
                question: "State the shape and bond angle of H₂O and explain why it is smaller than in NH₃.",
                answer: "<ul><li>O has 2 bonding pairs and 2 lone pairs</li><li>Electron pair geometry: tetrahedral</li><li><strong>Molecular shape:</strong> bent (V-shaped)</li><li><strong>Bond angle:</strong> ~104.5°</li><li>Two lone pairs give more repulsion than one lone pair in NH₃, compressing the bond angle further</li></ul>",
                maxScore: 5,
                diagram: "shapeH2O"
            },
            ,
            {
                id: 56,
                bloom: "Applying",
                question: "State the shape and bond angles in gaseous PCl₅.",
                answer: "<ul><li>P has 5 bonding pairs, 0 lone pairs</li><li><strong>Shape:</strong> trigonal bipyramidal</li><li><strong>Bond angles:</strong> 120° (equatorial), 90° (axial–equatorial), 180° (axial–axial)</li></ul>",
                maxScore: 5,
                diagram: "shapePCl5"
            },
            {
                id: 57,
                bloom: "Applying",
                question: "State the shape and bond angles in SF₆.",
                answer: "<ul><li>S has 6 bonding pairs, 0 lone pairs</li><li><strong>Shape:</strong> octahedral</li><li><strong>Bond angles:</strong> 90° and 180°</li></ul>",
                maxScore: 5,
                diagram: "shapeSF6"
            },
{
                id: 58,
                bloom: "Analyzing",
                question: "Explain why a double bond counts as one region of electron density in VSEPR.",
                answer: "In VSEPR we count <strong>regions of electron density</strong>. A double bond contains 2 shared pairs but they occupy the <strong>same region</strong> between the same two atoms, so it behaves as one region for repulsion/shape prediction.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 59,
                bloom: "Applying",
                question: "Use VSEPR to predict the shape and bond angle of SO₂ (analogous to O₃).",
                answer: "<ul><li>S has 3 regions of electron density (2 bonding regions + 1 lone pair)</li><li>Electron pair geometry: trigonal planar</li><li><strong>Molecular shape:</strong> bent</li><li><strong>Bond angle:</strong> slightly less than 120° (lone pair compresses angle)</li></ul>",
                maxScore: 5,
                diagram: null
            },
            ,
            {
                id: 60,
                bloom: "Remembering",
                question: "<strong>(MCQ)</strong> Which molecule has a bond angle closest to 104.5°?<br>A. CH₄<br>B. NH₃<br>C. H₂O<br>D. CO₂",
                answer: "<strong>Answer: C</strong><br>Water is bent with two lone pairs on oxygen, giving ~104.5°.",
                maxScore: 5,
                diagram: null
            },

            // Past paper style questions (Edexcel IAS/IAL tone)
            {
                id: 61,
                bloom: "Applying",
                question: "<strong>(Past paper)</strong> Use electron pair repulsion theory to predict the shape and bond angle of BF₃. <em>[2]</em>",
                answer: "<ul><li><strong>Trigonal planar</strong> <em>[1]</em></li><li><strong>120°</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 62,
                bloom: "Applying",
                question: "<strong>(Past paper)</strong> Explain why the H–N–H bond angle in NH₃ (107°) is smaller than the H–C–H bond angle in CH₄ (109.5°). <em>[2]</em>",
                answer: "<ul><li>NH₃ has a <strong>lone pair</strong> on N, CH₄ has <strong>no lone pairs</strong> <em>[1]</em></li><li><strong>Lone pair–bond pair repulsion</strong> is greater than bond pair–bond pair, so bond angle is <strong>compressed</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "shapeNH3"
            },
            {
                id: 63,
                bloom: "Applying",
                question: "<strong>(Past paper)</strong> Explain why the H–O–H bond angle in H₂O is smaller than the H–N–H bond angle in NH₃. <em>[2]</em>",
                answer: "<ul><li>H₂O has <strong>2 lone pairs</strong>, NH₃ has <strong>1 lone pair</strong> <em>[1]</em></li><li>Greater lone pair repulsion in H₂O causes a <strong>larger compression</strong> of the bond angle <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "shapeH2O"
            },
            {
                id: 64,
                bloom: "Applying",
                question: "<strong>(Past paper)</strong> Draw the shape of CO₂ and state the bond angle. <em>[2]</em>",
                answer: "<ul><li><strong>Linear</strong> (O=C=O) <em>[1]</em></li><li><strong>180°</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "shapeCO2"
            },
            {
                id: 65,
                bloom: "Analyzing",
                question: "<strong>(Past paper)</strong> A molecule has the formula AB₃ and the central atom A has no lone pairs. Predict the shape and bond angle. <em>[2]</em>",
                answer: "<ul><li><strong>Trigonal planar</strong> <em>[1]</em></li><li><strong>120°</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 66,
                bloom: "Analyzing",
                question: "<strong>(Past paper)</strong> A molecule has the formula AB₄ and the central atom A has one lone pair. Predict the shape and bond angle (give an approximate value). <em>[3]</em>",
                answer: "<ul><li>Electron pair geometry: <strong>trigonal bipyramidal</strong> (5 regions) <em>[1]</em></li><li>Molecular shape: <strong>see-saw</strong> <em>[1]</em></li><li>Bond angles: ~<strong>&lt;90°</strong>, ~<strong>&lt;120°</strong> (lone pair compresses) <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 67,
                bloom: "Applying",
                question: "<strong>(Past paper)</strong> PCl₅ exists as a trigonal bipyramidal molecule in the gas phase. State (i) the number of bond angles of 90°, (ii) the number of bond angles of 120°. <em>[2]</em>",
                answer: "<ul><li>90°: <strong>6</strong> (each of 2 axial bonds makes 90° with 3 equatorial bonds → 2×3) <em>[1]</em></li><li>120°: <strong>3</strong> (between equatorial bonds) <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "shapePCl5"
            },
            {
                id: 68,
                bloom: "Applying",
                question: "<strong>(Past paper)</strong> State the shape of SF₆ and the bond angles present. <em>[2]</em>",
                answer: "<ul><li><strong>Octahedral</strong> <em>[1]</em></li><li><strong>90° and 180°</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "shapeSF6"
            },
            {
                id: 69,
                bloom: "Applying",
                question: "<strong>(Past paper)</strong> Explain why BeCl₂ is linear. <em>[2]</em>",
                answer: "<ul><li>Be has <strong>2 regions of electron density</strong> / 2 bonding pairs, 0 lone pairs <em>[1]</em></li><li>Electron pairs repel to be <strong>as far apart as possible</strong> giving <strong>180°</strong> and a linear shape <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "shapeBeCl2"
            },
            {
                id: 70,
                bloom: "Applying",
                question: "<strong>(Past paper)</strong> Predict the shape and bond angle of SO₃ (assume no lone pair on S). <em>[2]</em>",
                answer: "<ul><li><strong>Trigonal planar</strong> <em>[1]</em></li><li><strong>120°</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 71,
                bloom: "Analyzing",
                question: "<strong>(Past paper)</strong> A central atom has 5 bonding pairs and 1 lone pair. (i) State the electron pair geometry. (ii) State the molecular shape. <em>[2]</em>",
                answer: "<ul><li>(i) <strong>Octahedral</strong> (6 regions of electron density) <em>[1]</em></li><li>(ii) <strong>Square pyramidal</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 72,
                bloom: "Evaluating",
                question: "<strong>(Past paper)</strong> In the molecule NH₄⁺, explain why all N–H bonds are identical even though one was formed by a dative bond. <em>[2]</em>",
                answer: "<ul><li>Once formed, a dative bond is a normal covalent bond <em>[1]</em></li><li>All four N–H bonds involve shared electron pairs and have the same bond length/strength <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "shapeNH4"
            },
            {
                id: 73,
                bloom: "Applying",
                question: "<strong>(Past paper)</strong> The ion NH₄⁺ and the molecule CH₄ have the same shape. Explain why. <em>[2]</em>",
                answer: "<ul><li>Both have <strong>4 bonding pairs</strong> around the central atom and <strong>0 lone pairs</strong> <em>[1]</em></li><li>So electron pairs arrange tetrahedrally giving <strong>109.5°</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "shapeCH4"
            },
            {
                id: 74,
                bloom: "Analyzing",
                question: "<strong>(Past paper)</strong> Predict the shape and bond angle of H₂S. Compare the bond angle to H₂O. <em>[3]</em>",
                answer: "<ul><li>H₂S has 2 bonding pairs + 2 lone pairs → <strong>bent</strong> <em>[1]</em></li><li>Bond angle is <strong>less than 109.5°</strong> and generally <strong>smaller than H₂O</strong> <em>[1]</em></li><li>Reason: bonding pairs are held less close to S (larger atom / less electronegative), reducing repulsion between bonding pairs and giving a smaller angle <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 75,
                bloom: "Analyzing",
                question: "<strong>(Past paper)</strong> The molecule has formula AX₂E₂ (A central atom, X outer atoms, E lone pairs). State the molecular shape and an approximate bond angle. <em>[2]</em>",
                answer: "<ul><li><strong>Bent</strong> (V-shaped) <em>[1]</em></li><li><strong>~104.5°</strong> (or less than 109.5°) <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 76,
                bloom: "Evaluating",
                question: "<strong>(Past paper)</strong> A student says: ‘NH₃ is trigonal planar because it has three bonds.’ Explain why this is wrong. <em>[2]</em>",
                answer: "<ul><li>Shape depends on <strong>all electron pairs</strong>, not just bonds <em>[1]</em></li><li>NH₃ has a <strong>lone pair</strong> giving 4 regions (tetrahedral arrangement) → <strong>trigonal pyramidal</strong>, not planar <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "shapeNH3"
            },

            // Mixed exam-pack past paper questions (multi-part + interpretation)
            {
                id: 77,
                bloom: "Analyzing",
                question: "<strong>(Exam pack)</strong> The molecule COCl₂ (phosgene) has the displayed formula O=CCl₂. (i) State the number of regions of electron density around the carbon atom. (ii) State the shape around carbon. (iii) State the approximate bond angle around carbon. <em>[3]</em>",
                answer: "<ul><li>(i) <strong>3</strong> regions (C=O counts as 1 region) <em>[1]</em></li><li>(ii) <strong>Trigonal planar</strong> <em>[1]</em></li><li>(iii) <strong>~120°</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 78,
                bloom: "Analyzing",
                question: "<strong>(Exam pack)</strong> For each species, state the shape and bond angle(s): (a) NO₃⁻  (b) SO₂  (c) CO₃²⁻. <em>[6]</em>",
                answer: "<ul><li>(a) NO₃⁻: <strong>trigonal planar</strong>, <strong>120°</strong> <em>[2]</em></li><li>(b) SO₂: <strong>bent</strong>, <strong>&lt;120°</strong> (due to lone pair) <em>[2]</em></li><li>(c) CO₃²⁻: <strong>trigonal planar</strong>, <strong>120°</strong> <em>[2]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 79,
                bloom: "Applying",
                question: "<strong>(Exam pack)</strong> The ion NH₄⁺ is formed from NH₃ and H⁺. (i) State the shape of NH₃. (ii) State the shape of NH₄⁺. (iii) Explain why the bond angles change. <em>[4]</em>",
                answer: "<ul><li>(i) NH₃: <strong>trigonal pyramidal</strong> <em>[1]</em></li><li>(ii) NH₄⁺: <strong>tetrahedral</strong> <em>[1]</em></li><li>(iii) Lone pair on N in NH₃ causes greater repulsion and compresses bond angle; in NH₄⁺ there is <strong>no lone pair</strong> so ideal tetrahedral angle (<strong>109.5°</strong>) is obtained <em>[2]</em></li></ul>",
                maxScore: 5,
                diagram: "shapeNH4"
            },
            {
                id: 80,
                bloom: "Analyzing",
                question: "<strong>(Exam pack)</strong> A student draws SF₆ as trigonal planar because ‘six fluorines can sit in a flat hexagon around sulfur’. Use electron pair repulsion theory to explain why this is incorrect. <em>[3]</em>",
                answer: "<ul><li>S in SF₆ has <strong>6 regions of electron density</strong> (6 bonding pairs) <em>[1]</em></li><li>Electron pairs repel to maximise separation in <strong>3D</strong>, giving <strong>octahedral</strong> arrangement <em>[1]</em></li><li>Planar hexagon would not maximise separation / would lead to greater repulsion than octahedral <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "shapeSF6"
            },
            {
                id: 81,
                bloom: "Applying",
                question: "<strong>(Exam pack)</strong> A molecule has 4 regions of electron density around the central atom. (i) Name the electron pair geometry. (ii) If there is 1 lone pair, name the molecular shape. (iii) State whether the bond angle is greater or less than 109.5°. <em>[3]</em>",
                answer: "<ul><li>(i) <strong>Tetrahedral</strong> <em>[1]</em></li><li>(ii) <strong>Trigonal pyramidal</strong> <em>[1]</em></li><li>(iii) <strong>Less</strong> than 109.5° (lone pair compresses) <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 82,
                bloom: "Analyzing",
                question: "<strong>(Exam pack)</strong> Consider PCl₅ (g). (i) State the shape. (ii) Explain why there are two different types of P–Cl bond (axial vs equatorial) in this shape. <em>[3]</em>",
                answer: "<ul><li>(i) <strong>Trigonal bipyramidal</strong> <em>[1]</em></li><li>(ii) Axial bonds experience <strong>more repulsion</strong> (90° interactions with 3 equatorial bonds) than equatorial bonds (120° apart), so axial bonds are typically longer/weaker <em>[2]</em></li></ul>",
                maxScore: 5,
                diagram: "shapePCl5"
            },
            {
                id: 83,
                bloom: "Evaluating",
                question: "<strong>(Exam pack)</strong> Write an exam-quality definition of (i) bond length and (ii) bond angle. <em>[2]</em>",
                answer: "<ul><li>(i) Bond length: <strong>distance between the nuclei</strong> of two bonded atoms <em>[1]</em></li><li>(ii) Bond angle: <strong>angle between two bonds</strong> around a central atom (between lines joining nuclei) <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: null
            },

            // Diagram-based identification questions (Shapes)
            {
                id: 84,
                bloom: "Applying",
                question: "<strong>(Diagram question)</strong> Identify the shape shown in Diagram 1 and state the bond angle. <em>[2]</em>",
                answer: "<ul><li><strong>Linear</strong> <em>[1]</em></li><li><strong>180°</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "quizLinear"
            },
            ,
            ,
            {
                id: 85,
                bloom: "Analyzing",
                question: "<strong>(Diagram question)</strong> Diagram 4 shows a shape with one lone pair on the central atom. (i) Name the molecular shape. (ii) State whether the bond angle is greater or less than 109.5°. <em>[2]</em>",
                answer: "<ul><li>(i) <strong>Trigonal pyramidal</strong> <em>[1]</em></li><li>(ii) <strong>Less</strong> than 109.5° (compressed by lone pair) <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "quizTrigPyramidal"
            },
            {
                id: 86,
                bloom: "Analyzing",
                question: "<strong>(Diagram question)</strong> Diagram 5 shows a shape with two lone pairs on the central atom. (i) Name the molecular shape. (ii) Give an approximate bond angle (use a typical value). <em>[3]</em>",
                answer: "<ul><li>(i) <strong>Bent (V-shaped)</strong> <em>[1]</em></li><li>(ii) Bond angle is <strong>less than 109.5°</strong> <em>[1]</em></li><li>Typical value: <strong>~104.5°</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "quizBent"
            },
            ,
            ,
            {
                id: 87,
                bloom: "Analyzing",
                question: "<strong>(Diagram question)</strong> Diagram 8 shows a planar molecule with a C=C bond. State the shape around each carbon atom and the approximate bond angle. <em>[2]</em>",
                answer: "<ul><li><strong>Trigonal planar</strong> around each carbon <em>[1]</em></li><li><strong>~120°</strong> <em>[1]</em></li></ul>",
                maxScore: 5,
                diagram: "quizEthene"
            },

            // FAQ / common mistakes (Past paper focus)
            {
                id: 88,
                bloom: "FAQ",
                question: "<strong>Past Paper FAQs (Shapes & VSEPR)</strong>",
                answer: "<ul><li><strong>FAQ 1:</strong> ‘Double bond counts as 2 regions’ is wrong. A double bond counts as <strong>one region of electron density</strong> in VSEPR.</li><li><strong>FAQ 2:</strong> Don’t forget <strong>lone pairs</strong>: shape depends on bonding pairs <em>and</em> lone pairs.</li><li><strong>FAQ 3:</strong> Don’t mix up <strong>electron pair geometry</strong> vs <strong>molecular shape</strong> (e.g., NH₃ has tetrahedral arrangement but trigonal pyramidal shape).</li><li><strong>FAQ 4:</strong> Lone pairs <strong>compress</strong> bond angles: NH₃ ~107°, H₂O ~104.5° (not 109.5°).</li><li><strong>FAQ 5:</strong> State all angles fully: PCl₅ has <strong>90°, 120°, 180°</strong>; SF₆ has <strong>90° and 180°</strong>.</li><li><strong>FAQ 6:</strong> ‘3 bonds → trigonal planar’ only if the central atom has <strong>no lone pairs</strong>.</li></ul>",
                maxScore: 5,
                diagram: null
            }
        ]
    }
];
