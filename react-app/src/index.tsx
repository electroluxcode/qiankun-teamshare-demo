
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"

import App from './App'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// useLayoutEffect
// let win
let islocal = window.location.href.includes("local") || window.location.href.includes("127.0.0.1")
let config 
if (!islocal) {
  config = {
    basename:'/qiankun-teamshare-demo/'
  }
}

root.render(
  <BrowserRouter {...config}>
   <App />
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// reportWebVitals(console.log)
