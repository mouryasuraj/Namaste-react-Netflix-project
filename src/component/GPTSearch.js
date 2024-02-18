import language from "../utils/languageConstant"
import { useSelector } from "react-redux"

const GPTSearch = () => {

    const langKey = useSelector(store => store.confige.lang)

    const handleGPTSearch = (e) => {
        e.preventDefault()
    }

    return (
        <div className="w-screen min-h-screen bg-gray-800 md:pt-36 pt-24 px-2">
            <form onClick={handleGPTSearch} className="max-w-[800px] md:rounded-md rounded-sm border-[1px] border-gray-400 px-2 mx-auto flex items-center">
                <input className="w-full max-h-52 outline-none bg-transparent md:px-3 px-2 py-4  font-semibold text-gray-300 md:text-lg text-md placeholder:font-bold" rows={1} type="text" placeholder={language[langKey].gptPlaceHolder} />
                <button className="px-3 py-1 rounded-md bg-white hover:bg-gray-200"><i className="fa-solid fa-arrow-up"></i></button>
            </form>
        </div>
    )
}

export default GPTSearch
