import React from "react";

import { Container, Wrapper, Row, Column, Copyright } from "./styles";

import { Link } from "react-router-dom";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const data = new Date();
const year = data.getFullYear();

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column>
            <h4>Rede sociais</h4>
            <ul>
              <li>
                <Link to="/">
                  <i>
                    <AiFillInstagram />
                  </i>
                  <p>Instagram</p>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <i>
                    <BsPinterest />
                  </i>

                  <p>Pinterest</p>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <i>
                    <FaLinkedinIn />
                  </i>

                  <p>LinkedIn</p>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <i>
                    <FaFacebookF />
                  </i>

                  <p>Facebook</p>
                </Link>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Políticas de privacidade</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Fale conosco</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Nossos Parceiros</h4>
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
