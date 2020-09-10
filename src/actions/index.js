let nextTodoId = 0
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

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
