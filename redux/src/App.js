import React, { Component } from 'react';
import './App.css';
import {store} from './store';
import * as actions from './store/math/actions';
import { Provider, connect } from 'react-redux';

class App extends Component {
  onClick = () => {
    const {onPlus} = this.props;
    onPlus && onPlus(5);
  }

  render() {
    const {math} = this.props;
    
    return (
        <div className="App" onClick={this.onClick}>
          {math && math.number}
        </div>
    );
  }
}

const AppWithState = connect(
  (state)=> ({
    math: state.math,
  }), 
  (dispatch) => ({
    onPlus: (number) => dispatch(actions.mathPlus(number)),
  }))(App);

class Wrapper extends Component {
  render() {
    return <Provider store={store}>
      <AppWithState />
    </Provider>
  }
}

export default Wrapper;
