import { CompProps } from "@/component/RenderScheme/type";
import compPick from "@/component/CompPickScheme/component/container"
import itemPick from "@/component/CompPickScheme/component/item"


import input from "@/asset/componentSvg/input.svg"
import switch1 from "@/asset/componentSvg/switch.svg"
import radio from "@/asset/componentSvg/radio.svg"
import checkbox from "@/asset/componentSvg/checkbox.svg"
import select from "@/asset/componentSvg/approval.svg"
import cascader from "@/asset/componentSvg/cascader.svg"
import slider from "@/asset/componentSvg/slider.svg"
import rate from "@/asset/componentSvg/rate.svg"
import timePicker from "@/asset/componentSvg/time.svg"
import datePicker from "@/asset/componentSvg/date.svg"
import { genRandomKey } from "@/utils/genRandomKey";


export const CompPickJSON: CompProps["data"] = [{
    Component: "Collapse",
    data: {
        compKey: "123456",
        defaultActiveKey: ["input1", "change", "other"]
    },
    children: [
        {
            Component: "CollapsePanelScheme",
            data: {
                compKey: "input1",
                title: "输入",
            },
            children: [
                {
                    Component: compPick,
                    data: {
                        compKey: genRandomKey(),
                        title: "组件选择",
                        value: "itemPick",

                    },
                    children: [{
                        Component: itemPick,
                        data: {
                            compKey: genRandomKey(),
                            title: "输入",
                            src: input,
                            style: {
                                background: "rgb(0, 126, 255)",
                                marginBottom: "8px"
                            },
                            data: {
                                "Component": "Input",
                                "data": {
                                    "label": "我是输入框",
                                    "name": "Input-" + genRandomKey(),
                                    "placeholder": "我是输入框placeholder",
                                    "compKey": "Input-" + genRandomKey(),
                                }
                            },
                        }
                    }]
                },

            ]

        },
        {
            Component: "CollapsePanelScheme",
            data: {
                key: "change",
                compKey: "change",
                title: "选择",
            },
            children: [
                {
                    Component: compPick,
                    data: {
                        compKey: genRandomKey(),
                        title: "组件选择",
                        value: "itemPick",

                    },
                    children: [
                        {
                            Component: itemPick,
                            data: {
                                compKey: genRandomKey(),
                                title: "按钮",
                                src: switch1,
                                style: {
                                    background: "rgb(242, 145, 42)",
                                    marginBottom: "8px"
                                },
                                data: {
                                    "Component": "Switch",
                                    "data": {
                                        "label": "我是Switch",
                                        "name": "Switch-" + genRandomKey(),
                                        "placeholder": "我是输入框placeholder",
                                        "compKey": "Switch-" + genRandomKey(),
                                    }
                                },
                            }
                        }, {
                            Component: itemPick,
                            data: {
                                compKey: genRandomKey(),
                                title: "时间选择",
                                src: timePicker,
                                style: {
                                    background: "rgb(242, 145, 42)",
                                    marginBottom: "8px"
                                },
                                data: {
                                    "Component": "TimePicker",
                                    "data": {
                                        "label": "我是TimePicker",
                                        "name": "TimePicker-" + genRandomKey(),
                                        "compKey": "TimePicker-" + genRandomKey(),
                                    }
                                },
                            }
                        }, {
                            Component: itemPick,
                            data: {
                                compKey: genRandomKey(),
                                title: "单选",
                                src: radio,
                                style: {
                                    background: "rgb(242, 145, 42)",
                                    marginBottom: "8px"
                                },
                                data: {
                                    "Component": "Radio",
                                    "data": {
                                        "label": "我是Radio",
                                        "name": "Radio-" + genRandomKey(),
                                        "compKey": "Radio-" + genRandomKey(),
                                    }
                                },
                            }
                        }, {
                            Component: itemPick,
                            data: {
                                compKey: genRandomKey(),
                                title: "多选",
                                src: checkbox,
                                style: {
                                    background: "rgb(242, 145, 42)",
                                    marginBottom: "8px"
                                },
                                data: {
                                    "Component": "CheckBox",
                                    "data": {
                                        "label": "我是CheckBox",
                                        "name": "Checkbox-" + genRandomKey(),
                                        "compKey": "Checkbox-" + genRandomKey(),
                                    }
                                },
                            }
                        }, {
                            Component: itemPick,
                            data: {
                                compKey: genRandomKey(),
                                title: "选择",
                                src: select,
                                style: {
                                    background: "rgb(242, 145, 42)",
                                    marginBottom: "8px"
                                },
                                data: {
                                    "Component": "Select",
                                    "data": {
                                        "label": "我是Select",
                                        "name": "Select-" + genRandomKey(),
                                        "compKey": "Select-" + genRandomKey(),
                                    }
                                },
                            }
                        }, {
                            Component: itemPick,
                            data: {
                                compKey: genRandomKey(),
                                title: "日期选择器",
                                src: datePicker,
                                style: {
                                    background: "rgb(242, 145, 42)",
                                    marginBottom: "8px"
                                },


                                data: {
                                    "Component": "DatePicker",
                                    "data": {
                                        "label": "我是datepicker",
                                        "name": "datepicker-" + genRandomKey(),
                                        "compKey": "datepicker-" + genRandomKey(),
                                    }
                                }

                            }
                        }, {
                            Component: itemPick,
                            data: {
                                compKey: genRandomKey(),
                                title: "级联选择器",
                                src: cascader,
                                style: {
                                    background: "rgb(242, 145, 42)",
                                    marginBottom: "8px"
                                },
                                data: {
                                    "Component": "Cascader",
                                    "data": {
                                        "label": "我是cascader",
                                        "name": "cascader-" + genRandomKey(),
                                        "compKey": "cascader-" + genRandomKey(),
                                    }
                                }
                            }
                        },
                    ]
                },

            ]

        },
        {
            Component: "CollapsePanelScheme",
            data: {
                key: "other",
                compKey: "other",
                title: "其他",
            },
            children: [
                {
                    Component: compPick,
                    data: {
                        compKey: genRandomKey(),
                        title: "组件选择",
                        value: "itemPick",

                    },
                    children: [{
                        Component: itemPick,
                        data: {
                            compKey: genRandomKey(),
                            title: "星形",
                            src: rate,
                            style: {
                                background: "rgb(136, 72, 220)",
                                marginBottom: "8px"
                            },
                            data: {
                                "Component": "Rate",
                                "data": {
                                    "label": "我是Rate",
                                    "name": "Rate-" + genRandomKey(),
                                    "compKey": "Rate-" + genRandomKey(),
                                }
                            }
                        }
                    }, {
                        Component: itemPick,
                        data: {
                            compKey: genRandomKey(),
                            title: "滑块",
                            src: slider,
                            style: {
                                background: "rgb(136, 72, 220)",
                                marginBottom: "8px"
                            },
                            data: {
                                "Component": "Slider",
                                "data": {
                                    "label": "我是Slider",
                                    "name": "Slider-" + genRandomKey(),
                                    "compKey": "Slider-" + genRandomKey(),
                                }
                            }
                        }
                    }]
                },

            ]

        },
    ],

}]

