import { useEffect, useState } from "react"
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
    const id = useParams().id

    useEffect(() => {
      if (!id) return; // Verifica que 'id' no sea undefined antes de continuar
    
      const docRef = doc(db, "productos", id);
    
      getDoc(docRef).then((resp) => {
        const data = resp.data();
        if (data) {
          setItem({ ...data, id: resp.id } as Producto); // Asegura el tipo de Producto
        }
      });
    }, [id]);
    
  return (
    <div>
        {item && <Item item={item} />}
    </div>
  )
}

export default ItemDetail