import { combineReducers } from 'redux'

import filterReducer from './filterReducer'
import checkboxReducer from './checkboxReducer '
import ticketReducer from './ticketReducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  checkbox: checkboxReducer,
  ticket: ticketReducer,
})
export default rootReducer
