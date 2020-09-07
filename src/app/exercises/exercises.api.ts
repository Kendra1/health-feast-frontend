import { IApiRequestInfo } from "../api/api.types";

export const allExercisesAPI = (): IApiRequestInfo => ({
  uri: `/users/user`,
  method: "get",
});

export const getWorkoutsAPI = (data: any): IApiRequestInfo => ({
  uri: `/api/drools/workouts`,
  method: "post",
  data,
});
