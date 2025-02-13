import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import styles from "./Cartwidget.module.css";
import { ShoppingCart } from "lucide-react";


const CartWidget = () => {

    const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null; // O muestra un valor por defecto si es necesario
  }

  return (
        <Link className={styles.contenedorCart} to={"/carrito"}>
            <h2><ShoppingCart/></h2>
            <span>{cartContext.cantidadCarrito()}</span>
        </Link>
  )
}

export default CartWidget