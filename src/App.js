import Body from "./component/Body";
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import Browse from "./component/Browse";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/browse',
        element: <Browse />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
      <Outlet />
      </RouterProvider>
    </Provider>
  );
}

export default App;
