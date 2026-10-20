// Scale step database
const scaleData = {
    1: {
        display: "10⁻⁹ m (Nanoscale)",
        title: "Two-Photon Laser Lithography",
        desc: "Engineering custom optical pathways and adjusting ultra-fast laser pulses to fabricate high-precision structural hydrogels.",
        svg: `<line x1="20" y1="50" x2="80" y2="50" stroke="#0055ff" stroke-width="3" /><circle cx="50" cy="50" r="6" fill="#ff2d55"/>`
    },
    2: {
        display: "10⁻⁶ m (Microscale)",
        title: "Bacterial Motility Biophysics",
        desc: "Modeling the hydrodynamic profiles and active matter trajectories of flagellated micro-organisms in fluid environments.",
        svg: `<circle cx="50" cy="50" r="30" stroke="#0055ff" stroke-width="2" fill="none"/><path d="M 20 20 Q 50 80 80 20" stroke="#0055ff" stroke-width="1.5" fill="none" opacity="0.4"/>`
    },
    3: {
        display: "10⁻³ m (Network Scale)",
        title: "Psychiatric Genomics Bioinformatics",
        desc: "Building high-dimensional analytical pipelines to categorize multi-omic transcriptomic variations in human neural tissue profiles.",
        svg: `<circle cx="30" cy="30" r="4" fill="#0055ff"/><circle cx="70" cy="30" r="4" fill="#0055ff"/><circle cx="50" cy="70" r="4" fill="#0055ff"/><line x1="30" y1="30" x2="50" y2="70" stroke="#0055ff" stroke-width="1"/><line x1="70" y1="30" x2="50" y2="70" stroke="#0055ff" stroke-width="1"/>`
    },
    4: {
        display: "10⁹ m+ (Cosmic Scale)",
        title: "Exoplanet Atmospheric Modeling",
        desc: "Simulating planetary transit configurations and spectral signatures to analyze potential habitable biomarkers on distant worlds.",
        svg: `<circle cx="50" cy="50" r="25" fill="#ffb300"/><circle cx="25" cy="50" r="6" fill="#0055ff"/>`
    }
};

const slider = document.getElementById('scaleSlider');
const scaleDisplay = document.getElementById('scaleDisplay');
const scopeTitle = document.getElementById('scopeTitle');
const scopeDesc = document.getElementById('scopeDesc');
const visualAsset = document.getElementById('visualAsset');
const cards = document.querySelectorAll('.project-card');

slider.addEventListener('input', (e) => {
    const val = e.target.value;
    
    // 1. Update text and SVG layout within the hero core widget
    scaleDisplay.textContent = scaleData[val].display;
    scopeTitle.textContent = scaleData[val].title;
    scopeDesc.textContent = scaleData[val].desc;
    visualAsset.innerHTML = scaleData[val].svg;
    
    // 2. Automatically sync with the professional project list further down
    cards.forEach(card => {
        card.classList.remove('active-card');
        if(card.getAttribute('data-step') == val) {
            card.classList.add('active-card');
        }
    });
});
