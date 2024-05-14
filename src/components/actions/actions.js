export const TOGGLE_ALL_CHECKBOX = 'TOGGLE_ALL_CHECKBOX'
export const TOGGLE_NO_CHECKBOX = 'TOGGLE_NO_CHECKBOX'
export const TOGGLE_ONE_CHECKBOX = 'TOGGLE_ONE_CHECKBOX'
export const TOGGLE_TWO_CHECKBOX = 'TOGGLE_TWO_CHECKBOX'
export const TOGGLE_THREE_CHECKBOX = 'TOGGLE_THREE_CHECKBOX'

export const cheapestBtn = 'CHEAPEST_BTN'
export const fastBtn = 'FAST_BTN'
export const optimalBtn = 'OPTIMAL_BTN'

export const DATA_TICKET = 'DATA_TICKET'

export const dataTicket = searchId => ({
  type: DATA_TICKET,
  payload: searchId,
})

export const SAVE_DATA_TICKET = 'SAVE_DATA_TICKET'
export const saveDataTicket = (ticket, stop) => ({
  type: SAVE_DATA_TICKET,
  payload: ticket,
  test: stop,
})
