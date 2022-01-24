import styled from "styled-components";

export const CardTip = styled.div`
  margin: 0px 5px 0px 5px;
  > a {
    margin: 0px 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 390px;
    flex: none;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
    }
  }
  > a:active,
  a:visited,
  a:link {
    text-decoration: none;
    color: var(--black);
  }
  > a > button {
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    max-width: 180px;
    width: 100%;
    border: none;
    color: var(--white);
    font-size: 15px;
    font-weight: 600;
    background: var(--blue);
    padding: 12px;
  }
`;

export const TipImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  > img {
    max-width: 180px;
  }
`;

export const TipInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 40px 0px;
  > h3 {
    padding: 1px 0px;
    font-size: 15px;
    font-weight: normal;
  }
  > p {
    padding: 1px 0px;
    font-size: 12px;
  }
  > h2 {
    padding: 1px 0px;
    font-weight: 700;
    font-size: 18px;
  }
`;
