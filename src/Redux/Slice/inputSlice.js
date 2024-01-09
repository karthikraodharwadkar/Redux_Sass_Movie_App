import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
    name:"searchValue",
    initialState:{
        value:[]
    },
    reducers:{
        searchInputValue:(state,action)=>{
            state.value=[]
            state.value.push(action.payload)
        }
    }   
})

export const {searchInputValue} = inputSlice.actions;
export default inputSlice.reducer;