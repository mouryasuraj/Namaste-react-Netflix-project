// LogoURL
export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

// BackgrounImage
export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"

// API Options
export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_OPTION_KEY
    }
};

// Youtube URL
export const YOUTUBE_URL = 'https://www.youtube.com/embed/'

// MovieIMG CDN
export const CDN_MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500/'


// Openai secret Key
export const openAIKey = process.env.REACT_APP_OPENAI_KEY

// Key for GPT
export const key1 = 'Act as a movie recommendation system and suggest some movies for the query '
export const key2 = '. only give me names of 5 movies with comma separated, for example: Gadar, Golmaal, Dhamaal, Phir Hera Pheri, Dhol. If i write any movie name then also show me that movie in the list of movies. Only give movies in string, do not include exta number in it like Example: 1.Hera pheri, Khiladi, etc. always give movies name only'


// Multilanguage
export const multiLanguage = [
    {
        identifier: 'en',
        name: 'English'
    },
    {
        identifier: 'hindi',
        name: 'Hindi'
    },
    {
        identifier: 'spanish',
        name: 'Spanish'
    },
]