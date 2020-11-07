import { createGlobalStyle, css } from 'styled-components';
import { px2vw } from './utils';

export const defaultContainer = css`
  margin: ${px2vw(32)};

  @media (min-width: 1024px) {
    margin: ${px2vw(10)} ${px2vw(50)};
  }

  @media (min-width: 1366px) {
    margin-top: ${px2vw(10)} ${px2vw(200)};
  }
`;


export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;
