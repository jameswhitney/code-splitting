import "./App.css";
import React, { Suspense } from "react";
import Page1 from "./components/page1.component";

const Page2Lazy = React.lazy(() => import("./components/page2.component"));
const Page3Lazy = React.lazy(() => import("./components/page3.component"));

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
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }
  }
}

export default App;
