import React from 'react';
import './Banner.css';
import bannerBg from '../../../images/banner-bg.jpg';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';


const bannerBgStyle = {
    // backgroundImage: `url(${bannerBg})`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.557),rgba(0, 0, 0, 0.7)) , url(${bannerBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',


}

const Banner = () => {
    return (
        <div style={bannerBgStyle}>
            <Container>

                <div className="banner d-flex align-items-center">
                    <div className="banner-details">
                        <p>HI THERE, I'M</p>

                        <h3>
                            <Typewriter

                                options={{
                                    strings: [' Md Hasibul Islam'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>
                        <h4>Junior Web Developer</h4>
                        <small>Experienced in HTML5, CSS3, Bootstrap5, React. Enthusiastic about MongoDb, Node, Express, Redux, React
                            Native. Accustomed with Git, Github, Chrome Dev Tool, VS Code, Heroku, and MongoDB Atlas tools.</small>
                        <br />

                        <a href="https://drive.google.com/file/d/10M4gIKwsNbv0niBT2cHqq89DRhmL-PuH/view?usp=sharing" target="_blank" rel="noreferrer"><button> See My Resume  </button> </a>

                    </div>

                </div>

            </Container>

        </div>
    );
};

export default Banner;