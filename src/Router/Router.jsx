import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import HomePage from "../Components/HomePage/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children : [
        {
            path : "/",
            element : <HomePage></HomePage> ,
        },
    ]
    },
  ]);
  export default router ;