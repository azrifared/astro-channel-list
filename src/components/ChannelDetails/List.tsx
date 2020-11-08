import React from 'react';
import styled, { css } from 'styled-components';
import { ScheduleDetail } from '../../api';
import { px2vw } from '../../utils';
import moment from 'moment';

type ListProps = {
  item:  {
    data: ScheduleDetail[];
    day: string;
  };
};

const Date = ({ date }: { date: string }) => {
  const formattedDate = moment(date).format('hh:mm A');
  
  return <StyledDate>{formattedDate}</StyledDate>
}

const List = ({ item }: ListProps) => {
  const { data } = item;
  
  return (
    <ListContainer>
      {data.map(({ datetime, title }) => (
        <Container key={Math.random()}>
          <Date date={datetime}/>
          <Title>{title}</Title>
        </Container>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin-top: ${px2vw(50)};

  @media (min-width: 1024px) {
    margin-top: ${px2vw(25)};
  }
`;

const Container = styled.div`
  display: flex;
  height: ${px2vw(100)};
  
  @media (min-width: 1024px) {
    height: ${px2vw(40)};
  }

  @media (min-width: 1366px) {
    height: ${px2vw(40)};
  }
`;

const styledFont = css`
  font-family: Segoe UI;
  font-size: 2.6rem;
  color: #707070;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  @media (min-width: 1366px) {
    font-size: 0.8rem;
  }
`;

const Title = styled.div`
  ${styledFont}
`;

const StyledDate = styled.div`
  ${styledFont}
  margin-right: ${px2vw(25)};
`;


export default List;