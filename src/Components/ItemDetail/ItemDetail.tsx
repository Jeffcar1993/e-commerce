import { useEffect, useState } from "react"
import { pedirItem } from "../../helpers/pedirDatos";
import Item from "../Item/Item";
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


const ItemDetail = () => {

    const [item, setItem] = useState<Producto | null>(null);
    const id = useParams().id

    useEffect(() => {
        pedirItem(Number(id))
            .then((res: Producto) => {
            setItem(res)
        })
        .catch((err) => console.error("Error al cargar el producto", err));
    }, [id])

  return (
    <div>
        {item && <Item item={item} />}
    </div>
  )
}

export default ItemDetail