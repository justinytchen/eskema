import React, {Component} from 'react';
import CreateWidgetModal from './CreateWidgetModal';
import {Row, Col, Container, Button} from 'react-bootstrap';
import {withFirebase} from "../../firebase";
import { connect } from 'react-redux';

class DashboardNav extends Component{
    onSave(){
        console.log(this.props);
        this.props.firebase.boardMgr.saveBoard(this.props.boardID, this.props.widgets, this.props.savedDrawing);
    }

    render(){
        return (
            <Container className = "dashboard-page-nav">
                <Row>
                    <Col>
                        <CreateWidgetModal />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Button onClick={this.onSave.bind(this)}>Save</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const boardID = ownProps.boardID
    var boards = state.boards.filter((b) => (b.id == boardID));
    if(boards.length > 0){
        const curBoard = boards[0];
        
        const curWidgets = state.widgets.filter(w => curBoard.widgets.includes(w.id));
        return ({
            widgets: curWidgets,
            savedDrawing: curBoard.savedDrawing
        });
    }
    return ({
        widgets: []
    });
}

export default connect(
    mapStateToProps
)(withFirebase(DashboardNav));
