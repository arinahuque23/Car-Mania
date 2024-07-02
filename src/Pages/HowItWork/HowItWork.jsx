import React from "react";

const HowItWork = () => {
  return (
    <div className="mt-20">
     {/* add new comment */}
      <div>
        <h1 className="text-xl text-center text-gray-400">HOW IT WORK</h1>
        <h1 className="text-4xl text-center mb-20">Rent your desired car with following 3 working steps</h1>
      </div>
      <div className="grid grid-cols-3 ">
          <div className="items-center justify-center text-center " style={''}>
               <img className="ml-[30vh] mb-10" src="https://i.ibb.co/C7K2YrX/location.png" alt="" />
          <h1 className="text-xl font-bold">Pick Your location</h1>
          <h1>Choose your location and find your best car.</h1>
          <h1>hjdhsdhsd</h1>
          </div>
          <div className="items-center justify-center text-center">
               <img src="https://i.ibb.co/C7K2YrX/location.png" alt="" />
          <h1>Pick Your location</h1>
          <h1>Choose your location and find your best car.</h1>
          </div>
          <div className="items-center justify-center text-center">
               <img src="https://i.ibb.co/C7K2YrX/location.png" alt="" />
          <h1>Pick Your location</h1>
          <h1>Choose your location and find your best car.</h1>
          </div>
      </div>
    </div>
  );
};

export default HowItWork;
