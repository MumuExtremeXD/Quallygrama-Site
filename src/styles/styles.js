import styled from "styled-components";

export const WarningContainer = styled.div`
  position: fixed;
  border: none;

  z-index: 2000;

  width: 100%;
  bottom: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    bottom: 20px;
  }

  > div {
    background-color: var(--secondary);
    width: 100%;
    height: 100%;

    max-width: 1000px;

    display: ${({ menu }) => (menu ? "flex" : "none")};
    justify-content: center;

    padding: 25px 35px 35px 35px;

    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;

    > p {
      text-align: justify;
      padding-right: 25px;

      letter-spacing: 1px;
      line-height: 30px;
      margin-bottom: 15px;

      > a,
      > a:visited,
      > a:link,
      > a:active {
        color: var(--primary);
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0px 15px 20px 15px;

      > p {
        margin-top: 18px;
        text-align: justify;
        font-size: 16.5px;
      }
    }

    > button {
      max-width: 150px;
      width: 100%;

      border: none;
      background: var(--third);

      cursor: pointer;

      color: var(--secondary);
      font-size: 1.3rem;
      border-radius: 8px;

      @media (max-width: 768px) {
        font-size: 1.4rem;
        margin: 14px 0px 8px;
        padding: 12px;
        max-width: 100%;
      }
    }
  }
`;
