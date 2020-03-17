import { UsersAction, SET_FETCHING, SET_USERS, SET_ERROR } from "../actions";

import { User } from "../../../types";

export interface UsersState {
  total: number;
  page: number;
  limit: number;
  users: User[];
  hasError: boolean;
  error: string | null;
  fetching: boolean;
}

const initialState: UsersState = {
  total: 0,
  page: 0,
  limit: 50,
  users: [],
  hasError: false,
  error: null,
  fetching: false
};

export function usersReducer(
  state = initialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case SET_FETCHING:
      return {
        ...state,
        fetching: action.isFetching
      };
    case SET_USERS:
      return {
        ...state,
        total: action.response.total,
        limit: action.response.limit,
        page: action.response.page,
        users: action.response.data
      };
    case SET_ERROR:
      return {
        ...state,
        hasError: action.hasError,
        error: action.error
      };
    default:
      return state;
  }
}
