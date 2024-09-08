import { isFunction, isObject } from "lodash-es";
import { CompProps, RecursiveCompProps } from "./type";


import styles from './index.module.less';


/**
 * @f1 删除
 * @f2 拖动
 */

import svg from "@/asset/image/delete.svg"
import eyeopen from "@/asset/image/eye-open.svg"
import Icon from "@ant-design/icons";
// 引入 组件
import { SchemaFieldComp } from '@/component/Material';
import { message, Modal } from "antd";
import { useState, useContext } from "react";
import { eventbus } from "@/utils/EventBus";
// 递归组件
const RecursiveComp: React.FC<RecursiveCompProps> | React.ElementType | any = ({ item, customComponent }: RecursiveCompProps) => {
  const { children, data, refOption, ...rest } = item;
  let { Component } = item
  const [isShow, setIsShow] = useState(true)
  const onClick = () => {
    message.success("删除组件")
    setIsShow(false)
    eventbus.emit("delete", data)
  }
  let registerComp
  registerComp = {
    ...SchemaFieldComp["components"],
    ...customComponent["components"],
  }

  let compKey = Math.random() * 10000
  let isMain = false
  if (typeof Component === 'string') {
    if (Component == "Form") {
      isMain = true
    }
    Component = registerComp[Component]
    if (!Component) {
      return <>no exist</>
    }
  }
  if (typeof Component === 'object') {
    if (!Component.key) {
      return <>nokey</>
    }
    return <>{Component}</>
  }
  if (!Component) {
    return <>no component</>;
  }
  // 渲染 children 的递归调用
  const childElements = children ? (
    children.map((child) => {
      return <RecursiveComp item={child} key={child?.data?.compKey} customComponent={customComponent} />

    })
  ) : null;
  if (isMain) {
    return <div key={Math.random()}>
      <Component  {...data}  >
        {childElements}
      </Component>
    </div>
  }

  const onDrop = (event: any) => {
    eventbus.cache["targetpos"] = data
    event.stopPropagation()
    event.preventDefault()
  }
  return <div draggable={true} key={Math.random()} onDragOver={(e)=>{e.preventDefault()}} onDrop={onDrop} >
    {
      isShow &&
      <div className={styles.formitem}>
        <div className={styles.dragpanel}>
          <div className={styles.panellist} >
            <Icon className={styles.panelimg} component={eyeopen} onClick={() => {
              Modal.info({
                title: '组件面板参数(预渲染)',
                content: JSON.stringify(data, null, 2),
                centered: true
              })
            }}></Icon>

            <Icon className={styles.panelimg} component={svg} onClick={onClick}></Icon>

          </div>
        </div>
        <Component  {...data} key={data?.compKey || compKey} >
          {childElements}
        </Component>
      </div>
    }
  </div>


};

import { createContext } from "react";
import { genRandomKey } from "@/utils/genRandomKey";
const ParamContext = createContext<any | null>(null)
// 主组件
const Comp: React.FC<CompProps> = ({ data, customComponent }) => {
  // const 
  
  return (
    <ParamContext.Provider value={data}>
      {data && data.length && Array.isArray(data) && data.map((item, index) => {
        return <RecursiveComp customComponent={customComponent} key={genRandomKey()} item={item} />
      })}
   </ParamContext.Provider>
  );
};
export {ParamContext}

export default Comp;