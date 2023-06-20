import React, { useContext } from "react";
import {} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const AddReviews = ({ details }) => {
  const { title, _id, img } = details || {};
  const {user} = useContext(AuthContext);

  console.log(details);

  const handlePlaceReview = event => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email || "unregister";
    const review = form.review.value;
    const rating = form.rating.value;
    const date = form.date.value;
    // console.log(email, review, rating);

    const order = {
        food: _id,
        serviceName: title,
        email,
        review,
        rating,
        img,
        date
      };


      fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully order placed.");
          // console.log(data);
          form.reset();
        }
      })
      .catch((err) => console.log(err));


  };


  return (
    <div className="pt-5 mb-5">
      <form onSubmit={handlePlaceReview}>
        <h2 className="text-2xl font-bold mb-4">
          You want to add review about:{" "}
          <span className="text-orange-600">{title}</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered input-error w-full"
            readOnly
          />
            <input
              name="rating"
              type="text"
              placeholder="Rating of food"
              className="input input-bordered input-error w-full"
              required
            />
          <input
            name="date"
            type="date"
            placeholder="Date"
            className="input input-bordered input-error w-full"
            required
          />
          <input
          name="review"
          type="text"
          className="input input-bordered input-error w-full"
          placeholder="Your review"
          required
        ></input>
        </div>
        
        <input
          className="mt-5 btn bg-orange-700 text-white font-bold"
          type="submit"
          value="Place your review"
        />
      </form>
    </div>
  );
};

export default AddReviews;
