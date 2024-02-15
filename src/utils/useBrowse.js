import { useEffect } from "react";
import { options } from "./constant";
const useBrowse = () => {

    // calling the Now Playing api
    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', options)
        const json = await data.json()
        console.log(json.results);
    }

    // calling the above function in the useEffect hook, because we want this api calls once at initial time when my component render
    useEffect(() => {
        getNowPlaying()
    }, [])

}

export default useBrowse;