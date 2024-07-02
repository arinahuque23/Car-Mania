import React from "react";
import Slider from "react-slick";
import "./Testimonial.css"

const testimonialsData = [
  {
    image: "https://i.ibb.co/D7yLtJ8/Rectangle-26.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium animi voluptatibus optio dignissimos labore modi perspiciatis eaque! Labore quasi magni nobis ab aliquid natus eos corporis suscipit numquam mollitia.",
    name: "Rohanpreet Singh",
    rating: "https://static.vecteezy.com/system/resources/thumbnails/003/170/298/small/five-stars-5-star-icon-set-yellow-isolated-five-stars-vector.jpg"
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonials-section mb-20">
      <div className="text-center">
        <h1 className="text-xl text-gray-400">Testimonials</h1>
        <h1 className="text-4xl mb-10">What people say about us?</h1>
      </div>

      <div className="slider-container mx-auto max-w-[90vw] mt-10">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-item flex flex-col lg:flex-row items-center gap-10 p-5">
              <div className="testimonial-image-container">
                <img
                  className="testimonial-image rounded-lg shadow-lg"
                  src={testimonial.image}
                  alt={`Testimonial from ${testimonial.name}`}
                />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text text-xl leading-relaxed">
                  {testimonial.text}
                </p>
                <h1 className="testimonial-name text-2xl font-serif mt-5 mb-5">
                  {testimonial.name}
                </h1>
                <div className="testimonial-rating">
                  <img
                    className="w-20"
                    src={testimonial.rating}
                    alt="Rating"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
