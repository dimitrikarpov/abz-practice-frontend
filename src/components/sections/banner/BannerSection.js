import React from 'react'

const BannerSection = () => {
  return (
    <section id="banner">
      <div className="banner-left">
        <h1 className="banner__title">
          Test assignment for Frontend Developer position
        </h1>
        <p className="banner__text">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository.{' '}
          <span>
            Please be patient, we consider and respond to every application that
            meets minimum requirements. We look forward to your submission. Good
            luck!
          </span>
        </p>
        <div className="banner__button">
          <a href="#" className="btn btn-primary">
            Sign Up
          </a>
        </div>
      </div>
      <div className="banner-right">{''}</div>
    </section>
  )
}

export default BannerSection
