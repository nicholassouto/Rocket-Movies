import { Container, PageHead, Sections, Tag, Header, Profile, Title, Search, ProfileNav } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { ReactSVG } from "react-svg";
import starSvg from "../../assets/star.svg";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import { useState, useEffect } from "react";

import { Button } from "../../Componentes/Button";
import { Section } from "../../Componentes/Section";
import { Tags } from "../../Componentes/Tags";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

import { Input } from "../../Componentes/Input";

export function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const { signOut, user } = useAuth();

  const navigation = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

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
          <Input placeholder="Pesquisar pelo título" onChange={() => setSearch(e.target.value)} />
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
          <div>
            <Link to="MoviePreview/1">
              <Section title="Interestelar">
                <ReactSVG src={starSvg} alt="5 estrelas rosa para indicar nota" />
                <p>
                  Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de
                  data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
                  anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com
                  ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando
                  mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam
                  até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um
                  buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições
                  de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três
                  planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann –
                  nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave
                  espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a
                  humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial.
                  A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga
                  Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE.
                  Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme
                  dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a
                  sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano
                  raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os
                  dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia
                  descobrem que 23 anos se passaram.
                </p>
                <Tag>
                  <Tags title="Ficção Científica" />
                  <Tags title="Drama" />
                  <Tags title="Família" />
                </Tag>
              </Section>
            </Link>
          </div>
          <div>
            <Link to="MoviePreview/1">
              <Section title="Interestelar">
                <ReactSVG src={starSvg} alt="5 estrelas rosa para indicar nota" />
                <p>
                  Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de
                  data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
                  anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com
                  ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando
                  mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam
                  até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um
                  buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições
                  de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três
                  planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann –
                  nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave
                  espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a
                  humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial.
                  A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga
                  Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE.
                  Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme
                  dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a
                  sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano
                  raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os
                  dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia
                  descobrem que 23 anos se passaram.
                </p>
                <Tag>
                  <Tags title="Ficção Científica" />
                  <Tags title="Drama" />
                  <Tags title="Família" />
                </Tag>
              </Section>
            </Link>
          </div>
          <div>
            <Link to="MoviePreview/1">
              <Section title="Interestelar">
                <ReactSVG src={starSvg} alt="5 estrelas rosa para indicar nota" />
                <p>
                  Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de
                  data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
                  anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com
                  ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando
                  mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam
                  até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um
                  buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições
                  de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três
                  planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann –
                  nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave
                  espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a
                  humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial.
                  A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga
                  Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE.
                  Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme
                  dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a
                  sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano
                  raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os
                  dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia
                  descobrem que 23 anos se passaram.
                </p>
                <Tag>
                  <Tags title="Ficção Científica" />
                  <Tags title="Drama" />
                  <Tags title="Família" />
                </Tag>
              </Section>
            </Link>
          </div>
        </Sections>
      </main>
    </Container>
  );
}
