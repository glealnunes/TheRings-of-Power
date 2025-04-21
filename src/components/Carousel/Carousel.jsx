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
          <div className="cardRingMagic slide-in">
            <h4>Um desafio para</h4>
            <h4>governar todos eles,</h4>
            <h4>Um desafio para</h4>
            <h4>encontrá-los,</h4>
            <h4>Um desafio</h4>
            <h4>para trazê-los</h4>
            <h4>todos,</h4>
            <h4>e na escuridão</h4>
            <h4>prendê-los.</h4>
          </div>
      </Slider>
    </div>
  );
}

export default Carousel;