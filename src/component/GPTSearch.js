import language from "../utils/languageConstant"
import useGPT from "../hooks/useGPT"
import { useSelector } from "react-redux"

const GPTSearch = () => {

    const { movieResults, movieNames } = useSelector(store => store.gpt)

    const { handleGPTSearch, inputText, langKey } = useGPT()

    return (
        <div>
            <form onSubmit={handleGPTSearch} className="max-w-[800px] md:rounded-md rounded-sm border-[1px] border-gray-400 px-2 mx-auto flex items-center">
                <input ref={inputText} className="w-full max-h-52 outline-none bg-transparent md:px-3 px-2 py-4  font-semibold text-gray-300 md:text-lg text-md placeholder:font-bold" rows={1} type="text" placeholder={language[langKey].gptPlaceHolder} />
                <button className="px-3 py-1 rounded-md bg-white hover:bg-gray-200"><i className="fa-solid fa-arrow-up"></i></button>
            </form>
            {(!movieResults || !movieNames) && <p className="text-gray-200 font-semibold md:text-lg text-sm px-3  py-6 text-center ">No results. Search movies to show results👆.</p>}

        </div>
    )
}

export default GPTSearch
