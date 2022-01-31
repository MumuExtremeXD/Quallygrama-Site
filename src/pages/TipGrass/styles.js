import styled from "styled-components";

// import ImgTeste2 from "../../images/teste.webp";

import ImgTeste3 from "../../images/teste3.png";

export const Container = styled.div`
  width: 100% !important;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: 0 auto;

  position: relative;
  max-width: 1440px;

  > h2 {
    font-size: 7.8rem;

    @media (max-width: 645px) {
      font-size: 4.6rem;
    }

    @media (max-width: 605px) {
      font-size: 3.6rem;
    }

    > span {
      color: var(--primary);
    }
  }
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  width: 100%;
  height: 290px;

  margin: 0 auto;
  top: 0;

  background-image: url(${ImgTeste3});
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (min-width: 1441px) {
    background-attachment: scroll;
    margin: auto;
    max-width: 100%;
  }

  @media (max-width: 425px) {
    background-position: top;
    height: 450px;
  }

  @media (max-width: 425px) {
    height: 240px;
  }

  .Headline {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    position: absolute;
    text-align: center;
    margin: 0 auto;

    user-select: none;

    text-shadow: -3px 2px 4px rgba(0, 0, 0, 0.16);

    > h2 {
      font-size: 3.5rem;
      font-weight: 800;
      color: #fff;
    }

    > p {
      font-size: 1.2rem;
      color: #fff;
    }

    @media (max-width: 768px) {
      > h2 {
        font-size: 1.9rem;
      }

      > p {
        font-size: 1rem;
        color: #fff;
      }
    }

    @media (max-width: 425px) {
      > h2 {
        font-size: 1.8rem;
        padding: 60px 10px 40px 10px;
      }

      > p {
        display: none;
      }
    }
  }
`;

export const CardTip = styled.div`
  margin: 0px;
  padding: 5px 0px;
`;

export const TipImg = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 15px;
  grid-row-gap: 0px;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;

    > .Img1,
    > .Img2 {
      grid-area: unset;

      > img {
        width: 100%;
        min-width: 320px;
      }
    }
  }

  > .Img1 {
    grid-area: 1 / 1 / 4 / 4;

    > img {
      width: 100%;
      max-width: 450px;
    }
  }

  > .Img2 {
    grid-area: 1 / 4 / 4 / 7;

    > img {
      width: 100%;
      max-width: 450px;
    }
  }
`;

export const TipInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0px 20px 0px 20px;

  > h2 {
    font-size: 4.8rem;
    text-align: center;
  }
  > h3 {
    padding: 1px 0px;
    font-size: 15px;
    font-weight: normal;
  }

  > p {
    max-width: 900px;
    margin: 40px auto;

    padding: 1px 0px;
    font-size: 16px;

    text-align: justify;
  }
`;

export const UlAplication = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  > li {
    font-size: 19px;
  }

  margin-bottom: 40px;
`;
