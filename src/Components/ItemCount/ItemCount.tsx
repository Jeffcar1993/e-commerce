

interface ItemCountProps {
  count: number;
    handleRestar: () => void;
    handleSumar: () => void;
  }

const ItemCount = ({ count, handleRestar, handleSumar }: ItemCountProps) => {

    

  return (
    <div>
        <div>
            <button onClick={handleRestar}>-</button>
            <p>{count}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <div>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default ItemCount