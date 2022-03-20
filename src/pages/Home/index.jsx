/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  WrapperProducts1,
  WrapperProducts2,
  WrapperText,
  WrapperMap,
  CardBox,
  Card,
  CardImg,
  CardImg3,
} from "./styles";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer";

import gramasVenM from "../../images/gramasVenM.webp";

import ImgEsm from "../../images/esmeraldaPi.webp";
import ImgBer from "../../images/bermudasPi.webp";
import ImgSc from "../../images/scPi.webp";

import ImgCo from "../../images/coreanaPi.webp";
import ImgSt from "../../images/santoagostinhoPi.webp";
import ImgDis from "../../images/discoveryPi.webp";

import ImgPlantioP from "../../images/plantioP.webp";
import ImgFertilizantesP from "../../images/fertilizantesP.webp";
import ImgCuidadosP from "../../images/cuidadosP.webp";

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
            <h1>Grama com qualidade e procedência que você merece!</h1>

            <p>
              Há mais de 20 anos, produzindo diversas espécies de grama com a
              mesma qualidade o ano todo.
            </p>

            <Link to={"../gramas"}>
              <button>Comprar</button>
            </Link>
          </div>

          <img
            className="ImgMobileVg"
            src={gramasVenM}
            alt="Variedades de grama - Qually Grama"
          />
        </div>
      </Wrapper>

      <WrapperProducts1>
        <h1>
          Nossas Variedades <br /> <span> de Grama!</span>
        </h1>

        <CardBox>
          <Card>
            <CardImg>
              <Link to={"/grama-esmeralda/6"}>
                <img src={ImgEsm} alt="esmeralda" loading="lazy" />
              </Link>

              <Link to={"/grama-bermudas/5"}>
                <img src={ImgBer} alt="bermudas" loading="lazy" />
              </Link>

              <Link to={"/grama-sao-carlos/4"}>
                <img src={ImgSc} alt="são carlos" loading="lazy" />
              </Link>

              <Link to={"/grama-santo-agostinho/3"}>
                <img src={ImgSt} alt="santo agostinho" loading="lazy" />
              </Link>

              <Link to={"/grama-coreana/2"}>
                <img src={ImgCo} alt="coreana" loading="lazy" />
              </Link>

              <Link to={"/grama-discovery/1"}>
                <img src={ImgDis} alt="discovery" loading="lazy" />
              </Link>
            </CardImg>
          </Card>
        </CardBox>
      </WrapperProducts1>

      <WrapperText>
        <p>Nossa História</p>

        <p>
          A Qually Grama é uma empresa que atua no mercado do agronegócio há
          mais de 20 anos, produzindo várias espécies de grama com a qualidade
          exigida pelo mercado. Para tanto, desenvolve ano a ano processos
          produtivos que norteiam a missão da empresa, colocando à disposição
          dos seus clientes produtos garantidos por nossa especialização no
          setor.
        </p>

        <Link to={"/sobre-nos"}>Conheça</Link>
      </WrapperText>

      <WrapperProducts2>
        <h2>
          Dicas <span>Rápidas</span>
        </h2>

        <p>
          Veja as dicas dos nossos especialistas, sobre os cuidados que o seu
          seu gramado precisa.
        </p>

        <CardBox>
          <Card>
            <CardImg3>
              <Link to={"/dicas/1"}>
                <img src={ImgFertilizantesP} alt="ts" loading="lazy" />
              </Link>

              <Link to={"/dicas/2"}>
                <img src={ImgCuidadosP} alt="ts" loading="lazy" />
              </Link>

              <Link to={"/dicas/3"}>
                <img src={ImgPlantioP} alt="ts" loading="lazy" />
              </Link>
            </CardImg3>
          </Card>
        </CardBox>
      </WrapperProducts2>

      <WrapperMap>
        <p>
          Nossa <span>Localização</span>
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14651.946579224186!2d-47.9858997!3d-23.3524984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb43399af9f351227!2sQually%20Grama!5e0!3m2!1spt-BR!2sbr!4v1647801485924!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </WrapperMap>

      <Footer />
    </Container>
  );
}

export default Home;
