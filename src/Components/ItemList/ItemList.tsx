import { Link } from "react-router-dom";
import { Producto } from "../Products";
import styles from "./ItemList.module.css";
import { toCapital } from "../../helpers/toCapital";

interface ItemListProps {
    productos: Producto[];
    titulo: string;
  }

const ItemList = ({ productos, titulo }: ItemListProps) => {
    return (
       <div>
            <h2 className={styles.title}>{toCapital(titulo)}</h2>
            <div className={styles.contenedorProductos}>
                {productos.map((producto) => (
                    <div className={styles.producto} key={producto.id}>
                    <img className={styles.imagen} src={producto.imagen} alt={producto.titulo} />
                    <div className={styles.infoContenedoritemlist}>
                        <h2 className={styles.subtitulo}>{producto.titulo}</h2>
                        <p className={styles.info}>categoria: {producto.categoria}</p>
                        <p className={styles.info}>Precio: ${producto.precio}</p>
                        <Link className={styles.botonVermas} to={`/item/${producto.id}`}>Ver mas</Link>
                    </div>
                </div>
                ))}
            </div>
        </div> 
    );
  };
  
  export default ItemList