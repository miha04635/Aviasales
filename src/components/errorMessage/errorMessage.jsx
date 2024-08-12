import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { clearError } from '../../actions/actions'

import styles from './ErrorMessage.module.scss'

const ErrorMessage = () => {
  const errorMessage = useSelector(state => state.tickets.errorMessage)
  const dispatch = useDispatch()

  if (!errorMessage) {
    return null
  }

  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{errorMessage}</p>
      <button className={styles.closeButton} onClick={() => dispatch(clearError())}>
        Close
      </button>
    </div>
  )
}

export default ErrorMessage
