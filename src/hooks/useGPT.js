import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import openai from "../utils/OpenAI/openAi"
import { key1, key2 } from "../utils/constant"
import { options } from "../utils/constant"
import { addGPtResults } from "../utils/slices/gptSlice"

const useGPT = () => {
    const dispatch = useDispatch()
    const inputText = useRef(null)
    const langKey = useSelector(store => store.confige.lang)


    // HandleGPTsearch
    const handleGPTSearch = async (e) => {
        e.preventDefault()
        if (inputText.current.value === '') return alert('Please write something')
        const query = key1 + inputText.current.value + key2;
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        });
        const gptAPIResults = gptResult?.choices[0]?.message?.content.split(",")
        const fetchedMovies = gptAPIResults.map((movie) => fetchTMDBMovies(movie))  //It will give me the promise
        const movieResults = await Promise.all(fetchedMovies)
        dispatch(addGPtResults({ movieResults: movieResults, movieNames: gptAPIResults }))
    }

    // FetchGPTSearchedMoviesFromTMDB
    const fetchTMDBMovies = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options)
        const json = await data.json()
        return json?.results;
    }

    return { langKey, inputText, handleGPTSearch }
}

export default useGPT;