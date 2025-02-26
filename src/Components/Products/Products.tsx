import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Footer from "../Footer";
import Loading from "../Loading";
import styles from "./Products.module.css";

export interface Producto {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  precio: number;
  stock: number;
}

const Products = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [banners, setBanners] = useState([
    { id: "1", img: "", titulo: "🌟 ¡Nuevo Lanzamiento! 🌟", descripcion: "Yogurt Griego - ¡Nuevos sabores uchuva y papayuela!", link: "/item/NgcOzwpDVocYi1vEdik5" },
    { id: "2", img: "", titulo: "🌟 ¡Producto Delicioso! 🌟", descripcion: "Frambuesa - ¡Fruta deliciosa!", link: "/item/J9VZ7LzLgBm0mBQlSm7h" },
    { id: "3", img: "", titulo: "🌟 ¡Muy Saludable! 🌟", descripcion: "Uchuva - ¡Fruta fresca y saludable!", link: "/item/H76gYtkg3FC1Gkf7vhIF" },
  ]);
  const category = useParams().categoria;
  const [titulo] = useState("Productos");
  const [isLoading, setIsLoading] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = category ? query(productosRef, where("categoria", "==", category)) : productosRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => ({ ...(doc.data() as Producto), id: doc.id }))
      );
      setIsLoading(false);
    });
  }, [category]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const imagenesRef = collection(db, "imagenes");
        const snapshot = await getDocs(imagenesRef);
        
        if (!snapshot.empty) {
          // Convertir los documentos en un objeto donde la clave es el ID del documento
          const imagenesMap = snapshot.docs.reduce((acc, doc) => {
            acc[doc.id] = doc.data().imagen; // Guardamos la URL de la imagen
            return acc;
          }, {} as Record<string, string>);
    
          // Actualizar los banners con la imagen correcta según el ID en el link
          setBanners((prevBanners) =>
            prevBanners.map((banner) => {
              // Extraer el ID del link ("/item/ID")
              const bannerId = banner.link.split("/item/")[1];
    
              return {
                ...banner,
                img: imagenesMap[bannerId] || "/default-banner.jpg",
              };
            })
          );
        }
      } catch (error) {
        console.error("Error cargando imágenes de Firestore:", error);
      }
    };    
        
    fetchBanners();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners]);

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % banners.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="main-content">
      <div className={styles.bannerContainer}>
        <button onClick={prevBanner} className={styles.prevButton}>‹</button>
        <div className={styles.banner}>
          <img src={banners[currentBanner].img || "default-image.jpg"} alt={banners[currentBanner].titulo} className={styles.bannerImg} />
          <div className={styles.bannerContent}>
            <h2 className={styles.tituloBanner}>{banners[currentBanner].titulo}</h2>
            <p className={styles.infoBanner}>{banners[currentBanner].descripcion}</p>
            <Link to={banners[currentBanner].link} className={styles.bannerBtn}>Ver Producto</Link>
          </div>
        </div>
        <button onClick={nextBanner} className={styles.nextButton}>›</button>
      </div>
      {isLoading ? <Loading /> : <ItemList productos={productos} titulo={titulo} isLoading={isLoading}/>}
      <Footer />
    </div>
  );
};

export default Products;
