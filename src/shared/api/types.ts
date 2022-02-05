export enum Gender {
  male,
  female,
}

export enum Status {
  active,
  inactive,
}

export type User = {
  id: string;
  name: string;
  email: string;
  gender: Gender;
  status: Status;
  postsCount: number | null;
};
