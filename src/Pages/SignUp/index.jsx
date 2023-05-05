import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../Componentes/Input";
import { Button } from "../../Componentes/Button";
import { ButtonText } from "../../Componentes/ButtonText";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <section>
          <Input icon={FiUser} placeholder="nome" type="text" />
          <Input icon={FiMail} placeholder="e-mail" type="email" />
          <Input icon={FiLock} placeholder="senha" type="password" />
        </section>
        <Button title="Cadastrar" />
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
