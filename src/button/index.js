import React from "react";
import "./style.scss";
import { Icon } from "react-fa";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="button">
          <Icon name={this.props.name} className="icon" />
          {this.props.button}
        </button>
      </div>
    );
  }
}

export default Button;
