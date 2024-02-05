import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Project1 from './Project1';
import { Provider } from 'react-redux';
import Calculator from "./Component/Calculator"
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
  <Calculator/>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
