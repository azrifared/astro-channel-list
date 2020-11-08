import { switchMap, startWith } from 'rxjs/operators';
import { Subject, Observable, from } from 'rxjs';
import * as R from 'ramda';
import { mapPromiseToAsyncStateObservable, switchMapData } from '../../observables';
import { fetchChannelLists, FilterList } from '../../api';
import { AsyncState } from '../../observables';
import { ChannelResponseType } from '../../api';
import { DROPDOWN_LIST } from '../DropdownField';

type ChannelActionType = {
  searchString?: string;
  sortType?: string;
  filterList?: FilterList;
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
  sortObservable: (sortType: string) => ResObservable,
  filterObservable: (filterList: FilterList) => ResObservable,
) => switchMap(
  (data: ChannelActionType) => {
    if (data?.searchString) return searchObservable(data.searchString);

    if (data?.sortType) return sortObservable(data.sortType);

    if (data?.filterList) return filterObservable(data.filterList);

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
      const sortedItems = R.pipe(
        R.pathOr([], ['data', 'response']),
        R.sortBy(R.compose(R.toLower, R.prop('title'))),
      )(state);
      const newState =  R.set(R.lensPath(['data', 'response']), sortedItems, state);

      return from([newState]);
    }

    return from([state]);
  }
);

const sortObservable = (sortType: string) => from([sortType]).pipe(
  fetchChannelObservable,
  sortDataObservable(sortType),
);


const checkOnly = (filterList: FilterList) => {
  const data = {
    category: filterList?.Categories?.length > 0 ? filterList?.Categories : null,
    isHd: filterList?.Resolution?.length > 0 ? filterList?.Resolution : null,
    language: filterList?.Language?.length > 0 ? filterList?.Language : null,
  }
  const newData = R.reject(R.isNil)(data);

  return newData;
}


const mapData = (options: any, data: any) => (item: string) => {
  if (item === 'isHd') {
    const resolutionData = options[item];

    if (resolutionData) {
      if (resolutionData.includes('HD')) {
        return data?.isHd
      };
      return false;
    };
    return null;
  }
  if (item === 'category') {
    const categoryData = options[item];
    if (categoryData) {
      return R.includes(data?.category)(categoryData);
    }
    return null;
  }

  if (item === 'language') {
    const languageData = options[item];
    if (languageData) {
      return R.includes(data?.language)(languageData);
    }
    return null;
  }
}

const getFilteredData = (filterList: FilterList) => R.filter(
  R.compose(
    (data: { isHd: boolean, category: string, language: string }) => {
      const options = checkOnly(filterList);

      if (R.isEmpty(options)) return true;

      const dataKeys = R.keys(data);

      const filteredData = R.pipe(
        R.map(mapData(options, data)),
        R.reject(R.isNil)
      )(dataKeys);

      if (R.any(R.equals(false), filteredData)) return false;

      return true;
    },
    R.pick(['isHd', 'category', 'language']),
  )
);

const filterDataObservable = (filterList: FilterList) => switchMapData(
  (state: AsyncState<ChannelResponseType>) => {
    const newState =  R.set(R.lensPath(['data', 'filteredList']), filterList, state);
    const filteredData = R.pipe(
      R.pathOr([], ['data', 'response']),
      getFilteredData(filterList)
    )(state);
    const newDataState =  R.set(R.lensPath(['data', 'response']), filteredData, newState);

    return from([newDataState]);
  }
)

const filterObservable = (filterList: FilterList) => from([filterList]).pipe(
  fetchChannelObservable,
  filterDataObservable(filterList),
)

const mapDataToObservable = switchObservable(
  searchObservable,
  sortObservable,
  filterObservable,
);

export const channelObservable: ResObservable = channelActionSubject.pipe(
  mapDataToObservable,
  startWith({ loading: true, actionState: 'processing' })
);