import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {newGuid} from '../../util/ObjectUtils';
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';

class LandingPageNonAuth extends Component{
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
                        <SignupModal/>
                    </Col> 
                    <Col lg={3}>
                        <SigninModal/>
                    </Col> 
                </Row>    
                <Row>
                    <img src = "https://goodfortunedesignstudio.com/wp-content/uploads/2019/01/Placeholder-Graphic-Icon.jpg"></img>
                </Row>
            </div>
        );
    }
}

export default LandingPageNonAuth;