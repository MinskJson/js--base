import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from './Home';
import Home1 from './Home1';

export function HomeRouter({match}) {
  return (
    <Switch>
      <Route path={`${match.path}/1`} component={Home1} />
      <Route path={`${match.path}/2`} component={Home} />
      <Redirect to={`${match.path}/2`} />
    </Switch>
  )
}
