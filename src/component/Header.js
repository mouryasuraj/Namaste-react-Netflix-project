import { useNavigate } from "react-router-dom"
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
    <div className='w-full sm:px-8  px-3 top-0 flex items-center lg:justify-center bg-gray-900'>
      <div className='sm:w-[80%] w-[100%] flex items-center justify-between'>
        <img className='sm:w-[190px] w-[130px] cursor-pointer' src={LOGO_URL} alt="" />
        <div className="flex items-center gap-4">
          {user && <p className="font-bold text-lg text-gray-100">{user.displayName}</p>}
          {user && <button onClick={handleSignOut} className="text-white text-md bg-red-600 py-2 px-4 hover:bg-red-700 rounded-md">SignOut</button>}
        </div>
      </div>
    </div>
  )
}

export default Header;
