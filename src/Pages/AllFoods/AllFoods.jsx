import React, { useEffect, useState } from "react";
import AllFoodsCards from "./AllFoodsCards";

const AllFoods = () => {
  const [foodsServices, setFoodsServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodsServices(data);
      });
  }, []);

  return (
    <div>
      <div className="mb-5">
        <div className="text-center mb-4">
          <p className="text-4xl font-bold text-orange-600  mb-4 mt-20">
            Take a look of <br /> what you want to order now!
          </p>
          <p className="w-1/2 mx-auto mb-10">
            The service is designed to cater to busy individuals who don’t have
            the time to cook or those who want to enjoy a home-cooked meal
            without having to prepare it themselves.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodsServices.map((foodsCard) => (
            <AllFoodsCards
              key={foodsCard._id}
              foodsCard={foodsCard}
            ></AllFoodsCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
