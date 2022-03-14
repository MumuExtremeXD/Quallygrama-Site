import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper } from "./styles";

import Img404 from "../../images/404/404img.webp";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer";

function NotFound() {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Link to={"../"}>
          <img src={Img404} alt="404" loading="lazy" />
        </Link>
      </Wrapper>

      <Footer />
    </Container>
  );
}

export default NotFound;
