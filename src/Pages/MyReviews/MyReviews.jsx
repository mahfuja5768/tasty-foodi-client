import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import MyReview from "./MyReview";
import { toast } from "react-hot-toast";

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
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, [user?.email]);

  const handleUpdateReview = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          console.log(data);
          toast("Review updated.");
        }
      });
  };

  const handleDelete = (id) => {
    const confirmation = confirm("Confirm to delete this?");
    if (confirmation) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast("Successfully deleted.");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      {reviews.map((myReview) => (
        <MyReview
          key={myReview._id}
          myReview={myReview}
          handleDelete={handleDelete}
          handleUpdateReview={handleUpdateReview}
        ></MyReview>
      ))}
    </div>
  );
};

export default MyReviews;
