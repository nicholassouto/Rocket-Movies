import { Container, Profile, Title, ProfileNav } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api";

import { Input } from "../Input";

export function Header() {
  
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  

  return (
    <Container>
      <Title>
        <h1>RocketMovies</h1>
      </Title>
      <div>
        <Profile>
          <div>
            <Link to="Profile">
              <ProfileNav>
                <strong>{user.name}</strong>
              </ProfileNav>
            </Link>
            <span onClick={handleSignOut}>Sair</span>
          </div>
          <Link to="Profile">
            <ProfileNav>
              <img src={avatarUrl} alt={user.name} />
            </ProfileNav>
          </Link>
        </Profile>
      </div>
    </Container>
  );
}
