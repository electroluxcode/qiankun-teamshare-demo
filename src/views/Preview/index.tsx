
import PreviewScheme from '@/component/PreviewScheme'

import React, { useContext, useEffect } from 'react'
import { PreviewJSON } from "./PreviewJSON"
import {CompPickJSON} from "./CompPickJSON"
import { Button, Input, message  } from 'antd'
import { isObject } from "lodash-es"
import styles from "./index.module.less"
import { eventbus } from '@/utils/EventBus'
const TestComp = () => {
  return <div style={{ marginBottom: "16px" }} key={"959"}>
    我是自定义组件：传入customComponent数组可自定义你自己的元素
  </div>
}
let customComponent = {
  components: {
    "test": TestComp,
    data:{
      compKey:2
    }

  }
}
/**
 * @description dfs递归children 寻找指定的name
 */
const deleteByName:any = (options, name) => {
  if(!options){
    return
  }
  
  // console.log("ci:", options,name)
  for (let i = 0; i < options.length; i++) {
        if(options[i]?.data?.name == name){
          options.splice(i,1)
          return options
      }
      if (options[i].children) {
          options[i].children = deleteByName(options[i].children,name) ?? [];
      }
  }
  return options;
};

/**
 * @des dfs递归children 根据name 添加data
 */
const addByName:any = (options, name,data) => {
  if(!options){
    return
  }
  for (let i = 0; i < options.length; i++) {
        if(options[i]?.data?.name == name){
          options.splice(i,0,data)
          return options
      }
      if (options[i].children) {
          options[i].children = addByName(options[i].children,name,data) ?? [];
      }
  }
  return options;
};

import CompPickScheme from '@/component/CompPickScheme'
import { JSON1, JSON2 } from './TemplateJSON'


export default function Test() {
  let [textState, setTextState] = React.useState(JSON.stringify(PreviewJSON, null, 2))
  const [isError, setIsError] = React.useState(false)

 
  const onChange = (e) => {
    try {
      if (isObject(JSON.parse(e.target.value))) {
        setTextState(e.target.value)
        setIsError(false)
      }
    } catch {
      setTextState(e.target.value)
      setIsError(true)
    }

  }
  eventbus.on("delete",(e = {})=>{
    // @ts-ignore
    const data = deleteByName(JSON.parse(textState),e?.name)
    setTextState(JSON.stringify(data, null, 2))
    // setTextState(JSON(data))
    // console.log("data", data,PreviewJSON)
  })
  eventbus.on("drag",(e = {})=>{
    // @ts-ignore
    const data = addByName(JSON.parse(textState),(eventbus.cache["targetpos"] ?? {}).name,e?.data)
    setTextState(JSON.stringify(data, null, 2))
  })
  return (
    <>
   
      <div className={styles.container}>
       
        <div className={styles.bgsize} >
          <div className={styles.bgtitle}>
         
            <CompPickScheme data={CompPickJSON} customComponent={customComponent}></CompPickScheme>
          </div>

        </div>
        <div className={styles.preview}>
          <div style={{fontSize:"12px", marginBottom:"5px"}}>
            json预设，可复制到右边，具体json含义参考antd文档。 
            
          <Button style={{padding:"2px 5px","margin":"0 2px"}} onClick={()=>{
            const jsonString = JSON.stringify(JSON1, null, 2); // 格式化 JSON
            const textarea = document.createElement('textarea');
            textarea.value = jsonString;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            message.success("复制成功")
          }}>复制预设1</Button>
          
          <Button style={{padding:"2px 5px","margin":"0 2px"}} onClick={()=>{
            const jsonString = JSON.stringify(JSON2, null, 2); // 格式化 JSON
            const textarea = document.createElement('textarea');
            textarea.value = jsonString;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            message.success("复制成功")
          }}>复制预设2</Button>
          </div>
          <PreviewScheme data={isError ? [] : JSON.parse(textState)} customComponent={customComponent}></PreviewScheme>
        </div>
        <div className={styles.bgsize}>
          <div className={styles.bgtitle}>
            组件json预览
          </div>
          <Input.TextArea style={{
            height: "90%",
            minHeight:"500px"
          }}
            onChange={(e)=>{
              onChange(e)
            }
            }
            value={textState}></Input.TextArea>
        </div>
      </div>
      
    </>

  )
}
