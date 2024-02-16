import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/slices/moviesSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch()


    // calling the above function in the useEffect hook, because we want this api calls once at initial time when my component render
    useEffect(() => {
        getTopRatedMovies()
        return ()=> dispatch(addTopRatedMovies(null))
    }, [])

    // calling the Now Playing api
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))
    }


}

export default useTopRatedMovies;