import { IApiRequestInfo } from '../api/api.types';
import { IUserCredentials, IUserRegistration } from './auth.types';

export const loginAPI = (data: IUserCredentials): IApiRequestInfo => ({
  uri: '/users/login',
  method: 'post',
  data,
});

export const registerAPI = (data: IUserRegistration): IApiRequestInfo => ({
  uri: '/users/register',
  method: 'post',
  data,
});
