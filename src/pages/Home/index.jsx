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

import VideoXD from "../../videos/Teste3.mp4";
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
        <div className="VideoStyle">
          <video autoPlay={true} loop={true} muted>
            <source src={VideoXD} type="video/mp4" />
          </video>
        </div>
        <div className="EffectBlack">
          <div className="GroupText">
            <h1>
              Semear momentos é a essência da <br />
              Qually Grama
            </h1>

            <Link to={"../gramas"}>
              <button>Cultivar Momento</button>
            </Link>
          </div>
        </div>
      </Wrapper>

      <WrapperProducts1>
        <h1>
          Conheça os lugares que <br /> <span>estamos juntos!</span>
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
          tempore laudantium maiores incidunt quo? Quis nam id inventore
          repellendus dolore praesentium molestias amet saepe, incidunt harum
          eveniet dignissimos est placeat.
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
