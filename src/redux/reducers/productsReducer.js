import {createSlice} from '@reduxjs/toolkit'
import { fetchProducts } from '../actions/products'

const initialState = {
    loading: false,
    error: null,
    products: [],
}

const productsReducer = createSlice({
    name: 'products',
    initialState,
    extraReducers:{
        [fetchProducts.pending]: (state) =>{
            state.loading = true
        },
        [fetchProducts.rejected]: (state, {payload}) =>{
            state.loading = false;
            state.error = payload.error

        },
        [fetchProducts.fulfilled]: (state, {payload}) =>{
            state.loading = false
            state.products = payload
        },
    }
})



export default productsReducer.reducer