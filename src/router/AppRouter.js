import React from "react";
import CardIdent from "../components/CardIdent";
import About from "../pages/About";
import Home from "../pages/Home";
import Html from "../pages/Html";
import Services from "../pages/Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../pages/Logo";
import Css from "../pages/Css";

const AppRouter = () => {
  return (
    <Router basename="/clarusway">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/html" component={Html} />
          <Route path="/logo" component={Logo} />
          <Route path="/css" component={Css} />
          <Route path="/cardIdent" component={CardIdent} />
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
  );
};

export default AppRouter;
