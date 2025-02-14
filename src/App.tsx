import styles from "./App.module.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Login from "./Components/Login";
import ItemDetail from "./Components/ItemDetail";
import Nosotros from "./Components/Nosotros";
import Contacto from "./Components/Contacto";
import { CartProvider } from "./Components/context/CartContext";
import Carrito from "./Components/Carrito";
import CheckOut from "./Components/CheckOut";
import { useEffect, useState } from "react";


const App = () => {

  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [user]);
  
  
  return (
    <CartProvider>
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
            <Route path="/login" element={<Login/>} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
