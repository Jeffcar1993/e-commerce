import styles from "./App.module.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar'
import Products from "./Components/Products";
import Login from "./Components/Login";
import ItemDetail from "./Components/ItemDetail";

function App() {

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Link className={styles.logo} to="/">E-commerce</Link>
        <Navbar />
      </div>
      <div className={styles.contenedor}>
          <Routes>
            <Route path="/" element={ <Products />}/>
            <Route path="/products" element={ <Products />}/>
            <Route path="/products/:categoria" element={ <Products />}/>
            <Route path="/item/:id" element={ <ItemDetail />} />
            <Route path="/login" element={ <Login />} />
          </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
