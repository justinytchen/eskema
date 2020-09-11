import React, { Component } from 'react';
import DashboardCanvas from './DashboardCanvas';
import DashboardNav from './DashboardNav';
import { connect } from 'react-redux'
import './DashboardPage.css';
import { unselectAll } from '../../actions';

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseDown: false,
            dragging: false
        };
    }

    onClick(e) {
        if (!this.state.dragging && e.target.className === "dashboard-viewer")
            this.props.dispatch(unselectAll());
        this.setState({
            mouseDown: false,
            dragging: false
        });
    }

    onMouseDown() {
        this.setState({
            mouseDown: true
        });
    }

    onMouseMove() {
        if (this.state.mouseDown) {
            this.setState({
                dragging: true
            });
        }
    }


    render() {
        return (
            <div className="dashboard-viewer"
                onClick={this.onClick.bind(this)}
                onMouseDown={this.onMouseDown.bind(this)}
                onMouseMove={this.onMouseMove.bind(this)}>
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
