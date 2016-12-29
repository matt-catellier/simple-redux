import React from "react"
import { connect } from "react-redux"

import { fetchUsers } from '../actions/userActions';

function mapStateToProps(store) {
  return {
    users: store.user.users,
    usersFetched: store.user.fetched
  }
}

class Layout extends React.Component {
  fetchUsers() {
    // var object = fetchUsers();
    this.props.dispatch(fetchUsers());
  }
  render() {
    this.props;
    const { users, usersFetched } = this.props;
    if(!usersFetched) {
      return <button onClick={this.fetchUsers.bind(this)}> Load Users </button>
    } else {
      const userList = users.map( (user, key) => <p key={key}> {user.name} </p> );
      return <div> { userList } </div>;
    }
  }
}

export default connect(mapStateToProps)(Layout);
