import React from 'react'
import Icon from '@ant-design/icons'
import styles from './item.module.less'
import { eventbus } from '@/utils/EventBus'
export default function item({
    src,
    title="",
    style={
        "backgroundColor": "rgb(0, 126, 255)",
    },
    data,
    svg
}) {

  const onDragEnd = () => {
    eventbus.emit("drag", {data},)
    
  }
  return (
    <div style={{
        fontSize: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        marginBottom: "12px",
    }}
    draggable={true}
  
    onDragEnd={
      onDragEnd
    }
    >
    {/* {svg} */}
      <Icon component={src} style={{
        "width":"28px",
        "height": "28px",
        "borderRadius": "6px",
        "padding":" 4px",
        "margin": "2px 4px",
        ...style
      }} className={styles.icon}/>
      {/* <img src={src} style={style} alt="" /> */}
      <div>{title}</div>
    </div>
  )
}
