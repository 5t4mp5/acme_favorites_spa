import React from "react";

const Users = ({ users }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            {user.name}
            <ul>
              {user.favorites.map(fave => {
                return <li key={fave.id}>{fave.thing.name} (Ranked: {fave.rank})</li>;
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
