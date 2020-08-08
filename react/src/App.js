import React from "react";
import "./App.css"; //eklemek istediklerin
//import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css"; //yeni bootstrap
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Anasayfa, Test, Test2, Login, Error,Hizmetlerimiz } from "./sayfalar";
import { Navbars, Genel, Footer } from "./components";

function App() {
  return (
    <Router>
      <Genel>
        <Navbars />
        <Switch>
          <Route path="/" exact component={Anasayfa} />
          <Route path="/anasayfa" exact component={Anasayfa} />
          <Route path="/test" exact component={Test} />
          <Route path="/test/:id" component={Test2} />
          <Route path="/login" exact component={Login} />
          <Route path="/hizmetlerimiz" exact component={Hizmetlerimiz} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Genel>
    </Router>
  );
}

export default App;
