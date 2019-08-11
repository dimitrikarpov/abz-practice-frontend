import React from 'react'
import PropTypes from 'prop-types'
import './MobileNavigation.scss'
import Portal from '../Portal'
import UserInfo from '../userInfo/UserInfo'
import Navigation from '../navigation/Navigation'

const MobileNavigation = ({ visible, onClose }) => {
  const handleOnClose = () => {
    onClose()
  }

  return (
    <>
      {visible && (
        <Portal>
          <div className="backdrop" onClick={handleOnClose}>
            <div className="side-drawer">
              <div className="side-drawer__user">
                  <UserInfo/>
              </div>
              <div className="side-drawer__nav">
                <Navigation variant="vertical" />
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}

MobileNavigation.defaultProps = {
  visible: false,
}

MobileNavigation.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default MobileNavigation
