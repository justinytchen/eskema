import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {newGuid} from '../util/ObjectUtils';

class LandingPage extends Component{
    createNewBoard(){
        const guid = newGuid();
        this.props.history.push("/board/" + guid);
    }

    render(){
        return (
            <div className="landing-container">
                <Row>
                    <Col lg={1}>z</Col> 
                    <Col lg={10}>
                        <Button variant="primary" onClick = {this.createNewBoard.bind(this)}>New Board</Button>
                    </Col> 
                    <Col lg={1}>zzz</Col> 
                </Row>    
            </div>
        );
    }
}

export default LandingPage;
