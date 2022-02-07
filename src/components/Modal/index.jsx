/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";

import {
  Container,
  Wrapper,
  Box,
  Divider,
  TitleModal,
  SocialModal,
  FormBox,
  InputFormMobile,
  TextBox,
  BoxZap,
  LoadingBox,
} from "./styles";

import Swal from "sweetalert2";

import CircularProgress from "@mui/material/CircularProgress";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Modal = ({ Information, OnClose = () => {} }) => {
  const [data, setData] = useState({
    name: "",
    cep: "",
    numberTel: "",
    qtd: "",
    email: "",
  });

  const { name, email, qtd, numberTel, cep } = data;
  const [loading, setLoading] = useState(true);

  //Form
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(false);

      const response = await fetch(
        "https://v1.nocodeapi.com/quallygrama/google_sheets/zKKDHigfgmnAknVO?tabId=Página1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, cep, numberTel, qtd, email, new Date().toLocaleString()],
          ]),
        }
      );

      Swal.fire({
        icon: "success",
        title: "Pedido enviado com Sucesso!",
        text: "Nossa equipe comercial entrará em contato",
        confirmButtonText: "Certo!",
        confirmButtonColor: "#1c6adc",

        backdrop: `
        rgba(0,0,0,0.4)
      `,
      });

      await response.json();

      setData({
        ...data,
        name: "",
        email: "",
        cep: "",
        numberTel: "",
        qtd: "",
      });
      setLoading(true);
      OnClose();
    } catch (err) {
      console.log(err);

      Swal.fire({
        icon: "error",
        title: "Alguma coisa deu errada...",
        text: "Tente novamente mais tarde!",
        confirmButtonText: "Tudo bem!",
        confirmButtonColor: "#1c6adc",

        backdrop: `
        rgba(0,0,0,0.4)
      `,
      });
    }
  };

  useEffect(() => {
    try {
      document.body.style.overflowY = "hidden";

      return () => {
        window.scrollTo(0, 0);
        document.body.style.overflowY = "auto";
      };
    } catch (error) {
      return console.error(error);
    }
  }, []);

  return (
    <Container>
      <div className="CloseModal" onClick={OnClose} />

      <button onClick={OnClose}>
        <i>
          <IoIosArrowDropleftCircle />
        </i>
        <p>Voltar</p>
      </button>

      <Wrapper>
        <button onClick={OnClose}>
          <i>
            <IoIosArrowDropleftCircle />
          </i>

          <p>Voltar</p>
        </button>

        <Box>
          <TitleModal>
            <p>{Information.title}</p>
          </TitleModal>

          <SocialModal>
            <p>{Information.PriceGrassPromotion}</p>
          </SocialModal>

          <Divider />

          <TextBox>
            <p>
              Você sabia que ao comprar grama você ajuda... Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Accusamus omnis, soluta
              praesentium facere repellendus quam.
            </p>
          </TextBox>

          <Divider />

          <FormBox>
            <p>Faça o seu pedido</p>

            <form onSubmit={handleSubmit}>
              <InputFormMobile
                placeholder="Nome"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
                minLength={3}
              />
              <div className="form-group">
                <InputFormMobile
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />

                <InputFormMobile
                  placeholder="Telefone"
                  type="text"
                  name="numberTel"
                  value={numberTel}
                  onChange={handleChange}
                  required
                  maxLength={13}
                  minLength={11}
                />
              </div>

              <div className="form-group">
                <InputFormMobile
                  placeholder="CEP"
                  type="text"
                  name="cep"
                  value={cep}
                  onChange={handleChange}
                  required
                  maxLength={9}
                  minLength={8}
                />

                <InputFormMobile
                  placeholder="Quantidade"
                  type="number"
                  name="qtd"
                  min={70}
                  value={qtd}
                  onChange={handleChange}
                  required
                />
              </div>

              {loading ? (
                <>
                  <button type="submit">Enviar </button>
                </>
              ) : (
                <>
                  <button disabled="disabled" type="submit">
                    Enviar
                  </button>
                </>
              )}
            </form>
          </FormBox>

          <Divider />

          <BoxZap>
            <a
              href={`https://api.whatsapp.com/send?phone=5515996159898&text=Olá gostaria de comprar ${Information.title}`}
              target="_blank"
            >
              <button type="button">Pedir pelo WhatsApp</button>
            </a>
          </BoxZap>
        </Box>

        {loading ? (
          false
        ) : (
          <LoadingBox>
            <CircularProgress size={100} />
          </LoadingBox>
        )}
      </Wrapper>
    </Container>
  );
};

export default Modal;
