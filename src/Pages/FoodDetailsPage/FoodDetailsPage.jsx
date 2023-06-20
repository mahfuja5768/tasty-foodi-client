import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AddReviews from "../AddReviews/AddReviews";
import AllReviews from "../AllReviews/AllReviews";

const FoodDetailsPage = () => {
  const details = useLoaderData();

  const { food_id, _id, img, description, price, title } = details;

  return (
    <div>
      <div className="mb-10">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="" />
          </figure>
          <div className="card-body">
            <hr />
            <h2 className="card-title text-xl font-bold text-orange-600">
             Name:  {title}
            </h2>
            <p>{description}</p>
            <p className="text-md font-semibold text-orange-600 ">
              Price: ${price}
            </p>
             <Link to='/addReviews'>
             <button  className="btn bg-orange-700 text-white font-bold">Add reviews</button>
             </Link>
          </div>
        </div>
      </div>

       <div>
        {
          <AllReviews></AllReviews>
        }
       </div>

      <div>
      
        <AddReviews key={details._id} details={details}></AddReviews>
    
      </div>

    </div>
  );
};

export default FoodDetailsPage;
