import { useContext, useState } from "react";
import { Producto } from "../Products";
import ItemCount from "../ItemCount";
import { CartContext } from "../context/CartContext";

interface ItemProps {
  item: Producto;
  }

const Item = ({ item }: ItemProps ) => {

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Item must be used within a CartContext.Provider");
  }

  const { agregarAlCarrito } = cartContext;
 
  
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
          <ItemCount 
            cantidad={cantidad} 
            handleRestar={handleRestar} 
            handleSumar={handleSumar} 
            handleAgregar={() => {agregarAlCarrito(item, cantidad) }}/>
        </div>
      </div>
    </div>
  )
}

export default Item