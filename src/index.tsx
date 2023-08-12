import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";

import { store } from "./store";
import "./index.scss";
import { Restaurant } from "./features";

const htmlElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(htmlElement);

let App = (
  <Provider store={store}>
    <Restaurant />
  </Provider>
);

root.render(App);
