import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AllFoodsCards = ({ foodsCard }) => {
  const { _id, img, description, price, title } = foodsCard || {};

  return (
    <div>
      <div className="bg-pink-200 card w-96 shadow-xl p-4">
        <figure>
          {/* <PhotoProvider>
            <PhotoView src={img}>
            <img
          src={img}
          alt=""
        />
            </PhotoView>
        </PhotoProvider> */}
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <hr />
          <h2 className="card-title text-xl font-bold text-orange-600">
            {title}
          </h2>
          <p>
            {description.length > 100 ? (
              <p>{description.slice(0, 100) + " ...."}</p>
            ) : (
              <p>{description}</p>
            )}
          </p>
          <p className="text-md font-semibold text-orange-600 ">
            Price: ${price}
          </p>
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
    </div>
  );
};

export default AllFoodsCards;
