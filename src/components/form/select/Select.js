import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from './Select.module.scss'
import CaretIcon from '../../../assets/icons/caret-down.svg'

const Select = ({ options, value, error, onChange }) => {
  const [visible, setVisible] = useState(false)

  const onSelect = id => {
    setVisible(!visible)
    onChange(id)
  }

  const toggleOptions = () => {
    setVisible(!visible)
  }

  const dropdownClasses = visible
    ? [classes['options'], classes['visible']]
    : [classes['options']]

  const inputFieldClasses = error
    ? [classes['input-field'], classes['has-error']]
    : [classes['input-field']]

  let activeItem = options.filter(item => item.id === value)[0]

  const getOptionClasses = id => {
    return activeItem !== undefined && activeItem.id === id
      ? [classes['option'], classes['active']]
      : [classes['option']]
  }

  return (
    <div className={inputFieldClasses.join(' ')}>
      <div className={classes['select-wrapper']}>
        <input
          className={classes['input']}
          type="text"
          onClick={toggleOptions}
          value={activeItem ? activeItem.name : ''}
        />
        <img src={CaretIcon} className={classes['icon']} />
        <ul className={dropdownClasses.join(' ')}>
          {/* <li className={classes['option']}>Choose</li> */}
          {options.map(({ id, name }) => (
            <li
              key={id}
              className={getOptionClasses(id).join(' ')}
              onClick={() => onSelect(id)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <label className={classes['label']}>select</label>
      <div className={classes['form-input__error-box']}>
        <p className={classes['form-input__error']}>{error}</p>
      </div>
    </div>
  )
}

export default Select

Select.defaultProps = {
  options: [],
  value: false,
  error: false,
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
