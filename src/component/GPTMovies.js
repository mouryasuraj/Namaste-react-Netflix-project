import { useSelector } from "react-redux"
import useGPT from "../hooks/useGPT";
import MovieList from "./MovieList";
import Loader from "./Loader";

const GPTMovies = () => {
    const { isUserSearch } = useGPT()

    const { movieResults, movieNames } = useSelector(store => store.gpt)
    if (!movieNames || !movieResults) return <p className="text-gray-200 font-semibold md:text-lg text-sm px-3  py-6 text-center ">No results. Search movies to show results👆.</p>

    return isUserSearch ? <div className="fixed w-screen h-screen z-[100] top-0 left-0"><Loader /></div> : (
        <div className="text-white mt-20 md:px-10">

            {
                movieNames.map((movie, index) => (
                    <MovieList key={movie} title={movie} movies={movieResults[index]} />
                ))
            }
        </div>
    )
}

export default GPTMovies
