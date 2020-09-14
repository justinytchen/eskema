import React, { Component } from 'react';
import { Col, Row, ButtonGroup, ToggleButton } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { demoBoards } from './demoBoards.js';
import DashboardCanvas from "../DashboardPage/DashboardCanvas"
import { createBoard } from '../../actions/index.js';
import Typist from 'react-typist';
import { connect } from 'react-redux';

class DemoCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDemo: "demo1",
            typing: true,
            messages: ["to take notes","to organize your thoughts", "to brainstorm new ideas", "to teach others"]
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
    typingDone() {
        this.setState({ typing: false }, () => {
            this.setState({ typing: true })
        });
    }
    render() {
        var typistContent = [];
        for (var i = 0; i < this.state.messages.length; i++) {
            typistContent.push(this.state.messages[i]);
            typistContent.push(<Typist.Delay ms={300} />);
            typistContent.push(<Typist.Backspace count={this.state.messages[i].length} delay={600} />);
            typistContent.push('');
        }
        const message = this.state.messages[0];

        const radios = [
            { name: 'Demo 1', value: 'demo1' },
            { name: 'Demo 2', value: 'demo2' },
            { name: 'Demo 3', value: 'demo3' },
        ];
        return (
            <Row className="landing-demo-section">
                <Row className="landing-demo-header justify-content-center">
                    A better way&nbsp;<div className="landing-demo-typist">
                        <div className="TypistExample-content">
                            <RestartingTypist
                                className="TypistExample-message"
                                onTypingDone={this.typingDone.bind(this)}
                            >
                                {typistContent}
                            </RestartingTypist>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col sm={5} className="demo-canvas-info">
                        <Row className="demo-button-container justify-content-center">
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
                        <Row className="demo-description-container">
                            <p className="demo-description">
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

class RestartingTypist extends Component {
    state = { typing: true }
    done = () => {
        this.setState({ typing: false }, () => {
            setTimeout(() => this.setState({ typing: true }), this.props.timeout || 1200);
        });
    }
    render() {
        const { children, timeout, ...props } = this.props;
        return this.state.typing ?
            <Typist {...props} onTypingDone={this.done}>{children}</Typist>
            : '';
    }
}

export default connect()(DemoCarousel);