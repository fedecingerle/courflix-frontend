import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./style.scss";

class CarouPeli extends React.Component {
  render() {
    console.log(this.props);
    const settings = {
      slidesToShow: 5,
      slidesToScroll: 5,
      dots: true,
      infinite: false
    };
    return (
      <React.Fragment>
        <div className="carouselPeliculas">
          <div className="titlePeliculas">
            <p>{this.props.carouPelis.carouselName}</p>
          </div>
          <Slider {...settings}>
            {this.props.carouPelis.items.map((data, key) => {
              return (
                <div key={key} className="peliculasImageContainer">
                  <img className="imagePeliculas" src={data.img} />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="galleryFilm">
          <div className="galleryContentFilm">
            <div className="galleryContentTitle">
              <h2 className="titleGalleryFilm">Peliculas > </h2>
              <p className="titleP">Populares en Netflix</p>
            </div>
            <div className="gallery">
              <img
                className="myListFilm"
                src="https://i1.wp.com/cinefilosfrustrados.com/wp-content/uploads/2019/10/En-la-hierba-alta.jpg?fit=800%2C600&ssl=1"
              />
              <img
                className="myListFilm"
                src="https://i0.wp.com/noticiasetecnologia.com/wp-content/uploads/2018/09/fragmentado.jpg?fit=959%2C457&ssl=1"
              />
              <img
                className="myListFilm"
                src="https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT1yBgsDKd3y8AetOmh7voLCHkndj5mwbLDJlwa2WXFdmQLw7s_thnZFQLcyHxjDJyVlkiolXrK_vc3uxGqo400VXFI.jpg?r=d10"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLuXUM0m40MZJUjqpIRtIVdENMb0R0KmjGBWG-o2EAOADTba_U"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmXvNsNzPphTfTR6iSTHpUdTFvl1JwX0l5vv8RQ0yG6R3c7Lg6"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNVgPWzdVfKB73FKc8oqEHVvbBCGcFBDR55Kedo44e9i0Qs6fs"
              />
            </div>
          </div>
          <div className="galleryContentFilm">
            <p>Tendencias</p>
            <div className="gallery">
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbMYzHD12CvrZ2WhmEHoZU3p8DP0AwaWDVg3qkdkGvO7n_v3zH"
              />
              <img
                className="myListFilm"
                src="https://cdn.cienradios.com/wp-content/uploads/sites/4/2019/10/Ocultos-por-la-luna-2-400x259.jpg"
              />
              <img
                className="myListFilm"
                src="https://occ-0-1883-1722.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABf7RTcRFPs1e5A2tZ6SkvjhBC38up_e6fYRYMrQDI5cQt7crkEbzmG8gFE1-2Qfx4qyk9o3aPXH9WqQWC3jsAnL7joUQmj8WAh7Cjm-jMLYQxjwlFep4Q6-2kcgXEQ.jpg?r=172"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK-wVnv2SnCoD6qNGUtClAj144HkPDtZu-fVCOAQTmO2bgqRCL"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ2dxJa8w8tTIk5xZFFj0s8-NtJD7B9rjtSMQA66bSxMfIyA7f"
              />
              <img
                className="myListFilm"
                src="https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABd9yU1ZYiHKd8oWZuvizRtGK9A-jcx_hB3m7f6lrhNdS-VhQ8rmVYiEqhpodb9Be2GPB6CZbst2LnxOcxwFdcVvuNhg15BmT2g.jpg?r=5de"
              />
            </div>
          </div>
          <div className="galleryContentFilm">
            <p>Acción y aventuras</p>
            <div className="gallery">
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYwepeyqjDaYfXbWvanuqWFEcp7QfH_2VqOMeY5MqQK23uwYvY"
              />
              <img
                className="myListFilm"
                src="https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABUTlbgTUWUa4-ACVRZtFIWpvZ6SreIE71_0_JXzhzEfIVvnVC5R6gL74LGy_I8QOVcp11weqoFXC1mmBznA85zCAVGhw.jpg?r=234"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxNToZMDiBYm1baF-ECGwNm2j7NOI8Vn2WLJITOiYLxYbDhkt2"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpOPjOPWg6Ax-gYZ-FFm_BW9zLcp9dVtQhxQETcj-KHUj6iuJ1"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkXM9-fAquQ5RlcFXs6-H4UzGyp_aG8T7cHlI8y03QmYqEkC_Z"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnuZY8lBvryf-YFOwtqJJ-qTpSo4w4OAi5bq0KHW7V7A6CQCy9"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CarouPeli;
