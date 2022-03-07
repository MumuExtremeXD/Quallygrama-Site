import styled from "styled-components";

export const Container = styled.div`
  width: 100.1%;
  height: 100%;

  opacity: 1;
  pointer-events: auto;

  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);

  z-index: 1004;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  > .CloseModal {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
  }

  > button {
    top: 5px;
    position: fixed;
    color: #fff;

    background: none;
    outline: none;
    border: none;

    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 20px;
    right: 15px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  > img {
    max-width: 650px;
    width: 100%;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    position: fixed;

    @media (max-width: 768px) {
      padding: 0px 40px;
    }

    @media (max-width: 587px) {
      padding: 0px 20px;
    }
  }

  > i {
    position: fixed;
    top: 3vh;
    right: 3vw;
    z-index: 1;

    font-size: 50px;
    color: white;

    cursor: pointer;
  }
`;
