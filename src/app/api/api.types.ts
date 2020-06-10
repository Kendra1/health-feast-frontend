import { AxiosRequestConfig } from 'axios';

type IResponseType = 'blob';
export type IApiMethod = 'get' | 'post' | 'put' | 'delete';

export interface IApiRequestInfo<TPayload = unknown, TParams = unknown> {
  uri: string;
  method: IApiMethod;
  params?: TParams;
  data?: TPayload;
  responseType?: IResponseType;
  overrides?: Pick<AxiosRequestConfig, 'baseURL' | 'headers'>;
}
