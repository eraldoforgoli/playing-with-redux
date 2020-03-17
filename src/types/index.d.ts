import { UsersState } from "../app/example/reducers/usersReducers";

export interface AppState extends UsersState {
  count: number;
  items: Item[];
}

export interface Item {
  value: string;
}

export interface User {
  name: string;
  id: string;
}

export interface FetchUsersResponse {
  page: number;
  limit: number;
  total: number;
  data: User[];
}
