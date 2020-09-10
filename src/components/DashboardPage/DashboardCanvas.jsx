import React, {Component} from 'react';
import TextFieldWidget from '../widgets/TextFieldWidget';
import NumberWidget from '../widgets/NumberWidget';
import { WidgetType } from '../../WidgetType';

class DashboardCanvas extends Component{
    renderWidgets(){
        if(!this.props.widgets)
            return;
        
        var contents = [];

        for(var i = 0; i < this.props.widgets.length; i++){
            var widget = this.props.widgets[i];
            contents.push(this.renderWidget(widget));
        }
        console.log(contents);
        return contents;
    }

    renderWidget(widget){
        console.log("render widget", widget);
        console.log(WidgetType);
        switch(widget.widgetType){
            case WidgetType.TextFieldWidget:
                return <TextFieldWidget key = {widget.id}/>;
            case WidgetType.NumberWidget:
                return <NumberWidget key = {widget.id}/>;
            default:
                return null;
        }
    }

    render(){
        return (
            <div className="dashboard-canvas">
                {this.renderWidgets()}
            </div>
        );
    }
}

export default DashboardCanvas;
