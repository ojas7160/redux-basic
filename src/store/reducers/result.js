import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result}) // concat is just like push but concat returns a new array and push mutate the existing array
      }
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.resultId) // concat is just like push but concat returns a new array and push mutate the existing array
      }
    default:
      return state;
  }
}
export default reducer;