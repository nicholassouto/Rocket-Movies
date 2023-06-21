import { Container, PageHead, Sections, Header, Profile, Title, Search, ProfileNav, Notes } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import { useState, useEffect } from "react";

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

import { Button } from "../../Componentes/Button";
import { Input } from "../../Componentes/Input";
import { NoteMovie } from "../../Componentes/NoteMovie";

export function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const { signOut, user } = useAuth();

  const navigation = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  function handleDetails(id) {
    navigation(`/MoviePreview/${id}`);
  }

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);
  return (
    <Container>
      <Header>
        <Title>
          <h1>RocketMovies</h1>
        </Title>
        <Search>
          <Input placeholder="Pesquisar pelo título" onChange={(e) => setSearch(e.target.value)} />
        </Search>
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
      </Header>
      <main>
        <PageHead>
          <h1>Meus filmes</h1>
          <Link to="CreateMovie">
            <Button icon={AiOutlinePlus} title="Adcionar filme" />
          </Link>
        </PageHead>
        <Sections>
          <Notes>
            <div>
              {notes.map((note) => (
                <NoteMovie key={String(note.id)} data={note} onClick={() => handleDetails(note.id)} />
              ))}
            </div>
          </Notes>
        </Sections>
      </main>
    </Container>
  );
}
