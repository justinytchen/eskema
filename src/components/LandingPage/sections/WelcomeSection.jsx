import React, { Component } from 'react';
import { Jumbotron, Row, Button, Navbar, Nav, Col, Container } from 'react-bootstrap';

import bgImage from '../../../images/jumbotronbackground.jpg';
import NewBoardButton from '../NewBoardButton';
import logo from '../../../images/logo.png';

class WelcomeSection extends Component{
    render(){
        return(
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
        );
    }
}

export default WelcomeSection;