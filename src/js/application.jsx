import React from "react";
import Navigation from "./Navigation";
import Card from "./Card";
import moment from "moment";
const currentDate = moment().format("DD.MM.YYYY");

class Application extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="main-text">
          {currentDate}
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
          <Card
            img="https://source.unsplash.com/user/erondu/1600x900"
            header="Declarative"
            content="React makes it painless to create interactive UIs"
          />
          <Card
            img="https://source.unsplash.com/user/erondu/1600x900"
            header="Components"
            content="Build encapsulated components that manage their state"
          />
          <Card
            img="https://source.unsplash.com/user/erondu/1600x900"
            header="Single-Way"
            content="A set of immutable values are passed to the component's"
          />
          <Card
            img="https://source.unsplash.com/user/erondu/1600x900"
            header="JSX"
            content="Statically-typed. designed to run on modern browsers"
          />
        </section>
      </div>
    );
  }
}

export default Application;
