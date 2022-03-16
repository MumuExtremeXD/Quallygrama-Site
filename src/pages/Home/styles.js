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
  width: 100%;

  background: #fafafa;
  padding-top: 120px;

  @media (max-width: 768px) {
    padding-top: 90px;
  }

  @media (max-width: 425px) {
    padding-top: 85px;
  }

  > div {
    display: flex;

    justify-content: space-between;
    align-items: flex-start;

    max-width: 1440px;
    width: 100%;
    height: 100%;

    padding: 15px 40px 45px;

    @media (max-width: 768px) {
      padding: 15px 40px 15px;
      flex-wrap: wrap;
      justify-content: center;
    }

    @media (max-width: 680px) {
      padding: 15px 10px 15px;
    }

    > .ImgMobileVg {
      height: 100%;
      width: 100%;

      object-fit: cover;

      max-height: 720px;

      @media (max-width: 425px) {
        max-height: 820px;
      }

      @media (max-width: 768px) {
        padding: 0px 0px 25px;
      }
    }

    .GroupText {
      display: flex;
      justify-content: center;

      flex-direction: column;

      padding: 0px 5px;

      max-width: 580px;

      @media (max-width: 768px) {
        align-items: center;
      }

      > h1 {
        color: var(--primary);
        text-align: left;

        font-size: 2.6rem;
        line-height: 60px;
        font-weight: 600;
        letter-spacing: -0.02em;

        padding: 0px 15px 35px 0px;

        @media (max-width: 768px) {
          font-size: 1.6rem;
        }

        @media (max-width: 768px) {
          text-align: center;
          font-size: 1.8rem;
          padding: 15px 10px;
          line-height: 35px;
        }

        @media (max-width: 425px) {
          font-size: 1.4rem;
          line-height: 30px;
        }

        @media (max-width: 375px) {
          padding: 15px 0px;
          font-size: 1.5rem;
        }

        @media (max-width: 320px) {
          padding: 15px 0px;
          font-size: 1.23rem;
        }
      }

      > p {
        text-align: left;

        font-size: 1.5rem;
        line-height: auto;

        color: var(--gray);

        letter-spacing: -0.02em;
        padding: 0px 24px 10px 0px;

        @media (max-width: 768px) {
          font-size: 1.2rem;
          padding: 0px 10px 10px 10px;
          text-align: center;
        }

        @media (max-width: 375px) {
          font-size: 1rem;
          padding: 0px 5px 0px 5px;
        }
      }

      > a {
        margin-top: 15px;

        max-width: 200px;
        width: 100%;
        height: 60px;

        @media (max-width: 760px) {
          margin-bottom: 35px;
        }

        @media (max-width: 375px) {
          max-width: 180px;
        }

        > button {
          max-width: 200px;
          width: 100%;
          height: 60px;
          cursor: pointer;
          border-radius: 40px;

          font-size: 1.4em;
          font-weight: bold;
          color: var(--secondary);

          @media (max-width: 375px) {
            max-width: 180px;
            font-size: 1.3em;
          }

          border: none;

          background: var(--third);
        }
      }
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
  padding: 30px 0px 45px 0px;

  color: #888388;

  @media (max-width: 672px) {
    padding: 15px 0px 15px 0px;
  }

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

  @media (max-width: 672px) {
    > h1 {
      padding: 0 20px;
      font-size: 2.4em;
      margin-bottom: 0px;
      line-height: 50px;
    }
  }
`;

export const WrapperProducts2 = styled.div`
  max-width: 1440px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 20px 0px 0px 0px;

  color: #888388;

  @media (min-width: 1441px) {
    margin: 10px 0px 5vh 0px;
  }

  > h2 {
    text-align: center;
    font-size: 3em;
    padding: 40px 24px 0px;
    margin-bottom: 30px;
    font-weight: 560;

    > span {
      color: var(--fourth);
    }
  }

  @media (max-width: 672px) {
    > h2 {
      font-size: 1.9em;
      line-height: 40px;
      margin-bottom: 30px;
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
    padding: 0px 0px 25px 0px;
    margin-top: 0px;

    > h2 {
      text-align: center;
      font-size: 2.2em;
    }
  }
`;

export const WrapperText = styled.div`
  background-color: #fafafa;

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

  @media (max-width: 600px) {
    gap: 20px;
  }

  > p:first-child {
    max-width: 1440px;
    font-size: 2.6em;
    line-height: 40px;

    color: var(--third);
    padding: 0 180px;
    text-align: center;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }
  }

  > p {
    max-width: 1440px;
    font-size: 1.3em;

    padding: 0 180px;
    text-align: center;

    line-height: 30px;

    color: #333;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }

    @media (max-width: 600px) {
      padding: 15px 22px;
      font-size: 1em;

      text-align: justify;
    }
  }

  > a {
    max-width: 280px;
    width: 100%;
    height: 80px;
    cursor: pointer;
    border-radius: 40px;

    font-size: 1.4em;
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
    padding: 40px 0px 45px 0px;
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
