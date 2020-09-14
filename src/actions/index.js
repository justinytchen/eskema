export const createWidget = (widgetID, widgetType, boardID) => ({
    widgetID: widgetID,
    type: 'CREATE_WIDGET',
    widgetType: widgetType,
    boardID: boardID
})

export const addSavedWidget = (widget, boardID) => ({
    type: 'ADD_SAVED_WIDGET',
    widget: widget,
    boardID: boardID
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const setWidgetPosDim = (id, x, y, width, height) => ({
    id: id,
    type: 'SET_WIDGET_POS_DIM',
    x: x,
    y: y,
    width: width,
    height: height
})

export const setSelected = (id, selected) => ({
    type: 'SET_SELECTED',
    id: id,
    selected: selected
})

export const setWidgetEditMode = (id, editMode) => ({
    type: 'SET_EDIT_MODE',
    id: id,
    editMode: editMode
})

export const setWidgetState = (id, state) => ({
    type: 'SET_WIDGET_STATE',
    id: id,
    state: state
})

export const moveSelected = (dx, dy) => ({
    type: 'MOVE_SELECTED',
    dx: dx,
    dy: dy,
})

export const moveWidgetTo = (id, x, y) => ({
    type: 'MOVE_WIDGET_TO',
    id: id,
    x: x,
    y: y,
})

export const unselectAll = () => ({
    type: 'UNSELECT_ALL'
})

export const deleteWidgets = (widgetIDs, boardID) => ({
    type: 'DELETE_WIDGETS',
    widgets: widgetIDs,
    boardID: boardID
})

export const createBoard = (id, widgets, savedDrawing) => ({
    type: 'CREATE_BOARD',
    id: id,
    widgets: widgets ? widgets: [],
    savedDrawing: savedDrawing
})

export const saveDrawing = (id, savedDrawing) => ({
    type: 'SAVE_DRAWING',
    id: id,
    savedDrawing: savedDrawing
})

export const setDrawMode = (id, drawMode) => ({
    type: 'SET_DRAW_MODE',
    id: id,
    drawMode: drawMode
})

