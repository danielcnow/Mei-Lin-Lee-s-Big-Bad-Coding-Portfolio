import React from 'react';
import About from './About';


function Header(props) {
    return (
             <header>
                    <nav class="nav">
                        <ul class="navList">
                            <li onClick={ () => {props.setPage("About")} } class="About Me"><a href="#about" class="navLink">About Me</a></li>
                            <li onClick={ () => {props.setPage("Portfolio")} }class="My Work"><a href="#work" class="navLink">My Work</a></li>
                            <li onClick={ () => {props.setPage("Contact")} }class="Socials"><a href="#socials" class="navLink">E-mail</a></li>
                            <li onClick={ () => {props.setPage("Resume")} }class="Resume"><a href="#resume" class="navLink">Resume</a></li>
                        </ul>
                    </nav>
        </header>
    );
}

export default Header;