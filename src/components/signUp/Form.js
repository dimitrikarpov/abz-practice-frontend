import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from '../form/select/Select'
import Input from '../form/input/Input'
import Upload from '../form/upload/Upload'

class Form extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    position: false,
    photo: '',
    photo_file: null,
    errors: {},
  }

  //   handleSubmit = () => {
  //     // call upper component to post data
  //   }

  onChange = e => {
    console.log(e.target.name)
    if (e.target.name === 'photo') {
      this.setState({
        photo: e.target.files[0].name,
        photo_file: e.target.files[0],
      })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  onPositionSelect = id => {
    this.setState({ position: id })
  }

  render() {
    const { name, email, phone, position, photo } = this.state
    const { positions } = this.props

    return (
      <section id="sign-up">
        <h2>Register to get a work</h2>
        <h5>
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </h5>
        <div className="form-grid">
          <div className="form__row">
            <Input
              name="name"
              value={name}
              label="name"
              placeholder="Your Name"
              onChange={this.onChange}
            />
            <Input
              name="email"
              value={email}
              label="email"
              placeholder="Your Email"
              onChange={this.onChange}
            />
            <Input
              name="phone"
              value={phone}
              label="phone"
              placeholder="+38"
              onChange={this.onChange}
            />
          </div>
          <div className="form__row">
            <Select
              options={positions}
              value={position}
              onChange={this.onPositionSelect}
            />
            <Upload name="photo" value={photo} onChange={this.onChange} />
          </div>
          <a href="#" className="btn btn-disabled">
            Sign Up
          </a>
        </div>
      </section>
    )
  }
}

export default Form

Form.defaultProps = {
  positions: [],
}

Form.propTypes = {
  positions: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
