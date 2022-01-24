import styled from "styled-components";

import ImgTeste2 from "../../images/teste.webp";

export const Container = styled.div`
  max-width: 1440px;
  width: 100% !important;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary);

  margin: 0 auto;

  flex-direction: column;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  width: 100%;
  height: 100vh;

  background-color: var(--secondary);

  @media (min-width: 1440px) {
    max-height: 850px !important;
    height: 100%;
  }

  > .EffectBlack {
    width: 100%;

    @media (min-width: 1440px) {
      max-height: 850px !important;
    }
    height: 100vh;

    position: absolute;
    opacity: 1;
    transition: 0.5s ease;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    .GroupText {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction: column;

      padding: 0px 5px;

      > h1 {
        color: var(--secondary);
        text-align: center;

        font-size: 2.2rem;
        line-height: 45px;
        font-weight: 600;
        letter-spacing: -0.02em;

        max-width: 380px;

        padding: 0px 18px 50px 18px;

        @media (max-width: 390px) {
          font-size: 2.1rem;
        }

        @media (max-width: 357px) {
          font-size: 2rem;
        }

        @media (max-width: 343px) {
          font-size: 1.9rem;
        }

        @media (max-width: 331px) {
          line-height: 35px;
          font-size: 1.8rem;
        }
      }

      > a {
        max-width: 240px;
        width: 100%;
        height: 60px;
        > button {
          max-width: 240px;
          width: 100%;
          height: 60px;
          cursor: pointer;
          border-radius: 40px;

          font-size: 1.1em;
          font-weight: bold;
          color: var(--secondary);

          border: none;

          background: rgb(152, 203, 37);
          background: linear-gradient(
            79deg,
            rgba(152, 203, 37, 1) 0%,
            rgba(0, 209, 122, 1) 100%
          );
        }
      }
    }

    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4) 100%,
      rgba(0, 0, 0, 0) 0%
    );
  }

  > .VideoStyle {
    position: relative;
    display: inline-block;

    @media (min-width: 1440px) {
      max-height: 850px !important;
    }
    height: 100vh;
    width: 100%;

    overflow: hidden;

    > video {
      display: block;

      height: 100%;
      width: 100%;

      overflow: hidden;

      object-fit: cover;
    }
  }
`;

export const WrapperProducts1 = styled.div`
  margin-top: 20px;
  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 100%;

  border-radius: 50% 50% 0 0;
  padding: 40px 0px 25px 0px;

  > h1 {
    text-align: center;
    font-size: 3.1em;
    padding: 0 280px;
    margin-bottom: 30px;
    font-weight: 560;
    line-height: 55px;

    > span {
      color: var(--primary);
    }
  }

  @media (max-width: 768px) {
    > h1 {
      padding: 0 90px;
      font-size: 2.8em;
      line-height: 48px;
    }
  }

  @media (max-width: 425px) {
    padding: 20px 0px 15px 0px;
    margin-top: 40px;

    > h1 {
      text-align: left;
      padding: 0px 15px;
      font-size: 2.4em;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 320px) {
    > h1 {
      padding: 0px 15px;
      font-size: 2.6em;
      margin-bottom: 10px;
      line-height: 55px;
    }
  }
`;

export const WrapperProducts2 = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  border-radius: 50% 50% 0 0;
  padding: 40px 0px 0px 0px;

  > h2 {
    text-align: center;
    font-size: 3em;
    padding: 0 24px;
    margin-bottom: 30px;
    font-weight: 560;

    > span {
      color: var(--primary);
    }
  }

  > p {
    font-size: 1.2em;
    padding: 0 230px;
    text-align: justify;

    @media (max-width: 1024px) {
      padding: 0 38px;
    }
  }

  @media (max-width: 425px) {
    padding: 20px 0px 25px 0px;
    margin-top: 0px;
    > h2 {
      text-align: center;
      font-size: 2.2em;
    }
  }
`;

export const WrapperProducts3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  border-radius: 50% 50% 0 0;
  padding: 5px 0px 0px 0px;

  > h2 {
    text-align: center;
    font-size: 3em;
    padding: 0 24px;
    margin-bottom: 30px;
    font-weight: 560;
  }

  @media (max-width: 425px) {
    padding: 20px 0px 0px 0px;
    margin-top: 0px;
    > h2 {
      text-align: center;
      font-size: 2.2em;
    }
  }
`;

export const CardBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  border-radius: 50% 50% 0 0;
  padding: 15px 0px;
`;

export const Card = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  position: relative;
  border-radius: 50% 50% 0 0;

  @media (max-width: 425px) {
    margin-top: 5px;
  }
`;

export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  gap: 18px;
  width: 100%;

  > img {
    width: 100%;
    height: 100%;

    border-radius: 6px;
    max-width: 480px;
    max-height: 480px;
  }

  @media (max-width: 768px) {
    > img {
      width: 100%;
      height: 100%;

      border-radius: 6px;
      max-width: 360px;
      max-height: 360px;
    }
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`;

export const CardImg2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  width: 100%;
  margin: 0 auto;
  top: 0;

  background-image: url(${ImgTeste2});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: contain;
  margin: 0 auto;

  max-width: 1440px;
  height: 700px;

  @media (min-width: 1441px) {
    border-radius: 12px;
    height: 1000px;
    max-width: 100%;
  }

  @media (max-width: 425px) {
    padding: 0 15px;
    height: 420px;

    background-position: center center;
  }
`;

export const CardImg3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  width: 100%;
  gap: 24px;

  > img {
    border-radius: 12px;
    width: 310px;
    height: 300px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 0 15px;

    > img {
      border-radius: 12px;
      width: 90%;
      height: 270px;
    }
    justify-content: flex-start;
    align-items: flex-start;

    flex-wrap: nowrap;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      display: none; /* Safari and Chrome */
    }
  }

  @media (max-width: 425px) {
    padding: 0 15px;

    > img {
      border-radius: 12px;
      width: 90%;
      height: 270px;
    }
    justify-content: flex-start;
    align-items: flex-start;

    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`;

export const CardText2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  margin: 0 auto;

  > h2 {
    color: white;
    text-align: center;
    font-size: 3em;
    max-width: 650px;
    font-weight: 560;
  }

  @media (max-width: 425px) {
    padding: 0 25px;
    > h2 {
      font-size: 1.6em;
    }
  }
`;
