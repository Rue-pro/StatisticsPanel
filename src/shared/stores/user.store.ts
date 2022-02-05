import { makeAutoObservable, runInAction } from "mobx";
import { getUsers } from "../api";
import { User } from "../api/types";

interface IUserStore {
  isLoading: boolean;
  users: User[];
  amount: number;
}

class UserStore implements IUserStore {
  isLoading = false;
  users: User[] = [];
  amount = 0;

  constructor() {
    makeAutoObservable(this);
  }

  getUsers(page: number): Promise<void> {
    this.isLoading = true;
    return getUsers(page)
      .then((data) => {
        if (data === null) {
          alert("Server error");
          return;
        }
        runInAction(() => {
          this.users.push(...data.users);
          this.amount = data.amount;
        });
      })
      .finally(() => {
        runInAction(() => {
          this.isLoading = false;
        });
      });
  }
}

export const userStore = new UserStore();
