import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext([1, 2, 3])

export class PositionsProvider extends Component {
  state = {
    positions: [],
  }

  componentDidMount() {
    console.log('in positions context')

    const res =  axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
    )
    this.setState({ positions: res.positions })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const PositionsConsumer = Context.Consumer
