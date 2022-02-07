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
  margin-bottom: 60px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;

  justify-content: flex-start;
  flex-direction: column;

  > p {
    font-size: 1.15rem;
    padding: 0 15px;
  }
`;


export const BoxInformation = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;

  justify-content: flex-start;
  flex-direction: column;

`;