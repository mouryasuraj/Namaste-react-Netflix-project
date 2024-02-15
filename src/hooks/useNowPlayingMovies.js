import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/slices/moviesSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()


    // calling the above function in the useEffect hook, because we want this api calls once at initial time when my component render
    useEffect(() => {
        getNowPlaying()
    }, [])

    // calling the Now Playing api
    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }


}

export default useNowPlayingMovies;