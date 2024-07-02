import React from "react";

const BannerUi = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className=" mx-[10vh] text-center mt-20">
          <div><h1 className="text-7xl font-extralight">
            Rent your favorite car in Easy steps.
          </h1>
          <h1 className="font-sans text-gray-400 text-2xl mb-5 mt-3">
            Get a car wherever and whenever you need it with your iOS or Android
            device.
          </h1>
          </div>
          <div className="flex gap-5 mx-5">
               <img src="https://i.ibb.co/RNWYJsB/App-Store.png" alt="" />
               <img src="https://i.ibb.co/chLqhYV/Google-Play.png" alt="" />
          </div>
        </div>
        {/* img */}
        <div>
          <img className="w-[80vh] mx-5" src="https://i.ibb.co/TgZcZsR/car-png-16828-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerUi;
