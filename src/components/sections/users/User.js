import React from 'react'
import PropTypes from 'prop-types'

const User = ({photo, name, position, email, phone}) => {
  return (
    <div className="users__card">
      <img src={photo} alt="user" />
      <div className="user__info">
        <h4>{name}</h4>
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  )
}

export default User

User.propTypes = {
  photo: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}
