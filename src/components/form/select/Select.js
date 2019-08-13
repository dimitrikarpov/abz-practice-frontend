import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from './Select.module.scss'
import CaretIcon from '../../../assets/icons/caret-down.svg'

const Select = () => {
  const [visible, setVisible] = useState(false)

  const selectOption = key => {
    setVisible(!visible)
    console.log(key)
  }

  const toggleOptions = () => {
    setVisible(!visible)
  }

  const optionClasses = visible ? [classes['options'], classes['visible']] : [classes['options']]

  return (
    <div className={classes['input-field']}>
      <div className={classes['select-wrapper']}>
        <input
          className={classes['input']}
          type="text"
          onClick={toggleOptions}
        />
        <img src={CaretIcon} className={classes['icon']}/>
        <ul className={optionClasses.join(' ')}>
          <li className={classes['option']} onClick={() => selectOption(1)}>
            first value
          </li>
          <li className={classes['option']} onClick={() => selectOption(2)}>
            second value
          </li>
        </ul>
      </div>
      <label className={classes['label']}>select</label>
    </div>
  )
}

export default Select

Select.propTypes = {
    options: PropTypes.array.isRequired,
    active: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
