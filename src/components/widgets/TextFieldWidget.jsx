import WidgetContainer from './WidgetContainer/WidgetContainer'
import React, {Component} from 'react';
import Draggable from 'react-draggable';
import {Form} from 'react-bootstrap';
import {Rnd} from 'react-rnd';

class TextFieldWidget extends Component{
    constructor(props){
        super(props);
        this.state = {
            editMode: true,
            text:"zzzzz"
        };
        this.textInput = React.createRef();
        this.containerRef = React.createRef();
    }


    handleKeyPress(target) {
        if(target.charCode==13){
          this.setState({
              text: this.textInput.current.value
          }); 
          this.containerRef.current.toggleEditMode();
      } 
    }
    
    renderEditMode(){
        return (
            <div className="text-widget">
                <Form.Control autoFocus 
                autoComplete="none" 
                defaultValue = {this.state.text} ref={this.textInput} onKeyPress={this.handleKeyPress.bind(this)}/>
            </div>
        );
    }
    
    renderDisplayMode(){
        return (
            <div className="text-widget">
                {this.state.text}
            </div>
        );
    }
    
    toDisplayMode(){
        this.setState({
            text: this.textInput.current.value
        }); 
    }

    render(){
        return (
            <WidgetContainer 
                ref = {this.containerRef}
                toDisplayMode = {() => this.toDisplayMode()}
                renderEditMode = {() => this.renderEditMode()}
                renderDisplayMode = {() => this.renderDisplayMode()}
                enableResizing = {{top: false, bottom: false, left: true, right: true}}
                id = {this.props.id}
            />
        );
    }
}

export default TextFieldWidget;