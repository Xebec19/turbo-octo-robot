import { Suspense, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./components/Home";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar/>
    <Suspense fallback={<LoadingSpinner className={styles.center} />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
    </Fragment>
  );
}

export default App;
