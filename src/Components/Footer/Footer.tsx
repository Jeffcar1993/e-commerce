import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
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
          <Link className={styles.iconFooter} to="#"><FaFacebook /></Link>
          <Link className={styles.iconFooter} to="#"><FaInstagram /></Link>
          <Link className={styles.iconFooter} to="#"><FaTwitter /></Link>
          <Link className={styles.iconFooter} to="#"><FaLinkedin /></Link>
        </div>

      <p>© {new Date().getFullYear()} Productos Arcoiris. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
