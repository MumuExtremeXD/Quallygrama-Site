import styled from "styled-components";

export const Container = styled.div`
  width: 100% !important;

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

    @media (max-width: 605px) {
      font-size: 3.6rem;
    }

    > span {
      color: var(--primary);
    }
  }
`;

export const Content = styled.div`
  margin-bottom: 60px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;

  justify-content: flex-start;
  flex-direction: column;

  > p {
    font-size: 1.15rem;
    padding: 0 15px;
  }
`;

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
`;

export const ProductHeader = styled.div`
  padding: 20px 0px 0px 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 30px 16px;

    > h3,
    > h4 {
      font-size: 16.3px;
      font-weight: 500;
    }
  }

  @media (max-width: 605px) {
    padding: 20px 0px 0px 15px;
  }

  @media (max-width: 375px) {
    padding: 20px 5px 0px 15px;

    > h1 {
      font-size: 30px;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 30px 0px;
    }
  }
`;

export const ProductImg = styled.div`
  padding: 20px 35px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;

  .Div1 {
    > img {
      border-radius: 13px 0px 0px 13px;
      height: 347px;
      width: 100%;
      object-fit: cover;
    }

    grid-area: 1 / 1 / 7 / 7;
  }

  .Div2 {
    > img {
      object-fit: cover;
      height: 166.5px;
      width: 100%;
      max-width: 350px;
    }

    grid-area: 1 / 7 / 4 / 10;
  }

  .Div3 {
    > img {
      border-radius: 0px 13px 0px 0px;
      object-fit: cover;
      height: 166.5px;
      width: 100%;
      max-width: 350px;
    }

    grid-area: 1 / 10 / 4 / 13;
  }

  .Div4 {
    > img {
      object-fit: cover;
      width: 100%;
      max-width: 350px;
      height: 166.5px;
    }
    grid-area: 4 / 7 / 7 / 10;
  }
  .Div5 {
    > img {
      object-fit: cover;
      width: 100%;
      max-width: 350px;
      height: 166.5px;
      border-radius: 0px 0px 13px 0px;
    }

    grid-area: 4 / 10 / 7 / 13;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProductImgMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    flex-wrap: nowrap;
    overflow-x: scroll;

    gap: 10px;

    padding: 20px 15px;

    &::-webkit-scrollbar {
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      display: none; /* Safari and Chrome */
    }

    > img {
      border-radius: 12px;
      width: 100%;
      height: 280px;
    }
  }
`;

export const ProductBox = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;

  padding: 0px 35px 0px 5px;

  @media (max-width: 605px) {
    padding: 0px 10px 0px 0px;
  }
`;

export const ProductForm = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 0px;

  position: -webkit-sticky;
  position: sticky;
  top: 60px;

  @media (max-width: 768px) {
    width: 38%;
  }

  @media (max-width: 605px) {
    display: none;
  }

  > form {
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

    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 30px 30px;
    border: 0.5px solid #ddd;
    box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.33);
    border-radius: 4px;

    @media (max-width: 768px) {
      padding: 20px 20px;
    }

    > input {
      outline: none;
      border: 0.5px solid #ddd;

      border-radius: 4px;
      padding: 10px 15px;

      width: 100%;
      font-size: 14px;

      @media (max-width: 605px) {
        padding: 13px 10px;
        font-size: 14px;
      }
    }

    > .form-group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      margin-top: 2%;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      > input {
        outline: none;
        border: 0.5px solid #ddd;

        border-radius: 4px;
        padding: 10px 8px;

        max-width: 250px;
        width: 100%;

        font-size: 15px;

        @media (max-width: 605px) {
          padding: 13px 10px;
          font-size: 14px;
        }
      }
    }

    > input {
      font-size: 15px;
      outline: none;
      border: 0.5px solid #ddd;
      border-radius: 4px;
      padding: 10px 8px;
      width: 100%;

      @media (max-width: 605px) {
        padding: 13px 10px;
        font-size: 14px;
      }
    }

    > span {
      > p {
        margin-top: 2%;
        font-size: 14px;
      }
    }

    > button {
      margin-top: 2%;
      background: var(--blue);

      outline: none;
      border: 1px;

      border-radius: 4px;
      font-size: 17px;

      color: white;

      cursor: pointer;
      padding: 20px 15px;
      width: 100%;

      transition: all 0.2s ease;

      @media (max-width: 605px) {
        padding: 13px 10px;
        font-size: 14px;
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
        margin-top: 4%;
      }
    }
  }
`;

export const ProductInfo = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 180px 0px 30px;

  @media (max-width: 768px) {
    width: 62%;
    padding: 0px 80px 0px 30px;
  }

  position: relative;

  > h3 {
    padding: 1px 0px;
    font-size: 15px;
    font-weight: normal;
  }
  > p {
    padding: 1px 0px;
    font-size: 12px;
  }
  > h2 {
    padding: 1px 0px;
    font-weight: 700;
    font-size: 18px;
  }

  @media (max-width: 605px) {
    width: 100%;
    padding: 10px 10px 0px 15px;
  }
`;

export const BoxDescription = styled.div`
  width: 100%;

  > p {
    font-size: 19px;
    line-height: 35px;
    text-align: justify;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    padding: 1px 0px;
    font-size: 19px;
    line-height: 35px;
    text-align: justify;
  }

  > img {
    right: 10%;
    top: -15px;
    position: absolute;

    max-width: 70px;
    height: 70px;
    width: 100%;
    border-radius: 1000%;

    @media (max-width: 768px) {
      right: 10px;
      top: 10px;
    }

    @media (max-width: 605px) {
      max-width: 90px;
      height: 90px;

      right: 0;
      top: 0;
      position: relative;
    }
  }

  @media (max-width: 605px) {
    flex-direction: row;
  }
`;

export const UlProduct = styled.ul`
  list-style: none;

  > li {
    font-size: 19px;
  }
`;

export const UlAplication = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  > li {
    font-size: 19px;
  }
`;

export const Divider = styled.div`
  border-top-color: rgb(221, 221, 221);
  border-top-width: 1px !important;
  border-top-style: solid !important;

  margin: 30px 0px;
`;

export const NotFoundContainer = styled.div`
  display: flex;

  flex-direction: center;

  max-width: 550px;

  > img {
    width: 100%;
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
  z-index: 5;

  top: 0px;
  margin: 0 auto;

  > span {
    svg {
      color: #fff;
    }
  }
`;

export const CardMobile = styled.div`
  display: none;
  background-color: #fff;
  padding: 16px 16px 24px 16px;

  border-top: 1px solid #ddd;

  @media (max-width: 604px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    height: 100px;

    position: fixed;
    bottom: 0;
    z-index: 4;

    > p {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      padding-right: 25px;
      line-height: 18px;

      > label {
        display: flex;
        gap: 0 10px;
        line-height: 25px;
        > .Price {
          font-size: 18px;
          text-decoration: line-through !important;
          color: rgb(113, 113, 113) !important;
        }

        > .PricePromotion {
          font-size: 18px;
          text-decoration: none !important;
          color: var(--black);
          font-weight: 550;
        }
      }
    }

    > button {
      width: 100%;
      max-width: 125px;

      border-radius: 6px;
      background: var(--primary);

      font-size: 16px;
      font-weight: 700;

      border: none;
      height: 60px;
    }
  }

  @media (max-width: 320px) {
    > p {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      padding-right: 10px;
      line-height: 18px;

      > label {
        font-size: 18px;
        font-weight: 550;

        > .Price {
          font-size: 17px;
          text-decoration: line-through !important;
          color: rgb(113, 113, 113) !important;
        }

        > .PricePromotion {
          font-size: 17px;
          text-decoration: none !important;
          color: var(--black);
          font-weight: 550;
        }
      }
    }
  }

  > button {
    width: 100%;
    max-width: 150px;

    background: var(--primary);

    border: none;
    height: 60px;
  }
`;
