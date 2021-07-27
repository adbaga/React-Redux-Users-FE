import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  retrieveUsers,
  findUserByUserName,
  deleteAllUsers,
} from "../actions/users";

const UsersList = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchUserName, setSearchUserName] = useState("");

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveUsers());
  }, []);

  const onChangeSearchUserName = e => {
    const searchUserName = e.target.value;
    setSearchUserName(searchUserName);
  };

  const refreshData = () => {
    setCurrentUser(null);
    setCurrentIndex(-1);
  };

  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    setCurrentIndex(index);
  };

  const removeAllUsers = () => {
    dispatch(deleteAllUsers())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findUserByUserName = () => {
    refreshData();
    dispatch(findUserByUserName(searchUserName));
  };

  return (
    <div data-testid="UsersList-1" className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by User Name"
            value={searchUserName}
            onChange={onChangeSearchUserName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findUserByUserName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Users List</h4>

        <ul className="list-group">
          {users &&
            users.map((user, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveUser(user, index)}
                key={index}
              >
                {user.userName}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllUsers}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentUser ? (
          <div>
            <h4>User</h4>
            <div>
              <label>
                <strong>User Name:</strong>
              </label>{" "}
              {currentUser.userName}
            </div>
            <div>
              <label>
                <strong>First Name:</strong>
              </label>{" "}
              {currentUser.firstName}
            </div>
            <div>
              <label>
                <strong>Last Name:</strong>
              </label>{" "}
              {currentUser.lastName}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentUser.email}
            </div>

            <Link
              to={"/users/" + currentUser.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
