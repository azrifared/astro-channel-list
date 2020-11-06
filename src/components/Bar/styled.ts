import styled from 'styled-components';
import { px2vw } from '../../utils';

export const BarContainer = styled.div`
  margin: 0 ${px2vw(33)};
`;

export const FilterContainer = styled.div`
  padding: ${px2vw(20)} 0;

  @media (min-width: 1024px) {
    display: flex;
    align-item: center;
  }
`;

export const Title = styled.h3`
  font-size: 4rem;
  font-weight: 700;
  font-family: Segoe UI;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;