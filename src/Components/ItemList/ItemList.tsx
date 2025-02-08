import { Producto } from "../Products";
import styles from "./ItemList.module.css";

interface ItemListProps {
    productos: Producto[];
  }

const ItemList = ({ productos }: ItemListProps) => {
    return (
       <>
        <h2 className={styles.title}>Productos</h2>
        <div className={styles.contenedorProductos}>
            {productos.map((producto) => (
                <div className={styles.producto} key={producto.id}>
                <img className={styles.imagen} src={producto.imagen} alt={producto.titulo} />
                <h2 className={styles.subtitulo}>{producto.titulo}</h2>
                <p className={styles.info}>categoria: {producto.categoria}</p>
                <p className={styles.info}>${producto.precio}</p>
            </div>
            ))}
        </div>
        </> 
    );
  };
  
  export default ItemList