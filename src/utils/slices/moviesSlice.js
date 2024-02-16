import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        moviesVideos: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addMoviesVideos: (state, action) => {
            state.moviesVideos = action.payload
        }
    }
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpComingMovies, addMoviesVideos } = moviesSlice.actions;
export default moviesSlice.reducer