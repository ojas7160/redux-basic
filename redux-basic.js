// node syntax because it runs with node
const redux = require('redux');
const createStore = redux.createStore; // its a function
// it allows us to create a store

const initialState = { // it doesn't have to be object
  counter: 0
}

// Reducer
// it's strongly connected with the store
const rootReducer = (state = initialState, action) => { // state is the old state which will update with the new one
  if(type === 'INC_COUNTER') {
    //state.counter++; // this is wrong because state is immutable
    return {
      ...state,
      counter: state.counter + 1
    };
  }

  if(type === 'ADD_COUNTER') {
    //state.counter++; // this is wrong because state is immutable
    return {
      ...state,
      counter: state.counter + action.value 
    };
  }
  return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState()); //{counter: 0}
// store must be initialized from the reducer to be used and if there's more than one reducer it would be combine to form reducer

// Dispatching Action (its just like emitting something and then further subscribe in subscription)
store.dispatch({type: 'INC_COUNTER'}) // this object needs to have the type property to check which type of action had been dispatched with value in upper case as of standard convention
store.dispatch({type: 'ADD_COUNTER', value: 10}) // any key value can be dispatch with the type
console.log(store.getState()); // {counter: 11}

// Subscription -> it runs synchronously like whenever the store dispatches something then only subscription runs
store.subscribe(() => {
  console.log('subscription', store.getState())
})