import { action, makeObservable, observable, runInAction } from "mobx";
import { getUserPostsCount, getUsers } from "../api";
import { User } from "../api/types";

interface IUserStore {
  isLoading: boolean;
  users: User[];
  amount: number;
}

class UserStore implements IUserStore {
  constructor() {
    makeObservable(this);
  }
  @observable private _isLoading = false;
  @observable private _users: User[] = [];
  @observable private _amount = 0;

  get isLoading(): boolean {
    return this._isLoading;
  }
  get users(): User[] {
    return this._users;
  }
  get amount(): number {
    return this._amount;
  }

  @action getUsers(page: number): Promise<void> {
    this._isLoading = true;
    return getUsers(page)
      .then((data) => {
        if (data === null) {
          alert("Server error");
          return;
        }
        runInAction(() => {
          this._users.push(...data.users);
          this._amount = data.amount;
        });
      })
      .finally(() => {
        runInAction(() => {
          this._isLoading = false;
        });
      });
  }

  @action getUserPostsCount(index: number) {
    return getUserPostsCount(this._users[index].id).then((data) => {
      if (data === null) {
        alert("Server error");
        return;
      }
      runInAction(() => {
        this._users[index].postsCount = data;
      });
    });
  }
}

export const userStore = new UserStore();
