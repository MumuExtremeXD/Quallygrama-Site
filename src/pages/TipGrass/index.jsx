/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import {
  Container,
  Section,
  SearchSection,
  CardTip,
  TipImg,
  TipInfo,
  UlAplication,
  BackUp,
} from "./styles";

import ImgTeste from "../../images/esmeralda.webp";
import Header from "../../components/Headers/HeaderTips";
import Footer from "../../components/Footer";

import { GiHighGrass } from "react-icons/gi";
import { TiArrowUpThick } from "react-icons/ti";

import data from "../../data/tipsData";

const scrollThreshold = 0.5;

const scrollTop = function () {
  window.scrollTo(0, 0);
};

function TipEsmelda() {
  const { id } = useParams();

  const [scrollY, setScrollY] = useState(0);
  const classes = scrollY >= scrollThreshold ? "scrollMenu" : "";

  const filterTipId = data.filter((i) => i.idDica == id);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }

    try {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    } catch (error) {
      return console.error(error);
    }
  }, []);

  return (
    <Container>
      <Header />

      {filterTipId
        ? filterTipId?.map((Data2) => (
            <Section key={Data2.idDica}>
              <SearchSection>
                <div className="Headline">
                  <h2>{Data2.title}</h2>
                </div>
              </SearchSection>

              <CardTip>
                <TipInfo>
                  <p>{Data2.description1}</p>

                  <TipImg>
                    <div className="Img1">
                      <img src={ImgTeste} alt="" loading="lazy" />
                    </div>

                    <div className="Img2">
                      <img src={ImgTeste} alt="" loading="lazy" />
                    </div>
                  </TipImg>

                  <p>{Data2.description1}</p>

                  <UlAplication>
                    <li>
                      <GiHighGrass /> {Data2.LongLife}
                    </li>
                    <li>
                      <GiHighGrass /> {Data2.GoldenTip}
                    </li>
                    <li>
                      <GiHighGrass /> {Data2.AfterPruning}
                    </li>
                  </UlAplication>
                </TipInfo>
              </CardTip>
            </Section>
          ))
        : false}

      <BackUp className={classes}>
        <TiArrowUpThick onClick={() => scrollTop()} />
      </BackUp>

      <Footer />
    </Container>
  );
}

export default TipEsmelda;
