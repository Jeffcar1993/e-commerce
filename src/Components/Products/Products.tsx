import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";

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
    console.log(productos);
    
    useEffect(() => {
      pedirDatos()
        .then((res: Producto[]) => { 
          setProductos(res);
        })
        .catch((err) => console.error("Error al cargar productos:", err));
    }, []);

  return (
    <div>

    </div>
  )
}

export default Products