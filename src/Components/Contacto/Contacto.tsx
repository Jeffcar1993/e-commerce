import { useForm } from "react-hook-form"
import Footer from "../Footer";
import styles from "./Contacto.module.css";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState } from "react";

interface FormData {
    nombre: string;
    email: string;
    mensaje: string;
  }

const Contacto = () => {
    const [mensaje, setMensaje] = useState("");
    const { register, handleSubmit, reset } = useForm<FormData>();
    const navigate = useNavigate();

    const enviar = (data: FormData) => {
        const mensajeContacto = {
            usuario: data,
        };

        const mensajeContactoRef = collection(db, "mensajes");

        addDoc(mensajeContactoRef, mensajeContacto).then((doc) => {
            setMensaje(doc.id);
        });
        reset();
    }

    const volver = () => {
        navigate("/products");
    };

    if (mensaje) {
        return (
          <div className={styles.mensajeReturn}>
            <h1 className={styles.tituloReturn}>Gracias por tu mensaje</h1>
            <p className={styles.infoReturn}>nos pondremos en contacto con tigo en el menor tiempo posible.</p>
            <button className={styles.botonReturn} type="button" onClick={volver}>
              Volver al comercio
            </button>
          </div>
        );
      }

  return (
    <div>

    <div className={styles.containerContacto}>
        <h1 className={styles.tituloContacto}>Contacto</h1>
        <form onSubmit={handleSubmit(enviar)}>

            <input 
                type="text"
                placeholder="Nombre Completo"
                {...register("nombre", { required: true })}
                />

            <input 
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
            />

            <textarea 
                placeholder="Mensaje"
                {...register("mensaje", { required: true })} 
                ></textarea>

            <button type="submit">Enviar</button>
            
        </form>
    </div>
        <Footer/>
    </div>
  )
}

export default Contacto