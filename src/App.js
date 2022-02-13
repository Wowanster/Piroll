import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

function App(props) {
  return (
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/home" render={ ()=> <Home store={props.store} />} />
          <Route path="/about" render={ ()=> <About/>} />
          <Route path="/work" render={ ()=> <Work />} />
          <Route path="/contact" render={ ()=> <Contact />} />
          <Route path="/" render={ ()=> <Home store={props.store} />} />
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
