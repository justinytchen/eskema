import React, { Component } from 'react';
import { Jumbotron, Row, Button, Navbar, Nav, Col, Container } from 'react-bootstrap';
import { newGuid } from '../../util/ObjectUtils';
import { withFirebase } from '../../firebase';
import NewBoardButton from './NewBoardButton';
import DemoCarousel from './DemoCarousel';
import bgImage from '../../images/jumbotronbackground.jpg';
import logo from '../../images/logo.png';
import Features from './Features';

class LandingPageNonAuthBase extends Component {
    createNewBoard() {
        const guid = newGuid();
        this.props.history.push("/board/" + guid);
    }

    onRegisterLogin() {
        this.props.firebase.authMgr
            .doSigninWithGoogleAuth()
            .then(authUser => {
                this.props.firebase.userMgr.addUser(authUser.user);
            })
            .catch(error => {
                this.setState({ error });
                console.log(error);
            });
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
                        <Button className = "light-text-button" variant="outline-secondary" onClick={() => this.onRegisterLogin()}>Register/Login</Button>
                        <NewBoardButton />
                    </Nav>
                </Navbar>
                <div className="landing-jumbotron" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs lg="2">
                            </Col>
                            <Col md="auto" className = "jumbotron-popup"><Row>
                                    <h1>Welcome to eskema!</h1>
                                </Row>
                                <Row>
                                    <p>
                                        A virtual whiteboard for education, productivity, or fun
                                    </p>
                                </Row>
                                <Row>
                                    <Button variant="primary">Get Started</Button>
                                </Row></Col>
                            <Col xs lg="2">
                            </Col>
                        </Row>
                    </Container>
                </div>
                <DemoCarousel />
                <Features />
            </div>
        );
    }
}

const LandingPageNonAuth = withFirebase(LandingPageNonAuthBase);
export default LandingPageNonAuth;