import React, { useEffect } from 'react';
import { useObservableState } from 'observable-hooks';
import { BodyContainer, HeaderContainer, Message } from './styled';
import { channelObservable, channelActionSubject } from './observables';
import Spinner from '../Spinner';
import Box from '../Box';
import Bar from '../Bar';

const ChannelList = () => {
  const channelListState = useObservableState(channelObservable);

  useEffect(() => {
    channelActionSubject.next();
  }, []);

  const { loading, data } = channelListState;

  const renderContent = () => {

    if (loading) return <Spinner />;
    console.log(data?.filteredList)
    if (data.response.length === 0) return <Message>No records found.</Message>
  
    return (
      <>
        {data?.response?.map((item) => <Box key={Math.random()} item={item}/>)}
      </>
    );
  }

  return (
    <>
      <HeaderContainer>
        <Bar filterList={data?.filteredList}/>
      </HeaderContainer>
      <BodyContainer>
        {renderContent()}
      </BodyContainer>
    </>
  );
};

export default ChannelList
