import React, { Component } from 'react';
import { Jumbotron, Row, Button, Navbar, Nav, Col, Container } from 'react-bootstrap';
import { newGuid } from '../../util/ObjectUtils';
import { withFirebase } from '../../firebase';
import NewBoardButton from './NewBoardButton';
import DemoSection from './sections/DemoSection';
import Features from './sections/Features';
import GetStarted from './sections/GetStarted';
import WelcomeSection from './sections/WelcomeSection';
import LandingNav from './LandingNav';

class LandingPageBase extends Component {

    render() {
        return (
            <div className="landing-container">
                <LandingNav />
                <WelcomeSection />
                <DemoSection />
                <Features />
                <GetStarted />
            </div>
        );
    }
}

const LandingPage = withFirebase(LandingPageBase);
export default LandingPage;