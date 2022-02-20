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

import Header from "../../components/Headers/HeaderProject";
import Footer from "../../components/Footer";

import ImgTeste from "../../images/esmeralda.webp";

function Projects() {
  return (
    <Container>
      <Header />

      <Content>
        <ContainerHalfText>
          <h2>Teste</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            doloremque cupiditate, tempore sunt delectus repudiandae debitis ad
            temporibus officia, saepe cumque? Voluptatum in quasi quis similique
            nostrum eius delectus corporis.
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
