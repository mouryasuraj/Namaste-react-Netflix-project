import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/slices/userSlice'
import { LOGO_URL, multiLanguage } from "../utils/constant"
import { useSelector } from "react-redux"
import useLogin from "../hooks/useLogin"
import Loader from "./Loader"
import { toggleGPTSearch } from "../utils/slices/gptSlice"
import { changeLanguage } from "../utils/slices/configSlice"


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, setLoading } = useLogin()
  const user = useSelector((store) => store.user)
  const showGpt = useSelector((store) => store.gpt.showGPT)


  const handleSignOut = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      signOut(auth)
    }, 600);
  }

  const handleGptSearch = () => {
    dispatch(toggleGPTSearch())
  }

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(true)
        // signIn or signUp
        setTimeout(() => {
          const { uid, email, displayName } = user
          dispatch(addUser({ uid, email, displayName }))
          navigate('/browse')
          setLoading(false)
        }, 600);
      } else {
        setLoading(true)
        // signOut
        setTimeout(() => {
          dispatch(removeUser())
          navigate('/')
          setLoading(false)
        }, 600);
      }
    })
    return () => unsubscribe()
  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */


  return (
    <div className={`w-full z-[100] sm:px-8 py-2  px-3 top-0 flex items-center lg:justify-center ${user && 'md:bg-gradient-to-b md:from-black bg-gradient-to-b from-black to-black'}`}>
      <div className='md:w-[80%] w-[100%] flex items-center justify-between'>
        <Link to={`${user && '/browse'}`}><img className='sm:w-[190px] w-[120px] cursor-pointer' src={LOGO_URL} alt="" /></Link>
        {
          user &&
          <div className="flex items-center gap-2 md:gap-4">
            {showGpt &&
              <select className="px-1 py-1 outline none focus:border-[1px] rounded-sm bg-transparent text-white" onChange={handleChangeLanguage}>
                {
                  multiLanguage.map(lang => (
                    <option className="bg-transparent text-black" key={lang?.identifier} value={lang?.identifier}>{lang.name}</option>
                  ))
                }
              </select>}
            <button onClick={handleGptSearch} className="text-white md:px-4 md:text-lg text-xs px-2 py-2 md:py-2 bg-gray-800 font-bold rounded-sm hover:bg-gray-700">{showGpt ? 'Browse Movies' : 'GPT Search'}</button>
            <p className="font-bold md:text-lg text-sm text-gray-100">{user.displayName}</p>
            <button onClick={handleSignOut} className="text-white md:text-md text-sm bg-red-600 md:py-2 p-1 md:px-4 hover:bg-red-700 rounded-md">SignOut</button>
          </div>
        }
      </div>
      {loading && <div className="fixed top-0 left-0 w-screen z-[100] h-screen"><Loader /></div>}
    </div>
  )
}

export default Header;