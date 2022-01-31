import styled from "styled-components";

/* Menu */

export const Nav = styled.div`
  position: fixed;
  max-width: 1440px;
  margin: 0 auto;

  top: 0;
  right: 0;
  left: 0;

  z-index: 5;
  width: 100%;

  transition: all 0.3s ease-in-out;

  @media (min-width: 320px) {
    &.scrollMenu {
      background-color: var(--primary);
      box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.33);
    }
  }
`;

export const EffectOverlay = styled.div`
  position: absolute;
  max-width: 1440px;
  margin: 0 auto;

  top: 0;
  right: 0;
  left: 0;

  display: ${({ menu }) => (menu ? "none" : "block")};
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.33);

  cursor: pointer;
`;

export const Content = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 15px 15px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div > i {
    color: var(--secondary);
    font-size: 35px;
    cursor: pointer;
  }

  @media (max-width: 868px) {
    max-width: 100%;
  }
`;

export const MenuOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0 15px;

    font-size: 24px;
    font-weight: 600;

    text-decoration: none;
    color: var(--secondary);

    > i {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Ul = styled.ul`
  max-width: 1440px;
  margin: 0 auto;
  position: fixed;

  top: 0;

  @media (min-width: 2560px) {
    left: 800px;
    width: 25%;
  }

  display: inline-flex;
  padding: 80px 60px 80px 0px;

  transition: all 0.4s ease;

  @media (max-width: 425px) {
    padding: 70px 45px 80px 0px;
  }

  > .icon {
    display: none;
  }

  > div > i {
    color: var(--black);
    font-size: 40px;
    cursor: pointer;

    position: absolute;
    right: 40px;
    top: 30px;
  }

  > li {
    list-style: none;
    transition: all 0.4s ease;

    > a {
      font-size: 18px;
      font-weight: 500;
      margin-left: 25px;
      transition: all 0.3s;

      text-decoration: none;

      &:hover {
        color: var(--primary);
      }
    }
    > button {
      border: none;
      font-weight: 500;

      margin-left: 25px;
      background: transparent;

      font-size: 18px;
      color: var(--secondary);

      cursor: pointer;

      &:hover {
        color: var(--secondary);
      }
    }
  }

  right: ${({ menu }) => (menu ? "-100%" : "0")};

  height: 100%;
  width: 32%;

  background-color: #fff;
  display: block;

  text-align: right;
  transition: all 0.6s ease-in-out;
  overflow-y: hidden;

  @media (max-width: 868px) {
    width: 60%;
  }

  @media (max-width: 375px) {
    width: 80%;
  }

  > li {
    margin-top: 45px;
    > a {
      font-size: 25px;
      color: var(--black);
    }

    > button {
      background: transparent;
      font-size: 22px;
      color: var(--primary);
    }
  }

  > .icon {
    color: var(--primary);
    display: ${({ menu }) => (menu ? "none" : "block")};
  }
`;
