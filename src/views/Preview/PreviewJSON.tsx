import { CompProps } from "@/component/RenderScheme/type";
import { genRandomKey } from "@/utils/genRandomKey";

export const PreviewJSON: CompProps["data"] = [{
    Component: "Form",
    children: [
        {
            Component: "Input",
            data: {
                label: "我是输入框",
                name: "input",
                placeholder: "我是输入框placeholder",
                compKey:genRandomKey(),
            },
        },
        // {
        //     Component: "Select",
        //     data: {
        //         label: "我是选择框",
        //         name: "select",
        //         compKey:"Select-1111111",
        //         options: [{
        //             label: "选项一",
        //             value: "1"
        //         }, {
        //             label: "选项二",
        //             value: "2"
        //         }],
        //         defaultValue: "1"
        //     },
        // },
      
        // {
        //     Component: "CheckBox",
        //     data: {
        //         compKey:"CheckBox-1111111",
        //         label: "我是多选框",
        //         name: "checkbox",
        //         options: [{
        //             label: "选项一",
        //             value: "1"
        //         }, {
        //             label: "选项二",
        //             value: "2"
        //         }],


        //     }
        // },
        // {
        //     // 时间选择器
        //     Component: "TimePicker",
        //     data: {
        //         compKey:"TimePicker-1111111",
        //         label: "我是时间选择器",
        //         name: "TimePicker",
        //     }
        // },
        
        // {
        //     // rate
        //     Component: "Rate",
        //     data: {
        //         compKey:"Rate-1111111",
        //         label: "我是评分",
        //         name: "rate",
        //         value: 3
        //     }
        // },
        // {
        //     // cascader
        //     Component: "Cascader",
        //     data: {
        //         compKey:"Cascader-1111111",
        //         label: "我是级联选择器",
        //         name: "cascader",
        //         options: [
        //             {
        //                 value: "zhejiang",
        //                 label: "Zhejiang",
        //                 children: [
        //                     {
        //                         value: "hangzhou",
        //                         label: "Hangzhou",
        //                         children: [
        //                             {
        //                                 value: "xihu",
        //                                 label: "West Lake"
        //                             }
        //                         ]
        //                     }
        //                 ]
        //             },
        //             {
        //                 value: "jiangsu",
        //             }
        //         ]
        //     }
        // },
        // {
        //     // slider
        //     Component: "Slider",
        //     data: {
        //         compKey:"Slider-1111111",
        //         label: "我是滑块",
        //         name: "slider",
        //         value: 50
        //     }
            
        // },
        {
            Component: "test",
            data:{
                compKey:genRandomKey(),
                name:"我是test组件"
            }
        },
        // PreviewSetting
        {
            Component: "PreviewSetting",
            data:{
                compKey:genRandomKey(),
                 name:"我是PreviewSetting组件"
            }
        },
        // {
        //     Component: "Operate",
        //     data:{
        //          name:"我是Operate组件"
        //     }
        // }
    ],
    data: {
        compKey:genRandomKey(),
    }
}]

