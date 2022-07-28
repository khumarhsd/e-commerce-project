import {createSlice} from '@reduxjs/toolkit'
import { fetchByCategory } from '../actions/products'

const initialState = {
    loading: false,
    error: null,
    products: [],
}

const productsReducer = createSlice({
    name: 'products',
    initialState,
    extraReducers:{
        [fetchByCategory.pending]: (state) =>{
            state.loading = true
        },
        [fetchByCategory.rejected]: (state, {payload}) =>{
            state.loading = false;
            state.error = payload.error

        },
        [fetchByCategory.fulfilled]: (state, {payload}) =>{
            state.loading = false
            state.products = payload
        },
    }
})



export default productsReducer.reducer