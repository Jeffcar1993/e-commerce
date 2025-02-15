import styles from "./ItemCount.module.css";

interface ItemCountProps {
  cantidad: number;
    handleRestar: () => void;
    handleSumar: () => void;
    handleAgregar: () => void;
  }

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }: ItemCountProps) => {

  return (
    <div className={styles.itemCount}>
        <div className={styles.itemcuntInfo}>
            <button className={styles.botonItemcount} onClick={handleRestar}>-</button>
            <p className={styles.cantidadItemcount}>{cantidad}</p>
            <button className={styles.botonItemcount} onClick={handleSumar}>+</button>
        </div>
        <div>
            <button className={styles.botonAgregar} onClick={handleAgregar}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ItemCount