import {configureStore } from '@reduxjs/toolkit'
import movieReducer from "../Slice/movielist"
import seriesReducer from "../Slice/seriesSlice"
import searchValueReducer from "../Slice/inputSlice"


const store = configureStore({
    reducer:{
        movie:movieReducer,
        series:seriesReducer,
        searchValue:searchValueReducer
    }
})

export default store