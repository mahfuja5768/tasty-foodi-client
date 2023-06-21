import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaUserAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReview = ({ myReview, handleDelete }) => {
  console.log(myReview);

  const { user } = useContext(AuthContext);
  const { email, review, rating, img, food, serviceName, date, _id } = myReview;

  return (
    <div>
      <div className="bg-pink-200 card w-full bg-base-100 shadow-2xl  mb-5 ">
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
              <h1 className="text-xl font-bold">Person email: {email}</h1>
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
            <button
              onClick={() => handleDelete(_id)}
              className="ms-3 btn btn-outline text-white bg-orange-700"
            >
              {" "}
              <FaTrashAlt></FaTrashAlt>
            </button>
          </div>
        </div>
    </div>
  );
};

export default MyReview;
