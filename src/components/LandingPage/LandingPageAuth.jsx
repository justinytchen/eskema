import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {newGuid} from '../../util/ObjectUtils';
import { withFirebase } from '../../firebase';

class LandingPageAuthBase extends Component{
    createNewBoard(){
        const guid = newGuid();
        this.props.history.push("/board/" + guid);
    }

    signout(){
        this.props.firebase.authMgr
            .doSignOut()
            .catch(error => {
            this.setState({ error });
            });

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
                        <Button variant="primary" onClick = {this.signout.bind(this)}>Sign Out</Button>
                    </Col> 
                </Row>    
            </div>
        );
    }
}

const LandingPageAuth = withFirebase(LandingPageAuthBase);
export default LandingPageAuth;