import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">

            <Container>
                <div className="text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="text-white my-2">Md Hasibul Islam</h3>
                        </div>
                        <div className="col-md-5">
                            <small className="text-white my-2"> &copy; Copyright 2021. All rights reserved.</small>
                        </div>
                        <div className="col-md-3">
                            <div className="social-div my-2">
                                <a href="https://www.facebook.com/hasibul.islam.50596/" target="_blank" rel="noreferrer"><i className="fab fa-2x fa-facebook"></i></a>
                                <a href="https://www.linkedin.com/in/hasibul1610" target="_blank" rel="noreferrer"><i className="fab fa-2x fa-linkedin"></i></a>
                                <a href="https://github.com/hasibul1610" target="_blank" rel="noreferrer"><i className="fab fa-2x fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Footer;