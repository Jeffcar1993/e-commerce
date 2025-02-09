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

export const pedirItem = (id: number): Promise<Producto> => {
  return new Promise ((resolve, reject) => {

    const item = data.find( (el)  => el.id === id)
    
    if(item) {
      resolve(item)
    } else {
      reject ({
        error: "No se encontro el producto"
      })
    }
  })
}
