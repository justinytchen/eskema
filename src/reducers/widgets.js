const widgets = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            return [
                ...state,
                {
                    id: action.id,
                    widgetType: action.widgetType,
                    selected: false,
                    x: 0,
                    y: 50,
                    width: "auto",
                    height: "auto",
                    editMode: true,
                    state: null
                }
            ]
        case 'ADD_SAVED_WIDGET':
            return [
                ...state,
                {
                    id: action.widget.id,
                    widgetType: action.widget.widgetType,
                    selected: action.widget.selected,
                    x: action.widget.x,
                    y: action.widget.y,
                    width: action.widget.width,
                    height: action.widget.height,
                    state: action.widget.state,
                    editMode: action.widget.editMode
                }
            ]
        case 'SET_WIDGET_POS_DIM':
            return state.map(widget =>
                (widget.id === action.id)
                    ? { ...widget, x: action.x, y: action.y, width: action.width, height: action.height }
                    : widget
            )
        case 'SET_SELECTED':
            return state.map(widget =>
                (widget.id === action.id)
                    ? { ...widget, selected: action.selected }
                    : widget
            )
        case 'SET_EDIT_MODE':
            return state.map(widget =>
                (widget.id === action.id)
                    ? { ...widget, editMode: action.editMode }
                    : widget
            )
        case 'SET_WIDGET_STATE':
            return state.map(widget =>
                (widget.id === action.id)
                    ? { ...widget, state: action.state }
                    : widget
            )
        case 'MOVE_SELECTED':
            return state.map(widget =>
                (widget.selected)
                    ? { ...widget, x: widget.x + action.dx, y: widget.y + action.dy }
                    : widget
            )
        case 'MOVE_WIDGET_TO':
            return state.map(widget =>
                (widget.id === action.id)
                    ? { ...widget, x: action.x, y: action.y }
                    : widget
            )
        case 'DELETE_WIDGET':
            return state.filter(widget => widget.id !== action.id);
        case 'DELETE_SELECTED_WIDGETS':
            return state.filter(widget => widget.selected == false);
        case 'UNSELECT_ALL':
            return state.map(widget => { return { ...widget, selected: false } })
        default:
            return state
    }
}

export default widgets
