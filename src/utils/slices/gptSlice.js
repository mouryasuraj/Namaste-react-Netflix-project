import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPT: false
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.showGPT = !state.showGPT
        }
    }
});


export const { toggleGPTSearch } = gptSlice.actions;
export default gptSlice.reducer;