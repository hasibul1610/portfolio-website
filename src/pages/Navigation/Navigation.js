import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav >
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#about">ABOUT</Nav.Link>
                            <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link href="#deets">BLOG</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;