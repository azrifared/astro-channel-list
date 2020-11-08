import React from 'react';
import styled from 'styled-components'
import { px2vw } from '../../utils';

type FilterButtonProps = {
  setOpen: () => void;
};

const FilterButton = ({ setOpen }: FilterButtonProps) => (
  <ButtonContainer onClick={setOpen}>
    <Button>Filter channels</Button>
  </ButtonContainer>
);

const ButtonContainer = styled.div`
  cursor: pointer;
  margin-top: ${px2vw(20)};
  @media (min-width: 1024px) {
    margin-top: 0;
    margin-left: ${px2vw(10)};
  }
`;

const Button = styled.div`
  font-size: 2.4rem;
  font-family: Segoe UI;
  color: white;
  background: #008B8B;
  height: ${px2vw(120)}
  width: 100%;
  text-align: center;
  line-height: 2;
  @media (min-width: 1024px) {
    font-size: 0.8rem;
    width: ${px2vw(200)};
    height: ${px2vw(30)}
    line-height: 2.5;
  }
`;

export default FilterButton;