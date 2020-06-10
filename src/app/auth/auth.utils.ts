import { IUserWithToken } from "./auth.types";

export const persistLoggedUser = (user: IUserWithToken): void => {
  localStorage.setItem("logged_user", JSON.stringify(user));
};

export const abandonLoggedUser = () => {
  localStorage.removeItem("logged_user");
};

export const readLoggedUser = (): IUserWithToken | null => {
  try {
    const user = localStorage.getItem("logged_user");
    return user ? JSON.parse(user) : null;
  } catch (e) {
    return null;
  }
};
