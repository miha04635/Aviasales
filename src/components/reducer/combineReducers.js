import { combineReducers } from 'redux'

import filterReducer from './filterReducer'
import checkboxReducer from './checkboxReducer '

const rootReducer = combineReducers({
  filter: filterReducer,
  checkbox: checkboxReducer,
})
export default rootReducer
