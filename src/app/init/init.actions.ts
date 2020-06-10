import { IStoreInitCompleteAction, IInitAppAction } from './init.types';
import { STORE_INIT_COMPLETE, INIT_APP } from './init.constants';

export const storeInitComplete = (): IStoreInitCompleteAction => ({
  type: STORE_INIT_COMPLETE,
});

export const initApp = (): IInitAppAction => ({
  type: INIT_APP,
});
