import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Loadable from 'react-loadable';

import './App.css';
import { Login } from './routers/Login';
import { Details } from './routers/Details';
import { ErrorComponent } from './routers/Error';

// import { HomeRouter } from './routers/Home/HomeRouter';
// const Comp = ({children}) => children;

const HomeRouter = Loadable({
  loader: () => import('./routers/Home/HomeRouter').then(e => new Promise(res => setTimeout(() => {
    res(e);
  }, 1000))).then(e => e.HomeRouter),
  loading: () => <div>Loading...</div>,
});

class App extends Component {
  render() {
    return <HashRouter>
      <div>
        Hello
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/details/:userId" component={Details}/>
          <Route path="/hello" component={HomeRouter}/>
          <Route path="/*" component={ErrorComponent}/>
          <Redirect to='/hello' />
        </Switch>
      </div>
    </HashRouter>
  }
}

export default App;
