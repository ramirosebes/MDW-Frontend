import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "./logIn.module.css";

const Login = () => {
    localStorage.removeItem("token");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem("token", user.accessToken);

            navigate("/admin");
        } catch (error) {
            console.error(error);
            setErrorMessage("¡Incorrect credentials!");

            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.div}>
                <h2 className={styles.title}>Login Page</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input className={styles.input} id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className={styles.label} htmlFor="email">Password:</label>
                    <input className={styles.input} id="password" type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>} {/* Mostrar el mensaje de error */}
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
