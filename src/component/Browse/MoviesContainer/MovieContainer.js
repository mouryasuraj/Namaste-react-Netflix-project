import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"
import { useSelector } from "react-redux"

const MovieContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if (!movies) return   // or if(movies === null ) I have done early return because when it render the movies is null then after redux updated our movies get the data
    // const randomTrailerIndex = Math.floor((Math.random() * (20 + 1)) + 0);
    const mainMovie = movies[1];
    const { id, original_title, overview, title, } = mainMovie

    return (
        <div className="w-screen relative top-0">
            <VideoTitle originalTitle={original_title} title={title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MovieContainer
