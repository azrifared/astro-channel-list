import { switchMap } from 'rxjs/operators';
import { hashObservable } from '../../observables';
import { mapPromiseToAsyncStateObservable, HashProp } from '../../observables';
import { fetchChannelDetails } from '../../api';

export const channelDetailsObservable = hashObservable('channel').pipe(
  switchMap(
    ({ id }: HashProp) => {
      return mapPromiseToAsyncStateObservable(
        fetchChannelDetails(id)
      )
    }
  )
);