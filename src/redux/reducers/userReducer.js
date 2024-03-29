import { createSlice } from '@reduxjs/toolkit'
import { getUser } from '../actions/user';

const initialState = {
    loading: false,
    error: null,
    user: {}
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
        },
        [getUser.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload;
        }
    }
})

export default userSlice.reducer