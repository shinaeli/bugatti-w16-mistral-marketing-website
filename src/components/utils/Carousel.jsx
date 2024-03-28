import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({collections}) => {
    var settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ],
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear"
    };

  return (
    <Slider {...settings}>
                {collections.map(item => {
                    const { id, imgLocation, alt } = item;
                    return (
                        <div className="container-img" key={id}>
                            <img src={imgLocation} alt={alt} />
                        </div>
                    )
                })}
    </Slider>
  )
}

export default Carousel