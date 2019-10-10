import React from "react";
import "./App.css";
import Header from "./header";
import Banner from "./banner";
import Carousel from "./carousel";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouseles: []
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/api/carouseles");
    console.log(response);
    const responseJson = await response.json();
    console.log(responseJson);
    this.setState({ carouseles: responseJson });
  }
  render() {
    return (
      <div className="App">
        <Banner />
        {this.state.carouseles.map((data, key) => {
          return <Carousel carouseles={data} />;
        })}
      </div>
    );
  }
}

export default Home;
