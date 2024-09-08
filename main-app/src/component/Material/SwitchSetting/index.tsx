
import { Form, Switch,type SwitchProps, } from "antd";
import React from "react";
import {omit}  from "lodash-es";

export const PlaceHolderSetting: React.FC<SettingProps & SwitchProps> = (props) => {
  const componentProps  = omit(props,["name","label","className","style","defaultValue","value"])
  return (
    <Form.Item
      name={props?.name}
      label={props?.label}
      className={props?.className}
      style={props?.style}
      initialValue={props?.defaultValue}
      valuePropName={"checked"}
    >
      <Switch
        {...componentProps}
      ></Switch>
    </Form.Item>

  );
};

export default PlaceHolderSetting;
