import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        list:[],
        movieDetailList:[]
    },
    reducers:{
        addMovies:(state,action)=>{
            state.list=[]
            state.list.push(action.payload)
        },
        addMovieDetailList:(state,action)=>{
            state.movieDetailList=[]
            state.movieDetailList.push(action.payload)
        }
    }
})

export const {addMovies,addMovieDetailList}=movieSlice.actions;
export default movieSlice.reducer;