/* eslint-disable react/jsx-no-target-blank */
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
                <a
                  href={"https://br.pinterest.com/QuallyGrama/"}
                  target="_blank"
                >
                  <i>
                    <BsPinterest />
                  </i>

                  <p>Pinterest</p>
                </a>
              </li>

              <li>
                <a
                  href={"https://www.instagram.com/quallygrama/"}
                  target="_blank"
                >
                  <i>
                    <AiFillInstagram />
                  </i>
                  <p>Instagram</p>
                </a>
              </li>

              <li>
                <a
                  href={"https://www.linkedin.com/company/qually-grama"}
                  target="_blank"
                >
                  <i>
                    <FaLinkedinIn />
                  </i>

                  <p>LinkedIn</p>
                </a>
              </li>

              <li>
                <a
                  href={"https://www.facebook.com/QuallyGrama"}
                  target="_blank"
                >
                  <i>
                    <FaFacebookF />
                  </i>

                  <p>Facebook</p>
                </a>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Políticas da empresa</h4>
            <ul>
              <li>
                <Link to="/termos">Política de privacidade</Link>
              </li>

              <li>
                <Link to="/termosCookies">Política de Cookies</Link>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Fale conosco</h4>
            <ul>
              <li>
                <p>
                  Clique no Link abaixo e converse diretamente com a nossa
                  equipe:
                </p>
              </li>
              <li>
                <a
                  href={`https://api.whatsapp.com/send?phone=5515996159898&text=Oi`}
                  target="_blank"
                >
                  <button type="button">WhatsApp</button>
                </a>
              </li>

              <li>
                <p>
                  Você também pode nos ligar nesse número
                  <a href="tel:+5501532059300"> (15) 3205-9300</a>
                </p>
              </li>
            </ul>
          </Column>

          <Column>
            <h4>Nossos Parceiros</h4>
            <ul>
              <li>
                <a href="https://sodsolutions.com/" target="_blank">
                  SodSolutions
                </a>
              </li>

              <li>
                <a href="https://www.turfgrasssod.org/" target="_blank">
                  TPI
                </a>
              </li>
            </ul>
          </Column>
        </Row>
      </Wrapper>

      <Copyright>
        <h4>
          ©Todos os direitos reservados {year} <br />
          Qually Grama - Matriz Tatuí-SP
        </h4>
      </Copyright>
    </Container>
  );
}

export default Footer;
