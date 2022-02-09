import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import Img404 from "../../images/404/404img.png";

function NotFound() {
  return (
    <Container>
      <Link to={"../"}>
        {" "}
        <img src={Img404} alt="ts" loading="lazy" />
      </Link>

      <Link to={"../"}>Voltar ao íncio</Link>
    </Container>
  );
}

export default NotFound;
