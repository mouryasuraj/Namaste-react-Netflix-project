
import MovieCard from "./MovieCard"


const MovieList = ({ title, movies }) => {

    return (
        <div className="">
            <h1 className="font-bold md:text-2xl text-xl my-4">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex gap-3">
                    {
                        movies.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList
