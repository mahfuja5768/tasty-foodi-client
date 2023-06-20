import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServicesCard = ({foodsCard}) => {
    // console.log(foodsCard);

    const {food_id, _id, img, description, price, title} = foodsCard;

    return (
        <div className="card w-96 bg-base-100 shadow-xl p-4">
      <figure>
        {/* <PhotoProvider>
            <PhotoView src={img}>
            <img
          src={img}
          alt=""
        />
            </PhotoView>
        </PhotoProvider> */}
         <img
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
      <hr />
        <h2 className="card-title text-2xl font-bold text-orange-600">{title}</h2>
        <>
        {description.length > 100 ? (
                    <p>
                      {description.slice(0, 100) + " ...."}
                    </p>
                  ) : (
                    <p>{description}</p>
                  )}
        </>
        <p className="text-md font-semibold text-orange-600 ">Price: ${price}</p>
        <div className="card-actions justify-end">
          <div className="text-black-600 font-bold flex justify-between items-center">
             <p className="me-3">Details</p>
            <Link to={`/foodsDetails/${_id}`}>
            <FaArrowRight className="cursor-pointer text-orange-600"></FaArrowRight>
            </Link>
             </div>
        </div>
      </div>
    </div>
    );
};

export default ServicesCard;