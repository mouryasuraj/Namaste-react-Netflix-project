import { useNavigate, Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { auth } from "../../utils/firebase/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../../utils/slices/userSlice'
import { LOGO_URL, multiLanguage } from "../../utils/constant"
import { useSelector } from "react-redux"
import useLogin from "../../hooks/useLogin"
import Loader from "./Loader"
import { toggleGPTSearch } from "../../utils/slices/gptSlice"
import { changeLanguage } from "../../utils/slices/configSlice"


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, setLoading } = useLogin()
  const [showMenu, setShowMenu] = useState(false)
  const showMenuContainer = useRef()
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

  const handleMenu = () => {
    if (showMenu) {
      showMenuContainer.current.style.right = '-200%'
      setShowMenu(false)
    } else {
      showMenuContainer.current.style.right = '0'
      setShowMenu(true)
    }
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
    <div className={`w-full z-[100] sm:px-8 py-2  px-3 flex items-center md:justify-between lg:justify-center fixed top-0 left-0 ${user && 'md:bg-gradient-to-b md:from-black bg-gradient-to-b from-black to-black'}`}>
      <div className='md:w-[80%] w-[100%] flex items-center justify-between'>
        <Link to={`${user && '/browse'}`}><img className='sm:w-[190px] w-[120px] cursor-pointer' src={LOGO_URL} alt="" /></Link>
        {
          user && <div className="relative">
            <i onClick={handleMenu} className="fa-solid fa-bars text-[28px] mr-2 cursor-pointer text-white block md:hidden"></i>
            <div ref={showMenuContainer} className="flex-col md:flex-row md:w-fit w-[50%] md:h-0 h-screen md:bg-transparent md:relative fixed md:top-0 md:right-0 top-0 right-[-200%] bg-black items-center md:gap-5 md:py-0 py-20 md:flex md:shadow-none shadow-2xl shadow-white transition-all duration-300">
              <i onClick={handleMenu} className="fa-solid fa-xmark text-[32px] mr-2 cursor-pointer absolute top-5 left-5 text-white block md:hidden"></i>
              {showGpt &&
                <select className="px-1 py-2 ml-4 md:py-1 md:my-0 my-3 md:w-fit w-[80%] outline none focus:border-[1px] rounded-sm bg-transparent text-white" onChange={handleChangeLanguage}>
                  {
                    multiLanguage.map(lang => (
                      <option className="bg-transparent text-black" key={lang?.identifier} value={lang?.identifier}>{lang.name}</option>
                    ))
                  }
                </select>}
              <button onClick={handleGptSearch} className="text-white md:px-4 md:text-lg text-md px-2 py-2 md:py-2 md:bg-gray-800 font-bold rounded-sm md:hover:bg-gray-700 md:w-fit w-full bg-red-600 ">{showGpt ? 'Browse Movies' : 'GPT Search'}</button>
              <p className="font-bold md:text-lg text-md md:py-0 py-2 md:border-0 border-b-2 border-t-2 border-black text-gray-100 md:bg-transparent bg-red-600 md:w-fit w-full text-center">{user.displayName}</p>
              <button onClick={handleSignOut} className="md:text-white font-bold md:text-md text-md md:bg-red-600 bg-white w-full md:w-fit py-2 md:px-4 hover:bg-red-700 md:rounded-md">SignOut</button>
            </div>
          </div>

        }
      </div>
      {loading && <div className="fixed top-0 left-0 w-screen z-[100] h-screen"><Loader /></div>}
    </div>
  )
}

export default Header;