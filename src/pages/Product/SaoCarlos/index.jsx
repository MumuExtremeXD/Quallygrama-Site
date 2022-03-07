/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import dataGrass from "../../../data/grassData";
import { GiHighGrass, GiGroundSprout, GiThermometerCold } from "react-icons/gi";

import { SiShadow } from "react-icons/si";
import { IoIosCut } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

import {
  Container,
  Content,
  Wrapper,
  Divider,
  ProductHeader,
  CardProduct,
  ProductImg,
  ProductBox,
  BoxDescription,
  ProductForm,
  InputForm,
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
import ImgEnlarge from "../../../components/ImgEnlarge";

import CircularProgress from "@mui/material/CircularProgress";
import ImgTeste from "../../../images/esmeralda.webp";
import Header from "../../../components/Headers/HeaderProd";
import Footer from "../../../components/FooterProducts";

function ProdEsmelda() {
  const [data, setData] = useState({
    name: "",
    cep: "",
    numberTel: "",
    variety: "São Carlos",
    qtd: "",
    email: "",
  });

  const { name, email, qtd, numberTel, cep, variety } = data;
  const [loading, setLoading] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isImgVisible, setIsImgVisible] = useState(false);

  const [information, setInformation] = useState();
  const [urlImg, setUrlImg] = useState();

  const { id } = useParams();
  const idTrue = 5 == id;

  const filterProdId = dataGrass.filter((i) => i.idGrama == id);

  //Modal

  const PropsModal = function (param) {
    return setInformation(param);
  };

  const PropsImg = function (param) {
    return setUrlImg(param);
  };

  //Form
  const handleChange = (e) => {
    return setData({ ...data, [e.target.name]: e.target.value });
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
            [
              name,
              cep,
              numberTel,
              variety,
              qtd,
              email,
              new Date().toLocaleString(),
            ],
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
      return setLoading(true);
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
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <Wrapper>
          {idTrue
            ? filterProdId?.map((Data2) => (
                <CardProduct key={Data2.idGrama}>
                  <ProductHeader>
                    <h1>{Data2.title}</h1>
                    <div>
                      <h3>{Data2.metersSold} VENDIDOS </h3>
                    </div>
                  </ProductHeader>

                  <ProductImg>
                    <img
                      className="Image1"
                      src={Data2.img1}
                      alt={Data2.title}
                      onClick={function () {
                        setIsImgVisible(true);
                        return PropsImg(Data2.img1);
                      }}
                    />
                    <img
                      className="Image2"
                      src={Data2.img1}
                      alt={Data2.title}
                      onClick={function () {
                        setIsImgVisible(true);
                        return PropsImg(Data2.img1);
                      }}
                    />
                    <img
                      className="Image3"
                      src={Data2.img1}
                      alt={Data2.title}
                      onClick={function () {
                        setIsImgVisible(true);
                        return PropsImg(Data2.img1);
                      }}
                    />
                    <img
                      className="Image4"
                      src={Data2.img1}
                      alt={Data2.title}
                      onClick={function () {
                        setIsImgVisible(true);
                        return PropsImg(Data2.img1);
                      }}
                    />
                    <img
                      className="Image5"
                      src={Data2.img1}
                      alt={Data2.title}
                      onClick={function () {
                        setIsImgVisible(true);
                        return PropsImg(Data2.img1);
                      }}
                    />
                  </ProductImg>

                  <ProductBox>
                    <ProductInfo>
                      <ProductDescription>
                        <div>
                          <h2>{Data2.shortDescription}</h2>
                          <p>{Data2.Origin}</p>
                        </div>
                        <img src={ImgTeste} alt="Selo Qually" loading="lazy" />
                      </ProductDescription>

                      <Divider />

                      <UlProduct>
                        {Data2.benefits1 && (
                          <li>
                            <i>
                              <SiShadow />
                            </i>

                            {Data2.benefits1}
                          </li>
                        )}

                        {Data2.benefits2 && (
                          <li>
                            <i>
                              <GiThermometerCold />
                            </i>

                            {Data2.benefits2}
                          </li>
                        )}

                        {Data2.benefits3 && (
                          <li>
                            <i>
                              <GiHighGrass />
                            </i>

                            {Data2.benefits3}
                          </li>
                        )}

                        {Data2.benefits4 && (
                          <li>
                            <i>
                              <GiGroundSprout />
                            </i>

                            {Data2.benefits4}
                          </li>
                        )}

                        {Data2.benefits5 && (
                          <li>
                            <i>
                              <IoIosCut />
                            </i>

                            {Data2.benefits5}
                          </li>
                        )}
                      </UlProduct>

                      <Divider />

                      <BoxDescription>
                        <p>{Data2.description}</p>
                      </BoxDescription>

                      <Divider />

                      <UlAplication>
                        {Data2.applications1 && (
                          <li>
                            <i>
                              <FaCheck />
                            </i>

                            {Data2.applications1}
                          </li>
                        )}

                        {Data2.applications2 && (
                          <li>
                            <i>
                              <FaCheck />
                            </i>

                            {Data2.applications2}
                          </li>
                        )}

                        {Data2.applications3 && (
                          <li>
                            <i>
                              <FaCheck />
                            </i>

                            {Data2.applications3}
                          </li>
                        )}

                        {Data2.applications4 && (
                          <li>
                            <i>
                              <FaCheck />
                            </i>

                            {Data2.applications4}
                          </li>
                        )}

                        {Data2.applications5 && (
                          <li>
                            <i>
                              <FaCheck />
                            </i>

                            {Data2.applications5}
                          </li>
                        )}

                        {Data2.applications6 && (
                          <li>
                            <i>
                              <FaCheck />
                            </i>

                            {Data2.applications6}
                          </li>
                        )}
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

                        <InputForm
                          placeholder="Nome"
                          type="text"
                          name="name"
                          required
                          minLength={3}
                          value={name}
                          onChange={handleChange}
                        />
                        <div className="form-group">
                          <InputForm
                            placeholder="E-mail"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                          />

                          <InputForm
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
                          <InputForm
                            placeholder="CEP"
                            type="text"
                            name="cep"
                            value={cep}
                            onChange={handleChange}
                            required
                            maxLength={9}
                            minLength={8}
                          />

                          <InputForm
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

      {isImgVisible ? (
        <ImgEnlarge
          Information={urlImg}
          OnClose={() => setIsImgVisible(false)}
        />
      ) : null}

      <Footer />
    </Container>
  );
}

export default ProdEsmelda;
