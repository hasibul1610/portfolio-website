import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            "id": 1,
            "name": "Bike Mart",
            "featureImg": "https://i.ibb.co/85yCVDW/Bike-Mart.png",
            "liveLink": "https://bike-mart-d38d6.web.app/"
        },
        {
            "id": 2,
            "name": "Travel Booking",
            "featureImg": "https://i.ibb.co/kKSTcc9/Travlio.png",
            "liveLink": "https://travlio-9d92e.web.app/"
        },
        {
            "id": 3,
            "name": "Dental Clinic",
            "featureImg": "https://i.ibb.co/4RD2JFd/Dental-Clinic.png",
            "liveLink": "https://dental-clinic-3fc5f.web.app/"
        },
    ];
    // console.log(projects)
    return (

        <div
            style={{
                backgroundColor: '#262626'
            }}
            id="projects"
        >
            <Container>
                <h2 className="text-center project-header">Projects</h2>

                <div className="project-hr" ></div>

                <h3 className="text-center text-white">My PortFolio</h3>

                <div className="row">
                    {
                        projects?.map(project => (
                            <div className="col-lg-4">
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

                                        {/* <Link to={`/booking/${project?._id}`}>
                                                <button className="btn btn-success">Add To Cart</button>
                                            </Link> */}

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Projects;