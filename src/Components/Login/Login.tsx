import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

// Definimos el tipo de los datos del formulario
interface FormData {
  usuario: string;
  password: string;
}

// Definimos el tipo de los props que recibe el componente
interface LoginProps {
  setUser: (user: FormData) => void;
}

const Login = ( {setUser}: LoginProps ) => {

  const { register, handleSubmit, reset } = useForm<FormData>({});
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const ingresar: SubmitHandler<FormData> = (data) => {

    const { usuario, password } = data;

    const validCredentials: FormData = {
        usuario: 'admin',
        password: '1234',
      };

      if(usuario === validCredentials.usuario && password === validCredentials.password) {
        localStorage.setItem('user', JSON.stringify(validCredentials));
        setUser(validCredentials);
        navigate('/ingresarproductos');
        setErrorMessage('');
    } else {
        setErrorMessage('Credenciales incorrectas intentalo de nuevo')
        reset();
    }
    
  }

  return (
    <div>
        <h1>Bienvenido Administrador</h1>

        <form onSubmit={handleSubmit(ingresar)}>

            <input 
                type="text" 
                placeholder="ingrese usuario"
                {...register('usuario', {required: 'El usuario es obligatorio'})}
                />

            <input 
                type="password" 
                placeholder="ingrese password"
                {...register('password', {required: 'El password es obligatorio'})}
                />

                {errorMessage && <p className="error">{errorMessage}</p>}

            <button type="submit">Ingresar</button>
        
        </form>
    </div>
  )
}

export default Login