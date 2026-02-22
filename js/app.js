(function(app){
    "use strict";

    app.resumeItems = [];

    app.HomePage = async function(){
        await loadResumeData();
        updateResume();
    };

    async function loadResumeData(){
        const cachedData = sessionStorage.getItem('resume-data');
        if(cachedData != null){
            app.resumeItems = JSON.parse(cachedData);
        }else{
            try {
                const rawData = await fetch('resumeData.json');
                const data = await rawData.json();
                app.resumeItems = data;
                sessionStorage.setItem('resume-data', JSON.stringify(data)); 
            } catch (error) {
                console.error('Error loading resume data:', error);
            }       
        }
    }

    function updateResume(){
        const header = document.querySelector('.tagline');
        header.innerText = app.resumeItems.header.tagline;

        const summary = document.querySelector('.summary-text');
        summary.innerText = app.resumeItems.summary;

        const skillsContainer = document.getElementById('skills-container');
        // Skills Component
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

        //Experience Component
        createExperienceSection("experience-current");
        renderCompactHistory(app.resumeItems.careerProgression);
    }

    function createExperienceSection(exp){
        const experienceContainer = document.getElementById(exp);
        const createExperienceItem = (detail) => `<li><span class="exp-label">${detail.label}:</span> <span class="exp-text">${detail.text}</span></li>`;
        const createExperiencePast = (exp) => `
            <div class="experience-item">
                <div class="exp-header">
                    <h3>${exp.title}</h3>
                    <span class="date">${exp.date}</span>
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
        
        // Wrap each in a span and give the 3rd one a special class
        const historyHtml = data.map((item, index) => 
            `<span class="history-chip item-${index + 1}">
                <strong>${item.role}</strong> <span class="date">${item.years}</span>
            </span>`
        ).join('');

        historyContainer.innerHTML = historyHtml;
    }
})(window.app = window.app || {});