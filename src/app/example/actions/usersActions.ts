import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { FetchUsersResponse } from "../../../types";
import { fetchUsers as getUsersAsync } from "../services/userService";

export const SET_FETCHING = "requests/SET_FETCHING";
export type SET_FETCHING = typeof SET_FETCHING;

export const SET_USERS = "requests/SET_USERS";
export type SET_USERS = typeof SET_USERS;

export const SET_ERROR = "requests/SET_ERROR";
export type SET_ERROR = typeof SET_ERROR;

export interface SetFetching {
  type: SET_FETCHING;
  isFetching: boolean;
}

export interface SetUsers {
  type: SET_USERS;
  response: FetchUsersResponse;
}

export interface SetError {
  type: SET_ERROR;
  error: string | null;
  hasError: boolean;
}

export type UsersAction = SetFetching | SetUsers | SetError;

// Action Creators

export function setFetching(isFetching: boolean): SetFetching {
  return {
    type: SET_FETCHING,
    isFetching
  };
}

export function SetUsers(response: FetchUsersResponse): SetUsers {
  return {
    type: SET_USERS,
    response
  };
}

export function setError(hasError: boolean, error: string | null): SetError {
  return {
    type: SET_ERROR,
    hasError,
    error
  };
}

export function fetchUsers(): ThunkAction<Promise<void>, {}, {}, UsersAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(setFetching(true));
    dispatch(setError(false, null));
    try {
      const response = await getUsersAsync();
      dispatch(SetUsers(response));
    } catch (e) {
      console.log(e);
      dispatch(setError(true, e.message));
    }
    dispatch(setFetching(false));
  };
}
