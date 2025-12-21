// Full Data Content - Populating modals with your specific project descriptions
const projectsData = {
  // --- RESEARCH & DATA SCIENCE ---
  "data-market": {
    title: "The Data Market Observatory",
    subtitle: "Web Development & Strategic Analysis",
    content: `
            <h4>Project Overview</h4>
            <p>I designed and developed a dedicated website acting as a resource to understand the global data market ecosystem.</p>
            
            <h4>Objectives</h4>
            <p>The goal was to create a centralized platform that allows users to have a <strong>global vision of the data market</strong>. It aggregates information to decipher trends, key players, and economic dynamics within the sector.</p>
            
            <h4>Access the Resource</h4>
            <p>You can explore the live platform and navigate through the market analysis using the link below:</p>
            
            <p style="margin-top: 2rem;">
                <a href="https://VOTRE-LIEN-ICI.com" target="_blank" style="
                    display: inline-block;
                    background-color: var(--bordeaux);
                    color: var(--white);
                    padding: 1rem 2rem;
                    text-decoration: none;
                    font-weight: 700;
                    letter-spacing: 1px;
                    border: 1px solid var(--bordeaux);
                    transition: all 0.3s;
                ">VISIT WEBSITE &rarr;</a>
            </p>
        `,
  },
  normativity: {
    title: "Cultural Normativity in the Arab-Islamic World",
    subtitle: "Research Internship - Institut Jean Nicod (ENS-PSL)",
    content: `
            <h4>The Research Question</h4>
            <p>Are Arab-Islamic societies inherently governed by strict moral and social norms? To answer this, I traced the concept of "tightness" across 1,400 years of textual tradition.</p>
            
            <h4>Methodology</h4>
            <ul>
                <li><strong>Big Data Corpus:</strong> Utilised a large-scale corpus (OpenITI) focusing on legal, tradition, and exegesis genres.</li>
                <li><strong>NLP Analysis:</strong> Applied advanced lexical analysis inspired by the "Bag-of-Concepts" framework.</li>
                <li><strong>Modeling:</strong> Developed a "tightness score" capturing the relative prevalence of prescriptive vs. permissive concepts within each text.</li>
            </ul>

            <h4>Key Insights</h4>
            <p>The results revealed not a historical rupture, but a gradual, continuous increase in normative density over the centuries—a slow process of cultural consolidation rather than a reaction to specific events.</p>
            <p><em>This research deepened my ability to work with large, noisy datasets and translate quantitative findings into historical insights.</em></p>
                   <br>
    <br> <a href="Postuler/UROP.pdf" target="_blank" class="social-btn outline">Report</a>
        `,
  },
  "auto-ads": {
    title: "The Automotive Myth (2014-2024)",
    subtitle: "Data Analysis & Cultural Studies",
    content: `
            <h4>Project Overview</h4>
            <p>I examined how the automobile operates as a symbolic object within contemporary brand narratives. Based on a corpus of <strong>8,938 advertisements</strong>, my research focused on how brands articulate forms of distinction, desire, and social aspiration.</p>
            
            <h4>Technical Approach</h4>
            <ul>
                <li><strong>Tools:</strong> Python, BERT embeddings, Topic Modeling.</li>
                <li><strong>Analysis:</strong> Identified narrative regimes: performance/mastery, experiential appeal, and responsibility/sustainability.</li>
            </ul>

            <h4>Strategic Insight</h4>
            <p>The results reveal a structural transformation: rather than abandoning aspiration, advertising discourse reconfigures it through a value-based framing. Mobility becomes a site for expressing social commitment and cultural legitimacy.</p>
        `,
  },
  "films-pred": {
    title: "Predicting Romantic Themes in Cinema",
    subtitle: "Machine Learning Project",
    content: `
            <h4>The Goal</h4>
            <p>Develop a predictive model to determine whether a film’s plot involves themes such as marriage and cheating based solely on its descriptive text.</p>
            
            <h4>Method</h4>
            <p>I used neural networks and predictive analysis techniques to analyze film descriptions. By training models to identify these themes, I learned to connect textual nuances with statistical patterns.</p>
            
            <h4>Reflection</h4>
            <p>This allowed me to reflect on what is gained and lost when intimate, emotional motifs are translated into modeled categories, and how stories encode values and forms of desire.</p>
        `,
  },
  linguistics: {
    title: "Sociolinguistics: Dialects & Context",
    subtitle: "Quantitative Sociology Survey",
    content: `
            <h4>The Study</h4>
            <p>This project explores how individuals speaking dialects (Algerian, Moroccan, Tunisian) adjust their linguistic behavior according to their life context.</p>
            
            <h4>Data Collection</h4>
            <p>Using a dataset of <strong>133 multilingual participants</strong> (mainly from Algeria and France), I analyzed the relationship between dialect usage and social perceptions, including stereotypes and discrimination.</p>
            
            <h4>Findings</h4>
            <p>The study highlights how national background and place of residence influence the frequency of dialect use. It reveals how linguistic practices reflect perceptions of cultural identity and social expectations.</p>
            <p><a href="https://github.com/Safia1602/2024-projet-final-LAMRI-Safia" target="_blank" style="color:var(--gold); font-weight:bold;">View on GitHub &rarr;</a></p>
        `,
  },
  "franco-american": {
    title: "Franco-American Art History Networks",
    subtitle: "Network Analysis & Data Viz",
    content: `
            <h4>Context</h4>
            <p>How do thematic affiliations and collaborations structure themselves between American universities and the French academic field?</p>
            
            <h4>Analysis</h4>
            <p>By mapping these networks, we observed specific "author-domain" nodes. The visualization allows for a comparison of specialization vs. diversification in research topics, observing if connections are concentrated in specific universities or transversal across campuses.</p>
            
            <h4>Outcome</h4>
            <p>Combined data harmonization and semantic analysis to cartograph thematic affinities and collaborations.</p>
        `,
  },

  // --- CREATIVE & EXPERIENCE DESIGN ---
  "marie-antoinette": {
    title: "Visual Novel: The Life of Marie-Antoinette",
    subtitle: "Interdisciplinary Project (History & Code)",
    content: `
            <h4>The Challenge</h4>
            <p>Create an interactive narrative game based on historical events, combining documentary accuracy with fictional choices. I led the project from marketing strategy to team management.</p>
            
            <h4>Implementation</h4>
            <ul>
                <li><strong>Narrative Design:</strong> Writing historical segments and fictional alternatives, structuring parallel storylines.</li>
                <li><strong>Tech:</strong> Coding narrative logic in <strong>Ren'Py</strong>, implementing branching navigation systems.</li>
            </ul>

            <h4>Takeaway</h4>
            <p>Learning to code gave me an appreciation for the logic behind interactive systems—how constraints shape choices and how design decisions influence engagement.</p>
        `,
  },
  "memory-game": {
    title: "Visual Memory & Color Perception",
    subtitle: "Experimental Game Design",
    content: `
            <h4>The Experiment</h4>
            <p>I designed an interactive game where participants briefly observe a color grid before reconstructing it via "drag and drop". This was followed by a questionnaire on concentration and memory.</p>
            
            <h4>Objectives</h4>
            <ul>
                <li><strong>Design:</strong> Creating a constrained environment to test attention.</li>
                <li><strong>Analysis:</strong> Collecting behavioral data to analyze recall strategies and decision-making patterns.</li>
            </ul>
            
            <h4>Skills</h4>
            <p>Experimental design, protocol rigor, statistical analysis of anonymous responses, and result visualization.</p>
        `,
  },
  zaman: {
    title: "L'Ombre du Zaman",
    subtitle: "Virtual Exhibition & Curating",
    content: `
            <h4>Concept</h4>
            <p>A diachronic virtual exhibition on the theme of Time, using museum collections from a single city (archaeology, photography, cinema, horology).</p>
            
            <h4>My Contribution</h4>
            <ul>
                <li><strong>Scenography:</strong> Designed a pathway with two thematic rooms: Historical Time vs. Time as Material.</li>
                <li><strong>Curation:</strong> Wrote curatorial texts, labels, and mediation content for diverse audiences.</li>
                <li><strong>Reflection:</strong> Co-authored an article for <em>Entre-Temps</em> (Collège de France) analyzing the exhibition as an experiential device.</li>
            </ul>
            
            <p><em>"The exhibition challenged me to think simultaneously about content, form, and audience."</em></p>
                <a href="Postuler/article.pdf" target="_blank" class="social-btn outline">article</a>
                <a href="Postuler/modelisation.mp4" target="_blank" class="social-btn outline">video</a>
                <a href="Postuler/expo.pdf" target="_blank" class="social-btn outline">Description of the exposition</a>
    <br>
    <br>
            <p><a href="https://odhn.ens.psl.eu/newsroom/invitation-aux-voyages-numeriques" target="_blank" style="color:var(--gold);">View at ODHN &rarr;</a></p>
        `,
  },
  kanak: {
    title: "Dispersed Kanak Heritage",
    subtitle: "Critical Data Visualization",
    content: `
            <h4>The Dataset</h4>
            <p>Worked with the "Inventaire du Patrimoine Kanak Dispersé" (Quai Branly), a dataset marked by colonial history and uncertain provenance.</p>
            
            <h4>Visual Solution</h4>
            <p>I designed a visual system that made asymmetries immediately perceptible: the overrepresentation of certain cultural areas and the "silences" embedded in the archival record.</p>
            
            <h4>Ethical Design</h4>
            <p>The challenge was to make biases visible, echoing critical approaches. This strengthened my ability to articulate an ethical position through design choices.</p>
        `,
  },
  "four-colors": {
    title: "The Four-Colour System",
    subtitle: "Design Fiction & World Building",
    content: `
            <h4>The Lore</h4>
            <p>Created for the fictional "Azerqaq" people, a meditative civilization. They view numbers not as abstractions but as sensory entities linked to natural cycles.</p>
            
            <h4>The System</h4>
            <p>I constructed a positional base-4 notation where each digit corresponds to a color. Beyond arithmetic, I imagined the anthropological framework: rituals, ceremonial operations, and how colors encode collective states.</p>
            
            <h4>Goal</h4>
            <p>To analyze how abstract systems acquire meaning and how communities use symbolic structures to orient behavior.</p>
        `,
  },
  joyce: {
    title: "James Joyce: A Painful Case",
    subtitle: "Creative Adaptation (Animation)",
    content: `
            <h4>Artistic Intention</h4>
            <p>A poetic animated short film that reinterprets Joyce's narrative through sound, light, and rhythm. The focus is on affective paralysis, loss, and delayed consciousness.</p>
            
            <h4>Approach</h4>
            <p>We transposed Joyce's epiphany structure into a sensory dramaturgy. By reimagining Dublin as a mental space, the adaptation foregrounds perception over plot.</p>
            
            <h4>Outcome</h4>
            <p>Strengthened ability to think across media and analyze narrative forms as systems of meaning.</p>
        `,
  },
  pixels: {
    title: "Audience Study: PIXELS Exhibition",
    subtitle: "Behavioral Observation & Analysis",
    content: `
            <h4>The Study</h4>
            <p>Conducted an observation study at an immersive digital art exhibition to understand how visitors engage with interactive artworks.</p>
            
            <h4>Findings</h4>
            <p>Visitors—families and young adults—privilege sensory immediacy, experimentation, and image-sharing over contemplative engagement. The study revealed how digital devices influence attention and circulation.</p>
            
            <h4>Method</h4>
            <p>Ethnographic observation followed by a quantitative survey to translate qualitative impressions into indicators.</p>
        `,
  },
  podcast: {
    title: "Podcast: Alexander Grothendieck",
    subtitle: "Science Communication",
    content: `
            <h4>Project</h4>
            <p>Writing and production of a podcast for a conference dedicated to the mathematician Alexander Grothendieck, organized at ENS.</p>
            
            <h4>Skills</h4>
            <p>Scriptwriting, audio production, and the ability to communicate complex scientific history to a broader audience.</p>
        `,
  },
  "perfume-market": {
    title: "Vintage Perfume Bottles Market",
    subtitle: "Art Market Analysis & Acquisition",
    content: `
            <h4>Market Analysis</h4>
            <p>Study of the art market related to perfume bottles, analyzing auctions and archives to understand historical and contemporary value.</p>
            
            <h4>Acquisition Dossier</h4>
            <p>Simulated a museum acquisition proposal. I selected a specific object (recently sold), justified its relevance for a specific museum, performed an iconographic and provenance study, and wrote a financial justification based on market data.</p>
        `,
  },

  // --- ENGAGEMENTS (Leadership Section) ---
  // --- ENGAGEMENTS (Leadership Section - DETAILED) ---

  "fondation-florence": {
    title: "Fondation Florence",
    subtitle: "Young Talent (Excellence & Equal Opportunity)",
    content: `
            <h4>A Lever for Professional Insertion</h4>
            <p>Being selected as a "Young Talent" by the Fondation Florence is an integration into a circle of excellence based on diversity. The Foundation guides students toward professional success through personalized mentorship and access to cultural programs designed to broaden horizons.</p>
            
            <h4>Strategic & Aesthetic Vision</h4>
            <p>This experience allowed me to develop essential qualities:</p>
            <ul>
                <li><strong>Strategic Thinking:</strong> Building a thoughtful career path and managing goals autonomously.</li>
                <li><strong>Cultural Intelligence:</strong> Understanding how aesthetic and cultural experiences nourish communication approaches and brand valuation strategies.</li>
                <li><strong>Social Requirement:</strong> Maintaining a strong commitment to equal opportunity while aiming for high standards.</li>
            </ul>
        `,
  },

  eddmon: {
    title: "Eddmon",
    subtitle: "Selective Academic Tutoring",
    content: `
            <h4>Rigor & Operational Excellence</h4>
            <p>I work as a tutor for Eddmon, an organization distinguished by its <strong>demanding selection process</strong> and pedagogy oriented towards tangible progress. I assume this role with rigor, contributing professionally to an organization focused on client success.</p>
            
            <h4>Key Competencies</h4>
            <p>This daily operational activity has strengthened my ability to:</p>
            <ul>
                <li><strong>Pedagogical Communication:</strong> Adapting my discourse to the specific needs of each interlocutor.</li>
                <li><strong>Autonomous Management:</strong> Leading structured missions and managing time effectively.</li>
                <li><strong>Responsibility:</strong> Fostering self-confidence and motivation in a benevolent framework.</li>
            </ul>
        `,
  },

  "les-ombres": {
    title: "Les Ombres",
    subtitle: "Mentor for Child Welfare (ASE)",
    content: `
            <h4>Mediation & Co-construction</h4>
            <p>I am engaged with <em>Les Ombres</em>, an association supporting youth from the Child Welfare System (ASE). My mission is to help them build their educational and professional future through personalized mentorship, administrative guidance, and job search support.</p>
            
            <h4>Change Management & Soft Skills</h4>
            <p>This role confronts me with complex situations requiring a posture that is listening, structured, and proactive. It has honed transversal skills:</p>
            <ul>
                <li><strong>Active Listening & Mediation:</strong> Co-constructing solutions and managing interpersonal dynamics.</li>
                <li><strong>Resource Mobilization:</strong> Finding concrete opportunities adapted to each profile.</li>
                <li><strong>Accompanying Change:</strong> Guiding individuals through transformative processes and building their self-reliance.</li>
            </ul>
            <p><em>This experience reflects my interest in the dynamics of value creation, human experience, and deep engagement.</em></p>
        `,
  },
};

/* --- MODAL LOGIC (Standard) --- */
const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.querySelector(".close-modal");
// Select ALL clickable cards (Projects + Engagements)
const allCards = document.querySelectorAll(".project-card, .engagement-card");

function openModal(id) {
  const data = projectsData[id];
  if (!data) return;

  modalContent.innerHTML = `
        <h2 class="modal-title">${data.title}</h2>
        <p class="modal-meta">${data.subtitle}</p>
        <div class="modal-body">${data.content}</div>
    `;
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "auto";
}

allCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    if (id) openModal(id);
  });
});

closeBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

/* --- SCROLL ANIMATION --- */
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => revealObserver.observe(el));
/* --- FILTER SYSTEM --- */
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Gérer la classe 'active' sur les boutons
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // 2. Récupérer le filtre cliqué
    const filterValue = btn.getAttribute("data-filter");

    // 3. Trier les cartes
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        card.classList.remove("hide");
        card.classList.add("show");
      } else {
        card.classList.add("hide");
        card.classList.remove("show");
      }
    });

    // Petit fix pour réinitialiser les animations de scroll si besoin
    // (Optionnel, dépend de ton IntersectionObserver)
  });
});
