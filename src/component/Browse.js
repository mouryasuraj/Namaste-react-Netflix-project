import Header from "./Header"
import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
const Browse = () => {

  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {

    }).catch(() => {
      navigate('/error')
    })
  }

  return (
    <div className=" h-screen">
      <div className="flex items-center border-b-2 shadow-lg shadow-slate-200">
        <Header />
        <div className="text-white flex items-center gap-3 pr-5">
          <button onClick={handleSignOut} className=" text-md bg-red-600 py-2 px-4 hover:bg-red-700 rounded-md">SignOut</button>
        </div>
      </div>
      {user && <p className="text-xl font-bold m-5">Welcome, {user.displayName}</p>}
      <p className="m-5 font-bold ">Now, click on signout button and get the fuck out of here.</p>
    </div>
  )
}

export default Browse
