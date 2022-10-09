import { PropsWithChildren } from "react";
import styles from "./Navbar.module.scss";
import image from "../../assets/logo_transparent.png";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className={styles.navband}>
      <span>
        <NavLink to="/">
          <img src={image} className={styles.logoImg} alt="logo" />
        </NavLink>
      </span>

      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/login"
          >
            <Typography variant="button">Login</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/register"
          >
            <Typography variant="button">Register</Typography>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
