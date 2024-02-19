import Body from "./component/Body/Body";
import { Provider } from 'react-redux'
import appStore from './utils/store/appStore'
import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Login from "./component/Body/Login/Login";
import Browse from "./component/Browse/Browse";
import GPTSearch from "./component/Browse/GPTSearch/GPTSearch";

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
      },
      {
        path: '/',
        element: <GPTSearch />
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
