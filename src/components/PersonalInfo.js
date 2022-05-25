import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const PersonalInfo = () => {
    const FL_List = ["HTML5", "CSS3", "SASS", "BOOTSTRAP", "TAILWIND", "JAVASCRIPT ES6+", "EMBER JS", "REACT JS", "VUE JS", "REDUX", "HANDLEBARS", "CYPRESS", "QUNIT", "AGILE"];
    const VC_List = ["GIT", "GITHUB", "BitBucket"];
    const ALLY_List = ["AXE", "NVDA", "VOICEOVER"];

    const FLelements = FL_List.map((list, index) => {
        return <span key={list + index} className="skill">{list}</span>
    })

    const VCelements = VC_List.map((list, index) => {
        return <span key={list + index} className="skill">{list}</span>
    })

    const ALLYelements = ALLY_List.map((list, index) => {
        return <span key={list + index} className="skill">{list}</span>
    })

    return (
        <div className="personal-info">
            <h1>Rajesh B</h1>
            <h2>Front-End Web Developer</h2>
            <p className="personal-info_description">Hi, I am a web developer based in Toronto. I enjoy building interactive web applications.</p>
            <div className="skills">
                <p><span className="skill-heading">Frameworks and Libraries:</span><span>{FLelements}</span> </p>
                <p><span className="skill-heading">Version control:</span> <span>{VCelements}</span></p>
                <p><span className="skill-heading">Web Accessibility:</span> <span>{ALLYelements}</span></p>
            </div>
            <div className="personal-info_icons">
                <a href="https://github.com/RJCB" rel="noreferrer" target="_blank"><span><FaGithub /></span><span>Github</span></a>
                <a href="https://www.linkedin.com/in/rajesh-b-a2ab92198/" rel="noreferrer noopener" target="_blank"><span><FaLinkedin /></span><span>LinkedIn</span></a>
            </div>
        </div>
    )
}

export default PersonalInfo