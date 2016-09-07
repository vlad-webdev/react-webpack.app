import React, {Component} from 'react';
import Users from './../users/users.component';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Users />
      </div>
    );
  }
}
