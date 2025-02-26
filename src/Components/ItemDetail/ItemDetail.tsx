import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export interface Producto {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  precio: number;
  stock: number;
}

const ItemDetail = () => {
  const [item, setItem] = useState<Producto | null>(null);
  const [loading, setLoading] = useState(true); // Nueva variable para manejar el estado de carga
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const docRef = doc(db, "productos", id);

    getDoc(docRef).then((resp) => {
      if (resp.exists()) {
        setItem({ ...resp.data(), id: resp.id } as Producto);
      }
      setLoading(false); // Ocultamos el estado de carga cuando se obtiene el producto
    });
  }, [id]);

  if (loading) return <p>Cargando...</p>; // Muestra un mensaje mientras se carga el producto

  return (
    <div>
      {item ? <Item item={item} /> : <p>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetail;
