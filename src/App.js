/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import { WarningContainer } from "./styles/styles";

import Routes from "./routes";

export default function App() {
  const [termos, setTermos] = useState(true);

  const [open, setOpen] = useState(true);

  const armazenar = (chave, valor) => {
    let VerifyCookie = localStorage.getItem(chave);

    if (
      VerifyCookie == undefined ||
      VerifyCookie == null ||
      localStorage.getItem(chave) == false
    ) {
      setTermos(localStorage.setItem(chave, true));
      setOpen(!open);
    } else {
      setOpen(!open);
    }
  };

  useEffect(() => {
    let VerifyCookie = localStorage.getItem("accepted");

    if (
      VerifyCookie == undefined ||
      VerifyCookie == null ||
      localStorage.getItem("accepted") == false
    ) {
      setOpen(open);
    } else {
      return setOpen(!open);
    }
  }, []);

  return (
    <BrowserRouter menu={open}>
      <WarningContainer menu={open}>
        <div>
          <p>
            Nós usamos cookies e outras tecnologias semelhantes para melhorar a
            sua experiência em nossos serviços. Ao utilizar nossos serviços,
            você concorda com tal monitoramento. Informamos ainda que
            atualizamos nossa
            <Link to="termos"> Política de Privacidade</Link>.
          </p>

          <button onClick={() => armazenar("accepted", termos)}>Aceitar</button>
        </div>
      </WarningContainer>
      <Routes />

      <GlobalStyles />
    </BrowserRouter>
  );
}
