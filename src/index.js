import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/Redux-store";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";



let renderEntire=(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state={state}  />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderEntire(store);

store.subscribe(()=>{
  let state=store;
  renderEntire(state)
});

reportWebVitals();
