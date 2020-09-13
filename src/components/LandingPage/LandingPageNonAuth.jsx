import React, { Component } from 'react';
import { Row, Col, Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import { newGuid } from '../../util/ObjectUtils';
import { withFirebase } from '../../firebase';
import NewBoardButton from './NewBoardButton';
import DemoCarousel from './DemoCarousel';

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
                <Navbar>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Some Name
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <Button variant="outline-secondary">About</Button>
                        <Button variant="outline-secondary" onClick={() => this.onRegisterLogin()}>Register/Login</Button>
                        <NewBoardButton />
                    </Nav>
                </Navbar>
                    <DemoCarousel />
            </div>
        );
    }
}

const LandingPageNonAuth = withFirebase(LandingPageNonAuthBase);
export default LandingPageNonAuth;