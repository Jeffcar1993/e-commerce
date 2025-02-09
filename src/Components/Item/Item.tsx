import { useState } from "react";
import ItemCount from "../ItemCount";
import { Producto } from "../Products";

interface ItemProps {
  item: Producto;
  }

const Item = ({ item }: ItemProps ) => {

  const [count, setCount] = useState(1);

    const handleRestar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handleSumar = () => {
        if (count < item.stock)
        setCount(count + 1)
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
          <ItemCount count={count} handleRestar={handleRestar} handleSumar={handleSumar} />
        </div>
      </div>
    </div>
  )
}

export default Item