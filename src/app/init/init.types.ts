import { STORE_INIT_COMPLETE, INIT_APP } from './init.constants';

export interface IStoreInitCompleteAction {
  type: typeof STORE_INIT_COMPLETE;
}

export interface IInitAppAction {
  type: typeof INIT_APP;
}

export interface IInitState {
  readonly isInitComplete: boolean;
}

export type IInitAction = IStoreInitCompleteAction;
