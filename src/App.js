import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <Switch>
          <Route exact="true" path="/">
            <Home />
          </Route>
          <Route
            path="/Page1"
            render={({ match: { url } }) => (
              <Switch>
                {console.log(url)}
                <Route exact="true" path={url}>
                  <Page1 />
                </Route>
                <Route exact="true" path={`${url}/detailA`}>
                  <Page1DetailA />
                </Route>
                <Route exact="true" path={`${url}/detailB`}>
                  <Page1DetailB />
                </Route>
              </Switch>
            )}
          />
          <Route path="/Page2">
            <Page2 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
