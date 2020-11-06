import styled, { css } from 'styled-components';
import { px2vw } from '../../utils';

const defaultContainer = css`
  margin: ${px2vw(32)};

  @media (min-width: 1024px) {
    margin: ${px2vw(10)} ${px2vw(50)};
  }

  @media (min-width: 1366px) {
    margin-top: ${px2vw(10)} ${px2vw(200)};
  }
`;


export const HeaderContainer = styled.div`
  ${defaultContainer}
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${defaultContainer}
`;

export const BoxContainer = styled.div`
  box-shadow:  0 0 10px #D8D8D8;
  width: ${px2vw(320, 320)};
  height: ${px2vw(200, 500)};
  margin: ${px2vw(20)};
  background-color: white;

  @media (min-width: 1024px) {
    width: ${px2vw(410)};
    height: ${px2vw(200)};
    margin: ${px2vw(10)};
  }

  @media (min-width: 1366px) {
    width: ${px2vw(300)};
    height: ${px2vw(150)};
    margin: ${px2vw(10)};
  }
`;

export const Message = styled.div`
  text-align: center;
  font-size: 2em;
  font-family: Segoe UI;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

