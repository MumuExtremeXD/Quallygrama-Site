import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10% 0 6% 0;
  > a {
    > p {
      font-size: 1.8rem;
    }

    > img {
      width: 100%;
      max-width: 800px;
    }
  }

  @media (max-width: 425px) {
    margin: 25% 0 6% 0;

    > a {
      > p {
        font-size: 1.8rem;
        margin: 10px 0 45px 0;
      }

      > img {
        padding: 10px;
      }
    }
  }
`;
