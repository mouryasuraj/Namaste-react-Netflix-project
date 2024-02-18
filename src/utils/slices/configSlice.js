import { createSlice } from "@reduxjs/toolkit";

const configeSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en'
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const { changeLanguage } = configeSlice.actions
export default configeSlice.reducer