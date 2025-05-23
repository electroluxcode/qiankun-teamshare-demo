import React,{lazy, Suspense} from 'react';
export interface IRouteBase {
    // 路由路径
    path: string;
    // 路由组件
    component?: any;
    // 302 跳转
    redirect?: string;
    // 路由信息
    meta: IRouteMeta;
    // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
    auth?: boolean;
}
export interface IRouteMeta {
    title: string;
    icon?: string;
}

export interface IRoute extends IRouteBase {
    children?: IRoute[];
}


import Preview from "@/views/Preview"

import LoadElement from "@/views/Load"
const BaseElement = () => {
  return (
    <div>
      test root
    </div>
  )
}
const routes = [
  {
    path:"/",
    element:<BaseElement></BaseElement>
  },
  {
    // 重要 8 路由参数获取
    path:"/react-app/:id",
    element:<Preview></Preview>
  },
  {
    // 重要 9 loadMicroApp 动态加载 app
    path:"/docs/:id",
    element:<LoadElement></LoadElement>
  },
  // {
  //   path:"/",
  //   element:<Layout></Layout>,
  //   children:[
  //     {
  //       path:"/react-app",
  //       element:<Preview></Preview>
  //     }
  //   ]
  // },
];
  
export default routes;
