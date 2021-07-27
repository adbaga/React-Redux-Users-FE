import {
    CREATE_USER,
    RETRIEVE_USERS,
    UPDATE_USER,
    DELETE_USER,
    DELETE_ALL_USERS,
  } from "./types";
  
  import UserDataService from "../services/UserService";
  
  export const createUser = (firstName, lastName, userName, email) => async (dispatch) => {
    try {
      const res = await UserDataService.create({ firstName, lastName, userName, email });
  
      dispatch({
        type: CREATE_USER,
        payload: res.data,
      });

      console.log(Promise.resolve(res.data))
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveUsers = () => async (dispatch) => {
    try {
      const res = await UserDataService.getAll();

      console.log(res.data)
  
      dispatch({
        type: RETRIEVE_USERS,
        payload: res.data.users,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateUser = (id, data) => async (dispatch) => {
    try {
      const res = await UserDataService.update(id, data);
  
      dispatch({
        type: UPDATE_USER,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteUser = (id) => async (dispatch) => {
    try {
      await UserDataService.remove(id);
  
      dispatch({
        type: DELETE_USER,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllUsers = () => async (dispatch) => {
    try {
      const res = await UserDataService.removeAll();
  
      dispatch({
        type: DELETE_ALL_USERS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const findUserByUserName = (userName) => async (dispatch) => {
    try {
      const res = await UserDataService.findUserByUserName(userName);
  
      dispatch({
        type: RETRIEVE_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  