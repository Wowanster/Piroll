import { applyMiddleware, combineReducers, createStore } from "redux";
import portfolioReducer from "./portfolio-reducer";
import servicesReducer from "./services-reducer";
import clientsReducer from "./clients-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  portfolio: portfolioReducer,
  services: servicesReducer,
  clients: clientsReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store=store;

export default store;
