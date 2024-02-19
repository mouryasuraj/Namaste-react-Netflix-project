import { useEffect } from "react"
import GPTMovies from "./GPTMovies"
import GPTSearch from "./GPTSearch"
import { useDispatch } from "react-redux"
import { addGPtResults } from '../../../utils/slices/gptSlice'

const GPTSearchPage = () => {
    const dispatch = useDispatch()

    /*eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        return () => {
            dispatch(addGPtResults({ movieResults: null, movieNames: null }))
        }
    }, [])
    /*eslint-enable react-hooks/exhaustive-deps */

    return (
        <div className="w-screen min-h-screen bg-gray-800 md:pt-36 pt-24 px-2">
            <GPTSearch />
            <GPTMovies />
        </div>
    )
}

export default GPTSearchPage