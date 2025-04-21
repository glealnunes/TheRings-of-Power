import React from 'react';
import Slider from 'react-slick';
import RingCard from '../RingCard/RingCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"

function Carousel({ aneis, onDelete }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    // responsive: [
    //   { breakpoint: 1024,
    //     settings: { slidesToShow: 2, slidesToScroll: 1, },
    //   },
    //   {breakpoint: 600,
    //     settings: { slidesToShow: 1, slidesToScroll: 1, },
    //   },
    // ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {aneis.map((anel) => (
          <RingCard key={anel.id} anel={anel} onDelete={onDelete} />
        ))}
          {/* <div className="card-coringa slide-in">
            <p>Um desafio para</p>
            <p className="strong-300">governar todos eles,</p>
            <p>Um desafio para</p>
            <p className="strong-300">encontrá-los,</p>
            <p>Um desafio</p>
            <p>para trazê-los</p>
            <p>todos,</p>
            <p className="strong-400">e na escuridão</p>
            <p className="strong-500">prendê-los.</p>
          </div> */}
      </Slider>
    </div>
  );
}

export default Carousel;