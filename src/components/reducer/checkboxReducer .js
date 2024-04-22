import {
	toggleAllCheckbox,
	toggleNoCheckbox,
	toggleOneCheckbox,
	toggleTwoCheckbox,
	toggleThreeCheckbox,
} from '../actions/actions'

const initialState = {
	allTransfer: false,
	noTransfer: false,
	oneTransfer: false,
	twoTransfer: false,
	threeTransfer: false,
}

const checkboxReducer = (state = initialState, action) => {
	switch (action.type) {
		case toggleAllCheckbox: {
			return {
				...state,
				allTransfer: action.payload,
				noTransfer: action.payload,
				oneTransfer: action.payload,
				twoTransfer: action.payload,
				threeTransfer: action.payload,
			}
		}
		case toggleNoCheckbox: {
			return {
				...state,
				noTransfer: action.payload,
			}
		}
		case toggleOneCheckbox: {
			return {
				...state,
				oneTransfer: action.payload,
			}
		}
		case toggleTwoCheckbox: {
			return {
				...state,
				twoTransfer: action.payload,
			}
		}
		case toggleThreeCheckbox: {
			return { ...state, threeTransfer: action.payload }
		}
		default:
			return state
	}
}

export default checkboxReducer
