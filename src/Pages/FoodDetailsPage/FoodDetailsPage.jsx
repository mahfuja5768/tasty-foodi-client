import { Link, useLoaderData } from "react-router-dom";
import AllReviews from "../AllReviews/AllReviews";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const FoodDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();

  const { img, description, price, title } = details || {};

  return (
    <div>
      <div className="mb-10">
        <div className="bg-pink-200 card w-full bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="" />
          </figure>
          <div className="card-body">
            <hr />
            <h2 className="card-title text-xl font-bold text-orange-600">
              Name: {title}
            </h2>
            <p>{description}</p>
            <p className="text-md font-semibold text-orange-600 ">
              Price: ${price}
            </p>
            {user?.uid ? (
              <Link to="/addReviews">
                <button className="btn bg-orange-700 text-white font-bold">
                  Add reviews
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn bg-orange-700 text-white font-bold">
                  Add reviews
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div>{<AllReviews></AllReviews>}</div>
    </div>
  );
};

export default FoodDetailsPage;
