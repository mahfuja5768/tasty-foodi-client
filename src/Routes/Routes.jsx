import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import FoodServices from "../Pages/Home/FoodServices/FoodServices";
import AllFoods from "../Pages/AllFoods/AllFoods";
import FoodDetailsPage from "../Pages/FoodDetailsPage/FoodDetailsPage";
import AddReviews from "../Pages/AddReviews/AddReviews";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AllReviews from "../Pages/AllReviews/AllReviews";
import MyReviews from "../Pages/MyReviews/MyReviews";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/foodServices",
        element: <FoodServices></FoodServices>,
      },
      {
        path: "/allfoods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/foodsDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
        element: <FoodDetailsPage></FoodDetailsPage>,
      },
      {
        path: "/addReviews",
        element: <PrivateRoute><AddReviews></AddReviews></PrivateRoute>,
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>
      },
      {
        path: "/myReviews",
        element: <MyReviews></MyReviews>
      },
    ],
  },
  {
    path:'*', element:<div className="text-center font-bold mt-20 text-5xl text-orange-500"><h1>Sorry! 404 Page not found!</h1></div>
   },
]);
