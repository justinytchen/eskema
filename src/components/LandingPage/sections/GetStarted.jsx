import React, { Component } from 'react';
import { Jumbotron, Row, Container, Col } from 'react-bootstrap';
import NewBoardButton from '../NewBoardButton';
import RegisterLoginButton from '../RegisterLoginButton';
import bgImage from '../../../images/whiteboardbg.jpg';

class GetStarted extends Component {

    render() {
        return (
            <div className="get-started-container" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">
                        </Col>
                        <Col md="auto" className = "get-started">
                            <Row className="justify-content-center">
                                <h1 className = "whiteboard-header">Get Started in Seconds</h1>
                            </Row>
                            <Row className="justify-content-center" >
                                <Col>
                                    <Row className="get-started-register-button-container justify-content-center">
                                        <RegisterLoginButton />
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="justify-content-center">
                                        <NewBoardButton />
                                    </Row>
                                </Col>
                            </Row></Col>
                        <Col xs lg="2">
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GetStarted;