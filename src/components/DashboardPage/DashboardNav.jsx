import React, {Component} from 'react';
import CreateWidgetModal from './CreateWidgetModal';
import {Row, Col, Container, Button} from 'react-bootstrap';

class DashboardNav extends Component{
    onSave(){
        console.log(this.props.widgets);
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <CreateWidgetModal />
                    </Col>
                    <Col>some text</Col>
                    <Col>zzz</Col>
                    <Col>
                        <Button onClick={this.onSave.bind(this)}>Save</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DashboardNav;
