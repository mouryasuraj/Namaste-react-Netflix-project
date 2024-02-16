import useMoviesVideo from "../hooks/useMoviesVideo"
import { useSelector } from "react-redux"
import { YOUTUBE_URL } from "../utils/constant"

const VideoBackground = ({ movieId }) => {
    useMoviesVideo(movieId)
    const moviesVideos = useSelector((store) => store.movies.moviesVideos)
    if (!moviesVideos) return

    const filterTrailer = moviesVideos.filter((video) => video.type === 'Trailer')
    const trailer = filterTrailer.length ? filterTrailer[0] : moviesVideos[0]


    // customHook

    return (
        <div className="w-screen aspect-video">
            <iframe
                className="w-[100%] aspect-video block"
                src={YOUTUBE_URL + trailer?.key + `?autoplay=1&loop=1&playlist=${trailer.key}&mute=1`}
                title="YouTube video player"
                allow="autoplay; encrypted-media;" />
        </div>
    )
}

export default VideoBackground
