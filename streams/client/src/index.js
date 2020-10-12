import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'


import App from './components/App'
import reducers from './reducers'



 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//  Chrome Redux devtools installed. To utitlize type in the following path after the url. ?debug_session=someString //
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(

<Provider store={store}>
    <App />
</Provider>
,
 document.querySelector('#root'))

