import WidgetContainer from './WidgetContainer/WidgetContainer'
import React, {Component} from 'react';

class NumberWidget extends Component{
    constructor(props){
        super(props);
        this.numInput = React.createRef();
    }
    
    renderEditMode(changeHandler){
        return (
            <div className={"number-widget" + this.props.widget.state}>
                <input type="number" 
                ref={this.numInput}
                autoFocus 
                autoComplete="none" 
                defaultValue = {(this.props.widget.state) ? this.props.widget.state: 0}
                size="1"/>
            </div>
        );
    }
    
    renderDisplayMode(){
        return (
            <div className="number-widget">
                {this.props.widget.state}
            </div>
        );
    }

    getCurrentState(){
        return this.numInput.current.value;
    }

    render(){
        return (
            <WidgetContainer 
                renderEditMode = {this.renderEditMode.bind(this)}
                renderDisplayMode = {() => this.renderDisplayMode()}
                enableResizing = {{top: false, bottom: false, left: true, right: true}}
                getCurrentState = {() => this.getCurrentState()}
                defaultState = {0}
                widget = {this.props.widget}
            />
        );
    }
}

export default NumberWidget;