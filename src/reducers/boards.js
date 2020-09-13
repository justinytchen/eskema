import { connectAdvanced } from "react-redux"

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
                    widgets: action.widgets
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
        default:
            return state;
    }
}

export default boards;
