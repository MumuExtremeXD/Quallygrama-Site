import styled from "styled-components";

import Capa from "../../images/capa.webp";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: 0 auto;

  position: relative;
`;

export const Section = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: 0 auto;

  position: relative;

  > h2 {
    font-size: 7.8rem;

    @media (max-width: 645px) {
      font-size: 4.6rem;
    }

    @media (max-width: 425px) {
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

  background-image: url(${Capa});
  background-repeat: no-repeat;
  background-attachment: fixed;

  background-position: top;
  background-size: auto;

  @media (min-width: 1441px) {
    background-attachment: scroll;
    background-size: cover;
  }

  @media (max-width: 425px) {
    background-position: top;
    height: 450px;
    background-size: auto;
  }

  @media (max-width: 425px) {
    height: 240px;
  }

  > img {
    user-select: none;

    width: 100%;
    max-height: 335px;

    overflow-x: hidden;
    position: absolute;
    bottom: 0px;

    margin: 0 auto;

    @media (max-width: 425px) {
      object-fit: cover;
      min-width: 300px;
    }
  }

  .Headline {
    max-width: 1440px;
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
      font-size: 2.5rem;
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

  > div {
    margin: 0 auto;
    padding: 0;
    border: 0;
    background: transparent;
    font-size: 100%;

    z-index: 4;

    max-width: 650px;
    width: 100%;
    min-width: 290px;

    display: block;
    padding: 0px 20px;

    @media (max-width: 425px) {
      padding: 0px 0px;
      max-width: 100%;
    }

    > section {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: 100%;
      height: 64px;

      border-radius: 8px;
      background: #fff;

      margin-top: 255px;
      box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);

      @media (max-width: 768px) {
        margin-top: 250px;
      }

      @media (max-width: 425px) {
        border-radius: 0px;
        margin-top: 210px;
      }

      > label > svg {
        margin-left: 25px;
        outline: none;
        font-size: 25px;
        cursor: pointer;
        fill: var(--third);
      }

      > input {
        outline: none;

        width: 100%;
        height: 55px;
        padding: 0px 15px 0px 15px;

        border: none;

        cursor: text;

        line-height: 28px;
        font-size: 17px;
        font-weight: 400;
      }
    }
  }
`;

export const CardTip = styled.div`
  margin: 0px;
  padding: 5px 0px;
  max-width: 1440px;
`;

export const TipImg = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 15px;
  grid-row-gap: 0px;

  @media (max-width: 425px) {
    grid-column-gap: 0px;
    grid-row-gap: 25px;

    display: flex;
    flex-direction: column;

    > .Img1,
    > .Img2 {
      grid-area: unset;

      > img {
        padding: 0px 15px 0px 15px;
        width: 100%;
        min-width: 320px;
      }
    }
  }

  > .Img1 {
    grid-area: 1 / 1 / 4 / 4;

    > img {
      cursor: pointer;
      width: 100%;
      max-width: 450px;
    }
  }

  > .Img2 {
    grid-area: 1 / 4 / 4 / 7;

    > img {
      cursor: pointer;
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

  > p {
    max-width: 900px;
    margin: 30px auto;

    padding: 1px 0px;
    font-size: 24px;

    line-height: 45px;

    text-align: justify;
    color: #555355;
  }

  @media (max-width: 425px) {
    padding: 20px 0 0 0;

    > p {
      max-width: 900px;
      margin: 30px auto;

      padding: 0px 15px 0px 15px;

      font-size: 1.2em;
      line-height: 45px;

      text-align: justify;
      color: #555355;
    }
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
    color: #555355;
    font-size: 20px;
  }

  margin-bottom: 40px;
`;

export const BackUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  cursor: pointer;

  background-color: var(--gray);
  border-radius: 100%;

  right: 20px;
  bottom: 25px;

  z-index: 9000;

  svg {
    fill: #fff;
    font-size: 3.9rem;
  }

  transition: all 0.2s ease;
  visibility: hidden;
  opacity: 0.6;

  @media (min-width: 320px) {
    &.scrollMenu {
      visibility: visible;
      box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.33);
    }

    &:hover {
      opacity: 1;
    }
  }
`;
