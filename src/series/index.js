import React from "react";
import CarouSeries from "./carouseries";

class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouSeries: []
    };
  }
  async componentDidMount() {
    const response = await fetch("http://localhost:3001/api/series");
    console.log(response);
    const responseJson = await response.json();
    console.log(responseJson);
    this.setState({ carouSeries: responseJson });
  }
  render() {
    return (
      <React.Fragment>
        <div className="desktopCarousel">
          {this.state.carouSeries.map((data, key) => {
            return <CarouSeries carouSeries={data} />;
          })}
        </div>
        <div className="galleryFilm">
          <div className="galleryContentFilm">
            <div className="galleryContentTitle">
              <h2 className="titleGalleryFilm">Peliculas > </h2>
              <p className="titleP">Populares en Courflix</p>
            </div>
            <div className="gallery">
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIOowtH9EM18x8YX6OjIwl1Jkqjh_dXZ4O1OIXcCx6Osytcmsl"
              />
              <img
                className="myListFilm"
                src="https://www.abc.com.py/resizer/FRU8WuxWFC8rNl-0G8LtMwZIWjY=/fit-in/770x495/smart/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/CRE576PD6RFFRNS5Z45XMJPPQI.jpg"
              />
              <img
                className="myListFilm"
                src="https://miro.medium.com/max/2560/1*d7IlIe_HRZ-ua6Z00HkrBg.jpeg"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSqGG0Q_D9rs0ik2fCgsnQoptti5oDZUGqVdF-S93X-D40UtBG"
              />
              <img
                className="myListFilm"
                src="https://media.metrolatam.com/2019/09/19/mariannenetflixt-506f50ceb9f20171e08bb75b496aeab6-600x400.jpg"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8WAVPiKbQecnxRpb_13Orv8g0xdrH-o-sPBcWMGXGhIjG3Cwf"
              />
            </div>
          </div>
          <div className="galleryContentFilm">
            <p>Originales de Courflix</p>
            <div className="gallery">
              <img
                className="myListFilm"
                src="https://miro.medium.com/max/2560/1*d7IlIe_HRZ-ua6Z00HkrBg.jpeg"
              />
              <img
                className="myListFilm"
                src="http://static.wixstatic.com/media/f5c607_48eed8401c534e0799c32b4fb96d45b7~mv2.jpg/v1/fill/w_630,h_354,al_c,q_80,usm_0.66_1.00_0.01/f5c607_48eed8401c534e0799c32b4fb96d45b7~mv2.jpg"
              />
              <img
                className="myListFilm"
                src="https://www.abc.com.py/resizer/FRU8WuxWFC8rNl-0G8LtMwZIWjY=/fit-in/770x495/smart/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/CRE576PD6RFFRNS5Z45XMJPPQI.jpg"
              />
              <img
                className="myListFilm"
                src="https://occ-0-987-990.1.nflxso.net/art/fffd8/a4b4438136f3f036924de81dc4c559f6af2fffd8.jpg"
              />
              <img
                className="myListFilm"
                src="https://static.tvtropes.org/pmwiki/pub/images/5flma9.jpg"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaJhfDx_0c1DJPnlKZhNHiyxWrxvps1QeOMvbBHd5wBXtSowdP"
              />
            </div>
          </div>
          <div className="galleryContentFilm">
            <p>Verlo nuevamente</p>
            <div className="gallery">
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRITsIsFGL0sK4gctYGFq2PoU267M4iaO3RW_wtBK6q9eSqYNGB"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT2gW9T8wRimVW0V1kMmlK2hSDus-nEOCUXtVMKkBma4xzmSsO"
              />
              <img
                className="myListFilm"
                src="https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdarimSqbI_OQtnL2HFJVI21NBl8Gc5sz1nMr45-7sswFpHRUbSBxp6cYUOt1AGXbMN2wCxEu9T3TibYy6v1aku8TC_Hp49_WA.jpg?r=01a"
              />
              <img
                className="myListFilm"
                src="https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2019/06/la_casa_de_papel_serie.jpg?itok=QUqOV7eF"
              />
              <img
                className="myListFilm"
                src="https://cdn.newsapi.com.au/image/v1/b5f35f8fda9120ee134cfd8f56cd2bb2"
              />
              <img
                className="myListFilm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq4Xj0ep6eB-3xHjQTl0vzL3OFJu8tc3pTsttFyWlxEIuhM_gz"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Series;
