import React from 'react';

function Movie() {
  return <h1>I like potato</h1>;
}

function App() {
  // App() 함수의 반환값이 많아지면 소괄호로 감싼다.
  return (
    <div>
      <h1>hello</h1>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
}

export default App;
