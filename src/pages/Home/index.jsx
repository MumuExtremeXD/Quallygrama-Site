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

import gramasVenM from "../../images/gramasVenM.webp";

import ImgEsm from "../../images/esmeraldaPi.webp";
import ImgBer from "../../images/bermudasPi.webp";
import ImgSc from "../../images/scPi.webp";

import ImgCo from "../../images/coreanaPi.webp";
import ImgSt from "../../images/santoagostinhoPi.webp";
import ImgDis from "../../images/discoveryPi.webp";

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
                <img src={ImgEsm} alt="ts" loading="lazy" />
              </Link>

              <Link to={"/dicas/2"}>
                <img src={ImgEsm} alt="ts" loading="lazy" />
              </Link>

              <Link to={"/dicas/3"}>
                <img src={ImgEsm} alt="ts" loading="lazy" />
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
