
import { Button, Form, Input, type InputProps,message, Modal } from "antd";
import React, { Component, useContext } from "react";
import { omit } from "lodash-es";
import { formContext } from "../FormSetting";
import { ParamContext } from "@/component/PreviewScheme";
// import { formContext } from "../Context";
// formContext
import RenderScheme from '@/component/RenderScheme'
const TestComp = ()=>{
  return <div style={{marginBottom: "16px"}} key={"959"}>
  我是自定义组件：传入customComponent数组可自定义你自己的元素
</div>
}
let customComponent = {
  components: {
    "test": TestComp,

  }
}

export const PlaceHolderSetting: React.FC<SettingProps & InputProps> = (props) => {
  let ParamContextInstance = useContext(ParamContext)
  const onClick = () => {
    if(ParamContextInstance[0]?.Component !=="Form"){
      message.error("不是合法的数据")
      return
    }
    let comp = ParamContextInstance[0]?.children
    ParamContextInstance[0].children = comp?.slice(0,comp.length-1)
    ParamContextInstance[0].children.push({
      Component:"Operate",
      data:{
        compKey: Math.random().toString(36).slice(-8),
      }
    })
    Modal.info({
      title: "预览",
      content: <RenderScheme data={ParamContextInstance } customComponent={customComponent} />,
      onOk() {
       
      },
    })
  }
 
  return (

    <Form.Item
      name={props?.name}
      label={props?.label}
      className={props?.className}
      style={props?.style}
      initialValue={props.defaultValue}
    >
      <div style={{display:"flex", justifyContent:"end"}}>
        <Button onClick={onClick} type="primary" size="middle" style={{padding:"4px 15px","margin":"0 5px"}}>查看渲染</Button>
        
      </div>
    </Form.Item>

  );
};

export default PlaceHolderSetting;
