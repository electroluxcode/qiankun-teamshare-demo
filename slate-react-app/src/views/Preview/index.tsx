import { message } from "antd";
// import { message as ms } from "antd4";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect } from 'react';
import { registerMicroApps, start } from 'qiankun';

// 第一个页面组件
function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // setTimeout(() => {

    // }, 1000);
    message.info({
      duration: 3,
      content: "55555555555555555",
    });
    navigate("/second");
  };

  return (
    <div>
      <h1>首页</h1>
      <button onClick={handleNavigate}>前往第二页</button>
    </div>
  );
}


// 微应用容器组件
function MicroAppContainer() {
  return <div id="microApp-container"></div>;
}

// 主应用组件
export default function App() {
  useEffect(() => {
    // 注册微应用
    registerMicroApps([
      {
        name: 'microApp', // 微应用的名称
        entry: '//localhost:端口号', // 微应用的入口，根据实际情况修改
        container: '#microApp-container', // 微应用的容器节点
        activeRule: '/micro-app', // 激活规则，访问该路径时会加载微应用
      },
    ]);

    // 启动 qiankun
    start();
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="/">首页</Link> | <Link to="/second">第二页</Link> | <Link to="/micro-app">微应用</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/micro-app/*" element={<MicroAppContainer />} />
      </Routes>
    </div>
  );
}
