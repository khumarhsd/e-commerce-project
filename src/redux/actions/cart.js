import { createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from '../../lib/commerce'

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  try {
    const response = await commerce.cart.retrieve()
    return response
  } catch {
    console.error('Server error')
  }
})

export const addToCart = createAsyncThunk('cart/addToCart', async (data) => {
  try {
    const varObj = {}
    
    varObj[data.sizeGroupId] = data.sizeVariantId
    varObj[data.colorGroupId] = data.colorVariantId
    if (Object.keys(varObj) == 'undefined') {
      const response = await commerce.cart.add(data.productId, data.amount)
      return response.cart
    }
    const response = await commerce.cart.add(
      data.productId,
      data.amount,
      varObj
    )
    return response.cart
  } catch {
    console.error('Server error')
  }
})

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({ productId, quantity }) => {
    try {
      const response = await commerce.cart.update(productId, {
        quantity: quantity,
      })
      return response.cart
    } catch {
      console.error('Server error')
    }
  }
)

export const removeFromCart = createAsyncThunk(
  'cart/removeFrom',
  async (productId) => {
      try {
          const response = await commerce.cart.remove(productId);
          return response.cart;
      }
      catch {
        console.error('Server error')
      }
  }
)

export const emptyCart = createAsyncThunk(
  'cart/emptyCart',
  async () => {
      try {
          const response = await commerce.cart.empty();
          return response.cart;
      }
      catch {
        console.error('Server error')
      }
  }
)