type Gender = 'male' | 'female';

type Status = 'active' | 'inactive';

export type User = {
  id: string;
  name: string;
  email: string;
  gender: Gender;
  status: Status;
};
