import NavbarLogo from "../NavbarLogo/NavbarLogo";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavbarLogo></NavbarLogo>
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;
