import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"


const CartWidget = () => {

    const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null; // O muestra un valor por defecto si es necesario
  }

  return (
    <div>
        <Link to={"/carrito"}>
            <h1>Cart</h1>
            <span>{cartContext.cantidadCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget