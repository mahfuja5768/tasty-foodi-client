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
import MyReview from "../Pages/MyReviews/MyReview";
import MyReviews from "../Pages/MyReviews/MyReviews";

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
        element: <AddReviews></AddReviews>,
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
]);
