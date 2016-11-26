import React, {Component} from 'react';
import User from './../user/user.component';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
      ]
    }
  }

  render() {
    return (
      <section>
        <h1>Users:</h1>
        <ul>
          {
            this.state.users.map((user, i) => {
              return (
                <li key={i}>
                  <User user={user} />
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}
