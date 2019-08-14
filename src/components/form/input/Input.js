import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

const Input = ({ name, value, label, placeholder, onChange }) => {
  const handleOnChange = e => {
    onChange(e)
  }

  return (
    <div className="form-input">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      <span>{label}</span>
    </div>
  )
}

export default Input

Input.defaultProps = {
  value: '',
  label: 'input',
  placeholder: '',
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}
