import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {newGuid} from '../../util/ObjectUtils';
import { withFirebase } from '../../firebase';

class LandingPageNonAuthBase extends Component{
    createNewBoard(){
        const guid = newGuid();
        this.props.history.push("/board/" + guid);
    }

    render(){
        return (
            <div className="landing-container">
                <Row>
                    <Col lg={3}>z</Col> 
                    <Col lg={3}>
                        <Button variant="primary" onClick = {this.createNewBoard.bind(this)}>New Board</Button>
                    </Col> 
                    <Col lg={3}>
                    </Col> 
                    <Col lg={3}>
                        <Button onClick={() => console.log(this.props.firebase.authHandler.doSigninWithGoogleAuth())}>Register/Login</Button>
                    </Col> 
                </Row>    
                <Row>
                    <img src = "https://goodfortunedesignstudio.com/wp-content/uploads/2019/01/Placeholder-Graphic-Icon.jpg"></img>
                </Row>
            </div>
        );
    }
}

const LandingPageNonAuth = withFirebase(LandingPageNonAuthBase);
export default LandingPageNonAuth;