import styles from "./Products.module.css";
import data from "../../data/data.json";


const Products = () => {

  return (
    <div>

        <h1>Productos</h1>

        <div className={styles.contenedorProductos}>
          { data.map((prod) => (
            <div className={styles.producto} key={prod.id}>
              <img className={styles.imagen} src={prod.imagen} alt={prod.titulo} />
              <h2 className={styles.title}>{prod.titulo}</h2>
              <p className={styles.info}>Cat: {prod.categoria}</p>
              <p className={styles.info}>$ {prod.precio}</p>
            </div>
          ))}
        </div>

    </div>
  )
}

export default Products