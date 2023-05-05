import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../Componentes/Input";
import { Button } from "../../Componentes/Button";
import { ButtonText } from "../../Componentes/ButtonText";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <section>
          <Input icon={FiMail} placeholder="e-mail" type="email" />
          <Input icon={FiLock} placeholder="senha" type="password" />
        </section>
        <Button title="Entrar" />
        <Link to="/SignUp">
          <ButtonText title="Criar conta" />
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
