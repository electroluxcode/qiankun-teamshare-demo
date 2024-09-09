import React from 'react'
import deleteImg from '@/asset/image/delete.svg'
import Icon from '@ant-design/icons'
import { useLocation,useParams  } from 'react-router-dom'

export default function Preview() {
  // 重要 8 路由参数获取
  let location = useLocation()
  let param = useParams()
  console.log("命中了子组件 react-app的Preview组件", {location,param})
  return (
    <div>我是微应用1 react-app
        <img src={deleteImg} alt="" />
        <Icon  component={deleteImg} ></Icon>

    </div>
  )
}
