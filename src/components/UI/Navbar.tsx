import { PropsWithChildren } from "react";
import styles from "./Navbar.module.scss";
import image from "../../assets/logo_transparent.png";
import { Typography } from "@mui/material";

const Navbar: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className={styles.navband}>
      <span>
        <img src={image} className={styles.logoImg} alt="logo" />
      </span>

      <ul>
        <li>
          <Typography variant="button">Login</Typography>
        </li>
        <li>
          <Typography variant="button">Register</Typography>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
