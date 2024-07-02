import React from "react";

const BannerBottom = () => {
  return (
    <div>
      {/* bottom of banner  */}
      <div className="mx-20 mt-5 ">
        <div className=" text-2xl grid grid-cols-3 border mx-5 rounded-lg shadow h-[10vh]">
          <div className=" mt-5 ml-5">
            <h1 className="font-serif">Location</h1>
            <h1 className="text-gray-300">Search your location..</h1>
          </div>
          <div className="border-l-2 mt-5 mb-2 border-gray-300">
            <h1 className="ml-5">PICKUP DATE</h1>
            <h1  className="ml-5">Tue 15 Feb, 09:00</h1>
          </div>
          <div className="border-l-2 lg:mt-5 mb-2 border-gray-300 flex  gap-5">
            <div>
            <h1  className="ml-5">RETURN DATE</h1>
            <h1  className="ml-5">Thu 16 Feb, 11:00</h1>
            </div>
            <div>
               <button type="btn " className="bg-teal-400 w-36 h-20 rounded-xl ml-[15vh] text-center text-white justify-end ">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
