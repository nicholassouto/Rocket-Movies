import { Container } from "./styles";

import { Star } from "../Star";
import { Tags } from "../Tags";

export function NoteMovie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <header>
        <h2>{data.title}</h2>
        <Star rating={data.rating} />
      </header>

      <main>
        <p>{data.description}</p>
      </main>

      {data.tags && (
        <footer>
          {data.tags.map((tags) => (
            <Tags key={tags.id} title={tags.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
