import React, { PureComponent } from 'react'
import {Link, withRouter} from 'react-router-dom';

export class SubDetails extends PureComponent {
  componentDidMount() {
    const { history, match } = this.props;
    if (match.params.userId !== '1') {
      history.replace('/login');
    }
  }
  onBtnClick = () => {
    const { history } = this.props;

    history.push('/login');
  }

  render() {
    return (
      <div>
        Details 
        <Link to='/hello/1'>Home 1 link</Link>
        <button type="button" onClick={this.onBtnClick}>
          Login
        </button>
      </div>
    )
  }
}

const SubDetailsWithRouter = withRouter(SubDetails);

export class Details extends PureComponent {
  render() {
    return <SubDetailsWithRouter />
  }
}
