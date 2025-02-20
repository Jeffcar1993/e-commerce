import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Footer from "../Footer";

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
        });

    }, [category]);

  return (
    <div className="main-content">
      <ItemList productos={productos} titulo={titulo}/>
      <Footer/>
    </div>
  )
}

export default Products