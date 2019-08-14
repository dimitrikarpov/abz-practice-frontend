import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Input.scss'

const Input = ({ name, value, label, placeholder, error, onChange }) => {
  const handleOnChange = e => {
    onChange(e)
  }

  return (
    <div className={classnames('form-input', { 'has-error': error })}>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        className="form-input__input"
      />
      <span className="form-input__label">{label}</span>
      <div className="form-input__error-box">
        <p className="form-input__error">{error}</p>
      </div>
    </div>
  )
}

export default Input

Input.defaultProps = {
  value: '',
  label: 'input',
  placeholder: '',
  error: false,
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
}
