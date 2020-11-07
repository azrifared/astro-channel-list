import * as R from 'ramda';
import { startWith, switchMap, map, shareReplay } from 'rxjs/operators';
import { fromEvent, of, from, Observable } from 'rxjs';
import qs from 'qs';

export const ACTION_STATE = {
  NONE: 'none',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  ERROR: 'error',
} as const;

export type HashProp = {
  [key: string]: string,
};

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

const getHash = () => qs.parse(window.location.hash.slice(1));

const mapKey = (fnc: (key: string) => string) => R.pipe(
  R.toPairs,
  R.map(([key, value]) => [fnc(key), value]),
  R.fromPairs,
) as (obj: HashProp) => HashProp;

const withSecondArgument = <T, K>(fnc: (arg: K) => T) => (__: any, arg: K) => fnc(arg);

const getKeySpace = (space: string) => R.pipe(
  R.pickBy(withSecondArgument(R.startsWith(`${space}.`))) as (obj: HashProp) => HashProp,
  mapKey(R.drop(space.length + 1)),
);

const hashChangeObservable = fromEvent(window, 'hashchange').pipe(
  startWith(getHash()),
  switchMap(() => of(getHash())),
  shareReplay(1),
);

export const hashObservable = (space: string) => from(hashChangeObservable).pipe(
  map(getKeySpace(space)),
  shareReplay(1),
);
