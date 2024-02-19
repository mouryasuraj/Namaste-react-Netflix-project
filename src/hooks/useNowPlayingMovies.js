import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/slices/moviesSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)


    // calling the above function in the useEffect hook, because we want this api calls once at initial time when my component render
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies()
        return () => { dispatch(addNowPlayingMovies(null)) }
    }, [])
    /* eslint-enable react-hooks/exhaustive-deps */

    // calling the Now Playing api
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }


}

export default useNowPlayingMovies;