import styled from "styled-components";

/* Menu */

export const Nav = styled.div`
  position: fixed;
  margin: 0 auto;

  top: 0;
  right: 0;
  left: 0;

  z-index: 5;
  width: 100%;

  transition: all 0.2s ease-in-out;

  > div > div > i {
    color: #666366;
  }

  @media (min-width: 320px) {
    &.scrollMenu {
      background-color: white;
      box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.33);

      > div > div > ul > li > a,
      > a:active,
      > a:visited {
        color: #666366;
      }

      > div > div > i {
        color: #666366;
      }
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
  min-height: 120%;
  background-color: rgba(0, 0, 0, 0.33);

  cursor: pointer;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 15px 35px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    padding: 15px 18px 15px 10px;
  }

  > .logo > a {
    font-size: 20px;
    font-weight: 600;

    text-decoration: none;

    color: #888388;

    > img {
      margin-left: 15px;
      padding-top: 5px;
      width: 100%;
      max-width: 220px;

      @media (max-width: 425px) {
        max-width: 190px;
        margin-left: 0px;
      }
    }
  }

  > div {
    > i {
      color: var(--primary);
      font-size: 35px;
      cursor: pointer;
    }
  }

  > .icon {
    @media (min-width: 769px) {
      display: none;
    }
  }

  @media (max-width: 868px) {
    max-width: 100%;
  }
`;

export const DivMenuDesktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: inline-flex;
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
    right: 10px;
    top: 25px;
  }

  > li {
    list-style: none;
    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.16);
    }

    > a {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      > button {
        max-width: 180px;
        background: #7cb407;

        outline: none;
        border: none;

        border-radius: 4px;
        padding: 10px 0px;
        width: 100%;

        transition: all 0.2s ease;

        outline: none;
        border: none;
        font-size: 22px;

        color: white;
        cursor: pointer;
        font-weight: 500;
      }
    }
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

      color: var(--primary);

      cursor: pointer;

      &:hover {
        color: var(--primary);
      }
    }
  }

  right: ${({ menu }) => (menu ? "-200%" : "0")};

  height: 120%;
  width: 32%;

  background-color: #fff;
  display: block;

  text-align: right;
  transition: all 0.6s ease-in-out;
  overflow-y: hidden;

  @media (max-width: 868px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 70%;
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

export const UlDesktop = styled.ul`
  max-width: 1440px;
  margin: 0 auto;

  display: inline-flex;
  align-items: center;

  padding: 5px 10px 5px 10px;

  transition: all 0.4s ease;

  > li {
    list-style: none;
    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.16);
    }

    @media (max-width: 868px) {
      &:hover {
        transform: scale(1.1);
      }
    }

    > a {
      > button {
        background: #7cb407;

        outline: none;
        border: 1px;

        border-radius: 4px;
        padding: 20px 5px;
        width: 100%;

        transition: all 0.2s ease;

        outline: none;
        border: none;
        font-size: 17px;

        color: white;
        cursor: pointer;

        width: 100%;

        @media (max-width: 605px) {
          font-size: 14px;
        }
      }
    }

    > a,
    > a:active,
    > a:visited {
      font-size: 18px;
      font-weight: 500;
      margin-left: 25px;
      transition: all 0.3s;

      text-decoration: none;

      color: #888388;

      &:hover {
        color: var(--primary);
      }
    }
  }
`;
