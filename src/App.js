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
          <Route path="/home" render={ ()=> <Home state={props.state} addForm={props.addForm} />} />
          <Route path="/about" render={ ()=> <About/>} />
          <Route path="/work" render={ ()=> <Work state={props.state} />} />
          <Route path="/contact" render={ ()=> <Contact  state={props.state} addForm={props.addForm}/>} />
          <Route path="/" render={ ()=> <Home state={props.state} addForm={props.addForm} />} />
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
