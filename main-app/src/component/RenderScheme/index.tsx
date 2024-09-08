import { isFunction,isObject } from "lodash-es";
import { CompProps, RecursiveCompProps } from "./type";

// 引入 组件
import { SchemaFieldComp } from '@/component/Material';
// 递归组件
const RecursiveComp: React.FC<RecursiveCompProps> | React.ElementType | any = ({ item,customComponent }: RecursiveCompProps) => {
  const { children, data, refOption,...rest } = item;
  let { Component } = item

  let registerComp
  if(customComponent){
    registerComp = {
      ...SchemaFieldComp["components"],
      ...customComponent["components"],
    }
  }else{
    registerComp = {
      ...SchemaFieldComp["components"],
      
    }
  }
  


  if (typeof Component === 'string') {
    Component = registerComp[Component]
    if (!Component) {
      return <>no exist</>
    }
  }
  if(typeof Component === 'object') {
    if(!Component.key) {
      // return <>nokey</>
    }
    return <>{Component}</>
  }
  if (!Component) {
    return null;
  }
  // 渲染 children 的递归调用
  const childElements = children ? (
    children.map((child) => {
      return isFunction(RecursiveComp) ?
        RecursiveComp({ item: child, key: child?.data?.compKey || Math.random(), customComponent }) :
        <RecursiveComp item={child} key={child?.data?.compKey || Math.random()} customComponent={customComponent} />
    })
  ) : null;

  return <div key={Math.random()}>
    <Component  {...data}  key={data?.compKey || Math.random()*10000} >
    {childElements}
  </Component>
  </div>
};

// 主组件
const Comp: React.FC<CompProps> = ({ data,customComponent }) => {
  return (
    <>
      {data && data.length && Array.isArray(data) && data.map((item, index) => {

        return <RecursiveComp customComponent={customComponent} key={item?.data?.compKey || index} item={item} />
      })}
    </>
  );
};


export default Comp;