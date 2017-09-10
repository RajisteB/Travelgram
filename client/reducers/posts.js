// a reducer takes in two things:
// 1. the action (what happened)
// 2. a copy/snapshot of current state

// a reducer does the actual editing of state
// every time an action is dispatched, every reducer will run
// whether something actually changes is up to you

//In comes both the action (add, delete, etc) and the store/state into the reducer
//Reducer does [something] and returns a new updated store and then React updates the UI

function posts(state = [], action) {
    console.log('the post will change');
    console.log(state, action);
    return state;
}

export default posts;