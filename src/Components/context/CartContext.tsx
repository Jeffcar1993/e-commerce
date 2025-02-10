import { createContext } from "react";
import { Producto } from "../Products";

export interface ProductoEnCarrito extends Producto {
  cantidad: number;
}

export interface CartContextType {
  carrito: ProductoEnCarrito[];
  agregarAlCarrito: (item: Producto, cantidad: number) => void;
  cantidadCarrito: () => number;
  precioTotal: () => number;
  vaciarCarrito: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);
