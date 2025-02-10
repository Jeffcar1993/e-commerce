import styles from "./App.module.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Login from "./Components/Login";
import ItemDetail from "./Components/ItemDetail";
import Nosotros from "./Components/Nosotros";
import Contacto from "./Components/Contacto";
import { CartContext, CartContextType } from "./Components/context/CartContext";
import { useState } from "react";
import { Producto } from "./Components/Products";
import Carrito from "./Components/Carrito";

interface ProductoEnCarrito extends Producto {
  cantidad: number;
}


const App = () => {
  const [carrito, setCarrito] = useState<ProductoEnCarrito[]>([]);


  const agregarAlCarrito = (item: Producto, cantidad: number) => {
    const itemAgregado: ProductoEnCarrito = { ...item, cantidad };
    const nuevoCarrito = [...carrito];

    const estaEnCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnCarrito) {
      estaEnCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }

    setCarrito(nuevoCarrito);
  };

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0 )
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const contextValue: CartContextType = {
    carrito,
    agregarAlCarrito,
    cantidadCarrito,
    precioTotal,
    vaciarCarrito,
  };

  return (
    <CartContext.Provider value={contextValue}>
      <BrowserRouter>
        <div className={styles.container}>
          <Link className={styles.logo} to="/">
            E-commerce
          </Link>
          <Navbar />
        </div>
        <div className={styles.contenedor}>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:categoria" element={<Products />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
