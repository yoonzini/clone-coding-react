import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    //detail컴포넌트가 마운트 되면
    const { location, history } = this.props; //구조분해할당으로 얻어서

    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null; //null을 반환하고 didMount기능이 동작한다.
    }
  }
}

export default Detail;
