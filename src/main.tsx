import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.scss";
import { store } from './store';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);
