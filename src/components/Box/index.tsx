import React from 'react';
import { ChannelType } from '../../api';
import { BoxContainer } from './styled';
import Bottom from './Bottom';
import Top from './Top';
import { pathActionSubject } from '../../routes';

type BoxListProps = {
  item: ChannelType;
};


const BoxList = ({ item }: BoxListProps) => {
  return (
    <BoxContainer onClick={
      () => {
        pathActionSubject.next(item.detailUrl);
        window.location.href = `${item.detailUrl}#channel.id=${item.id}`;
      }
    }>
      <Top item={item} />
      <Bottom currentSchedule={item.currentSchedule} />
    </BoxContainer>
  )
};

export default BoxList;