// index.ts 文件

import { configureStore } from "@reduxjs/toolkit";
import { initialReducer,testSlice} from "./user/login";

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slices
  reducer: {
    counter: initialReducer,
    slice1:testSlice
  },
});

export default store;


