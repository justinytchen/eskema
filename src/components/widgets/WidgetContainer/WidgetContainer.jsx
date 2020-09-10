import React, {Component} from 'react';
import './WidgetContainer.css';
import WidgetOptions from './WidgetOptions';
import {Rnd} from 'react-rnd';

class WidgetContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            editMode: true,
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
    }

    onMouseOut(){
    }

    render(){
        var content = this.props.renderDisplayMode();
        var className = "widget-container display-mode"
        if(this.state.editMode){
            content = this.props.renderEditMode();
            className = "widget-container edit-mode"
        }
        if(this.state.editMode)
            className += " widget-hover"

        var disableResizing = {top: false, bottom: false, left: false, right: false}
        

        return (
            <Rnd onResizeStop = {this.handleStop.bind(this)} 
                 onDragStop = {this.handleStop.bind(this)}
                 enableResizing = {this.state.editMode ? this.props.enableResizing : disableResizing}
            >
                <div className={className} 
                    onDoubleClick = {this.toggleEditMode.bind(this)} >
                    {content}
                </div>
                {this.state.editMode ? <WidgetOptions/> : null}
                
            </Rnd>
        );
    }
}

export default WidgetContainer;
