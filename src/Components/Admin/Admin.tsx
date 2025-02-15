import { useState } from "react";
import { db } from "../../firebase/config"; // Asegúrate de importar tu configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import styles from "./Admin.module.css";

const Admin = () => {
    const [form, setForm] = useState({
        imagen: "",
        titulo: "",
        descripcion: "",
        categoria: "",
        precio: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validación
        if (!form.imagen || !form.titulo || !form.descripcion || !form.precio) {
            setError("Todos los campos son obligatorios");
            return;
        }

        try {
            // Referencia a la colección "productos" en Firestore
            const productosRef = collection(db, "productos");

            // Agregar documento con ID automático
            await addDoc(productosRef, {
                imagen: form.imagen,
                titulo: form.titulo,
                descripcion: form.descripcion,
                categoria: form.categoria,
                precio: form.precio,
                fecha: new Date().toISOString(), // Agregar fecha de creación
            });

            setSuccess("Producto cargado exitosamente");
            setError("");
            
            // Limpiar formulario
            setForm({ imagen: "", titulo: "", descripcion: "", precio: "", categoria: "" });

        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Ocurrió un error desconocido.");
            }
        }
    };

    return (
        <div className={styles.admin}>
            <h1 className={styles.tituloAdmin}>Panel de Administrador</h1>
            <p className={styles.infoAdmin}>Ingrese los datos completos para cargar un nuevo producto a su App</p>

            <form className={styles.adminContainer} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="imagen"
                    placeholder="URL de la imagen"
                    value={form.imagen}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="titulo"
                    placeholder="Título del producto"
                    value={form.titulo}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="descripcion"
                    placeholder="Descripción del producto"
                    value={form.descripcion}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="categoria"
                    placeholder="categoria"
                    value={form.categoria}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="precio"
                    placeholder="Precio"
                    value={form.precio}
                    onChange={handleChange}
                />

                <button type="submit" className={styles.botonAdmin}>
                    Cargar Producto
                </button>
            </form>

            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}
        </div>
    );
};

export default Admin;
