import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  WrapperProducts1,
  WrapperProducts2,
  WrapperText,
  CardBox,
  Card,
  CardImg,
  CardImg3,
} from "./styles";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer";

import gramasVen from "../../images/gramasVen.png";
import ImgTeste from "../../images/esmeralda.webp";

function Home() {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <Container>
      <Header />

      <Wrapper>
        <div>
          <div className="GroupText">
            <h1>
              lorem ipsum dolor sit amet, consectetur lorem ipsum lorem ipsum
              dolor sit
            </h1>

            <p>
              lorem lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.
            </p>

            <Link to={"../gramas"}>
              <button>Conhecer</button>
            </Link>
          </div>

          <img src={gramasVen} alt="" />
        </div>
      </Wrapper>

      <WrapperProducts1>
        <h1>
          Todos os lugares que <br /> <span>estamos juntos!</span>
        </h1>

        <CardBox>
          <Card>
            <CardImg>
              <Link to={"/grama-esmeralda/6"}>
                <img src={ImgTeste} alt="ts" loading="lazy" />
              </Link>
              <Link to={"/grama-sao-carlos/5"}>
                <img src={ImgTeste} alt="ts" loading="lazy" />
              </Link>
              <Link to={"/grama-santo-agostinho/4"}>
                <img src={ImgTeste} alt="ts" loading="lazy" />
              </Link>
              <Link to={"/grama-bermudas/3"}>
                <img src={ImgTeste} alt="ts" loading="lazy" />
              </Link>
              <Link to={"/grama-coreana/2"}>
                <img src={ImgTeste} alt="ts" loading="lazy" />
              </Link>
              <Link to={"/grama-discovery/1"}>
                <img src={ImgTeste} alt="ts" loading="lazy" />
              </Link>
            </CardImg>
          </Card>
        </CardBox>
      </WrapperProducts1>

      <WrapperText>
        <p>We Do Brandings</p>

        <p>
          We’re a small creative design studio based in New York, working with
          adventurous clients and providing Creative Concept, Branding, Graphic
          Design, Art Direction and Digital Communication services.
        </p>

        <Link to={""}>Faça parte do nosso time</Link>
      </WrapperText>

      <WrapperProducts2>
        <h2>
          Dicas <span>Rápidas</span>
        </h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          tempore laudantium maiores incidunt quo?
        </p>

        <CardBox>
          <Card>
            <CardImg3>
              <Link to={"/dicas/1"}>
                <img src={ImgTeste} alt="ts" loading="lazy" />
              </Link>

              <Link to={"/dicas/2"}>
                <img src={ImgTeste} alt="ts" loading="lazy" />
              </Link>

              <Link to={"/dicas/3"}>
                <img src={ImgTeste} alt="ts" loading="lazy" />
              </Link>
            </CardImg3>
          </Card>
        </CardBox>
      </WrapperProducts2>

      <Footer />
    </Container>
  );
}

export default Home;
