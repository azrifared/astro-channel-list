import React, { useState } from 'react';
import styled from 'styled-components';
import { MappedData } from './helpers';
import { px2vw } from '../../utils';
import List from './List';

type ItemProps = {
  isSelected: boolean;
};

type TopNavbarProps = {
  data: MappedData
};

const TopNavbar = ({ data }: TopNavbarProps) => {
  const { keys, mappedData } = data;
  const [selectedDay, setDay] = useState('TODAY');

  return (
    <>
      <Navbar>
        {keys.map((value) => (
          <Items
            onClick={() => setDay(value)}
            key={Math.random()}
            isSelected={selectedDay === value ? true : false}
          >
            {value}
          </Items>
        ))}
      </Navbar>
      <List item={mappedData[selectedDay]} />
    </>
  );
};

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${px2vw(800)};
  @media (min-width: 1024px) {
    width: ${px2vw(400)};
  }
  @media (min-width: 1366px) {
    width: ${px2vw(300)};
  }
`;

const Items = styled.div<ItemProps>`
  font-family: Segoe UI;
  font-size: 2.6rem;
  cursor: pointer;
  color: ${({ isSelected }) => isSelected ? 'black' : '#707070'};
  font-weight:  ${({ isSelected }) => isSelected ? '700' : 'normal'};
  margin-right: ${px2vw(50)};
  border-bottom: ${({ isSelected }) => isSelected ? '2px solid #f50057' : 'none'};
  @media (min-width: 1024px) {
    font-size: 1rem;
    margin-right: 0;
  }
  @media (min-width: 1366px) {
    font-size: 0.8rem;
  }
`;

export default TopNavbar;


