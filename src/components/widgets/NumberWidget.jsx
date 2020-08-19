import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import {Rnd} from 'react-rnd';
import './Widget.css';

class NumberWidget extends Component{
    constructor(props){
        super(props);
        this.state = {
            editMode: true,
            value:0
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
                value: this.textInput.current.value
            }); 
        }
    }
    
    handleKeyPress(target) {
      if(target.charCode==13){
          this.setState({
              editMode: false,
              value: this.textInput.current.value
          }); 
      } 
    }

    renderEditMode(){
        return (
            <div className="textwidget">
                <input type="number" 
                autoFocus 
                autoComplete="none" 
                defaultValue = {this.state.value} 
                ref={this.textInput} 
                size="1"
                onKeyPress={this.handleKeyPress.bind(this)}/>
            </div>
        );
    }

    handleStop(e){
        console.log(e);
    }

    render(){
        var content = this.state.value;
        console.log(this.props);
        if(this.state.editMode){
            content = this.renderEditMode();
        }
        return (
            <Rnd onResizeStop = {this.handleStop.bind(this)} 
                 onDragStop = {this.handleStop.bind(this)}
                 enableResizing = {{top: false, bottom: false, left: true, right: true}}
            >
                <div className="widget-content" onDoubleClick = {this.toggleEditMode.bind(this)}>
                {content}
                </div>
            </Rnd>
        );
    }
}

export default NumberWidget;
