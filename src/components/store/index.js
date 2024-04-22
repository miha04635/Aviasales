import { configureStore } from '@reduxjs/toolkit'
import checkboxReducer from '../reducer/checkboxReducer '

export const store = configureStore({
	reducer: checkboxReducer,
})
