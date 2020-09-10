import WidgetContainer from './WidgetContainer/WidgetContainer'
import React, {Component} from 'react';

class TextWidget extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:0
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
            <div className="number-widget">
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
    
    renderDisplayMode(){
        return (
            <div className="number-widget">
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
                id = {this.props.id}
            />
        );
    }
}

export default TextWidget;