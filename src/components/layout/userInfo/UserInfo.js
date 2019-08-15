import React from 'react'
import PropTypes from 'prop-types'
import './UserInfo.scss'
import SuperstarAvatar from '../../../assets/imgs/user-superstar-2x.jpg'
import SignOutIcon from '../../../assets/icons/sign-out.svg'

const UserInfo = ({ name, email, avatar }) => {
  return (
    <div className="user">
      <div className="user-info">
        <p className="user-name">{name}</p>
        <p className="user-email">{email}</p>
      </div>
      <img src={avatar} alt="avatar" className="user-avatar" />
      <img src={SignOutIcon} alt="sign out" className="sign-out" />
    </div>
  )
}

UserInfo.defaultProps = {
  name: 'Superstar',
  email: 'Superstar@gmail.com',
  avatar: SuperstarAvatar,
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.any,
}

export default UserInfo
