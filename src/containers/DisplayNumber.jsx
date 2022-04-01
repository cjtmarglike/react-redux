import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux'
function mapReduxStateToReactProps(state) {
    return { number: state.number }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber); //'connect로 반환된 함수'를 호출해 반환된 값을 export, 아래 wrapping된 컴포넌트와 같다.

// import React, { Component } from 'react';
// import store from '../store';
// export default class extends Component {
//   state = { number : store.getState().number }
//   constructor(props) {
//     super(props);
//     store.subscribe(function() {
//       this.setState({number: store.getState().number});
//     }.bind(this));
//   }
//   render() {
//     return (
//       <div>
//         <DisplayNumber number={ this.state.number }></DisplayNumber>
//       </div>
//     )
//   }
// }