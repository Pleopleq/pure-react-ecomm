import { Link } from "react-router-dom";
import styles from "./NavbarLogo.module.css";

function NavbarLogo() {
  return (
    <Link to={"/"}>
      <span className={styles.navbarLogo}>🛍️</span>
    </Link>
  );
}

export default NavbarLogo;
