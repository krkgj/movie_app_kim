// import React from 'react';
// import PropTypes from 'prop-types';

// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     console.log("im constructor");
//   };
//   state = {
//     count: 0
//   };
//   add = () => {
//     this.setState(current => ({ count: current.count + 1 }));
//   };
//   minus = () => {
//     this.setState(current => ({ count: current.count - 1 }));
//   };
//   componentDidMount(){
//     console.log("componentDidMount");
//   }
//   componentDidUpdate(){
//     console.log("componentDidUpdate");
//   }
//   render(){
//     console.log("im render");
//     return (
//     <div>
//       <h1>The number is: {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button> 
//       {/* App class 안의 메소드 사용할 때 this.메소드명 */}
//     </div>
//     )
//   };
// }
// // state에 바꾸고 싶은 데이터를 넣는다. state는 this.state로 사용.
// // state는 App class 내부 메소드 안에서 직접 변경이 불가능하다.
// // state는 render function을 통해서만 변경?
// // Life cycle method : constructor -> componentWillMount -> render -> componentDidMount
// // setState시 : render -> componentDidUpdate
// // componentWillUnmount : component가 사라진 후 실행되는 메소드


// export default App;