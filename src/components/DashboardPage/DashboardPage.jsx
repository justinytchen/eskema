import React, { Component } from 'react';
import DashboardCanvas from './DashboardCanvas';
import DashboardNav from './DashboardNav';
import { connect } from 'react-redux'
import './DashboardPage.css';
import { deleteSelectedWidgets, unselectAll, addSavedWidget } from '../../actions';
import keydown, { Keys } from 'react-keydown';
import { withFirebase } from '../../firebase';

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseDown: false,
            dragging: false
        };
        const boardID = this.props.match.params.id;
        this.props.firebase.boardMgr.getBoardData(boardID, (data) => this.boardDataLoaded(data));
    }

    boardDataLoaded(data){
        const widgets = data.widgets;
        for(var i = 0; i < widgets.length; i+=1){
            this.props.dispatch(addSavedWidget(widgets[i]));
        }
    }

    onMouseDown(e) {
        if (!this.state.dragging && e.target.className === "dashboard-viewer")
            this.props.dispatch(unselectAll());
        this.setState({
            mouseDown: true
        });
    }


    @keydown( 'ctrl+c' ) // or specify `which` code directly, in this case 13
    onCtrlC() {
        console.log("control c");
    }

    @keydown( 'backspace' ) // or specify `which` code directly, in this case 13
    onBackspace() {
        this.props.dispatch(deleteSelectedWidgets());
    }

    render() {
        const boardID = this.props.match.params.id;
        return (
            <div className="dashboard-viewer"
                onMouseDown={this.onMouseDown.bind(this)}>
                <DashboardCanvas widgets={this.props.widgets} />
                <DashboardNav widgets={this.props.widgets} boardID = {boardID}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    widgets: state.widgets
})

export default connect(
    mapStateToProps
)(withFirebase(DashboardPage));
