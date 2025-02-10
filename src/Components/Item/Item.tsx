import { useState } from "react";
import { Producto } from "../Products";
import ItemCount from "../ItemCount";

interface ItemProps {
  item: Producto;
  }

const Item = ({ item }: ItemProps ) => {

  const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    const handleSumar = () => {
        if (cantidad < item.stock)
        setCantidad(cantidad + 1)
    }

    const handleAgregar = () => {
      console.log( {...item, cantidad} );
    }

  return (
    <div>
      <div>
        <div>
          <img src={item.imagen} alt={item.titulo} />
        </div>
        <div>
          <h2>{item.titulo}</h2>
          <p>{item.descripcion}</p>
          <h3>{item.categoria}</h3>
          <p>{item.precio}</p>
          <p>{item.stock}</p>
          <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={handleAgregar}/>
        </div>
      </div>
    </div>
  )
}

export default Item