import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Botón de menú hamburguesa en móviles */}
      <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Lista de enlaces */}
      <div className={`${styles.navbar_menu} ${menuOpen ? styles.active : ""}`}>
        <Link className={styles.navbar_lista} to="/products">Products</Link>
        <Link className={styles.navbar_lista} to="/products/lacteos">Lacteos</Link>
        <Link className={styles.navbar_lista} to="/products/trucha">Trucha</Link>
        <Link className={styles.navbar_lista} to="/products/frutas">Frutas</Link>
        <Link className={styles.navbar_lista} to="/nosotros">Nosotros</Link>
        <Link className={styles.navbar_lista} to="/contacto">Contacto</Link>
        <Link className={styles.navbar_lista} to="/login">Login</Link>
      </div>

      {/* Ícono del carrito */}
      <CartWidget />
    </nav>
  );
};

export default Navbar;
