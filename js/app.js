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
        skillsContainer.innerHTML = app.resumeItems.skills.map(category => `
            <div class="skill-category">
                <h3>${category.category}</h3>
                <div class="skill-pills">
                    ${category.items.map(skill => `<span class="pill">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');   

        // const experienceContainer = document.getElementById('experience-container');
        // experienceContainer.innerHTML = app.resumeItems.experience.map(experience => `
        //     <div class="experience-item">
        //         <div class="exp-header">
        //             <h3>${experience.title}</h3>
        //             <span class="date">${experience.date}</span>
        //         </div>
        //         <ul>
        //             ${experience.details.map(detail => `<li>${detail}</li>`).join('')}
        //         </ul>
        //     </div>
        // `).join('');   
    }
})(window.app = window.app || {});