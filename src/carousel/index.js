import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./style.scss";

class Carousel extends React.Component {
  render() {
    const settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      infinite: false,

      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 4,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        }
      ]
    };

    return (
      <div className="carousel">
        <div className="title">
          <p id={this.props.carouseles.id}>
            {this.props.carouseles.carouselName}
          </p>
        </div>
        <Slider {...settings}>
          {this.props.carouseles.items.map((data, key) => {
            return (
              <div key={key} className="imageContainer">
                <img className="image" src={data.img} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
