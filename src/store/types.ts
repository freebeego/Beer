import store from './store'

export enum status {
  idle = 'idle',
  loading = 'loading',
  succeeded = 'succeeded',
  failed = 'failed',
}

export type TAppState = ReturnType<typeof store.getState>

export type TAppDispatch = typeof store.dispatch

export interface IThunkAPI {
  dispatch: TAppDispatch
  state: TAppState
}
