import {createSlice} from '@reduxjs/toolkit'
import { fetchCat } from '../actions/categories'

const initialState = {
    loading: false,
    error: null,
    categories: [],
}

const categoriesReducer = createSlice({
    name: 'categories',
    initialState,
    extraReducers:{
        [fetchCat.pending]: (state) =>{
            state.loading = true
        },
        [fetchCat.rejected]: (state, {payload}) =>{
            state.loading = false;
            state.error = payload.error

        },
        [fetchCat.fulfilled]: (state, {payload}) =>{
            state.loading = false
            state.categories = payload
        },
    }
})



export default categoriesReducer.reducer