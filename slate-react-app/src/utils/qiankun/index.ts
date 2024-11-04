// 本地缓存key
export const getLocalKey = (key) => {
	const prefix = window.__POWERED_BY_QIANKUN__ ? window.__PROPS_BY_QIANKUN__?.storagePrefix : "teamShare-"
	return (prefix ? prefix : "") + key
}

// qiankun的登录
export const qiankunLogin = () => {
	if (window.__PROPS_BY_QIANKUN__) {
		window.__PROPS_BY_QIANKUN__.requestAuthorization()
		return true
	}
	return false
}

// qiankun的登出
export const qiankunLogout = () => {
	if (window.__PROPS_BY_QIANKUN__) {
		window.__PROPS_BY_QIANKUN__.logout()
		return true
	}
	return false
}

// qiankun 的 authorization
export const getAuthorization = () => {
	if (window.__PROPS_BY_QIANKUN__) {
		return window.__PROPS_BY_QIANKUN__?.authorization || ""
	}
	return ""
}

// 路由前缀
export const getBasename = () => {
	if (window.__PROPS_BY_QIANKUN__) {
		return window.__PROPS_BY_QIANKUN__?.base || ""
	}
	return ""
}

// 原生跳转获取跳转路由
export const getHref = (href) => {
	if (window.__PROPS_BY_QIANKUN__) {
		return window.__PROPS_BY_QIANKUN__?.base + href
	}
	return href
}

// 如果是子引用清理路由最后一个404匹配的路由
export const getRoutersArr = routers => {
	if (window.__PROPS_BY_QIANKUN__) {
		return routers.slice(0, -1)
	}
	return routers
}
