import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import shantoImg from '../../../images/shanto.jpg';

const About = () => {
    return (
        <div style={{
            backgroundColor: '#262626'
        }}>
            <Container id="about">
                <h2 className="text-center about-header">ABOUT</h2>

                <div className="about-hr" ></div>

                <div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-img-box">
                                <div className="about-img">
                                    <img width="100%" height="100%" src={shantoImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex  align-items-center" >
                                <span className="who">Who I am</span> <span className="line"></span>
                            </div>
                            <div className="text">
                                <p className="text-white my-3 pt-5">
                                    I’m Oluwakemi Adeleke, a professional and talented  with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics.
                                </p>
                                <p className="text-white my-3 pt-4">
                                    I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie.
                                </p>
                                <p className="text-white my-3 pt-4">
                                    Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.
                                </p>
                                <br />
                                <button className="hire-me-button">Hire Me</button>
                            </div>

                        </div>

                    </div>
                </div>

            </Container >
        </div >
    );
};

export default About;