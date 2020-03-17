import React, { useState, Dispatch, useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { User } from "../../../types/index";
import * as actions from "../actions/index";
import { AppState } from "../../../store/index";

interface UserProps {
  users: User[];
  fetching: boolean;
  error: string | null;
  onFetchUsers: () => Promise<any>;
}

const UserComponent: React.FC<UserProps> = ({
  fetching,
  error,
  users,
  onFetchUsers
}) => {
  useEffect(() => {
    onFetchUsers();
  }, [onFetchUsers]);

  const userItems =
    users.length > 0 &&
    users.map(user => (
      <div className="UserItem" key={user.id}>
        {user.name}
      </div>
    ));

  return (
    <div>
      {fetching && <div>Fetching users...</div>}
      {error && <div className="error">{error}</div>}
      {users.length > 0 && userItems}
    </div>
  );
};

function mapDispatchToProps(
  dispatch: ThunkDispatch<any, any, actions.UsersAction>
) {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers())
  };
}

const mapStateToProps = ({ users }: AppState) => {
  debugger;
  return {
    users: users.users,
    error: users.error,
    fetching: users.fetching
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
