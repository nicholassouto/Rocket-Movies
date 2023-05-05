import { Container, Form } from "./styles";
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ButtonText } from "../../Componentes/ButtonText";
import { Input } from "../../Componentes/Input";
import { Button } from "../../Componentes/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar" />
        </Link>
      </header>
      <main>
        <div className="user-photo">
          <img src="https://github.com/nicholassouto.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera alt="Imagem de camera" />
            <input type="file" id="avatar" />
          </label>
        </div>
        <Form>
          <div>
            <Input placeholder="Nome" type="text" icon={FiUser} />
            <Input placeholder="E-mail" type="email" icon={FiMail} />
          </div>
          <div>
            <Input placeholder="Senha atual" type="password" icon={FiLock} />
            <Input placeholder="Nova senha" type="password" icon={FiLock} />
          </div>
        </Form>
        <footer>
          <Button title="Salvar" />
        </footer>
      </main>
    </Container>
  );
}
