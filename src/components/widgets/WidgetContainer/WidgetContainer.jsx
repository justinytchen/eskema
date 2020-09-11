import React, {Component} from 'react';
import './WidgetContainer.css';
import WidgetOptions from './WidgetOptions';
import {Rnd} from 'react-rnd';
import { setWidgetPosDim, moveSelected, setSelected } from '../../../actions';
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
        else if(this.props.toEditMode){
            this.props.toEditMode();
        }

        this.props.dispatch(setSelected(this.props.widget.id, !this.state.editMode));
        
        this.setState({
            editMode: !this.state.editMode
        });
    }

    dragStop(e, d){
    }

    onDrag(e, d){
        if(this.props.widget.selected)
            this.props.dispatch(moveSelected(d.deltaX, d.deltaY));
    }

    resizeStop(e, direction, ref, delta, position){
        this.setState({
            width: ref.style.width,
            height: ref.style.height
        });

        this.props.dispatch(setWidgetPosDim(this.props.widget.id, this.state.x, this.state.y, ref.style.width, ref.style.height));
    }
    
    onMouseOver(){
    }

    onMouseOut(){
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.widget.x && this.props.widget.y && this.rnd && this.props.widget.selected)
            this.rnd.updatePosition({ x: this.props.widget.x, y: this.props.widget.y });
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
        var defaults = {
            x:this.props.widget.x,
            y:this.props.widget.y,
            width:this.props.widget.width,
            height:this.props.widget.height
        }
        
        return (
            <Rnd onResizeStop = {this.resizeStop.bind(this)} 
                 onDragStop = {this.dragStop.bind(this)}
                 onDrag = {this.onDrag.bind(this)}
                 enableResizing = {this.state.editMode ? this.props.enableResizing : disableResizing}
                 ref={c => { this.rnd = c; }}
                 default={defaults}
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