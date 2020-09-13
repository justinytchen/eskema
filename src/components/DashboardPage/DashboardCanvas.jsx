import React, {Component} from 'react';
import TextFieldWidget from '../widgets/TextFieldWidget';
import NumberWidget from '../widgets/NumberWidget';
import { WidgetType } from '../../util/WidgetType';
import { connect } from 'react-redux'
import { withFirebase } from '../../firebase';

import keydown, { Keys } from 'react-keydown';

class DashboardCanvas extends Component{
    @keydown('ctrl+c') // or specify `which` code directly, in this case 13
    onCtrlC() {
        console.log("control c");
    }

    @keydown('backspace') // or specify `which` code directly, in this case 13
    onBackspace() {
        // const widgetsToDelete = this.props.widgets.filter((w) => (w.selected)).map(w => w.id);
        // this.props.dispatch(deleteWidgets(widgetsToDelete, this.props.boardID));
        
    }

    renderWidgets(){
        if(!this.props.widgets)
            return;
        
        var contents = [];
        if(this.props.widgets){
            for(var i = 0; i < this.props.widgets.length; i++){
                var widget = this.props.widgets[i];
                contents.push(this.renderWidget(widget));
            }
        }
        return contents;
    }

    renderWidget(widget){
        switch(widget.widgetType){
            case WidgetType.TextFieldWidget:
                return <TextFieldWidget key = {widget.id} widget = {widget} />;
            case WidgetType.NumberWidget:
                return <NumberWidget key = {widget.id} widget = {widget}/>;
            default:
                return null;
        }
    }

    render(){
        return (
            <div className="dashboard-canvas" >
                {this.renderWidgets()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const boardID = ownProps.match.params.id
    var boards = state.boards.filter((b) => (b.id == boardID));
    if(boards.length > 0 && state.widgets.length > 0){
        const curBoard = boards[0];
        
        const curWidgets = state.widgets.filter(w => curBoard.widgets.includes(w.id));
        return ({
            widgets: curWidgets,
            boardID: boardID
        });
    }
    return ({
        widgets: state.widgets,
        state: state,
        boardID: boardID
    });
}

export default DashboardCanvas;
