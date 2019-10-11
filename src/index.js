import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import reducer from './store/reducer';
import App from './App';
import { Provider } from 'react-redux'; // provider is a helper component which helps us to inject store in our react component
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer); // reducer will be there in their natove folder where store would be used

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
