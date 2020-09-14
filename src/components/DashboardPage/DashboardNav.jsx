import React, {Component} from 'react';
import CreateWidgetModal from './CreateWidgetModal';
import {Row, Col, Container, Button} from 'react-bootstrap';
import {withFirebase} from "../../firebase";
import { connect } from 'react-redux';
import { setDrawMode } from '../../actions';

class DashboardNav extends Component{
    onSave(){
        console.log(this.props);
        this.props.firebase.boardMgr.saveBoard(this.props.boardID, this.props.widgets, this.props.savedDrawing);
    }

    onToggleDrawMode(){
        if(this.props.board){
            console.log(this.props.board.drawMode);
            this.props.dispatch(setDrawMode(this.props.boardID, !this.props.board.drawMode));
        }
    }

    render(){
        return (
            <Container className = "dashboard-page-nav">
                <Row>
                    <Col>
                        <CreateWidgetModal />
                    </Col>
                    <Col>
                        <Button onClick={this.onToggleDrawMode.bind(this)}>Toggle Drawing Mode</Button>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Button onClick={this.onSave.bind(this)}>Save</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default connect(
)(withFirebase(DashboardNav));
