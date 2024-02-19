import { useEffect } from "react"
import { options } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addMoviesVideos } from "../utils/slices/moviesSlice"

const useMoviesVideo = (movieId) => {
    const dispatch = useDispatch()
    const moviesVideos = useSelector(store => store.movies.moviesVideos)


    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        !moviesVideos && fetchMoviesVideo()
        return () => dispatch(addMoviesVideos(null))
    }, [])
    /* eslint-enable react-hooks/exhaustive-deps */

    const fetchMoviesVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        const json = await data.json()
        dispatch(addMoviesVideos(json.results))
    }


}

export default useMoviesVideo;