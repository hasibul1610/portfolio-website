import React from 'react';
import { Container } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            "id": 1,
            "name": "Bike Mart",
            "featureImg": "https://i.ibb.co/85yCVDW/Bike-Mart.png",
            "liveLink": ""
        },
        {
            "id": 2,
            "name": "Travel Booking",
            "featureImg": "https://i.ibb.co/kKSTcc9/Travlio.png",
            "liveLink": ""
        },
        {
            "id": 3,
            "name": "Dental Clinic",
            "featureImg": "https://i.ibb.co/4RD2JFd/Dental-Clinic.png",
            "liveLink": ""
        },
    ];
    console.log(projects)
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