import { useState } from "react";

import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../Componentes/Input";
import { Button } from "../../Componentes/Button";
import { ButtonText } from "../../Componentes/ButtonText";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <section>
          <Input icon={FiMail} placeholder="e-mail" type="email" onChange={(e) => setEmail(e.target.value)} />
          <Input icon={FiLock} placeholder="senha" type="password" onChange={(e) => setPassword(e.target.value)} />
        </section>
        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/SignUp">
          <ButtonText title="Criar conta" />
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
