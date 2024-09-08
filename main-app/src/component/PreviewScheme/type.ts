// 定义递归组件的 Props 类型
export interface RecursiveCompProps {
  item: {
    Component: React.ComponentType<any> | string | any; // 组件类型
    children?: RecursiveCompProps['item'][]; // 递归子项
    data?: Record<string, any>; // 组件的附加数据
    [key: string]: any; // 允许其他额外的属性
  };
  customComponent:{
    Component: React.ComponentType<any> | string | any; // 组件类型
  }
}

// 主组件的 Props 类型
export interface CompProps {
  data: RecursiveCompProps['item'][];
  customComponent?:Record<any,any>
}