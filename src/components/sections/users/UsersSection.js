import React, { Component } from 'react'
import axios from 'axios'
import UserElizImage from '../../../assets/imgs/user-elizabeth-2x.jpg'
import User from './User'

class UsersSection extends Component {
  state = {
    users: [],
    next_url:
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
  }

  async componentDidMount() {
    this.fetch(this.state.next_url)
  }

  fetch = async url => {
    const res = await axios.get(url)
    this.setState({
      users: [...this.state.users, ...res.data.users],
      next_url: res.data.links.next_url,
    })
  }

  render() {
    const { users, next_url } = this.state

    return (
      <section id="users">
        <h2>Our cheerful users</h2>
        <h5>Attention! Sorting users by registration date</h5>
        <div className="users-grid">
          {users.map(user => (
            <User
              photo={user.photo}
              name={user.name}
              position={user.position}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </div>
        {next_url && (
          <button
            onClick={() => this.fetch(next_url)}
            className="btn btn-secondary"
          >
            Show more
          </button>
        )}
      </section>
    )
  }
}

export default UsersSection
