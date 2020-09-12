import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { newGuid } from '../../util/ObjectUtils';
import { withFirebase } from '../../firebase';
import NewBoardButton from './NewBoardButton';

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
                <Row>
                    <Col lg={3}>z</Col>
                    <Col lg={3}>
                        <NewBoardButton />
                    </Col>
                    <Col lg={3}>
                    </Col>
                    <Col lg={3}>
                        <Button onClick={() => this.onRegisterLogin()}>Register/Login</Button>
                    </Col>
                </Row>
                <Row>
                    <img src="https://goodfortunedesignstudio.com/wp-content/uploads/2019/01/Placeholder-Graphic-Icon.jpg"></img>
                </Row>
            </div>
        );
    }
}

const LandingPageNonAuth = withFirebase(LandingPageNonAuthBase);
export default LandingPageNonAuth;