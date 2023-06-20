import { useState } from "react";
import { Container, Form } from "./styles";
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { ButtonText } from "../../Componentes/ButtonText";
import { Input } from "../../Componentes/Input";
import { Button } from "../../Componentes/Button";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar" />
        </Link>
      </header>
      <main>
        <div className="user-photo">
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera alt="Imagem de camera" />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </div>
        <Form>
          <div>
            <Input
              placeholder="Nome"
              type="text"
              icon={FiUser}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="E-mail"
              type="email"
              icon={FiMail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="Senha atual"
              type="password"
              icon={FiLock}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input
              placeholder="Nova senha"
              type="password"
              icon={FiLock}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </Form>
        <footer>
          <Button title="Salvar" onClick={handleUpdate} />
        </footer>
      </main>
    </Container>
  );
}
