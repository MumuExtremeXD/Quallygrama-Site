import React from "react";

import { Container, Content, Wrapper, BoxInformation } from "./styles";

import Header from "../../components/Headers/HeaderProd";

function Projects() {
  return (
    <Container>
      <Header />

      <Content>
        <Wrapper>
          <BoxInformation>
            <p>Teste</p>
          </BoxInformation>

          <p>Teste2</p>
        </Wrapper>
      </Content>
    </Container>
  );
}

export default Projects;
