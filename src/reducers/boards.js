const boards = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            return state.map(board => {
                if (board.boardID !== action.boardID) {
                    return board;
                };
                var oldWidgets = board.widgets;
                oldWidgets.push(action.widgetID);
                return { ...board, widgets: oldWidgets }
            });
        case 'CREATE_BOARD':
            return [
                ...state,
                {
                    id: action.id,
                    widgets: action.widgets.map(w => w.id),
                    savedDrawing: action.savedDrawing,
                    drawMode: false
                }
            ];
        case 'ADD_SAVED_WIDGET':
            return state.map(board => {
                if (board.id !== action.boardID) {
                    return board;
                }
                var oldWidgets = board.widgets;
                oldWidgets.push(action.widget.id);
                return { ...board, widgets: oldWidgets }
            });
        case 'DELETE_WIDGETS':
            return state.map(board => {
                if (board.id !== action.boardID) {
                    return board;
                }
                return { ...board, widgets: board.widgets.filter((w) => !action.widgets.includes(w)) }
            });
        case 'SAVE_DRAWING':
            return state.map(board => {
                if (board.id !== action.id) {
                    return board;
                }
                return { ...board, savedDrawing: action.savedDrawing }
            });
        case 'SET_DRAW_MODE':
            return state.map(board => {
                if (board.id !== action.id) {
                    return board;
                }
                return { ...board, drawMode: action.drawMode }
            });
        default:
            return state;
    }
}

export default boards;

