import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Footer from "../Footer";
import Loading from "../Loading";
import styles from "./Products.module.css";

export interface Producto {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  precio: number;
  stock: number;
}


const Products = () => {

  const [productos, setProductos] = useState<Producto[]>([]);
  const category = useParams().categoria;
  const [titulo] = useState("Productos");
  const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
      
      const productosRef = collection(db, "productos");

      const q = category ? query(productosRef, where("categoria", "==", category)) : productosRef;

      getDocs(q)
        .then((resp) => {
          setProductos(
            resp.docs.map((doc) => {
              return { ...(doc.data() as Producto), id: doc.id };
            })
          );
          setIsLoading(false);
        });

    }, [category]);

  return (
    <div className="main-content">

      {/* Banner de producto destacado */}
        <div className={styles.banner}>
          <img src="/producto.png" alt="Nuevo Producto" className={styles.bannerImg} />
          <div className={styles.bannerContent}>
            <h2 className={styles.tituloBanner}>🌟 ¡Nuevo Lanzamiento! 🌟</h2>
            <p className={styles.infoBanner}><strong>Yogurt Griego</strong>. ¡Nuevos sabores uchuva y papayuela!</p>
            <Link to={"/item/Ll3rIVnxDMOZQXlKN7Pj"} className={styles.bannerBtn}>Ver Producto</Link>
          </div>
        </div>

      {isLoading ? <Loading /> : <ItemList productos={productos} titulo={titulo} isLoading={isLoading}/>}
      <Footer/>
    </div>
  )
}

export default Products