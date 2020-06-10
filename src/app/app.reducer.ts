import { combineReducers } from "redux";

import { IAppState } from "./app.types";
import { authReducer } from "./auth/auth.reducer";
import { initReducer } from "./init/init.reducer";
import { loginFormReducer } from "./login-form/login-form.reducer";
import { snackbarReducer } from "./snackbar/snackbar.reducer";
import { registrationFormReducer } from "./registration-form/registration-form.reducer";

export const rootReducer = combineReducers<IAppState>({
  auth: authReducer,
  init: initReducer,
  loginForm: loginFormReducer,
  snackbar: snackbarReducer,
  registrationForm: registrationFormReducer,
});