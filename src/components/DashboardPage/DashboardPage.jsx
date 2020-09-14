import React, { Component } from 'react';
import DashboardCanvas from './DashboardCanvas';
import './DashboardPage.css';

class DashboardPage extends Component {
    render() {
        const boardID = this.props.match.params.id;
        return (
            <div className="dashboard-viewer">
                <DashboardCanvas boardID={boardID}/>
            </div>
        );
    }
}

export default DashboardPage;
