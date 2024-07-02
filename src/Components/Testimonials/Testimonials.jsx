import React from "react";

const Testimonials = () => {
  return (
    <div className="mb-20">
      <div className="text-center">
        <h1 className="text-xl text-gray-400">Testimonials</h1>
        <h1 className="text-4xl">What people say about us?</h1>
      </div>

      {/* slider  */}
      <div className="flex  gap-20 mx-auto max-w-[130vh] mt-20">
        <div>
          <img
            className="w-[60vh] h-[50vh]"
            src="https://i.ibb.co/D7yLtJ8/Rectangle-26.png"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl w-[30vh] ml-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            laudantium animi voluptatibus optio dignissimos labore modi
            perspiciatis eaque! Labore quasi magni nobis ab aliquid natus eos
            corporis suscipit numquam mollitia.
          </h1>
          <h1 className="text-2xl font-serif mt-5 mb-5 ml-10">Rohanpreet Singh</h1>
          <div>
            <img
            className="w-[10vh] ml-10"
              src="https://static.vecteezy.com/system/resources/thumbnails/003/170/298/small/five-stars-5-star-icon-set-yellow-isolated-five-stars-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
