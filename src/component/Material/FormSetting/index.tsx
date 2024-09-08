
import { Button, Form, Input, Space, type FormProps ,type FormInstance} from "antd";
import React from "react";
import { omit } from "lodash-es";
import { useContext } from 'react';
// import { formContext } from "../Context";
import { createContext } from "react";
const formContext = createContext<FormInstance | null>(null)
export const FormSetting: React.FC<SettingProps & FormProps | any> = (props) => {

  const [form] = Form.useForm();
  console.log(props,"ddddddddd")
  
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onClick = () => {
    console.log(form.getFieldsValue())
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <>
      <formContext.Provider value={form}>
        <Form form={form} >

          {props.children}

       
        </Form>
      </formContext.Provider>
    </>
  );
};
export {
  formContext
}
export default FormSetting;
