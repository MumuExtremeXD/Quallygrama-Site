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
  width: 100%;
  max-width: 1240px;

  display: flex;
  justify-content: center;

  gap: 10px;
  margin-top: 10%;
  padding: 0px 20px;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;

    align-items: center;
    text-align: justify;
  }
`;

export const ContentExplication = styled.div`
  width: 100%;
  max-width: 1240px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
  margin-top: 5%;
  padding: 0px 20px;
`;

export const ContentDivider = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 10px;
  margin-top: 5%;
  padding: 0px 20px;
`;

export const ContainerHalf = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  max-width: 600px;

  > img {
    width: 100%;
    min-width: 300px;
  }
`;

export const ContainerHalfText = styled.div`
  flex: 1;
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

  @media (max-width: 640px) {
    max-width: 380px;
  }
`;
