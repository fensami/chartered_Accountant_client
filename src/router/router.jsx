import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/HomePages/home/Home";
import Details from "../Pages/DetailsPage/Details";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details',
        element: <Details></Details>
      }
    ]
  },
]);