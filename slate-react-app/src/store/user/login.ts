// counterSlice.ts 文件

import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

const initialState: any = {
    name: "22",
    value: 0,
    title: "redux toolkit pre"
};


const initialReducer = (state = initialState, action) => {
    if (action.type === "couter/xx") {
        return { value: state.value + 1 }
    }
    return { value: state.value }
}

export { initialReducer }




// 关于异步
function listGet(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(898989)
        }, 3000);
       
    })
}

let asyncFn = createAsyncThunk("async",async()=>{
    const test = await listGet()
    console.log("res:",test)
    return test
})


// 创建一个 Slice 
const initialStateSlice: any = {
    name: "2222",
    value: 2,
    title: "r22edux toolkit pre"
};
export const initialSlice = createSlice({
    name: 'slice3',
    initialState:initialStateSlice,
    reducers: {
        add: {
            reducer(state,action) {
                state.value += action.payload;
                //   console.log(action.payload)
            },
            // 这个可以做中间件,可以
            prepare(param1,param2){
                alert(param1)
                return {
                    payload:param1
                }
            }
        },
        // 注意 action.payload 是传参 
        async:(state,action)=>{
            
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(asyncFn.pending,(state,action)=>{
            console.log("async pending")
        })
        builder.addCase(asyncFn.fulfilled,(state,action)=>{
            console.log("async fulfilled")
            console.log(action,action.payload)
        })
    }
});
export const { add } = initialSlice.actions;

// 默认导出
let testSlice = initialSlice.reducer
export { testSlice,asyncFn };

