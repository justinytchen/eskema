import React, {Component} from 'react';
import Draggable from 'react-draggable';
import {Form} from 'react-bootstrap';
import './Widget.css';
import {Rnd} from 'react-rnd';

class TextWidget extends Component{
    constructor(props){
        super(props);
        this.state = {
            editMode: true,
            text:""
        };
        this.textInput = React.createRef();
    }

    toggleEditMode(){
        console.log("double clicked");
        this.setState({
            editMode: !this.state.editMode
        });
        
        if(this.state.editMode){
            this.setState({
                text: this.textInput.current.value
            }); 
        }
    }
    
    handleKeyPress(target) {
      if(target.charCode==13){
          this.setState({
              editMode: false,
              text: this.textInput.current.value
          }); 
      } 
    }

    renderEditMode(){
        return (
            <div className="textwidget">
                <Form.Control autoFocus 
                autoComplete="none" 
                defaultValue = {this.state.text} ref={this.textInput} onKeyPress={this.handleKeyPress.bind(this)}/>
            </div>
        );
    }

    handleStop(e){
        console.log(e);
    }

    render(){
        var content = this.state.text;
        console.log(this.props);
        if(this.state.editMode){
            content = this.renderEditMode();
        }
        return (
            <Rnd onResizeStop = {this.handleStop.bind(this)} 
                 onDragStop = {this.handleStop.bind(this)}
                 enableResizing = {{top: false, bottom: false, left: true, right: true}}
            >
                <div className="DashboardViewer" onDoubleClick = {this.toggleEditMode.bind(this)}>
                {content}
                </div>
            </Rnd>
        );
    }
}

export default TextWidget;
