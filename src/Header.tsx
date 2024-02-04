import React from 'react';
import {Container, Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

const Header = () => {
    return (
        <>
            <Navbar data-bs-theme="dark" expand="lg" style={{ backgroundColor: '#002639' }}>
                <Container>
                    <div>
                        <Image src={`${process.env.PUBLIC_URL}/icon.png`} alt="Example" width={40} />
                        <Navbar.Brand href="#home">Dive in Sync</Navbar.Brand>
                    </div>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
