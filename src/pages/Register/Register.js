import React from "react";

import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");
  const [workLoad, setWorkLoad] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      role,
      workLoad,
    };

    setError("");
    console.log(user);
  };
  return (
    <div className={styles.register}>
      <h2>Cadastrar Novo Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
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
        <label>
          <span>Tipo usuário</span>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="ADMIN">Administrador</option>
            <option value="REGULAR">Colaborador</option>
          </select>
        </label>
        <label>
          <span>Carga horária</span>
          <select
            name="workLoad"
            value={workLoad}
            onChange={(e) => setWorkLoad(e.target.value)}
          >
            <option value="EIGHT_HOURS"> 8 horas com pausa de 1 hora</option>
            <option value="SIX_HOURS"> 8 horas com pausa de 1 hora</option>
          </select>
        </label>
        <button className="btn">Cadastrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
