import React from 'react';
import {
  BarContainer, Title, FilterContainer,
} from './styled';
import DropdownField from '../DropdownField';
import FilterButton from '../FilterButton';
import SearchField from '../SearchField';

const Bar = () => (
  <BarContainer>
    <Title>Channels</Title>
    <FilterContainer>
      <SearchField />
      <DropdownField />
      <FilterButton />
    </FilterContainer>
  </BarContainer>
);

export default Bar;

