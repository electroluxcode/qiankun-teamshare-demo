# teamshare-qiankun-demo

## 0.项目启动

全局搜索 DEFAULT_PORT 可以替换版本号

### 0.1 主应用

- step1: 


### 0.2 子应用

- step1: cd react-app




# 1.前置工作

- 微应用 devserver 设置 `Access-Control-Allow-Origin` 为 "*"
- 导出格式 `webpack.output.xx`
```
library:"react-app-[name]",
libraryTarget:"umd",
globalObject:"window",
```

# 2. 子应用注册路由

生命周期方法

- bootstrap
- mount:挂载,在 `registerMicroApps` 时生效
- unmount:应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
- update:仅使用 `loadMicroApp` 方式加载微应用时生效



## 2.1  react

src/index.ts

```tsx
import {BrowserRouter} from "react-router-dom"
import { registerMicroApps, start } from 'qiankun';

// 子应用注册路由
if(window.__POWERED_BY_QIANKUN__){
  config = {
    // 需要设置路由的basename
    basename:"/react-app"
  }
}


registerMicroApps([{
  name: 'react-app',
  entry: '//localhost:3011',
  container: '#reactapp',
  // activeRule: '/react-app',
  // 重要 8 路由参数获取
  activeRule:"/react-app/:id",
  // 重要 6.数据传参
  props:{
    nickname:"react-app 数据测试"
  }
}])


start();

export async function mount(props) {
  ReactDOM.render(    <BrowserRouter {...config}>
       <App />
       </BrowserRouter>,
       props.container ? props.container.querySelector('#root') : document.getElementById('root')
  );
}
```



然后再 router 中 写入如下

```tsx
const routes = [
  {
    path:"/:id",
    element:<Preview></Preview>
  },
];
```



## 2.2 vue



# 3.子应用注册路由

## 3.1 react



## 3.2 vue







# 4.  子应用独立运行



## 4.1 react

```tsx
if(!window.__POWERED_BY_QIANKUN__){
  ReactDOM.render(   
      <BrowserRouter {...config}>
        <App />
       </BrowserRouter>, 
  document.getElementById('root')
);
```







## 4.2 vue









# 5. 静态资源



## 5.1 react

```ts
 __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
```



## 5.2 vue



# 6. 数据传参,通信



- 然后路由一般来说是正则匹配
- 注意官方已经不推荐 globalState 这种方式，反而是从 element上面 dispatch 事件似乎还比较推荐



## 6.1 react

父组件中

```tsx
registerMicroApps([{
  name: 'react-app',
  entry: '//localhost:3011',
  container: '#reactapp',
  activeRule: '/react-app',
  // 重要 6.数据传参
  props:{
    nickname:"react-app 数据测试"
  }
}])
```

然后再子组件 的 mount方法中 `nickname` 就被放到顶层去了



然后如果要通信，那么可以实例化一个 `globalState`。

父组件中，新增

```tsx
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
}, 2000)
```

子组件中直接从 globalState中拿就好了



## 6.2 vue



# 7. 路由传参



## 7.1 react

首先在 src/index下面注册

```tsx
registerMicroApps([{
  name: 'react-app',
  entry: '//localhost:3011',
  container: '#reactapp',
   // 这里更改匹配规则
  activeRule: '/react-app/:id',
}])
```

然后在父子组件的 router中注册

```tsx
const routes = [
  {
    path:"/:id",
    element:<Preview></Preview>
  },
];
```



## 7.2 vue













# 8. 动态加载 loadMicroApp

注意 router 的路由前缀需要修改

## 8.1 react

refer:https://qiankun.umijs.org/zh/api#loadmicroappapp-configuration

### 8.1.1  组件

```tsx
import React from 'react'


/* eslint-disable no-unused-vars */
import  { useRef, useState, memo, useEffect } from "react"
import { loadMicroApp, addGlobalUncaughtErrorHandler } from "qiankun"
import { useDebounceFn, useDeepCompareEffect, useMemoizedFn, useMount } from "ahooks"


export function MicroApp ({
	AppMeta = {},
	onLoad = () => {},
	onError = () => {},
	extendProps = null // 扩展属性
} : any) {

	const instanceRef = useRef(null)
	const containerRef = useRef()

  // 重要: 自定义传参
	const microAppProps = {
    nickname:8
  }
	const [ isLoading, setLoading ] = useState(true)

	useMount(() => {
		addGlobalUncaughtErrorHandler((event) => {
			console.log("%c-- addGlobalUncaughtErrorHandler --", "color: #fff; background-color: orange", event)
		})
	})

	useEffect(() => {
		const { name, entry } = AppMeta || {}
		if (!entry) {
			return
		}
		if (instanceRef.current) {
			const status = instanceRef.current?.getStatus()
			if (status === "MOUNTED") instanceRef.current?.unmount()
		}
		console.log("%c-----子应用 初始化-----", "color: #FFF;background: green;", {...AppMeta})
		try {
			instanceRef.current = loadMicroApp({
				name,
				entry,
				container: "#micro-container",
				props: {
					...microAppProps,
					AppMeta,
					extendProps
				}
			}, {
				singular: true,
				sandbox: true
			})

			instanceRef.current?.loadPromise.then(
				(e) => {
                },
				error => {
					onError(error)
				}
			)
			instanceRef.current?.mountPromise.then(() => {
				setLoading(false)
				onLoad()
			}, error => {
				onError(error)
			})

            
		} catch (error) {
			console.error(error)
			onError()
		}

		return () => {
			const status = instanceRef.current?.getStatus()
			if (status === "MOUNTED") instanceRef.current?.unmount()
			instanceRef.current = null
			console.log("%c-----子应用 销毁了-----", "color: #FFF;background: #000000;", AppMeta.name)
		}
	}, [])

	const { run: updateApplication } = useDebounceFn(useMemoizedFn(() => {
		if (instanceRef.current) {
			console.log("%c-----子应用 update-----", "color: #FFF;background: blue;", {
				AppMeta,
				microAppProps,
				extendProps
			})
			instanceRef.current?.update?.({
				...microAppProps,
				extendProps,
				AppMeta,
				container: containerRef.current
			})
		}
	}), { wait: 500 })

	useDeepCompareEffect(() => {
		updateApplication()
	}, [ microAppProps, AppMeta ])

    console.log("isLoadingL", isLoading)
	return (
		<>
        <div
			id="micro-container"
			ref={ containerRef }
			style={ {
				display: isLoading ? "none" : "block",
				width: "100%",
				height: "100%",
				// background: "#f5f5f5"
			} }
		/>
        </>
	)
}

```





### 8.1.2  调用 

```tsx
import React, { useMemo, useState } from 'react'


import {MicroApp} from "@/component/qiankun"
import { useMemoizedFn } from 'ahooks'

/** 微应用加载状态 */
const MicroAppState = {
	/** 加载中 */
	Loading: "loading",

	/** 异常 */
	Error: "error",

	/** 成功 */
	Success: "success"
}



export default function Preview() {
  const [ microAppState, setMicroAppState ] = useState(MicroAppState.Loading)
  const onLoad = useMemoizedFn(() => {
		setMicroAppState(MicroAppState.Success)
	})

	const onError = useMemoizedFn(() => {
		setMicroAppState(MicroAppState.Error)
	})

  const AppMeta = useMemo(() => {
		return {
			name: "load-app-test",
			entry: `//localhost:3011`,
		}
	}, [])
  return (
    <>
      {/* 重要9：测试loadMicroApp */}
      <div>我是父应用 测试load</div>
      <MicroApp onLoad={ onLoad } onError={ onError } AppMeta={ AppMeta } />
      {microAppState === MicroAppState.Loading && <div>加载中...</div>}
      {microAppState === MicroAppState.Error && <div>加载失败</div>}

    </>
  )
}

```

















