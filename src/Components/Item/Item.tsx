import { useContext, useState } from "react";
import { Producto } from "../Products";
import ItemCount from "../ItemCount";
import { CartContext } from "../context/CartContext";
import styles from "./Item.module.css";
import Carrusel from "../Carrusel";

interface ItemProps {
  item: Producto;
  }

const Item = ({ item }: ItemProps ) => {

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Item must be used within a CartContext.Provider");
  }

  const { agregarAlCarrito } = cartContext;
 
  
  const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }

  return (
      <div className={styles.itemContain}>
          <div className={styles.itemContainer}>
                <div className={styles.contenedorImagen}>
                  <img className={styles.itemImagen} src={item.imagen} alt={item.titulo} />
                </div>
            
                <div className={styles.itemInfo}>
                  <h2 className={styles.itemTitulo}>{item.titulo}</h2>
                  <p className={styles.itemDescripcion}>{item.descripcion}</p>
                  <h3 className={styles.itemCategoria}>categoria: {item.categoria}</h3>
                  <p className={styles.itemPrecio}>Precio: ${item.precio}</p>

                  <ItemCount 
                    cantidad={cantidad} 
                    handleRestar={handleRestar} 
                    handleSumar={handleSumar} 
                    handleAgregar={() => {agregarAlCarrito(item, cantidad) }}
                    />
              </div>
          </div>
        <Carrusel />
      </div>
  )
}

export default Item