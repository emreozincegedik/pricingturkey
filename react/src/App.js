import React from "react";
import logo from "./logo.svg";
import "./App.css"; //eklemek istediklerin
//import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css" //yeni bootstrap
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Anasayfa, Test, Test2, Login, Error } from "./sayfalar";
import { Navbars, Genel } from "./components";

function App() {
  return (
    <Router>
      <Genel>
        <Navbars />
        <Switch>
          <Route path="/" exact component={Anasayfa} />
          <Route path="/anasayfa" component={Anasayfa} />
          <Route path="/test" exact component={Test} />
          <Route path="/test/:id" component={Test2} />
          <Route path="/login" exact component={Login} />
          <Route component={Error} />
        </Switch>
      </Genel>
    </Router>
  );
}

export default App;
