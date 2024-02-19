import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice'
import moviesReducer from '../slices/moviesSlice'
import gptReducer from '../slices/gptSlice'
import configeReducer from '../slices/configSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        confige: configeReducer
    }
})

export default appStore;