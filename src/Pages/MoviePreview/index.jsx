import { useState, useEffect } from "react";

import { Container, MovieTitle } from "./styles";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";

import { useParams, useNavigate } from "react-router-dom";

import { Header } from "../../Componentes/Header";
import { ButtonText } from "../../Componentes/ButtonText";
import { Tags } from "../../Componentes/Tags";
import { Star } from "../../Componentes/Star";

import { useAuth } from "../../hooks/auth";

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api";

export function MoviePreview() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const params = useParams();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja remover a nota?");
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      <div>
        <div className="back" onClick={handleBack}>
          <ButtonText icon={FiArrowLeft} title="Voltar" />
        </div>
        <div onClick={handleRemove} value={console.log(handleRemove)}>
          <ButtonText className="deleteNote" icon={FiX} title="Deletar nota" />
        </div>
      </div>
      {data && (
        <main>
          <MovieTitle>
            <div>
              <h1>{data.title}</h1>
              <Star rating={data.rating} />
            </div>
            <section>
              <img src={avatarUrl} alt={user.name} />
              <p>{user.name}</p>
              <CiClock2 />
              <p>{data.created_at}</p>
            </section>
          </MovieTitle>
          {data.tags && (
            <div className="tags">
              {data.tags.map((tags) => (
                <Tags key={tags.id} title={tags.name} />
              ))}
            </div>
          )}
          <div className="movie-info">
            <p>{data.description}</p>
          </div>
        </main>
      )}
    </Container>
  );
}
