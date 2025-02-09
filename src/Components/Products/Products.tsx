import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

export interface Producto {
  id: number;
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
  const [titulo, setTitulo] = useState("Productos");
    
    useEffect(() => {
      pedirDatos()
        .then((res: Producto[]) => { 
          if (category) {
            setProductos( res.filter((prod) => prod.categoria === category) );
            setTitulo(category)
          } else {
            setProductos(res);
            setTitulo("Productos")
          }
        })
        .catch((err) => console.error("Error al cargar productos:", err));
    }, [category]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo}/>
    </div>
  )
}

export default Products