import React from 'react';
import styled from 'styled-components';
import { px2vw } from '../../utils';
import { channelActionSubject } from '../ChannelList/observables';

const Input = styled.input`
  width: 100%;
  height: ${px2vw(120)}
  padding-left: ${px2vw(20)}
  border: 2px solid #BEBEBE;
  text-align: center;
  @media (min-width: 1024px) {
    padding-left: ${px2vw(10)}
    width: ${px2vw(400)};
    height: ${px2vw(30)}
  }
`;


const SearchField = () => (
  <Input 
    type='text'
    placeholder='Search channel name or number here...'
    onChange={(e) => {
      channelActionSubject.next({ searchString: e.target.value })
    }}
  />
);

export default SearchField;