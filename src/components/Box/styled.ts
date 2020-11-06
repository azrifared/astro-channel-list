import styled, { css } from 'styled-components';
import { px2vw } from '../../utils';

type RowProps = {
  isTop?: boolean;
};

export const BoxContainer = styled.div`
  box-shadow:  0 0 10px #D8D8D8;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 500)};
  margin: ${px2vw(20)};
  background-color: white;

  @media (min-width: 1024px) {
    width: ${px2vw(410)};
    min-height: ${px2vw(200)};
    margin: ${px2vw(10)};
  }

  @media (min-width: 1366px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(150)};
    margin: ${px2vw(10)};
  }
`;


export const BoxTop = styled.div`
  height: ${px2vw(250)};
  padding: ${px2vw(40)};
  border-bottom: 1px solid #f7f7f7;
  display: flex;
  align-item: center;

  @media (min-width: 1024px) {
    height: ${px2vw(80)};
    padding: ${px2vw(15)};
  }
  @media (min-width: 1366px) {
    height: ${px2vw(50)};
    padding: ${px2vw(15)} ${px2vw(15)} 0 ${px2vw(15)};
  }
`;

export const Img = styled.img`
  height: ${px2vw(150)};
  width: ${px2vw(300)};
  
  @media (min-width: 1024px) {
    height: ${px2vw(50)};
    width: ${px2vw(100)};
  }

  @media (min-width: 1366px) {
    height: ${px2vw(25)};
    width: ${px2vw(50)};
  }
`;

export const BoxBottom = styled.div`
  padding: ${px2vw(40)};
  @media (min-width: 1024px) {
    padding: ${px2vw(15)};
  }
`;

export const fontStyle = css`
  font-family: Segoe UI;
`;

export const HeaderContainer = styled.div`
  margin-left: ${px2vw(30)};
  overflow: hidden;
  @media (min-width: 1024px) {
    margin-left: ${px2vw(10)};
  }
`;

export const ChannelNumber = styled.p`
  ${fontStyle}
  font-size: 15px;
  color: #707070;
`;

export const ChannelTittle = styled.p`
  ${fontStyle}
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis; 
`;

export const Row = styled.div`
  font-size: 15px;
  display: flex;
  padding-top: ${px2vw(10)};
  padding-bottom: ${px2vw(10)};
  @media (min-width: 1024px) {
    padding-top: ${px2vw(2)};
    padding-bottom: ${px2vw(2)};
  }

  @media (min-width: 1366px) {
    padding-top: ${px2vw(2)};
    padding-bottom: ${px2vw(2)};
  }
`;

export const FirstCol = styled.div<RowProps>`
  ${fontStyle}
  width: ${px2vw(300)};
  color: ${({ isTop }) => isTop ? 'none' : '#707070'}
  @media (min-width: 1024px) {
    width: ${px2vw(100)};
  }

  @media (min-width: 1366px) {
    width: ${px2vw(50)};
  }
`;

export const SecondCol = styled.div<RowProps>`
  ${fontStyle}
  margin-left: ${px2vw(30)};
  color: ${({ isTop }) => isTop ? 'none' : '#707070'}
  overflow: hidden;
  @media (min-width: 1024px) {
    margin-left: ${px2vw(10)};
  }
`;