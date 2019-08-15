import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext({})

export class UserProvider extends Component {
  state = {
    user: {},
  }

  async componentDidMount() {
    const rest = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users/1',
    )

    this.setState({ user: rest.data.user })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const UserConsumer = Context.Consumer
