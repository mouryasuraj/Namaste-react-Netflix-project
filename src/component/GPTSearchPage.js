import GPTMovies from "./GPTMovies"
import GPTSearch from "./GPTSearch"

const GPTSearchPage = () => {
    return (
        <div className="w-screen min-h-screen bg-gray-800 md:pt-36 pt-24 px-2">
            <GPTSearch />
            <GPTMovies />
        </div>
    )
}

export default GPTSearchPage
