export const toggleAllCheckbox = 'TOGGLE_ALL_CHECKBOX'
export const toggleNoCheckbox = 'TOGGLE_NO_CHECKBOX'
export const toggleOneCheckbox = 'TOGGLE_ONE_CHECKBOX'
export const toggleTwoCheckbox = 'TOGGLE_TWO_CHECKBOX'
export const toggleThreeCheckbox = 'TOGGLE_THREE_CHECKBOX'

export const cheapestBtn = 'CHEAPEST_BTN'
export const fastBtn = 'FAST_BTN'
export const optimalBtn = 'OPTIMAL_BTN'

export const DATA_TICKET = 'DATA_TICKET'

export const dataTicket = searchId => ({
  type: DATA_TICKET,
  payload: searchId,
})

export const SAVE_DATA_TICKET = 'SAVE_DATA_TICKET'

export const saveDataTicket = ticket => ({
  type: SAVE_DATA_TICKET,
  payload: ticket,
})
