
import { Form, Radio,type RadioGroupProps, } from "antd";
import React from "react";
import {omit}  from "lodash-es";

export const PlaceHolderSetting: React.FC<SettingProps & RadioGroupProps> = (props) => {
  const componentProps  = omit(props,["name","label","className","style","defaultValue","compKey"])
  const [value,setValue] = React.useState(props.defaultValue)
  const onChange = (e:any) => {
    setValue(e.target.value)
    // console.log(e.target.value)
  }
  return (
    <Form.Item
      name={props?.name}
      label={props?.label}
      className={props?.className}
      style={props?.style}
      initialValue={props.defaultValue}
    >
     
       <Radio.Group options={componentProps.options} onChange={onChange} value={value}>
    
    </Radio.Group>
    </Form.Item>

  );
};

export default PlaceHolderSetting;
