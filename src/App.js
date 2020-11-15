import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./component/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}
// Route 컴포넌트에 있는 path로 가면 About.js 컴포넌트 실행
// exact={true} path에 적혀있는 path가 url로 적혀있을 때만 component를 실행.
// Navigation에 Link를 사용했다면 Route 안에 있어야 한다.

export default App;
