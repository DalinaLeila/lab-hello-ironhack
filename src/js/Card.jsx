import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="" width="200px" />
        <h2>{this.props.header}</h2>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;
