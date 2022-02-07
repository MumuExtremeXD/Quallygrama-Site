/* eslint-disable eqeqeq */
import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import {
  Container,
  Section,
  SearchSection,
  CardTip,
  TipImg,
  TipInfo,
  UlAplication,
} from "./styles";
import ImgTeste from "../../images/esmeralda.webp";
import Header from "../../components/Headers/HeaderTips";
import Footer from "../../components/Footer";

import { GiHighGrass } from "react-icons/gi";
import data from "../../data/tipsData";

function TipEsmelda() {
  const { id } = useParams();

  const filterTipId = data.filter((i) => i.idDica == id);

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
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

      <Footer />
    </Container>
  );
}

export default TipEsmelda;
