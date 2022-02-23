import "./App.css";
import React from "react";
import Page1 from "./components/page1.component";
import Page2 from "./components/page2.component";
import Page3 from "./components/page3.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    if (this.state.route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "page2") {
      return <Page2 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "page3") {
      return <Page3 onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
