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
