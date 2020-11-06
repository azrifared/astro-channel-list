import React from 'react';
import moment from 'moment';
import * as R from 'ramda';
import { CurrentScheduleType } from '../../api';
import {
  BoxBottom, Row, FirstCol, SecondCol
} from './styled';

type BottomProps = {
  currentSchedule: CurrentScheduleType[];
}

const Bottom = ({ currentSchedule }: BottomProps) =>  {
  const latestThree = R.pipe(
    R.remove(3, 4) as (recs: CurrentScheduleType[]) => CurrentScheduleType[],
    R.map((item) => ({
      ...item,
      datetime: moment(item.datetime).format('hh:mm A')
    }))
  )(currentSchedule);
  const filteredFirst = R.head(latestThree);
  const lastTwo = latestThree.slice(1);

  return (
    <BoxBottom>
      <Row key={filteredFirst?.eventId}>
        <FirstCol isTop>On Now</FirstCol>
        <SecondCol isTop>{filteredFirst?.title}</SecondCol>
      </Row>
      {lastTwo?.map((data) => (
        <Row key={data?.eventId}>
          <FirstCol>{data?.datetime}</FirstCol>
          <SecondCol>{data?.title}</SecondCol>
        </Row>
      ))}
    </BoxBottom>
  )
};

export default Bottom;