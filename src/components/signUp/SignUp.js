import React, { Component } from 'react'
import { PositionsConsumer } from '../../storage/positions-context'
import axios from 'axios'
import Form from './Form'

class SignUp extends Component {
  state = {
    positions: [],
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
    )

    this.setState({ positions: res.data.positions })
  }

  handleSubmit = () => {
      // post request
  }

  render() {
    const { positions } = this.state

    return (
        <Form positions={positions}/>
    )
  }
}

export default SignUp
