import { useEffect, useState } from "react";
import { db } from "../../firebase/config"; // Ajusta la ruta según tu estructura
import { collection, getDocs } from "firebase/firestore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carrusel.module.css";
import { Link } from "react-router-dom";

interface Producto {
  id: string;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

const Carrusel = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const productosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Producto[];

        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos sugeridos:", error);
      }
    };

    fetchProductos();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Por defecto en pantallas grandes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Celulares
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div className={styles.suggestedContainer}>
      <h2 className={styles.subtituloCarrusel}>Otros Productos Arcoiris 🌈</h2>

      {productos.length > 0 ? (
        <Slider className={styles.slider} {...settings}>
            {productos.map((producto) => (
            <Link to={`/item/${producto.id}`} key={producto.id} className={styles.producto}>
                <img src={producto.imagen} alt={producto.titulo} className={styles.imagen} />
                <h3 className={styles.tituloPrdCarrusel}>{producto.titulo}</h3>
                <p>categoria: {producto.categoria}</p>
                <p className={styles.precioCarrusel}>${producto.precio}</p>
                <button className={styles.botonVermas} >Ver mas</button>
            </Link>
            ))}
        </Slider>
        ) : (
        <p>Cargando productos...</p>
        )}
    </div>
  );
};

export default Carrusel;
