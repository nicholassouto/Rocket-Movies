import { useState } from "react";

import { api } from "../../services/api";

import { Container, NewMovies, Inputs, Sections, TagWrapper, DeleteMovies } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../../Componentes/Header";
import { Button } from "../../Componentes/Button";
import { Section } from "../../Componentes/Section";
import { ButtonText } from "../../Componentes/ButtonText";
import { TextArea } from "../../Componentes/TextArea";
import { Input } from "../../Componentes/Input";
import { NoteItem } from "../../Componentes/NoteItem";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState([]);

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleRatingChange(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 5) {
      setRating(value);
    }
  }

  async function handleNewNote() {
    if (!title || !description) {
      return alert("Algum dos campos não foi preenchido");
    }
    if (tags.length < 1) {
      return alert("Adcione uma tag");
    }
    if (newTag) {
      return alert("Você deixou uma tag sem adcionar");
    }
    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    });

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  function handleDeleteData() {
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <main>
        <NewMovies>
          <Link to="/">
            <ButtonText icon={FiArrowLeft} title="Voltar" />
          </Link>
          <h1>Novo filme</h1>
        </NewMovies>
        <Inputs>
          <Input type="text" placeholder="Título" onChange={(e) => setTitle(e.target.value)} />
          <Input
            type="number"
            min="0"
            max="5"
            placeholder="Sua nota(de 0 a 5)"
            onChange={(e) => handleRatingChange(e)}
          />
        </Inputs>
        <TextArea placeholder="Observações" onChange={(e) => setDescription(e.target.value)} />
        <Sections>
          <Section title="Marcadores">
            <TagWrapper>
              <div className="tags">
                {tags.map((tag, index) => (
                  <NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
                ))}
                <NoteItem
                  isNew
                  placeholder="Novo marcador"
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </TagWrapper>
          </Section>
        </Sections>
        <div className="save-delete-movies">
          <DeleteMovies onClick={handleDeleteData}>Excluir filme</DeleteMovies>
          <Button title="Salvar alterações" onClick={handleNewNote} />
        </div>
      </main>
    </Container>
  );
}
