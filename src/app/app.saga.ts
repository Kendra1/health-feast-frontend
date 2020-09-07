import { all, fork } from "redux-saga/effects";
import { authWatcherSaga } from "./auth/auth.saga-watchers";
import { initAppSaga } from "./init/init.saga";
import { watchLoginFormSaga } from "./login-form/login-form.saga-watcher";
import { watchLoginFormValuesSaga } from "./login-form/values/login-values.saga-watcher";
import { watchRegistrationFormValuesSaga } from "./registration-form/values/registration-values.saga-watcher";
import { watchRecipeSaga } from "./recipes/recipes.saga-watcher";
import { watchAccountSaga } from "./account/account.watcherSaga";
import { watchExercisesSaga } from "./exercises/exercises.watcherSaga";

export function* rootSaga() {
  yield all(
    [
      authWatcherSaga,
      initAppSaga,
      watchLoginFormSaga,
      watchLoginFormValuesSaga,
      watchRegistrationFormValuesSaga,
      watchRecipeSaga,
      watchAccountSaga,
      watchExercisesSaga,
    ].map(fork)
  );
}
