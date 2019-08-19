import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <span>gh-pages插件更新本内容</span>
      </div>
    );
  }
}

export default Main;
