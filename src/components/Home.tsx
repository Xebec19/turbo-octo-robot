import { Fragment } from "react";
import styles from './Home.module.scss';
import image from '../assets/igor-savelev-HttaDlrArVc-unsplash.jpg'

const Home = () => {
  return <Fragment>
    <h1 className={styles.title}>Basic CRUD Application</h1>
    <div className={styles.gridContainer}>
    <img src={image} alt="dummy" className={styles.gridItem}/>
    <p className={`${styles.content} ${styles.gridItem}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus pariatur vel eaque nostrum sit accusamus veritatis sint laudantium consequatur magni, iusto fuga autem quia ratione qui et excepturi nam.</p>
    </div>
  </Fragment>;
};

export default Home;
