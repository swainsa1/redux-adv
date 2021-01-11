import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});
const logger = store => {
  return next => {
      return action => {
        console.log('[MiddleWare] -- Dispatching',action);
        const result = next(action);
        console.log('[MiddleWare] Next STate update',store.getState());
        return result;
      }
  }
};
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
