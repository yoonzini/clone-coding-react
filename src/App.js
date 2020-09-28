import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  // App() 함수의 반환값이 많아지면 소괄호로 감싼다.
  return (
    <div>
      <h1>hello</h1>
      <Food fav="ramen"/> 
      <Food fav="soup"/> 
      <Food fav="pizza"/> 
    </div>
  ); 
  // fav props 값 전달 'props에 있는 데이터는 문자열인 경우 제외하면 모두 {} 감싸야 한다.
  // props에 있는 데이터를 객체로 변환하여 Food 컴포넌트(함수)에 전달한다.
  // 전달받은 props를 props라는 인자로 받아 출력하였다.
}

export default App;
