import React from 'react';
import { useObservableState } from 'observable-hooks';
import { channelDetailsObservable } from './observables';
import Spinner from '../Spinner';
import Details from './Details';
import { Bar, BarTitle, DetailsContainer } from './styled';
import { Global } from '../../styled';

const ChannelDetails = () => {
  const dataState = useObservableState(channelDetailsObservable);
  const { loading, data } = dataState;
  const renderContent = () => {
    if (loading) return <Spinner />

    return (
      <Details item={data?.response} />
    );
  };


  return (
    <>
      <Global />
      <DetailsContainer>
        <Bar>
          <BarTitle
            onClick={() => { window.location.href = "/" }}
          >
            Channels
          </BarTitle>
        </Bar>
        {renderContent()}
      </DetailsContainer>
    </>
  );
};

export default ChannelDetails;