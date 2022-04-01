import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends Component {
  state = { number: 0 }
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        {/* <AddNumberRoot onClick={(size)=> {
          this.setState({ number: this.state.number + size});
        }}></AddNumberRoot> */}
        <AddNumberRoot onClick={function(size) {
          this.setState({ number: this.state.number + size});
          // console.log(this.state); //setState는 비동기로 동작하기에 호출 후 바로 확인했을 때 변경된 값이 나온다고 보장할 수 없음
          // bind()로 바인딩된 this가 있는 새로운 함수 생성, 다른 컴포넌트로 pass할 메서드를 binding - 메서드의 재사용과 공유, 중복을 방지
        }.bind(this)}></AddNumberRoot> 
        <DisplayNumberRoot number={ this.state.number }></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
