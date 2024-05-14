import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  TOGGLE_ALL_CHECKBOX,
  TOGGLE_NO_CHECKBOX,
  TOGGLE_ONE_CHECKBOX,
  TOGGLE_TWO_CHECKBOX,
  TOGGLE_THREE_CHECKBOX,
} from '../actions/actions'

import styles from './transferCount.module.scss'

const TransferCount = () => {
  const dispatch = useDispatch()
  const isChecked = useSelector(state => state.checkbox)

  const checkboxes = [
    { id: 'allTransfer', label: 'Все', action: TOGGLE_ALL_CHECKBOX },
    { id: 'noTransfer', label: 'Без пересадок', action: TOGGLE_NO_CHECKBOX },
    { id: 'oneTransfer', label: '1 пересадка', action: TOGGLE_ONE_CHECKBOX },
    { id: 'twoTransfer', label: '2 пересадки', action: TOGGLE_TWO_CHECKBOX },
    { id: 'threeTransfer', label: '3 пересадки', action: TOGGLE_THREE_CHECKBOX },
  ]
  const handleCheckboxChange = action => event => {
    dispatch({ type: action, payload: event.target.checked })
  }

  const element = checkboxes.map(({ id, label, action }) => (
    <label key={id} className={styles[id]}>
      <input type="checkbox" id={id} onChange={event => handleCheckboxChange(action)(event)} checked={isChecked[id]} />
      {label}
    </label>
  ))

  return (
    <>
      <div className={styles.container}>
        <p className={styles.countTransfer}>количество пересадок</p>
        <div className={styles.filter}>{element}</div>
      </div>
    </>
  )
}

export default TransferCount
// const toggleAll = event => {
// 	const { checked } = event.target
// 	dispatch({ type: TOGGLE_ALL_CHECKBOX, payload: checked })
// }

// const toggleNo = event => {
// 	const { checked } = event.target
// 	dispatch({ type: toggleNoCheckbox, payload: checked })
// }

// const toggleOne = event => {
// 	const { checked } = event.target
// 	dispatch({ type: toggleOneCheckbox, payload: checked })
// }

// const toggleTwo = event => {
// 	const { checked } = event.target
// 	dispatch({ type: toggleTwoCheckbox, payload: checked })
// }
// const toggleThree = event => {
// 	const { checked } = event.target
// 	dispatch({ type: toggleThreeCheckbox, payload: checked })
// }
