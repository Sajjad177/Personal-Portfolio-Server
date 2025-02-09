import { USER_ROLES } from "./user.constant";

export type TUser = {
  email: string;
  password: string;
  role: "admin" | "user";
  _id: string;
};

export type TUserRole = keyof typeof USER_ROLES;