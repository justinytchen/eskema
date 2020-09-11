const widgets = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WIDGET':
            return [
                ...state,
                {
                    id: action.id,
                    widgetType: action.widgetType,
                    selected: false,
                    x: 0,
                    y: 0,
                    width: "auto",
                    height: "auto"
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
        case 'UNSELECT_ALL':
            return state.map(widget => { return { ...widget, selected: false } })
        default:
            return state
    }
}

export default widgets
