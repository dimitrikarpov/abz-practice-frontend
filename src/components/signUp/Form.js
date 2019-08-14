import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Select from '../form/select/Select'
import Input from '../form/input/Input'
import Upload from '../form/upload/Upload'
import Phone from '../form/phone/Phone'
import { validate } from '../../helpers/validation'

const getValidationErrors = ({ name, email, phone, position, photo }) => {
  const errors = {}

  if (!validate['required'](name)) {
    errors.name = 'this field is Required'
  } else if (!validate['min'](name, 3)) {
    errors.name = 'length should me more than 3 symbols'
  } else {
    delete errors.name
  }

  if (!validate['required'](email)) {
    errors.email = 'This field is Required'
  } else if (!validate['email'](email)) {
    errors.email = 'does not look like email'
  } else {
    delete errors.email
  }

  if (!validate['required'](phone)) {
    errors.phone = 'this field is Required'
  } else {
    delete errors.phone
  }

  if (!validate['required'](position)) {
    errors.position = 'this field is Required'
  } else {
    delete errors.position
  }

  if (!validate['required'](photo)) {
    errors.photo = 'required'
  } else {
    delete errors.photo
  }

  return errors
}

const isFormFilled = touched => {
  const notTouched = Object.values(touched).filter(item => item === false)
    .length

  return !notTouched
}

class Form extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    position: '',
    photo: '',
    photo_file: null,
    errors: {},
    touched: {
      name: false,
      email: false,
      phone: false,
      position: false,
      photo: false,
    },
    isFormFilled: false,
  }

  handleSubmit = () => {
    const { name, email, phone, position, photo } = this.state

    const errors = getValidationErrors({ name, email, phone, position, photo })

    if (Object.keys(errors).length) {
      // set all fields what has errors as 'not touched'
      // and switch isFormFilled to false to disable submit button
      this.setState({
        errors,
        touched: {
          name: errors['name'] ? false : true,
          email: errors['email'] ? false : true,
          phone: errors['phone'] ? false : true,
          position: errors['position'] ? false : true,
          photo: errors['photo'] ? false : true,
        },
        isFormFilled: false,
      })
    } else {
      // this.props.onSubmit(this.state)
      // TODO: clear form
      this.setState({ errors: {} })
    }
  }

  onChange = e => {
    let updatedState = this.state

    if (e.target.name === 'photo') {
      updatedState = {
        ...updatedState,
        photo: e.target.files[0].name,
        photo_file: e.target.files[0],
        touched: { ...this.state.touched, photo: true },
        errors: { ...this.state.errors },
      }
    } else {
      updatedState = {
        ...updatedState,
        [e.target.name]: e.target.value,
        touched: { ...this.state.touched, [e.target.name]: true },
        errors: { ...this.state.errors },
      }
    }

    updatedState.isFormFilled = isFormFilled(updatedState.touched)

    this.setState(updatedState)
  }

  onPositionSelect = id => {
    this.setState({
      position: id,
      touched: { ...this.state.touched, position: true },
    })
  }

  render() {
    const {
      name,
      email,
      phone,
      position,
      photo,
      errors,
      isFormFilled,
    } = this.state
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
              error={errors['name'] ? errors['name'] : false}
            />
            <Input
              name="email"
              value={email}
              label="email"
              placeholder="Your Email"
              onChange={this.onChange}
              error={errors['email'] ? errors['email'] : false}
            />
            <Phone
              name="phone"
              value={phone}
              label="phone"
              placeholder="+38"
              onChange={this.onChange}
              error={errors['phone'] ? errors['phone'] : false}
            />
          </div>
          <div className="form__row">
            <Select
              options={positions}
              value={position}
              onChange={this.onPositionSelect}
              error={errors['position'] ? errors['position'] : false}
            />
            <Upload
              name="photo"
              value={photo}
              onChange={this.onChange}
              error={errors['photo'] ? errors['photo'] : false}
            />
          </div>
          <button
            className={classnames("btn", {'btn-primary': isFormFilled})}
            onClick={this.handleSubmit}
            disabled={!isFormFilled}
          >
            Sign Up
          </button>
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
