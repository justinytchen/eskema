import React, { Component } from 'react';
import DashboardCanvas from './DashboardCanvas';
import DashboardNav from './DashboardNav';
import './DashboardPage.css';
import { unselectAll, addSavedWidget, createBoard, deleteWidgets } from '../../actions';
import keydown, { Keys } from 'react-keydown';
import { withFirebase } from '../../firebase';
import widgets from '../../reducers/widgets';

class DashboardPage extends Component {
    render() {
        const boardID = this.props.match.params.id;
        return (
            <div className="dashboard-viewer">
                <DashboardCanvas boardID={boardID}/>
                <DashboardNav boardID={boardID} />
            </div>
        );
    }
}

export default DashboardPage;
