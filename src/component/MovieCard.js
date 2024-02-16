import { CDN_MOVIE_POSTER } from "../utils/constant"

const MovieCard = ({ posterPath }) => {
    return (
        <div className="md:w-[200px] w-[150px]">
            <img className="w-[100%] rounded-md" src={CDN_MOVIE_POSTER + posterPath} alt="" />
        </div>
    )
}

export default MovieCard
