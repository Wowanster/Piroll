import { combineReducers, createStore } from "redux";
import formReducer from "./form-reducer";
import portfolioReducer from "./portfolio-reducer";
import servicesReducer from "./services-reducer";
import clientsReducer from "./clients-reducer";

let reducers = combineReducers({
  form: formReducer,
  portfolio: portfolioReducer,
  services: servicesReducer,
  clients: clientsReducer,
});

let store = createStore(reducers);

export default store;
