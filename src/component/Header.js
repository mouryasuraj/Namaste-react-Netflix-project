import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { auth } from "../utils/firebase"
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/slices/userSlice'
import { LOGO_URL } from "../utils/constant"
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    <div className='w-full sm:px-8 sm:py-3 px-3 py-4 top-0 flex items-center lg:justify-center'>
      <div className='sm:w-[80%] flex items-center justify-between'>
        <img className='sm:w-[210px] w-[130px] cursor-pointer' src={LOGO_URL} alt="" />
        <div></div>
      </div>
    </div>
  )
}

export default Header;
