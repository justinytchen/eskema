import React, { Component } from 'react';
import { Col, Row, ButtonGroup, ToggleButton } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { demoBoards } from './demoBoards.js';
import DashboardCanvas from "../DashboardPage/DashboardCanvas"
import { createBoard } from '../../actions/index.js';
import { connect } from 'react-redux'

class DemoCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDemo: "demo1"
        };
        this.props.dispatch(createBoard("demo1", demoBoards.demo1.widgets));
        this.props.dispatch(createBoard("demo2", demoBoards.demo2.widgets));
        this.props.dispatch(createBoard("demo3", demoBoards.demo3.widgets));
    }
    onSelect(e) {
        this.setState({
            currentDemo: e
        });
    }
    render() {
        const radios = [
            { name: 'Demo 1', value: 'demo1' },
            { name: 'Demo 2', value: 'demo2' },
            { name: 'Demo 3', value: 'demo3' },
          ];
        return (
            <Row className = "landing-demo-section">
                <Row className = "landing-demo-header-container justify-content-center">
                    <h1>
                        Potential Use Cases
                    </h1>
                </Row>
                <Row>
                    <Col sm={5} className = "demo-canvas-info">
                        <Row className = "demo-button-container justify-content-center">
                            <ButtonGroup toggle>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="light"
                                        name="radio"
                                        value={radio.value}
                                        checked={this.state.currentDemo === radio.value}
                                        onChange={(e) => this.onSelect(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </Row>
                        <Row className = "demo-description-container">
                            <p className = "demo-description">
                                {demoBoards[this.state.currentDemo].description}
                            </p>
                        </Row>
                    </Col>
                    <Col sm={7} className="demo-canvas-container">
                        <DashboardCanvas boardID={this.state.currentDemo} demo={true} />
                    </Col>
                </Row>

            </Row>
        );
    }
};

export default connect()(DemoCarousel);