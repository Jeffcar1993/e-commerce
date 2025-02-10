

interface ItemCountProps {
  cantidad: number;
    handleRestar: () => void;
    handleSumar: () => void;
    handleAgregar: () => void;
  }

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }: ItemCountProps) => {

    

  return (
    <div>
        <div>
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <div>
            <button onClick={handleAgregar}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ItemCount