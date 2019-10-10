import React from "react";
import "./style.scss";
import Button from "../button/index.js";
import { Icon } from "react-fa";
import Carousel from "../carousel/index";
import Episodios from "../episodios/index";

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouseles: [],
      mostrarEpisodios: false
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/api/carouseles");

    const responseJson = await response.json();

    this.setState({ carouseles: responseJson });
  }

  handleButton() {
    console.log("hola");
    if (this.state.mostrarEpisodios == false) {
      this.setState({
        mostrarEpisodios: true
      });
    } else {
      this.setState({
        mostrarEpisodios: false
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="containerBreaking">
          {this.state.mostrarEpisodios && <Episodios className="epis" />}
          <div className="imageBreaking"></div>
          <div className="informationContainer">
            <div className="title">
              <h1>
                Breaking <span>Bad</span>
              </h1>
            </div>
            <div className="info">
              <div className="season">
                <span className="temp">96% de coincidencia</span>
                <span>2013 5 temporadas</span>
              </div>
              <span className="description">
                Un profesor de química con cáncer terminal se asocia a
                <br /> un exestudiante para asegurar el futuro de su familia
                <br /> al fabricar y vender metanfetamina
              </span>
            </div>
            <div className="buttonContainer">
              <Button className="button" name={"play"} button={"Reproducir"} />
              <Button className="button" name={"plus"} button={"Mi lista"} />
              <button className="episodies" onClick={() => this.handleButton()}>
                Episodios
              </button>
            </div>
            <div className="premio">
              <Icon name="trophy" className="trophy" />
              <span className="season">
                "Breaking Bad" ganó 16 premios Emmy, incluidos cuatro al mejor
                actor para <br />
                la estrella Bryan Cranston
              </span>
            </div>
            <div className="optionContainer">
              <p>DESCRIPCION GENERAL</p>
              <button onClick={() => this.handleButton()}>EPISODIOS</button>
            </div>
          </div>
        </div>
        <div className="carou">
          {this.state.carouseles.map((data, key) => {
            return <Carousel carouseles={data} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Film;
