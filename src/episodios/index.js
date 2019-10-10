import React from "react";
import "./style.scss";
import img1 from "../breakingbad-preview1.jpg";
import img2 from "../breakingbad-preview2.jpg";
import img3 from "../breakingbad-preview3.jpg";
import img4 from "../breakingbad-preview4.jpg";
import img5 from "../breaking-preview5.jpg";

class Episodios extends React.Component {
  render() {
    return (
      <div className="seriesChapter">
        <div className="seriesContainer">
          <div className="chapter">
            <img className="imgchapter" src={img1} />
            <div className="contain">
              <div className="title">
                <h5>Principio del fin </h5>
                <h5>58 min</h5>
              </div>
              <p className="text">
                Un profesor de química de la escuela
                <br /> secundaria recurre a la venta de
                <br />
                drogas para mantener a su familia
              </p>
            </div>
          </div>
          <div className="chapter">
            <img className="imgchapter" src={img2} />
            <div className="contain">
              <div className="title">
                <h5>El gato en la bolsa </h5>
                <h5>48 min</h5>
              </div>
              <p className="text">
                Luego del fracaso de su primer negocio
                <br /> de drogas, Walt y Jesse deben
                <br /> deshacerse de dos cadáveres.
              </p>
            </div>
          </div>
          <div className="chapter">
            <img className="imgchapter" src={img3} />
            <div className="contain">
              <div className="title">
                <h5>Y la bolsa en el río </h5>
                <h5>48 min</h5>
              </div>
              <p className="text">
                Mientras Walt limpia el desorden que
                <br /> quedó tras su primer negocio de
                <br /> drogas, piensa en decirle a Skyler
                <br /> la verdad sobre su enfermedad.
              </p>
            </div>
          </div>
          <div className="chapter">
            <img className="imgchapter" src={img4} />
            <div className="contain">
              <div className="title">
                <h5>Cáncer </h5>
                <h5>48 min</h5>
              </div>
              <p className="text">
                Al ser forzado a contar la verdad acerca
                <br /> de su enfermedad, Walt enfrenta el
                <br /> problema de cómopagar una serie de
                <br /> caros tratamientos contra el cáncer.
              </p>
            </div>
          </div>
          <div className="chapter">
            <img className="imgchapter" src={img5} />
            <div className="contain">
              <div className="title">
                <h5>Materia gris </h5>
                <h5>48 min</h5>
              </div>
              <p className="text">
                Skyler organiza una intervención para
                <br /> convencer a Walt de que acepte la
                <br /> generosa oferta de su excompañero.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Episodios;
