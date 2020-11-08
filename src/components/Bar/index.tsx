import React ,{ useState } from 'react';
import {
  BarContainer, Title, FilterContainer,
} from './styled';
import DropdownField from '../DropdownField';
import FilterButton from '../FilterButton';
import SearchField from '../SearchField';
import Sidebar from '../Sidebar';
import { FilterList } from '../../api';

type BarProps = {
  filterList: FilterList | undefined;
}

const Bar = ({ filterList }: BarProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <BarContainer>
      <Title>Channels</Title>
      <FilterContainer>
        <SearchField />
        <DropdownField />
        <FilterButton setOpen={() => setOpen(true)}/>
      </FilterContainer>
      {isOpen && (
        <Sidebar
          setClose={() => setOpen(false)}
          filterList={filterList}
        />
      )}
    </BarContainer>
  )
};

export default Bar;

