import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./Layout/MainLayOut";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayOut></MainLayOut>,
            children: [
                  {
                        path:'/',
                        element: <Home></Home>
                  }
            ]
      }
])

export default router