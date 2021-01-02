import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CoronoaMap } from "./componenets/pages/coronoa-map/CoronoaMap";

import { Main } from "./componenets/main/Main";

export default () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/corona" component={CoronoaMap} />
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main} />
        </Switch>
      </Router>
    </div>
  );
};
