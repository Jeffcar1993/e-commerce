import { Link } from "react-router-dom";
import { Producto } from "../Products";
import styles from "./ItemList.module.css";
import { toCapital } from "../../helpers/toCapital";
import Loading from "../Loading"; // Importa el componente

interface ItemListProps {
    productos: Producto[];
    titulo: string;
    isLoading: boolean; // Nueva prop para manejar el estado de carga
}

const ItemList = ({ productos, titulo, isLoading }: ItemListProps) => {
    return (
        <div>
            <h2 className={styles.title}>{toCapital(titulo)}</h2>

            {isLoading ? (
                <Loading /> // Muestra el componente Loading mientras carga
            ) : (
                <div className={styles.contenedorProductos}>
                    {productos.map((producto) => (
                        <div className={styles.producto} key={producto.id}>
                            <img className={styles.imagen} src={producto.imagen} alt={producto.titulo} />
                            <div className={styles.infoContenedoritemlist}>
                                <h2 className={styles.subtitulo}>{producto.titulo}</h2>
                                <p className={styles.info}>Categoría: {producto.categoria}</p>
                                <p className={styles.info}>Precio: ${producto.precio}</p>
                                <Link className={styles.botonVermas} to={`/item/${producto.id}`}>Ver más</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemList;
