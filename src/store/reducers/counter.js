import * as actionTypes from '../actions';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
        const newState = Object.assign({}, state);
        newState.counter = state.counter + 1
      return newState;      
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1 // this is not merge with the state like in normal setState but this returns a new state
      }
    case actionTypes.ADDITION:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACTION:
      return {
        ...state,
        counter: state.counter - action.value
      }
    default:
      return state;
  }
}
export default reducer;