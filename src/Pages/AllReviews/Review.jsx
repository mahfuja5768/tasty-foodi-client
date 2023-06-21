import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Review = ({ reviewMassage }) => {
  console.log(reviewMassage);
  const { user } = useContext(AuthContext);
  const { email, review, rating, img, serviceName, date } = reviewMassage || {};
  return (
    <div>
      <div className="bg-pink-200 card w-full bg-base-100 shadow-2xl  mb-5 ">
        <div className=" card-items  md:display: block  lg:flex items-center justify-around p-4">
          <div className="lg:flex items-center md:display: block">
            <div>
              <figure className="me-5 mask mask-squircle">
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
            <div className="w-60">
              <h1 className="text-xl font-bold">Person email: {email}</h1>
              <h1>Date: {date}</h1>
              <h1 className="me-4">Rating: {rating}</h1>
            </div>
          </div>
          <div className="p-5 w-80">
            <p className="card-title text-xl font-bold">
              Food Name: {serviceName}
            </p>
            <p className=" text-orange-600 text-xl font-bold">
              Review: {review}
            </p>
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

export default Review;
