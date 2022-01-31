/* eslint-disable no-unused-vars */
import React, { useMemo, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  SearchSection,
  Wrapper,
  Box,
  CardBody,
  Card,
  BoxImg,
  NotFoundContainer,
} from "./styles";

import data from "../../data/grassData";

import { BiSearchAlt } from "react-icons/bi";
import ImgTeste from "../../images/esmeralda.webp";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer";

const filtrarItens = (data, busca) => {
  const lowerBusca = busca.toLowerCase();

  try {
    if (
      data.filter((grama) =>
        grama?.finalConsiderations.toLowerCase().includes(lowerBusca)
      ).length > 0
    ) {
      return data.filter((grama) =>
        grama?.finalConsiderations.toLowerCase().includes(lowerBusca)
      );
    } else if (
      data.filter((grama) => grama?.title.toLowerCase().includes(lowerBusca))
        .length > 0
    ) {
      return data.filter((grama) =>
        grama?.title.toLowerCase().includes(lowerBusca)
      );
    } else if (
      data.filter((grama) =>
        grama?.description.toLowerCase().includes(lowerBusca)
      ).length > 0
    ) {
      return data.filter((grama) =>
        grama?.description.toLowerCase().includes(lowerBusca)
      );
    }
  } catch (error) {
    return console.error(error);
  }
};

function Products() {
  const [busca, setBusca] = useState("");
  const ProdsFiltrados = useMemo(() => filtrarItens(data, busca), [busca]);

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
            ? ProdsFiltrados?.map((Prod) => (
                <Card key={Prod.idGrama}>
                  <Link to={`${Prod.ProdLink}/${Prod.idGrama}`}>
                    <BoxImg>
                      <img src={ImgTeste} alt={Prod.title} loading="lazy" />
                    </BoxImg>

                    <CardBody>
                      <h3>{Prod.title}</h3>
                      <p>Veja mais...</p>
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

export default Products;
