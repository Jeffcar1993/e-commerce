import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList";

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
    
    useEffect(() => {
      pedirDatos()
        .then((res: Producto[]) => { 
          setProductos(res);
        })
        .catch((err) => console.error("Error al cargar productos:", err));
    }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default Products