import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./style.scss";

class CarouSeries extends React.Component {
  render() {
    console.log(this.props);
    const settings = {
      slidesToShow: 5,
      slidesToScroll: 3,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <React.Fragment>
        <div className="carouselPeliculas">
          <div className="titlePeliculas">
            <p>{this.props.carouSeries.carouselName}</p>
          </div>
          <Slider {...settings}>
            {this.props.carouSeries.items.map((data, key) => {
              return (
                <div key={key} className="peliculasImageContainer">
                  <img className="imagePeliculas" src={data.img} />
                </div>
              );
            })}
          </Slider>
        </div>
      </React.Fragment>
    );
  }
}
export default CarouSeries;
