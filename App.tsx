import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, Provider as ReduxProvider } from "react-redux";
import React from 'react';
import promiseMiddleware from 'redux-promise'; 
import ReduxThunk from 'redux-thunk';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Reducer from './_reducers'
import Navigation from './navigation';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

const store = createStoreWithMiddleware(Reducer,composeEnhancers())

export default function App() {
  
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
    </Provider>
  );
}
