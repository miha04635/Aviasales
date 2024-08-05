import {
  TOGGLE_ALL_CHECKBOX,
  TOGGLE_NO_CHECKBOX,
  TOGGLE_ONE_CHECKBOX,
  TOGGLE_TWO_CHECKBOX,
  TOGGLE_THREE_CHECKBOX,
  SET_ERROR,
  CLEAR_ERROR,
  DATA_TICKET,
  SAVE_DATA_TICKET,
  TICKET_SORT_PRICE,
  TICKET_SORT_DURATION,
  TICKET_SORT_OPTIMAL,
  SHOW_MORE_TICKETS,
} from '../actions/actions'

const initialState = {
  filters: {
    allTransfer: true,
    noTransfer: true,
    oneTransfer: true,
    twoTransfer: true,
    threeTransfer: true,
  },
  tickets: {
    searchId: null,
    ticket: [],
    visibleTickets: [],
    stop: false,
    errorMessage: null,
  },
  priority: {
    cheapest: false,
    fastest: true,
    optimal: false,
  },
  numberOfVisible: 5,
}

const calculateFilters = filters => {
  const { all, ...others } = filters
  const values = Object.values(others)
  const filtered = values.filter(value => value)
  const newAll = values.length === filtered.length
  const result = { all: newAll, ...others }
  return result
}

const calculateSorted = (priority, tickets) => {
  const { cheapest, fastest, optimal } = priority
  const ticketsArr = [...tickets]

  if (cheapest) {
    return ticketsArr.sort((a, b) => a.price - b.price)
  }

  if (fastest) {
    return ticketsArr.sort((a, b) => {
      const durationA = a.segments.reduce((acc, value) => acc + value.duration, 0)
      const durationB = b.segments.reduce((acc, value) => acc + value.duration, 0)
      return durationA - durationB
    })
  }

  if (optimal) {
    const totalDuration = ticketsArr.reduce(
      (acc, ticket) => acc + ticket.segments[0].duration + ticket.segments[1].duration,
      0
    )
    const averageTime = totalDuration / ticketsArr.length

    return ticketsArr
      .sort((a, b) => a.price - b.price)
      .filter(ticket => {
        const ticketDuration = ticket.segments.reduce((acc, value) => acc + value.duration, 0)
        return ticketDuration < averageTime * 0.7
      })
  }

  return tickets
}

const calculateVisible = (sorted, filters, numberOfVisible) => {
  const visible = numberOfVisible === 0 ? 5 : numberOfVisible

  if (filters.allTransfer) {
    return sorted.slice(0, visible)
  }

  const filtered = sorted.filter(ticket => {
    const thereStops = ticket.segments[0].stops.length
    const backStops = ticket.segments[1].stops.length

    return (
      (filters.noTransfer && (thereStops === 0 || backStops === 0)) ||
      (filters.oneTransfer && (thereStops === 1 || backStops === 1)) ||
      (filters.twoTransfer && (thereStops === 2 || backStops === 2)) ||
      (filters.threeTransfer && (thereStops === 3 || backStops === 3))
    )
  })

  return filtered.slice(0, visible)
}

const reducer = (state = initialState, action = {}) => {
  const { numberOfVisible } = state

  switch (action.type) {
    case TOGGLE_ALL_CHECKBOX: {
      let newFilters = { ...state.filters }
      Object.keys(newFilters).forEach(key => {
        newFilters[key] = !state.filters.allTransfer
      })
      newFilters = calculateFilters(newFilters)

      const { priority, tickets } = state

      return {
        ...state,
        filters: newFilters,
        tickets: {
          ...tickets,
          visibleTickets: calculateVisible(calculateSorted(priority, tickets.ticket), newFilters, numberOfVisible),
        },
      }
    }
    case TOGGLE_NO_CHECKBOX: {
      const newFilters = calculateFilters({ ...state.filters, noTransfer: !state.filters.noTransfer })
      const ticketsSort = state.tickets.ticket

      return {
        ...state,
        filters: newFilters,
        tickets: {
          ...state.tickets,
          visibleTickets: calculateVisible(calculateSorted(state.priority, ticketsSort), newFilters, numberOfVisible),
        },
      }
    }
    case TOGGLE_ONE_CHECKBOX: {
      const newFilters = calculateFilters({ ...state.filters, oneTransfer: !state.filters.oneTransfer })
      const ticketsSort = state.tickets.ticket

      return {
        ...state,
        filters: newFilters,
        tickets: {
          ...state.tickets,
          visibleTickets: calculateVisible(calculateSorted(state.priority, ticketsSort), newFilters, numberOfVisible),
        },
      }
    }
    case TOGGLE_TWO_CHECKBOX: {
      const newFilters = calculateFilters({ ...state.filters, twoTransfer: !state.filters.twoTransfer })
      const ticketsSort = state.tickets.ticket

      return {
        ...state,
        filters: newFilters,
        tickets: {
          ...state.tickets,
          visibleTickets: calculateVisible(calculateSorted(state.priority, ticketsSort), newFilters, numberOfVisible),
        },
      }
    }
    case TOGGLE_THREE_CHECKBOX: {
      const newFilters = calculateFilters({ ...state.filters, threeTransfer: !state.filters.threeTransfer })
      const ticketsSort = state.tickets.ticket

      return {
        ...state,
        filters: newFilters,
        tickets: {
          ...state.tickets,
          visibleTickets: calculateVisible(calculateSorted(state.priority, ticketsSort), newFilters, numberOfVisible),
        },
      }
    }
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case CLEAR_ERROR:
      return {
        ...state,
        errorMessage: null,
      }
    case DATA_TICKET:
      return {
        ...state,
        tickets: {
          ...state.tickets,
          searchId: action.payload,
        },
      }
    case SAVE_DATA_TICKET: {
      const newTickets =
        state.tickets.ticket.length === 0 ? [...action.payload] : [...state.tickets.ticket, ...action.payload]
      const sortedTickets = calculateSorted(state.priority, newTickets)
      return {
        ...state,
        tickets: {
          ...state.tickets,
          ticket: newTickets,
          visibleTickets: calculateVisible(sortedTickets, state.filters, numberOfVisible),
          stop: action.test,
        },
      }
    }
    case TICKET_SORT_PRICE: {
      const priority = { cheapest: true, fastest: false, optimal: false }
      const sorted = calculateSorted(priority, state.tickets.ticket)
      return {
        ...state,
        priority,
        tickets: {
          ...state.tickets,
          visibleTickets: calculateVisible(sorted, state.filters, numberOfVisible),
        },
      }
    }

    case TICKET_SORT_DURATION: {
      const priority = { cheapest: false, fastest: true, optimal: false }
      const sorted = calculateSorted(priority, state.tickets.ticket)
      return {
        ...state,
        priority,
        tickets: {
          ...state.tickets,
          visibleTickets: calculateVisible(sorted, state.filters, numberOfVisible),
        },
      }
    }
    case TICKET_SORT_OPTIMAL: {
      const priority = { cheapest: false, fastest: false, optimal: true }
      const sorted = calculateSorted(priority, state.tickets.ticket)
      return {
        ...state,
        priority,
        tickets: {
          ...state.tickets,
          visibleTickets: calculateVisible(sorted, state.filters, numberOfVisible),
        },
      }
    }
    case SHOW_MORE_TICKETS: {
      const newNumberOfVisible = state.numberOfVisible + 5
      const sortedTickets = calculateSorted(state.priority, state.tickets.ticket)
      const newVisibleTickets = calculateVisible(sortedTickets, state.filters, newNumberOfVisible)
      return {
        ...state,
        numberOfVisible: newNumberOfVisible,
        tickets: {
          ...state.tickets,
          visibleTickets: newVisibleTickets,
        },
      }
    }
    default:
      return state
  }
}

export default reducer
