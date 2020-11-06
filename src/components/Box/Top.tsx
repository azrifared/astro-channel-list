import React from 'react';
import { ChannelType } from '../../api';
import {
  BoxTop, Img, HeaderContainer,
  ChannelNumber, ChannelTittle
} from './styled';

type BoxListProps = {
  item: ChannelType;
};

const Top = ({ item }: BoxListProps) => (
  <BoxTop>
    <Img src={item?.imageUrl}/>
    <HeaderContainer>
      <ChannelNumber>{`CH${item?.stbNumber}`}</ChannelNumber>
      <ChannelTittle>{item?.title}</ChannelTittle>
    </HeaderContainer>
  </BoxTop>
);

export default Top;