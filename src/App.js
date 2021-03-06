import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import RouterBlog from "./utils/router";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <RouterBlog />
      </Router>
      <ToastContainer position="top-center" autoClose={3000} />
    </Provider>
  );
};

export default App;
