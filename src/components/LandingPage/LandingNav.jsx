import React, { Component } from 'react';
import {Button, Navbar, Nav } from 'react-bootstrap';

import NewBoardButton from './NewBoardButton';
import RegisterLoginButton from './RegisterLoginButton';
import { newGuid } from '../../util/ObjectUtils';
import { withRouter } from "react-router-dom";

class LandingNav extends Component{
    createNewBoard() {
        const guid = newGuid();
        this.props.history.push("/board/" + guid);
    }

    goToAbout(){
        this.props.history.push("/about");
    }

    render(){
        return(
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
                    <Button onClick={this.goToAbout.bind(this)} className = "light-text-button" variant="outline-secondary">About</Button>
                    <RegisterLoginButton/>
                    <NewBoardButton />
                </Nav>
            </Navbar>
        );
    }
}

export default withRouter(LandingNav);