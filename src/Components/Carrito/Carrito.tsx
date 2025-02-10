import { useContext } from "react";
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
    <div>
      <h1>Carrito</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map((prod, index) => (
          <div key={index}>
            <h2>{prod.titulo}</h2>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio und: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <br />
          </div>
        ))
      )}

      {
        carrito.length > 0 &&
        <>
            <h2>Precio Total: ${precioTotal()}</h2>
            <button onClick={handleVaciar}>Vaciar</button>
        </>
      }
    </div>
  );
};

export default Carrito;
