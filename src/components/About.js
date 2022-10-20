import React from 'react';
import myImage from '../images/devPhoto.jpg'

function About(props) {
    return (
        <section class="aboutMe" id="about">
        <h2 class="sectionTitle">About Me</h2>
            <p>  Hey! My name is Mei-lin Lee I'm Chinese! I've never coded before, but I'm learning! I hope you enjoy looking through my projects and volunteer work! Did I mention I'm a straight A student?</p>
     
        <div class="aboutImg">
            <img src={myImage} alt="Meilin Headshot"/>
        </div>
    </section>
    );
}

export default About;