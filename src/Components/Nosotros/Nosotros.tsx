import Footer from "../Footer";
import styles from "./Nostros.module.css";

const Nosotros = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Somos <span className={styles.highlight}>Productos Arcoiris 🌈</span></h2>
        <p>
          Nos especializamos en productos frescos y de alta calidad ofrecemos:
        </p>
        <div className={styles.categories}>
          <div className={styles.category}>
            <h3>🐟 Productos de Trucha</h3>
            <ul>
              <li>Hamburguesa de trucha</li>
              <li>Trucha deshuesada</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h3>🥛 Lácteos</h3>
            <ul>
              <li>Yogurt de fruta</li>
              <li>Yogurt Griego</li>
              <li>Queso Campesino</li>
              <li>Queso Doble Crema</li>
              <li>Queso Tajado</li>
            </ul>
          </div>
        </div>
        <p className={styles.valueProp}>
          <strong>✨ Nuestra propuesta de valor:</strong> Productos siempre frescos y entregados directamente en la puerta de su casa.
        </p>
      </div>
      <Footer/>
    </section>
  );
};

export default Nosotros;
