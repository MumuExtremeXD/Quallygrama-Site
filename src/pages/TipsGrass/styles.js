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

    @media (max-width: 425px) {
      font-size: 3.6rem;
    }

    > span {
      color: var(--primary);
    }
  }

  .Section {
    width: 100%;
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

  background: #fafafa;

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

    margin-top: 35px;

    > h2 {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--third);
    }

    > p {
      font-size: 1.2rem;
      color: var(--five);
    }

    @media (max-width: 768px) {
      margin-top: 18px;

      > h2 {
        font-size: 1.9rem;
      }

      > p {
        font-size: 1rem;
      }
    }

    @media (max-width: 425px) {
      > h2 {
        padding: 60px 35px 40px 35px;
      }

      > p {
        display: none;
      }
    }

    @media (max-width: 320px) {
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
    }
  }
`;

export const InputForm = styled.input`
  outline: none;

  width: 100%;
  height: 55px;
  padding: 0px 15px 0px 15px;

  border: none;

  cursor: text;

  line-height: 28px;
  font-size: 17px;
  font-weight: 400;
`;

export const Wrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 80px;
  width: 100%;
  max-width: 1440px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  text-align: center;

  > p {
    font-size: 1.15rem;
    padding: 0 15px;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: grid;
  margin-top: var(--verticalPadding);
  padding: 0px 15px;

  gap: 30px 25px;

  grid-template-columns:
    minmax(350px, 1fr)
    repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: min-content;

  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns:
      minmax(340px, 1fr)
      repeat(auto-fill, minmax(340px, 1fr));
    grid-auto-rows: min-content;
  }

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 400px;

  user-select: none;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }

  a:active,
  a:visited {
    color: var(--primary);
  }

  cursor: pointer;
`;

export const BoxImg = styled.div`
  > img {
    border-radius: 6px;
    background: var(--white);

    height: auto;
    width: 100%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0 0 6px 6px;

  > h3 {
    font-size: 1.13rem;
    color: var(--black);
    font-weight: 550;
  }

  > p {
    font-weight: 600;
    font-size: 1.13rem;
    font-weight: 500;
    color: var(--third);
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: center;

  > p {
    padding-top: 40px;

    font-weight: bold;
    font-size: 3.4rem;

    color: var(--gray);
  }
`;
