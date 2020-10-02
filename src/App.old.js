import { PropTypes } from 'prop-types';
import React from 'react';

function Food({ name, picture, rating }) {
  //리액트에서 객체는 중괄호 양쪽을 공백으로 채우고
  //자바스크립트는 중괄호 양쪽을 공백으로 채우지 않는 방법으로 구분한다.
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tzydFiWcxH-O7yWJzKD9tgHaEK%26pid%3DApi&f=1',
    rating: 4,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi&f=1',
    rating: 3.5,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EbPzuedGhvUxXy7ufrwwAAHaE8%26pid%3DApi&f=1',
    rating: 5,
  },
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

//const renderFood = (dish) => <Food name={dish.name} picture={dish.image} />;

function App() {
  // App() 함수의 반환값이 많아지면 소괄호로 감싼다.

  //**key props는 리액트 내부에서 사용되는 특수한 props라서 Food컴포넌트에 직접 전달되지 않는다.
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
  // fav props 값 전달 'props에 있는 데이터는 문자열인 경우 제외하면 모두 {} 감싸야 한다.
  // props에 있는 데이터를 객체로 변환하여 Food 컴포넌트(함수)에 전달한다.
  // 전달받은 props를 props라는 인자로 받아 출력하였다.
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
