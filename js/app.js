(function(app){
    "use strict";

    app.resumeItems = [];
    app.HomePage = async function(){
        await loadResumeData();
        updateResume();
    };

    async function loadResumeData(){
        const cachedData = sessionStorage.getItem('resume-data');
        // If we have a cache, parse it; otherwise, fetch it.
        if (cachedData) {
            app.resumeItems = JSON.parse(cachedData);
            return; 
        }

        try {
            const response = await fetch('resumeData.json');
            app.resumeItems = await response.json();
            sessionStorage.setItem('resume-data', JSON.stringify(app.resumeItems));
        } catch (error) {
            console.error('Failed to load resume:', error);
        }
    }

    function updateResume(){

        if (!app.resumeItems || Object.keys(app.resumeItems).length === 0) return;

        const header = document.querySelector('.tagline');
        header.innerText = app.resumeItems.header.tagline;

        const summary = document.querySelector('.summary-text');
        summary.innerText = app.resumeItems.summary;

        createSkillsSection("skills-container");
        createExperienceSection("experience");
        renderCompactHistory(app.resumeItems.careerProgression);
        renderEducationData(app.resumeItems.personalGrowth);
        renderPersonalProjects(app.resumeItems.personalProjects);
        setCopyrightYear();
    }

    function createSkillsSection(skill){
       const skillsContainer = document.getElementById(skill);
        const createPill = (text) => `<li><span class="pill">${text}</span></li>`;
        const createCategory = (cat) => `
            <div class="skill-category">
                <h3>${cat.category}</h3>
                <div class="skill-pills">
                    <ul>
                        ${cat.items.map(createPill).join('')}
                    </ul>
                </div>
            </div>
        `;
        skillsContainer.innerHTML = app.resumeItems.skills.map(createCategory).join('');
    }

    function createExperienceSection(exp){
        const experienceContainer = document.getElementById(exp);
        const createExperienceItem = (detail) => `<li><span class="exp-label">${detail.label}:</span> <span class="exp-text">${detail.text}</span></li>`;
        const createExperiencePast = (exp) => `
            <div class="experience-item">
                <div class="exp-header">
                    <h3>${exp.title}</h3>
                    <span class="date">
                    ${exp.endDate === "" 
                        ? `<time datetime="${exp.startISO}">${exp.startDate}</time> – Present` 
                        : `<time datetime="${exp.startISO}">${exp.startDate}</time> – <time datetime="${exp.endISO}">${exp.endDate}</time>`
                    }
                </span>
                </div>
                <ul>
                    ${exp.details.map(createExperienceItem).join('')}
                </ul>
            </div>
        `;
        experienceContainer.innerHTML = app.resumeItems[exp].map(createExperiencePast).join('');
    }

    function renderCompactHistory(data) {
        const historyContainer = document.getElementById('career-progression');
        
        const historyHtml = data.map((item, index) => 
            `<span class="history-chip item-${index + 1}">
                <strong>${item.role}</strong><br>
                <span class="date"><time datetime="${item.startISO}">${item.startDate}</time> – <time datetime="${item.endISO}">${item.endDate}</time></span>
            </span>`
        ).join('');

        historyContainer.innerHTML = historyHtml;
    }

    function renderEducationData(data) {
        const container = document.getElementById('education-container');
        container.innerHTML = data.map((edu, index) => `
            <div class="edu-item item-${index + 1}">
                <span class="edu-category">${edu.category}</span><br>
                <span class="edu-description">${edu.description}</span>
            </div>
        `).join('');
    }

    function renderPersonalProjects(data) {
        const container = document.getElementById('projects-container');
        container.innerHTML = data.map(project => `
            <div class="project-item">
                <strong>${project.name}</strong>
                <span class="project-links">
                    <a href="${project.codeLink}" aria-label="View source code for ${project.name}">[Code]</a> 
                </span>
            </div>
            <p><em>${project.stack}</em></p>
            <p>${project.description}</p>
        `).join('');
    }

    function setCopyrightYear() {
        const yearElement = document.getElementById("year");
        
        if (!yearElement) {
            window.requestAnimationFrame(() => {
                const retry = document.getElementById("year");
                if (retry) retry.textContent = new Date().getFullYear();
            });
            return;
        }
        
        yearElement.textContent = new Date().getFullYear();
    }

    function init() {
        if (window.app && typeof window.app.HomePage === 'function') {
            window.app.HomePage();
        }

        // Add a 500ms delay to ensure a smooth reveal
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) {
                loader.classList.add('hidden');
                // Optional: Fade in your content here if you have a wrapper
                // document.getElementById('resume-grid').style.opacity = '1';
            }
        }, 500); 
    }

    // Defensive "Ready" Check
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init(); // Document is already ready
    }

})(window.app = window.app || {});