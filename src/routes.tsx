import React from 'react';
import { Subject } from 'rxjs';
import { useObservableState } from 'observable-hooks';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import App from './App'
import ChannelDetails from './components/ChannelDetails';

export const pathActionSubject = new Subject<string>();

const RouteApp = () => {
  const path = useObservableState(pathActionSubject);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><App /></Route>
        <Route path={path}><ChannelDetails /></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RouteApp;
