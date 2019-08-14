import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Upload.scss'

const Upload = ({ name, value, error, onChange }) => {
  return (
    <label class={classnames("upload", {'has-error': error})}>
      <input
        type="file"
        class="upload__input"
        name={name}
        onChange={onChange}
      />
      <div className="upload__wrapper">
        <div class="upload___wrapper--title">
          <div className="upload__title">{value}</div>
        </div>
        <div className="upload__wrapper--button">
          <div className="upload__button">Upload</div>
        </div>
        <div className="form-input__error-box">
          <p className="form-input__error">{error}</p>
        </div>
      </div>
    </label>
  )
}

export default Upload

Upload.defaultProps = {
  value: '',
  error: false,
}

Upload.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
