import { Container, NewMovies, Inputs, Sections, TagWrapper, DeleteMovies } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Header } from "../../Componentes/Header";
import { Button } from "../../Componentes/Button";
import { Section } from "../../Componentes/Section";
import { ButtonText } from "../../Componentes/ButtonText";
import { TextArea } from "../../Componentes/TextArea";
import { Input } from "../../Componentes/Input";
import { NoteItem } from "../../Componentes/NoteItem/Index";

export function CreateMovie() {
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
          <Input type="text" placeholder="Título" />
          <Input type="text" placeholder="Sua nota(de 0 a 5)" />
        </Inputs>
        <TextArea placeholder="Observações" />
        <Sections>
          <Section title="Marcadores">
            <TagWrapper>
              <div className="tags">
                <NoteItem value="React" />
                <NoteItem isNew placeholder="Novo marcador" />
              </div>
            </TagWrapper>
          </Section>
        </Sections>
        <div className="save-delete-movies">
          <DeleteMovies>Excluir filme</DeleteMovies>
          <Button title="Salvar alterações" />
        </div>
      </main>
    </Container>
  );
}
