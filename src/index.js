import React from 'react';
// Import React to the scope

import ReactDOM from 'react-dom';
// Import ReactDOM 

import './scss/index.css'; // Import CSS 
// import App from './App'; // Import APP ( Add const App = () => "Hola Mundo")
import reportWebVitals from './reportWebVitals';

import App from "./App"



ReactDOM.render(App(), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
