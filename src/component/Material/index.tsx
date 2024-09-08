import { Collapse,CollapsePanelScheme, } from "./Collapse";
import Form from "./FormSetting"
import Cascader from "./CascaderSetting"
import CheckBox from "./CheckBoxSetting"
import ColorPicker from "./ColorPickSetting"
import InputNumber from "./InputNumberSetting"
import Input from "./InputSetting"
import Radio from "./RadioSetting"
import Select from "./SelectSetting"
import Switch from "./SwitchSetting"
import Slider from "./SliderSetting"
import DatePicker from "./DatePickerSetting"
import TimePicker from "./TimePickSetting"
import Operate from "./OperateSetting"
import Rate from "./RateSetting";
import PreviewSetting from "./PreviewSetting";
export const createSchemaField = (prop)=>{
  return prop
}
export const SchemaFieldComp = createSchemaField({
    components:{
        Collapse,
        CollapsePanelScheme,
        Form,
        Cascader,
        ColorPicker,
        InputNumber,
        Input,
        Rate,
        Radio,
        Select,
        Switch,
        Slider,
        DatePicker,
        CheckBox,
        TimePicker,Operate,PreviewSetting
    }
})