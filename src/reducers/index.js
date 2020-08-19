import { combineReducers } from 'redux'
import widgets from './widgets'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  widgets,
  visibilityFilter
})
