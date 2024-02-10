import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './Login'
import Browse from './Browse'
import SignUp from "./SignUp"

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/sign-up',
      element: <SignUp />
    },
  ])

  return (
    <RouterProvider router={appRouter}>
      <div>

      </div>
    </RouterProvider>
  )
}

export default Body
