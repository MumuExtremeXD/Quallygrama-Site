/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";

import { Container } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ Information, OnClose = () => {} }) => {
  useEffect(() => {
    try {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "auto";
      };
    } catch (error) {
      return console.error(error);
    }
  }, []);

  return (
    <Container>
      <div className="CloseModal" onClick={OnClose} />
      <img src={Information} alt="testes" />

      <i>
        <AiFillCloseCircle onClick={OnClose} />
      </i>
    </Container>
  );
};

export default Modal;
