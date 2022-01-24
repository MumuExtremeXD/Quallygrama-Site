import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  WrapperProducts1,
  WrapperProducts2,
  WrapperProducts3,
  CardBox,
  Card,
  CardText2,
  CardImg,
  CardImg2,
  CardImg3,
} from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import VideoXD from "../../videos/Teste3.mp4";
import ImgTeste from "../../images/esmeralda.webp";

function Home() {
  useEffect(() => {
    try {
      return window.scrollTo(0, 0);
    } catch (error) {
      return console.error(error);
    }
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
            <h1>Semear momentos é a essência da Qually Grama</h1>

            <Link to={"../gramas"}>
              <button>Cultivar Momento</button>
            </Link>
          </div>
        </div>
      </Wrapper>

      <WrapperProducts1>
        <h1>
          Conheça os lugares que <span> estamos juntos!</span>
        </h1>

        <CardBox>
          <Card>
            <CardImg>
              <img src={ImgTeste} alt="" />
              <img src={ImgTeste} alt="" />

              <img src={ImgTeste} alt="" />
              <img src={ImgTeste} alt="" />
            </CardImg>
          </Card>
        </CardBox>
      </WrapperProducts1>

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
              <img src={ImgTeste} alt="" />
              <img src={ImgTeste} alt="" />
              <img src={ImgTeste} alt="" />
            </CardImg3>
          </Card>
        </CardBox>
      </WrapperProducts2>

      <WrapperProducts3>
        <CardBox>
          <Card>
            <CardImg2 />

            <CardText2>
              <h2>
                Venha ser uma flora Forte <br />
                Conheça o nosso programa de parcerias
              </h2>
            </CardText2>
          </Card>
        </CardBox>
      </WrapperProducts3>

      <Footer />
    </Container>
  );
}

export default Home;
