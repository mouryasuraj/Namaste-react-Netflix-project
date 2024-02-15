import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MovieContainer from "./MovieContainer"
import MoviesListContainer from "./MoviesListContainer"

const Browse = () => {

  // Custom Hook
  useNowPlayingMovies()

  return (
    <div className="h-screen">
      <div className="flex items-center w-full">
        <Header />
      </div>
      <MovieContainer />
      <MoviesListContainer />
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
