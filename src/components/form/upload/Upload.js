import React from 'react'
import PropTypes from 'prop-types'
import './Upload.scss'

const Upload = ({ name, value, onChange }) => {
  return (
    <label class="upload">
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
      </div>
    </label>
  )
}

export default Upload

Upload.defaultProps = {
  value: '',
}

Upload.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
