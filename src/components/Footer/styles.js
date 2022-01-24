import styled from "styled-components";

export const Container = styled.footer`
  max-width: 1440px;
  position: relative;
  width: 100%;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #eee;

  color: var(--black);
  bottom: 0;

  padding: 10px 0px 120px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  width: 25%;
  padding: 0px 55px;

  > h4 {
    font-size: 18px;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  > ul {
    list-style: none;

    > li {
      margin-bottom: 5px;

      > a {
        font-size: 16px;
        text-decoration: none;
        display: block;
        color: var(--black);
        text-transform: capitalize;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  background: #ddd;
  height: 65px;
  width: 100%;

  bottom: 0;
  padding: 24px;

  > h4 {
    text-align: center;
    font-size: 14px;
    font-weight: 300;
  }

  @media (max-width: 425px) {
    > h4 {
      font-size: 12px;
      font-weight: 300;
    }
  }
`;
