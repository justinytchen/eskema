import React, {Component} from 'react';
import Draggable from 'react-draggable';
import TextFieldWidget from './widgets/TextFieldWidget';
import NumberWidget from './widgets/NumberWidget';
import CreateWidgetModal from './CreateWidgetModal';
import {Row, Col, Button, Container} from 'react-bootstrap';

class DashboardNav extends Component{
    render(){
      
        return (
            <Container>
                <Row>
                    <Col>
                        <CreateWidgetModal />
                    </Col>
                    <Col>some text</Col>
                    <Col>zzz</Col>
                </Row>
            </Container>
        );
    }
}

export default DashboardNav;
