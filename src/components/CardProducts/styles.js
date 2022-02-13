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
      height: 330px;
      width: 400px;
    }

    @media (max-width: 375px) {
      height: 300px;
      width: 355px;
    }

    @media (max-width: 320px) {
      height: 300px;
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
    color: var(--black);
    font-weight: 550;
  }

  > p {
    font-size: 1.13rem;
    font-weight: 500;
    color: var(--third);
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
