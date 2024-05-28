import { combineReducers } from 'redux'

import filterReducer from './filterReducer'
import checkboxReducer from './checkboxReducer '
import ticketReducer from './ticketReducer'
import ticketSortReducer from './ticketSortReducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  checkbox: checkboxReducer,
  ticket: ticketReducer,
  ticketSort: ticketSortReducer,
})
export default rootReducer
