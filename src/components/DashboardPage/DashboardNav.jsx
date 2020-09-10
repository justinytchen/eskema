import React, {Component} from 'react';
import CreateWidgetModal from './CreateWidgetModal';
import {Row, Col, Container} from 'react-bootstrap';

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
