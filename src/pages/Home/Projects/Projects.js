import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Projects = () => {
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (

        <div
            style={{
                backgroundColor: '#262626'
            }}
            id="projects"
        >
            <Container>
                <Zoom left>
                    <h2 className="text-center project-header">Projects</h2>

                    <div className="project-hr" ></div>
                </Zoom>

                <h3 className="text-center text-white">My PortFolio</h3>

                <div className="row">
                    {
                        projects?.map(project => (
                            <div className="col-lg-4">
                                <Fade top>
                                    <div className="project">
                                        <div className="project-img">
                                            <img src={project?.featureImg} alt="" />
                                        </div>
                                        <div className="project-details">

                                            <h4 className="text-white">{project?.name}</h4>


                                            <a href={project?.liveLink} target="_blank" rel="noreferrer"><button className="project-button">
                                                Live Link
                                            </button></a>
                                            {/* {console.log(project.liveLink)} */}
                                            &nbsp; &nbsp;
                                            <a href={project?.codeLink} target="_blank" rel="noreferrer"><button className="project-button">
                                                Code Link
                                            </button></a>
                                            &nbsp; &nbsp;

                                            <Link to={`/project/${project?.id}`}>
                                                <button className="project-button">See Details</button>
                                            </Link>

                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Projects;