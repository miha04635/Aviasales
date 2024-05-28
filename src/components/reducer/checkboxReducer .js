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
  filterTicket: [],
}

const checkboxReducer = (state = initialState, action = {}) => {
  if (action.ticket === undefined) {
    return initialState
  }
  const tickets = action.ticket

  switch (action.type) {
    case TOGGLE_ALL_CHECKBOX: {
      return {
        ...state,
        allTransfer: action.payload,
        noTransfer: action.payload,
        oneTransfer: action.payload,
        twoTransfer: action.payload,
        threeTransfer: action.payload,
        filterTicket: action.payload ? tickets : [],
      }
    }
    case TOGGLE_NO_CHECKBOX: {
      const noStops = tickets.filter(ticket => ticket.segments.every(segment => segment.stops.length === 0))

      return {
        ...state,
        allTransfer: state.allTransfer && !action.payload ? false : state.allTransfer,
        noTransfer: action.payload,
        filterTicket: action.payload
          ? [...state.filterTicket, ...noStops]
          : state.filterTicket.filter(ticket => !noStops.includes(ticket)),
      }
    }
    case TOGGLE_ONE_CHECKBOX: {
      const oneStops = tickets.filter(ticket => ticket.segments.every(segment => segment.stops.length === 1))

      return {
        ...state,
        allTransfer: state.allTransfer && !action.payload ? false : state.allTransfer,
        oneTransfer: action.payload,
        filterTicket: action.payload
          ? [...state.filterTicket, ...oneStops]
          : state.filterTicket.filter(ticket => !oneStops.includes(ticket)),
      }
    }
    case TOGGLE_TWO_CHECKBOX: {
      const twoStops = tickets.filter(ticket => ticket.segments.every(segment => segment.stops.length === 2))

      return {
        ...state,
        allTransfer: state.allTransfer && !action.payload ? false : state.allTransfer,
        twoTransfer: action.payload,
        filterTicket: action.payload
          ? [...state.filterTicket, ...twoStops]
          : state.filterTicket.filter(ticket => !twoStops.includes(ticket)),
      }
    }
    case TOGGLE_THREE_CHECKBOX: {
      const threeStops = tickets.filter(ticket => ticket.segments.every(segment => segment.stops.length === 3))

      return {
        ...state,
        allTransfer: state.allTransfer && !action.payload ? false : state.allTransfer,
        threeTransfer: action.payload,
        filterTicket: action.payload
          ? [...state.filterTicket, ...threeStops]
          : state.filterTicket.filter(ticket => !threeStops.includes(ticket)),
      }
    }
    default:
      return state
  }
}

export default checkboxReducer
