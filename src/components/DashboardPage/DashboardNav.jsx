import React, {Component} from 'react';
import CreateWidgetModal from './CreateWidgetModal';
import {Row, Col, Container, Button} from 'react-bootstrap';
import {withFirebase} from "../../firebase";

class DashboardNav extends Component{
    onSave(){
        this.props.firebase.boardMgr.saveWidgetsToBoard(this.props.boardID, this.props.widgets);
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

export default withFirebase(DashboardNav);
