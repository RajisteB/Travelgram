import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// connect takes two functions:
// 1. will take the state of posts and comments - map state
// 2. action creators - dispatch
// App will surface those arguments via props

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// Instead of having to pass down props thru every level,
// connect will inject the data from our store into whatever level
// component you need 

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;