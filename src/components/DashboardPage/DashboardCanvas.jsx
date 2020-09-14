import React, { Component } from 'react';
import TextFieldWidget from '../widgets/TextFieldWidget';
import NumberWidget from '../widgets/NumberWidget';
import { WidgetType } from '../../util/WidgetType';
import { connect } from 'react-redux'
import { withFirebase } from '../../firebase';
import { unselectAll, addSavedWidget, createBoard, deleteWidgets, updateDrawing, saveDrawing } from '../../actions';
import CanvasDraw from "react-canvas-draw";
import { compress, decompress } from "lz-string";
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import DashboardNav from "./DashboardNav";
import { setDrawMode } from '../../actions';

import keydown, { Keys } from 'react-keydown';

class DashboardCanvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseDown: false,
            dragging: false
        };
        if (!this.props.demo) {
            this.props.firebase.boardMgr.getBoardData(this.props.boardID, (data) => this.boardDataLoaded(data));
            this.props.dispatch(createBoard(this.props.boardID, []));
        }
        this.canvasRef = React.createRef();
    }

    U16to8 = function (convertMe) {
        var out = "";
        for (var i = 0; i < convertMe.length; i++) {
            var charCode = convertMe.charCodeAt(i);
            out += String.fromCharCode(~~(charCode / 256));
            out += String.fromCharCode(charCode % 256);
        }
        return out;
    }

    U8to16 = function (convertMe) {
        var out = ""
        for (var i = 0; i < convertMe.length; i += 2) {
            var charCode = convertMe.charCodeAt(i) * 256;
            charCode += convertMe.charCodeAt(i + 1);
            out += String.fromCharCode(charCode)
        }
        return out;
    }

    @keydown('ctrl+s') // or specify `which` code directly, in this case 13
    onCtrlS(e) {
        e.preventDefault();
        this.props.firebase.boardMgr.saveBoard(this.props.boardID, this.props.widgets, this.props.savedDrawing);
    }

    @keydown('ctrl+z') // or specify `which` code directly, in this case 13
    onCtrlZ(e) {
        this.canvasRef.undo();
    }

    @keydown('ctrl+shift+z') // or specify `which` code directly, in this case 13
    onCtrlShiftZ(e) {
        console.log("redo");
        this.props.dispatch(UndoActionCreators.redo())
    }

    @keydown('backspace') // or specify `which` code directly, in this case 13
    onBackspace() {
        const widgetsToDelete = this.props.widgets.filter((w) => (w.selected)).map(w => w.id);
        this.props.dispatch(deleteWidgets(widgetsToDelete, this.props.boardID));

        if(this.props.board){
            console.log(this.props.board.drawMode);
            this.props.dispatch(setDrawMode(this.props.boardID, !this.props.board.drawMode));
        }
    }

    renderWidgets() {
        if (!this.props.widgets)
            return;

        var contents = [];
        if (this.props.widgets) {
            for (var i = 0; i < this.props.widgets.length; i++) {
                var widget = this.props.widgets[i];
                contents.push(this.renderWidget(widget));
            }
        }
        return contents;
    }

    renderWidget(widget) {
        switch (widget.widgetType) {
            case WidgetType.TextFieldWidget:
                return <TextFieldWidget key={widget.id} widget={widget} />;
            case WidgetType.NumberWidget:
                return <NumberWidget key={widget.id} widget={widget} />;
            default:
                return null;
        }
    }

    boardDataLoaded(data) {
        var savedData = data.savedDrawing;
        savedData = this.U8to16(savedData);
        savedData = decompress(savedData);

        this.canvasRef.loadSaveData(savedData, true);
        const widgets = data.widgets;
        for (var i = 0; i < widgets.length; i += 1) {
            this.props.dispatch(addSavedWidget(widgets[i], this.props.boardID));
        }
    }

    onMouseDown(e) {
        if (!this.state.dragging && e.target.className === "dashboard-viewer")
            this.props.dispatch(unselectAll());
        this.setState({
            mouseDown: true
        });
    }

    componentDidUpdate(prevProps) {
        //new board loaded
        if (this.props.boardID !== prevProps.boardID) {
            this.canvasRef.clear();
        }
    }

    onDraw(e) {
        var savedData = this.canvasRef.getSaveData();
        savedData = compress(savedData);
        savedData = this.U16to8(savedData);
        this.props.dispatch(saveDrawing(this.props.boardID, savedData));
    }

    render() {
        const enabled = this.props.board && this.props.board.drawMode;
        return (
            <div className="dashboard-canvas"
                onMouseDown={this.onMouseDown.bind(this)}>

                {!this.props.demo ? <DashboardNav boardID={this.props.boardID} widgets = {this.props.widgets} savedDrawing = {this.props.savedDrawing} board={this.props.board}/> : null}
                
                <div className={"canvas-container" + ((enabled) ? "" : " canvas-disabled")}>
                    <CanvasDraw 
                        onChange={this.onDraw.bind(this)} 
                        hideGrid 
                        brushRadius={4}
                        brushColor={enabled ? "black": "white"}
                        lazyRadius = {1}
                        canvasWidth="100%" 
                        canvasHeight="100%" 
                        hideInterface={!enabled}
                        disabled={!enabled}
                        ref={canvasDraw => (this.canvasRef = canvasDraw)} />
                </div>
                {this.renderWidgets()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const boardID = ownProps.boardID;
    var boards = state.boards.filter((b) => (b.id == boardID));
    if (boards.length > 0) {
        const curBoard = boards[0];

        const curWidgets = state.widgets.filter(w => curBoard.widgets.includes(w.id));
        return ({
            widgets: curWidgets,
            savedDrawing: curBoard.savedDrawing,
            board: curBoard
        });
    }
    return ({
        widgets: []
    });
}

export default connect(
    mapStateToProps
)(withFirebase(DashboardCanvas));