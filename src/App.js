import React from 'react'
import Header from './components/layout/header/Header'
import BannerSection from './components/sections/banner/BannerSection'
import AboutSection from './components/sections/about/AboutSection'
import RelationshipsSection from './components/sections/relationships/RelationshipsSection'
import RequirementsSection from './components/sections/requirements/RequirementsSection'
import SignUpSection from './components/sections/signUp/SignUp'
import UsersSection from './components/sections/users/UsersSection'
import Footer from './components/layout/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <BannerSection />

      <AboutSection />

      <RelationshipsSection />

      <RequirementsSection />

      <UsersSection />

      <SignUpSection />

      <Footer />
    </div>
  )
}

export default App
