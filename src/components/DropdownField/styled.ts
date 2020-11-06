import styled from "styled-components";
import { px2vw } from '../../utils';

export const DropDownContainer = styled("div")`
  cursor: pointer;
  margin-top: ${px2vw(20)};
  @media (min-width: 1024px) {
    margin-left: auto;
    margin-top: 0;
  }
`;

export const DropDownHeader = styled("div")`
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

export const DropDownListContainer = styled("div")`
  width: 100%;
  @media (min-width: 1024px) {
    position: absolute;
    width: ${px2vw(200)};
    height: ${px2vw(30)}
  }
`;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  border: 2px solid #BEBEBE;
  box-sizing: border-box;
  font-size: 2.4rem;
  font-family: Segoe UI;
  background: white;
  &:first-child {
    padding-top: 0.8em;
  }
  @media (min-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const ListItemContainer = styled.div`
  padding-left: 1em;
  padding-bottom: 0.8em;
  cursor: pointer;
  &&:hover {
    background: #BEBEBE;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
`;
