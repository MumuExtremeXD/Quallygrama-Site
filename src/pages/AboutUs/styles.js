import styled from "styled-components";

export const Container = styled.div`
  width: 100% !important;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin: 0 auto;

  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;

  display: flex;
  justify-content: center;

  gap: 10px;
  margin-top: 145px;
  padding: 0px 20px;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;

    align-items: center;
    text-align: justify;

    margin-top: 75px;
    padding: 0px 10px;
  }
`;

export const ContentExplication = styled.div`
  width: 100%;
  max-width: 1240px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
  margin-bottom: 25px;
`;

export const ContentDivider = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 10px;
  margin-top: 65px;
  padding: 0px;

  @media (max-width: 685px) {
    margin-top: 85px;
  }

  @media (max-width: 425px) {
    margin-top: 65px;
  }
`;

export const ContainerHalf = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  max-width: 600px;

  margin-top: 25px;

  > img {
    padding: 0px 20px;
    width: 100%;
    min-width: 300px;
  }

  @media (max-width: 600px) {
    margin-top: 45px;
  }
`;

export const ContainerHalfText = styled.div`
  flex: 1;

  > h2 {
    padding: 0 60px;
    font-size: 2.4em;

    margin-bottom: 15px;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }

    @media (max-width: 640px) {
      padding: 0px 5px;
    }

    @media (max-width: 350px) {
      font-size: 2.3em;
      color: var(--third);
    }
  }

  > p {
    font-size: 1.2em;
    padding: 0 60px;
    text-align: justify;

    color: #888388;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }

    @media (max-width: 640px) {
      padding: 0px 5px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 35px;
  }
`;

export const WrapperText = styled.div`
  margin: 10px 0px 10vh 0px;

  width: 100%;
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
    color: #888388;

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

export const WrapperReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;

  margin: 10px 0px 60px 0px;
  gap: 15px 40px;

  text-align: justify;

  @media (max-width: 640px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin: 10px 0px 15px 0px;
  }
`;

export const WrapperNormal = styled.div`
  display: flex;
  gap: 15px 40px;

  margin: 10px 0px 60px 0px;
  text-align: justify;

  @media (max-width: 640px) {
    justify-content: center;
    align-items: center;

    flex-direction: row-reverse;
    flex-wrap: wrap;

    margin: 10px 0px 15px 0px;
  }
`;

export const WrapperImg = styled.div`
  max-width: 370px;

  > img {
    width: 100%;
  }

  @media (max-width: 640px) {
    > img {
      max-width: 380px;
    }
  }
`;

export const WrapperFeature = styled.div`
  flex: 1;
  max-width: 600px;

  > p {
    font-size: 1.1em;
    padding: 0 20px;
    text-align: justify;

    color: #888388;

    @media (max-width: 1024px) {
      padding: 0 20px;
    }

    @media (max-width: 640px) {
      padding: 0px;
    }
  }

  @media (max-width: 640px) {
    padding: 0px;
    max-width: 380px;
  }
`;
