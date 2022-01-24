import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  opacity: 1;
  pointer-events: auto;

  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);

  z-index: 1004;

  > .CloseModal {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    cursor: pointer;
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
`;

export const Divider = styled.div`
  border-top-color: rgb(221, 221, 221);
  border-top-width: 1px !important;
  border-top-style: solid !important;

  margin: 15px 0px;
`;

export const Wrapper = styled.div`
  background-color: #fff;

  transition: padding 0.25s linear;
  transition-delay: 0.15s;

  overflow-y: scroll;
  overflow-x: hidden;

  position: fixed;
  top: 40px;

  border-radius: 12px 12px 0px 0px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  z-index: 100;
  margin: 0;

  > button {
    z-index: 1200;

    position: absolute;
    color: #000;

    background: none;
    outline: none;
    border: none;

    font-size: 20px;

    top: 5px;
    right: 10%;

    @media (min-width: 769px) {
      display: none;
    }

    @media (max-width: 630px) {
      top: 30px;
      right: 6%;
    }
  }

  @media (max-width: 768px) {
    border-radius: 0px;
    top: 0px;
  }
`;

export const Box = styled.div`
  position: relative;

  padding: 64px 15px 20px 15px;
  border-radius: 20px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  z-index: 100;

  max-width: 1172px;

  margin-bottom: 25px;
`;

export const TitleModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 630px) {
    > p {
      font-size: 2.1rem;
    }
  }
`;

export const SocialModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 630px) {
    > p {
      font-size: 2.6rem;
      font-weight: 550;
      margin-bottom: 15px;
      color: var(--primary);
    }
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 20px;

  max-width: 650px;

  > img {
    width: 100%;
  }
`;

export const TextBox = styled.div`
  margin: 20px 0;

  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  text-align: center;

  flex-direction: column;
  max-width: 650px;

  > p {
    font-size: 1.3rem;
    text-align: justify !important;
  }
`;

export const ImgBox = styled.div`
  margin: 20px 0 20px 0;

  padding-bottom: 15%;

  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-width: 216px;

    > img {
      width: 100%;
    }
  }

  > a,
  a:active,
  a:link,
  a:visited {
    > p {
      padding: 20px 0px;

      color: var(--blue);
    }
  }
`;

export const FormBox = styled.div`
  > p {
    font-size: 25px;
    font-weight: 550;

    margin: 3% 0px;
  }

  > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h5 {
      text-align: center;
      font-size: 1.25rem;
    }

    > p {
      display: flex;
      gap: 0px 10px;

      text-align: center;
      font-size: 1.25rem;
      margin-bottom: 6%;

      > label {
        font-weight: 630;
      }

      > .Price {
        text-decoration: line-through !important;
        color: rgb(113, 113, 113) !important;
      }
    }

    > input {
      outline: none;
      border: 0.5px solid #ddd;

      border-radius: 4px;
      padding: 10px 15px;

      width: 100%;
      font-size: 17px;

      @media (max-width: 605px) {
        padding: 13px 10px;
      }
    }

    > .form-group {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 5px 0px;
      margin-top: 2%;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      > input {
        outline: none;
        border: 0.5px solid #ddd;

        border-radius: 4px;
        width: 100%;

        font-size: 17px;

        @media (max-width: 605px) {
          padding: 13px 10px;
        }
      }
    }

    > input {
      font-size: 17px;
      outline: none;
      border: 0.5px solid #ddd;
      border-radius: 4px;
      padding: 10px 8px;
      width: 100%;

      @media (max-width: 605px) {
        padding: 13px 10px;
      }
    }

    > span {
      > p {
        margin-top: 2%;
        font-size: 14px;
      }
    }

    > button {
      margin-top: 5%;
      background: var(--blue);

      outline: none;
      border: 1px;

      border-radius: 4px;
      font-size: 18px;

      color: white;
      font-weight: 550;

      cursor: pointer;
      padding: 30px 15px;
      width: 100%;

      transition: all 0.2s ease;

      @media (max-width: 605px) {
        padding: 13px 10px;
      }

      &:hover {
        transform: scale(1.02);
      }
    }

    > a {
      margin-top: 2%;
      background: #7cb407;

      outline: none;
      border: 1px;

      border-radius: 4px;
      padding: 20px 15px;
      width: 100%;

      transition: all 0.2s ease;

      > button {
        outline: none;
        border: none;
        font-size: 17px;
        background: none;
        color: white;
        cursor: pointer;

        width: 100%;
        font-weight: 550;

        @media (max-width: 605px) {
          font-size: 14px;
        }
      }

      @media (max-width: 605px) {
        padding: 13px 10px;
      }

      &:hover {
        transform: scale(1.02);
      }
    }

    @media (max-width: 605px) {
      > input {
        margin-top: 2%;
      }
    }
  }
`;

export const BoxZap = styled.div`
  background-color: white;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    background: #7cb407;

    outline: none;
    border: 1px;

    border-radius: 4px;
    padding: 15px 10px;
    width: 100%;

    transition: all 0.2s ease;

    /* padding-bottom: 40px; */

    margin-bottom: 40px;

    > button {
      outline: none;
      border: none;

      background: none;
      color: white;
      cursor: pointer;

      font-size: 18px;

      width: 100%;
      font-weight: 550;
    }

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  background-color: rgba(0, 0, 0, 0.3);

  min-width: 100%;
  min-height: 100%;
  z-index: 1500;

  top: 0px;
  margin: 0 auto;

  > span {
    svg {
      color: #fff;
    }
  }
`;
