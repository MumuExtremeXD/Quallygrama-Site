import styled from "styled-components";

export const Container = styled.div`
  width: 100% !important;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: 0 auto;

  position: relative;

  color: #888388;

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
  max-width: 1240px;
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

  > h1 {
    color: var(--third);
  }

  > div {
    display: flex;
    align-items: center;
    gap: 30px 16px;

    > h3 {
      color: var(--fourth);
      font-size: 19px;
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

  .Image1 {
    border-radius: 13px 0px 0px 13px;
    height: 450px;
    width: 100%;
    object-fit: cover;

    grid-area: 1 / 1 / 7 / 7;
    cursor: pointer;
  }

  .Image2 {
    object-fit: cover;
    height: 220px;
    width: 100%;
    max-width: 350px;

    grid-area: 1 / 7 / 4 / 10;
    cursor: pointer;
  }

  .Image3 {
    border-radius: 0px 13px 0px 0px;
    object-fit: cover;
    height: 220px;
    width: 100%;
    max-width: 350px;

    grid-area: 1 / 10 / 4 / 13;
    cursor: pointer;
  }

  .Image4 {
    object-fit: cover;
    width: 100%;
    max-width: 350px;
    height: 220px;

    grid-area: 4 / 7 / 7 / 10;
    cursor: pointer;
  }
  .Image5 {
    object-fit: cover;
    width: 100%;
    max-width: 350px;
    height: 220px;
    border-radius: 0px 0px 13px 0px;

    grid-area: 4 / 10 / 7 / 13;
    cursor: pointer;
  }

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

    .Image1 {
      border-radius: 13px 0px 0px 13px;
      height: 347px;
      max-width: 100%;
      object-fit: cover;
    }

    .Image2 {
      object-fit: cover;
      height: 347px;
      max-width: 100%;
    }

    .Image3 {
      border-radius: 0px 13px 0px 0px;
      object-fit: cover;
      height: 347px;
      max-width: 100%;
    }

    .Image4 {
      object-fit: cover;
      max-width: 100%;
      height: 347px;
    }

    .Image5 {
      object-fit: cover;
      max-width: 100%;
      height: 347px;
      border-radius: 0px 0px 13px 0px;
    }
  }

  @media (max-width: 320px) {
    .Image1 {
      height: 300px;
    }

    .Image2 {
      height: 300px;
    }

    .Image3 {
      height: 300px;
    }

    .Image4 {
      height: 300px;
    }

    .Image5 {
      height: 300px;
    }
  }
`;

export const ProductBox = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;

  padding: 0px 25px 0px 5px;

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
      font-size: 1.5rem;
      color: var(--third);
    }

    > p {
      display: flex;
      gap: 0px 10px;

      text-align: center;
      font-size: 1.31rem;
      margin-bottom: 6%;

      > label {
        font-weight: 630;
        color: var(--fourth);
      }

      > .Price {
        text-decoration: line-through !important;
        color: rgb(113, 113, 113) !important;
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

      @media (max-width: 768px) {
        width: 100%;
      }

      > input {
        outline: none;
        border: 0.5px solid #ddd;

        border-radius: 4px;
        padding: 10px 8px;

        max-width: 250px;
        width: 100%;

        font-size: 18px;

        @media (max-width: 605px) {
          padding: 13px 10px;
          font-size: 14px;
        }
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

export const InputForm = styled.input`
  font-size: 18px;
  outline: none;
  border: 0.5px solid #ddd;
  border-radius: 4px;
  padding: 10px 8px;
  width: 100%;

  @media (max-width: 605px) {
    padding: 13px 10px;
    font-size: 14px;
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

  @media (max-width: 667px) {
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
    top: -5px;
    position: absolute;

    max-width: 70px;
    height: 70px;
    width: 100%;
    border-radius: 1000%;

    @media (max-width: 768px) {
      right: 10px;
      top: 10px;
    }

    @media (max-width: 667px) {
      display: none;
    }

    @media (max-width: 605px) {
      max-width: 90px;
      height: 90px;

      display: block;

      right: 0;
      top: 0;
      position: relative;
    }
  }

  > div {
    > h2 {
      color: var(--black);
      max-width: 350px;
      width: 100%;
    }

    > p {
      font-size: 18px;
      color: var(--fourth);
    }
  }

  @media (max-width: 605px) {
    flex-direction: row;
  }
`;

export const UlProduct = styled.ul`
  list-style: none;

  > li {
    margin-bottom: 15px;
    font-size: 18px;

    display: flex;
    align-items: center;
    gap: 0 8px;

    color: #888388;

    > i {
      font-size: 25px;
      color: var(--third);
    }
  }
`;

export const UlAplication = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  > li {
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 0 10px;

    color: #888388;

    > i {
      font-size: 25px;
      color: var(--third);
    }
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
  padding: 16px 10px 24px 14px;

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
      font-size: 20px;
      padding-right: 25px;
      line-height: 18px;

      > label {
        display: flex;
        gap: 0 10px;
        line-height: 25px;
        > .Price {
          font-size: 20.5px;
          text-decoration: line-through !important;
          color: rgb(113, 113, 113) !important;
        }

        > .PricePromotion {
          font-size: 20.5px;
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
      font-size: 18px;
      padding-right: 10px;
      line-height: 18px;

      > label {
        font-size: 18px;
        font-weight: 550;

        > .Price {
          font-size: 19px;
          text-decoration: line-through !important;
          color: rgb(113, 113, 113) !important;
        }

        > .PricePromotion {
          font-size: 19px;
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

    background: var(--third);
    color: white;

    border: none;
    height: 60px;
  }
`;
