import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err || "Erro ao autenticar");
      }

      const data = await response.json(); // Espera token, role, id, email

      login(data.token, data.role, data.id, email);

      navigate("/about");
    } catch (err) {
      setError(err.message || "Erro ao fazer login");
    }
  };

  return (
    <div className={styles.register}>
      <h2>Informe suas credenciais</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button className="btn">Entrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
