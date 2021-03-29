import React,{useState,useEffect} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {reducer} from './reducers/reducer';
import App from './Home'
const store = createStore(reducer)

export default ()=>{
  return(
    <Provider store={store}>
       <App/>
    </Provider>
  )
}

