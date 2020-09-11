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
            text:""
        };
        this.textInput = React.createRef();
    }


    handleKeyPress(target) {
        if(target.charCode==13){
          this.setState({
              text: this.textInput.current.value
          }); 
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
                toDisplayMode = {() => this.toDisplayMode()}
                renderEditMode = {() => this.renderEditMode()}
                renderDisplayMode = {() => this.renderDisplayMode()}
                enableResizing = {{top: false, bottom: false, left: true, right: true}}
                widget = {this.props.widget}
            />
        );
    }
}

export default TextFieldWidget;