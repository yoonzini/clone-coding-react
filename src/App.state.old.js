import { PropTypes } from 'prop-types';
import React from 'react';

// App클래스는  React.component 클래스를 상속받는다.
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {
    count: 0,
  };

  //state를 직접 변경하는 코드를 허용하지 않는다.
  //리액트는 state가 변경되면 render()함수를 다시 실행해 변경된 state를 화면에 출력한다.
  //그런데 state를 직접변경하는 경우에는 render()를 다시 실행하지 않는다.
  //react는 setState() 함수의 호출을 감시한다.
  //setState()의 인자로 state를 전달하면 이전 state와 새로운 state를 비교하여
  //바뀐 데이터만 업데이트 한다.
  add = () => {
    console.log('add');
    //current안에는 현재state가 넘어온다.
    //그 state의 count에 1을 더한다.
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    console.log('minus');
    this.setState((current) => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log('component rendered');
    //constructor() -> render() -> componentDidMount() 순으로 실행
  }

  componentDidUpdate() {
    console.log('I just updated');
    //setState() -> render() -> componentDidUpdate() 순으로 실행
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel world');
    //보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용한다.
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
