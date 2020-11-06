import { switchMap, startWith } from 'rxjs/operators';
import { Subject, Observable, from } from 'rxjs';
import * as R from 'ramda';
import { mapPromiseToAsyncStateObservable, switchMapData } from '../../observables';
import { fetchChannelLists } from '../../api';
import { AsyncState } from '../../observables';
import { ChannelResponseType } from '../../api';
import { DROPDOWN_LIST } from '../DropdownField';

type ChannelActionType = {
  searchString?: string;
  sortType?: string;
};

type ResObservable = Observable<AsyncState<ChannelResponseType>>;

export const channelActionSubject = new Subject<ChannelActionType>();

const fetchChannelObservable = switchMap(
  () => mapPromiseToAsyncStateObservable<ChannelResponseType>(
    fetchChannelLists()
  )
);

const switchObservable = (
  searchObservable: (searchString: string) => ResObservable,
  sortObservable: (sortType: string) =>ResObservable,
) => switchMap(
  (data: ChannelActionType) => {
    if (data?.searchString) return searchObservable(data.searchString);

    if (data?.sortType) return sortObservable(data.sortType);

    return mapPromiseToAsyncStateObservable<ChannelResponseType>(
      fetchChannelLists()
    );
  }
);

const getSearchData = (val: string) => R.filter(
  R.compose(
    (data: string[]) => {
      return R.any(R.includes(val))(R.map(R.pipe(R.toString,R.toLower))(data))
    },
    R.pipe(
      R.pick(['title', 'stbNumber']),
      R.values
    )
  )
);

const filterSearchObservable = (searchString: string) => switchMapData(
  (state: AsyncState<ChannelResponseType>) => {
    const newDataState = R.pipe(
      R.pathOr([], ['data', 'response']),
      getSearchData(searchString)
    )(state);
    const newState = R.set(R.lensPath(['data', 'response']), newDataState, state);
    return from([newState]);
  }
);

const searchObservable = (searchString: string) => from([searchString]).pipe(
  fetchChannelObservable,
  filterSearchObservable(searchString)
);

const sortDataObservable = (sortType: string) => switchMapData(
  (state: AsyncState<ChannelResponseType>) => {
    if (DROPDOWN_LIST[0] === sortType) {
      console.log(state);
      return from([state]);
    }

    return from([state]);
  }
)

const sortObservable = (sortType: string) => from([sortType]).pipe(
  fetchChannelObservable,
  sortDataObservable(sortType)
);

const mapDataToObservable = switchObservable(
  searchObservable,
  sortObservable,
);

export const channelObservable: ResObservable = channelActionSubject.pipe(
  mapDataToObservable,
  startWith({ loading: true, actionState: 'processing' })
);