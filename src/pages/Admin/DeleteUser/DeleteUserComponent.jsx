import React from "react";

export default function DeleteUserComponent(props) {
  const { user } = props;
  console.log(user);
  return (
    <div className="deleteUser">
      <div className="deleteUser__content">
        <h4>Info User</h4>
        <table className="table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>FullName</th>
              <th>Email</th>
              <th>TypeUser</th>
              <th>PhoneNumber</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.userName}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.typeUser}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
