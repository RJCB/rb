import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const ProfessionalInfo = () => {
    return (
        <div className="professional-info">
            <div className="experience">
                <h2>WORK EXPERIENCE</h2>
                <CardGroup style={{ flexDirection: "column" }}>
                    <Card body>
                        <Card.Title as="h3">CIBC</Card.Title>
                        <h4>Front-End developer<span>May 2019 - current</span></h4>
                        <p className="techstack"><span>HTML, CSS, JS ES6+, Ember JS, Vue JS, Handlebars, Sass</span></p>
                        <div className="role">
                            <p>Build and maintain CIBC and Simplii banking applications</p>
                        </div>
                    </Card>
                    <Card body>
                        <h3>WHICH COMPANY</h3>
                        <h4>Front-End developer<span>Sep 2017 - May 2019</span></h4>
                        <p className="techstack"><span>HTML, CSS, JS ES6+, React JS, Redux, Sass</span></p>
                        <div className="role">
                            <p>Build and maintain CIBC and Simplii banking applications</p>
                        </div>
                    </Card>
                    <Card body>
                        <h3>Paragon Systems</h3>
                        <h4>Front-End developer<span>Apr 2016 - Sep 2017</span></h4>
                        <p className="techstack"><span>HTML, CSS, JS ES6+, Ember JS, Handlebars</span></p>
                        <div className="role">
                            <p>Build and maintain an Internal application</p>
                            <p>Work with designer to design FE part of the application</p>
                        </div>
                    </Card>
                </CardGroup>
            </div>
            <div className="projects">
                <h2>PROJECTS</h2>
                <CardGroup style={{ flexDirection: "column" }}>
                    <Card body>
                        <Card.Title as="h3">The Movie Database</Card.Title>
                        <p className="techstack"><span>HTML, CSS, React JS, Sass</span></p>
                        <div className="role">
                            <p>Search and view list of movies and tv shows</p>
                        </div>
                        <a href="https://github.com/RJCB/react-movie-db-app" rel="noreferrer noopener" target="_blank">Click to view on GitHub</a>
                    </Card>
                    <Card body>
                        <Card.Title as="h3">Crypto Tracker</Card.Title>
                        <p className="techstack"><span>HTML, CSS, React JS, Sass, Chart JS</span></p>
                        <div className="role">
                            <p>Search and view list of Crypto currencies and their value change chart</p>
                        </div>
                        <a href="https://github.com/RJCB/react-crypto-tracker" rel="noreferrer noopener" target="_blank">Click to view on GitHub</a>
                    </Card>
                    <Card body>
                        <Card.Title as="h3">Youtube clone</Card.Title>
                        <p className="techstack"><span>HTML, CSS, React JS, Redux, Sass, Firebase</span></p>
                        <div className="role">
                            <p>Youtube clone</p>
                        </div>
                        <a href="https://github.com/RJCB/react-youtube-clone" rel="noreferrer noopener" target="_blank">Click to view on GitHub</a>
                    </Card>
                    <Card body>
                        <a href="https://github.com/RJCB" rel="noreferrer noopener" target="_blank">... view more on GitHub</a>
                    </Card>
                </CardGroup>
            </div>
            <div className="education">
                <h2>EDUCATION and CERTIFICATIONS</h2>
                <CardGroup style={{ flexDirection: "column" }}>
                    <Card body className="tmdb">
                        <Card.Title as="h3">Bachelors degree in Electronics and communications engineering - 2012</Card.Title>
                        <p className="techstack"><span>JNTU. Hyderabad, India</span></p>
                        <Card.Title as="h3">Electromechanical engineering technologist - 2015</Card.Title>
                        <p className="techstack"><span>George Brown College. Toronto</span></p>
                        <Card.Title as="h3">ITIL - 2018</Card.Title>
                    </Card>
                </CardGroup>
            </div>
        </div>
    )
}

export default ProfessionalInfo