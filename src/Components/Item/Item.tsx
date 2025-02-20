import { useContext, useState } from "react";
import { Producto } from "../Products";
import ItemCount from "../ItemCount";
import { CartContext } from "../context/CartContext";
import styles from "./Item.module.css";
import Carrusel from "../Carrusel";
import Footer from "../Footer";
import { Link } from "react-router-dom";

interface ItemProps {
  item: Producto;
  }

const Item = ({ item }: ItemProps ) => {

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Item must be used within a CartContext.Provider");
  }

  const { agregarAlCarrito, carrito } = cartContext;
 
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

                  <div className={styles.botonesCarrito}>

                    <ItemCount 
                      cantidad={cantidad} 
                      handleRestar={handleRestar} 
                      handleSumar={handleSumar} 
                      handleAgregar={() => {agregarAlCarrito(item, cantidad) }}
                      />

                      {/* Botón de "Ir al Carrito" solo si hay productos en el carrito */}
                      {carrito.length > 0 && (
                        <Link to="/carrito" className={styles.botonCarrito}>
                          Ir al carrito
                        </Link>
                      )}
                  </div>
              </div>
          </div>
        <Carrusel />
        <Footer/>
      </div>
  )
}

export default Item