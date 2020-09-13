import React, { Component } from 'react';
import DashboardCanvas from './DashboardCanvas';
import DashboardNav from './DashboardNav';
import { connect } from 'react-redux'
import './DashboardPage.css';
import { unselectAll, addSavedWidget, createBoard, deleteWidgets } from '../../actions';
import keydown, { Keys } from 'react-keydown';
import { withFirebase } from '../../firebase';
import widgets from '../../reducers/widgets';

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseDown: false,
            dragging: false
        };
        this.props.dispatch(createBoard(this.props.boardID, []));
        this.props.firebase.boardMgr.getBoardData(this.props.boardID, (data) => this.boardDataLoaded(data));
    }

    boardDataLoaded(data) {
        const widgets = data.widgets;
        for (var i = 0; i < widgets.length; i += 1) {
            this.props.dispatch(addSavedWidget(widgets[i], this.props.boardID));
        }
    }

    onMouseDown(e) {
        if (!this.state.dragging && e.target.className === "dashboard-viewer")
            this.props.dispatch(unselectAll());
        this.setState({
            mouseDown: true
        });
    }


    // @keydown('ctrl+c') // or specify `which` code directly, in this case 13
    // onCtrlC() {
    //     console.log("control c");
    // }

    // @keydown('backspace') // or specify `which` code directly, in this case 13
    // onBackspace() {
    //     const widgetsToDelete = this.props.widgets.filter((w) => (w.selected)).map(w => w.id);
    //     this.props.dispatch(deleteWidgets(widgetsToDelete, this.props.boardID));
        
    // }

    render() {
        const boardID = this.props.match.params.id;
        return (
            <div className="dashboard-viewer"
                onMouseDown={this.onMouseDown.bind(this)}>
                <DashboardCanvas widgets={this.props.widgets} />
                <DashboardNav widgets={this.props.widgets} boardID={boardID} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const boardID = ownProps.match.params.id
    var boards = state.boards.filter((b) => (b.id == boardID));
    if(boards.length > 0 && state.widgets.length > 0){
        const curBoard = boards[0];
        
        const curWidgets = state.widgets.filter(w => curBoard.widgets.includes(w.id));
        return ({
            widgets: curWidgets,
            boardID: boardID
        });
    }
    return ({
        widgets: state.widgets,
        state: state,
        boardID: boardID
    });
}
export default connect(
    mapStateToProps
)(withFirebase(DashboardPage));
