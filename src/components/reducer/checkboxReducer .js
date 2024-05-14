import {
  TOGGLE_ALL_CHECKBOX,
  TOGGLE_NO_CHECKBOX,
  TOGGLE_ONE_CHECKBOX,
  TOGGLE_TWO_CHECKBOX,
  TOGGLE_THREE_CHECKBOX,
} from '../actions/actions'

const initialState = {
  allTransfer: false,
  noTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
}

const checkboxReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_ALL_CHECKBOX: {
      return {
        ...state,
        allTransfer: action.payload,
        noTransfer: action.payload,
        oneTransfer: action.payload,
        twoTransfer: action.payload,
        threeTransfer: action.payload,
      }
    }
    case TOGGLE_NO_CHECKBOX: {
      if (state.allTransfer) {
        return {
          ...state,
          allTransfer: false,
          noTransfer: action.payload,
        }
      }

      Object.keys(initialState).forEach(key => {
        console.log(`${key}:`, initialState[key])
      })
      return {
        ...state,
        noTransfer: action.payload,
      }
    }

    case TOGGLE_ONE_CHECKBOX: {
      if (state.allTransfer) {
        return {
          ...state,
          allTransfer: false,
          oneTransfer: action.payload,
        }
      }
      return {
        ...state,
        oneTransfer: action.payload,
      }
    }

    case TOGGLE_TWO_CHECKBOX: {
      if (state.allTransfer) {
        return {
          ...state,
          allTransfer: false,
          twoTransfer: action.payload,
        }
      }
      return {
        ...state,
        twoTransfer: action.payload,
      }
    }

    case TOGGLE_THREE_CHECKBOX: {
      if (state.allTransfer) {
        return {
          ...state,
          allTransfer: false,
          threeTransfer: action.payload,
        }
      }
      return {
        ...state,
        threeTransfer: action.payload,
      }
    }
    default:
      return state
  }
}

export default checkboxReducer
