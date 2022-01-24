/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  SearchSection,
  Wrapper,
  BoxImg,
  Box,
  CardBody,
  Card,
  NotFoundContainer,
} from "./styles";

import data from "../../data/tipsData";

import { BiSearchAlt } from "react-icons/bi";
import ImgTeste from "../../images/esmeralda.webp";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const filtrarItens = (data, busca) => {
  const lowerBusca = busca.toLowerCase();

  try {
    if (
      data.filter((dica) => dica?.title.toLowerCase().includes(lowerBusca))
        .length > 0
    ) {
      return data.filter((dica) =>
        dica?.title.toLowerCase().includes(lowerBusca)
      );
    } else if (
      data.filter((dica) =>
        dica?.description1.toLowerCase().includes(lowerBusca)
      ).length > 0
    ) {
      return data.filter((dica) =>
        dica?.description1.toLowerCase().includes(lowerBusca)
      );
    } else if (
      data.filter((dica) =>
        dica?.description2.toLowerCase().includes(lowerBusca)
      ).length > 0
    ) {
      return data.filter((dica) =>
        dica?.description2.toLowerCase().includes(lowerBusca)
      );
    } else if (
      data.filter((dica) =>
        dica?.finalConsiderations1.toLowerCase().includes(lowerBusca)
      ).length > 0
    ) {
      return data.filter((dica) =>
        dica?.finalConsiderations1.toLowerCase().includes(lowerBusca)
      );
    } else if (
      data.filter((dica) =>
        dica?.finalConsiderations2.toLowerCase().includes(lowerBusca)
      ).length > 0
    ) {
      return data.filter((dica) =>
        dica?.finalConsiderations2.toLowerCase().includes(lowerBusca)
      );
    } else if (
      data.filter((dica) => dica?.LongLife.toLowerCase().includes(lowerBusca))
        .length > 0
    ) {
      return data.filter((dica) =>
        dica?.LongLife.toLowerCase().includes(lowerBusca)
      );
    } else if (
      data.filter((dica) => dica?.GoldenTip.toLowerCase().includes(lowerBusca))
        .length > 0
    ) {
      return data.filter((dica) =>
        dica?.GoldenTip.toLowerCase().includes(lowerBusca)
      );
    } else if (
      data.filter((dica) =>
        dica?.AfterPruning.toLowerCase().includes(lowerBusca)
      ).length > 0
    ) {
      return data.filter((dica) =>
        dica?.AfterPruning.toLowerCase().includes(lowerBusca)
      );
    }
  } catch (error) {
    return console.error(error);
  }
};

function TipsPage() {
  const [busca, setBusca] = useState("");
  const [ScrollY, setScrollY] = useState(0);

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

  const ProdsFiltrados = useMemo(() => filtrarItens(data, busca), [busca]);

  return (
    <Container>
      <Header />

      <SearchSection>
        <div className="Headline">
          <h2>Conheça antes de comprar</h2>
          <p>Seus produtos e serviços explicados</p>
        </div>

        <div>
          <section>
            <label>
              <BiSearchAlt />
            </label>

            <input
              type="text"
              placeholder="Pesquisar..."
              onChange={(ev) => setBusca(ev.target.value)}
            />
          </section>
        </div>
      </SearchSection>
      <Wrapper>
        <Box>
          {ProdsFiltrados
            ? ProdsFiltrados?.map((Tip) => (
                <Card key={Tip.idDica}>
                  <Link to={`${Tip.tipLink}/${Tip.idDica}`}>
                    <BoxImg>
                      <img src={ImgTeste} alt={Tip.title} />
                    </BoxImg>
                    <CardBody>
                      <h3>{Tip.title}</h3>
                      Veja mais...
                    </CardBody>
                  </Link>
                </Card>
              ))
            : false}
        </Box>

        {!ProdsFiltrados ? (
          <NotFoundContainer>
            <h1>Não tem nada</h1>
          </NotFoundContainer>
        ) : (
          false
        )}
      </Wrapper>

      <Footer />
    </Container>
  );
}

export default TipsPage;
