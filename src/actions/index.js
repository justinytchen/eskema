export const addWidget = (guid, widgetType) => ({
    id: guid,
    type: 'ADD_WIDGET',
    widgetType: widgetType,
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setWidgetPosDim = (id, x, y, width, height) => ({
  id:id,
  type: 'SET_WIDGET_POS_DIM',
  x:x,
  y:y,
  width:width,
  height:height
})

export const setSelected = (id, selected) => ({
  type: 'SET_SELECTED',
  id: id,
  selected: selected
})

export const setWidgetState = (id, state) => ({
    type: 'SET_WIDGET_STATE',
    id: id,
    state: state
})

export const moveSelected = (dx, dy) => ({
  type: 'MOVE_SELECTED',
  dx:dx,
  dy:dy,
})

export const moveWidgetTo = (id, x, y) => ({
  type: 'MOVE_WIDGET_TO',
  id:id,
  x:x,
  y:y,
})

export const unselectAll = () => ({
  type: 'UNSELECT_ALL'
})

export const deleteWidget = (id) => ({
    type: 'DELETE_WIDGET',
    id:id
})
  