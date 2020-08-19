import React, {Component} from 'react';
import Draggable from 'react-draggable';
import {Form} from 'react-bootstrap';
import './Widget.css';
import {Rnd} from 'react-rnd';

class WidgetContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            editMode: true,
            hover:false
        };
    }
    
    toggleEditMode(){
        if(this.state.editMode && this.props.toDisplayMode){
            this.props.toDisplayMode();
        }
        else if(!this.state.editMode && this.props.toEditMode){
            this.props.toEditMode();
        }
        
        this.setState({
            editMode: !this.state.editMode
        });
    }

    handleStop(e){
        console.log(e);
    }
    
    onMouseOver(){
        this.setState({
            hover: true
        });
    }

    onMouseOut(){
        this.setState({
            hover: false
        });
    }

    render(){
        var content = this.props.renderDisplayMode();
        var className = "widget-container display-mode"
        if(this.state.editMode){
            content = this.props.renderEditMode();
            className = "widget-container edit-mode"
        }
        if(this.state.hover)
            className += " widget-hover"
        return (
            <Rnd onResizeStop = {this.handleStop.bind(this)} 
                 onDragStop = {this.handleStop.bind(this)}
                 enableResizing = {this.props.enableResizing}
            >
                <div className={className} 
                     onDoubleClick = {this.toggleEditMode.bind(this)} 
                     onMouseOver={this.onMouseOver.bind(this)} 
                     onMouseOut={this.onMouseOut.bind(this)}>
                    {content}
                </div>
            </Rnd>
        );
    }
}

export default WidgetContainer;
