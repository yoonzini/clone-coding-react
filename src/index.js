import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />,  document.getElementById('root'));
// 리액트는 최종으로 단 한개의 컴포넌트를 그려야 한다.
// 따라서 2개를 넣으면 에러가 발생한다.
// app안에 potato를 넣어서 해결한다.