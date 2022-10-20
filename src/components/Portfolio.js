import React from 'react';

function Portfolio(props) {
    return (
<section class="myWork" id="work">
            <h2 class="sectionTitle">My Work</h2>
            
            <div class="portfolioGridWrapper">
                <div class="portfolioGrid">
                <a href="https://danielcnow.github.io/Bootcamp-Challenges/Accessibility-Code-Refactor/index.html" class="portfolioItem" id="item1">
                    <div class="project-label">
                        <h3>Mock Accessibility Refactor</h3>
                        <p>HTML/CSS</p>
                    </div>
                </a>
                 <a href="https://danielcnow.github.io/moody-tunes/index.html" class="portfolioItem" id="item2">
                    <div class="project-label">
                        <h3>moody tunes</h3>
                        <p>Weather Oriented Music App</p>
                    </div>
                </a>    
                 <a href="./images/portfolio-03.jpg" class="portfolioItem" id="item3">
                    <div class="project-label">
                        <h3>Financials</h3>
                        <p>Entrepreneural Experience</p>
                    </div>
                </a>
                 <a href="./images/portfolio-04.jpg" class="portfolioItem" id="item4">
                    <div class="project-label">
                        <h3>Local Temple Work</h3>
                        <p>Volunteering</p>
                    </div>
                </a>   
                <a href="./images/portfolio-05.jpg" class="portfolioItem" id="item5">
                    <div class="project-label">
                        <h3>oh no</h3>
                        <p></p>
                    </div> 
                 </a> 
            </div>
            </div>
        </section>
    );
}

export default Portfolio;