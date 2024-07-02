import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="  mt-32 mb-10 bg-gray-50 lg:h-[60vh]">
     <div className="flex  gap-20 mx-auto max-w-[130vh]">
     <div className="bg-white">
        <img className="" src="https://i.ibb.co/Q89CS59/Image-1.png" alt="" />
      </div>
      <div>
        <h1 className="text-xl text-gray-300 font-serif mt-16">Why choose us</h1>
        <h1 className="text-3xl">Get the best experience of rental cars</h1>
        <div>
          <div className="flex mt-10">
            {" "}
            <img className="w-14 h-14" src="https://i.ibb.co/jVJjjwD/wallet.png" alt="" />
            <div className="">
              <h1 className="text-xl"> Cheapest Market Price Guaranteed</h1>
              <h1 className="text-gray-400">We refund 100% if you find cheaper alternative</h1></div>
          </div>
          <div className="flex mt-10">
            {" "}
            <img className="w-14 h-14" src="https://i.ibb.co/cxSsj4n/profile.png" alt="" />
            <div className="">
              <h1 className="text-xl">Same Day Delivery</h1>
              <h1 className="text-gray-400">We refund 100% if you find cheaper alternative</h1></div>
          </div>
          <div className="flex mt-10">
            {" "}
            <img className="w-14 h-14" src="https://i.ibb.co/ySCBJsb/24.png" alt="" />
            <div className="">
              <h1 className="text-xl"> Cheapest Market Price Guaranteed</h1>
              <h1 className="text-gray-400">We refund 100% if you find cheaper alternative</h1></div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default WhyChooseUs;
