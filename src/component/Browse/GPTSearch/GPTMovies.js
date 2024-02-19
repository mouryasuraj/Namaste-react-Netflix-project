import { useSelector } from "react-redux"
import MovieList from "../MoviesContainer/MovieList";


const GPTMovies = () => {



    const { movieResults, movieNames } = useSelector(store => store.gpt)
    if (!movieNames || !movieResults) return null

    return (
        <div className="text-white mt-20 md:px-10">

            {
                movieNames.map((movie, index) => (
                    !movieResults[index] ? null :
                        <MovieList key={movie} title={movie} movies={movieResults[index]} />
                ))
            }
        </div>
    )
}

export default GPTMovies
