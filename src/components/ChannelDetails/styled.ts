import styled from 'styled-components';
import { px2vw } from '../../utils';
import { BarContainer, Title } from '../Bar/styled';
import { BoxTop } from '../Box/styled';

export const Bar = styled(BarContainer)`
  margin: 0;
`;

export const BarTitle = styled(Title)`
  font-size: 5rem;
  cursor: pointer;
`;

export const DetailsContainer = styled.div`
  margin: ${px2vw(100)};

  @media (min-width: 1024px) {
    margin: ${px2vw(10)} ${px2vw(300)};
  }

  @media (min-width: 1366px) {
    margin: ${px2vw(10)} ${px2vw(200)};
  }
`;

export const Top = styled(BoxTop)`
  padding: 0;

  @media (min-width: 1024px) {
    padding: 0;
  }
  @media (min-width: 1366px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  margin-top: ${px2vw(100)};

  @media (min-width: 1024px) {
    margin-top: ${px2vw(50)};
  }
`;

export const Description = styled.div`
  font-family: Segoe UI;
  font-size: 3rem;
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1366px) {
    font-size: 0.8rem;
  }
`;
