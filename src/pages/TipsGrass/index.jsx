/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState, useEffect, Suspense } from "react";

import {
  Container,
  SearchSection,
  Wrapper,
  BoxImg,
  Box,
  InputForm,
  NotFoundContainer,
} from "./styles";

import data from "../../data/tipsData";

import { BiSearchAlt } from "react-icons/bi";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer";

const Card = React.lazy(() => import("../../components/CardTips"));

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
  const [, setScrollY] = useState(0);

  const ProdsFiltrados = useMemo(() => filtrarItens(data, busca), [busca]);

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

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

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

            <InputForm
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
                <Suspense fallback={<div>Carregando...</div>} key={Tip.idDica}>
                  <Card Information={Tip} />
                </Suspense>
              ))
            : false}
        </Box>

        {!ProdsFiltrados ? (
          <NotFoundContainer>
            <p>Não há dados...</p>
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
