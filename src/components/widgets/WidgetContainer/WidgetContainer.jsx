import React, {Component} from 'react';
import './WidgetContainer.css';
import WidgetOptions from './WidgetOptions';
import {Rnd} from 'react-rnd';
import { setWidgetPosDim, moveSelected, setSelected, moveWidgetTo, setWidgetState, setWidgetEditMode } from '../../../actions';
import { connect } from 'react-redux';

class WidgetContainer extends Component{
    constructor(props){
        super(props);
        this.state  = {
            editMode: this.props.editMode
        }
        if(!this.props.widget.state)
            this.props.dispatch(setWidgetState(this.props.widget.id, this.props.defaultState));
    }
    
    toggleEditMode(){
        console.log("toggleEditMode");
        if(this.props.widget.editMode){
            this.props.dispatch(setWidgetState(this.props.widget.id, this.props.getCurrentState()));
            if(this.props.toDisplayMode)
                this.props.toDisplayMode();
        }
        else if(this.props.toEditMode){
            this.props.toEditMode();
        }

        this.props.dispatch(setWidgetEditMode(this.props.widget.id, !this.props.widget.editMode));
    }

    dragStop(e, d){
    }

    onDrag(e, d){
        if(this.props.widget.selected)
            this.props.dispatch(moveSelected(d.deltaX, d.deltaY));
        else
            this.props.dispatch(moveWidgetTo(this.props.widget.id, d.x, d.y));
    }

    resizeStop(e, direction, ref, delta, position){
        this.setState({
            width: ref.style.width,
            height: ref.style.height
        });

        this.props.dispatch(setWidgetPosDim(this.props.widget.id, this.state.x, this.state.y, ref.style.width, ref.style.height));
    }

    onMouseClick(e){
        if(e.shiftKey)
            this.props.dispatch(setSelected(this.props.widget.id, !this.props.widget.selected));
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        var changedPos = prevProps.widget.x !== this.props.widget.x || prevProps.widget.y !== this.props.widget.y
        if(prevProps.widget.ref !== this.props.widget.ref){
            return;
        }
        if(prevProps.widget.selected === this.props.widget.selected && changedPos)
            if(this.props.widget.x && this.props.widget.y && this.rnd && this.props.widget.selected)
                this.rnd.updatePosition({ x: this.props.widget.x, y: this.props.widget.y });
    }

    stateChanged(state){
        this.props.dispatch(setWidgetState(this.props.widget.id, state));
    }

    render(){
        var content = this.props.renderDisplayMode();
        var className = "widget-container display-mode"
        if(this.props.widget.editMode){
            content = this.props.renderEditMode(this.stateChanged.bind(this));
            className = "widget-container edit-mode"
        }
        if(this.props.widget.editMode)
            className += " widget-hover"

        if(this.props.widget.selected)
            className += " widget-selected"

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
                 onClick = {this.onMouseClick.bind(this)}
                 enableResizing = {this.props.widget.editMode ? this.props.enableResizing : disableResizing}
                 ref={c => { this.rnd = c; }}
                 default={defaults}
                 bounds={"parent"}
            >
                <div className={className} 
                    onDoubleClick = {this.toggleEditMode.bind(this)} >
                    {content}
                </div>
                {this.props.widget.editMode ? <WidgetOptions/> : null}
                
            </Rnd>
        );
    }
}

export default connect()(WidgetContainer);