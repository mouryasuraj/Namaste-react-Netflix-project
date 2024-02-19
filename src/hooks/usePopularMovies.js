import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/slices/moviesSlice";


const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector(store => store.movies.popularMovies)

    // calling the above function in the useEffect hook, because we want this api calls once at initial time when my component render
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        !popularMovies && getPopularMovies()
        return () => dispatch(addPopularMovies(null))
    }, [])
    /* eslint-enable react-hooks/exhaustive-deps */

    // calling the Now Playing api
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
    }


}

export default usePopularMovies;