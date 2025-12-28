// Electron density diagrams (evidence for covalent bonding)
function createElectronDensityCovalent() {
    return `
        <svg width="400" height="150" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold">Cl₂ Electron Density Map</text>
            <circle cx="120" cy="75" r="15" fill="#228b22" stroke="#000" stroke-width="2"/>
            <text x="120" y="80" text-anchor="middle" font-size="12" fill="#fff" font-weight="bold">Cl</text>
            <circle cx="280" cy="75" r="15" fill="#228b22" stroke="#000" stroke-width="2"/>
            <text x="280" y="80" text-anchor="middle" font-size="12" fill="#fff" font-weight="bold">Cl</text>
            <ellipse cx="200" cy="75" rx="100" ry="35" fill="#90ee90" opacity="0.6" stroke="#228b22" stroke-width="2"/>
            <path d="M 200 120 L 200 100" stroke="#d32f2f" stroke-width="2" marker-end="url(#arrowRedED)"/>
            <defs>
                <marker id="arrowRedED" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#d32f2f" />
                </marker>
            </defs>
            <text x="200" y="140" text-anchor="middle" font-size="11" fill="#d32f2f" font-weight="bold">Continuous density = Shared electrons</text>
        </svg>
    `;
}

function createElectronDensityComparison() {
    return `
        <svg width="500" height="180" viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
            <text x="250" y="18" text-anchor="middle" font-size="14" font-weight="bold">Electron Density: Ionic vs Covalent</text>
            
            <text x="125" y="40" text-anchor="middle" font-size="12" font-weight="bold">NaCl (ionic)</text>
            <circle cx="70" cy="80" r="18" fill="#ffd700" stroke="#000" stroke-width="2"/>
            <text x="70" y="85" text-anchor="middle" font-size="11" font-weight="bold">Na⁺</text>
            <circle cx="180" cy="80" r="22" fill="#90ee90" stroke="#000" stroke-width="2"/>
            <text x="180" y="85" text-anchor="middle" font-size="11" font-weight="bold">Cl⁻</text>
            <line x1="88" y1="80" x2="158" y2="80" stroke="#999" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="125" y="112" text-anchor="middle" font-size="10" fill="#666">Density ≈ 0 between</text>

            <line x1="250" y1="30" x2="250" y2="135" stroke="#bbb" stroke-width="1"/>

            <text x="375" y="40" text-anchor="middle" font-size="12" font-weight="bold">Cl₂ (covalent)</text>
            <circle cx="320" cy="80" r="20" fill="#228b22" stroke="#000" stroke-width="2"/>
            <text x="320" y="85" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Cl</text>
            <circle cx="430" cy="80" r="20" fill="#228b22" stroke="#000" stroke-width="2"/>
            <text x="430" y="85" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Cl</text>
            <ellipse cx="375" cy="80" rx="65" ry="24" fill="#90ee90" opacity="0.55" stroke="#228b22" stroke-width="2"/>
            <text x="375" y="112" text-anchor="middle" font-size="10" fill="#666">Continuous density</text>

            <text x="250" y="160" text-anchor="middle" font-size="11" fill="#333" font-style="italic">Ionic: electrons transferred • Covalent: electrons shared</text>
        </svg>
    `;
}

// Dot-and-cross diagrams for simple molecules

function createDotCrossHCl() {
    return `
        <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
            <text x="150" y="20" text-anchor="middle" font-size="14" font-weight="bold">HCl - Dot and Cross Diagram</text>
            
            <!-- H atom (1 dot) -->
            <circle cx="80" cy="75" r="30" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="80" y="50" text-anchor="middle" font-size="16" font-weight="bold">H</text>
            <circle cx="95" cy="75" r="4" fill="#d32f2f"/>
            
            <!-- Cl atom (7 electrons: 6 crosses + 1 shared dot) -->
            <circle cx="220" cy="75" r="40" fill="none" stroke="#228b22" stroke-width="2"/>
            <text x="220" y="50" text-anchor="middle" font-size="16" font-weight="bold">Cl</text>
            
            <!-- Shared pair (overlapping region) -->
            <ellipse cx="150" cy="75" rx="20" ry="15" fill="#ffeb3b" opacity="0.3"/>
            <circle cx="145" cy="75" r="4" fill="#d32f2f"/>
            <text x="155" y="78" font-size="16" fill="#1976d2">✕</text>
            
            <!-- Lone pairs on Cl (crosses) -->
            <text x="200" y="60" font-size="16" fill="#1976d2">✕</text>
            <text x="208" y="60" font-size="16" fill="#1976d2">✕</text>
            <text x="200" y="95" font-size="16" fill="#1976d2">✕</text>
            <text x="208" y="95" font-size="16" fill="#1976d2">✕</text>
            <text x="235" y="70" font-size="16" fill="#1976d2">✕</text>
            <text x="243" y="70" font-size="16" fill="#1976d2">✕</text>
            
            <text x="150" y="130" text-anchor="middle" font-size="11" fill="#666">● = H electron  ✕ = Cl electron</text>
        </svg>
    `;
}

function createDotCrossH2O() {
    return `
        <svg width="350" height="200" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
            <text x="175" y="20" text-anchor="middle" font-size="14" font-weight="bold">H₂O - Dot and Cross Diagram</text>
            
            <!-- O atom center -->
            <circle cx="175" cy="100" r="45" fill="none" stroke="#d32f2f" stroke-width="2"/>
            <text x="175" y="95" text-anchor="middle" font-size="18" font-weight="bold">O</text>
            
            <!-- Two lone pairs (top) -->
            <text x="165" y="70" font-size="16" fill="#1976d2">✕</text>
            <text x="175" y="70" font-size="16" fill="#1976d2">✕</text>
            <text x="165" y="80" font-size="16" fill="#1976d2">✕</text>
            <text x="175" y="80" font-size="16" fill="#1976d2">✕</text>
            
            <!-- Left H -->
            <circle cx="90" cy="120" r="28" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="90" y="115" text-anchor="middle" font-size="16" font-weight="bold">H</text>
            <circle cx="105" cy="120" r="4" fill="#d32f2f"/>
            
            <!-- Bonding pair O-H (left) -->
            <ellipse cx="132" cy="110" rx="18" ry="12" fill="#ffeb3b" opacity="0.3"/>
            <text x="128" y="113" font-size="16" fill="#1976d2">✕</text>
            <circle cx="138" cy="110" r="4" fill="#d32f2f"/>
            
            <!-- Right H -->
            <circle cx="260" cy="120" r="28" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="260" y="115" text-anchor="middle" font-size="16" font-weight="bold">H</text>
            <circle cx="245" cy="120" r="4" fill="#d32f2f"/>
            
            <!-- Bonding pair O-H (right) -->
            <ellipse cx="218" cy="110" rx="18" ry="12" fill="#ffeb3b" opacity="0.3"/>
            <text x="222" y="113" font-size="16" fill="#1976d2">✕</text>
            <circle cx="212" cy="110" r="4" fill="#d32f2f"/>
            
            <text x="175" y="175" text-anchor="middle" font-size="11" fill="#666">2 bonding pairs + 2 lone pairs → Bent shape</text>
        </svg>
    `;
}

function createDotCrossO2() {
    return `
        <svg width="400" height="180" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold">O₂ - Double Bond (Dot and Cross)</text>
            
            <!-- Left O -->
            <circle cx="130" cy="90" r="45" fill="none" stroke="#d32f2f" stroke-width="2"/>
            <text x="130" y="85" text-anchor="middle" font-size="18" font-weight="bold">O</text>
            
            <!-- Left O lone pairs -->
            <circle cx="100" cy="75" r="4" fill="#d32f2f"/>
            <circle cx="110" cy="75" r="4" fill="#d32f2f"/>
            <circle cx="100" cy="105" r="4" fill="#d32f2f"/>
            <circle cx="110" cy="105" r="4" fill="#d32f2f"/>
            
            <!-- Right O -->
            <circle cx="270" cy="90" r="45" fill="none" stroke="#d32f2f" stroke-width="2"/>
            <text x="270" y="85" text-anchor="middle" font-size="18" font-weight="bold">O</text>
            
            <!-- Right O lone pairs -->
            <text x="285" y="78" font-size="16" fill="#1976d2">✕</text>
            <text x="295" y="78" font-size="16" fill="#1976d2">✕</text>
            <text x="285" y="108" font-size="16" fill="#1976d2">✕</text>
            <text x="295" y="108" font-size="16" fill="#1976d2">✕</text>
            
            <!-- Double bond (2 shared pairs) -->
            <rect x="170" y="75" width="60" height="30" fill="#ffeb3b" opacity="0.3" rx="5"/>
            <circle cx="185" cy="85" r="4" fill="#d32f2f"/>
            <text x="195" y="88" font-size="16" fill="#1976d2">✕</text>
            <circle cx="185" cy="100" r="4" fill="#d32f2f"/>
            <text x="195" y="103" font-size="16" fill="#1976d2">✕</text>
            
            <text x="200" y="140" text-anchor="middle" font-size="12" fill="#1976d2" font-weight="bold">O=O (Double bond)</text>
            <text x="200" y="160" text-anchor="middle" font-size="11" fill="#666">2 bonding pairs between atoms</text>
        </svg>
    `;
}

function createDotCrossN2() {
    return `
        <svg width="400" height="180" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold">N₂ - Triple Bond (Dot and Cross)</text>
            
            <!-- Left N -->
            <circle cx="130" cy="90" r="45" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="130" y="85" text-anchor="middle" font-size="18" font-weight="bold">N</text>
            
            <!-- Left N lone pair -->
            <circle cx="105" cy="90" r="4" fill="#d32f2f"/>
            <circle cx="115" cy="90" r="4" fill="#d32f2f"/>
            
            <!-- Right N -->
            <circle cx="270" cy="90" r="45" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="270" y="85" text-anchor="middle" font-size="18" font-weight="bold">N</text>
            
            <!-- Right N lone pair -->
            <text x="280" y="93" font-size="16" fill="#1976d2">✕</text>
            <text x="290" y="93" font-size="16" fill="#1976d2">✕</text>
            
            <!-- Triple bond (3 shared pairs) -->
            <rect x="170" y="70" width="60" height="40" fill="#ffeb3b" opacity="0.3" rx="5"/>
            <circle cx="185" cy="80" r="4" fill="#d32f2f"/>
            <text x="195" y="83" font-size="16" fill="#1976d2">✕</text>
            <circle cx="185" cy="90" r="4" fill="#d32f2f"/>
            <text x="195" y="93" font-size="16" fill="#1976d2">✕</text>
            <circle cx="185" cy="100" r="4" fill="#d32f2f"/>
            <text x="195" y="103" font-size="16" fill="#1976d2">✕</text>
            
            <text x="200" y="140" text-anchor="middle" font-size="12" fill="#1976d2" font-weight="bold">N≡N (Triple bond)</text>
            <text x="200" y="160" text-anchor="middle" font-size="11" fill="#666">3 bonding pairs between atoms</text>
        </svg>
    `;
}

function createDotCrossCO2() {
    return `
        <svg width="500" height="180" viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
            <text x="250" y="20" text-anchor="middle" font-size="14" font-weight="bold">CO₂ - Two Double Bonds (Linear)</text>
            
            <!-- Left O -->
            <circle cx="100" cy="90" r="40" fill="none" stroke="#d32f2f" stroke-width="2"/>
            <text x="100" y="85" text-anchor="middle" font-size="16" font-weight="bold">O</text>
            <circle cx="70" cy="80" r="4" fill="#d32f2f"/>
            <circle cx="80" cy="80" r="4" fill="#d32f2f"/>
            <circle cx="70" cy="100" r="4" fill="#d32f2f"/>
            <circle cx="80" cy="100" r="4" fill="#d32f2f"/>
            
            <!-- C center -->
            <circle cx="250" cy="90" r="40" fill="none" stroke="#333" stroke-width="2"/>
            <text x="250" y="85" text-anchor="middle" font-size="18" font-weight="bold">C</text>
            
            <!-- Left double bond -->
            <rect x="135" y="75" width="55" height="30" fill="#ffeb3b" opacity="0.3" rx="5"/>
            <circle cx="150" cy="85" r="4" fill="#d32f2f"/>
            <text x="160" y="88" font-size="16" fill="#1976d2">✕</text>
            <circle cx="150" cy="100" r="4" fill="#d32f2f"/>
            <text x="160" y="103" font-size="16" fill="#1976d2">✕</text>
            
            <!-- Right O -->
            <circle cx="400" cy="90" r="40" fill="none" stroke="#d32f2f" stroke-width="2"/>
            <text x="400" y="85" text-anchor="middle" font-size="16" font-weight="bold">O</text>
            <text x="415" y="83" font-size="16" fill="#1976d2">✕</text>
            <text x="425" y="83" font-size="16" fill="#1976d2">✕</text>
            <text x="415" y="103" font-size="16" fill="#1976d2">✕</text>
            <text x="425" y="103" font-size="16" fill="#1976d2">✕</text>
            
            <!-- Right double bond -->
            <rect x="310" y="75" width="55" height="30" fill="#ffeb3b" opacity="0.3" rx="5"/>
            <text x="320" y="88" font-size="16" fill="#1976d2">✕</text>
            <circle cx="330" cy="85" r="4" fill="#d32f2f"/>
            <text x="320" y="103" font-size="16" fill="#1976d2">✕</text>
            <circle cx="330" cy="100" r="4" fill="#d32f2f"/>
            
            <text x="250" y="145" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">O=C=O (Linear molecule)</text>
        </svg>
    `;
}

function createDotCrossCH4() {
    return `
        <svg width="350" height="250" viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg">
            <text x="175" y="20" text-anchor="middle" font-size="14" font-weight="bold">CH₄ - Methane (4 single bonds)</text>
            
            <!-- C center -->
            <circle cx="175" cy="125" r="40" fill="none" stroke="#333" stroke-width="2"/>
            <text x="175" y="120" text-anchor="middle" font-size="18" font-weight="bold">C</text>
            
            <!-- Top H -->
            <circle cx="175" cy="50" r="25" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="175" y="48" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <circle cx="175" cy="60" r="4" fill="#d32f2f"/>
            <ellipse cx="175" cy="87" rx="12" ry="15" fill="#ffeb3b" opacity="0.3"/>
            <text x="172" y="92" font-size="14" fill="#1976d2">✕</text>
            
            <!-- Bottom H -->
            <circle cx="175" cy="200" r="25" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="175" y="198" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <circle cx="175" cy="190" r="4" fill="#d32f2f"/>
            <ellipse cx="175" cy="163" rx="12" ry="15" fill="#ffeb3b" opacity="0.3"/>
            <text x="172" y="168" font-size="14" fill="#1976d2">✕</text>
            
            <!-- Left H -->
            <circle cx="90" cy="125" r="25" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="90" y="123" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <circle cx="105" cy="125" r="4" fill="#d32f2f"/>
            <ellipse cx="132" cy="125" rx="15" ry="12" fill="#ffeb3b" opacity="0.3"/>
            <text x="135" y="128" font-size="14" fill="#1976d2">✕</text>
            
            <!-- Right H -->
            <circle cx="260" cy="125" r="25" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="260" y="123" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <circle cx="245" cy="125" r="4" fill="#d32f2f"/>
            <ellipse cx="218" cy="125" rx="15" ry="12" fill="#ffeb3b" opacity="0.3"/>
            <text x="215" y="128" font-size="14" fill="#1976d2">✕</text>
            
            <text x="175" y="235" text-anchor="middle" font-size="11" fill="#666">Tetrahedral shape (shown in 2D)</text>
        </svg>
    `;
}
// Dative covalent bond diagrams

function createDotCrossNH4() {
    return `
        <svg width="400" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold">NH₄⁺ - Ammonium Ion (with dative bond)</text>
            
            <!-- N center -->
            <circle cx="200" cy="125" r="45" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="200" y="120" text-anchor="middle" font-size="18" font-weight="bold">N</text>
            
            <!-- Top H (dative bond) -->
            <circle cx="200" cy="50" r="25" fill="none" stroke="#d32f2f" stroke-width="2"/>
            <text x="200" y="48" text-anchor="middle" font-size="14" font-weight="bold">H⁺</text>
            
            <!-- Dative bond arrow -->
            <path d="M 200 82 L 200 72" stroke="#ff5722" stroke-width="3" marker-end="url(#arrowDative)"/>
            <defs>
                <marker id="arrowDative" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#ff5722" />
                </marker>
            </defs>
            <ellipse cx="200" cy="87" rx="12" ry="15" fill="#ff9800" opacity="0.4"/>
            <text x="197" y="92" font-size="14" fill="#1976d2">✕</text>
            <text x="205" y="92" font-size="14" fill="#1976d2">✕</text>
            <text x="230" y="65" font-size="11" fill="#ff5722" font-weight="bold">Dative (N→H)</text>
            
            <!-- Other 3 H atoms -->
            <circle cx="120" cy="150" r="25" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="120" y="148" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <circle cx="135" cy="145" r="4" fill="#d32f2f"/>
            
            <circle cx="280" cy="150" r="25" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="280" y="148" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <circle cx="265" cy="145" r="4" fill="#d32f2f"/>
            
            <circle cx="200" cy="205" r="25" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="200" y="203" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <circle cx="200" cy="195" r="4" fill="#d32f2f"/>
            
            <!-- Charge -->
            <text x="260" y="105" font-size="20" fill="#d32f2f" font-weight="bold">+</text>
            
            <text x="200" y="240" text-anchor="middle" font-size="11" fill="#666">All 4 bonds identical once formed</text>
        </svg>
    `;
}

function createDotCrossAl2Cl6() {
    return `
        <svg width="500" height="220" viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
            <text x="250" y="20" text-anchor="middle" font-size="14" font-weight="bold">Al₂Cl₆ - Aluminium Chloride Dimer</text>
            
            <!-- Left Al -->
            <circle cx="130" cy="110" r="35" fill="none" stroke="#ff9800" stroke-width="2"/>
            <text x="130" y="108" text-anchor="middle" font-size="16" font-weight="bold">Al</text>
            
            <!-- Right Al -->
            <circle cx="370" cy="110" r="35" fill="none" stroke="#ff9800" stroke-width="2"/>
            <text x="370" y="108" text-anchor="middle" font-size="16" font-weight="bold">Al</text>
            
            <!-- Bridge Cl (top) -->
            <circle cx="250" cy="60" r="30" fill="none" stroke="#228b22" stroke-width="2"/>
            <text x="250" y="58" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>
            <text x="235" y="75" font-size="12" fill="#1976d2">✕</text>
            <text x="243" y="75" font-size="12" fill="#1976d2">✕</text>
            
            <!-- Dative bonds from bridge Cl -->
            <path d="M 230 75 L 150 100" stroke="#ff5722" stroke-width="2" marker-end="url(#arrowD1)"/>
            <path d="M 270 75 L 350 100" stroke="#ff5722" stroke-width="2" marker-end="url(#arrowD2)"/>
            <defs>
                <marker id="arrowD1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#ff5722" />
                </marker>
                <marker id="arrowD2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#ff5722" />
                </marker>
            </defs>
            
            <!-- Bridge Cl (bottom) -->
            <circle cx="250" cy="160" r="30" fill="none" stroke="#228b22" stroke-width="2"/>
            <text x="250" y="158" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>
            <text x="235" y="150" font-size="12" fill="#1976d2">✕</text>
            <text x="243" y="150" font-size="12" fill="#1976d2">✕</text>
            
            <!-- Dative bonds from bridge Cl -->
            <path d="M 230 145 L 150 120" stroke="#ff5722" stroke-width="2" marker-end="url(#arrowD3)"/>
            <path d="M 270 145 L 350 120" stroke="#ff5722" stroke-width="2" marker-end="url(#arrowD4)"/>
            <defs>
                <marker id="arrowD3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#ff5722" />
                </marker>
                <marker id="arrowD4" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#ff5722" />
                </marker>
            </defs>
            
            <!-- Terminal Cl atoms (simplified) -->
            <circle cx="70" cy="80" r="20" fill="#90ee90" stroke="#228b22" stroke-width="1"/>
            <text x="70" y="80" text-anchor="middle" font-size="10">Cl</text>
            
            <circle cx="70" cy="140" r="20" fill="#90ee90" stroke="#228b22" stroke-width="1"/>
            <text x="70" y="140" text-anchor="middle" font-size="10">Cl</text>
            
            <circle cx="430" cy="80" r="20" fill="#90ee90" stroke="#228b22" stroke-width="1"/>
            <text x="430" y="80" text-anchor="middle" font-size="10">Cl</text>
            
            <circle cx="430" cy="140" r="20" fill="#90ee90" stroke="#228b22" stroke-width="1"/>
            <text x="430" y="140" text-anchor="middle" font-size="10">Cl</text>
            
            <text x="250" y="200" text-anchor="middle" font-size="11" fill="#666">Two Cl bridges donate lone pairs to opposite Al (dative bonds)</text>
        </svg>
    `;
}

function createDotCrossH3O() {
    return `
        <svg width="350" height="200" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
            <text x="175" y="20" text-anchor="middle" font-size="14" font-weight="bold">H₃O⁺ - Hydronium Ion</text>
            
            <!-- O center -->
            <circle cx="175" cy="100" r="45" fill="none" stroke="#d32f2f" stroke-width="2"/>
            <text x="175" y="95" text-anchor="middle" font-size="18" font-weight="bold">O</text>
            
            <!-- One lone pair -->
            <text x="165" y="75" font-size="16" fill="#1976d2">✕</text>
            <text x="175" y="75" font-size="16" fill="#1976d2">✕</text>
            
            <!-- Top H (dative) -->
            <circle cx="175" cy="40" r="22" fill="none" stroke="#ff5722" stroke-width="2"/>
            <text x="175" y="38" text-anchor="middle" font-size="13" font-weight="bold">H⁺</text>
            <path d="M 175 62 L 175 55" stroke="#ff5722" stroke-width="2" marker-end="url(#arrowH3O)"/>
            <defs>
                <marker id="arrowH3O" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#ff5722" />
                </marker>
            </defs>
            <text x="200" y="50" font-size="10" fill="#ff5722">O→H</text>
            
            <!-- Left H -->
            <circle cx="100" cy="130" r="25" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="100" y="128" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <circle cx="115" cy="130" r="4" fill="#d32f2f"/>
            
            <!-- Right H -->
            <circle cx="250" cy="130" r="25" fill="none" stroke="#1976d2" stroke-width="2"/>
            <text x="250" y="128" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <circle cx="235" cy="130" r="4" fill="#d32f2f"/>
            
            <!-- Charge -->
            <text x="220" y="90" font-size="18" fill="#d32f2f" font-weight="bold">+</text>
            
            <text x="175" y="180" text-anchor="middle" font-size="11" fill="#666">Trigonal pyramidal shape</text>
        </svg>
    `;
}

// Carbon allotrope structures

function createDiamondStructure() {
    return `
        <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold">Diamond - Giant Covalent Lattice</text>
            
            <!-- 3D tetrahedral network representation -->
            <defs>
                <radialGradient id="cGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:#666;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#333;stop-opacity:1" />
                </radialGradient>
            </defs>
            
            <!-- Central layer -->
            <circle cx="200" cy="150" r="18" fill="url(#cGrad)" stroke="#000" stroke-width="2"/>
            <text x="200" y="155" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">C</text>
            
            <!-- Four neighbors (tetrahedral) -->
            <circle cx="140" cy="110" r="16" fill="url(#cGrad)" stroke="#000" stroke-width="2"/>
            <text x="140" y="114" text-anchor="middle" font-size="10" fill="#fff">C</text>
            <line x1="156" y1="118" x2="184" y2="142" stroke="#333" stroke-width="3"/>
            
            <circle cx="260" cy="110" r="16" fill="url(#cGrad)" stroke="#000" stroke-width="2"/>
            <text x="260" y="114" text-anchor="middle" font-size="10" fill="#fff">C</text>
            <line x1="244" y1="118" x2="216" y2="142" stroke="#333" stroke-width="3"/>
            
            <circle cx="140" cy="190" r="16" fill="url(#cGrad)" stroke="#000" stroke-width="2"/>
            <text x="140" y="194" text-anchor="middle" font-size="10" fill="#fff">C</text>
            <line x1="156" y1="182" x2="184" y2="158" stroke="#333" stroke-width="3"/>
            
            <circle cx="260" cy="190" r="16" fill="url(#cGrad)" stroke="#000" stroke-width="2"/>
            <text x="260" y="194" text-anchor="middle" font-size="10" fill="#fff">C</text>
            <line x1="244" y1="182" x2="216" y2="158" stroke="#333" stroke-width="3"/>
            
            <!-- Extended network (faded) -->
            <circle cx="90" cy="80" r="14" fill="#999" stroke="#666" stroke-width="1" opacity="0.5"/>
            <line x1="106" y1="88" x2="124" y2="102" stroke="#999" stroke-width="2" opacity="0.5"/>
            
            <circle cx="310" cy="80" r="14" fill="#999" stroke="#666" stroke-width="1" opacity="0.5"/>
            <line x1="294" y1="88" x2="276" y2="102" stroke="#999" stroke-width="2" opacity="0.5"/>
            
            <circle cx="90" cy="220" r="14" fill="#999" stroke="#666" stroke-width="1" opacity="0.5"/>
            <line x1="106" y1="212" x2="124" y2="198" stroke="#999" stroke-width="2" opacity="0.5"/>
            
            <circle cx="310" cy="220" r="14" fill="#999" stroke="#666" stroke-width="1" opacity="0.5"/>
            <line x1="294" y1="212" x2="276" y2="198" stroke="#999" stroke-width="2" opacity="0.5"/>
            
            <text x="200" y="260" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">Each C bonded to 4 others (tetrahedral)</text>
            <text x="200" y="280" text-anchor="middle" font-size="11" fill="#666">Very hard, high m.pt, doesn't conduct</text>
        </svg>
    `;
}

function createGraphiteStructure() {
    return `
        <svg width="450" height="280" viewBox="0 0 450 280" xmlns="http://www.w3.org/2000/svg">
            <text x="225" y="20" text-anchor="middle" font-size="14" font-weight="bold">Graphite - Layered Structure</text>
            
            <!-- Top layer -->
            <g opacity="1">
                <!-- Hexagonal rings -->
                <polygon points="100,60 130,45 160,60 160,90 130,105 100,90" fill="none" stroke="#333" stroke-width="2"/>
                <polygon points="160,60 190,45 220,60 220,90 190,105 160,90" fill="none" stroke="#333" stroke-width="2"/>
                <polygon points="220,60 250,45 280,60 280,90 250,105 220,90" fill="none" stroke="#333" stroke-width="2"/>
                
                <!-- Carbon atoms -->
                <circle cx="130" cy="45" r="8" fill="#333"/>
                <circle cx="160" cy="60" r="8" fill="#333"/>
                <circle cx="190" cy="45" r="8" fill="#333"/>
                <circle cx="220" cy="60" r="8" fill="#333"/>
                <circle cx="250" cy="45" r="8" fill="#333"/>
                <circle cx="130" cy="105" r="8" fill="#333"/>
                <circle cx="160" cy="90" r="8" fill="#333"/>
                <circle cx="190" cy="105" r="8" fill="#333"/>
                <circle cx="220" cy="90" r="8" fill="#333"/>
                <circle cx="250" cy="105" r="8" fill="#333"/>
            </g>
            
            <!-- Weak forces between layers -->
            <text x="225" y="135" text-anchor="middle" font-size="11" fill="#999">↕ Weak van der Waals forces</text>
            <line x1="100" y1="120" x2="350" y2="120" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
            
            <!-- Bottom layer (offset) -->
            <g opacity="0.6">
                <polygon points="115,160 145,145 175,160 175,190 145,205 115,190" fill="none" stroke="#666" stroke-width="2"/>
                <polygon points="175,160 205,145 235,160 235,190 205,205 175,190" fill="none" stroke="#666" stroke-width="2"/>
                <polygon points="235,160 265,145 295,160 295,190 265,205 235,190" fill="none" stroke="#666" stroke-width="2"/>
                
                <circle cx="145" cy="145" r="7" fill="#666"/>
                <circle cx="175" cy="160" r="7" fill="#666"/>
                <circle cx="205" cy="145" r="7" fill="#666"/>
                <circle cx="235" cy="160" r="7" fill="#666"/>
                <circle cx="265" cy="145" r="7" fill="#666"/>
            </g>
            
            <text x="225" y="235" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">Each C bonded to 3 others (planar layers)</text>
            <text x="225" y="255" text-anchor="middle" font-size="11" fill="#666">Layers slide → soft/lubricant</text>
            <text x="225" y="270" text-anchor="middle" font-size="11" fill="#666">Delocalized e⁻ → conducts electricity</text>
        </svg>
    `;
}

function createGrapheneStructure() {
    return `
        <svg width="500" height="250" viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
            <text x="250" y="20" text-anchor="middle" font-size="14" font-weight="bold">Graphene - Single Layer (Honeycomb Lattice)</text>
            
            <!-- Hexagonal honeycomb pattern -->
            <g stroke="#333" stroke-width="2" fill="none">
                <polygon points="100,80 130,65 160,80 160,110 130,125 100,110"/>
                <polygon points="160,80 190,65 220,80 220,110 190,125 160,110"/>
                <polygon points="220,80 250,65 280,80 280,110 250,125 220,110"/>
                <polygon points="280,80 310,65 340,80 340,110 310,125 280,110"/>
                <polygon points="340,80 370,65 400,80 400,110 370,125 340,110"/>
                
                <polygon points="130,125 160,110 190,125 190,155 160,170 130,155"/>
                <polygon points="190,125 220,110 250,125 250,155 220,170 190,155"/>
                <polygon points="250,125 280,110 310,125 310,155 280,170 250,155"/>
                <polygon points="310,125 340,110 370,125 370,155 340,170 310,155"/>
            </g>
            
            <!-- Carbon atoms -->
            <circle cx="130" cy="65" r="8" fill="#333"/>
            <circle cx="160" cy="80" r="8" fill="#333"/>
            <circle cx="190" cy="65" r="8" fill="#333"/>
            <circle cx="220" cy="80" r="8" fill="#333"/>
            <circle cx="250" cy="65" r="8" fill="#333"/>
            <circle cx="280" cy="80" r="8" fill="#333"/>
            <circle cx="310" cy="65" r="8" fill="#333"/>
            <circle cx="340" cy="80" r="8" fill="#333"/>
            <circle cx="370" cy="65" r="8" fill="#333"/>
            
            <circle cx="130" cy="125" r="8" fill="#333"/>
            <circle cx="160" cy="110" r="8" fill="#333"/>
            <circle cx="190" cy="125" r="8" fill="#333"/>
            <circle cx="220" cy="110" r="8" fill="#333"/>
            <circle cx="250" cy="125" r="8" fill="#333"/>
            <circle cx="280" cy="110" r="8" fill="#333"/>
            <circle cx="310" cy="125" r="8" fill="#333"/>
            <circle cx="340" cy="110" r="8" fill="#333"/>
            <circle cx="370" cy="125" r="8" fill="#333"/>
            
            <text x="250" y="205" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">One atom thick, each C bonded to 3 others</text>
            <text x="250" y="225" text-anchor="middle" font-size="11" fill="#666">Very strong, flexible, conducts electricity</text>
        </svg>
    `;
}
// Electronegativity and polarity diagrams

function createBondingContinuum() {
    return `
        <svg width="550" height="200" viewBox="0 0 550 200" xmlns="http://www.w3.org/2000/svg">
            <text x="275" y="20" text-anchor="middle" font-size="14" font-weight="bold">Bonding Continuum (Electronegativity Difference)</text>
            
            <!-- Arrow showing continuum -->
            <defs>
                <linearGradient id="continuum" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#4caf50;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#ff9800;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#f44336;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect x="75" y="70" width="400" height="40" fill="url(#continuum)" stroke="#333" stroke-width="2" rx="5"/>
            
            <!-- Labels -->
            <text x="75" y="130" text-anchor="start" font-size="12" font-weight="bold" fill="#4caf50">Pure Covalent</text>
            <text x="75" y="145" text-anchor="start" font-size="10" fill="#666">ΔEN ≈ 0</text>
            <text x="75" y="160" text-anchor="start" font-size="10" fill="#666">e.g., H₂, Cl₂</text>
            
            <text x="275" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#ff9800">Polar Covalent</text>
            <text x="275" y="145" text-anchor="middle" font-size="10" fill="#666">ΔEN = 0.5 - 1.8</text>
            <text x="275" y="160" text-anchor="middle" font-size="10" fill="#666">e.g., HCl, H₂O</text>
            
            <text x="475" y="130" text-anchor="end" font-size="12" font-weight="bold" fill="#f44336">Ionic</text>
            <text x="475" y="145" text-anchor="end" font-size="10" fill="#666">ΔEN > 1.8</text>
            <text x="475" y="160" text-anchor="end" font-size="10" fill="#666">e.g., NaCl, MgO</text>
            
            <!-- Markers -->
            <circle cx="75" cy="90" r="5" fill="#fff" stroke="#333" stroke-width="2"/>
            <circle cx="275" cy="90" r="5" fill="#fff" stroke="#333" stroke-width="2"/>
            <circle cx="475" cy="90" r="5" fill="#fff" stroke="#333" stroke-width="2"/>
            
            <text x="275" y="185" text-anchor="middle" font-size="11" fill="#333" font-style="italic">Bonding is a continuum, not discrete categories</text>
        </svg>
    `;
}

function createPolarH2O() {
    return `
        <svg width="350" height="250" viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg">
            <text x="175" y="20" text-anchor="middle" font-size="14" font-weight="bold">H₂O - Polar Molecule (Bent Shape)</text>
            
            <!-- O atom -->
            <circle cx="175" cy="120" r="35" fill="#ff5252" opacity="0.3" stroke="#d32f2f" stroke-width="2"/>
            <text x="175" y="115" text-anchor="middle" font-size="18" font-weight="bold">O</text>
            <text x="175" y="135" text-anchor="middle" font-size="14" fill="#1976d2">δ−</text>
            
            <!-- Left H -->
            <circle cx="100" cy="160" r="25" fill="#64b5f6" opacity="0.3" stroke="#1976d2" stroke-width="2"/>
            <text x="100" y="158" text-anchor="middle" font-size="16" font-weight="bold">H</text>
            <text x="100" y="175" text-anchor="middle" font-size="12" fill="#d32f2f">δ+</text>
            
            <!-- Right H -->
            <circle cx="250" cy="160" r="25" fill="#64b5f6" opacity="0.3" stroke="#1976d2" stroke-width="2"/>
            <text x="250" y="158" text-anchor="middle" font-size="16" font-weight="bold">H</text>
            <text x="250" y="175" text-anchor="middle" font-size="12" fill="#d32f2f">δ+</text>
            
            <!-- Bond dipoles -->
            <path d="M 120 150 L 155 130" stroke="#ff9800" stroke-width="3" marker-end="url(#dipoleArrow1)"/>
            <path d="M 230 150 L 195 130" stroke="#ff9800" stroke-width="3" marker-end="url(#dipoleArrow2)"/>
            <defs>
                <marker id="dipoleArrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#ff9800" />
                </marker>
                <marker id="dipoleArrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#ff9800" />
                </marker>
            </defs>
            
            <!-- Net dipole -->
            <path d="M 175 80 L 175 100" stroke="#f44336" stroke-width="4" marker-end="url(#netDipole)"/>
            <defs>
                <marker id="netDipole" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L10,3 z" fill="#f44336" />
                </marker>
            </defs>
            <text x="175" y="70" text-anchor="middle" font-size="12" fill="#f44336" font-weight="bold">Net Dipole ↓</text>
            
            <text x="175" y="210" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">Bent shape → dipoles do NOT cancel</text>
            <text x="175" y="230" text-anchor="middle" font-size="11" fill="#666">POLAR MOLECULE</text>
        </svg>
    `;
}

function createNonpolarCO2() {
    return `
        <svg width="500" height="220" viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
            <text x="250" y="20" text-anchor="middle" font-size="14" font-weight="bold">CO₂ - Non-polar Molecule (Linear Shape)</text>
            
            <!-- Left O -->
            <circle cx="100" cy="110" r="30" fill="#ff5252" opacity="0.3" stroke="#d32f2f" stroke-width="2"/>
            <text x="100" y="108" text-anchor="middle" font-size="16" font-weight="bold">O</text>
            <text x="100" y="125" text-anchor="middle" font-size="12" fill="#1976d2">δ−</text>
            
            <!-- C center -->
            <circle cx="250" cy="110" r="30" fill="#999" opacity="0.3" stroke="#333" stroke-width="2"/>
            <text x="250" y="108" text-anchor="middle" font-size="18" font-weight="bold">C</text>
            <text x="250" y="125" text-anchor="middle" font-size="12" fill="#333">δ+</text>
            
            <!-- Right O -->
            <circle cx="400" cy="110" r="30" fill="#ff5252" opacity="0.3" stroke="#d32f2f" stroke-width="2"/>
            <text x="400" y="108" text-anchor="middle" font-size="16" font-weight="bold">O</text>
            <text x="400" y="125" text-anchor="middle" font-size="12" fill="#1976d2">δ−</text>
            
            <!-- Bond dipoles -->
            <path d="M 130 110 L 220 110" stroke="#ff9800" stroke-width="3" marker-end="url(#dipoleL)"/>
            <path d="M 370 110 L 280 110" stroke="#ff9800" stroke-width="3" marker-end="url(#dipoleR)"/>
            <defs>
                <marker id="dipoleL" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#ff9800" />
                </marker>
                <marker id="dipoleR" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#ff9800" />
                </marker>
            </defs>
            
            <!-- Cross showing cancellation -->
            <line x1="230" y1="70" x2="270" y2="70" stroke="#f44336" stroke-width="3"/>
            <line x1="250" y1="55" x2="250" y2="85" stroke="#f44336" stroke-width="3"/>
            <text x="250" y="50" text-anchor="middle" font-size="12" fill="#f44336" font-weight="bold">Dipoles CANCEL</text>
            
            <text x="250" y="170" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">Linear shape (180°) → equal & opposite dipoles cancel</text>
            <text x="250" y="190" text-anchor="middle" font-size="11" fill="#666">NON-POLAR MOLECULE (despite polar bonds)</text>
        </svg>
    `;
}

function createNonpolarCCl4() {
    return `
        <svg width="350" height="280" viewBox="0 0 350 280" xmlns="http://www.w3.org/2000/svg">
            <text x="175" y="20" text-anchor="middle" font-size="14" font-weight="bold">CCl₄ - Non-polar (Tetrahedral, Symmetric)</text>
            
            <!-- C center -->
            <circle cx="175" cy="140" r="30" fill="#999" opacity="0.3" stroke="#333" stroke-width="2"/>
            <text x="175" y="138" text-anchor="middle" font-size="18" font-weight="bold">C</text>
            
            <!-- Four Cl atoms (tetrahedral positions, shown in 2D) -->
            <circle cx="175" cy="70" r="25" fill="#90ee90" opacity="0.5" stroke="#228b22" stroke-width="2"/>
            <text x="175" y="70" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>
            <text x="175" y="85" text-anchor="middle" font-size="10" fill="#1976d2">δ−</text>
            
            <circle cx="105" cy="170" r="25" fill="#90ee90" opacity="0.5" stroke="#228b22" stroke-width="2"/>
            <text x="105" y="170" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>
            <text x="105" y="185" text-anchor="middle" font-size="10" fill="#1976d2">δ−</text>
            
            <circle cx="245" cy="170" r="25" fill="#90ee90" opacity="0.5" stroke="#228b22" stroke-width="2"/>
            <text x="245" y="170" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>
            <text x="245" y="185" text-anchor="middle" font-size="10" fill="#1976d2">δ−</text>
            
            <circle cx="175" cy="210" r="25" fill="#90ee90" opacity="0.5" stroke="#228b22" stroke-width="2"/>
            <text x="175" y="210" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>
            <text x="175" y="225" text-anchor="middle" font-size="10" fill="#1976d2">δ−</text>
            
            <!-- Lines showing bonds -->
            <line x1="175" y1="110" x2="175" y2="95" stroke="#333" stroke-width="2"/>
            <line x1="155" y1="145" x2="130" y2="165" stroke="#333" stroke-width="2"/>
            <line x1="195" y1="145" x2="220" y2="165" stroke="#333" stroke-width="2"/>
            <line x1="175" y1="170" x2="175" y2="185" stroke="#333" stroke-width="2"/>
            
            <text x="175" y="250" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">Tetrahedral (symmetric) → all dipoles cancel</text>
            <text x="175" y="270" text-anchor="middle" font-size="11" fill="#666">NON-POLAR MOLECULE</text>
        </svg>
    `;
}

function createPolarNH3() {
    return `
        <svg width="350" height="250" viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg">
            <text x="175" y="20" text-anchor="middle" font-size="14" font-weight="bold">NH₃ - Polar Molecule (Trigonal Pyramidal)</text>
            
            <!-- N atom -->
            <circle cx="175" cy="120" r="35" fill="#64b5f6" opacity="0.3" stroke="#1976d2" stroke-width="2"/>
            <text x="175" y="115" text-anchor="middle" font-size="18" font-weight="bold">N</text>
            <text x="175" y="135" text-anchor="middle" font-size="14" fill="#d32f2f">δ−</text>
            
            <!-- Lone pair -->
            <text x="175" y="100" text-anchor="middle" font-size="12" fill="#666">Lone pair</text>
            
            <!-- Three H atoms -->
            <circle cx="105" cy="170" r="25" fill="#fff" opacity="0.5" stroke="#666" stroke-width="2"/>
            <text x="105" y="168" text-anchor="middle" font-size="16" font-weight="bold">H</text>
            <text x="105" y="185" text-anchor="middle" font-size="12" fill="#1976d2">δ+</text>
            
            <circle cx="245" cy="170" r="25" fill="#fff" opacity="0.5" stroke="#666" stroke-width="2"/>
            <text x="245" y="168" text-anchor="middle" font-size="16" font-weight="bold">H</text>
            <text x="245" y="185" text-anchor="middle" font-size="12" fill="#1976d2">δ+</text>
            
            <circle cx="175" cy="200" r="25" fill="#fff" opacity="0.5" stroke="#666" stroke-width="2"/>
            <text x="175" y="198" text-anchor="middle" font-size="16" font-weight="bold">H</text>
            <text x="175" y="215" text-anchor="middle" font-size="12" fill="#1976d2">δ+</text>
            
            <!-- Net dipole -->
            <path d="M 175 75 L 175 95" stroke="#f44336" stroke-width="4" marker-end="url(#netDipoleNH3)"/>
            <defs>
                <marker id="netDipoleNH3" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L10,3 z" fill="#f44336" />
                </marker>
            </defs>
            <text x="175" y="65" text-anchor="middle" font-size="12" fill="#f44336" font-weight="bold">Net Dipole ↓</text>
            
            <text x="175" y="235" text-anchor="middle" font-size="11" fill="#666">Pyramidal (asymmetric) → dipoles do NOT cancel → POLAR</text>
        </svg>
    `;
}

function createPolarityTest() {
    return `
        <svg width="450" height="250" viewBox="0 0 450 250" xmlns="http://www.w3.org/2000/svg">
            <text x="225" y="20" text-anchor="middle" font-size="14" font-weight="bold">Testing Polarity: Electrostatic Deflection</text>
            
            <!-- Burette -->
            <rect x="180" y="50" width="20" height="80" fill="#e8f4f8" stroke="#333" stroke-width="2"/>
            <rect x="170" y="130" width="40" height="15" fill="#666" stroke="#333" stroke-width="2"/>
            <text x="190" y="70" text-anchor="middle" font-size="11" fill="#666">Burette</text>
            
            <!-- Liquid stream -->
            <rect x="187" y="145" width="6" height="80" fill="#2196f3" stroke="#1976d2" stroke-width="1"/>
            
            <!-- Charged rod -->
            <rect x="270" y="160" width="80" height="20" fill="#ff9800" stroke="#f57c00" stroke-width="2" rx="10"/>
            <text x="310" y="175" text-anchor="middle" font-size="12" font-weight="bold">Charged rod</text>
            <text x="310" y="150" text-anchor="middle" font-size="11" fill="#d32f2f">+ or −</text>
            
            <!-- Deflected stream (polar) -->
            <path d="M 190 145 Q 220 180 240 220" fill="none" stroke="#4caf50" stroke-width="4" stroke-dasharray="5,5"/>
            <text x="230" y="210" font-size="11" fill="#4caf50" font-weight="bold">Polar liquid</text>
            <text x="230" y="223" font-size="10" fill="#4caf50">(bends toward rod)</text>
            
            <!-- Straight stream (non-polar) -->
            <rect x="107" y="145" width="6" height="80" fill="#999" stroke="#666" stroke-width="1"/>
            <text x="110" y="235" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">Non-polar</text>
            <text x="110" y="248" text-anchor="middle" font-size="10" fill="#666">(no deflection)</text>
            
            <!-- Setup label -->
            <rect x="100" y="50" width="20" height="80" fill="#f5f5f5" stroke="#999" stroke-width="1"/>
            <rect x="90" y="130" width="40" height="15" fill="#999" stroke="#666" stroke-width="1"/>
            
            <text x="225" y="25" text-anchor="middle" font-size="10" fill="#666" font-style="italic">(Side-by-side comparison)</text>
        </svg>
    `;
}


// VSEPR / Shapes of molecules diagrams
function createVseprBase({ title, central, outer, positions, angleLabel }) {
    const w = 420, h = 240;
    const cx = 210, cy = 120;

    const atomCircle = (x, y, r, fill, stroke, label, labelColor = '#000') => `
        <circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <text x="${x}" y="${y + 4}" text-anchor="middle" font-size="14" font-weight="bold" fill="${labelColor}">${label}</text>
    `;

    const bondLine = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#333" stroke-width="3"/>`;

    const outerAtoms = positions.map(p => {
        const x = cx + p.dx;
        const y = cy + p.dy;
        return bondLine(cx, cy, x, y) + atomCircle(x, y, 22, p.fill, p.stroke, outer);
    }).join('');

    return `
        <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
            <text x="${w / 2}" y="20" text-anchor="middle" font-size="14" font-weight="bold">${title}</text>
            ${outerAtoms}
            ${atomCircle(cx, cy, 26, '#e0e0e0', '#333', central)}
            ${angleLabel ? `<text x="${w / 2}" y="225" text-anchor="middle" font-size="12" fill="#667eea" font-weight="bold">Bond angle: ${angleLabel}</text>` : ''}
        </svg>
    `;
}

function createShapeBeCl2() {
    return createVseprBase({
        title: 'BeCl₂ - Linear',
        central: 'Be',
        outer: 'Cl',
        positions: [
            { dx: -110, dy: 0, fill: '#90ee90', stroke: '#228b22' },
            { dx: 110, dy: 0, fill: '#90ee90', stroke: '#228b22' }
        ],
        angleLabel: '180°'
    });
}

function createShapeBCl3() {
    return createVseprBase({
        title: 'BCl₃ - Trigonal planar',
        central: 'B',
        outer: 'Cl',
        positions: [
            { dx: 0, dy: -90, fill: '#90ee90', stroke: '#228b22' },
            { dx: -95, dy: 55, fill: '#90ee90', stroke: '#228b22' },
            { dx: 95, dy: 55, fill: '#90ee90', stroke: '#228b22' }
        ],
        angleLabel: '120°'
    });
}

function createShapeCH4() {
    return createVseprBase({
        title: 'CH₄ - Tetrahedral (2D projection)',
        central: 'C',
        outer: 'H',
        positions: [
            { dx: 0, dy: -95, fill: '#ffffff', stroke: '#666' },
            { dx: -95, dy: 25, fill: '#ffffff', stroke: '#666' },
            { dx: 95, dy: 25, fill: '#ffffff', stroke: '#666' },
            { dx: 0, dy: 95, fill: '#ffffff', stroke: '#666' }
        ],
        angleLabel: '109.5°'
    });
}

function createShapeNH3() {
    // 3 bonding pairs + 1 lone pair -> trigonal pyramidal (shown using 3 H positions + a lone pair label)
    const base = createVseprBase({
        title: 'NH₃ - Trigonal pyramidal',
        central: 'N',
        outer: 'H',
        positions: [
            { dx: 0, dy: -95, fill: '#ffffff', stroke: '#666' },
            { dx: -95, dy: 35, fill: '#ffffff', stroke: '#666' },
            { dx: 95, dy: 35, fill: '#ffffff', stroke: '#666' }
        ],
        angleLabel: '~107°'
    });

    // Add lone pair label above N (simple annotation)
    return base.replace('</svg>', '<text x="210" y="70" text-anchor="middle" font-size="11" fill="#666">Lone pair</text></svg>');
}

function createShapeNH4() {
    return createVseprBase({
        title: 'NH₄⁺ - Tetrahedral (2D projection)',
        central: 'N',
        outer: 'H',
        positions: [
            { dx: 0, dy: -95, fill: '#ffffff', stroke: '#666' },
            { dx: -95, dy: 25, fill: '#ffffff', stroke: '#666' },
            { dx: 95, dy: 25, fill: '#ffffff', stroke: '#666' },
            { dx: 0, dy: 95, fill: '#ffffff', stroke: '#666' }
        ],
        angleLabel: '109.5°'
    });
}

function createShapeH2O() {
    return `
        <svg width="420" height="240" viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg">
            <text x="210" y="20" text-anchor="middle" font-size="14" font-weight="bold">H₂O - Bent (V-shaped)</text>
            <circle cx="210" cy="120" r="28" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <text x="210" y="125" text-anchor="middle" font-size="14" font-weight="bold">O</text>
            <line x1="210" y1="120" x2="135" y2="165" stroke="#333" stroke-width="3"/>
            <line x1="210" y1="120" x2="285" y2="165" stroke="#333" stroke-width="3"/>
            <circle cx="135" cy="165" r="22" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <text x="135" y="170" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <circle cx="285" cy="165" r="22" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <text x="285" y="170" text-anchor="middle" font-size="14" font-weight="bold">H</text>
            <text x="210" y="80" text-anchor="middle" font-size="11" fill="#666">2 lone pairs on O compress angle</text>
            <text x="210" y="225" text-anchor="middle" font-size="12" fill="#667eea" font-weight="bold">Bond angle: ~104.5°</text>
        </svg>
    `;
}

function createShapeCO2() {
    return createVseprBase({
        title: 'CO₂ - Linear',
        central: 'C',
        outer: 'O',
        positions: [
            { dx: -120, dy: 0, fill: '#ffcccc', stroke: '#d32f2f' },
            { dx: 120, dy: 0, fill: '#ffcccc', stroke: '#d32f2f' }
        ],
        angleLabel: '180°'
    });
}

function createShapePCl5() {
    return `
        <svg width="460" height="260" viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg">
            <text x="230" y="20" text-anchor="middle" font-size="14" font-weight="bold">PCl₅ (g) - Trigonal bipyramidal</text>

            <!-- Central P -->
            <circle cx="230" cy="130" r="26" fill="#e0e0e0" stroke="#333" stroke-width="2"/>
            <text x="230" y="135" text-anchor="middle" font-size="14" font-weight="bold">P</text>

            <!-- Axial chlorines (180°) -->
            <line x1="230" y1="130" x2="230" y2="55" stroke="#333" stroke-width="3"/>
            <circle cx="230" cy="55" r="22" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
            <text x="230" y="60" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>

            <line x1="230" y1="130" x2="230" y2="205" stroke="#333" stroke-width="3"/>
            <circle cx="230" cy="205" r="22" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
            <text x="230" y="210" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>

            <!-- Equatorial chlorines (120° apart in plane) -->
            <line x1="230" y1="130" x2="130" y2="130" stroke="#333" stroke-width="3"/>
            <circle cx="130" cy="130" r="22" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
            <text x="130" y="135" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>

            <line x1="230" y1="130" x2="320" y2="80" stroke="#333" stroke-width="3"/>
            <circle cx="320" cy="80" r="22" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
            <text x="320" y="85" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>

            <line x1="230" y1="130" x2="320" y2="180" stroke="#333" stroke-width="3"/>
            <circle cx="320" cy="180" r="22" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
            <text x="320" y="185" text-anchor="middle" font-size="14" font-weight="bold">Cl</text>

            <text x="230" y="250" text-anchor="middle" font-size="12" fill="#667eea" font-weight="bold">Angles: 120° (equatorial), 90° (axial–equatorial), 180° (axial–axial)</text>
        </svg>
    `;
}

function createShapeSF6() {
    return `
        <svg width="440" height="260" viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg">
            <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold">SF₆ - Octahedral</text>
            <circle cx="220" cy="130" r="26" fill="#e0e0e0" stroke="#333" stroke-width="2"/>
            <text x="220" y="135" text-anchor="middle" font-size="14" font-weight="bold">S</text>

            <!-- top/bottom -->
            <line x1="220" y1="130" x2="220" y2="55" stroke="#333" stroke-width="3"/>
            <circle cx="220" cy="55" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <text x="220" y="60" text-anchor="middle" font-size="14" font-weight="bold">F</text>

            <line x1="220" y1="130" x2="220" y2="205" stroke="#333" stroke-width="3"/>
            <circle cx="220" cy="205" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <text x="220" y="210" text-anchor="middle" font-size="14" font-weight="bold">F</text>

            <!-- left/right -->
            <line x1="220" y1="130" x2="135" y2="130" stroke="#333" stroke-width="3"/>
            <circle cx="135" cy="130" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <text x="135" y="135" text-anchor="middle" font-size="14" font-weight="bold">F</text>

            <line x1="220" y1="130" x2="305" y2="130" stroke="#333" stroke-width="3"/>
            <circle cx="305" cy="130" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <text x="305" y="135" text-anchor="middle" font-size="14" font-weight="bold">F</text>

            <!-- front/back (diagonal) -->
            <line x1="220" y1="130" x2="170" y2="175" stroke="#333" stroke-width="3"/>
            <circle cx="170" cy="175" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <text x="170" y="180" text-anchor="middle" font-size="14" font-weight="bold">F</text>

            <line x1="220" y1="130" x2="270" y2="85" stroke="#333" stroke-width="3"/>
            <circle cx="270" cy="85" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <text x="270" y="90" text-anchor="middle" font-size="14" font-weight="bold">F</text>

            <text x="220" y="250" text-anchor="middle" font-size="12" fill="#667eea" font-weight="bold">Angles: 90° and 180°</text>
        </svg>
    `;
}

function createShapeC2H4() {
    return `
        <svg width="520" height="240" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
            <text x="260" y="20" text-anchor="middle" font-size="14" font-weight="bold">C₂H₄ (Ethene) - Planar, trigonal planar around each C</text>

            <!-- Carbons -->
            <circle cx="220" cy="120" r="24" fill="#e0e0e0" stroke="#333" stroke-width="2"/>
            <text x="220" y="125" text-anchor="middle" font-size="14" font-weight="bold">C</text>

            <circle cx="300" cy="120" r="24" fill="#e0e0e0" stroke="#333" stroke-width="2"/>
            <text x="300" y="125" text-anchor="middle" font-size="14" font-weight="bold">C</text>

            <!-- Double bond -->
            <line x1="244" y1="112" x2="276" y2="112" stroke="#333" stroke-width="3"/>
            <line x1="244" y1="128" x2="276" y2="128" stroke="#333" stroke-width="3"/>

            <!-- Hydrogens -->
            <circle cx="170" cy="70" r="18" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <text x="170" y="75" text-anchor="middle" font-size="12" font-weight="bold">H</text>
            <line x1="205" y1="105" x2="182" y2="82" stroke="#333" stroke-width="2"/>

            <circle cx="170" cy="170" r="18" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <text x="170" y="175" text-anchor="middle" font-size="12" font-weight="bold">H</text>
            <line x1="205" y1="135" x2="182" y2="158" stroke="#333" stroke-width="2"/>

            <circle cx="350" cy="70" r="18" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <text x="350" y="75" text-anchor="middle" font-size="12" font-weight="bold">H</text>
            <line x1="315" y1="105" x2="338" y2="82" stroke="#333" stroke-width="2"/>

            <circle cx="350" cy="170" r="18" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <text x="350" y="175" text-anchor="middle" font-size="12" font-weight="bold">H</text>
            <line x1="315" y1="135" x2="338" y2="158" stroke="#333" stroke-width="2"/>

            <text x="260" y="225" text-anchor="middle" font-size="12" fill="#667eea" font-weight="bold">Angles around each carbon ≈ 120°</text>
        </svg>
    `;
}

// Unlabeled quiz diagrams (for identification questions)
function createQuizBase({ title, positions, centralRadius = 26, outerRadius = 22 }) {
    const w = 420, h = 240;
    const cx = 210, cy = 120;

    const atom = (x, y, r, fill, stroke) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
    const bond = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#333" stroke-width="3"/>`;

    const outer = positions.map(p => {
        const x = cx + p.dx;
        const y = cy + p.dy;
        return bond(cx, cy, x, y) + atom(x, y, outerRadius, p.fill, p.stroke);
    }).join('');

    return `
        <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
            <text x="${w / 2}" y="20" text-anchor="middle" font-size="14" font-weight="bold">${title}</text>
            ${outer}
            ${atom(cx, cy, centralRadius, '#e0e0e0', '#333')}
        </svg>
    `;
}

function createQuizLinear() {
    return createQuizBase({
        title: 'Diagram 1',
        positions: [
            { dx: -120, dy: 0, fill: '#90ee90', stroke: '#228b22' },
            { dx: 120, dy: 0, fill: '#90ee90', stroke: '#228b22' }
        ]
    });
}

function createQuizTrigPlanar() {
    return createQuizBase({
        title: 'Diagram 2',
        positions: [
            { dx: 0, dy: -95, fill: '#90ee90', stroke: '#228b22' },
            { dx: -95, dy: 55, fill: '#90ee90', stroke: '#228b22' },
            { dx: 95, dy: 55, fill: '#90ee90', stroke: '#228b22' }
        ]
    });
}

function createQuizTetrahedral() {
    return createQuizBase({
        title: 'Diagram 3',
        positions: [
            { dx: 0, dy: -95, fill: '#ffffff', stroke: '#666' },
            { dx: -95, dy: 25, fill: '#ffffff', stroke: '#666' },
            { dx: 95, dy: 25, fill: '#ffffff', stroke: '#666' },
            { dx: 0, dy: 95, fill: '#ffffff', stroke: '#666' }
        ]
    });
}

function createQuizTrigPyramidal() {
    // show 3 bonded atoms + a small "lone pair" lobe (no text)
    const base = createQuizBase({
        title: 'Diagram 4',
        positions: [
            { dx: 0, dy: -95, fill: '#ffffff', stroke: '#666' },
            { dx: -95, dy: 35, fill: '#ffffff', stroke: '#666' },
            { dx: 95, dy: 35, fill: '#ffffff', stroke: '#666' }
        ]
    });
    return base.replace('</svg>', '<ellipse cx="210" cy="85" rx="16" ry="10" fill="#bbdefb" stroke="#1976d2" stroke-width="2"/></svg>');
}

function createQuizBent() {
    const w = 420, h = 240;
    return `
        <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
            <text x="${w / 2}" y="20" text-anchor="middle" font-size="14" font-weight="bold">Diagram 5</text>
            <circle cx="210" cy="120" r="26" fill="#e0e0e0" stroke="#333" stroke-width="2"/>
            <line x1="210" y1="120" x2="135" y2="165" stroke="#333" stroke-width="3"/>
            <line x1="210" y1="120" x2="285" y2="165" stroke="#333" stroke-width="3"/>
            <circle cx="135" cy="165" r="22" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <circle cx="285" cy="165" r="22" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <!-- lone pair lobes -->
            <ellipse cx="195" cy="85" rx="14" ry="10" fill="#bbdefb" stroke="#1976d2" stroke-width="2"/>
            <ellipse cx="225" cy="85" rx="14" ry="10" fill="#bbdefb" stroke="#1976d2" stroke-width="2"/>
        </svg>
    `;
}

function createQuizTrigBipyramidal() {
    return `
        <svg width="460" height="260" viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg">
            <text x="230" y="20" text-anchor="middle" font-size="14" font-weight="bold">Diagram 6</text>
            <circle cx="230" cy="130" r="26" fill="#e0e0e0" stroke="#333" stroke-width="2"/>
            <!-- axial -->
            <line x1="230" y1="130" x2="230" y2="55" stroke="#333" stroke-width="3"/>
            <circle cx="230" cy="55" r="22" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
            <line x1="230" y1="130" x2="230" y2="205" stroke="#333" stroke-width="3"/>
            <circle cx="230" cy="205" r="22" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
            <!-- equatorial -->
            <line x1="230" y1="130" x2="130" y2="130" stroke="#333" stroke-width="3"/>
            <circle cx="130" cy="130" r="22" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
            <line x1="230" y1="130" x2="320" y2="80" stroke="#333" stroke-width="3"/>
            <circle cx="320" cy="80" r="22" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
            <line x1="230" y1="130" x2="320" y2="180" stroke="#333" stroke-width="3"/>
            <circle cx="320" cy="180" r="22" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
        </svg>
    `;
}

function createQuizOctahedral() {
    return `
        <svg width="440" height="260" viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg">
            <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold">Diagram 7</text>
            <circle cx="220" cy="130" r="26" fill="#e0e0e0" stroke="#333" stroke-width="2"/>
            <line x1="220" y1="130" x2="220" y2="55" stroke="#333" stroke-width="3"/>
            <circle cx="220" cy="55" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <line x1="220" y1="130" x2="220" y2="205" stroke="#333" stroke-width="3"/>
            <circle cx="220" cy="205" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <line x1="220" y1="130" x2="135" y2="130" stroke="#333" stroke-width="3"/>
            <circle cx="135" cy="130" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <line x1="220" y1="130" x2="305" y2="130" stroke="#333" stroke-width="3"/>
            <circle cx="305" cy="130" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <line x1="220" y1="130" x2="170" y2="175" stroke="#333" stroke-width="3"/>
            <circle cx="170" cy="175" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
            <line x1="220" y1="130" x2="270" y2="85" stroke="#333" stroke-width="3"/>
            <circle cx="270" cy="85" r="22" fill="#ffcccc" stroke="#d32f2f" stroke-width="2"/>
        </svg>
    `;
}

function createQuizEthene() {
    return `
        <svg width="520" height="240" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
            <text x="260" y="20" text-anchor="middle" font-size="14" font-weight="bold">Diagram 8</text>
            <circle cx="220" cy="120" r="24" fill="#e0e0e0" stroke="#333" stroke-width="2"/>
            <circle cx="300" cy="120" r="24" fill="#e0e0e0" stroke="#333" stroke-width="2"/>
            <line x1="244" y1="112" x2="276" y2="112" stroke="#333" stroke-width="3"/>
            <line x1="244" y1="128" x2="276" y2="128" stroke="#333" stroke-width="3"/>
            <circle cx="170" cy="70" r="18" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <line x1="205" y1="105" x2="182" y2="82" stroke="#333" stroke-width="2"/>
            <circle cx="170" cy="170" r="18" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <line x1="205" y1="135" x2="182" y2="158" stroke="#333" stroke-width="2"/>
            <circle cx="350" cy="70" r="18" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <line x1="315" y1="105" x2="338" y2="82" stroke="#333" stroke-width="2"/>
            <circle cx="350" cy="170" r="18" fill="#ffffff" stroke="#666" stroke-width="2"/>
            <line x1="315" y1="135" x2="338" y2="158" stroke="#333" stroke-width="2"/>
        </svg>
    `;
}

// Diagram mapping function
function getDiagram(diagramName) {
    const diagrams = {
        'electronDensityCovalent': createElectronDensityCovalent(),
        'electronDensityComparison': createElectronDensityComparison(),
        'dotCrossHCl': createDotCrossHCl(),
        'dotCrossH2O': createDotCrossH2O(),
        'dotCrossO2': createDotCrossO2(),
        'dotCrossN2': createDotCrossN2(),
        'dotCrossCO2': createDotCrossCO2(),
        'dotCrossCH4': createDotCrossCH4(),
        'dotCrossNH4': createDotCrossNH4(),
        'dotCrossAl2Cl6': createDotCrossAl2Cl6(),
        'dotCrossH3O': createDotCrossH3O(),
        'diamondStructure': createDiamondStructure(),
        'graphiteStructure': createGraphiteStructure(),
        'grapheneStructure': createGrapheneStructure(),
        'bondingContinuum': createBondingContinuum(),
        'polarH2O': createPolarH2O(),
        'nonpolarCO2': createNonpolarCO2(),
        'nonpolarCCl4': createNonpolarCCl4(),
        'polarNH3': createPolarNH3(),
        'polarityTest': createPolarityTest(),

        // Shapes of molecules (VSEPR)
        'shapeBeCl2': createShapeBeCl2(),
        'shapeBCl3': createShapeBCl3(),
        'shapeCH4': createShapeCH4(),
        'shapeNH3': createShapeNH3(),
        'shapeNH4': createShapeNH4(),
        'shapeH2O': createShapeH2O(),
        'shapeCO2': createShapeCO2(),
        'shapePCl5': createShapePCl5(),
        'shapeSF6': createShapeSF6(),
        'shapeC2H4': createShapeC2H4(),

        // Quiz (unlabeled) shape diagrams
        'quizLinear': createQuizLinear(),
        'quizTrigPlanar': createQuizTrigPlanar(),
        'quizTetrahedral': createQuizTetrahedral(),
        'quizTrigPyramidal': createQuizTrigPyramidal(),
        'quizBent': createQuizBent(),
        'quizTrigBipyramidal': createQuizTrigBipyramidal(),
        'quizOctahedral': createQuizOctahedral(),
        'quizEthene': createQuizEthene()
    };
    return diagrams[diagramName] || '';
}

// Render questions
function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    let totalMaxScore = 0;
    
    questionsData.forEach(section => {
        // Section header
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'section-header';
        sectionHeader.innerHTML = `
            ${section.section}
            <div style="font-size: 0.7em; margin-top: 10px; font-weight: normal; opacity: 0.9;">
                ${section.sectionInfo}
            </div>
        `;
        container.appendChild(sectionHeader);
        
        // Questions
        section.questions.forEach(q => {
            totalMaxScore += q.maxScore;
            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            questionBlock.innerHTML = `
                <div class="question-header">
                    <div class="question-text">
                        <strong>Q${q.id}:</strong> ${q.question}
                    </div>
                    <div class="question-meta">
                        <span class="bloom-badge">${q.bloom}</span>
                        <select class="score-select" data-qid="${q.id}" data-maxscore="${q.maxScore}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                ${q.diagram ? `
                    <div class="diagram-section">
                        <button class="diagram-btn" data-qid="${q.id}">Show Diagram</button>
                        <div class="diagram-content" id="diagram-${q.id}">
                            <div class="diagram">${getDiagram(q.diagram)}<div class="diagram-caption">Figure: Visual representation</div></div>
                        </div>
                    </div>
                ` : ''}
                <div class="answer-section">
                    <button class="reveal-btn" data-qid="${q.id}">Reveal Answer</button>
                    <div class="answer-text" id="answer-${q.id}">
                        ${q.answer}
                    </div>
                </div>
            `;
            container.appendChild(questionBlock);
        });
    });
    
    // Update total score display
    document.getElementById('totalScore').textContent = totalMaxScore;
    
    // Add event listeners
    addEventListeners();
}

// Add event listeners
function addEventListeners() {
    // Reveal buttons
    document.querySelectorAll('.reveal-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const qid = this.getAttribute('data-qid');
            const answerDiv = document.getElementById(`answer-${qid}`);
            
            if (answerDiv.classList.contains('show')) {
                answerDiv.classList.remove('show');
                this.textContent = 'Reveal Answer';
                this.classList.remove('revealed');
            } else {
                answerDiv.classList.add('show');
                this.textContent = 'Hide Answer';
                this.classList.add('revealed');
            }
        });
    });
    
    // Diagram buttons
    document.querySelectorAll('.diagram-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const qid = this.getAttribute('data-qid');
            const diagramDiv = document.getElementById(`diagram-${qid}`);

            if (!diagramDiv) return;

            if (diagramDiv.classList.contains('show')) {
                diagramDiv.classList.remove('show');
                this.textContent = 'Show Diagram';
                this.classList.remove('revealed');
            } else {
                diagramDiv.classList.add('show');
                this.textContent = 'Hide Diagram';
                this.classList.add('revealed');
            }
        });
    });

    // Score selects
    document.querySelectorAll('.score-select').forEach(select => {
        select.addEventListener('change', updateTotalScore);
    });
}

// Update total score
function updateTotalScore() {
    let userTotal = 0;
    document.querySelectorAll('.score-select').forEach(select => {
        userTotal += parseInt(select.value);
    });
    document.getElementById('userScore').textContent = userTotal;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderQuestions();
});
