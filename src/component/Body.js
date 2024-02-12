import { Outlet, useNavigate } from "react-router-dom"
// import Login from './Login'
// import Browse from './Browse'
import { useEffect } from "react"
import { auth } from "../utils/firebase"
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/slices/userSlice'

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, [])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Body
