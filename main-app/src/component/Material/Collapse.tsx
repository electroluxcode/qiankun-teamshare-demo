import {
    Collapse as AntdCollapse,
    Space,
    type CollapseProps,
  } from "antd";
  import styles from "./index.module.less";
  import React, { PropsWithChildren, type MouseEventHandler } from "react";
  
  interface CollapsePanelProps  {
    title: string;
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    compKey?: string;
  }
  
  export const CollapsePanel: React.FC<
    React.PropsWithChildren<CollapsePanelProps>
  > = ({ title, onClick, compKey, children, ...otherProps }) => {
    return (
      <AntdCollapse.Panel
        header={
          <div className={styles.header}>
            <span onClick={onClick} style={{ cursor: "pointer" }}>
              {title}
            </span>
          </div>
        }
        key={compKey}
        {...otherProps}
      >
        {children}
      </AntdCollapse.Panel>
    );
  };
  
  
  export const CollapsePanelScheme: React.FC<
    React.PropsWithChildren<CollapsePanelProps>
  > = ({ title, onClick, compKey, children, ...otherProps }) => {
    return (
      <AntdCollapse.Panel
        header={
          <div className={styles.header}>
            <span onClick={onClick} style={{ cursor: "pointer" }}>
              {title}
            </span>
          </div>
        }
       
        {...otherProps}
        key={compKey}
      >
        {children}
      </AntdCollapse.Panel>
    );
  };
  
  export const Collapse: React.FC<React.PropsWithChildren<CollapseProps>> = (
    props
  ) => {
    return (
      <div className={styles.collapse}>
        <AntdCollapse {...props}></AntdCollapse>
      </div>
    );
  };
  