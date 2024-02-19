import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPT: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.showGPT = !state.showGPT
        },
        addGPtResults: (state, action) => {
            const { movieResults, movieNames } = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        }
    }
});


export const { toggleGPTSearch, addGPtResults } = gptSlice.actions;
export default gptSlice.reducer;