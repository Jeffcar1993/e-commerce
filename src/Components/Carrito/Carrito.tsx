import styles from "./Carrito.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
 
   const cartContext = useContext(CartContext);
  
      if (!cartContext) {
          return <p>Cargando carrito...</p>;
        }
      
        const { carrito, precioTotal, vaciarCarrito } = cartContext;
      
        const handleVaciar = () => {
          vaciarCarrito();
        }
 
  return (
    <div className={styles.carrito}>

      <h1 className={styles.titulocarrito}>Tu Compra</h1>

      {carrito.length === 0 ? (
        <p className={styles.vacio}>El carrito está vacío 🙁</p>
      ) : (
        carrito.map((prod) => (

          <div className={styles.infoProductoCarrito} key={prod.id}>
            <img className={styles.imagenCarrito} src={prod.imagen} alt={prod.titulo} />
            <div className={styles.infoProductoUnidad}>
              <h2 className={styles.subtitloInfo}>{prod.titulo}</h2>
              <p className={styles.infoCarrito}>Cantidad: {prod.cantidad}</p>
              <p className={styles.infoCarrito}>Precio und: ${prod.precio}</p>
              <p className={styles.infoCarrito}>Precio total: ${prod.precio * prod.cantidad}</p>
            </div>
            <br />
          </div>

        ))
      )}

      {
        carrito.length > 0 &&
        <>
            <h2 className={styles.precioTotal}>Precio Total: ${precioTotal()}</h2>
              <div className={styles.botonesCarrito}>
                <button className={styles.botonVaciar} onClick={handleVaciar}>Vaciar</button>
                <Link className={styles.finalizar} to="/checkout">Finalizar Compra</Link>
              </div>
        </>
      }
    </div>
  );
};

export default Carrito;
