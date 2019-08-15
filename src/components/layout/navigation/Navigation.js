import React from 'react'
import PropTypes from 'prop-types'
import './Navigation.scss'

const Navigation = ({ variant }) => {
  let className
  switch (variant) {
    case 'white':
      className = 'nav--white'
      break
    case 'vertical':
      className = 'nav--vertical'
      break
    default:
      className = ''
  }

  return (
    <nav className={className}>
      <ul>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Relationships</a>
        </li>
        <li>
          <a href="#">Requirements</a>
        </li>
        <li>
          <a href="#">Users</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

Navigation.defaultProps = {
  variant: 'black',
}

Navigation.propTypes = {
  variant: PropTypes.string.isRequired,
}
