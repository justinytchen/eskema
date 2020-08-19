import React, {Component} from 'react';
import Draggable from 'react-draggable';
import TextFieldWidget from './widgets/TextFieldWidget';
import NumberWidget from './widgets/NumberWidget';
import {Row, Col, Button, Container, Modal} from 'react-bootstrap';

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
    
    render(){
        return (
            <>
              <Button variant="primary" onClick={this.handleShow.bind(this)}>
                Create New Widget
              </Button>

              <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleClose.bind(this)}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
        );
    }
}

export default CreateWidgetModal;
