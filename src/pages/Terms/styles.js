import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: justify;
  > h2 {
    text-align: justify;
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 440px;
  > img {
    width: 100%;
  }
`;

export const TextBox = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 60px 80px 60px;

  > h2 {
    font-size: 18px;
    margin: 15px 0px;
    color: var(--black);
  }

  > p {
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 30px;
    margin-bottom: 15px;
  }

  > h3 {
    font-size: 18px;
    margin: 15px 0px;
    color: var(--black);
  }

  > Ul {
    list-style: none;

    > li {
      margin-bottom: 15px;
      line-height: 35px;
    }
  }

  @media (max-width: 425px) {
    padding: 50px 30px 0px 30px;
  }
  @media (max-width: 320px) {
    padding: 50px 20px 0px 20px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 290px;

  background-color: var(--primary);
  > a {
    max-width: 340px;
    > img {
      transition: all ease 0.3s;
      width: 100%;
    }
  }
  :hover {
    > a > img {
      transform: scale(1.02);
    }
  }
`;
