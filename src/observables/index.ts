import { from, Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { useObservable } from 'observable-hooks';

export const ACTION_STATE = {
  NONE: 'none',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  ERROR: 'error',
} as const;

export type ActionStateType = typeof ACTION_STATE[keyof typeof ACTION_STATE];

export type AsyncState<TResult> = {
  loading: boolean,
  actionState?: ActionStateType,
  error?: any,
  data?: TResult,
};

export declare type AsyncSaveState<TResult> = {
  isSaving: boolean;
  saveError?: any;
  data?: TResult;
};

export type AsyncStateData<TState extends AsyncState<any>> = TState extends AsyncState<infer Data>
  ? Data
  : never;

export const mapPromiseToAsyncState = <TResult>(promise: Promise<TResult>): Promise<AsyncState<TResult>> => promise
  .then((data) => ({ loading: false, data, actionState: ACTION_STATE.COMPLETED as ActionStateType }))
  .catch((error) => ({ loading: false, error, actionState: ACTION_STATE.ERROR as ActionStateType }));

export const mapPromiseToAsyncStateObservable = <TResult>(promise: Promise<TResult>): Observable<AsyncState<TResult>> => {
  const mappedPromise = mapPromiseToAsyncState(promise);
  const initialState = { loading: true, actionState: ACTION_STATE.PROCESSING as ActionStateType };

  return from(mappedPromise).pipe(startWith(initialState));
};

export const switchMapPromise = <TState, TInputs>(getPromise: (inputs: TInputs) => Promise<TState>) => switchMap(
  (inputs: TInputs) => mapPromiseToAsyncStateObservable(getPromise(inputs)),
);

export const usePromiseAsObservable = <TState, TInputs extends Readonly<any[]>>(
  getPromise: (inputs$: TInputs) => Promise<TState>,
  inputs: TInputs,
): Observable<AsyncState<TState>> => useObservable(
  (inputs$) => inputs$.pipe(
    switchMapPromise(getPromise),
  ),
  inputs,
);


export const switchMapData = (
  <
    T,
    A extends AsyncState<T> = AsyncState<T>,
  >(fnc: (state: A) => Observable<any>) => (
    switchMap((state: A) => {
      if (!state.data) {
        return from([state]);
      }

      return fnc(state);
    })
  )
);