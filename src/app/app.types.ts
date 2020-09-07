import { IAuthState } from "./auth/auth.types";
import { IInitState } from "./init/init.types";
import { ILoginFormState } from "./login-form/login-form.types";
import { ISnackbarState } from "./snackbar/snackbar.types";
import { IRegistrationFormState } from "./registration-form/registration-form.types";
import { IRecipesState } from "./recipes/recipes.types";
import { IAccountState } from "./account/account.types";
import { IExercisesState } from "./exercises/exercises.types";

export interface IAppState {
  readonly auth: IAuthState;
  readonly init: IInitState;
  readonly loginForm: ILoginFormState;
  readonly snackbar: ISnackbarState;
  readonly registrationForm: IRegistrationFormState;
  readonly recipes: IRecipesState;
  readonly account: IAccountState;
  readonly exercises: IExercisesState;
}
