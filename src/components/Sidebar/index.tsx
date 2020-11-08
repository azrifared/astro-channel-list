import React from 'react';
import styled from 'styled-components';
import {
  CloseButton, Overlay, StyledSidebar, Content
} from './styled';
import List from './FilterList';
import { FilterList } from '../../api';

const ButtonContainer = styled.div`
  cursor: pointer;
`;

type SidebarProps = {
  setClose: () => void;
  filterList: FilterList | undefined;
};


const Sidebar = ({ setClose, filterList }: SidebarProps) => (
  <>
    <Overlay />
    <StyledSidebar>
      <Content>
        <ButtonContainer onClick={setClose}>
          <CloseButton />
        </ButtonContainer>
        <List onClose={setClose} filterList={filterList} />
      </Content>
    </StyledSidebar>
  </>
);

export default Sidebar;