import React, { Component } from 'react';
import DashboardCanvas from './DashboardCanvas';
import DashboardNav from './DashboardNav';
import { connect } from 'react-redux'
import './DashboardPage.css';
import { unselectAll } from '../../actions';
import keydown, { Keys } from 'react-keydown';

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseDown: false,
            dragging: false
        };
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

    render() {
        return (
            <div className="dashboard-viewer"
                onMouseDown={this.onMouseDown.bind(this)}>
                <DashboardCanvas widgets={this.props.widgets} />
                <DashboardNav widgets={this.props.widgets}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    widgets: state.widgets
})

export default connect(
    mapStateToProps
)(DashboardPage)
