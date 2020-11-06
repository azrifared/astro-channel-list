import React from 'react';
import { ChannelType } from '../../api';
import { BoxContainer } from './styled';
import Bottom from './Bottom';
import Top from './Top';

type BoxListProps = {
  item: ChannelType;
};

const BoxList = ({ item }: BoxListProps) => (
  <BoxContainer>
    <Top item={item} />
    <Bottom currentSchedule={item.currentSchedule} />
  </BoxContainer>
);

export default BoxList;