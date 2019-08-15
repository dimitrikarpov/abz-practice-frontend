import React, { useState } from 'react'
import HeaderLogo from '../../../assets/logo/logo.svg'
import MenuIcon from '../../../assets/icons/line-menu.svg'
import Navigation from '../navigation/Navigation'
import { UserConsumer } from '../../../storage/user-context'
import UserInfo from '../userInfo/UserInfo'
import MobileNavigation from '../mobileNavigation/MobileNavigation'

const Header = () => {
  const [sideDraw, setSideDraw] = useState(false)

  const toggleSideDraw = () => {
    setSideDraw(!sideDraw)
  }

  return (
    <>
      <header>
        <img className="header__logo" src={HeaderLogo} alt="logo" />
        <Navigation />
        <UserConsumer>
          {value => {
            const { user } = value
            return (
              <UserInfo
                name={user.name}
                email={user.email}
                avatar={user.photo}
              />
            )
          }}
        </UserConsumer>
        <img
          src={MenuIcon}
          className="nav-icon"
          onClick={toggleSideDraw}
          alt="menu"
        />
      </header>

      <MobileNavigation visible={sideDraw} onClose={toggleSideDraw} />
    </>
  )
}

export default Header
