import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/Redux-store";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";



  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
        <App store={store}/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );



reportWebVitals();
