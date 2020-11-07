import React from 'react';
import {
  Img, HeaderContainer,
  ChannelNumber, ChannelTittle
} from '../Box/styled';
import { Top, Container, Description } from './styled';
import { ChannelDetResType } from '../../api';
import Tables from './Tables';

type DetailsProps = {
  item: ChannelDetResType;
};

const Details = ({ item }: DetailsProps) => (
  <Container>
    <Top>
      <Img src={item?.imageUrl}/>
      <HeaderContainer>
        <ChannelNumber>{`CH${item?.stbNumber}`}</ChannelNumber>
        <ChannelTittle>{item?.title}</ChannelTittle>
      </HeaderContainer>
    </Top>
    <Description>{item?.description}</Description>
    <Tables />
  </Container>
);

export default Details;