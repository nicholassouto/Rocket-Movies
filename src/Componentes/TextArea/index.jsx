import { Container } from "./styles";

export function TextArea({ placeholder, ...rest }) {
  return <Container placeholder={placeholder} {...rest}></Container>;
}
