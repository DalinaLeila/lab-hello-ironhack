import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div>
        <img
          className="menu-top"
          src={require("../assets/menu-top.svg")}
          alt=""
        />
        <img
          className="ironhack-logo"
          src={require("../assets/ironhack-logo.svg")}
          alt=""
        />
      </div>
    );
  }
}

export default Navigation;
