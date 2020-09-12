import WidgetContainer from './WidgetContainer/WidgetContainer'
import React, {Component} from 'react';
import {Form} from 'react-bootstrap';

class TextFieldWidget extends Component{
    constructor(props){
        super(props);
        this.textInput = React.createRef();
    }

    renderEditMode(changeHandler){
        return (
            <div className="text-widget">
                <Form.Control autoFocus 
                autoComplete="none" 
                defaultValue = {this.props.widget.state} ref={this.textInput}
                onChange = {(e) => changeHandler(e.target.value)}/>
            </div>
        );
    }
    
    renderDisplayMode(){
        return (
            <div className="text-widget">
                {this.props.widget.state}
            </div>
        );
    }
    
    getCurrentState(){
        return this.textInput.current.value;
    }

    render(){
        return (
            <WidgetContainer 
                renderEditMode = {this.renderEditMode.bind(this)}
                renderDisplayMode = {() => this.renderDisplayMode()}
                enableResizing = {{top: false, bottom: false, left: true, right: true}}
                getCurrentState = {() => this.getCurrentState()}
                defaultState = {""}
                widget = {this.props.widget}
            />
        );
    }
}

export default TextFieldWidget;