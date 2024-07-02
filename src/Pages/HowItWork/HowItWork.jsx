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
          <div className="items-center justify-center text-center " tyle={{ backgroundImage: `url('https://i.ibb.co/zXvGY3F/Rectangle-17.png')`, backgroundSize: 'cover',  }}>
               <img className="ml-[30vh] mb-10" src="https://i.ibb.co/C7K2YrX/location.png" alt="" />
          <h1 className="text-xl font-bold">Pick Your location</h1>
          <h1>Choose your location and find your best car.</h1>
       
          </div>
          <div className="items-center justify-center text-center " tyle={{ backgroundImage: `url('https://i.ibb.co/bN4PjjX/Rectangle-18.png')`, backgroundSize: 'cover',  }}>
               <img className="ml-[30vh] mb-10 mr-5 rounded-xl bg-teal-300" src="https://i.ibb.co/r5PXTdt/calendar-tick.png" alt="" />
          <h1 className="text-xl font-bold">Pick-up date/time</h1>
          <h1>Select your pick up date and time to book your car.</h1>
         
          </div>
          <div className="items-center justify-center text-center " tyle={{ backgroundImage: `url('https://i.ibb.co/zXvGY3F/Rectangle-17.png')`, backgroundSize: 'cover',  }}>
               <img className="ml-[30vh] mb-10" src="https://i.ibb.co/jkm4TNs/car.png" alt="" />
          <h1 className="text-xl font-bold">Book your Desired Car</h1>
          <h1>We will deliver it directly to you.</h1>
          
          </div>
         
      </div>
    </div>
  );
};

export default HowItWork;
