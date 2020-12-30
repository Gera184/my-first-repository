import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CoronoaMap } from "./componenets/pages/coronoa-map/CoronoaMap";
import wall from "./assets/crackedwall.jpg";
import { Main } from "./componenets/main/Main";

export default () => {
  return (
    <div>
      <img
        src={wall}
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      />
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
