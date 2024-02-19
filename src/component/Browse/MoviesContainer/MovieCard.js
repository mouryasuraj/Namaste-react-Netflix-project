import { CDN_MOVIE_POSTER } from "../../../utils/constant"

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null
    return (
        <div className="md:w-[200px] md:h-[300px] w-[150px]">
            <img className="w-[100%] h-full object-cover rounded-md" src={CDN_MOVIE_POSTER + posterPath} alt="" />
        </div>
    )
}

export default MovieCard
