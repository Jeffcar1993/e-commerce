import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import styles from "./Login.module.css";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    if (!email || !password) {
      setError("Por favor, ingresa tu usuario y contraseña.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.email === "jphoenixx09@gmail.com") { // Reemplaza con el correo del admin
        navigate("/admin"); // Redirigir a la sección de administración
      } else {
        setError("No tienes permisos de administrador.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error desconocido.");
      }
    }
  };

  return (
    <div className={styles.login}>

        <h1 className={styles.tituloLogin}>Bienvenido Administrador</h1>

        <form className={styles.formLogin} onSubmit={handleSubmit}>

            <input 
                type="email" 
                placeholder="ingrese email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

            <input 
                type="password" 
                placeholder="ingrese password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

            <button className={styles.botonLogin} type="submit">Ingresar</button>
        
        </form>

        {error && <p>{error}</p>}

    </div>
  )
}

export default Login