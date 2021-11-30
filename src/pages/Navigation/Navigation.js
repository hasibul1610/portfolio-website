import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <NavHashLink
                            to="#home"
                            style={{
                                textDecoration: 'none',
                                color: '#e0dfdc',
                                marginRight: '20px',
                                fontSize: '24px',
                                padding: '10px 0'
                            }}
                            activeClassName="selected"
                            activeStyle={{ color: 'white' }}

                        > <i className="fas fa-home"></i></NavHashLink>
                        <NavHashLink
                            to="#about"
                            style={{
                                textDecoration: 'none',
                                color: '#e0dfdc',
                                marginRight: '20px',
                                fontSize: '24px',
                                padding: '10px 0'
                            }}
                            activeClassName="selected"
                            activeStyle={{ color: 'white' }}

                        >About </NavHashLink>
                        <NavHashLink
                            to="#projects"
                            style={{
                                textDecoration: 'none',
                                color: '#e0dfdc',
                                marginRight: '20px',
                                fontSize: '24px',
                                padding: '10px 0'
                            }}
                            activeClassName="selected"
                            activeStyle={{ color: 'white' }}

                        >Portfolio</NavHashLink>
                        <NavHashLink
                            to="#contact"
                            style={{
                                textDecoration: 'none',
                                color: '#e0dfdc',
                                marginRight: '20px',
                                fontSize: '24px',
                                padding: '10px 0'
                            }}
                            activeClassName="selected"
                            activeStyle={{ color: 'white' }}

                        >Contact</NavHashLink>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;