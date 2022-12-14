import React from "react";
import { Suspense, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./components/Home/Home";
import { NotFound } from "./components/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Navbar from "./components/UI/Navbar";
const Login = React.lazy(() => import("./components/Login/LoginLayout"));
const Register = React.lazy(
  () => import("./components/Register/RegisterLayout")
);

function App() {
  return (
    <Fragment>
      <Navbar />
      <Suspense fallback={<LoadingSpinner className={styles.center} />}>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
