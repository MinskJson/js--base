import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import App from '../App';
import {store} from '../store';
import * as actions from '../store/math/actions';

describe('store -> math reducer', () => {
  beforeEach(() => {
    store.dispatch(actions.mathSetNumber(0));
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render component', () => {
    const wrapper = mount(<App />);
    const onClick = () =>
    expect(wrapper.contains(<div className="App" onClick={onClick}>{0}</div>)).toEqual(true);
  });

  it('render store binded', () => {
    store.dispatch(actions.mathPlus(5));
    const wrapper = mount(<App />);
    const onClick = () =>
    expect(wrapper.contains(<div className="App" onClick={onClick}>{5}</div>)).toEqual(true);
  });

  it('render store change', () => {
    const wrapper = mount(<App />);
    wrapper.find('.App').simulate('click');
    const onClick = () =>
    wrapper.find('.App').simulate('click');
    wrapper.find('.App').simulate('click');
    expect(wrapper.contains(<div className="App" onClick={onClick}>{15}</div>)).toEqual(true);
  });
});