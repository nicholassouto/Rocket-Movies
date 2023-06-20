import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../Componentes/Input";
import { Button } from "../../Componentes/Button";
import { ButtonText } from "../../Componentes/ButtonText";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !password || !email) {
      alert("Preenche todos os campos");
      return;
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <section>
          <Input icon={FiUser} placeholder="nome" type="text" onChange={(e) => setName(e.target.value)} />
          <Input icon={FiMail} placeholder="e-mail" type="email" onChange={(e) => setEmail(e.target.value)} />
          <Input icon={FiLock} placeholder="senha" type="password" onChange={(e) => setPassword(e.target.value)} />
        </section>
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
