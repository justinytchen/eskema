import React, {Component} from 'react';
import './WidgetContainer.css';
import WidgetOptions from './WidgetOptions';
import {Rnd} from 'react-rnd';
import { setWidgetPosDim } from '../../../actions';
import { connect } from 'react-redux';

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

    dragStop(e, d){
        this.setState({
            x: d.x,
            y: d.y
        });

        this.props.dispatch(setWidgetPosDim(this.props.id, d.x, d.y, this.state.width, this.state.height));
    }

    resizeStop(e, direction, ref, delta, position){
        this.setState({
            width: ref.style.width,
            height: ref.style.height
        });

        this.props.dispatch(setWidgetPosDim(this.props.id, this.state.x, this.state.y, ref.style.width, ref.style.height));
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
            <Rnd onResizeStop = {this.resizeStop.bind(this)} 
                 onDragStop = {this.dragStop.bind(this)}
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

export default connect()(WidgetContainer);