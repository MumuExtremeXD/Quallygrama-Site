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
    font-size: 1.8rem;

    > img {
      max-width: 800px;
    }
  }
`;
