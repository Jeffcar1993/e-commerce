import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link className={styles.navbar_lista} to="/products">Products</Link>
        <Link className={styles.navbar_lista} to="/products/lacteos">Lacteos</Link>
        <Link className={styles.navbar_lista} to="/products/trucha">Trucha</Link>
        <Link className={styles.navbar_lista} to="/nosotros">Nosotros</Link>
        <Link className={styles.navbar_lista} to="/contacto">Contacto</Link>
        <Link className={styles.navbar_lista} to="/login">Login</Link>
    </nav>
  )
}

export default Navbar