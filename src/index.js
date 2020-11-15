import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById("potato"));
// App.js를 가져와서, index.html의 id 중 root에 해당하는 공간을 찾아 render 해준다.
// <App/> 이것을 컴포넌트라고 한다. React는 컴포넌트로 동작
// 컴포넌트는 HTML을 반환하는 함수이다. -> JSX의 개념은 React에서 유일함.
// React application은 한 번에 하나의 component만 rendering 할 수 있다. 기본적으로 App.js에 컴포넌트를 넣는다.
