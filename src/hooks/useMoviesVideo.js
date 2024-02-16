import { useEffect } from "react"
import { options } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addMoviesVideos } from "../utils/slices/moviesSlice"

const useMoviesVideo = (movieId) => {
    const dispatch = useDispatch()

    useEffect(() => {
        fetchMoviesVideo()
        return () => dispatch(addMoviesVideos(null))
    }, [])

    const fetchMoviesVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        const json = await data.json()
        dispatch(addMoviesVideos(json.results))
    }


}

export default useMoviesVideo;