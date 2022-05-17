import { User } from "@/domain/user";

export interface UserStorageService {
  user: User;
  // eslint-disable-next-line no-unused-vars
  updateUser(user: User):void;
}