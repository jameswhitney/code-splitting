import "./App.css";
import React from "react";
import Page1 from "./components/page1.component";
// import Page2 from "./components/page2.component";
// import Page3 from "./components/page3.component";
import asyncComponent from "./components/async.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
      component: null,
    };
  }

  onRouteChange = (route) => {
    // No code splitting
    this.setState({ route: route });
    // With code splitting
    //   if (route === "page1") {
    //     this.setState({ route: route });
    //   } else if (route === "page2") {
    //     import("./components/page2.component").then((Page2) => {
    //       this.setState({ route: route, component: Page2.default });
    //     });
    //   } else if (route === "page3") {
    //     import("./components/page3.component").then((Page3) => {
    //       this.setState({ route: route, component: Page3.default });
    //     });
    //   }
  };

  render() {
    if (this.state.route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "page2") {
      const AsyncPage2 = asyncComponent(() =>
        import("./components/page2.component")
      );
      return <AsyncPage2 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "page3") {
      const AsyncPage3 = asyncComponent(() =>
        import("./components/page3.component")
      );
      return <AsyncPage3 onRouteChange={this.onRouteChange} />;
    }
    // if (this.state.route === "page1") {
    //   return <Page1 onRouteChange={this.onRouteChange} />;
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />;
    // }
  }
}

export default App;
