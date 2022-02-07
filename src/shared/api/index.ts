import { v4 as uuidv4 } from 'uuid';
import { POSTS_URL, USERS_URL } from './constants';
import { User } from './types';

type Users = Promise<{ users: User[]; amount: number } | null>;

export function getUsers(page: number): Users {
  return fetch(`${USERS_URL}?page=${page}`)
    .then((res) => res.json())
    .then((json) => {
      return {
        users: json.data.map(
          (user: User): User => ({
            id: user?.id ?? uuidv4(),
            name: user?.name ?? '',
            email: user?.email ?? '',
            gender: user?.gender ?? 'male',
            status: user?.status ?? 'inactive',
          })
        ),
        amount: json.meta.pagination?.total ?? 0,
      };
    })
    .catch((error) => {
      console.error('getUsers', error);
      return null;
    });
}

type PostsCount = Promise<number | null>;
export function getUserPostsCount(id: string): PostsCount {
  return fetch(`${POSTS_URL}?user_id=${id}`)
    .then((res) => res.json())
    .then((json) => {
      return json.meta.pagination.total;
    })
    .catch((error) => {
      console.error('getUserPostsCount', error);
      return null;
    });
}
