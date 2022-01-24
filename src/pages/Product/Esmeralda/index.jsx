/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import dataGrass from "../../../data/grassData";
import { GiHighGrass } from "react-icons/gi";

import {
  Container,
  Content,
  Wrapper,
  Divider,
  ProductHeader,
  CardProduct,
  ProductImg,
  ProductImgMobile,
  ProductBox,
  BoxDescription,
  ProductForm,
  ProductDescription,
  UlProduct,
  UlAplication,
  ProductInfo,
  NotFoundContainer,
  LoadingBox,
  CardMobile,
} from "./styles";

import Swal from "sweetalert2";
import Modal from "../../../components/Modal";

import CircularProgress from "@mui/material/CircularProgress";
import ImgTeste from "../../../images/esmeralda.webp";
import Header from "../../../components/HeaderProd";
import Footer from "../../../components/FooterSecondary";

function ProdEsmelda() {
  const [data, setData] = useState({
    name: "",
    cep: "",
    numberTel: "",
    qtd: "",
    email: "",
  });

  const { name, email, qtd, numberTel, cep } = data;
  const [loading, setLoading] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [information, setInformation] = useState();

  const { id } = useParams();
  const idTrue = 6 == id;

  const filterProdId = dataGrass.filter((i) => i.idGrama == id);

  //Modal

  const PropsModal = function (param) {
    return setInformation(param);
  };

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
        title: "Solicitação enviada com sucesso!",
        text: "Os links com os produtos e serviços serão encaminhados para o seu Email",
        confirmButtonText: "Pronto!",
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
      return window.scrollTo(0, 0);
    } catch (error) {
      return console.error(error);
    }
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <Wrapper>
          {idTrue
            ? filterProdId?.map((Data2) => (
                <CardProduct key={Math.random().toString()}>
                  <ProductHeader>
                    <h1>{Data2.title}</h1>
                    <div>
                      <h3>{Data2.metersSold} VENDIDOS </h3>

                      <h4>{Data2.metersAvailable} Disponíveis</h4>
                    </div>
                  </ProductHeader>

                  <ProductImg>
                    <div className="Div1">
                      <img src={ImgTeste} alt={Data2.title} />
                    </div>

                    <div className="Div2">
                      <img src={ImgTeste} alt={Data2.title} />
                    </div>

                    <div className="Div3">
                      <img src={ImgTeste} alt={Data2.title} />
                    </div>

                    <div className="Div4">
                      <img src={ImgTeste} alt={Data2.title} />
                    </div>

                    <div className="Div5">
                      <img src={ImgTeste} alt={Data2.title} />
                    </div>
                  </ProductImg>

                  <ProductImgMobile>
                    <img src={ImgTeste} alt={Data2.title} />

                    <img src={ImgTeste} alt={Data2.title} />

                    <img src={ImgTeste} alt={Data2.title} />

                    <img src={ImgTeste} alt={Data2.title} />

                    <img src={ImgTeste} alt={Data2.title} />
                  </ProductImgMobile>

                  <ProductBox>
                    <ProductInfo>
                      <ProductDescription>
                        <div>
                          <h2>{Data2.shortDescription}</h2>
                          <p>{Data2.Origin}</p>
                        </div>
                        <img src={ImgTeste} alt="Selo Qually" />
                      </ProductDescription>

                      <Divider />

                      <UlProduct>
                        <li>
                          <GiHighGrass /> {Data2.benefits1}
                        </li>
                        <li>
                          <GiHighGrass /> {Data2.benefits2}
                        </li>
                        <li>
                          <GiHighGrass /> {Data2.benefits3}
                        </li>
                        <li>
                          <GiHighGrass /> {Data2.benefits4}
                        </li>
                        <li>
                          <GiHighGrass /> {Data2.benefits5}
                        </li>
                      </UlProduct>

                      <Divider />

                      <BoxDescription>
                        <p>{Data2.description}</p>
                      </BoxDescription>

                      <Divider />

                      <UlAplication>
                        <li>
                          <GiHighGrass /> {Data2.benefits1}
                        </li>
                        <li>
                          <GiHighGrass /> {Data2.benefits2}
                        </li>
                        <li>
                          <GiHighGrass /> {Data2.benefits3}
                        </li>
                        <li>
                          <GiHighGrass /> {Data2.benefits4}
                        </li>
                        <li>
                          <GiHighGrass /> {Data2.benefits5}
                        </li>
                      </UlAplication>

                      <Divider />

                      <ProductDescription>
                        <p>{Data2.finalConsiderations}</p>
                      </ProductDescription>
                    </ProductInfo>

                    <ProductForm>
                      <form onSubmit={handleSubmit}>
                        <h5>{Data2.title} </h5>
                        <p>
                          <br />
                          <label className="Price">{Data2.PriceGrass}</label>
                          <label>{Data2.PriceGrassPromotion}</label>
                        </p>

                        <input
                          placeholder="Nome"
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          required
                          minLength={3}
                        />
                        <div className="form-group">
                          <input
                            placeholder="E-mail"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                          />

                          <input
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
                          <input
                            placeholder="CEP"
                            type="text"
                            name="cep"
                            value={cep}
                            onChange={handleChange}
                            required
                            maxLength={9}
                            minLength={8}
                          />

                          <input
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
                            <button type="submit">Fazer pedido</button>
                          </>
                        ) : (
                          <>
                            <button disabled="disabled" type="submit">
                              Fazer pedido
                            </button>
                          </>
                        )}

                        <a
                          href={`https://api.whatsapp.com/send?phone=5515996159898&text=Olá gostaria de comprar ${Data2.title}`}
                          target="_blank"
                        >
                          <button type="button">Peça pelo WhatsApp</button>
                        </a>
                      </form>
                    </ProductForm>
                  </ProductBox>

                  <CardMobile
                    onClick={function () {
                      setIsModalVisible(true);
                      return PropsModal(Data2);
                    }}
                  >
                    <p>
                      <label>
                        <span className="Price">{Data2.PriceGrass}</span>

                        <span className="PricePromotion">
                          {Data2.PriceGrassPromotion}
                        </span>
                      </label>
                      {Data2.title} <br />
                    </p>

                    <button>Comprar</button>
                  </CardMobile>
                </CardProduct>
              ))
            : false}

          {!idTrue ? (
            <NotFoundContainer>
              <h1>Não tem nada</h1>
            </NotFoundContainer>
          ) : (
            false
          )}
        </Wrapper>
      </Content>

      {loading ? (
        false
      ) : (
        <LoadingBox>
          <CircularProgress size={100} />
        </LoadingBox>
      )}

      {isModalVisible ? (
        <Modal
          Information={information}
          OnClose={() => setIsModalVisible(false)}
        />
      ) : null}

      <Footer />
    </Container>
  );
}

export default ProdEsmelda;
