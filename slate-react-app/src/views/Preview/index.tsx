import React from 'react'
import deleteImg from '@/asset/image/delete.svg'
import Icon from '@ant-design/icons'
import { useLocation,useParams } from 'react-router-dom'

export default function Preview() {
  // 重要 8 路由参数获取
  let location = useLocation()
  let param = useParams()
  console.log("命中了子组件 react-app的Preview组件", {location,param})
  return (
    <div>
        <div>我是用户 {param.id}</div>
        
        <input type="text" />

    </div>
  )
}
