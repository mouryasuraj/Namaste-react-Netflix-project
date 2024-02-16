import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/slices/moviesSlice";


const useUpComingMovies = () => {
    const dispatch = useDispatch()


    // calling the above function in the useEffect hook, because we want this api calls once at initial time when my component render
    useEffect(() => {
        getUpComingMovies()
        return () => dispatch(addUpComingMovies(null))
    }, [])

    // calling the Now Playing api
    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)
        const json = await data.json()
        dispatch(addUpComingMovies(json.results))
    }


}

export default useUpComingMovies;