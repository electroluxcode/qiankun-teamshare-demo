
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"

import App from './App'
import { registerMicroApps, start } from 'qiankun';
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


// 重要 7 数据动态传参
import { initGlobalState,MicroAppStateActions } from 'qiankun';
const state = {
  token: '123456'
}
const actions: MicroAppStateActions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  console.log('主应用接收到数据 state-prev', state, prev);
})
setTimeout(() => {
  // 模拟数据更新
  actions.setGlobalState({
    token: '654321'
  })
}, 2000);
registerMicroApps([{
  name: 'react-app',
  entry: '//localhost:3021',
  container: '#reactapp',
  // activeRule: '/react-app',
  // 重要 8 路由参数获取
  activeRule:"/docs/:id",
  // 重要 6.数据传参
  props:{
    nickname:"react-app 数据测试"
  }
}])


start();

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
