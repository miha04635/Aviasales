import { DATA_TICKET, SAVE_DATA_TICKET, TICKET_SORT_PRICE } from '../actions/actions'

const initialState = {
  searchId: null,
  ticket: [],
  stop: false,
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
        ticket: [...state.ticket, ...action.payload],
        stop: action.test,
      }
    }
    case TICKET_SORT_PRICE: {
      return { ...state }
    }
    default:
      return state
  }
}

export default ticketReducer
