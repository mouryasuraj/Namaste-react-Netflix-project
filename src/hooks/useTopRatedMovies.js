import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/slices/moviesSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)


    // calling the above function in the useEffect hook, because we want this api calls once at initial time when my component render
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        !topRatedMovies && getTopRatedMovies()
        return () => dispatch(addTopRatedMovies(null))
    }, [])
    /* eslint-enable react-hooks/exhaustive-deps */

    // calling the Now Playing api
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))
    }


}

export default useTopRatedMovies;