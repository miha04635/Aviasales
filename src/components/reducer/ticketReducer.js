import { DATA_TICKET, SAVE_DATA_TICKET } from '../actions/actions'

const initialState = {
  searchId: null,
  ticket: null,
  stop: null,
}

const ticketReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_TICKET:
      return {
        ...state,
        searchId: action.payload,
      }
    case SAVE_DATA_TICKET: {
      return {
        ...state,
        ticket: action.payload,
        stop: action.test,
      }
    }
    default:
      return state
  }
}

export default ticketReducer
