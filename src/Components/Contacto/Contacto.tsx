import { useForm } from "react-hook-form"

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
        <h1>Contacto</h1>
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
  )
}

export default Contacto