
import { Form, Input,type InputProps, } from "antd";
import React, { useContext } from "react";
import {omit}  from "lodash-es";
import { formContext } from "../FormSetting";

export const PlaceHolderSetting: React.FC<SettingProps & InputProps> = (props) => {
  const componentProps  = omit(props,["name","label","className","style","defaultValue","compKey"])
  
  return (

    <Form.Item
      name={props?.name}
      label={props?.label}
      className={props?.className}
      style={props?.style}
      initialValue={props.defaultValue}
    >
      <Input
        {...componentProps}
      ></Input>
    </Form.Item>

  );
};

export default PlaceHolderSetting;
