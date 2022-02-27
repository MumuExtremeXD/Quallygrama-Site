import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 420px;

  user-select: none;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }

  a:active,
  a:visited {
    color: var(--primary);
  }

  cursor: pointer;
`;

export const BoxImg = styled.div`
  > img {
    border-radius: 6px;
    background: var(--white);

    height: auto;
    width: 100%;

    @media (max-width: 425px) {
      height: 320px;
      width: 390px;
    }

    @media (max-width: 375px) {
      height: 290px;
      width: 340px;
    }

    @media (max-width: 320px) {
      height: 260px;
      width: 300px;
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0 0 6px 6px;

  > h3 {
    font-size: 1.13rem;
    color: #444344;
    font-weight: 550;
  }

  > p {
    font-size: 1.13rem;
    font-weight: 500;
    color: var(--fourth);
  }

  @media (max-width: 320px) {
    align-items: flex-start;

    > h3 {
      font-size: 1rem;
    }

    > p {
      font-size: 1rem;
    }
  }
`;
