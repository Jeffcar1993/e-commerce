import { useForm } from "react-hook-form"
import Footer from "../Footer";
import styles from "./Contacto.module.css";

interface FormData {
    nombre: string;
    email: string;
    mensaje: string;
  }

const Contacto = () => {

    const { register, handleSubmit, reset } = useForm<FormData>();

    const enviar = (data: FormData) => {
        console.log(data);
        alert("¡Mensaje enviado exitosamente!");
        reset();
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