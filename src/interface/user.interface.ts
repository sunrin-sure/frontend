import { JobNames } from '../types/users/user.job.type'

export interface UserProps {
  _id: string
  username: string;
  email: string;
  password: string;
  avatar: string;
  fields: JobNames[];
  stacks: string[];
  refresh_token: string;
  admin: boolean;
}
