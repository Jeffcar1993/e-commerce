import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import styles from "./CheckOut.module.css";

interface FormData {
  nombre: string;
  email: string;
}

const CheckOut = () => {
  const [pedidoId, setPedidoId] = useState("");

  // Extrae correctamente los valores del contexto
  const cartContext = useContext(CartContext);
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  if (!cartContext) {
    return <p>Cargando carrito...</p>;
  }

  const { carrito, precioTotal, vaciarCarrito } = cartContext;

  const handleVaciar = () => {
    vaciarCarrito();
  };  

  const comprar = (data: FormData) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      handleVaciar();
    });
  };

  const volver = () => {
    navigate("/products");
  };

  if (pedidoId) {
    return (
      <div>
        <h1>Muchas gracias por tu compra</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
        <button type="button" onClick={volver}>
          Volver al comercio
        </button>
      </div>
    );
  }

  return (
    <div>

    <div className={styles.containerCheckOut}>
      <h1 className={styles.tituloCheckOut}>Finalizar Compra</h1>
      <form onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Nombre Completo"
          {...register("nombre", { required: true })}
          />

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          />

        <button type="submit">Comprar</button>
      </form>
          </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
