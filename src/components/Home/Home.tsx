import React,{ Fragment } from "react";
import styles from "./Home.module.scss";
import image from "../../assets/igor-savelev-HttaDlrArVc-unsplash.jpg";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <Fragment>
      <Typography variant="h3" className={styles.center} gutterBottom>
        Basic CRUD Application
      </Typography>
      <div className={styles.gridContainer}>
        <img src={image} alt="dummy" className={styles.gridItem} />
        <p className={styles.gridItem}>
          <Typography variant="body1" className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            delectus pariatur vel eaque nostrum sit accusamus veritatis sint
            laudantium consequatur magni, iusto fuga autem quia ratione qui et
            excepturi nam.
          </Typography>
        </p>
      </div>
    </Fragment>
  );
};

export default React.memo(Home);
