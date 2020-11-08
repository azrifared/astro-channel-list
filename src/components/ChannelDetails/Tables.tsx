import React from 'react';
import styled from 'styled-components';
import { ChannelDetailSchedule } from '../../api';
import { mapData } from './helpers';
import Navbar from './TopNavbar';
import { px2vw } from '../../utils';

type TablesProps = {
  items: ChannelDetailSchedule;
};

const Tables = ({ items }: TablesProps) => {
  const data = mapData(items);

  return (
    <TableContainer>
      <Navbar data={data}/>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  margin-top: ${px2vw(100)};

  @media (min-width: 1024px) {
    margin-top: ${px2vw(50)};
  }
`;


export default Tables;