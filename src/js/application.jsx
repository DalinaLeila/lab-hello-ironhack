import React from "react";

class Application extends React.Component {
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
        <div className="main-text">
          <div className="react-logo">
            <img src={require("../assets/react-logo.svg")} alt="" />
            <img src={require("../assets/react-logo.svg")} alt="" />
            <img src={require("../assets/react-logo.svg")} alt="" />
          </div>
          <h1>Say Hello to ReactJS</h1>
          <h4 className="info-text">
            You will learn a Frontend framework from scratch, to become an Ninka
            Developer.
          </h4>
          <button>Awesome!</button>
        </div>
        <section>
          <div>
            <h5>Declarative</h5>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div>
            <h5>Components</h5>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div>
            <h5>Single-Way</h5>
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div>
            <h5>JSX</h5>
            <p>Statically-typed. designed to run on modern browsers</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Application;
