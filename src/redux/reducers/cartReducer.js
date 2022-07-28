import { createSlice } from '@reduxjs/toolkit'
import {
  addToCart,
  fetchCart,
  updateCart,
  removeFromCart,
  emptyCart,
} from '../actions/cart'

const initialState = {
  loading: false,
  error: null,
  cart: {},
}

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [fetchCart.pending]: (state) => {
      state.loading = true
    },
    [fetchCart.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [fetchCart.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.cart = payload
    },
    [addToCart.pending]: (state) => {
      state.loading = true
    },
    [addToCart.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [addToCart.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.cart = payload
    },
    [updateCart.pending]: (state) => {
      state.loading = true
    },
    [updateCart.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [updateCart.fulfilled]: (state, { payload }) => {
      state.cart = payload
      state.loading = false
    },
    [removeFromCart.pending]: (state, { payload }) => {
      state.loading = true
    },
    [removeFromCart.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [removeFromCart.fulfilled]: (state, { payload }) => {
      state.cart = payload
      state.loading = false
    },

    [emptyCart.pending]: (state) => {
      state.loading = true
    },
    [emptyCart.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [emptyCart.fulfilled]: (state, { payload }) => {
      state.cart = payload
      state.loading = false
    },
  },
})

export default cartReducer.reducer
