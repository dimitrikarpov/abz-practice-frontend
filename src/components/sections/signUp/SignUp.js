import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'
import { Context } from '../../../storage/token-context'
import Notification from '../../notification/Notification'

const getFirstErrors = fails => {
  return Object.entries(fails).reduce((acc, item) => {
    let key = item[0]
    let val = fails[key][0]

    return { ...acc, [key]: val }
  }, {})
}

class SignUp extends Component {
  state = {
    positions: [],
    errors: {},
    modal: {
      visible: false,
      title: '',
      message: '',
    },
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
    )

    this.setState({ positions: res.data.positions })
  }

  handleSubmit = ({ name, email, phone, position, photo_file }) => {
    const token = this.context.token
    console.log(token)

    const data = new FormData()
    data.append('name', name)
    data.append('email', email)
    data.append('phone', phone.replace(/\(|\)|\s/g, ''))
    data.append('position_id', position)
    data.append('photo', photo_file)

    axios
      .post(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users',
        data,
        {
          headers: {
            Token: token,
          },
        },
      )
      .then(response => {
        this.setState({
          modal: {
            visible: true,
            title: 'Congratulations',
            message: 'You have succefully passed the registration',
          },
        })
      })
      .catch(error => {
        if (error.response.data.message === 'Validation failed') {
          this.setState({ errors: getFirstErrors(error.response.data.fails) })
        } else if (
          error.response.data.message ===
          'User with this phone or email already exist'
        ) {
          this.setState({
            errors: { email: 'User with this phone or email already exist' },
          })
        } else {
          this.setState({
            modal: {
              visible: true,
              title: 'Network Error',
              message: 'Something is wrong',
            },
          })
        }
      })
  }

  handleOnModalClose = () => {
    this.setState({modal: {visible: false, title: '', message: ''}})
  }

  render() {
    const { positions, errors, modal } = this.state

    return (
      <>
        <Form
          positions={positions}
          onSubmit={this.handleSubmit}
          errors={errors}
        />
        {modal.visible && (
          <Notification
            visible={modal.visible}
            title={modal.title}
            message={modal.message}
            onClose={this.handleOnModalClose}
          />
        )}
      </>
    )
  }
}

export default SignUp

SignUp.contextType = Context
