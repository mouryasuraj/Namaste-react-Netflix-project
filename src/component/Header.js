import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/slices/userSlice'
import { LOGO_URL } from "../utils/constant"
import { useSelector } from "react-redux"
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // signIn or signUp
        const { uid, email, displayName } = user
        dispatch(addUser({ uid, email, displayName }))
        navigate('/browse')
      } else {
        // signOut
        dispatch(removeUser())
        navigate('/')
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className={`w-full z-[100] sm:px-8  px-3 top-0 flex items-center lg:justify-center ${user && 'md:bg-gradient-to-b md:from-black bg-gradient-to-b from-black to-black'}`}>
      <div className='md:w-[80%] w-[100%] flex items-center justify-between'>
        <Link to={`${user && '/browse'}`}><img className='sm:w-[190px] w-[120px] cursor-pointer' src={LOGO_URL} alt="" /></Link>
        <div className="flex items-center gap-4">
          {user && <p className="font-bold md:text-lg text-gray-100">{user.displayName}</p>}
          {user && <button onClick={handleSignOut} className="text-white md:text-md text-sm bg-red-600 md:py-2 p-1 md:px-4 hover:bg-red-700 rounded-md">SignOut</button>}
        </div>
      </div>
    </div>
  )
}

export default Header;