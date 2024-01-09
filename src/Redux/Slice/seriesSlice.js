import { createSlice } from '@reduxjs/toolkit'

const seriesSlice = createSlice({
    name:"series",
    initialState:{
        value:[]
    },
    reducers:{
        addSeries:(state,action)=>{
            state.value=[]
            state.value.push(action.payload)
        }
    }
})

export const {addSeries} = seriesSlice.actions;
export default seriesSlice.reducer;