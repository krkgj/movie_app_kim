import React from 'react';

function Food({favorite}) {
  console.log(favorite);
  return <h3>I LOVE {favorite}</h3>;
}
// react masic : props 안에 <>에서 정의한 prop들이 저장되어있다.
// props.favorite == { favorite }

function App() {
  return (
    <div>
    <h1>Hellow!</h1>
    <Food favorite="kimchi"/>
    <Food favorite="ramen"/>
    <Food favorite="samgyeopsal"/>
    <Food favorite="chukumi"/>
    </div>
  );
}
// Food 컴포넌트에 kimchi라는 value로 prop name을 주었고, prop들을 <> 안에서 만들어낼 수 있다.

export default App;