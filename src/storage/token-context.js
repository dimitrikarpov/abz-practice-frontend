import React, { Component } from 'react'
import axios from 'axios'

export const Context = React.createContext()

export class TokenProvider extends Component {
  state = {
    token: null,
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/token',
    )

    this.setState({ token: res.data.token })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const TokenConsumer = Context.Consumer
