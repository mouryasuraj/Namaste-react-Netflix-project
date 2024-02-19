import Header from "../Header/Header"
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"
import MovieContainer from "./MoviesContainer/MovieContainer"
import MoviesListContainer from "./MoviesContainer/MoviesListContainer"
import usePopularMovies from "../../hooks/usePopularMovies"
import useTopRatedMovies from "../../hooks/useTopRatedMovies"
import useUpComingMovies from "../../hooks/useUpComingMovies"
import { useSelector } from "react-redux"
import GPTSearchPage from "./GPTSearch/GPTSearchPage"


const Browse = () => {

  const showGPT = useSelector(store => store.gpt.showGPT)

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
      {
        showGPT ?
          <GPTSearchPage /> :
          <div>
            <div className="md:ml-[-17px]">
              <MovieContainer />
            </div>
            <MoviesListContainer />
          </div>}
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
