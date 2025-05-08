
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"

import App from './App'
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// useLayoutEffect
// let win
let islocal = window.location.href.includes("local") || window.location.href.includes("127.0.0.1")

let config 
if (!islocal) {
  config = {
    basename:'/qiankun-teamshare-demo/'
  }
}

// 重要 3.子应用注册路由
if(window.__POWERED_BY_QIANKUN__){
  config = {
    // 这是测试动态加载的路由， 其他的测试渠道换成 react-app就好了
    basename:"/docs"
  }
}

// 重要 4.子应用独立运行
if(!window.__POWERED_BY_QIANKUN__){
  ReactDOM.render(    <BrowserRouter {...config}>
    <App />
    </BrowserRouter>, document.getElementById('root')
    
);
}else{
  // 重要 5 静态资源
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}


export async function bootstrap() {
  console.log('react app bootstraped');
}


export async function mount(props) {
  console.log('props from main framework', props);
  // 重要 7 子应用通信
  props.onGlobalStateChange((state, prev) => {
    console.log('子应用通信',state, prev);
  })
  ReactDOM.render(    <BrowserRouter {...config}>
       <App />
       </BrowserRouter>,
       props.container ? props.container.querySelector('#root') : document.getElementById('root')
       
  );

  // root.render(
  //   <BrowserRouter {...config}>
  //    <App />
  //    </BrowserRouter>
  // );
}


/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  // ReactDOM.unmountComponentAtNode(
  //   props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  // );
  console.log('unmount');
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// reportWebVitals(console.log)
