
import { Form, Checkbox,type CheckboxProps, } from "antd";
import React from "react";
import {omit}  from "lodash-es";

export const PlaceHolderSetting: React.FC<SettingProps & CheckboxProps> = (props) => {
  const componentProps  = omit(props,["name","label","className","style","defaultValue","compKey"])
  return (
    <Form.Item
      name={props?.name}
      label={props?.label}
      className={props?.className}
      style={props?.style}
      initialValue={props.defaultValue}
    >
      <Checkbox.Group
        {...componentProps}
      ></Checkbox.Group>
    </Form.Item>

  );
};

export default PlaceHolderSetting;
