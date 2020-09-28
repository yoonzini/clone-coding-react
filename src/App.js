import React from 'react';

function Food({ name, picture }) {
  //리액트에서 객체는 중괄호 양쪽을 공백으로 채우고
  //자바스크립트는 중괄호 양쪽을 공백으로 채우지 않는 방법으로 구분한다.
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'https://www.google.com/imgres?imgurl=http%3A%2F%2Fm.jnmall.kr%2Fweb%2Fproduct%2Fbig%2F201910%2F4b83072de272a51edffa420ab3b2fa98.jpg&imgrefurl=http%3A%2F%2Fjnmall.kr%2Fproduct%2F%25EC%2582%25B0%25EB%2593%25A4%25EB%259E%2598-%25EA%25B9%2580%25EC%259E%25A5-%25EB%25B0%25B0%25EC%25B6%2594%25EA%25B9%2580%25EC%25B9%2598-10kg%2F4986%2F&tbnid=NGOw-H2SsxlLEM&vet=12ahUKEwiEvJnJ-YvsAhUZJqYKHUu_A7QQMygAegQIARB8..i&docid=CkvRjdoj-h76-M&w=500&h=500&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwiEvJnJ-YvsAhUZJqYKHUu_A7QQMygAegQIARB8',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi&f=1',
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'https://www.google.com/imgres?imgurl=http%3A%2F%2Ffood.chosun.com%2Fsite%2Fdata%2Fimg_dir%2F2012%2F05%2F24%2F2012052401688_0.jpg&imgrefurl=http%3A%2F%2Ffood.chosun.com%2Fm%2Farticle.html%3Fcontid%3D2012052401895&tbnid=IgLkLCQCVwu0JM&vet=12ahUKEwio7eTZ-YvsAhWEEKYKHTDjA04QMygEegUIARDfAQ..i&docid=OFXVWVq0BEiy8M&w=450&h=363&q=%EB%B9%84%EB%B9%94%EB%B0%A5&hl=ko&ved=2ahUKEwio7eTZ-YvsAhWEEKYKHTDjA04QMygEegUIARDfAQ',
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
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
  // fav props 값 전달 'props에 있는 데이터는 문자열인 경우 제외하면 모두 {} 감싸야 한다.
  // props에 있는 데이터를 객체로 변환하여 Food 컴포넌트(함수)에 전달한다.
  // 전달받은 props를 props라는 인자로 받아 출력하였다.
}

export default App;
