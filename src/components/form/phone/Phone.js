import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import InputMask from 'react-input-mask'
import './Phone.scss'

const Phone = ({ name, value, label, placeholder, error, onChange }) => {
  const handleOnChange = e => {
    onChange(e)
  }

  return (
    <div className={classnames('form-input', { 'has-error': error })}>
      <InputMask
        mask="+3\8\( 999 \) 9999 999"
        maskChar={'_'}
        alwaysShowMask={true}
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

export default Phone

Phone.defaultProps = {
  value: '',
  label: 'input',
  placeholder: '',
  error: false,
}

Phone.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
}
