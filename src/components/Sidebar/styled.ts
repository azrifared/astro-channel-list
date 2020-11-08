import styled from 'styled-components';
import { px2vw } from '../../utils';
import CloseIcon from '../CloseIcon';

type SidbarProps = {
  isOpen?: boolean
};

type ButtonProps = {
  isReset?: boolean;
};

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  right: 5px;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  cursor: pointer;
`;

export const StyledSidebar = styled.div<SidbarProps>`
  width: 100%
  background: white;
  height: 100%
  position: fixed;
  right: 0;
  top: 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #BEBEBE;
    border-radius:16px;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  @media (min-width: 1024px) {
    width: ${px2vw(300)}
  }
  @media (min-width: 1366px) {
    width: ${px2vw(250)}
  }
`;

export const Content = styled.div`
  margin: 10px;
  
`;

export const Container = styled.div`
  padding-top: ${px2vw(100)};
  padding-left: ${px2vw(40)};

  @media (min-width: 1024px) {
    padding-top: ${px2vw(40)};
    padding-left: ${px2vw(10)};
  }
`;

export const Header = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

export const ListContainer = styled.div`
  padding-bottom: ${px2vw(100)};

  @media (min-width: 1024px) {
    padding-bottom: ${px2vw(25)};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  margin-top: ${px2vw(50)};
  @media (min-width: 1024px) {
    margin-top: ${px2vw(10)};
  }
`;

type TagBoxProps = {
  isActive?: boolean;
};

export const TagBox = styled.div<TagBoxProps>`
  height: ${px2vw(150)};
  border-radius: 5px;
  margin-right: ${px2vw(30)};
  margin-top: ${px2vw(30)}
  font-size: 2.5rem;
  padding: 5px 10px;
  color: ${({ isActive }) => isActive ? 'white' : '#707070'};
  background:	${({ isActive }) => isActive ? '#008B8B' : '#F0F0F0'};

  @media (min-width: 1024px) {
    height: ${px2vw(35)};
    margin-right: ${px2vw(10)};
    margin-top: ${px2vw(10)};
    font-size: 1rem;
  }

  @media (min-width: 1366px) {
    height: ${px2vw(25)};
    font-size: 0.6rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.div<ButtonProps>`
  margin-right: ${px2vw(30)};
  height: ${px2vw(150)};
  font-size: 2.5rem;
  padding: 5px 10px;
  background:	${({ isReset }) => isReset ? 'white' : 'rgb(230, 0, 125)'};
  color: 	${({ isReset }) => isReset ? 'black' : 'white'}
  width: 100%;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid ${({ isReset }) => isReset ? 'black' : 'rgb(230, 0, 125)'};
  @media (min-width: 1024px) {
    margin-right: ${px2vw(10)};
    height: ${px2vw(35)};
    font-size: 1rem;
  }
  @media (min-width: 1366px) {
    height: ${px2vw(25)};
    font-size: 0.6rem;
  }
`;

