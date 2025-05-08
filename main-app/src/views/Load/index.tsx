import React, { useMemo, useState } from 'react'


import {MicroApp} from "@/component/qiankun"
import { useMemoizedFn } from 'ahooks'
import { Navigate, useNavigate } from 'react-router-dom'

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
			entry: `//localhost:3021`,
		}
	}, [])
	const navigate = useNavigate()
	const switchRoute = useMemoizedFn(() => {
		navigate("/")
	})
  return (
    <>
      {/* 重要9：测试loadMicroApp */}
      <div>我是父应用 测试load22</div>
	  <div onClick={switchRoute}>切换路由</div>
      <MicroApp onLoad={ onLoad } onError={ onError } AppMeta={ AppMeta } />
      {microAppState === MicroAppState.Loading && <div>加载中...</div>}
      {microAppState === MicroAppState.Error && <div>加载失败</div>}

    </>
  )
}
