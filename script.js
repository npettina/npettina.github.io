// Scale step database
const scaleData = {
    1: {
        display: "10⁻⁹ m (Nanoscale)",
        title: "Two-Photon Polymerization of Hydrogels",
        desc: "Developed and interfaced with a microscope compatible with two-photon polymerization and fluorescence microscopy to probe cellular properties.",
        svg: `<line x1="20" y1="50" x2="80" y2="50" stroke="#0055ff" stroke-width="3" />
        <circle cx="50" cy="50" r="6" fill="#ff2d55"/>`
    },
    2: {
        display: "10⁻⁶ m (Bacteria)",
        title: "Bacterial Motility, Biophysics, and Modeling",
        desc: "Modeled behavior, interactions, and motility trajectories of flagellated bacteria in semi-fluid environments.",
        svg: `<ellipse cx="50" cy="50" rx="30" ry="10" stroke="#1c6b18" stroke-width="2" fill="none"/>
                <path d="M 20 20 Q 50 80 80 20" stroke="#0055ff" stroke-width="1.5" fill="none" opacity="0.6"/>`
    },
    3: {
        display: "10⁻³ m (Networks)",
        title: "Genetic Variation in Psychiatric Disease",
        desc: "Developed high-dimensional analytical pipelines to understand the influence of genetic and transcriptomic variations in human stem cell-derived neural cells in response to pharmacogenetic perturbations.",
        svg: `<line x1="30" y1="30" x2="50" y2="70" stroke="#0055ff" stroke-width="1"/>
            <line x1="70" y1="30" x2="50" y2="70" stroke="#0055ff" stroke-width="1"/>
            <circle cx="30" cy="30" r="4" fill="#0055ff"/>
            <circle cx="70" cy="30" r="4" fill="#0055ff"/>
            <circle cx="50" cy="70" r="4" fill="#ff2d55"/>`
    },
    4: {
        display: "10⁹ m+ (Planets)",
        title: "Exoplanets, Atmospheres, and More",
        desc: "Interested in studying exoplanetary systems and improving detection methods. More to come!",
        svg: `<circle cx="50" cy="50" r="25" fill="#ffb300"/>
        <circle cx="25" cy="50" r="6" fill="#0055ff"/>`
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
