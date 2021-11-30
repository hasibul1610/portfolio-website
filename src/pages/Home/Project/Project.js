import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Carousel, Container } from 'react-bootstrap';
import './Project.css';



const Project = () => {
    const { projectId } = useParams();

    const [projectDetails, setProjectDetails] = useState([]);
    const [specificDetails, setSpecificDetails] = useState({});



    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjectDetails(data))
    }, [])
    // console.log(projectDetails);

    useEffect(() => {
        if (projectDetails.length > 0) {
            const matchedData = projectDetails.find(detail => detail.id == projectId)
            setSpecificDetails(matchedData);
        }
    }, [projectDetails])

    console.log(specificDetails);
    return (
        <div style={{
            backgroundColor: '#262626',
            minHeight: '100vh'
        }}>
            <h2 className="text-white text-center py-5">Welcome to {specificDetails.name} Details Page</h2>
            <div className=" text-center">
                <Link to="/"> <button className=" back-home">Back to Home</button> </Link>

            </div>
            <Container>
                <div>
                    <Carousel fade>
                        <Carousel.Item>
                            <div className="carousel-img-box">
                                <img
                                    className="carousel-img"
                                    // className="d-block img-fluid"
                                    src={specificDetails?.featureImg}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img-box">
                                <img
                                    className="carousel-img"
                                    // className="d-block img-fluid"
                                    src={specificDetails?.img1}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img-box">
                                <img
                                    className="carousel-img"
                                    // className="d-block img-fluid"
                                    src={specificDetails?.img2}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img-box">
                                <img
                                    className="carousel-img"
                                    // className="d-block img-fluid"
                                    src={specificDetails?.img3}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img-box">
                                <img
                                    className="carousel-img"
                                    // className="d-block img-fluid"
                                    src={specificDetails?.img4}
                                    alt="First slide"
                                />
                            </div>

                        </Carousel.Item>

                    </Carousel>
                </div>
                <br />
                <br />
                <br />
                <h3 className="text-white text-center">Project Description</h3>
                <br />
                <ul className="text-white details-list">
                    <li>{specificDetails?.details?.p1}</li>
                    <li>{specificDetails?.details?.p2}</li>
                    <li>{specificDetails?.details?.p3}</li>
                    <li>{specificDetails?.details?.p4}</li>
                    <li>{specificDetails?.details?.p5}</li>

                </ul>
                <br />
                <br />
                <br />
                <h3 className="text-white text-center">Technology Used</h3>
                <br />
                <p className="text-white text-center">{specificDetails?.technology}</p>
                <br />
                <br />
                <br />
                <div className=" text-center">
                    <Link to="/"> <button className=" back-home">Back to Home</button> </Link>

                </div>

            </Container>



        </div>
    );
};

export default Project;