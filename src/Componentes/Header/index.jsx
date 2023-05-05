import { Container, Profile, Title, Search } from "./styles";
import { Link } from "react-router-dom";

import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Title>
        <h1>RocketMovies</h1>
      </Title>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Link to="Profile">
        <Profile>
          <div>
            <strong>Nícholas Souto</strong>
            <span>Sair</span>
          </div>
          <img src="https://github.com/nicholassouto.png" alt="Foto do usuário" />
        </Profile>
      </Link>
    </Container>
  );
}
