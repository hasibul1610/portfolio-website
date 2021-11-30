import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import shantoImg from '../../../images/shanto.jpg';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';


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

            </Container >
        </div >
    );
};

export default About;