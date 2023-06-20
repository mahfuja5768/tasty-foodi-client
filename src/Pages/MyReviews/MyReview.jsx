import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";


const MyReview = ({myReview}) => {
    console.log(myReview)

    const {user} = useContext(AuthContext);
    const { email, review, rating, img, food, serviceName, date } = myReview;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-2xl  mb-5 ">
        <div className="flex items-center justify-around">
          <div className="flex items-center">
            <div>
              <figure>
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    style={{ height: "40px" }}
                    title={user?.displayName}
                  ></img>
                ) : (
                  <FaUserAlt className="bg-black-600 w-24 rounded-full"></FaUserAlt>
                )}
              </figure>
            </div>
            <div>
              <h1 className="text-xl font-bold">
                Person email: {email}
              </h1>
              <h1>Date: {date}</h1>
              <h1 className="me-4">Rating: {rating}</h1>
            </div>
          </div>
          <div className="p-5 w-80">
            <p className="card-title text-orange-600 text-xl font-bold">
              Food Name: {serviceName}
            </p>
            <p>Review: {review}</p>
          </div>
          <figure>
            <img
              src={img}
              style={{ height: "100px", width: "100px" }}
              className="w-24 rounded-full"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
