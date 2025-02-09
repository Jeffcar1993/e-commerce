import { Producto } from "../Products";

interface ItemProps {
  item: Producto;
  }

const Item = ({ item }: ItemProps ) => {
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
        </div>
      </div>
    </div>
  )
}

export default Item