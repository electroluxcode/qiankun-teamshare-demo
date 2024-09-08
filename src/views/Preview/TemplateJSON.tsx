import { CompProps } from "@/component/RenderScheme/type";
import { genRandomKey } from "@/utils/genRandomKey";

export const JSON1: CompProps["data"] = [{
    Component: "Form",
    children: [
        {
            Component: "Input",
            data: {
                label: "我是输入框",
                name: "input",
                placeholder: "我是输入框placeholder"
            },
        },
        {
            Component: "Select",
            data: {
                label: "我是选择框",
                name: "select",
                options: [{
                    label: "选项一",
                    value: "1"
                }, {
                    label: "选项二",
                    value: "2"
                }],
                defaultValue: "1"
            },
        },
      
        {
            Component: "CheckBox",
            data: {
                label: "我是多选框",
                name: "checkbox",
                options: [{
                    label: "选项一",
                    value: "1"
                }, {
                    label: "选项二",
                    value: "2"
                }],


            }
        },
        {
            // 时间选择器
            Component: "TimePicker",
            data: {
                label: "我是时间选择器",
                name: "TimePicker",
            }
        },
        
        {
            // rate
            Component: "Rate",
            data: {
                label: "我是评分",
                name: "rate",
                value: 3
            }
        },
        {
            // cascader
            Component: "Cascader",
            data: {
                label: "我是级联选择器",
                name: "cascader",
                options: [
                    {
                        value: "zhejiang",
                        label: "Zhejiang",
                        children: [
                            {
                                value: "hangzhou",
                                label: "Hangzhou",
                                children: [
                                    {
                                        value: "xihu",
                                        label: "West Lake"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: "jiangsu",
                    }
                ]
            }
        },
        {
            // slider
            Component: "Slider",
            data: {
                label: "我是滑块",
                name: "slider",
                value: 50
            }
            
        },
        {
            Component: "PreviewSetting",
            data:{
                compKey:genRandomKey(),
                 name:"我是PreviewSetting组件"
            }
        },
    ],
    data: {
    }
}]


export const JSON2: CompProps["data"] = [{
    Component: "Form",
    children: [
        {
            // 时间选择器
            Component: "DatePicker",
            data: {
                label: "我是日期选择器",
                name: "datePicker",
                type: "datetime"
            }
        },
        {
            Component: "Radio",
            data: {
                label: "我是单选框",
                name: "radio",
                options: [{
                    label: "选项一",
                    value: "1"
                }, {
                    label: "选项二",
                    value: "2"
                }],
                defaultValue: "1"
            }
        },
       
        {
            //颜色选择器
            Component: "ColorPicker",
            data: {
                label: "我是颜色选择器",
                name: "ColorPicker",
            }
        },
        {
            // switch
            Component: "Switch",
            data: {
                label: "我是开关",
                name: "switch",
                defaultValue: true
            }
        }, {
            // slider
            Component: "Slider",
            data: {
                label: "我是滑块",
                name: "slider",
            }
            
        },
        {
            Component: "PreviewSetting",
            data:{
                compKey:genRandomKey(),
                 name:"我是PreviewSetting组件"
            }
        },
    ],
    data: {
    }
}]