import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/Redux-store";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD4-C1qazvxwt6tipG4DuhMQIgpdEjEwyE",
  authDomain: "piroll-f4e01.firebaseapp.com",
  databaseURL:
    "https://piroll-f4e01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "piroll-f4e01",
  storageBucket: "piroll-f4e01.appspot.com",
  messagingSenderId: "203623790263",
  appId: "1:203623790263:web:5c0cd451d15b8e54493f32",
  measurementId: "G-NF3F370J2F",
};

const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
