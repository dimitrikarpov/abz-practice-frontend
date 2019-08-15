import React from 'react'
import PropTypes from 'prop-types'
import Portal from '../Portal'
import './Notification.scss'

const Notification = ({ visible, title, message, onClose }) => {
  return (
    <>
      {visible && (
        <Portal>
          <div className="notification__backdrop">
            <div className="notification-wrapper">
              <div className="notification">
                <h4 className="notification__title">{title}</h4>
                <div className="notification__body">
                  <p>{message}</p>
                </div>
                <div className="notitication__footer">
                  <button className="notification__button" onClick={onClose}>
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}

export default Notification

Notification.defaultProps = {
  title: '',
}

Notification.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}
