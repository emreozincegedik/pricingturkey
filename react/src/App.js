import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css"; //yeni bootstrap
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Anasayfa, Test, Test2, Login, Error, Hizmetlerimiz } from "./sayfalar";
import { Navbars, Genel, Footer } from "./components";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Genel>
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Vahitcan Tutar ve Emre Özincegedik tarafından yapılmıştır"
          />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, React, Express"
          />
          <meta name="author" content="Emre Özincegedik Vahitcan Tutar" />
          <link
            href="https://fonts.googleapis.com/css?family=Satisfy|Montserrat|Raleway&display=swap"
            rel="stylesheet"
          />
          <title>Transfer Pricing Turkey</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Helmet>
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
