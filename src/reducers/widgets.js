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
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default widgets
