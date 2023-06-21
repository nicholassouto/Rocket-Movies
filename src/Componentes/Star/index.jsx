import { Container } from "./styles";
import { ReactSVG } from "react-svg";

import starSvg from "../../assets/star.svg";
import emptyStar from "../../assets/emptyStar.svg";

export function Star({ rating, ...rest }) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i > rating) {
      stars.push(<ReactSVG src={emptyStar} key={i} />);
    } else {
      stars.push(<ReactSVG src={starSvg} key={i} />);
    }
  }
  return <Container {...rest}>{stars}</Container>;
}
