import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux'
function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick: function(_size) {
            dispatch({ type: 'INCREMENT', size: _size })
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);


// import { Component } from 'react';
// import store from '../store';
// export default class extends Component {

//     render() {
//         return <AddNumber onClick={function(_size) {
//             // redux와 관련된 작업을
//             // AddNumber를 wrapping하는 container component가 처리
//             store.dispatch({type: 'INCREMENT', size: _size})
//         }.bind(this)}></AddNumber>
//     }
// }