

# qiankun-teamshare-demo

使用 antd5 ,useContext, eventbus ，react做的最小表单生成器示例



# preview



## 添加左侧面板组件配置

- 参考`src\component\CompPickScheme` 组件和调用它的 `src\views\Preview\index.tsx` 文件和 `src\views\Preview\CompPickJSON.tsx `的json 数据



### 预渲染区域

- 与 render下面的 渲染区域区别在于 hover会有 `查看` 和 ` 删除` 按钮
- 这部分用 eventbus 与文本域做通信
- 具体参考 `src\views\preview\PreviewJSON.tsx `和`src\views\Preview\index.tsx` 



# render



具体参考 `src\views\Render\CollapseJSON.tsx` 和 `src\views\Render\index.tsx`

## 添加自定义物料

- 参考:`customComponent`


## 获取表单值

- 参考 `src\component\Material\OperateSetting` 通过context实现


## 添加基础物料

- 参考 `src/component/Material/index.tsx` ，


## 后续扩展
可考虑 在 `src\component\SettingScheme\index.tsx` 加入 xstate 或者 formity的规则





## run 

- npm install
- 删除 router 的 `basename` 和 package.json 中的 `homepage`







# 原理

表单生成器，关键在于数据流的通信，规则的确定，

只需要记住本质在于json的转化集成。他提供一个json数据的入口，然后进行递归解析和数据的context。逻辑高度自定义，理论上满足任何场景



