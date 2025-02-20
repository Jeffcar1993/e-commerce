import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { CircleUser, House, LeafyGreen, Target } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>

        <div className={styles.headFooter}>
          <h2 className={styles.subtituloFooter}>Productos Arcoiris 🌈</h2>
          <p className={styles.infoFooter}>Productos que llenan tu vida de sabor</p>
        </div>

        <div className={styles.menuFooter}>
          <Link className={styles.menu} to="/products"><House /> Inicio</Link>
          <Link className={styles.menu} to="/products"><Target /> Productos</Link>
          <Link className={styles.menu} to="/nosotros"><LeafyGreen /> Nosotros</Link>
          <Link className={styles.menu} to="/contacto"><CircleUser /> Contacto</Link>
        </div>

        <div className={styles.footerIcons}>
          <a className={styles.iconFooter} href="https://www.facebook.com/profile.php?id=61564937216903" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

          <a className={styles.iconFooter} href="https://www.facebook.com/profile.php?id=61564937216903" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>

          <a className={styles.iconFooter} href="https://wa.me/3193238434" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>

        </div>

      <p>© {new Date().getFullYear()} Productos Arcoiris. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
