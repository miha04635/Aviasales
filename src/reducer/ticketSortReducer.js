// import { TICKET_SORT_PRICE, TICKET_SORT_DURATION, TICKET_SORT_OPTIMAL } from '../actions/actions'

// const initialState = {
//   priority: {
//     cheapest: true,
//     fastest: false,
//     optimal: false,
//   },
// }

// const calculateSorted = (priority, tickets) => {
//   const { cheapest, fastest, optimal } = priority
//   const ticketsArr = [...tickets]

//   if (cheapest) {
//     return ticketsArr.sort((a, b) => a.price - b.price)
//   }

//   if (fastest) {
//     return ticketsArr.sort((a, b) => {
//       const durationA = a.segments.reduce((acc, value) => acc + value.duration, 0)
//       const durationB = b.segments.reduce((acc, value) => acc + value.duration, 0)
//       return durationA - durationB
//     })
//   }

//   if (optimal) {
//     const totalDuration = ticketsArr.reduce(
//       (acc, ticket) => acc + ticket.segments[0].duration + ticket.segments[1].duration,
//       0
//     )
//     const averageTime = totalDuration / ticketsArr.length

//     return ticketsArr
//       .sort((a, b) => a.price - b.price)
//       .filter(ticket => {
//         const ticketDuration = ticket.segments.reduce((acc, value) => acc + value.duration, 0)
//         return ticketDuration < averageTime * 0.7
//       })
//   }

//   return tickets
// }

// const calculateVisible = (sorted, filters, numberOfVisible) => {
//   const visible = numberOfVisible === 0 ? 5 : numberOfVisible
//   if (filters.all) {
//     return sorted.slice(0, visible)
//   }
//   const filtered = sorted.filter(ticket => {
//     const thereStops = ticket.segments[0].stops.length
//     const backStops = ticket.segments[1].stops.length
//     if (filters.nonStop && (thereStops === 0 || backStops === 0)) {
//       return true
//     }
//     if (filters.oneTransfer && (thereStops === 1 || backStops === 1)) {
//       return true
//     }
//     if (filters.twoTransfers && (thereStops === 2 || backStops === 2)) {
//       return true
//     }
//     if (filters.threeTransfers && (thereStops === 3 || backStops === 3)) {
//       return true
//     }
//     return false
//   })
//   return filtered.slice(0, visible)
// }

// const ticketSortReducer = (state = initialState, action = {}) => {
//   const ticketsArr = action.payload
//   const numberOfVisible = action.ticket
//   switch (action.type) {
//     case TICKET_SORT_PRICE: {
//       const priority = { cheapest: true, fastest: false, optimal: false }
//       const sorted = calculateSorted(priority, ticketsArr)
//       return {
//         ...state,
//         priority,
//         tickets: {
//           ...state.tickets,
//           visible: calculateVisible(sorted, state.filters, numberOfVisible),
//         },
//       }
//     }

//     case TICKET_SORT_DURATION:
//       return {
//         ...state,
//       }
//     case TICKET_SORT_OPTIMAL:
//       return {
//         ...state,
//       }
//     default:
//       return state
//   }
// }

// export default ticketSortReducer
