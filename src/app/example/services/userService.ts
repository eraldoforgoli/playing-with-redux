import { FetchUsersResponse, User } from "../../../types";

const fakeData: User[] = [
  {
    name: "Eraldo",
    id: "1"
  },
  {
    name: "Cimi",
    id: "2"
  }
];

export async function fetchUsers(): Promise<FetchUsersResponse> {
  const res = { page: 1, limit: 50, data: fakeData, total: 3 };
  return new Promise(resolve => {
    setTimeout(() => resolve(res), 800);
  });
}
