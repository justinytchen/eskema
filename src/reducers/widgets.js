const widgets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return [
        ...state,
        {
          id: action.id,
          widgetType: action.widgetType
        }
      ]
    case 'SET_WIDGET_POS_DIM':
      return state.map(widget =>
        (widget.id === action.id)
          ? {...widget, x: action.x, y: action.y, width: action.width, height: action.height}
          : widget
      )
    default:
      return state
  }
}

export default widgets
