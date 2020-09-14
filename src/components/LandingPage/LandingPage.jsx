import React, { Component } from 'react';
import { Jumbotron, Row, Button, Navbar, Nav, Col, Container } from 'react-bootstrap';
import { newGuid } from '../../util/ObjectUtils';
import { withFirebase } from '../../firebase';
import NewBoardButton from './NewBoardButton';
import DemoSection from './sections/DemoSection';
import bgImage from '../../images/jumbotronbackground.jpg';
import logo from '../../images/logo.png';
import Features from './sections/Features';
import RegisterLoginButton from './RegisterLoginButton';
import GetStarted from './sections/GetStarted';

class LandingPageBase extends Component {
    createNewBoard() {
        const guid = newGuid();
        this.props.history.push("/board/" + guid);
    }

    render() {
        return (
            <div className="landing-container">
                <Navbar className = "landing-unauth-navbar navbar-dark">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={"./logo.png"}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        eskema
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className = "navbar-buttons">
                        <Button className = "light-text-button" variant="outline-secondary">About</Button>
                        <RegisterLoginButton/>
                        <NewBoardButton />
                    </Nav>
                </Navbar>
                <div className="landing-jumbotron" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs lg="2">
                            </Col>
                            <Col md="auto" className = "jumbotron-popup">
                                <Row className = "justify-content-center">
                                    <h1>Welcome to eskema!</h1>
                                </Row>
                                <Row className = "justify-content-center">
                                    <p>
                                        A virtual whiteboard for education, productivity, or fun
                                    </p>
                                </Row>
                                <Row className = "justify-content-center">
                                    <NewBoardButton buttonText = "Get Started"/>
                                </Row></Col>
                            <Col xs lg="2">
                            </Col>
                        </Row>
                    </Container>
                </div>
                <DemoSection />
                <Features />
                <GetStarted />
            </div>
        );
    }
}

const LandingPage = withFirebase(LandingPageBase);
export default LandingPage;