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
			entry: `//localhost:7001`,
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
