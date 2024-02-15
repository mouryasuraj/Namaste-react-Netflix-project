import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        moviesVideos: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMoviesVideos: (state, action) => {
            state.moviesVideos = action.payload
        }
    }
});

export const { addNowPlayingMovies, addMoviesVideos } = moviesSlice.actions;
export default moviesSlice.reducer