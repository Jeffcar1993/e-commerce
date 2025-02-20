import { createContext, ReactNode, useEffect, useState } from "react";
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
  eliminarProducto: (id: string) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

const carritoInicial: ProductoEnCarrito[] = JSON.parse(localStorage.getItem("carrito") || "[]");

export const CartProvider = ({ children }: CartProviderProps) => {
  const [carrito, setCarrito] = useState<ProductoEnCarrito[]>(carritoInicial);

  const agregarAlCarrito = (item: Producto, cantidad: number) => {
    const itemAgregado: ProductoEnCarrito = { ...item, cantidad };
    const nuevoCarrito = [...carrito];

    const estaEnCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnCarrito) {
      estaEnCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const cantidadCarrito = () => {
    return carrito.length > 0 
      ? carrito.reduce((acc, prod) => acc + (prod.cantidad || 0), 0)
      : 0; // ✅ Evita NaN si el carrito está vacío
  };
  
  const precioTotal = () => {
    return carrito.length > 0 
      ? carrito.reduce((acc, prod) => acc + ((prod.precio || 0) * (prod.cantidad || 0)), 0)
      : 0; // ✅ Evita NaN si el carrito está vacío o si un producto no tiene precio
  };
  
  const eliminarProducto = (id: string) => {
    setCarrito((prevCarrito) => prevCarrito.filter(prod => prod.id !== id));
  };
  

  const vaciarCarrito = () => {
    setCarrito([])
  }

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  const contextValue: CartContextType = {
    carrito,
    agregarAlCarrito,
    cantidadCarrito,
    precioTotal,
    vaciarCarrito,
    eliminarProducto,
  };

  return (

    <CartContext.Provider value={contextValue}>
    {children}
  </CartContext.Provider>
  )
}