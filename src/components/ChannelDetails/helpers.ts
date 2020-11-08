import * as R from 'ramda';
import moment from 'moment';
import { ChannelDetailSchedule } from '../../api';

const getRenameDay = R.pipe(
  R.slice(0, 3) as (rec: string) => string,
  R.toUpper
);

const getDay = (date: string | Date) => moment(date, "YYYY-MM-DD HH:mm:ss").format('dddd');

const getConstructedData = (items: ChannelDetailSchedule) => (value: string) => {
  const date = new Date();
  const currentDay = getDay(date);
  const data = items[value];
  const day = getDay(value);
  const renameDay = getRenameDay(day);

  return {
    data,
    day: currentDay === day ? 'TODAY' : renameDay,
  };
}
;
export const mapData = (items: ChannelDetailSchedule) => {
  const mappedData = R.pipe(
    R.keys,
    R.map(getConstructedData(items)),
    R.indexBy(R.prop('day'))
  )(items);
  const keys = R.keys(mappedData);

  return {
    mappedData, keys
  }
};

export type MappedData = ReturnType<typeof mapData>;

