import React from "react";

import { Container, Wrapper, Row, Column, Copyright } from "./styles";

import { Link } from "react-router-dom";

const data = new Date();
const year = data.getFullYear();

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column>
            <h4>Titlte</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Titlte</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Titlte</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Titlte</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Column>
        </Row>
      </Wrapper>

      <Copyright>
        <h4>
          ©Todos os direitos reservados {year} <br />
          Qually Grama
        </h4>
      </Copyright>
    </Container>
  );
}

export default Footer;
