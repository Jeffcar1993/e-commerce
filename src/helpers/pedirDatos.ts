import { Producto } from "../Components/Products";
import data from "../data/data.json";

// ✅ Especificamos que la función devuelve una Promise con un array de productos
export const pedirDatos = (): Promise<Producto[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};
