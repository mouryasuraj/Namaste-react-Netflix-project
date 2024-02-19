import MovieList from "./MovieList"
import { useSelector } from "react-redux"


const MoviesListContainer = () => {

  const { nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies } = useSelector((store) => store.movies)

  return (nowPlayingMovies && popularMovies && topRatedMovies && upComingMovies) && (
    <div className="md:py-4 md:px-5 py-2 px-2 flex flex-col gap-4 lg:-mt-[300px] text-white relative">
      <MovieList title='Now Playing' movies={nowPlayingMovies} />
      <MovieList title='Popular' movies={popularMovies} />
      <MovieList title='Top Rated' movies={topRatedMovies} />
      <MovieList title='Upcoming' movies={upComingMovies} />
    </div>
  )
}

export default MoviesListContainer


// Structure of MovielistContainer
/*
1.Movie list of Popular
   Moviecard * n
2.Movie list of Now Playing
   Moviecard * n
3.Movie list of Upcoming
   Moviecard * n
*/