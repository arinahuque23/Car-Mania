import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const PopularRentalDeals = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/public/car.json")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching car data:", error));
  }, []);

  return (
    <div>
      <div>
        <h1 className="mt-32 text-2xl text-gray-300 text-center">
          Popular rental deals
        </h1>
        <h1 className="mb-16 text-4xl text-black text-center">
          Most popular car rental deals
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={car.image_url}
              alt={car.car_model}
              className="w-[30vh] h-48 object-cover mb-4 rounded"
            />
            <div className="text-center">
              <p className="mb-2 flex items-center justify-center text-yellow-500">
                <img
                  className="w-4 mr-1"
                  src="https://cdn-icons-png.flaticon.com/256/1828/1828884.png"
                  alt="star icon"
                />
                {car.rating} ({car.reviews} Reviews)
              </p>
              <h2 className="text-xl font-bold mb-2">{car.car_model}</h2>
              <p className="text-gray-600 mb-2">{car.location}</p>
              <div className="flex justify-around w-full mb-2">
                <div className="flex items-center">
                  <img
                    className="w-5 mr-1"
                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                    alt="passengers icon"
                  />
                  <span>{car.passengers} Passengers</span>
                </div>
                <div className="flex items-center">
                  <span className="material-icons ml-2"><img className="ml-3" src="https://i.ibb.co/J7XzhNW/Group-11.png" alt="" /></span>
                  <span>{car.transmission}</span>
                </div>
              </div>
              <div className="flex justify-around w-full mb-2">
                <div className="flex items-center">
                  {/* <span className="material-icons mr-1">ac_unit</span>
                  <span>Air Conditioning</span> */}
                </div>
                <div className="flex items-center">
                  {/* <span className="material-icons mr-1">directions_car</span> */}
                  <span>{car.features.join(", ")}</span>
                </div>
              </div>
              <p className="mb-2 text-xl font-semibold">
                Rs.{car.price_per_day} /day
              </p>
              <button className="text-blue-600 underline">{car.availability}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16 mb-20">
        <button className="flex text-black bg-white rounded-2xl py-2 px-4 text-xl border hover:bg-gray-300">
         <span> Show All Vehicles</span> <FaArrowRight className="mt-1 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PopularRentalDeals;
