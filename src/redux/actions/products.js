import { createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from '../../lib/commerce'


export const fetchByCategory = createAsyncThunk(
  'products/fetchProducts',
  async (slug) => {
    try {
      if (!slug) {
        const res = await commerce.products.list()
        return res.data
      }
      const res = await commerce.products.list({
        category_slug: slug,
      })
      return res.data
    } catch {
      console.error('Server error')
    }
  }
)
