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
        this.props.dispatch(createBoard("demo1", demoBoards.demo1));
        this.props.dispatch(createBoard("demo2", demoBoards.demo2));
        this.props.dispatch(createBoard("demo3", demoBoards.demo3));
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
            <Row>
                <Col sm={4}>
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
                </Col>
                <Col sm={8} className="demo-canvas-container">
                    <DashboardCanvas boardID={this.state.currentDemo} demo={true} />
                </Col>

            </Row>
        );
    }
};

export default connect()(DemoCarousel);