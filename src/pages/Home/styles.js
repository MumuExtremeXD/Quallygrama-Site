import styled from "styled-components";

export const Container = styled.div`
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

        font-size: 3.8rem;
        line-height: 70px;
        font-weight: 600;
        letter-spacing: -0.02em;

        max-width: 650px;

        padding: 0px 18px 40px 18px;

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

          font-size: 1.6em;
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
  max-width: 1440px;
  margin-top: 20px;
  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 100%;

  border-radius: 50% 50% 0 0;
  padding: 60px 0px 45px 0px;

  color: #888388;

  > h1 {
    text-align: center;
    font-size: 3.1em;
    padding: 0 280px;
    margin-bottom: 30px;
    font-weight: 560;
    line-height: 55px;

    > span {
      color: var(--fourth);
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
      padding: 0px 15px;
      font-size: 2rem;
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
  max-width: 1440px;
  margin: 20px 0px 15vh 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 0px 0px 0px 0px;

  color: #888388;

  @media (min-width: 1441px) {
    margin: 20px 0px 5vh 0px;
  }

  > h2 {
    text-align: center;
    font-size: 3em;
    padding: 0 24px;
    margin-bottom: 30px;
    font-weight: 560;

    > span {
      color: var(--fourth);
    }
  }

  > p {
    font-size: 1.2em;
    padding: 0 180px;
    text-align: center;

    @media (max-width: 1024px) {
      padding: 0 20px;
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

export const WrapperText = styled.div`
  margin: 10px 0px 10vh 0px;

  background-color: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-direction: column;

  width: 100%;
  padding: 40px 0px 80px;

  @media (min-width: 1441px) {
    margin: 20px 0px 5vh 0px;
  }

  > p:first-child {
    max-width: 1440px;
    font-size: 2.6em;
    padding: 0 180px;
    text-align: center;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }
  }

  > p {
    max-width: 1440px;
    font-size: 1.1em;
    padding: 0 180px;
    text-align: center;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }
  }

  > a {
    max-width: 280px;
    width: 100%;
    height: 80px;
    cursor: pointer;
    border-radius: 40px;

    font-size: 1.2em;
    font-weight: 500;
    color: var(--secondary);

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border: none;
    padding: 40px 60px;

    background: var(--fourth);
  }

  @media (max-width: 425px) {
    padding: 20px 0px 25px 0px;
    margin-top: 0px;
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

  width: 100%;
  gap: 20px;

  > a > img {
    border-radius: 12px;
    width: 360px;
    height: 305px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    gap: 12px;

    > a > img {
      border-radius: 12px;
      width: 420px;
      height: 370px;
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

    > a > img {
      border-radius: 12px;
      width: 380px;
      height: 370px;
    }
    justify-content: flex-start;
    align-items: flex-start;

    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`;

export const CardImg3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  width: 100%;
  gap: 16px;

  > a > img {
    border-radius: 12px;
    width: 320px;
    height: 290px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 0 15px;

    > a > img {
      border-radius: 12px;
      width: 320px;
      height: 275px;
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

    > a > img {
      border-radius: 12px;
      width: 320px;
      height: 280px;
    }
    justify-content: flex-start;
    align-items: flex-start;

    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`;
