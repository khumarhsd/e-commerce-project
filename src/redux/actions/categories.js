import { createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from '../../lib/commerce'

export const fetchCat = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    try {
      const res = await commerce.categories.list()
      return res.data
    } catch {
      console.error('Server error')
    }
  }
)
