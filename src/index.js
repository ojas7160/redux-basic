import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import App from './App';
import { Provider } from 'react-redux'; // provider is a helper component which helps us to inject store in our react component
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({ // it combines the multiple reducers
  counter: counterReducer,
  result: resultReducer
})

const store = createStore(rootReducer); // reducer will be there in their natove folder where store would be used

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
