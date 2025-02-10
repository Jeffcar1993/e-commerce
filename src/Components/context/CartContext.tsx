import { createContext } from "react";
import { Producto } from "../Products";

interface CartContextType {
  carrito: Producto[];
  agregarAlCarrito: (item: Producto, cantidad: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);
