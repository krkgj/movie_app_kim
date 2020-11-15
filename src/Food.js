import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://jjintlmarket.com/wp-content/uploads/2018/08/traditional-kimchi-1920x800.jpg",
    width: "700",
    height: "500",
    rating: 3.3,
  },
  {
    id: 2,
    name: "Donkatsu",
    image:
      "https://www.kawalingpinoy.com/wp-content/uploads/2015/10/tonkatsu1a1.jpg",
    width: "700",
    height: "500",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Kimbap",
    image: "http://www.maangchi.com/wp-content/uploads/2013/09/kimbap.jpg",
    width: "700",
    height: "500",
    rating: 4.6,
  },
];

function renderFood(dish) {
  console.log(dish);
  return (
    <Food
      name={dish.name}
      picture={dish.image}
      garo={dish.width}
      sero={dish.height}
    />
  );
}
// const renderFood = dish => console.log(dish)
// 화살표 함수는 const 함수이름 = 인자 => 함수내용

function Food({ name, picture, garo, sero, rating }) {
  // argument에 저장
  return (
    <div>
      <h3>I Love {name}</h3>
      <h4>{rating}/5</h4>
      <img src={picture} width={garo} height={sero} alt={name} />
    </div>
  );
}
// component Food 정의, component는 시작이 대문자
// react masic : props 안에 <>에서 정의한 prop들이 저장되어있다.
// props.favorite == { favorite }

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
// prop의 타입을 검사하는 것. 타입이 맞지 않으면 console에서 오류 출력, 비어있어도 오류는 뜨지 않음.
// 컴포넌트.propTypes 으로만 동작한다.

function App() {
  return (
    <div>
      <h1>Hellow!</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          garo={dish.width}
          sero={dish.height}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}
// Food 컴포넌트에 kimchi라는 value로 prop name을 주었고, prop들을 <> 안에서 만들어낼 수 있다.

export default App;
