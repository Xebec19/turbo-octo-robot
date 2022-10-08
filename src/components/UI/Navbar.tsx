import { PropsWithChildren } from "react";
import styles from "./Navbar.module.scss";
import image from "../../assets/logo_transparent.png";

const Navbar: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className={styles.navband}>
      <span>
        <img src={image} className={styles.logoImg} alt="logo"/>
      </span>

      <ul>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
