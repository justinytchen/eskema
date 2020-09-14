import React, {Component} from 'react';
import { Button, Modal, Row, Col, Container} from 'react-bootstrap';
import { connect } from 'react-redux'
import { createWidget } from '../../actions'
import { WidgetData, WidgetType } from '../../util/WidgetType';
import { newGuid } from '../../util/ObjectUtils';

class CreateWidgetModal extends Component{
    constructor(props){
        super(props);
        this.state = {show:false};
    }

    handleClose(){
        this.setState({
            show:false
        });
    }
    
    handleShow(){
        this.setState({
            show:true
        });
    }
    
    renderWidgets(){
      const types = Object.keys(WidgetType);
      var content = [];
      for(var i = 0; i < types.length; i++){
        const widgetType = WidgetType[types[i]];
        content.push(
          <Col key = {i}>
            <Button onClick = {() => this.selectedWidget(widgetType)}>{WidgetData[types[i]].name}</Button>
          </Col>
        );
      }
      return content;
    }

    selectedWidget(widgetType){
      this.props.dispatch(createWidget(newGuid(), widgetType));
      this.handleClose();
    }

    render(){
        return (
            <>
              <Button variant="primary" onClick={this.handleShow.bind(this)}>
                Create a New Widget
              </Button>

              <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Widget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Row>
                      {this.renderWidgets()}
                    </Row>
                  </Container>
                </Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleClose.bind(this)}>
                    Add Widget
                  </Button>
                </Modal.Footer> */}
              </Modal>
            </>
        );
    }
}

export default connect()(CreateWidgetModal)
