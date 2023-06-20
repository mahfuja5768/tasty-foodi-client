import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("food-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          return logOut();
        }
        return res.json();
      })
      .then((data) =>{
        console.log(data);
        setReviews(data)
      })
  }, [user?.email]);


  return (
    <div>
      {
        reviews.map(myReview=> <MyReview key={myReview._id} myReview={myReview}></MyReview>)
      }
    </div>
  );
};

export default MyReviews;
