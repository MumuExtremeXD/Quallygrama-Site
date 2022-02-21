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
    max-width: 840px;
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
