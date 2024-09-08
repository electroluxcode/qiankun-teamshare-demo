
import { Button, Form, Input, type InputProps,message } from "antd";
import React, { useContext } from "react";
import { omit } from "lodash-es";
import { formContext } from "../FormSetting";
// import { formContext } from "../Context";
// formContext
export const PlaceHolderSetting: React.FC<SettingProps & InputProps> = (props) => {
  const componentProps = omit(props, ["name", "label", "className", "style", "defaultValue"])
  let form = useContext(formContext)
  const onClick = () => {
    console.log("form:", form.getFieldsValue())
    message.success("请到控制台查看输出信息")
  }
  const onReset = ()=>{
    form.resetFields()
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
        <Button onClick={onClick} type="primary" size="middle" style={{padding:"4px 15px","margin":"0 5px"}}>确认</Button>
        <Button onClick={onReset} type="default" size="middle" style={{padding:"4px 15px","margin":"0 5px"}}>重置</Button>
      </div>
    </Form.Item>

  );
};

export default PlaceHolderSetting;
