import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Review from "./Review";

const AllReviews = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log('received ',data);
        setReviews(data);
      });
  }, []);

  return (
    <div className="">
      {
        reviews.map(reviewMassage => <Review key={reviewMassage._id} reviewMassage={reviewMassage}></Review>)
      }
    </div>
  )
};

export default AllReviews;
