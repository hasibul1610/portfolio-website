import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import shantoImg from '../../../images/shanto.jpg';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import landing from '../../../images/landing.png';
import website from '../../../images/website.png';
import mern from '../../../images/mern.png';
import Fade from 'react-reveal/Fade';




const About = () => {
    return (
        <div style={{
            backgroundColor: '#262626'
        }}>
            <Container id="about">
                <Bounce left>
                    <h2 className="text-center about-header">ABOUT</h2>

                    <div className="about-hr" ></div>
                </Bounce>


                <div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Zoom left>
                                <div className="about-img-box">
                                    <div className="about-img">
                                        <img width="100%" height="100%" src={shantoImg} alt="" />
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex  align-items-center" >
                                <span className="who">Who I am</span> <span className="line"></span>
                            </div>
                            <Zoom right>
                                <div className="text">
                                    <p className="text-white my-3 pt-5">
                                        I’m Md Hasibul Islam, a passionate and talented  with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, computer Networking area.
                                    </p>
                                    <p className="text-white my-3 pt-4">
                                        I develop websites with HTML, CSS , JavaScript, React, Node and MongoDb Database. I have top skills in using tools like VS Code, Firebase, Heroku,Git.
                                    </p>
                                    <p className="text-white my-3 pt-4">
                                        Being a diligent, hardworking and result oriented person, I always work towards achieving best result on each project I lay my hands on.
                                    </p>
                                    <br />
                                    <a href="https://www.linkedin.com/in/hasibul1610" target="_blank" rel="noreferrer">
                                        <button className="hire-me-button">Hire Me</button>
                                    </a>
                                </div>
                            </Zoom>

                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-5">

                    </div>
                    <div className="col-md-7">
                        <Bounce left>

                            <div className=" mt-5 d-flex  align-items-center" >
                                <span className="who">What I do</span> <span className="line"></span>

                            </div>
                            <h3 className="text-white my-3 ms-3">My Services</h3>

                        </Bounce>
                    </div>
                </div>

                <div className="service-section py-5">
                    <div className="row">
                        <div className="col-md-4 mt-4">
                            <Fade bottom>
                                <div className="service-card-1 d-flex flex-column">
                                    <div className="service-card-img text-center mb-3 mt-4">
                                        <img className="" src={landing} alt="" />
                                    </div>
                                    <div className="service-details p-4">
                                        <h3 className=" my-2">Landing Page Design</h3>
                                        <p className=" my-2">I use latest technologies like Html5, CSS3, Bootstrap5 to develop beautiful and attractive landing page.</p>
                                    </div>
                                    <div className="service-bottom-1">

                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-4 mt-4">
                            <Fade bottom delay="200">
                                <div className="service-card-2 d-flex flex-column">
                                    <div className="service-card-img text-center mb-3 mt-4">
                                        <img className="" src={website} alt="" />
                                    </div>
                                    <div className="service-details p-4">
                                        <h3 className=" my-2">Website Development</h3>
                                        <p className=" my-2">I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.</p>
                                    </div>
                                    <div className="service-bottom-2">

                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-4 mt-4">
                            <Fade bottom delay="300">
                                <div className="service-card-3 d-flex flex-column">
                                    <div className="service-card-img text-center mb-3 mt-4">
                                        <img className="" src={mern} alt="" />
                                    </div>
                                    <div className="service-details p-4">
                                        <h3 className=" my-2">MERN Stack</h3>
                                        <p className=" my-2">I use MongoDb, Express JS,React, Node Js to build a full stack Website.</p>
                                    </div>
                                    <div className="service-bottom-3">

                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

            </Container >
        </div >
    );
};

export default About;