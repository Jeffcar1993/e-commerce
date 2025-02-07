import styles from "./App.module.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from "./Components/Home";
import Products from "./Components/Products";
import Lacteos from "./Components/Lacteos";
import Trucha from "./Components/Trucha";
import Login from "./Components/Login";

function App() {


  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Link className={styles.logo} to="/">E-commerce</Link>
        <Navbar />
      </div>
      <div className={styles.contenedor}>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/products" element={ <Products />}/>
            <Route path="/lacteos" element={ <Lacteos />} />
            <Route path="/trucha" element={ <Trucha />} />
            <Route path="/login" element={ <Login />} />
          </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
