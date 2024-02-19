import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/slices/moviesSlice";


const useUpComingMovies = () => {
    const dispatch = useDispatch()
    const upComingMovies = useSelector(store => store.movies.upComingMovies)

    // calling the above function in the useEffect hook, because we want this api calls once at initial time when my component render
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        !upComingMovies && getUpComingMovies()
        return () => dispatch(addUpComingMovies(null))
    }, [])
    /* eslint-enable react-hooks/exhaustive-deps */

    // calling the Now Playing api
    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)
        const json = await data.json()
        dispatch(addUpComingMovies(json.results))
    }


}

export default useUpComingMovies;