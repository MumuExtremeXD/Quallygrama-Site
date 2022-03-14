import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Content,
  ContentExplication,
  ContentDivider,
  ContainerHalf,
  ContainerHalfText,
  WrapperText,
  WrapperNormal,
  WrapperReverse,
  WrapperImg,
  WrapperFeature,
} from "./styles";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer";

import ImgTeste from "../../images/esmeralda.webp";

function Projects() {
  return (
    <Container>
      <Header />

      <Content>
        <ContainerHalfText>
          <h2>O começo...</h2>

          <p>
            Desde 1999 no mercado, a Qually Grama é uma empresa especializada na
            produção de gramas. Investimos constantemente em tecnologia de
            ponta, do cultivo à entrega, atendemos clientes de todo território
            nacional.
          </p>
        </ContainerHalfText>

        <ContainerHalf>
          <img src={ImgTeste} alt="ts" loading="lazy" />
        </ContainerHalf>
      </Content>

      <ContentDivider>
        <WrapperText>
          <p>We Do Brandings</p>

          <p>
            We’re a small creative design studio based in New York, working with
            adventurous clients and providing Creative Concept, Branding,
            Graphic Design, Art Direction and Digital Communication services.
          </p>

          <Link to={""}>Faça parte do nosso time</Link>
        </WrapperText>
      </ContentDivider>

      <ContentExplication>
        <WrapperNormal>
          <WrapperImg>
            <img src={ImgTeste} alt="ts" loading="lazy" />
          </WrapperImg>

          <WrapperFeature>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis incidunt molestias omnis quae. Pariatur exercitationem
              corrupti quis ducimus quisquam. Quod sint minima enim similique
              laborum ullam ad commodi inventore assumenda.
            </p>
          </WrapperFeature>
        </WrapperNormal>

        <WrapperReverse>
          <WrapperImg>
            <img src={ImgTeste} alt="ts" loading="lazy" />
          </WrapperImg>

          <WrapperFeature>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis incidunt molestias omnis quae. Pariatur exercitationem
              corrupti quis ducimus quisquam. Quod sint minima enim similique
              laborum ullam ad commodi inventore assumenda.
            </p>
          </WrapperFeature>
        </WrapperReverse>

        <WrapperNormal>
          <WrapperImg>
            <img src={ImgTeste} alt="ts" loading="lazy" />
          </WrapperImg>

          <WrapperFeature>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis incidunt molestias omnis quae. Pariatur exercitationem
              corrupti quis ducimus quisquam. Quod sint minima enim similique
              laborum ullam ad commodi inventore assumenda.
            </p>
          </WrapperFeature>
        </WrapperNormal>

        <WrapperReverse>
          <WrapperImg>
            <img src={ImgTeste} alt="ts" loading="lazy" />
          </WrapperImg>

          <WrapperFeature>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis incidunt molestias omnis quae. Pariatur exercitationem
              corrupti quis ducimus quisquam. Quod sint minima enim similique
              laborum ullam ad commodi inventore assumenda.
            </p>
          </WrapperFeature>
        </WrapperReverse>
      </ContentExplication>

      <Footer />
    </Container>
  );
}

export default Projects;
