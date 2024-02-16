import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MovieContainer from "./MovieContainer"
import MoviesListContainer from "./MoviesListContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpComingMovies from "../hooks/useUpComingMovies"

const Browse = () => {

  // Custom Hook
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()


  return (
    <div className="bg-black ">
      <div className="flex items-center absolute top-0 w-full">
        <Header />
      </div>
      <div>
        <div className="md:ml-[-17px]">
          <MovieContainer />
        </div>
        <MoviesListContainer />
      </div>
    </div>
  )
}

export default Browse













// Plan how to structure our app
/*
Browse component has two parts
Movie-container:
     - BackgroundVideo(tailer of promoted site)
     - Title of the bg videos
Secondary-container:
     - Movielist * n
          - Movie Cards * n

 */
