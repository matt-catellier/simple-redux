import React from "react"
import { connect } from "react-redux"

import { fetchUsers } from '../actions/userActions';

function mapStateToProps(store) {
  return {
    users: store.user.initialState.users,
    usersFetched: store.user.initialState.fetched
  }
}

// function mapDispatchToProps(dispatch) {
//   console.log(dispatch);
//   return {
//     actions: bindActionCreators(user, dispatch)
//   }
// }


class Layout extends React.Component {

  fetchUsers() {
    this.props.dispatch(fetchUsers);
  }
  render() {
    const { users } = this.props;
    console.log(this.props);
    if(users.length <= 0) {
      return <button onClick={this.fetchUsers.bind(this)}> Load Users </button>
    }
    return <h1> Layout </h1>;
  }
}

export default connect(mapStateToProps)(Layout);
